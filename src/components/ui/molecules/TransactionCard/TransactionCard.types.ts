import { z } from "zod";

export const transactionSchema = z.object({
  initialBalance: z.string(),
  accountNumber: z.string().min(4).max(4),
});

export type TransactionFormFields = z.infer<typeof transactionSchema>;
