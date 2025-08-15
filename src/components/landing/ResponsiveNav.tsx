import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
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
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
      >
        {trigger}
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-lg border border-primary/10 rounded-2xl shadow-hover p-2 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block p-4 rounded-xl hover:bg-primary/5 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </div>
              {item.description && (
                <div className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </div>
              )}
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
        <a href="#who-we-are" className="text-muted-foreground hover:text-foreground transition-colors">
          Who we are
        </a>
        <a href="#research" className="text-muted-foreground hover:text-foreground transition-colors">
          Research
        </a>
      </nav>

      {/* Download Button - MySugr style */}
      <button className="hidden md:block bg-primary hover:bg-primary-light text-primary-foreground px-6 py-3 rounded-2xl font-medium transition-all duration-200 hover:shadow-hover transform hover:scale-[1.02]">
        Download DiabetesHelp
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
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
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="#who-we-are" 
                  className="block py-3 text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Who we are
                </a>
                
                <a 
                  href="#research" 
                  className="block py-3 text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Research
                </a>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="p-6 border-t border-primary/10">
              <button 
                className="w-full bg-primary hover:bg-primary-light text-primary-foreground py-4 rounded-2xl font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download DiabetesHelp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}