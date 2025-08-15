import { Heart, Users, BookOpen, MessageCircle } from "lucide-react";

const discussions = [
  {
    icon: Heart,
    title: "Living with Type 1 Diabetes",
    description: "Managing insulin, counting carbs, and maintaining an active lifestyle with Type 1 diabetes.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=400&h=300",
    topics: ["Insulin Management", "Carb Counting", "Exercise Tips"]
  },
  {
    icon: Users,
    title: "Type 2 Diabetes Community",
    description: "Lifestyle changes, medication management, and support for Type 2 diabetes journey.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=300",
    topics: ["Diet Planning", "Weight Management", "Medication"]
  },
  {
    icon: BookOpen,
    title: "Diabetes Education Hub",
    description: "Learn about blood sugar monitoring, nutrition, and latest diabetes research.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=400&h=300",
    topics: ["Blood Sugar", "Nutrition", "Research"]
  }
];

export function DiabetesDiscussion() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-2xl text-sm font-medium">
            <MessageCircle className="w-4 h-4" />
            Community & Education
          </div>
          
          <h2 className="text-4xl font-bold text-foreground">
            Join the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Connect, Learn, and Thrive with Diabetes
          </h3>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share experiences, get support, and access educational resources from our diabetes community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {discussions.map((discussion, index) => (
            <div
              key={discussion.title}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-soft border border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-hover">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={discussion.image}
                    alt={discussion.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <discussion.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {discussion.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {discussion.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {discussion.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Community link */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium">
            Join our community forum
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}