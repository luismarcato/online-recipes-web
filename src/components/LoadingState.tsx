import { ChefHat } from "lucide-react";

export const LoadingState = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Animated Chef Hat Icon */}
        <div className="relative inline-block">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />

          {/* Main icon container */}
          <div className="relative">
            {/* Background circle with filling animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-primary/20 overflow-hidden">
                <div
                  className="w-full h-full bg-primary origin-bottom animate-[fill_2s_ease-in-out_infinite]"
                  style={{
                    animation: "fill 2s ease-in-out infinite",
                    transformOrigin: "bottom",
                  }}
                />
              </div>
            </div>

            {/* Chef hat icon */}
            <div className="relative z-10 p-8">
              <ChefHat
                className="w-16 h-16 text-primary-foreground animate-bounce"
                strokeWidth={2}
                style={{
                  filter: "drop-shadow(0 4px 12px hsl(var(--primary) / 0.5))",
                }}
              />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground">
          Preparando suas receitas...
        </h2>
      </div>

      <style>{`
        @keyframes fill {
          0%, 100% {
            transform: translateY(100%);
          }
          50% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </div>
  );
};

