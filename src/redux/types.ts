import { z } from "zod";

export interface CreateAccountResponse {
  id: string;
  name: string;
  account_number: string;
  balance: number;
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
  name: z.string(),
  account_number: z.string().length(4),
});

export const transactionSchema = z.object({
  accountId: z.string(),
  type: z.enum(["deposit", "withdrawal"]),
  amount: z.number().positive(),
});
