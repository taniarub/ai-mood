import { useEffect, useRef } from "react";
import { Clock, Building, Users, Zap, Eye, TrendingUp } from "lucide-react";

const WhyItWorksSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Быстро",
      description: "Готовый контент за несколько часов",
      detail: "Не нужно искать модель, студию, фотографа. Просто техническое задание — и результат готов.",
      stat: "В 10 раз быстрее",
      color: "text-green-600"
    },
    {
      icon: Building,
      title: "Без студии",
      description: "Никаких арендных площадок и оборудования",
      detail: "Создаю любые локации и сцены виртуально. От минималистичных студий до экзотических пейзажей.",
      stat: "100% виртуально",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Без модели",
      description: "ИИ-модели любого типажа и возраста",
      detail: "Подберу идеальную модель под ваш бренд. Любая внешность, стиль и образ без ограничений.",
      stat: "Безлимит образов",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Гибко",
      description: "Быстрые правки и адаптация контента",
      detail: "Нужно изменить цвет фона, позу модели или добавить продукт? Это делается за минуты.",
      stat: "Мгновенные правки",
      color: "text-orange-600"
    },
    {
      icon: Eye,
      title: "Визуально стильно",
      description: "Современная эстетика и тренды",
      detail: "Слежу за актуальными тенденциями в визуале и создаю контент, который привлекает внимание.",
      stat: "+300% вовлечение",
      color: "text-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Экономично",
      description: "Стоимость в разы ниже традиционной съёмки",
      detail: "Один проект с ИИ стоит как час работы фотографа. При этом получаете десятки вариантов.",
      stat: "В 5 раз дешевле",
      color: "text-indigo-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="scale-in text-4xl md:text-5xl font-bold text-foreground mb-6">
              Почему это работает?
            </h2>
            
            <p className="scale-in text-xl text-muted-foreground max-w-3xl mx-auto">
              ИИ-контент решает основные проблемы традиционной съёмки и открывает новые возможности
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="scale-in group bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-smooth">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {benefit.title}
                        </h3>
                        <div className={`text-sm font-medium ${benefit.color}`}>
                          {benefit.stat}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3 font-medium">
                      {benefit.description}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;