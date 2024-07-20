import { z } from "zod";

export const transactionSchema = z.object({
  amount: z.string(),
  transactionType: z.enum(["deposito", "transferencia"]),
  accountNumber: z.string(),
});

export type TransactionFormFields = z.infer<typeof transactionSchema>;
