import { ArrowRight, Heart, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-success/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-2xl text-sm font-medium">
                <Heart className="w-4 h-4" />
                Trusted by 10,000+ people with diabetes
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Take Control of Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
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
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-hover bg-gradient-to-br from-white to-primary/5 p-8">
              <img
                src={heroImage}
                alt="DiabetesHelp App Dashboard"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-primary/10">
                <div className="text-sm text-muted-foreground">Today's Average</div>
                <div className="text-2xl font-bold text-success">98 mg/dL</div>
                <div className="text-xs text-success">In target range</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-primary/10">
                <div className="text-sm text-muted-foreground">7-Day Streak</div>
                <div className="text-2xl font-bold text-primary">🔥 12 days</div>
                <div className="text-xs text-primary">Keep it up!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}