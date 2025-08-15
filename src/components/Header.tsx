import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

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
            className="text-2xl font-bold gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => {
              if (window.location.pathname !== '/') {
                window.location.href = '/';
              } else {
                scrollToSection("hero");
              }
            }}
          >
            MoodAI
          </div>

          {/* Navigation and CTA */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Telegram button */}
            <Button
              onClick={() => window.open('https://t.me/laura_palmers_theme', '_blank')}
              className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              Telegram
            </Button>
            
            {/* Contacts button */}
            <Button
              onClick={() => scrollToSection("contacts")}
              className="gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-500/90 hover:to-blue-600/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
              size="sm"
            >
              <Phone className="w-4 h-4" />
              Контакты
            </Button>
          </div>

          {/* Mobile buttons and menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={() => window.open('https://t.me/laura_palmers_theme', '_blank')}
              className="gap-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xs:inline">Telegram</span>
            </Button>
            <Button
              onClick={() => scrollToSection("contacts")}
              className="gap-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-500/90 hover:to-blue-600/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
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