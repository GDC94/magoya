import { useMutation, type UseMutationResult } from "react-query";

import { AxiosInstance } from "@/lib/api";

interface AccountDetails {
  name: string;
  accountNumber: string;
}

interface AccountResponse {
  id: string;
}

const createAccount = async (accountDetails: AccountDetails): Promise<AccountResponse> => {
  const { data } = await AxiosInstance.post<AccountResponse>("/api/accounts", accountDetails);

  return data;
};

export const useCreateAccount = (): UseMutationResult<AccountResponse, Error, AccountDetails> => {
  return useMutation(createAccount);
};
