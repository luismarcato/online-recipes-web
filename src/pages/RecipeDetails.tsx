import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ChefHat, Users, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { categoriesMap, difficultiesMap } from "@/utils/constants";
import { useRecipeDetailed } from "@/hooks/useRecipeDetailed";
import { LoadingState } from "@/components/LoadingState";

const RecipeNotFound = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Receita não encontrada
      </h2>
      <Button onClick={onBack} className="cursor-pointer">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para o Início
      </Button>
    </div>
  </div>
);

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const { data: recipe, isLoading } = useRecipeDetailed(id);

  if (isLoading) return <LoadingState />;

  if (!recipe) {
    return <RecipeNotFound onBack={() => navigate("/", { replace: true })} />;
  }

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        <img
          src={`${API_URL}/uploads/recipes/${recipe.image}`}
          alt={recipe.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Header Section */}
          <section className="bg-card border border-border rounded-lg p-8 mb-8 shadow-[var(--card-shadow)]">
            <Badge className="bg-primary text-primary-foreground mb-4">
              {categoriesMap[recipe.category as keyof typeof categoriesMap]}
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {recipe.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              {recipe.description}
            </p>

            {/* Recipe Info */}
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Tempo</p>
                  <p className="font-semibold text-foreground">
                    {recipe.time} min
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Dificuldade</p>
                  <p className="font-semibold text-foreground">
                    {
                      difficultiesMap[
                        recipe.difficulty as keyof typeof difficultiesMap
                      ]
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Porções</p>
                  <p className="font-semibold text-foreground">
                    {recipe.servings}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ingredients Section */}
          <section className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Ingredientes
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions Section */}
          <section className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Modo de Preparo
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-foreground pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* CallToAction */}
          <div className="flex gap-4 mb-12">
            <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
              Imprimir Receita
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Compartilhar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;

