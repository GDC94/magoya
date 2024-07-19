import { z } from "zod";

export const schema = z.object({
  name: z.string().min(2),
  lastName: z.string().min(3),
  initialBalance: z.string(),
  accountNumber: z.string().min(4).max(4),
});

export type FormFields = z.infer<typeof schema>;

export const initialBalanceRegex = /^(?:[1-9]\d{2,6}|10000000)$/;

export const accountNumbeRegex = /^\d{4}$/;
