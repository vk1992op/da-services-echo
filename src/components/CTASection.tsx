import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to automate your business?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
          Start with a free strategy call. We'll identify your biggest time-wasters and show you
          exactly how automation can help you scale faster.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base"
        >
          <Link to="/contact" className="flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
