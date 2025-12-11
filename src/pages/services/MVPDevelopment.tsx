import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Search, Layers, Code, Rocket, Headphones, CheckCircle, Zap, Shield, Target, Users } from "lucide-react";

const lifecycleStages = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Concept Consultancy",
    description: "We help you refine your vision into a viable product concept. Through strategic workshops and market analysis, we validate your idea and define a clear path forward.",
    details: [
      "Vision & goal alignment sessions",
      "Market opportunity assessment",
      "Competitive landscape analysis",
      "Value proposition refinement",
      "Initial feasibility evaluation"
    ]
  },
  {
    icon: Search,
    number: "02",
    title: "Research & Development",
    description: "Deep dive into user needs, technical requirements, and market dynamics. We gather the insights needed to build a product users actually want.",
    details: [
      "User research & interviews",
      "Technical feasibility studies",
      "Architecture planning",
      "Technology stack selection",
      "Risk assessment & mitigation"
    ]
  },
  {
    icon: Layers,
    number: "03",
    title: "Prototyping",
    description: "Transform concepts into interactive prototypes. Test with real users before writing production code, saving time and money.",
    details: [
      "Wireframing & user flows",
      "Interactive clickable prototypes",
      "User testing & feedback loops",
      "Design iteration cycles",
      "Stakeholder validation"
    ]
  },
  {
    icon: Code,
    number: "04",
    title: "Software Development",
    description: "Agile development with continuous delivery. We build your MVP using modern technologies and best practices, delivering working software in sprints.",
    details: [
      "Agile sprint-based development",
      "Full-stack implementation",
      "Quality assurance & testing",
      "Continuous integration/deployment",
      "Performance optimization"
    ]
  },
  {
    icon: Headphones,
    number: "05",
    title: "Support & Maintenance",
    description: "Post-launch support to keep your product running smoothly. We handle bugs, updates, and feature enhancements while you focus on growth.",
    details: [
      "Bug fixes & issue resolution",
      "Performance monitoring",
      "Feature enhancements",
      "Security updates",
      "Technical support"
    ]
  },
  {
    icon: Rocket,
    number: "06",
    title: "Sales & Marketing Support",
    description: "We help you take your product to market. From positioning to launch strategy, we support your go-to-market efforts to maximize impact.",
    details: [
      "Go-to-market strategy",
      "Product positioning & messaging",
      "Launch planning & execution",
      "Marketing collateral creation",
      "Sales enablement materials"
    ]
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Faster Time to Market",
    description: "Our proven process accelerates development, getting your product to users and generating feedback faster than building in-house."
  },
  {
    icon: Shield,
    title: "Reduced Risk",
    description: "Validate assumptions early through prototyping and user testing. Pivot quickly based on real data, not guesswork."
  },
  {
    icon: Target,
    title: "User-Centric Design",
    description: "Every decision is driven by user needs. We build products people actually want to use, not just what looks good on paper."
  },
  {
    icon: Users,
    title: "End-to-End Partnership",
    description: "We're with you from idea to market. One team, one vision, complete accountability throughout the entire journey."
  }
];

const faqs = [
  {
    question: "How long does MVP development typically take?",
    answer: "Most MVPs are delivered in 8-16 weeks, depending on complexity. Our sprint-based approach means you see working software every 2 weeks."
  },
  {
    question: "What if my idea changes during development?",
    answer: "That's expected and encouraged! Our agile process is built for change. We continuously incorporate feedback and pivot as needed without derailing the project."
  },
  {
    question: "Do you continue working with us after launch?",
    answer: "Absolutely. Most clients continue with ongoing development and support. We can scale our involvement based on your needs and budget."
  },
  {
    question: "What technologies do you use?",
    answer: "We select the best technology for your specific needs. Our team has expertise across modern stacks including React, Node.js, Python, cloud platforms, and more."
  }
];

export default function MVPDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <span className="text-sm tracking-widest text-primary mb-4 block">MVP DEVELOPMENT</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              From Idea to Market-Ready Product
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              We support the entire software product lifecycle — from initial concept through development, launch, and beyond. Your vision, our expertise, delivered fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Start Your MVP
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Complete Product Lifecycle Support
            </h2>
            <p className="text-muted-foreground text-lg">
              Most agencies just build software. We partner with you across the entire product journey — from validating your concept to helping you sell it. Think of us as your product team, not just developers.
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle Stages */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">OUR PROCESS</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              The Full Product Lifecycle
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six integrated stages that take your idea from concept to successful product in the market.
            </p>
          </div>

          <div className="space-y-12">
            {lifecycleStages.map((stage, index) => (
              <div 
                key={stage.number} 
                className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <stage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-4xl font-display font-bold text-primary/30">{stage.number}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{stage.title}</h3>
                  <p className="text-muted-foreground mb-6">{stage.description}</p>
                  <ul className="space-y-3">
                    {stage.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">WHY CHOOSE US</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              The DA Services Advantage
            </h2>
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

      {/* What We Build */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">WHAT WE BUILD</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              MVP Types We Specialize In
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "SaaS Platforms", desc: "Subscription-based software products with user management, billing, and core functionality." },
              { title: "Mobile Apps", desc: "iOS and Android applications that solve specific user problems and validate market demand." },
              { title: "Web Applications", desc: "Full-featured web apps with responsive design and seamless user experiences." },
              { title: "Internal Tools", desc: "Custom business applications that streamline operations and increase efficiency." },
              { title: "Marketplaces", desc: "Two-sided platforms connecting buyers and sellers or service providers and customers." },
              { title: "API Products", desc: "Developer-focused products and integrations that power other applications." }
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">FAQ</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build Your MVP?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's turn your idea into a market-ready product. Book a free consultation to discuss your vision and how we can help bring it to life.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">
              Book Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}