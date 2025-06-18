import { config as conf } from 'dotenv';
conf();
const _config = {
  databaseUrl: process.env.MONGODB_URI,
  port: process.env.PORT || 8000,
  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinarySecretKey: process.env.CLOUDINARY_SECRET_KEY,
};
export const config = Object.freeze(_config);
