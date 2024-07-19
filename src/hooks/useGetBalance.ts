import { useQuery, type UseQueryResult } from "react-query";

import { AxiosInstance } from "@/lib/api";

interface BalanceResponse {
  balance: number;
}

const getBalance = async (accountId: string): Promise<BalanceResponse> => {
  const { data } = await AxiosInstance.get<BalanceResponse>(`/api/accounts/${accountId}/balance`);

  return data;
};

export const useGetBalance = (accountId: string): UseQueryResult<BalanceResponse, Error> => {
  return useQuery(["balance", accountId], () => getBalance(accountId), {
    enabled: !!accountId,
  });
};
