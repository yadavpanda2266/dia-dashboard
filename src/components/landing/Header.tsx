import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { ResponsiveNav } from "./ResponsiveNav";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-primary/10 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - MySugr inspired */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-hover transition-all duration-200">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">DiabetesHelp</span>
              <span className="text-xs text-muted-foreground -mt-1">Simplifying life with diabetes</span>
            </div>
          </Link>

          {/* Navigation */}
          <ResponsiveNav />
        </div>
      </div>
    </header>
  );
}