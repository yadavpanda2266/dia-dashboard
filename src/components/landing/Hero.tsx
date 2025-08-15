import { ArrowRight, Heart, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
         <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-transparent to-green-50/20" />
       <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl" />
       <div className="absolute bottom-20 left-20 w-48 h-48 bg-green-300/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
                         <div className="space-y-4">
               <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-2xl text-sm font-medium">
                 <Heart className="w-4 h-4" />
                 Trusted by 10,000+ people with diabetes
               </div>
               
               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                 Take Control of Your{" "}
                 <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                   Diabetes Journey
                 </span>
               </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Track glucose levels, manage diet, monitor trends, and share insights with your healthcare team. 
                Everything you need for better diabetes management.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero">
                Start Free Today
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Clinically Proven</span>
              </div>
            </div>
          </div>

                     {/* Hero Image */}
           <div className="relative order-first lg:order-last">
             <div className="relative rounded-3xl overflow-hidden shadow-hover bg-gradient-to-br from-green-50 to-green-100/50 p-4 md:p-6 lg:p-8 border border-green-200">
               <img
                 src={heroImage}
                 alt="DiabetesHelp App Dashboard"
                 className="w-full h-auto rounded-2xl shadow-card object-cover"
                 loading="eager"
                 style={{ maxHeight: '500px', objectFit: 'cover' }}
               />
               
               {/* Floating stats cards */}
               <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-card border border-green-200">
                 <div className="text-xs md:text-sm text-gray-600">Today's Average</div>
                 <div className="text-lg md:text-2xl font-bold text-green-600">98 mg/dL</div>
                 <div className="text-xs text-green-500">In target range</div>
               </div>
               
               <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-card border border-green-200">
                 <div className="text-xs md:text-sm text-gray-600">7-Day Streak</div>
                 <div className="text-lg md:text-2xl font-bold text-green-600">🔥 12 days</div>
                 <div className="text-xs text-green-500">Keep it up!</div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}