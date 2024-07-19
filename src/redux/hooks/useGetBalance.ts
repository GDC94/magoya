import { useQuery } from "react-query";

import { AxiosInstance } from "@/lib/api";

import { type GetBalanceResponse } from "../types";

export const useGetBalance = (accountId: string) => {
  return useQuery<GetBalanceResponse, Error>(["balance", accountId], async () => {
    const response = await AxiosInstance.get<GetBalanceResponse>(`/accounts/${accountId}/balance`);

    return response.data;
  });
};
