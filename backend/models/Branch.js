const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  location: String
}, { timestamps: true });

module.exports = mongoose.model('Branch', branchSchema);
