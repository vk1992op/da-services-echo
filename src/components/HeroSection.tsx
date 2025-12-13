import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedNetwork } from "./AnimatedNetwork";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Network Background */}
      <div className="absolute inset-0">
        <AnimatedNetwork />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl mx-auto leading-tight mb-6">
          Scale Faster with AI Automation & Expert Teams On Demand
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          From MVP to market leader — get dedicated sales and dev departments, proven AI solutions, and end-to-end automation. Cut costs by 40%, launch 3x faster, and grow without limits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Book an Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border bg-transparent hover:bg-secondary text-foreground px-8 py-6 text-base"
          >
            <Link to="/#services" className="flex items-center gap-2">
              See Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-20">
          <p className="text-sm tracking-widest text-muted-foreground mb-8">
            CERTIFIED AND RECOGNIZED BY TOP TECHNOLOGY PROVIDERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-card border border-border px-6 py-3 rounded">
              <span className="text-foreground font-medium">Make Partner</span>
            </div>
            <div className="bg-card border border-border px-6 py-3 rounded">
              <span className="text-foreground font-medium">Zapier Partner</span>
            </div>
            <div className="bg-card border border-border px-6 py-3 rounded">
              <span className="text-foreground font-medium">Top AI Company 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
