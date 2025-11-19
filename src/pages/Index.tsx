import heroImage from "@/assets/hero-recipe.jpg";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/RecipeCard";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { categories } from "@/utils/constants";
import { LoadingState } from "@/components/LoadingState";
import { useCategoryFilters } from "@/hooks/useCategoryFilters";
import { useRecipeFilters } from "@/hooks/useRecipeFilters";
import { useRecipes } from "@/hooks/useRecipes";

export default function Index() {
  const { difficulty, time } = useCategoryFilters();
  const { title, category, setTitle, setCategory } = useRecipeFilters();

  const { data, isLoading } = useRecipes(difficulty, time, category, title);

  if (isLoading) return <LoadingState />;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50 z-10" />
        <img
          src={heroImage}
          alt="Banner principal da página"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Descubra Receitas Incríveis
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Milhares de receitas testadas e aprovadas por chefs caseiros
              iguais a você!
            </p>
            <div className="flex gap-3">
              <Link to="/categorias">
                <Button size="lg" className="cursor-pointer">
                  Explorar Categorias
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" className="cursor-pointer" variant="outline">
                  Ver Sobre
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar receitas..."
              className="pl-10"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Badge
                key={cat.value}
                variant={cat.value === category ? "default" : "outline"}
                className={
                  cat.value === category
                    ? "bg-primary text-primary-foreground cursor-pointer"
                    : "cursor-pointer hover:bg-muted"
                }
                onClick={() => setCategory(cat.value)}
              >
                {cat.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="container mx-auto px-4 pb-16" id="popular-recipes">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-2">
            Receitas em Destaque
          </h3>
          <p className="text-muted-foreground">
            Confira nossas receitas mais populares
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data &&
            data.map((recipe) => (
              <Link
                to={`/receitas/${recipe.id}`}
                key={recipe.id}
                className="flex"
              >
                <RecipeCard {...recipe} />
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

