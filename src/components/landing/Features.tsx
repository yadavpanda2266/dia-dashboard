import { Activity, BarChart3, FileText, Share2, Target, Utensils } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Glucose Tracking",
    description: "Log blood glucose levels with smart insights and trend analysis to understand your patterns."
  },
  {
    icon: Utensils,
    title: "Diet Management",
    description: "Track carbs, create meal plans, and get personalized nutrition recommendations."
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set daily targets and build healthy habits with streak tracking and reminders."
  },
  {
    icon: BarChart3,
    title: "Trend Analysis",
    description: "Visualize your data with comprehensive charts and reports to spot patterns."
  },
  {
    icon: FileText,
    title: "Medical Reports",
    description: "Upload and organize lab results, HbA1c tests, and other medical documents."
  },
  {
    icon: Share2,
    title: "Care Team Sharing",
    description: "Securely share your data with doctors and healthcare providers with one click."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Everything You Need for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Better Health
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive diabetes management tools designed to help you live your healthiest life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl bg-gradient-soft border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}