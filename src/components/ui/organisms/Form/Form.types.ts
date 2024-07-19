import { z } from "zod";

export const schema = z.object({
  name: z.string().min(2),
  initialBalance: z
    .string()
    .min(4, "Mínimo 4 caracteres")
    .regex(/^[1-9]\d{0,6}(\.\d{1,2})?$/, "Debe comenzar con un numero psitivo")
    .refine((val) => Number(val) >= 0, "No puede ser negativo"),
  accountNumber: z
    .string()
    .min(4, "Debe tener 4 caracteres")
    .max(4)
    .regex(/^\d{1,4}$/, "Máximo 4 caracteres"),
});

export type FormFields = z.infer<typeof schema>;
