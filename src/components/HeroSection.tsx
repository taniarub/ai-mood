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
        <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-soft">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Нейроконтент нового поколения</span>
            </div>

            {/* Main heading */}
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 leading-tight">
              <span className="gradient-primary bg-clip-text text-transparent">MoodAI</span>
            </h1>

            {/* Subtitle */}
          <p className="hero-subtitle text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              ИИ-контент для брендов и маркетплейсов
            </p>

            {/* Description */}
          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
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
      </div>

    </section>
  );
};

export default HeroSection;