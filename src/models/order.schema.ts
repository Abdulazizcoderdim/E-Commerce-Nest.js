import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    totalPrice: String,
<<<<<<< HEAD
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: Number,
      },
    ],
=======
    products: {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: Number,
    },
>>>>>>> 3d0699ce6cb1a7938424efec339a7be9757f821f
  },
  {
    timestamps: true,
  },
);
