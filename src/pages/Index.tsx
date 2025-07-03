import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
import ContactSection from "@/components/ContactSection";
import ProjectPopup from "@/components/ProjectPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="audience">
        <TargetAudienceSection />
      </div>
      <div id="benefits">
        <WhyItWorksSection />
      </div>
      <div id="contacts">
        <ContactSection />
      </div>
      <ProjectPopup />
    </div>
  );
};

export default Index;
