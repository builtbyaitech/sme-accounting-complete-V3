const express = require('express');
const { createBusiness, getBusinesses } = require('../controllers/businessController.js');
const { protect } = require('../middleware/auth.js');

const router = express.Router();

router.post('/', protect, createBusiness);
router.get('/', protect, getBusinesses);

module.exports = router;