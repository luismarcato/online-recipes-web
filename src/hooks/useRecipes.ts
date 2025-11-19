import api from "@/services/api";
import type { Recipe } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export function useRecipes(
  difficulty: string,
  time: string,
  category: string,
  title: string
) {
  return useQuery<Recipe[]>({
    queryKey: ["recipes", difficulty, time, category, title],
    queryFn: async () => {
      const response = await api.get("/recipes", {
        params: {
          difficulty,
          time,
          category,
          title,
        },
      });
      return response.data;
    },
  });
}

