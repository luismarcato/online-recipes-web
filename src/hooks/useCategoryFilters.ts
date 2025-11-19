import { useSearchParams } from "react-router";

export function useCategoryFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const difficulty = searchParams.get("difficulty") || "ALL";
  const time = searchParams.get("time") || "ALL";

  const setFilterParam = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    });
  };

  const setDifficulty = (value: string) => setFilterParam("difficulty", value);
  const setTime = (value: string) => setFilterParam("time", value);

  return { difficulty, time, setDifficulty, setTime, searchParams };
}

