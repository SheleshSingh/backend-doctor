import { z } from 'zod';
export const doctorSchemaZod = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().trim().min(5).max(100).email(),
  password: z.string().min(6).max(100),
  image: z.string().trim().min(2).max(100),
  speciality: z.string().trim().min(2).max(100),
  degree: z.string().trim().min(2).max(100),
  experience: z.string().trim().min(2).max(100),
  about: z.string().trim().min(2).max(500),
  available: z.boolean(),
  fees: z.number().min(0),
  address: z.record(z.string(), z.any()),
  date: z.number().int().min(0),
  slots_booked: z.record(z.string(), z.any()).optional(),
});
