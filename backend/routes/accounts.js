const express = require('express');
const { createAccount, getAccounts } = require('../controllers/accountController.js');
const { protect } = require('../middleware/auth.js');

const router = express.Router();

router.post('/', protect, createAccount);
router.get('/', protect, getAccounts);

module.exports = router;