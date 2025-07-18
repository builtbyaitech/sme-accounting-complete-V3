const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  type: {
    type: String,
    enum: ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
    required: true
  },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', default: null },
  vatApplicable: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);