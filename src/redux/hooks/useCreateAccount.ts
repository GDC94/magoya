import { type z } from "zod";
import { useMutation } from "react-query";

import { AxiosInstance } from "@/lib/api";

import { type accountSchema, type CreateAccountResponse } from "../types";

export const useCreateAccount = () => {
  return useMutation<CreateAccountResponse, Error, z.infer<typeof accountSchema>>(async (account) => {
    const response = await AxiosInstance.post<CreateAccountResponse>("/accounts", account);

    return response.data;
  });
};
