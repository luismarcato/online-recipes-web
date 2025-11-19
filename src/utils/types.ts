export interface RecipeBase {
  id: number;
  image: string;
  title: string;
  time: string;
  difficulty: string;
  category: string;
}

export interface Recipe extends RecipeBase {}
