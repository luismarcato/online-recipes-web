import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Informe seu nome"),
    email: z.email("Informe um email válido"),
    password: z.string().min(8, "Deve conter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirme a senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

