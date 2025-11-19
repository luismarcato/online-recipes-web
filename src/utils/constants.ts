import {
  Leaf,
  Pizza,
  BottleWine,
  Soup,
  Sandwich,
  CakeSlice,
} from "lucide-react";

import italianaImage from "@/assets/category-italiana.jpg";
import americanaImage from "@/assets/category-americana.jpg";
import sobremesaImage from "@/assets/category-sobremesa.jpg";
import saudavelImage from "@/assets/category-saudavel.jpg";
import drinksImage from "@/assets/category-drinks.jpg";
import soupsImage from "@/assets/category-soups.jpg";

export const categories = [
  {
    value: "ALL",
    label: "Todas",
  },
  {
    value: "PASTA",
    label: "Massas",
    image: italianaImage,
    description: "Massas, pizzas e sabores autênticos da Itália",
    icon: Pizza,
    color: "from-red-500/20 to-orange-500/20",
    recipes: 0,
  },
  {
    value: "SOUPS",
    label: "Sopas",
    image: soupsImage,
    description: "Sopas e caldos para dias quentes ou frios",
    icon: Soup,
    color: "from-blue-500/20 to-orange-500/20",
    recipes: 0,
  },
  {
    value: "DESSERTS",
    label: "Sobremesas",
    image: sobremesaImage,
    description: "Bolos, tortas e doces irresistíveis",
    icon: CakeSlice,
    color: "from-pink-500/20 to-purple-500/20",
    recipes: 0,
  },
  {
    value: "HEALTHY",
    label: "Saudáveis",
    image: saudavelImage,
    description: "Receitas nutritivas e equilibradas",
    icon: Leaf,
    color: "from-green-500/20 to-emerald-500/20",
    recipes: 0,
  },
  {
    value: "DRINKS",
    label: "Bebidas",
    image: drinksImage,
    description: "Batidas, licores e sucos deliciosos",
    icon: BottleWine,
    color: "from-yellow-500/20 to-emerald-500/20",
    recipes: 0,
  },
  {
    value: "SNACKS",
    label: "Lanches",
    image: americanaImage,
    description: "Hambúrguers, BBQ e clássicos americanos",
    icon: Sandwich,
    color: "from-blue-500/20 to-red-500/20",
    recipes: 0,
  },
];

export const categoriesMap = {
  ALL: "Todas",
  PASTA: "Massas",
  SOUPS: "Sopas",
  DESSERTS: "Sobremesas",
  HEALTHY: "Saudáveis",
  DRINKS: "Bebidas",
  SNACKS: "Lanches",
};

export const difficulties = [
  {
    value: "ALL",
    label: "Todas",
  },
  {
    value: "EASY",
    label: "Fácil",
  },
  {
    value: "MEDIUM",
    label: "Média",
  },
  {
    value: "HARD",
    label: "Difícil",
  },
];

export const difficultiesMap = {
  ALL: "Todas",
  EASY: "Fácil",
  MEDIUM: "Média",
  HARD: "Difícil",
};

export const preparationTimes = [
  {
    value: "ALL",
    label: "Qualquer",
  },
  {
    value: "UNDER_30",
    label: "< 30 min",
  },
  {
    value: "BETWEEN_30_AND_60",
    label: "30-60 min",
  },
  {
    value: "OVER_60",
    label: "> 60 min",
  },
];

