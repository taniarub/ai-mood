import { useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navigationItems = [
    { label: "Обо мне", id: "about" },
    { label: "Что я создаю", id: "services" },
    { label: "Портфолио", id: "portfolio" },
    { label: "Кому подойдёт", id: "audience" },
    { label: "Почему это работает", id: "benefits" },
    { label: "Контакты", id: "contacts" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            MoodAI
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-muted-foreground hover:text-primary transition-smooth">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;