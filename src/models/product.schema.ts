import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
<<<<<<< HEAD
    image: String,
=======
>>>>>>> 3d0699ce6cb1a7938424efec339a7be9757f821f
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
