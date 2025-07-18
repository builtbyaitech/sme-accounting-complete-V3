const Account = require('../models/Account.js');

const createAccount = async (req, res) => {
  const account = new Account(req.body);
  try {
    const saved = await account.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAccounts = async (req, res) => {
  const accounts = await Account.find().populate('parent');
  res.json(accounts);
};

module.exports = {
  createAccount,
  getAccounts
};