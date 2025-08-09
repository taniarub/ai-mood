import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ExternalLink } from "lucide-react";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioCosmetics from "@/assets/portfolio-cosmetics.jpg";
import portfolioJewelry from "@/assets/portfolio-jewelry.jpg";

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

  const portfolioItems = [
    {
      id: 1,
      image: portfolioFashion,
      title: "AI-модели для брендов",
      category: "Одежда и аксессуары",
      description: "Модная фотосессия с ИИ-моделью для брендинга",
      route: "/photography"
    },
    {
      id: 2,
      image: portfolioCosmetics,
      title: "Косметика и уход",
      category: "Косметика и уход",
      description: "Стильные фото косметических продуктов",
      route: "/product-photography"
    },
    {
      id: 3,
      image: portfolioJewelry,
      title: "Предметная съемка",
      category: "Предметная съёмка",
      description: "Элегантная презентация ювелирных изделий",
      route: "/item-photography"
    },
    {
      id: 4,
      image: portfolioFashion,
      title: "Lifestyle контент",
      category: "Видео",
      description: "Динамичные ролики для социальных сетей",
      route: "/video"
    },
    {
      id: 5,
      image: portfolioCosmetics,
      title: "Карточки товаров",
      category: "E-commerce",
      description: "Профессиональные изображения для маркетплейсов",
      route: "/ecommerce"
    },
    {
      id: 6,
      image: portfolioJewelry,
      title: "Лендинги и сайты",
      category: "Лендинги и сайты",
      description: "Современные сайты и лендинги с высоким UX и конверсией",
      route: "/web-design"
    }
  ];

  const handleItemClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="scale-in text-4xl md:text-5xl font-bold text-foreground mb-6">
              Мои работы
            </h2>
            
            <p className="scale-in text-xl text-muted-foreground max-w-3xl mx-auto">
              Примеры ИИ-контента, созданного для различных брендов и проектов. Кликните на категорию, чтобы посмотреть больше работ.
            </p>
          </div>

          {/* Portfolio grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id}
                className="scale-in group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleItemClick(item.route)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-white font-semibold">{item.title}</h3>
                        </div>
                        <button 
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-smooth"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleItemClick(item.route);
                          }}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 text-xs text-primary font-medium">
                    Нажмите, чтобы посмотреть больше →
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;