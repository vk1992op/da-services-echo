import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, MessageSquare, Brain, Zap, Users, LineChart } from "lucide-react";

const capabilities = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Virtual Assistants",
    description: "24/7 customer support, lead qualification, and appointment scheduling.",
  },
  {
    icon: Brain,
    title: "Generative AI Solutions",
    description: "Content generation, document summarization, and intelligent data analysis.",
  },
  {
    icon: Zap,
    title: "Task Automation Agents",
    description: "Autonomous agents that handle invoicing, reporting, and data entry.",
  },
  {
    icon: Users,
    title: "Multi-Agent Systems",
    description: "Coordinated AI agents working together to handle complex workflows.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "AI-powered forecasting and trend analysis for better decision-making.",
  },
  {
    icon: Bot,
    title: "Custom AI Integrations",
    description: "Seamless connections between AI capabilities and your existing tools.",
  },
];

const AIAgents = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest text-primary mb-4 block">SERVICE</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              AI Agents & Automation
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Our custom AI agents handle real business operations: processing invoices, tracking
              orders, managing client requests, and generating reports — all while staying connected
              to your tools and workflows.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-16">
            What We Build
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, index) => (
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
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              How AI Agents Transform Your Business
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                AI agents are autonomous systems that can understand context, make decisions, and
                take actions on your behalf. Unlike simple automations, they adapt to new situations
                and learn from interactions.
              </p>
              <p>
                We build agents that integrate with your existing systems — CRMs, ERPs, email,
                messaging platforms — so they can work within your established workflows without
                disruption.
              </p>
              <p>
                From handling customer inquiries to processing documents to managing inventory
                alerts, AI agents take over repetitive tasks so your team can focus on high-value
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default AIAgents;
