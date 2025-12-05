import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    // Если мы не на главной странице, сначала переходим на неё
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Если уже на главной странице, просто прокручиваем к разделу
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navigationItems = [
    { label: "Почему ИИ?", id: "about" },
    { label: "Услуги", id: "services" },
    { label: "FAQ", id: "faq" },
    { label: "Контакты", id: "contacts" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-dark-purple cursor-pointer tracking-tight flex items-center gap-2"
            onClick={() => {
              if (window.location.pathname !== '/') {
                window.location.href = '/';
              } else {
                scrollToSection("hero");
              }
            }}
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
               <span className="text-white font-bold text-lg">M</span>
            </div>
            MoodAI
          </div>

          {/* Navigation and CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
                <Button
                  onClick={() => window.open('https://t.me/laura_palmers_theme', '_blank')}
                  className="rounded-full px-6 bg-dark-purple hover:bg-dark-purple/90 text-white shadow-none transition-all duration-300"
                >
                  <span className="mr-2">Связаться</span>
                  <ArrowUpRight size={18} />
                </Button>
            </div>
          </div>

          {/* Mobile buttons and menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={() => window.open('https://t.me/laura_palmers_theme', '_blank')}
              className="gap-1 bg-dark-purple hover:bg-dark-purple/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xs:inline">Telegram</span>
            </Button>
            <Button
              onClick={() => scrollToSection("contacts")}
              className="gap-1 bg-pastel-purple/20 text-dark-purple hover:bg-pastel-purple/40 hover:text-dark-purple shadow-sm hover:shadow-md transition-all duration-300"
              size="sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xs:inline">Контакты</span>
            </Button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-smooth">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;