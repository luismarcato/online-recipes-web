import z from "zod";

export const loginSchema = z.object({
  email: z.email("Digite um email válido"),
  password: z.string().min(1, "Digite uma senha"),
});

