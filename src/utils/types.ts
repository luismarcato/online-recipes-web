export interface RecipeBase {
  id: number;
  image: string;
  title: string;
  time: string;
  difficulty: string;
  category: string;
}

export interface Recipe extends RecipeBase {}

export interface RecipeDetailed extends RecipeBase {
  servings: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export interface RecipeFormValues extends Omit<RecipeDetailed, "id" | "image"> {
  image: File | null;
}
