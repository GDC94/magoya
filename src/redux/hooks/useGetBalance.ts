import { useQuery } from "@tanstack/react-query";

import { AxiosInstance } from "@/lib/api";

import { type GetBalanceResponse } from "../types";

const fetchBalance = async (accountId: string): Promise<GetBalanceResponse> => {
  const response = await AxiosInstance.get<GetBalanceResponse>(`/account-balance/${accountId}`);

  return response.data;
};

export const useGetBalance = (accountId: string) => {
  return useQuery({
    queryKey: ["balance", accountId],
    queryFn: () => fetchBalance(accountId),
  });
};
