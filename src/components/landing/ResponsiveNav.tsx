import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  trigger: string;
  items: DropdownItem[];
  className?: string;
}

export function DropdownMenu({ trigger, items, className }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <button
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 group hover:scale-105 transform cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
      >
        <span className="group-hover:translate-x-0.5 transition-transform duration-300">{trigger}</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-all duration-300 group-hover:scale-110",
            isOpen && "rotate-180"
          )} 
        />
        
        {/* Hover underline effect */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-lg border border-primary/10 rounded-2xl shadow-hover p-2 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-md cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">
                {item.label}
              </div>
              {item.description && (
                <div className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </div>
              )}
              
              {/* Hover indicator line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// Enhanced responsive navigation menu
export function ResponsiveNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatWeOfferItems: DropdownItem[] = [
    {
      label: "Glucose Tracking",
      href: "#glucose-tracking",
      description: "Smart logging with trend analysis and insights"
    },
    {
      label: "Diet Management",
      href: "#diet-management", 
      description: "Carb counting and meal planning tools"
    },
    {
      label: "Medical Reports",
      href: "#medical-reports",
      description: "Organize and share lab results with your care team"
    },
    {
      label: "Care Team Sharing",
      href: "#care-team-sharing",
      description: "Secure data sharing with healthcare providers"
    }
  ];


  return (
    <div className="flex items-center gap-8">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <DropdownMenu 
          trigger="What we offer" 
          items={whatWeOfferItems}
        />
        <a href="#who-we-are" className="text-muted-foreground hover:text-foreground transition-all duration-300 group hover:scale-105 transform cursor-pointer relative">
          <span className="group-hover:translate-x-0.5 transition-transform duration-300">Who we are</span>
          
          {/* Hover underline effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
        </a>
        
        <a href="#research" className="text-muted-foreground hover:text-foreground transition-all duration-300 group hover:scale-105 transform cursor-pointer relative">
          <span className="group-hover:translate-x-0.5 transition-transform duration-300">Research</span>
          
          {/* Hover underline effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
        </a>
      </nav>

      {/* Mobile Auth Buttons */}
      <div className="md:hidden flex items-center gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/login">Sign In</Link>
        </Button>
        <Button variant="default" size="sm" asChild>
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 transform cursor-pointer group"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
        ) : (
          <Menu className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <span className="text-xl font-bold text-foreground">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">What we offer</h3>
                  <div className="space-y-3 pl-4">
                    {whatWeOfferItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block py-2 text-muted-foreground hover:text-foreground transition-all duration-300 group hover:scale-105 transform cursor-pointer relative pl-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                        
                        {/* Hover indicator line */}
                        <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300 transform -translate-y-1/2"></div>
                      </a>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="#who-we-are" 
                  className="block py-3 text-lg text-muted-foreground hover:text-foreground transition-all duration-300 group hover:scale-105 transform cursor-pointer relative pl-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Who we are</span>
                  
                  {/* Hover indicator line */}
                  <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300 transform -translate-y-1/2"></div>
                </a>
                
                <a 
                  href="#research" 
                  className="block py-3 text-lg text-muted-foreground hover:text-foreground transition-all duration-300 group hover:scale-105 transform cursor-pointer relative pl-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Research</span>
                  
                  {/* Hover indicator line */}
                  <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300 transform -translate-y-1/2"></div>
                </a>
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="p-6 border-t border-primary/10 space-y-3">
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button variant="default" size="lg" className="w-full" asChild>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}