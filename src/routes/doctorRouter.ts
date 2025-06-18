import express from 'express';
import createDoctor from '../controllers/doctorControllre';

const doctorRouter = express.Router();
doctorRouter.get('/create', createDoctor);
export default doctorRouter;

