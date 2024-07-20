import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  readonly password: string;
  region: string;
  district: string;
  createAt: Date;
}
