import { Document } from 'mongoose';
import { Product } from './product';

interface ProductOrder {
  product: Product;
  quantity: number;
}

export interface Order extends Document {
  owner: string;
  totalPrice: string;
  products: ProductOrder[];
}
