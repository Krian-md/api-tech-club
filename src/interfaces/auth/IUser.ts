import mongoose from 'mongoose';

export default interface IUser extends mongoose.Document {
  // id: mongoose.Types.ObjectId;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  createAt: string;
  updateAt: string;
  role: string;
  token: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
