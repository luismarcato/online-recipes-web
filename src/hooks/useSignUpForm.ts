import { registerSchema } from "@/schemas/register-schema";
import api from "@/services/api";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useSignUpForm() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onSubmit: registerSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await api.post("/auth/signup", value);

        toast.success("Conta registrada com sucesso");

        navigate("/entrar");
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || "Falha ao registrar conta"
        );
      }
    },
  });

  return { form };
}

