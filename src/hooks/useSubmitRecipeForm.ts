import { useForm } from "@tanstack/react-form";
import { recipeSchema } from "@/schemas/recipe-schema";
import { toast } from "sonner";
import type { RecipeFormValues } from "@/utils/types";
import api from "@/services/api";
import { useNavigate } from "react-router";

function buildFormData(value: RecipeFormValues) {
  const formData = new FormData();
  formData.append("title", value.title);
  formData.append("description", value.description);
  formData.append("category", value.category);
  formData.append("difficulty", value.difficulty);
  formData.append("time", String(value.time));
  formData.append("servings", String(value.servings));

  value.ingredients.forEach((ingredient) => {
    formData.append("ingredients[]", ingredient);
  });

  value.instructions.forEach((instruction) =>
    formData.append("instructions[]", instruction)
  );

  if (value.image) formData.append("image", value.image);

  return formData;
}

export function useSubmitRecipeForm() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      difficulty: "",
      time: "",
      servings: "",
      ingredients: [""],
      instructions: [""],
      image: null as File | null,
    },
    validators: {
      onSubmit: recipeSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const formData = buildFormData(value);

        const { data } = await api.post("/recipes", formData);

        toast.success(data.message);

        navigate("/receitas");
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Falha ao criar receita");
      }
    },
  });

  return { form };
}

