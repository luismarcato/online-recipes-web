import api from "@/services/api";
import type { RecipeDetailed } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export function useRecipeDetailed(id: string | undefined) {
  return useQuery<RecipeDetailed>({
    queryKey: ["recipe", id],
    queryFn: async () => {
      const response = await api.get(`/recipes/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
}

