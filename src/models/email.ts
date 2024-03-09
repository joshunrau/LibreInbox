import { z } from 'zod';

export const $Email = z.object({
  date: z.date(),
  email: z.string(),
  id: z.string(),
  labels: z.array(z.string()),
  name: z.string(),
  read: z.boolean(),
  subject: z.string(),
  text: z.string()
});

export type Email = z.infer<typeof $Email>;
