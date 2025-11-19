import { ChefHat } from "lucide-react";
import { Link, NavLink } from "react-router";
import { Button } from "../ui/button";

const links = [
  { to: "/receitas", label: "Receitas" },
  { to: "/categorias", label: "Categorias" },
  { to: "/sobre", label: "Sobre" },
];

export default function Header() {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              ReceitasOnline
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `
                  relative pb-1 
                  transition-colors duration-200
                  hover:text-primary
                  after:absolute after:left-0 after:bottom-0 
                  after:h-[2px] after:w-full after:bg-primary
                  after:transition-all after:duration-300
                  after:origin-left
                  ${
                    isActive
                      ? "text-primary after:opacity-100 after:scale-x-100"
                      : "text-muted-foreground after:opacity-0 after:scale-x-0"
                  }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to={"/nova-receita"}>
              <Button variant="default" className="cursor-pointer">
                Enviar Receita
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

