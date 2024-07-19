import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    useername: {
      type: String,
    },
    password: {
      type: String,
    },
    region: {
      type: String,
    },
    district: {
      type: String,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);
