import { useMutation } from "@tanstack/react-query";

import { AxiosInstance } from "@/lib/api";
import queryClient from "@/lib/QueryClient";

import {
  createTransactionSuccess,
  createTransactionFailure,
  createTransactionStart,
} from "../features/transactionSlice";
import { type TransactionType } from "../types";

import { useAppDispatch } from "./useAppDispatch";

export const useCreateTransaction = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (transaction: TransactionType) => {
      dispatch(createTransactionStart());
      try {
        const response = await AxiosInstance.post<{ message: string; newBalance: number }>(
          "/transactions",
          transaction,
        );

        dispatch(createTransactionSuccess(response.data));
        queryClient.invalidateQueries(["balance", transaction.accountNumber] as never);

        return response.data;
      } catch (error) {
        dispatch(createTransactionFailure("Error creating transaction"));
        throw error;
      }
    },
  });
};
