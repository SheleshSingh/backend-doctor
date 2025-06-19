import doctorModel from '../models/doctorModel';
import asyncHandler from '../utils/asyncHandler';
import CustomError from '../utils/customError';
// import { doctorSchemaZod } from '../validators/doctorsValidation';

const addDoctor = asyncHandler(async (req, res) => {
  //   const doctorValidation = doctorSchemaZod.parse(req.body);
  //   if (!doctorValidation) throw new CustomError('Invalid doctor data', 400);
  const {
    name,
    email,
    password,
    speciality,
    degree,
    experience,
    about,
    available,
    fees,
    address,
  } = req.body;
  const imageFile = req.file;
  if (!imageFile) {
    throw new CustomError('Image file is required', 400);
  }
  if (
    !name ||
    !email ||
    !password ||
    !speciality ||
    !degree ||
    !experience ||
    !about ||
    !available ||
    !fees ||
    !address
  ) {
    throw new CustomError('Please provide all required fields', 400);
  }
  const existingDoctor = await doctorModel.findOne({ email });
  if (existingDoctor) {
    throw new CustomError('Doctor with this email already exists', 400);
  }
  console.log(
    {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
    },
    imageFile
  );
});
export { addDoctor };

