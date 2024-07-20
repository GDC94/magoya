import { useMutation } from "@tanstack/react-query";

import { AxiosInstance } from "@/lib/api";

import { type AccountType, type CreateAccountResponse } from "../types";

export const useCreateAccount = () =>
  useMutation({
    mutationFn: (account: AccountType) =>
      AxiosInstance.post<CreateAccountResponse>("/account", account).then((res) => res.data),
  });
