import { Link } from "react-router-dom";
import { Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveNav } from "./ResponsiveNav";
import { useAuth, UserButton } from "@clerk/clerk-react";

export function Header() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
         <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-primary/10 z-50">
       <div className="container mx-auto px-4 md:px-6">
         <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - MySugr inspired */}
                     <Link to="/" className="flex items-center gap-2 md:gap-3 group">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:shadow-hover transition-all duration-200">
               <Heart className="w-6 h-6 md:w-7 md:h-7 text-white" />
             </div>
             <div className="flex flex-col">
               <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">DiabetesHelp.in</span>
               <span className="text-xs text-muted-foreground -mt-1 hidden sm:block">Comprehensive Diabetes Management</span>
             </div>
           </Link>

                     {/* Navigation and Auth Buttons */}
           <div className="flex items-center gap-4 md:gap-6">
             <ResponsiveNav />
             
             {/* Auth Buttons */}
             <div className="flex items-center gap-2 md:gap-3">
               {!isLoaded ? (
                 <div className="animate-pulse bg-muted rounded-md h-8 w-16 md:h-10 md:w-20"></div>
               ) : isSignedIn ? (
                 <>
                   <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
                     <Link to="/dashboard">Dashboard</Link>
                   </Button>
                   <UserButton 
                     appearance={{
                       elements: {
                         userButtonAvatarBox: "w-8 h-8 md:w-10 md:h-10",
                         userButtonTrigger: "focus:shadow-none"
                       }
                     }}
                   />
                 </>
               ) : (
                 <>
                   <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
                     <Link to="/login">Sign In</Link>
                   </Button>
                   <Button variant="default" size="sm" asChild>
                     <Link to="/signup">Sign Up</Link>
                   </Button>
                 </>
               )}
             </div>
           </div>
        </div>
      </div>
    </header>
  );
}