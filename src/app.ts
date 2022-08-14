import { Request, Response } from 'express';
import config from 'config';
import connect from './utils/database';
import logger from './utils/logger';
import routes from './routes/routes';
// const jwt = require('jwt');

const express = require('express');
const http = require('http');

// const auth = require('./src/middleware/auth');

const port = config.get<number>('port');
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('<h1>Welcome</h1>');
});

// app.post('/welcome', auth, (req: Request, res: Response) => {
//   res.status(200).send('Welcome');
// });

// app.post('/register', async (req: Request, res: Response) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     if (!(email && password && firstName && lastName)) {
//       res.status(400).send('All inputs is required');
//     }

//     const oldUser = User.findOne({ email });

//     if (oldUser) {
//       return res.status(409).send('User Already Exist. Please Login');
//     }

//     const encryptedPassword = await bcrypt.hash(password, 10);

//     const user: IUser = await User.create({
//       firstName,
//       lastName,
//       email: email.toLowerCase(),
//       password: encryptedPassword,
//     });

//     const token = jwt.sing({user_id: user.id, email}, process.env.TOKEN_KEY, {expiresIn: '2h'}),
//     user.token = token;

//     res.status(201).json(user);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post('/login', (req: Request, res: Response) => {
//   try {
//     const {email, password} = req.body;

//     if(!(email && password)) {
//       res.status(400).send("All input is required");
//     }

//     const user = await User.findOne({email});

//     if( user && (await bcrypt.compare(password, user.password))) {

//       const token = jwt.sing({
//         user_id: user.id, email}, process.env.TOKEN_KEY, {expiresIn: '2h'}
//       );
//       res.status(200).json(user);
//     }
//       res.status(400).send("Invalid Credentials");
//   } catch (error: Error) {
//     console.log(error);
//   }
// });

const httpServer = http.createServer(app);

httpServer.listen(port, async () => {
  logger.info(`The server is running on port http://localhost:${port}/`);
  await connect();
  routes(app);
});
