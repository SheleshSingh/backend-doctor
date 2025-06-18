import { doctorSchemaZod } from '../models/doctorModel';
import doctorModel from '../models/doctorModel';
import asyncHandler from '../utils/asyncHandler';

const createDoctor = asyncHandler(async (req, res, next) => {
  const parsedData = doctorSchemaZod.parse(req.body);
  const newDoctor = new doctorModel(parsedData);
  await newDoctor.save();
  res
    .status(201)
    .json({ message: 'Doctor created successfully', data: newDoctor });
});
export default createDoctor;
