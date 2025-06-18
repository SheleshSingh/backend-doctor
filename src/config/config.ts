import { config as conf } from 'dotenv';
conf();
const _config = {
  databaseUrl: process.env.MONGODB_URI,
  port: process.env.PORT || 8000,
};
export const config = Object.freeze(_config);
