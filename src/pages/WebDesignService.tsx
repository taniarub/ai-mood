import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Globe } from "lucide-react";
import Header from "@/components/Header";

interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  imageCount: number;
  route: string;
  icon: React.ReactNode;
}

const WebDesignService = () => {
  const navigate = useNavigate();

  const categories: PortfolioCategory[] = [
    {
      id: "landing",
      title: "Лендинги и сайты",
      description: "Современные лендинги, корпоративные сайты и интернет-магазины",
      imageCount: 3,
      route: "/web-design",
      icon: <Globe className="w-6 h-6" />
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
        <div className="container mx-auto px-4">
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
              Сайты и лендинги под ключ
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Современные сайты и лендинги, которые приносят заявки и продажи
            </p>
          </div>

          {/* Service description */}
          <div className="max-w-lg mx-auto mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-7 h-7 text-primary" />
              <h2 className="text-3xl font-bold">Что входит в услугу</h2>
            </div>
            <ul className="text-muted-foreground text-base mb-8 list-none flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
              <li className="inline-flex">• Быстрая и качественная разработка — ваши проекты готовы в срок</li>
              <li className="inline-flex">• Современные технологии и AI-инструменты для уникального контента</li>
              <li className="inline-flex">• Индивидуальный подход к каждому клиенту и проекту</li>
              <li className="inline-flex">• Адаптивный дизайн для всех устройств</li>
              <li className="inline-flex">• Фокус на высокую конверсию и рост вашего бизнеса</li>
              <li className="inline-flex">• Полная техническая поддержка и помощь после запуска</li>
            </ul>
          </div>

          {/* Pricing packages */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Выберите подходящий пакет для вашего проекта
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Package 1 */}
              <Card className="bg-card border border-transparent hover:border-primary/60 hover:shadow-[0_2px_16px_rgba(139,92,246,0.10)] transition-all rounded-3xl group">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Быстрый старт</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-base">
                    Одностраничный сайт без сложных требований к дизайну
                  </p>
                  <p className="text-muted-foreground text-base">
                    Оптимально для быстрого запуска и простого представления услуги или товара
                  </p>
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Срок:</span>
                      <span className="font-medium">1–2 дня</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Стоимость:</span>
                      <span className="font-bold text-primary">от 170 BYN</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Package 2 */}
              <Card className="bg-card border border-transparent hover:border-primary/60 hover:shadow-[0_2px_16px_rgba(139,92,246,0.10)] transition-all rounded-3xl relative group">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-base rounded-full shadow-soft">Популярный</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Персональный дизайн</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-base">
                    Одностраничный сайт с индивидуальным дизайном и структурой
                  </p>
                  <p className="text-muted-foreground text-base">
                    Детальная проработка макета, контента и визуальных элементов
                  </p>
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Срок:</span>
                      <span className="font-medium">3–5 дней</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Стоимость:</span>
                      <span className="font-bold text-primary">от 300 BYN</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Package 3 */}
              <Card className="bg-card border border-transparent hover:border-primary/60 hover:shadow-[0_2px_16px_rgba(139,92,246,0.10)] transition-all rounded-3xl group">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Расширенный функционал</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-base">
                    Всё из «Персональный дизайн» + формы, интеграции, базовая SEO-оптимизация
                  </p>
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Срок:</span>
                      <span className="font-medium">5–7 дней</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Стоимость:</span>
                      <span className="font-bold text-primary">от 500 BYN</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="max-w-6xl mx-auto mt-4 mb-4 text-xs text-muted-foreground text-left">
              Окончательная стоимость зависит от выбранного домена и регистратора
            </div>
          </div>

          {/* Portfolio preview */}
          <div className="max-w-5xl mx-auto mt-20">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Примеры работ
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Современные сайты и лендинги, реализованные с помощью ИИ и современных технологий
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl overflow-hidden shadow-soft group bg-card hover:shadow-xl transition-all cursor-pointer">
                <img src="/images/website/ai.png" alt="Neural Pathways Academy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Neural Pathways Academy</h3>
                  <p className="text-muted-foreground text-sm mb-2">Лендинг образовательного проекта с чистой типографикой и высокой конверсией</p>
                  <a href="https://preview--neural-pathways-academy.lovable.app" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Смотреть сайт →</a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft group bg-card hover:shadow-xl transition-all cursor-pointer">
                <img src="/images/website/any.png" alt="AnyTranslator" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">AnyTranslator — AI-переводчик</h3>
                  <p className="text-muted-foreground text-sm mb-2">Продуктовый сайт с лаконичным дизайном и акцентом на CTA</p>
                  <a href="https://anytranslator.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Смотреть сайт →</a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft group bg-card hover:shadow-xl transition-all cursor-pointer">
                <img src="/images/website/flower.png" alt="Mon Amour Flowers" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Mon Amour Flowers</h3>
                  <p className="text-muted-foreground text-sm mb-2">Современный сайт цветочного магазина с элегантным дизайном</p>
                  <a href="https://mon-amour-flowers.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Смотреть сайт →</a>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button 
                variant="default" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold shadow-soft hover:shadow-xl transition-all"
                onClick={() => handleCategoryClick('/web-design')}
              >
                Смотреть больше работ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDesignService;
