import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, RefreshCw, Database, Link2, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Workflow Design",
    description: "Map and optimize your processes before automating for maximum efficiency.",
  },
  {
    icon: RefreshCw,
    title: "Data Synchronization",
    description: "Keep all your systems in perfect sync without manual data entry.",
  },
  {
    icon: Database,
    title: "CRM Automation",
    description: "Automate lead management, follow-ups, and customer data updates.",
  },
  {
    icon: Link2,
    title: "App Integrations",
    description: "Connect any combination of tools your team uses daily.",
  },
  {
    icon: Clock,
    title: "Scheduled Tasks",
    description: "Set up recurring automations for reports, backups, and notifications.",
  },
  {
    icon: Shield,
    title: "Error Handling",
    description: "Built-in monitoring and alerts to catch issues before they escalate.",
  },
];

const tools = ["Make.com", "Zapier", "n8n", "Airtable", "HubSpot", "Salesforce", "Notion", "Slack"];

const ProcessAutomation = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest text-primary mb-4 block">SERVICE</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Process Automation (RPA)
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Using Make, Zapier, and custom integrations, we turn fragmented processes into unified
              workflows. Your CRM, finance, and production tools stay perfectly synced, saving hours
              and reducing errors.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact" className="flex items-center gap-2">
                Start Automating
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-16">
            Automation Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
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
            Tools We Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-card border border-border px-6 py-3 rounded-lg text-foreground"
              >
                {tool}
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

export default ProcessAutomation;
