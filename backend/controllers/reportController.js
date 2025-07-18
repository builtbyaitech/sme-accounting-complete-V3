const Journal = require('../models/Journal.js');

const getProfitLoss = async (req, res) => {
  const journals = await Journal.find().populate('entries.account');
  let income = 0, expense = 0;

  journals.forEach(j => {
    j.entries.forEach(e => {
      if (e.account.type === 'Revenue' && e.type === 'credit') income += e.amount;
      if (e.account.type === 'Expense' && e.type === 'debit') expense += e.amount;
    });
  });

  res.json({ income, expense, netProfit: income - expense });
};

module.exports = {
  getProfitLoss
};
