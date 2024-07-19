import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: String,
    amount: Number,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);
