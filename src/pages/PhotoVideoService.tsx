import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingBag, Camera, Zap, CheckCircle, Sparkles, Send, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import { useState } from "react";

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
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: '',
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Telegram configuration
  const TELEGRAM_BOT_TOKEN = '8017033289:AAFs2Zm2-eU1opGIYYDibKbmLe9bqikNAnI';
  const TELEGRAM_CHAT_ID = '277234658';

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

  const sendToTelegram = async (data: typeof formData) => {
    const message = `
🎯 *НОВАЯ ЗАЯВКА НА ФОТО/ВИДЕО С MOODAI*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
📦 *Пакет:* ${data.package}
🎨 *Тип услуги:* ${data.serviceType}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
🌐 *Источник:* Страница "Фото и видео"
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.ok;
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendToTelegram(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          package: '',
          serviceType: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                  title: "Экономия для вашего бизнеса",
                  description: "Нет затрат на модели, студию, реквизит и съёмочную команду"
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border border-border backdrop-blur-sm hover:-translate-y-1">
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

          {/* Image Generation Packages */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Генерация изображений
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Package 1 */}
              <Card className="bg-card border border-border hover:border-primary/60 hover:shadow-lg transition-all rounded-3xl group flex flex-col h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📸</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Базовый</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base mb-4">
                      До 3 уникальных изображений
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• Разрешение: до 1024×1024 px</li>
                      <li>• Без сложных правок</li>
                      <li>• Быстрое выполнение</li>
                    </ul>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">до 24 часов</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 25 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const serviceSelect = form.querySelector('select[name="serviceType"]') as HTMLSelectElement;
                        const packageSelect = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (serviceSelect) serviceSelect.value = 'images';
                        if (packageSelect) packageSelect.value = 'basic-images';
                        form.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
              {/* Package 2 */}
              <Card className="bg-card border border-border hover:border-primary/60 hover:shadow-lg transition-all rounded-3xl relative group flex flex-col h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-base rounded-full shadow-soft">Популярный</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Стандарт</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base mb-4">
                      До 10 уникальных изображений в согласованном стиле
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• Разрешение: до 2048×2048 px</li>
                      <li>• 1 итерация правок включена</li>
                      <li>• Единая цветовая гамма</li>
                    </ul>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">1–2 рабочих дня</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 60 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const serviceSelect = form.querySelector('select[name="serviceType"]') as HTMLSelectElement;
                        const packageSelect = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (serviceSelect) serviceSelect.value = 'images';
                        if (packageSelect) packageSelect.value = 'standard-images';
                        form.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
              {/* Package 3 */}
              <Card className="bg-card border border-border hover:border-primary/60 hover:shadow-lg transition-all rounded-3xl group flex flex-col h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💎</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Премиум</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base mb-4">
                      До 20 уникальных изображений + оптимизация
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• Разрешение: до 4096×4096 px</li>
                      <li>• До 3 итераций правок</li>
                      <li>• Фирменный стиль (по желанию)</li>
                      <li>• Оптимизация для соцсетей</li>
                    </ul>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">2–4 рабочих дня</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 120 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const serviceSelect = form.querySelector('select[name="serviceType"]') as HTMLSelectElement;
                        const packageSelect = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (serviceSelect) serviceSelect.value = 'images';
                        if (packageSelect) packageSelect.value = 'premium-images';
                        form.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Video Generation Packages */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Генерация видео
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Video Package 1 */}
              <Card className="bg-card border border-border hover:border-primary/60 hover:shadow-lg transition-all rounded-3xl group flex flex-col h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎬</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Короткое видео</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base mb-4">
                      Длительность: до 5 секунд
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• Без сложного монтажа</li>
                      <li>• Разрешение: 1080p</li>
                      <li>• Быстрое выполнение</li>
                    </ul>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">1 рабочий день</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 40 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const serviceSelect = form.querySelector('select[name="serviceType"]') as HTMLSelectElement;
                        const packageSelect = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (serviceSelect) serviceSelect.value = 'video';
                        if (packageSelect) packageSelect.value = 'short-video';
                        form.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
              {/* Video Package 2 */}
              <Card className="bg-card border border-border hover:border-primary/60 hover:shadow-lg transition-all rounded-3xl relative group flex flex-col h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-base rounded-full shadow-soft">Рекомендуемый</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📺</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Рекламный ролик</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base mb-4">
                      Длительность: до 15 секунд
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• Концепция согласовывается заранее</li>
                      <li>• Лёгкий монтаж, добавление текста</li>
                      <li>• Разрешение: 1080p или 4K</li>
                    </ul>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">2–3 рабочих дня</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 100 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const serviceSelect = form.querySelector('select[name="serviceType"]') as HTMLSelectElement;
                        const packageSelect = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (serviceSelect) serviceSelect.value = 'video';
                        if (packageSelect) packageSelect.value = 'ad-video';
                        form.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
              {/* Video Package 3 */}
              <Card className="bg-card border border-border hover:border-primary/60 hover:shadow-lg transition-all rounded-3xl group flex flex-col h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎥</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Премиум-видео</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base mb-4">
                      Длительность: до 30 секунд
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• Генерация кадров в едином стиле</li>
                      <li>• Добавление текста, эффектов, музыки</li>
                      <li>• Разрешение: 4K</li>
                      <li>• До 2 итераций правок</li>
                    </ul>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">3–5 рабочих дней</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 200 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const serviceSelect = form.querySelector('select[name="serviceType"]') as HTMLSelectElement;
                        const packageSelect = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (serviceSelect) serviceSelect.value = 'video';
                        if (packageSelect) packageSelect.value = 'premium-video';
                        form.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
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

          {/* Order Form */}
          <div id="order-form" className="max-w-2xl mx-auto mt-20">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Обсудим ваш проект
                </h2>
              </div>
              <p className="text-muted-foreground">
                Оставьте заявку, и я свяжусь с вами для обсуждения деталей
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Номер телефона *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
                  Тип услуги
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                >
                  <option value="">Выберите тип услуги</option>
                  <option value="images">Генерация изображений</option>
                  <option value="video">Генерация видео</option>
                </select>
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-medium text-foreground mb-2">
                  Пакет
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                >
                  <option value="">Выберите пакет</option>
                  <optgroup label="Генерация изображений">
                    <option value="basic-images">Базовый (от 25 BYN)</option>
                    <option value="standard-images">Стандарт (от 60 BYN)</option>
                    <option value="premium-images">Премиум (от 120 BYN)</option>
                  </optgroup>
                  <optgroup label="Генерация видео">
                    <option value="short-video">Короткое видео (от 40 BYN)</option>
                    <option value="ad-video">Рекламный ролик (от 100 BYN)</option>
                    <option value="premium-video">Премиум-видео (от 200 BYN)</option>
                  </optgroup>
                </select>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Заявка отправлена!</span>
                  </div>
                  <p className="text-emerald-700 text-sm mt-1">
                    Свяжусь с вами в ближайшее время для обсуждения проекта
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-2 text-red-800">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-semibold">Ошибка отправки</span>
                  </div>
                  <p className="text-red-700 text-sm mt-1">
                    Пожалуйста, попробуйте еще раз или свяжитесь напрямую
                  </p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoVideoService;
