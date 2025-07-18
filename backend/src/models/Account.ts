import mongoose, { Document, Schema } from 'mongoose';

export interface IAccount extends Document {
  code: string;
  name: string;
  type: 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';
  category: string;
  description?: string;
  balance: number;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

const accountSchema = new Schema<IAccount>(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v: string) => /^\d{4}$/.test(v),
        message: 'Account code must be 4 digits',
      },
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
accountSchema.index({ code: 1 });
accountSchema.index({ type: 1 });
accountSchema.index({ category: 1 });
accountSchema.index({ status: 1 });

export const Account = mongoose.model<IAccount>('Account', accountSchema); 