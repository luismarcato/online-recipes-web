import { ChefHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-primary" />
            <span className="font-bold text-foreground">ReceitasOnline</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 ReceitasOnline. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

