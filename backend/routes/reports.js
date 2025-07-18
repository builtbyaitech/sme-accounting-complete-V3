const express = require('express');
const { getProfitLoss } = require('../controllers/reportController.js');
const { protect } = require('../middleware/auth.js');

const router = express.Router();

router.get('/profit-loss', protect, getProfitLoss);

module.exports = router;