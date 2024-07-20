import { z } from "zod";

export interface CreateAccountResponse {
  id: number;
  name: string;
  accountNumber: string;
  initialBalance: string;
}

export interface GetBalanceResponse {
  balance: number;
}

export interface CreateTransactionResponse {
  id: string;
  accountId: string;
  type: "deposito" | "transferencia";
  amount: number;
}

export const accountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  initialBalance: z.string().min(1, "Initial balance is required"),
  accountNumber: z.string().min(1, "Account number is required"),
});

export type AccountType = z.infer<typeof accountSchema>;

export const transactionSchema = z.object({
  accountNumber: z.string(),
  type: z.enum(["deposito", "transferencia"]),
  amount: z.number().positive(),
});

export type AccountZodSchemaType = z.infer<typeof accountSchema>;
