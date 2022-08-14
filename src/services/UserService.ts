import { DocumentDefinition } from 'mongoose';
import IUser from '../interfaces/auth/IUser';
import User from '../models/auth/User';

export async function createUser(
  input: DocumentDefinition<
    Omit<IUser, 'createAt' | 'updateAt' | 'comparePassword'>
  >,
) {
  try {
    return await User.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}
