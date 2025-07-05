import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero-bg pt-16">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Main Content - centered */}
            <div className="lg:col-span-2 text-center lg:text-left lg:pr-8">
              {/* Main heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sans">
                <span style={{ color: '#7C3AED' }}>MoodAI</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground mb-8 leading-relaxed font-medium">
                ИИ-контент для брендов и маркетплейсов
              </p>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Создаю уникальные фото, видео и сайты с помощью искусственного интеллекта. 
                Без съёмки, быстро и профессионально.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group rounded-full px-12 py-4 text-lg font-semibold"
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

            {/* Decorative Image - max 40% width */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="relative max-w-sm w-full">
                <div className="diagonal-frame">
                  <div className="relative overflow-hidden rounded-3xl shadow-soft">
                    <img 
                      src="/lovable-uploads/43e4e5e2-9a66-42f6-a8aa-11db8d62ac5e.png" 
                      alt="Создание контента с помощью ИИ" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;