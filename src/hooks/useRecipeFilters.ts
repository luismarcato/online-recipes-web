import { useSearchParams } from "react-router";

export function useRecipeFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "ALL";
  const title = searchParams.get("title") || "";

  const setFilterParam = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    });
  };

  const setCategory = (value: string) => setFilterParam("category", value);
  const setTitle = (value: string) => setFilterParam("title", value);

  return { category, title, setCategory, setTitle, searchParams };
}

