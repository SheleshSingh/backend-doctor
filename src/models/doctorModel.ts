import mongoose, { Document, Model, Schema } from 'mongoose';


interface Doctor extends Document {
  name: string;
  email: string;
  password: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  available: boolean;
  fees: number;
  address: object;
  date: number;
  slots_booked?: object;
}
// export const doctorSchemaZod = z.object({
//   name: z
//     .string()
//     .trim()
//     .min(2, 'Name is required')
//     .max(50, 'Name is too long'),
//   email: z
//     .string()
//     .trim()
//     .min(5, 'Email is required')
//     .max(100, 'Email is too long')
//     .email('Invalid email format'),
//   password: z
//     .string()
//     .min(6, 'Password is required')
//     .max(100, 'Password is too long'),
//   image: z
//     .string()
//     .trim()
//     .min(2, 'Image is required')
//     .max(100, 'Image is too long'),
//   speciality: z
//     .string()
//     .trim()
//     .min(2, 'Speciality is required')
//     .max(100, 'Speciality is too long'),
//   degree: z
//     .string()
//     .trim()
//     .min(2, 'Degree is required')
//     .max(100, 'Degree is too long'),
//   experience: z
//     .string()
//     .trim()
//     .min(2, 'Experience is required')
//     .max(100, 'Experience is too long'),
//   about: z
//     .string()
//     .trim()
//     .min(2, 'About is required')
//     .max(500, 'About is too long'),
//   available: z.boolean(),
//   fees: z.number().min(0, 'Fees must be a positive number'),
//   address: z.object({}).strict(),
//   date: z.number().int().min(0, 'Date must be a positive integer'),
//   slots_booked: z.object({}).default({}),
// });



const doctorSchema: Schema<Doctor> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, required: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
);
const doctorModel: Model<Doctor> =
  mongoose.models.doctor || mongoose.model<Doctor>('doctor', doctorSchema);
export default doctorModel;
