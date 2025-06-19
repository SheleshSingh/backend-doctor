import express from 'express';
import { addDoctor } from '../controllers/adminController';
import upload from '../middlewares/multer';

const adminRoute = express.Router();

adminRoute.post('/add-doctor', upload.single('image'), addDoctor);
export default adminRoute;
