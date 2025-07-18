const Branch = require('../models/Branch.js');

const createBranch = async (req, res) => {
  const branch = new Branch(req.body);
  try {
    const saved = await branch.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getBranches = async (req, res) => {
  const branches = await Branch.find().populate('business');
  res.json(branches);
};

module.exports = {
  createBranch,
  getBranches
};
