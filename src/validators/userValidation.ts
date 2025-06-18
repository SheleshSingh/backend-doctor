import { z } from 'zod';

export const userSchemaZod = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  image: z.string().url(),
  address: z.object({}),
  gender: z.string().min(4).max(6),
  dob: z.string().min(10).max(10),
  phone: z.string().min(10).max(10),
});
