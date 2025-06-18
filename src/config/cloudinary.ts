import { v2 as cloudinary } from 'cloudinary';
import { config } from './config';

const connectCloudinary = async () => {
  if (
    !config.cloudinaryName ||
    !config.cloudinaryApiKey ||
    !config.cloudinarySecretKey
  ) {
    console.error(`Cloudinary configuration is missing`);
    process.exit(1);
  }
  cloudinary.config({
    cloud_name: config.cloudinaryName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinarySecretKey,
  });
  console.log('Cloudinary configured successfully');
};

export default connectCloudinary;
