import mongoose from 'mongoose';
import { config } from './config';
const connectDb = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Database connected successfully');
    });
    mongoose.connection.on('error', (err) => {
      console.error('Database connection error:', err);
    });
    await mongoose.connect(config.databaseUrl as string);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};
export default connectDb;
