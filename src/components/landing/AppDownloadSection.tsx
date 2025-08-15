import { ArrowRight, Download, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppDownloadSection() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-2xl text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            4.8 rating • 50,000+ downloads
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Download and try it{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              now!
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with DiabetesHelp today and take control of your diabetes management journey.
          </p>
        </div>

        {/* App Store Buttons - MySugr style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            variant="outline" 
            size="lg"
            className="group bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-hover transition-all duration-300 h-14 px-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Download className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Download on the</div>
                <div className="text-sm font-semibold text-foreground">App Store</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="group bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-hover transition-all duration-300 h-14 px-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Get it on</div>
                <div className="text-sm font-semibold text-foreground">Google Play</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Web App Button */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Or try the web version</p>
          <Button variant="hero" size="hero" className="group">
            Launch Web App
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}