import { Express, Request, Response } from 'express';
import { createUserHandler } from '../controllers/UserController';
import validateResource from '../middleware/validateResource';
import { createUserSchema } from '../schemas/UserSchema';

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.post('/api/users', validateResource(createUserSchema), createUserHandler);
}

export default routes;
