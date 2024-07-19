import { useMutation, useQueryClient } from "react-query";
import { type z } from "zod";

import { AxiosInstance } from "@/lib/api";

import { type transactionSchema, type CreateTransactionResponse } from "../types";

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateTransactionResponse, Error, z.infer<typeof transactionSchema>>(
    async (transaction) => {
      const response = await AxiosInstance.post<CreateTransactionResponse>("/transactions", transaction);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("balance");
      },
    },
  );
};
