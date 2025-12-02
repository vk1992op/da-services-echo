import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Automation Strategy",
    price: "Free",
    description:
      "A personalized roadmap to identify automation opportunities and ROI potential. Get your automation plan within 24 hours.",
    features: [
      "Workflow analysis",
      "Automation opportunities",
      "ROI estimation",
      "24-hour delivery",
    ],
    cta: "Book Free Strategy Call",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Workflow Automation",
    price: "$800",
    priceNote: "From",
    description:
      "Automate 1-3 of your most time-consuming workflows to save hours every week, from customer management to reporting.",
    features: [
      "1-3 workflow automations",
      "Tool integrations",
      "Testing & deployment",
      "Documentation",
      "30-day support",
    ],
    cta: "Start with Automation",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "AI Agents",
    price: "$1,000",
    priceNote: "From",
    description:
      "Pass tasks to smart AI agents that can take action on their own, from sending invoices to updating your systems.",
    features: [
      "Custom AI agent",
      "System integrations",
      "Training & fine-tuning",
      "Performance monitoring",
      "60-day support",
    ],
    cta: "Build an AI Agent",
    href: "/contact",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-primary mb-4 block">PRICING</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Affordable Plans. Tangible Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-2 border-primary"
                  : "bg-background border border-border"
              }`}
            >
              <h3
                className={`font-display text-xl font-semibold mb-2 ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mb-4">
                {plan.priceNote && (
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                )}
                <div
                  className={`text-4xl font-display font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </div>
              </div>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 ${
                        plan.highlighted ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span className={plan.highlighted ? "text-primary-foreground" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Link to={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
