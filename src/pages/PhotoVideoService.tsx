import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Camera, Video, Instagram, ShoppingBag } from "lucide-react";
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
      <div className="min-h-screen bg-gradient-subtle pt-20">
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
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Video className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Генерация фотографий и видео
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Создаю профессиональный визуальный контент для социальных сетей, маркетплейсов и брендинга с помощью ИИ-технологий
            </p>
          </div>

          {/* Service description */}
          <Card className="max-w-4xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Instagram className="w-6 h-6 text-primary" />
                Что я делаю
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">📸 Фотографии</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Фотосессии для брендов</li>
                    <li>• Съемка косметических продуктов</li>
                    <li>• Предметная фотография</li>
                    <li>• Портреты и lifestyle контент</li>
                    <li>• Карточки товаров для маркетплейсов</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">🎥 Видео</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Короткие ролики для соцсетей</li>
                    <li>• Презентационные видео товаров</li>
                    <li>• Рекламные видео</li>
                    <li>• Контент для TikTok и Reels</li>
                    <li>• Видео для маркетплейсов</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

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
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
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
