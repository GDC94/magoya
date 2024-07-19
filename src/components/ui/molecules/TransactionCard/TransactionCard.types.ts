import { z } from "zod";

export const transactionSchema = z.object({
  amount: z.string(),
  transactionType: z.enum(["deposit", "withdrawal"]),
});

export type TransactionFormFields = z.infer<typeof transactionSchema>;
