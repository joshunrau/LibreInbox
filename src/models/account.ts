import { z } from 'zod';

export const $Account = z.object({
  email: z.string(),
  id: z.string(),
  label: z.string()
});

export type Account = z.infer<typeof $Account>;
