import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";

const Index = () => {
  return (
    <div className="min-h-screen">
      <JsonLd type="website" />
      <JsonLd type="organization" />
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
    </div>
  );
};

export default Index;
