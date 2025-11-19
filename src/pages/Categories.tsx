import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { Clock } from "lucide-react";
import { categories, difficulties, preparationTimes } from "@/utils/constants";
import { useCategoryCounts } from "@/hooks/useCategoryCounts";
import { useCategoryFilters } from "@/hooks/useCategoryFilters";

const Categories = () => {
  const { difficulty, time, setDifficulty, setTime, searchParams } =
    useCategoryFilters();
  const { data } = useCategoryCounts(difficulty, time);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-background to-primary/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Nossas Categorias
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra receitas organizadas por tipo de culinária e preferências
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8 border-b border-border">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">
              Dificuldade
            </h3>
            <div className="flex gap-2 flex-wrap">
              {difficulties.map((diff) => (
                <Badge
                  key={diff.value}
                  variant={diff.value === difficulty ? "default" : "outline"}
                  className={
                    diff.value === difficulty
                      ? "cursor-pointer"
                      : "cursor-pointer hover:bg-muted"
                  }
                  onClick={() => setDifficulty(diff.value)}
                >
                  {diff.label}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">
              Tempo de Preparo
            </h3>
            <div className="flex gap-2 flex-wrap">
              {preparationTimes.map((timeOption) => (
                <Badge
                  key={timeOption.value}
                  variant={timeOption.value === time ? "default" : "outline"}
                  className={
                    timeOption.value === time
                      ? "cursor-pointer"
                      : "cursor-pointer hover:bg-muted"
                  }
                  onClick={() => setTime(timeOption.value)}
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {timeOption.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.slice(1).map((category) => {
            const Icon = category.icon;
            const params = new URLSearchParams(searchParams);
            params.set("category", category.value);

            return (
              <Card
                key={category.label}
                className="group p-0 gap-4 hover:shadow-md "
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-md">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} z-10 opacity-80`}
                    />
                    <img
                      src={category.image}
                      alt={`Categoria ${category.label}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm rounded-full p-3">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                  </div>
                </CardContent>
                <CardHeader className="px-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {category.label}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={`text-xs text-white ${
                        !data?.[category.value] ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
                      {!data
                        ? "..."
                        : data[category.value]
                        ? `${data[category.value]} receita(s)`
                        : "Nenhuma"}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground h-10">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="px-4 pb-4 pt-0 flex items-center gap-4 mt-auto">
                  <Link
                    className="w-full"
                    to={{
                      pathname: "/receitas",
                      search: `?${params.toString()}`,
                    }}
                  >
                    <Button className="w-full cursor-pointer" variant="outline">
                      Ver Receitas
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Categories;

