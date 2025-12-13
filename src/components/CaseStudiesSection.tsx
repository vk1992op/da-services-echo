import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-commerce Order Processing",
    industry: "Retail",
    result: "80% reduction in manual data entry",
    description:
      "Automated order processing and inventory sync across multiple sales channels, saving 40+ hours per week.",
    tags: ["Make.com", "Shopify", "QuickBooks"],
  },
  {
    title: "Invoice Processing Automation",
    industry: "Finance",
    result: "95% faster invoice processing",
    description:
      "Built an AI-powered system to extract, validate, and process invoices automatically, reducing processing time from days to minutes.",
    tags: ["AI OCR", "ERP Integration", "Workflow Automation"],
  },
  {
    title: "Customer Support AI Agent",
    industry: "SaaS",
    result: "60% reduction in support tickets",
    description:
      "Deployed an intelligent chatbot that handles common inquiries and seamlessly escalates complex issues to human agents.",
    tags: ["AI Chatbot", "Zendesk", "Knowledge Base"],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-primary mb-4 block">
            CASE STUDIES
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we've helped companies across industries save time, reduce costs, and scale their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-sm text-primary mb-2 block">{study.industry}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {study.title}
              </h3>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded mb-4 inline-block">
                <span className="font-semibold">{study.result}</span>
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-3">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/case-studies" className="flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
