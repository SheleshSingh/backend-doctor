import doctorModel from '../models/doctorModel';
import asyncHandler from '../utils/asyncHandler';
import CustomError from '../utils/customError';
import { doctorSchemaZod } from '../validators/doctorsValidation';

const createDoctor = asyncHandler(async (req, res, next) => {
  const doctorValidation = doctorSchemaZod.parse(req.body);
  if (!doctorValidation) throw new CustomError('Invalid doctor data', 400);
  const {
    email,
    name,
    password,
    image,
    speciality,
    degree,
    experience,
    about,
    available,
    fees,
    address,
    date,
    slots_booked,
  } = req.body;
  const existingDoctor = await doctorModel.find({ email });
  if (existingDoctor) {
    throw new CustomError('Doctor already exists', 400);
  }

  let doctor = await doctorModel.create({
    name,
    email,
    password,
    image,
    speciality,
    degree,
    experience,
    about,
    available,
    fees,
    address,
    date,
    slots_booked,
  });
  res.status(201).json({ message: 'Doctor created successfully', doctor });
});
export default createDoctor;
