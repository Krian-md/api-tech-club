import { Request, Response } from 'express';
import { createUserInput } from '../schemas/UserSchema';
import { createUser } from '../services/UserService';
import logger from '../utils/logger';

export async function createUserHandler(
  req: Request<
    Record<string, never>,
    Record<string, never>,
    createUserInput['body']
  >,
  res: Response,
) {
  try {
    const user = await createUser(req.body);
    return user;
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
