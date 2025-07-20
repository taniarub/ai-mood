import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

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
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contacts">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
