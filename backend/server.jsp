import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import accountRoutes from './routes/accounts.js';
import journalRoutes from './routes/journals.js';
import businessRoutes from './routes/business.js';
import branchRoutes from './routes/branch.js';
import reportRoutes from './routes/reports.js';

import { errorHandler } from './middleware/error.js';

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/businesses', businessRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/reports', reportRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
