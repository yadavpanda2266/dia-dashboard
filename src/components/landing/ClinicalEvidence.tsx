import { CheckCircle, TrendingDown, TrendingUp, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduction in diabetes distress",
    description: "85% of users report feeling more confident managing their diabetes",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=400&h=300",
    stat: "85%",
    research: "Clinical study, 2024"
  },
  {
    icon: Target,
    title: "Better glycemic control",
    description: "Improved HbA1c levels through consistent tracking and insights",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400&h=300",
    stat: "1.2%",
    research: "Average HbA1c reduction"
  },
  {
    icon: TrendingUp,
    title: "Fewer hypos and hypers",
    description: "Smart alerts help you stay in your target glucose range",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=400&h=300",
    stat: "73%",
    research: "Reduction in episodes"
  }
];

export function ClinicalEvidence() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-2xl text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Clinically Proven Results
          </div>
          
          <h2 className="text-4xl font-bold text-foreground">
            We've got{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              you
            </span>
          </h2>
          
          <h3 className="text-3xl font-bold text-foreground mb-6">
            DiabetesHelp makes a real difference
          </h3>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Backed by clinical research and trusted by healthcare professionals worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-soft border border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-hover">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">{benefit.stat}</div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  
                  <div className="text-sm text-muted-foreground font-medium">
                    {benefit.research}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Research link */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium">
            View full research findings
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}