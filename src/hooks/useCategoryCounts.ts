import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useCategoryCounts(difficulty: string, time: string) {
  return useQuery({
    queryKey: ["recipes", difficulty, time],
    queryFn: async () => {
      const response = await api.get("/recipes/categories", {
        params: {
          difficulty,
          time,
        },
      });
      return response.data;
    },
  });
}

