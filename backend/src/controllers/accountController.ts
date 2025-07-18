import { Request, Response } from 'express';
import { Account, IAccount } from '../models/Account';

// Get all accounts with filtering and pagination
export const getAccounts = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 10,
      type,
      category,
      status,
      search,
    } = req.query;

    const query: any = {};

    if (type) query.type = type;
    if (category) query.category = category;
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { code: { $regex: search, $options: 'i' } },
      ];
    }

    const accounts = await Account.find(query)
      .sort({ code: 1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Account.countDocuments(query);

    res.json({
      accounts,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
      total,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching accounts', error });
  }
};

// Get account by ID
export const getAccountById = async (req: Request, res: Response) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching account', error });
  }
};

// Create new account
export const createAccount = async (req: Request, res: Response) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.status(201).json(account);
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Account code already exists' });
    } else {
      res.status(500).json({ message: 'Error creating account', error });
    }
  }
};

// Update account
export const updateAccount = async (req: Request, res: Response) => {
  try {
    const account = await Account.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json(account);
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Account code already exists' });
    } else {
      res.status(500).json({ message: 'Error updating account', error });
    }
  }
};

// Delete account
export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const account = await Account.findByIdAndDelete(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting account', error });
  }
};

// Get account categories
export const getAccountCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Account.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};

// Get account types
export const getAccountTypes = async (req: Request, res: Response) => {
  try {
    const types = await Account.distinct('type');
    res.json(types);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching account types', error });
  }
};

// Get account balances summary
export const getAccountBalances = async (req: Request, res: Response) => {
  try {
    const balances = await Account.aggregate([
      {
        $group: {
          _id: '$type',
          total: { $sum: '$balance' },
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(balances);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching account balances', error });
  }
}; 