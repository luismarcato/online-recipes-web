import { Clock, ChefHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categoriesMap, difficultiesMap } from "@/utils/constants";
import type { Recipe } from "@/utils/types";

export const RecipeCard = ({
  image,
  title,
  time,
  difficulty,
  category,
}: Recipe) => {
  return (
    <Card className="group cursor-pointer p-0 gap-4 hover:shadow-md h-full w-full">
      <CardContent className="px-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-md">
          <img
            src={`http://localhost:3000/uploads/recipes/${image}`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
          />
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {categoriesMap[category as keyof typeof categoriesMap]}
          </Badge>
        </div>
      </CardContent>
      <CardHeader className="px-4">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-[var(--transition-smooth)]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="px-4 pb-4 pt-0 flex items-center gap-4 text-muted-foreground text-sm mt-auto">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{time} min</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ChefHat className="w-4 h-4" />
          <span>
            {difficultiesMap[difficulty as keyof typeof difficultiesMap]}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

