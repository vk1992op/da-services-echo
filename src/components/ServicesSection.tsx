import { Link } from "react-router-dom";
import { ArrowRight, Bot, Workflow, BarChart3, LayoutDashboard, Database } from "lucide-react";

const services = [
  {
    number: "1",
    title: "AI Agents & Automation",
    description:
      "Our custom AI agents handle real business operations: processing invoices, tracking orders, managing client requests, and generating reports — all while staying connected to your tools and workflows.",
    tags: ["AI Chatbots", "Generative AI", "Machine Learning", "System Integrations", "Multi-agent Systems"],
    href: "/services/ai-agents",
    icon: Bot,
  },
  {
    number: "2",
    title: "Process Automation",
    description:
      "Using Make, Zapier, and custom integrations, we turn fragmented processes into unified workflows. Your CRM, finance, and production tools stay perfectly synced, saving hours and reducing errors.",
    tags: ["Make.com", "Zapier", "Airtable", "n8n", "HubSpot"],
    href: "/services/process-automation",
    icon: Workflow,
  },
  {
    number: "3",
    title: "Business Analytics",
    description:
      "We audit your workflows, map data flows, and uncover bottlenecks that cost you time and money. The result — a clear roadmap of what to fix, what to automate, and what will bring measurable ROI.",
    tags: ["Workflow Mapping", "KPI Tracking", "Operations Audits", "Sales Analysis", "Custom CRMs"],
    href: "/services/business-analytics",
    icon: BarChart3,
  },
  {
    number: "4",
    title: "Custom Dashboards & Apps",
    description:
      "We design internal apps and dashboards that bring your sales, operations, and financial data together, so decisions are faster, teams stay aligned, and performance is clear.",
    tags: ["Bubble.io", "JavaScript", "Python", "AWS", "Custom Development"],
    href: "/services/dashboards",
    icon: LayoutDashboard,
  },
  {
    number: "5",
    title: "Data Extraction & Processing",
    description:
      "We automate how your business collects and processes information, from PDFs and invoices to CRMs and emails. Documents are parsed, data validated, and everything flows directly into your systems.",
    tags: ["Web Scraping", "Document Parsing", "API Integrations", "OCR Processing", "Data Cleaning"],
    href: "/services/data-extraction",
    icon: Database,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-primary mb-4 block">SERVICES</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Full-cycle support to automate your business
          </h2>
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-display font-bold text-primary">{service.number}</span>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
