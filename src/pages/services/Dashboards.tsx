import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, LineChart, Users, DollarSign, Package, Gauge } from "lucide-react";

const dashboardTypes = [
  {
    icon: DollarSign,
    title: "Financial Dashboards",
    description: "Real-time revenue, expenses, and cash flow visibility in one place.",
  },
  {
    icon: LineChart,
    title: "Sales Analytics",
    description: "Pipeline tracking, conversion rates, and performance metrics.",
  },
  {
    icon: Package,
    title: "Operations Monitoring",
    description: "Track production, inventory, and logistics in real-time.",
  },
  {
    icon: Users,
    title: "Team Performance",
    description: "Productivity metrics and workload distribution insights.",
  },
  {
    icon: Gauge,
    title: "KPI Scorecards",
    description: "At-a-glance views of your most critical business metrics.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Internal Apps",
    description: "Purpose-built applications for your unique workflows.",
  },
];

const technologies = ["Bubble.io", "JavaScript", "Python", "React", "AWS", "Google Cloud"];

const Dashboards = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest text-primary mb-4 block">SERVICE</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Custom Apps & Dashboards
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              We design internal apps and dashboards that bring your sales, operations, and
              financial data together, so decisions are faster, teams stay aligned, and performance
              is clear.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact" className="flex items-center gap-2">
                Build Your Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-16">
            Dashboard Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardTypes.map((item, index) => (
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

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-card border border-border px-6 py-3 rounded-lg text-foreground"
              >
                {tech}
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

export default Dashboards;
