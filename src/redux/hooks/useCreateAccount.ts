import { type z } from "zod";
import { useMutation } from "@tanstack/react-query";

import { AxiosInstance } from "@/lib/api";


import { type CreateAccountResponse } from "../types"; // Ajusta la ruta si es necesario

export const useCreateAccount = () => {
  return useMutation<CreateAccountResponse, Error, z.infer<typeof AccountZodSchemaType>>(async (account) => {
    const response = await AxiosInstance.post<CreateAccountResponse>("/account", account);

    return response.data;
  });
};
