import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TargetAudienceSection />
      <WhyItWorksSection />
      <ContactSection />
    </div>
  );
};

export default Index;
