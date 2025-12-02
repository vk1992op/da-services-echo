import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

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
  {
    title: "Sales Pipeline Automation",
    industry: "Real Estate",
    result: "3x increase in lead conversion",
    description:
      "Created automated lead nurturing sequences and CRM workflows that keep prospects engaged throughout the sales cycle.",
    tags: ["HubSpot", "Email Automation", "Lead Scoring"],
  },
  {
    title: "Manufacturing Data Dashboard",
    industry: "Manufacturing",
    result: "Real-time visibility across 5 plants",
    description:
      "Built a unified dashboard pulling data from multiple systems to provide instant insights on production, quality, and inventory.",
    tags: ["Custom Dashboard", "Data Integration", "Analytics"],
  },
  {
    title: "HR Onboarding Workflow",
    industry: "Healthcare",
    result: "50% faster employee onboarding",
    description:
      "Streamlined the entire onboarding process from offer letter to first day, automating document collection and system access.",
    tags: ["Workflow Automation", "Document Management", "HRIS"],
  },
];

const CaseStudies = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm tracking-widest text-primary mb-4 block">CASE STUDIES</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we've helped companies across industries save time, reduce costs, and scale
            their operations through automation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-muted-foreground mb-6">{study.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors text-sm">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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

export default CaseStudies;
