import { useEffect, useRef } from "react";
import { Store, ShoppingCart, Briefcase, Heart, Palette, Gem } from "lucide-react";

const TargetAudienceSection = () => {
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

  const audiences = [
    {
      icon: Store,
      title: "Бренды",
      description: "Модные, косметические и lifestyle бренды",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ShoppingCart,
      title: "Маркетплейсы",
      description: "Wildberries, Ozon, Amazon и другие площадки",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Briefcase,
      title: "Инфобизнес",
      description: "Курсы, коучинг, личные бренды",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Heart,
      title: "Handmade",
      description: "Рукодельные изделия и авторские работы",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Косметика",
      description: "Бьюти-бренды и косметические продукты",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Gem,
      title: "Украшения",
      description: "Ювелирные изделия и аксессуары",
      color: "from-yellow-500 to-purple-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="fade-in-up inline-flex items-center gap-2 bg-secondary/50 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Целевая аудитория</span>
            </div>

            <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-foreground mb-6">
              Кому подойдёт
            </h2>
            
            <p className="fade-in-up text-xl text-muted-foreground max-w-3xl mx-auto">
              Мои решения идеально подходят для различных видов бизнеса, которым нужен качественный визуальный контент
            </p>
          </div>

          {/* Audience grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div 
                  key={index}
                  className="fade-in-up group bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-medium transition-smooth group-hover:scale-110">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {audience.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="fade-in-up text-center mt-16 bg-card border border-border rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Не нашли свою сферу?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Нейросети могут создать контент для любого бизнеса. Расскажите о своём проекте, 
              и мы найдём идеальное решение.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-accent px-8 py-3 rounded-xl font-medium shadow-soft hover:shadow-medium transition-smooth transform hover:scale-105">
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;