import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";

const beliefs = [
  {
    title: "Scalable Solutions",
    description: "AI and RPA solutions that reduce labor costs by 25–50% across business processes",
  },
  {
    title: "Affordable Systems",
    description: "Custom-built systems that deliver 240% average ROI, paying for themselves in under a year",
  },
  {
    title: "Time Savings",
    description: "Automations that free up 500+ hours per year for teams, cutting transaction work by 80%",
  },
  {
    title: "Real-time Data",
    description: "Tools that help you make faster decisions with a 50% time saving from automation",
  },
];

const team = [
  {
    name: "David Anderson",
    role: "Co-Founder & CEO",
    bio: "10+ years in business process optimization and AI implementation.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Automation",
    bio: "Expert in Make, Zapier, and custom integration solutions.",
  },
  {
    name: "Michael Torres",
    role: "Lead AI Engineer",
    bio: "Specializes in building intelligent agents and ML solutions.",
  },
  {
    name: "Emily Roberts",
    role: "Client Success Manager",
    bio: "Ensures every automation delivers measurable business value.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm tracking-widest text-primary mb-4 block">ABOUT US</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto mb-6">
            We help companies multiply revenue and cut operational costs through automation and AI
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We mix technical expertise with business mindset to smooth out what's holding you back.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Approach</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We don't believe in one-size-fits-all. Every business has its own challenges, goals,
              and ways of working.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              That's why every solution we build — whether it's an{" "}
              <Link to="/services/ai-agents" className="text-primary hover:underline">
                AI agent
              </Link>
              , a{" "}
              <Link to="/services/dashboards" className="text-primary hover:underline">
                custom dashboard
              </Link>
              , or a full{" "}
              <Link to="/services/process-automation" className="text-primary hover:underline">
                automation system
              </Link>{" "}
              — is designed specifically for your team and your workflows.
            </p>
            <p className="text-muted-foreground text-lg">
              Our mission is to help you remove bottlenecks, centralize information, and create more
              space for growth and innovation with <strong>tools that fit you</strong>, not just any
              business. And make it affordable, too.
            </p>
          </div>
        </div>
      </section>

      {/* We Believe In */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">WE BELIEVE IN</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {beliefs.map((belief, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {belief.title}
                </h3>
                <p className="text-muted-foreground">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">THE TEAM</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              The People Powering Your Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
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

export default About;
