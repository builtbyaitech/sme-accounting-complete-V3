const Business = require('../models/Business.js');

const createBusiness = async (req, res) => {
  const business = new Business(req.body);
  try {
    const saved = await business.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getBusinesses = async (req, res) => {
  const businesses = await Business.find();
  res.json(businesses);
};

module.exports = {
  createBusiness,
  getBusinesses
};