import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code, TrendingUp, Clock, Shield, Zap, CheckCircle, Briefcase, Target, Headphones } from "lucide-react";

const departments = [
  {
    icon: TrendingUp,
    title: "Sales Department",
    description: "A fully-equipped sales team that integrates with your business. From lead generation to closing deals, we provide experienced sales professionals who understand your market.",
    features: [
      "Lead generation & qualification",
      "Sales pipeline management",
      "CRM setup & optimization",
      "Sales strategy & execution",
      "Performance tracking & reporting",
      "Client relationship management"
    ]
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Access a complete development team without the overhead. Our developers become an extension of your company, building and maintaining your digital products.",
    features: [
      "Full-stack development",
      "Mobile app development",
      "API development & integrations",
      "DevOps & cloud infrastructure",
      "Quality assurance & testing",
      "Ongoing maintenance & support"
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Rapid Team Deployment",
    description: "Get a fully operational department in days, not months. Skip the lengthy hiring process and start delivering results immediately."
  },
  {
    icon: Shield,
    title: "Reduced Risk",
    description: "No long-term commitments or employment liabilities. Scale up or down based on your business needs with complete flexibility."
  },
  {
    icon: Zap,
    title: "Cost Efficiency",
    description: "Eliminate overhead costs of hiring, training, and managing full-time employees. Pay only for the capacity you need."
  },
  {
    icon: Users,
    title: "Expert Teams",
    description: "Access pre-vetted professionals with proven track records. Our teams bring industry best practices and fresh perspectives."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "We analyze your business needs, goals, and existing processes to understand exactly what department capabilities you require."
  },
  {
    step: "02",
    title: "Team Configuration",
    description: "We assemble and configure a dedicated team tailored to your specific requirements, industry, and company culture."
  },
  {
    step: "03",
    title: "Knowledge Transfer",
    description: "Comprehensive onboarding ensures our team understands your products, processes, and objectives inside and out."
  },
  {
    step: "04",
    title: "Seamless Integration",
    description: "Your new department integrates with your existing workflows, tools, and communication channels for maximum efficiency."
  },
  {
    step: "05",
    title: "Continuous Optimization",
    description: "We continuously monitor performance, gather feedback, and optimize processes to deliver ever-improving results."
  }
];

export default function DepartmentAsService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <span className="text-sm tracking-widest text-primary mb-4 block">DEPARTMENT AS A SERVICE</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your Complete Department, Without the Overhead
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Get a fully operational sales or software development department that integrates seamlessly with your business. Scale up or down with complete flexibility — no hiring, no HR headaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Build Your Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Banner */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24 Hours</div>
              <div className="text-muted-foreground">Team deployment time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-muted-foreground">Cost savings vs. in-house</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Flexible</div>
              <div className="text-muted-foreground">Scale anytime, no contracts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">OUR DEPARTMENTS</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Department
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer complete department solutions in two core areas, each staffed with experienced professionals ready to drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept) => (
              <div key={dept.title} className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all">
                <dept.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{dept.title}</h3>
                <p className="text-muted-foreground mb-6">{dept.description}</p>
                <ul className="space-y-3">
                  {dept.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">WHY DAAS</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              The DaaS Advantage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Traditional hiring is slow, expensive, and risky. Our Department as a Service model gives you everything you need with none of the overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">COMPARISON</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              DaaS vs. Traditional Hiring
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 p-4 border-b border-border">
                <div className="font-semibold text-foreground">Factor</div>
                <div className="font-semibold text-foreground text-center">Traditional Hiring</div>
                <div className="font-semibold text-primary text-center">DaaS</div>
              </div>
              {[
                { factor: "Time to Start", traditional: "2-6 months", daas: "24-48 hours" },
                { factor: "Upfront Cost", traditional: "High (recruiting, onboarding)", daas: "None" },
                { factor: "Flexibility", traditional: "Low (employment contracts)", daas: "High (scale anytime)" },
                { factor: "Risk", traditional: "High (bad hires, turnover)", daas: "Low (proven teams)" },
                { factor: "Expertise Access", traditional: "Limited to hire pool", daas: "Top-tier professionals" },
                { factor: "Management Overhead", traditional: "Full responsibility", daas: "Minimal (we handle it)" },
              ].map((row, index) => (
                <div key={row.factor} className={`grid grid-cols-3 p-4 ${index < 5 ? 'border-b border-border' : ''}`}>
                  <div className="text-foreground font-medium">{row.factor}</div>
                  <div className="text-muted-foreground text-center">{row.traditional}</div>
                  <div className="text-primary text-center font-medium">{row.daas}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">OUR PROCESS</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven approach to integrating a fully operational department into your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{step.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build Your Department?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can provide the exact department capabilities your business needs. No long-term contracts, just results.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}