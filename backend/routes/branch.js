const express = require('express');
const { createBranch, getBranches } = require('../controllers/branchController.js');
const { protect } = require('../middleware/auth.js');

const router = express.Router();

router.post('/', protect, createBranch);
router.get('/', protect, getBranches);

module.exports = router;
