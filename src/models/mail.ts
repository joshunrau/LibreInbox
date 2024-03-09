import { z } from 'zod';

export const $Mail = z.object({
  date: z.date(),
  email: z.string(),
  id: z.string(),
  labels: z.string(),
  name: z.string(),
  read: z.boolean(),
  subject: z.string(),
  text: z.string()
});

export type Mail = z.infer<typeof $Mail>;
