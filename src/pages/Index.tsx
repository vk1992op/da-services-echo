import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <IntegrationsSection />
      <CaseStudiesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
