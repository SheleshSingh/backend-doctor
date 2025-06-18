import app from './src/app';
import connectCloudinary from './src/config/cloudinary';
import { config } from './src/config/config';
import connectDb from './src/config/db';

const startServer = async () => {
  try {
    await connectDb();
    await connectCloudinary();
    const port = config.port;
    app.get('/', (req, res) => {
      res.send('Doctor App Backend is running');
    });
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

startServer();
