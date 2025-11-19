import { useAuth } from "@/context/AuthContext";
import { loginSchema } from "@/schemas/login-schema";
import { useForm } from "@tanstack/react-form";

export function useSignInForm() {
  const { signIn } = useAuth();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      await signIn(value);
    },
  });

  return { form };
}
