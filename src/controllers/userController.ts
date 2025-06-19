import userModel from '../models/useModel';
import asyncHandler from '../utils/asyncHandler';
import CustomError from '../utils/customError';
import { userSchemaZod } from '../validators/userValidation';

const createUser = asyncHandler(async (req, res, next) => {
  try {
    const userValidation = userSchemaZod.parse(req.body);
    if (!userValidation) throw new CustomError('Invalid user data', 400);

    const { name, email, password, image, address, gender, dob, phone } =
      req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) throw new CustomError('User already exists', 400);
    let user = await userModel.create({
      name,
      email,
      password,
      image,
      address,
      gender,
      dob,
      phone,
    });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    next(error);
  }
});
export default createUser;
