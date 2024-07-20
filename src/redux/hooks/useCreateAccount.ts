import { useMutation } from "@tanstack/react-query";

import { AxiosInstance } from "@/lib/api";

import { type AccountType, type CreateAccountResponse } from "../types";
import { createAccountStart, createAccountSuccess, createAccountFailure } from "../features/accountSlice";

import { useAppDispatch } from "./useAppDispatch";

export const useCreateAccount = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (account: AccountType) => {
      dispatch(createAccountStart());
      try {
        const response = await AxiosInstance.post<CreateAccountResponse>("/account", account);

        dispatch(createAccountSuccess(response.data));

        return response.data;
      } catch (error) {
        dispatch(createAccountFailure("Error creating account"));
        throw error;
      }
    },
  });
};
