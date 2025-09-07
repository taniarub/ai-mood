import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shirt, Palette, Gem, Zap, CheckCircle, Send, AlertCircle, Camera, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import { useState, useEffect } from "react";

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
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
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
      icon: <Shirt className="w-6 h-6 text-blue-600" />
    },
    {
      id: "cosmetics",
      title: "Косметика и уход",
      description: "Профессиональная съемка косметических продуктов, средств по уходу",
      imageCount: 12,
      route: "/product-photography",
      icon: <Palette className="w-6 h-6 text-pink-600" />
    },
    {
      id: "product",
      title: "Предметная съёмка",
      description: "Элегантная презентация товаров, ювелирных изделий и других продуктов",
      imageCount: 0,
      route: "/item-photography",
      icon: <Gem className="w-6 h-6 text-purple-600" />
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
🎯 *НОВАЯ ЗАЯВКА НА ФОТО/ВИДЕО С DREAM AI*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
💬 *Сообщение:* ${data.message || 'Не указано'}

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
          message: ''
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Что входит в услугу
              </h2>
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
                  icon: <Camera className="w-6 h-6 text-blue-600" />,
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

          {/* Portfolio categories */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Примеры работ
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card 
                  key={category.id}
                  className="group cursor-pointer bg-card border border-border hover:border-primary/60 hover:shadow-[0_2px_16px_rgba(139,92,246,0.10)] transition-all rounded-3xl"
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
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Обсудим ваш проект
              </h2>
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
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Ваше сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
                  placeholder="Расскажите, что бы вы хотели..."
                />
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
              
              <p className="text-xs text-muted-foreground text-center mt-3">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a 
                  href="/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  политикой обработки персональных данных
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoVideoService;
