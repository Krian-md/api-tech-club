import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

const connect = () => {
  const dbUrl = config.get<string>('dbUrl');

  mongoose
    .connect(dbUrl)
    .then(() => {
      logger.info('Successfully connected to database');
    })
    .catch((error: Error) => {
      logger.error(error);
      process.exit(1);
    });
};

export default connect;

// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// }
