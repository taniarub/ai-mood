import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-subtle pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-soft">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Нейроконтент нового поколения</span>
            </div>

            {/* Main heading */}
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
              <span className="gradient-primary bg-clip-text text-transparent">MoodAI</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed">
              ИИ-контент для брендов и маркетплейсов
            </p>

            {/* Description */}
            <p className="hero-subtitle text-lg text-muted-foreground mb-12 leading-relaxed">
              Создаю уникальные фото, видео и сайты с помощью искусственного интеллекта. 
              Без съёмки, быстро и профессионально.
            </p>

            {/* CTA Button */}
            <div className="hero-button">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => {
                  document.getElementById('portfolio')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Смотреть портфолио
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-hover">
              <img 
                src="/lovable-uploads/456b4043-2928-4a14-bed4-fc5c1d80f2ea.png" 
                alt="Создание контента с помощью ИИ" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;