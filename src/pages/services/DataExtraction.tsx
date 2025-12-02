import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, FileSearch, Globe, ScanLine, Filter, Layers } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web Scraping",
    description: "Automated data collection from websites, marketplaces, and online sources.",
  },
  {
    icon: FileSearch,
    title: "Document Parsing",
    description: "Extract structured data from PDFs, invoices, contracts, and forms.",
  },
  {
    icon: Layers,
    title: "API Integrations",
    description: "Connect to any data source through custom API development.",
  },
  {
    icon: ScanLine,
    title: "OCR Processing",
    description: "Convert scanned documents and images into searchable, usable data.",
  },
  {
    icon: Filter,
    title: "Data Cleaning",
    description: "Transform raw data into clean, validated, analysis-ready formats.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Organize and structure your data for easy access and reporting.",
  },
];

const DataExtraction = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest text-primary mb-4 block">SERVICE</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Data Extraction & Processing
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              We automate how your business collects and processes information, from PDFs and
              invoices to CRMs and emails. Documents are parsed, data validated, and everything
              flows directly into your systems.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact" className="flex items-center gap-2">
                Automate Your Data
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-16">
            Data Extraction Capabilities
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
              Why Automate Data Extraction?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Manual data entry is one of the biggest time drains in business. It's slow, error-prone, and keeps your team from doing more valuable work.
              </p>
              <p>
                Our data extraction solutions automatically pull information from any source — websites, documents, emails, or APIs — and deliver it directly to your systems in the format you need.
              </p>
              <p>
                Whether you're collecting competitor pricing, processing invoices, or aggregating data from multiple sources, we build solutions that work around the clock so you don't have to.
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

export default DataExtraction;
