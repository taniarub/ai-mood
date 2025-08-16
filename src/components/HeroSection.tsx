import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Zap, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-16">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.4)_1px,transparent_0)]" style={{ backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced badge with multiple elements */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 shadow-lg">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">ИИ-технологии нового поколения</span>
            </div>
            
          </div>

          {/* Enhanced main heading with better gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              Dream AI
            </span>
          </h1>

          {/* Improved subtitle with icon */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Уникальные фото, видео и сайты с помощью искусственного интеллекта
          </h2>

          {/* Enhanced description with better spacing */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            <span className="text-foreground font-medium">Ваши идеи → Наш ИИ → Готовый результат.</span>
            <br />
            <span className="text-muted-foreground">Экономия времени и бюджета без потери качества.</span>
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="default"
              size="lg"
              className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Выбрать услугу
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="group border-2 border-primary/30 bg-background text-foreground hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold"
              onClick={() => {
                document.getElementById('contacts')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Бесплатная консультация
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;