import { useEffect, useRef } from "react";
import { Brain, Zap, DollarSign } from "lucide-react";

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
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Main content */}
          <h2 className="fade-in-up text-4xl font-bold text-foreground mb-8">
            Ваши идеи оживают за минуты, а не недели!
          </h2>

          <p className="fade-in-up text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
            Мы создаём сайты с помощью нейросетей
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="fade-in-up group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-[1.25rem] bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform text-orange-600 border border-slate-100 mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-700 transition-colors">Быстро</h3>
            <p className="text-base text-slate-600 leading-relaxed">Готовый результат за несколько часов вместо недель съёмок</p>
          </div>

          <div className="fade-in-up group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-[1.25rem] bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform text-purple-600 border border-slate-100 mb-6">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">Умно</h3>
            <p className="text-base text-slate-600 leading-relaxed">Нейросети создают уникальный контент под ваши задачи</p>
          </div>

          <div className="fade-in-up group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 rounded-[1.25rem] bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform text-blue-600 border border-slate-100 mb-6">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Качественно</h3>
            <p className="text-base text-slate-600 leading-relaxed">Профессиональный результат, неотличимый от реальной съёмки</p>
          </div>

          <div className="fade-in-up group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 rounded-[1.25rem] bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform text-emerald-600 border border-slate-100 mb-6">
              <DollarSign className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Экономично</h3>
            <p className="text-base text-slate-600 leading-relaxed">Стоимость в разы ниже традиционной съёмки и производства</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;