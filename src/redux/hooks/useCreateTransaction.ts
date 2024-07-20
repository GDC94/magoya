import { useMutation } from "@tanstack/react-query";

import { AxiosInstance } from "@/lib/api";

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
        console.log(response)

        dispatch(createTransactionSuccess(response.data));

        return response.data;
      } catch (error) {
        dispatch(createTransactionFailure("Error creating transaction"));
        throw error;
      }
    },
  });
};
