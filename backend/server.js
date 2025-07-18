const express = require('express');
const mongoose = require('mongoose');
const app = express();

const authRoutes = require('./routes/auth');
const accountsRoutes = require('./routes/accounts');
const journalsRoutes = require('./routes/journals');
const reportsRoutes = require('./routes/reports');
const businessRoutes = require('./routes/business');
const branchRoutes = require('./routes/branch');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/accounts', accountsRoutes);
app.use('/api/journals', journalsRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/branch', branchRoutes);

// Only connect if not already connected (prevents multiple connections in tests)
if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    if (process.env.NODE_ENV !== 'test') {
      console.log('MongoDB connected');
    }
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });
}

module.exports = app;