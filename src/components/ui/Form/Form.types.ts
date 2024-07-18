import { z } from "zod";

export const schema = z.object({
  name: z.string().min(2),
  lastName: z.string().min(3),
  initialBalance: z.number(),
  accountNumber: z.number().min(4).max(4),
});

export type FormFields = z.infer<typeof schema>;
