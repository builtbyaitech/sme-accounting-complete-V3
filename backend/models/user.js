const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'accountant', 'clerk', 'auditor'], default: 'clerk' },
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  branch: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
