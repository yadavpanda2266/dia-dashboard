export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-soft p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-card p-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground mb-8">Welcome back! Here's your diabetes management overview.</p>
          
          {/* Placeholder for dashboard content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gradient-soft rounded-2xl p-6 border border-primary/10">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl mb-4"></div>
                <h3 className="font-semibold text-foreground mb-2">Coming Soon</h3>
                <p className="text-sm text-muted-foreground">Dashboard features will be implemented in the next steps.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}