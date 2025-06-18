import mongoose from 'mongoose';
import { config } from './config';

mongoose.set('strictQuery', true);
let isListenerAttach = false;

const connectDb = async () => {
  try {
    if (!isListenerAttach) {
      mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
      });
      mongoose.connection.on('error', (err) => {
        console.error('Database connection error:', err);
      });
      mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
      });
      isListenerAttach = true;
    }

    await mongoose.connect(config.databaseUrl as string);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};
export default connectDb;
