import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingBag, Camera, Zap, CheckCircle, Sparkles } from "lucide-react";
import Header from "@/components/Header";

interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  imageCount: number;
  route: string;
  icon: React.ReactNode;
}

const PhotoVideoService = () => {
  const navigate = useNavigate();

  const categories: PortfolioCategory[] = [
    {
      id: "fashion",
      title: "Одежда и аксессуары",
      description: "Модные фотосессии, портреты моделей, презентация одежды и аксессуаров",
      imageCount: 26,
      route: "/photography",
      icon: <ShoppingBag className="w-6 h-6" />
    },
    {
      id: "cosmetics",
      title: "Косметика и уход",
      description: "Профессиональная съемка косметических продуктов, средств по уходу",
      imageCount: 12,
      route: "/product-photography",
      icon: <Camera className="w-6 h-6" />
    },
    {
      id: "product",
      title: "Предметная съёмка",
      description: "Элегантная презентация товаров, ювелирных изделий и других продуктов",
      imageCount: 0,
      route: "/item-photography",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const handleBackToServices = () => {
    navigate('/#services');
  };

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-subtle pt-24 pb-16">
        <div className="container mx-auto px-4 py-12">
          {/* Back button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={handleBackToServices}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад к услугам
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6">
              Генерация фотографий и видео
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Создаю профессиональный визуальный контент для социальных сетей, маркетплейсов и брендинга с помощью ИИ-технологий
            </p>
          </div>

          {/* Service description */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Что входит в услугу
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный спектр AI-решений для создания профессионального визуального контента
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Camera className="w-6 h-6 text-emerald-600" />,
                  title: "AI-фотографии и видео под ваш бренд",
                  description: "Генерация уникального визуального контента с учетом корпоративного стиля"
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-blue-600" />,
                  title: "Контент для соцсетей и рекламы",
                  description: "Создание привлекательного контента для всех популярных платформ"
                },
                {
                  icon: <ShoppingBag className="w-6 h-6 text-purple-600" />,
                  title: "Карточки товаров для маркетплейсов",
                  description: "Профессиональные изображения продукции для онлайн-продаж"
                },
                {
                  icon: <Zap className="w-6 h-6 text-orange-600" />,
                  title: "Предметная и beauty-съёмка",
                  description: "Высококачественная съемка товаров и косметических продуктов"
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                  title: "Быстрые сроки и качественный результат",
                  description: "Оперативная реализация проектов без компромиссов в качестве"
                },
                {
                  icon: <Camera className="w-6 h-6 text-rose-600" />,
                  title: "Поддержка и помощь после сдачи",
                  description: "Консультации и техническая поддержка по готовым материалам"
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-background to-muted flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Portfolio categories */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Примеры работ
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card 
                  key={category.id}
                  className="group cursor-pointer bg-card border border-transparent hover:border-primary/60 hover:shadow-[0_2px_16px_rgba(139,92,246,0.10)] transition-all rounded-3xl"
                  onClick={() => handleCategoryClick(category.route)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="text-primary font-medium text-sm">
                      Посмотреть портфолио →
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoVideoService;
