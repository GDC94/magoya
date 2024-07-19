import { useMutation, type UseMutationResult } from "react-query";

import { AxiosInstance } from "@/lib/api";

interface TransactionDetails {
  accountId: string;
  type: "deposit" | "withdrawal";
  amount: number;
}

interface TransactionResponse {
  success: boolean;
}

const performTransaction = async (transactionDetails: TransactionDetails): Promise<TransactionResponse> => {
  const { data } = await AxiosInstance.post<TransactionResponse>("/api/transactions", transactionDetails);

  return data;
};

export const useTransaction = (): UseMutationResult<TransactionResponse, Error, TransactionDetails> => {
  return useMutation(performTransaction);
};
