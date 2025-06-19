import express from 'express';
import doctorRouter from './routes/doctorRouter';
import adminRoute from './routes/adminRoute';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/admin', adminRoute);
app.use('/api/doctor', doctorRouter);
export default app;
