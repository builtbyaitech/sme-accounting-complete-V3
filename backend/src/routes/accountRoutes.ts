import express from 'express';
import {
  getAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
  getAccountCategories,
  getAccountTypes,
  getAccountBalances,
} from '../controllers/accountController';

const router = express.Router();

// Account CRUD routes
router.get('/', getAccounts);
router.get('/categories', getAccountCategories);
router.get('/types', getAccountTypes);
router.get('/balances', getAccountBalances);
router.get('/:id', getAccountById);
router.post('/', createAccount);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

export default router; 