import mongoose, { Model, Schema } from 'mongoose';


interface User {
  name: string;
  email: string;
  password: string;
  image: string;
  address: object;
  gender: string;
  dob: string;
  phone: string;
}
const userSchema: Schema<User> = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: Object, required: true },
  gender: { type: String, default: 'not selected' },
  dob: { type: String, default: 'not selected' },
  phone: { type: String, default: '0000000' },
});
const userModel: Model<User> =
  mongoose.models.user || mongoose.model<User>('user', userSchema);
export default userModel;
