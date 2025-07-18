const Journal = require('../models/Journal.js');

const createJournal = async (req, res) => {
  const journal = new Journal(req.body);
  try {
    const saved = await journal.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getJournals = async (req, res) => {
  const journals = await Journal.find().populate('entries.account');
  res.json(journals);
};

module.exports = {
  createJournal,
  getJournals
};
