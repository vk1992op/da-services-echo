import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Search, TrendingUp, FileText, Settings } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Workflow Mapping",
    description: "Visual documentation of your current processes to identify improvement areas.",
  },
  {
    icon: BarChart3,
    title: "KPI Tracking Dashboards",
    description: "Real-time visibility into the metrics that matter most to your business.",
  },
  {
    icon: Target,
    title: "Operations Audits",
    description: "Deep analysis of your workflows to uncover hidden inefficiencies.",
  },
  {
    icon: TrendingUp,
    title: "Sales Channel Analysis",
    description: "Understand performance across channels to optimize your sales strategy.",
  },
  {
    icon: Settings,
    title: "Custom CRMs & ERPs",
    description: "Tailored systems designed around your specific business processes.",
  },
  {
    icon: FileText,
    title: "ROI Roadmapping",
    description: "Clear action plans prioritized by potential return on investment.",
  },
];

const BusinessAnalytics = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest text-primary mb-4 block">SERVICE</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Business Optimization & Analytics
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              We audit your workflows, map data flows, and uncover bottlenecks that cost you time
              and money. The result — a clear roadmap of what to fix, what to automate, and what
              will bring measurable ROI.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact" className="flex items-center gap-2">
                Get Your Analysis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-16">
            Our Analytics Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default BusinessAnalytics;
