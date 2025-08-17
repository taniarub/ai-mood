import { useEffect, useRef } from "react";
import { Brain, Zap, Star, DollarSign } from "lucide-react";

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
          {/* Main content */}
          <h2 className="fade-in-up text-4xl font-bold text-foreground mb-8">
            Ваши идеи оживают за минуты, а не недели!
          </h2>

          <p className="fade-in-up text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
          Мы создаём <span className="text-emerald-600 font-semibold">фото</span>, <span className="text-blue-600 font-semibold">видео</span> и <span className="text-purple-600 font-semibold">сайты</span> с помощью нейросетей
          </p>

          <p className="fade-in-up text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            <span className="text-primary font-medium">Быстро, красиво и с учётом задач вашего бизнеса</span>
          </p>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="fade-in-up text-center group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-medium transform group-hover:scale-110 transition-smooth">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Быстро</h3>
              <p className="text-muted-foreground text-sm">Готовый результат за несколько часов вместо недель съёмок</p>
            </div>

            <div className="fade-in-up text-center group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-medium transform group-hover:scale-110 transition-smooth">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Умно</h3>
              <p className="text-muted-foreground text-sm">Нейросети создают уникальный контент под ваши задачи</p>
            </div>

            <div className="fade-in-up text-center group" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-medium transform group-hover:scale-110 transition-smooth">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Качественно</h3>
              <p className="text-muted-foreground text-sm">Профессиональный результат, неотличимый от реальной съёмки</p>
            </div>

            <div className="fade-in-up text-center group" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-medium transform group-hover:scale-110 transition-smooth">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Экономично</h3>
              <p className="text-muted-foreground text-sm">Стоимость в разы ниже традиционной съёмки и производства</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;