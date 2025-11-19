import { z } from "zod";

export const recipeSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  category: z.string().min(1, "Categoria é obrigatória"),
  difficulty: z.string().min(1, "Dificuldade é obrigatória"),
  time: z.string().transform((v) => Number(v)),
  servings: z.string().transform((v) => Number(v)),

  image: z.any().refine((file) => file instanceof File, "Imagem é obrigatória"),

  ingredients: z
    .array(z.string().min(1, "Ingrediente não pode ser vazio"))
    .min(1, "Informe ao menos um ingrediente"),

  instructions: z
    .array(z.string().min(1, "Passo não pode ser vazio"))
    .min(1, "Informe ao menos uma instrução"),
});

export type RecipeSchema = z.infer<typeof recipeSchema>;

