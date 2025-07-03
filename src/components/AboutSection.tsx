import { useEffect, useRef } from "react";
import { Brain, Zap, Star } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section badge */}
          <div className="fade-in-up inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Обо мне</span>
          </div>

          {/* Main content */}
          <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-foreground mb-8">
            Создаю контент будущего с помощью ИИ
          </h2>

          <p className="fade-in-up text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Я создаю фото, видео и сайты с помощью нейросетей. 
            <span className="text-primary font-medium"> Без съёмки — быстро, реалистично и красиво.</span>
          </p>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="fade-in-up text-center group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-medium transform group-hover:scale-110 transition-smooth">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Быстро</h3>
              <p className="text-muted-foreground">Готовый результат за несколько часов вместо недель съёмок</p>
            </div>

            <div className="fade-in-up text-center group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-medium transform group-hover:scale-110 transition-smooth">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Умно</h3>
              <p className="text-muted-foreground">Нейросети создают уникальный контент под ваши задачи</p>
            </div>

            <div className="fade-in-up text-center group" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-medium transform group-hover:scale-110 transition-smooth">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Качественно</h3>
              <p className="text-muted-foreground">Профессиональный результат, неотличимый от реальной съёмки</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;