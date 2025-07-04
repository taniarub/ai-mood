import { useEffect, useRef } from "react";
import { Camera, Video, ShoppingBag, Globe } from "lucide-react";

const ServicesSection = () => {
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

  const services = [
    {
      icon: Camera,
      title: "Фото с ИИ-моделями",
      description: "Профессиональные фотосессии с виртуальными моделями для вашего бренда",
      features: ["Любой стиль и образ", "Разные возрасты и типажи", "Безлимитные варианты"]
    },
    {
      icon: Video,
      title: "Видео для Reels и рекламы",
      description: "Динамичные ролики для социальных сетей и рекламных кампаний",
      features: ["Короткие ролики", "Анимация и эффекты", "Адаптация под платформы"]
    },
    {
      icon: ShoppingBag,
      title: "Генерация карточек товаров",
      description: "Привлекательные изображения товаров для маркетплейсов и интернет-магазинов",
      features: ["Разные ракурсы", "Стильные композиции", "Lifestyle съёмка"]
    },
    {
      icon: Globe,
      title: "Сайты и лендинги",
      description: "Современные веб-решения с уникальным дизайном и контентом",
      features: ["Адаптивный дизайн", "SEO-оптимизация", "Быстрая загрузка"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="scale-in text-4xl md:text-5xl font-bold text-foreground mb-6">
              Что я создаю?
            </h2>
            
            <p className="scale-in text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр ИИ-решений для вашего бизнеса — от фотоконтента до веб-сайтов
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="scale-in group bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-smooth group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 gradient-primary rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default ServicesSection;