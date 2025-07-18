const express = require('express');
const { createJournal, getJournals } = require('../controllers/journalController.js');
const { protect } = require('../middleware/auth.js');

const router = express.Router();

router.post('/', protect, createJournal);
router.get('/', protect, getJournals);

module.exports = router;
