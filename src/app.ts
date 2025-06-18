import express from 'express';
import doctorRouter from './routes/doctorRouter';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/doctor', doctorRouter);
export default app;
