import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Globe, Smartphone, Rocket, CheckCircle, Send, AlertCircle, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { useState, useEffect } from "react";

const WebDesignService = () => {
  const navigate = useNavigate();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Telegram configuration
  const TELEGRAM_BOT_TOKEN = '8017033289:AAFs2Zm2-eU1opGIYYDibKbmLe9bqikNAnI';
  const TELEGRAM_CHAT_ID = '277234658';

  const handleBackToServices = () => {
    navigate('/#services');
  };

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  const sendToTelegram = async (data: typeof formData) => {
    const message = `
🎯 *НОВАЯ ЗАЯВКА НА САЙТ С MOODAI*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
📦 *Пакет:* ${data.package}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
🌐 *Источник:* Страница "Сайты под ключ"
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
          package: ''
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
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Профессиональная разработка современных веб-сайтов и лендингов с индивидуальным дизайном, адаптивной версткой и высокой конверсией
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Собственная разработка</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Адаптивный дизайн</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>SEO-оптимизация</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Техподдержка включена</span>
              </div>
            </div>
          </div>

          {/* Service description */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex items-baseline gap-1">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">
                  Что входит в услугу
                </h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Rocket className="w-6 h-6 text-emerald-600" />,
                  title: "Индивидуальный дизайн",
                  description: "Уникальный дизайн под ваш бренд с современными трендами и фирменным стилем"
                },
                {
                  icon: <Smartphone className="w-6 h-6 text-blue-600" />,
                  title: "Адаптивная верстка",
                  description: "Идеальное отображение на всех устройствах: компьютеры, планшеты, смартфоны"
                },
                {
                  icon: <Globe className="w-6 h-6 text-purple-600" />,
                  title: "SEO-оптимизация",
                  description: "Настройка для поисковых систем, быстрая скорость загрузки и правильная структура"
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                  title: "Тексты и дизайн под ключ",
                  description: "Создадим привлекательный контент и современный дизайн, даже если у вас нет идей или готовых материалов."
                },
                {
                  icon: <Zap className="w-6 h-6 text-orange-600" />,
                  title: "Интеграции и формы",
                  description: "Подключение аналитики, форм обратной связи, онлайн-чатов и платежных систем"
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-rose-600" />,
                  title: "Техническая поддержка",
                  description: "Консультации, обновления, резервное копирование и помощь после запуска"
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

          
          {/* Pricing packages */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Выберите подходящий пакет для вашего проекта
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Package 1 */}
              <Card className="bg-card border border-border hover:border-primary/60 hover:shadow-lg transition-all rounded-3xl group flex flex-col h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Быстрый старт</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base">
                      Одностраничный сайт без сложных требований к дизайну
                    </p>
                    <p className="text-muted-foreground text-base mt-3">
                      Оптимально для быстрого запуска и простого представления услуги или товара
                    </p>
                    <div className="space-y-2 pt-4 border-t mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">1–2 дня</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 300 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const select = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (select) select.value = 'quick-start';
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
                  <CardTitle className="text-2xl font-bold">Персональный дизайн</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base">
                      Одностраничный сайт с индивидуальным дизайном и структурой
                    </p>
                    <p className="text-muted-foreground text-base mt-3">
                      Детальная проработка макета, контента и визуальных элементов
                    </p>
                    <div className="space-y-2 pt-4 border-t mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">3–5 дней</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 500 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const select = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (select) select.value = 'personal-design';
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
                    <span className="text-3xl">⚡</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Расширенный функционал</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-base">
                      Всё из «Персональный дизайн» + формы, интеграции, базовая SEO-оптимизация
                    </p>
                    <p className="text-muted-foreground text-base mt-3">
                      Полнофункциональный сайт с расширенными возможностями и интеграциями
                    </p>
                    <div className="space-y-2 pt-4 border-t mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="font-medium">5–7 дней</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">от 700 BYN</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    size="lg"
                    onClick={() => {
                      const form = document.getElementById('order-form');
                      if (form) {
                        const select = form.querySelector('select[name="package"]') as HTMLSelectElement;
                        if (select) select.value = 'extended';
                        form.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="max-w-6xl mx-auto mt-4 mb-4 text-xs text-muted-foreground text-left">
              Окончательная стоимость зависит от проекта и его сложности
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
                <img src="/images/website/ai.png" alt="AI-academy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">AI-academy</h3>
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
                <img src="/images/website/web1.png" alt="Flora Dream" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Flora Dream</h3>
                  <p className="text-muted-foreground text-sm mb-2">Элегантный сайт флористической студии с удобной навигацией и бронированием</p>
                  <a href="https://vetka-recreation.lovable.app" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Смотреть сайт →</a>
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

          {/* Order Form */}
          <div id="order-form" className="max-w-2xl mx-auto mt-20">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex items-baseline gap-1">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
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
                <label htmlFor="package" className="block text-sm font-medium text-foreground mb-2">
                  Тип пакета для сайта
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                >
                  <option value="">Выберите пакет</option>
                  <option value="quick-start">Быстрый старт (от 300 BYN)</option>
                  <option value="personal-design">Персональный дизайн (от 500 BYN)</option>
                  <option value="extended">Расширенный функционал (от 700 BYN)</option>
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

export default WebDesignService;
