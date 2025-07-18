const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  description: String,
  entries: [{
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    type: { type: String, enum: ['debit', 'credit'], required: true },
    amount: { type: Number, required: true }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Journal', journalSchema);
