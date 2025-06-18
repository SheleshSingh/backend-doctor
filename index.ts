import app from './src/app';
import { config } from './src/config/config';
import connectDb from './src/config/db';

const startServer = async () => {
  //database connection
  await connectDb();
  const port = config.port;
  //server connection
  app.get('/', (req, res) => {
    res.send('Doctor App Backend is running');
  });
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
};

startServer();
