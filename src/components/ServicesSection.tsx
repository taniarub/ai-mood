import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Zap, Globe, Smartphone, Rocket, CheckCircle, Send, AlertCircle, ArrowRight, Layout, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import aiImage from "@/assets/images/website/ai.png";
import anyImage from "@/assets/images/website/any.png";
import web1Image from "@/assets/images/website/web1.png";
import flowerImage from "@/assets/images/website/flower.png";
import shoolImage from "@/assets/images/website/shool.png";
import pilImage from "@/assets/images/website/pil.png";
import dentImage from "@/assets/images/website/dent.png";

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [activeService, setActiveService] = useState<number>(0);

  // Telegram configuration
  const TELEGRAM_BOT_TOKEN = '8017033289:AAFs2Zm2-eU1opGIYYDibKbmLe9bqikNAnI';
  const TELEGRAM_CHAT_ID = '277234658';

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  const sendToTelegram = async (data: typeof formData) => {
    const message = `
🎯 *НОВАЯ ЗАЯВКА НА САЙТ С DREAM AI*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
📦 *Пакет:* ${data.package}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
🌐 *Источник:* Главная страница (Секция услуг)
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

  const portfolioWorks = [
    {
      id: 'ai',
      title: 'AI-Academy',
      description: 'Сайт школы искусственного интеллекта, который привлекает учеников (временно работает только с VPN)',
      image: aiImage,
      url: 'https://preview--neural-pathways-academy.lovable.app',
      category: 'Корпоративный портал'
    },
    {
      id: 'any',
      title: 'AnyTranslator — AI-переводчик',
      description: 'Простой сайт переводчика с ясными кнопками и удобным интерфейсом',
      image: anyImage,
      url: 'https://anytranslator.app/',
      category: 'Сайт для IT-компании'
    },
    {
      id: 'vetka',
      title: 'Flora Dream',
      description: 'Красивый сайт цветочного магазина с лёгким заказом и бронированием',
      image: web1Image,
      url: 'https://vetka-recreation.vercel.app/',
      category: 'Интернет-магазин'
    },
    {
      id: 'flower',
      title: 'Mon Amour Flowers',
      description: 'Красивый сайт цветочного магазина с лёгким заказом',
      image: flowerImage,
      url: 'https://mon-amour-flowers.vercel.app/',
      category: 'Landing Page'
    },
    {
      id: 'school',
      title: 'Language School',
      description: 'Простой сайт языковой школы с ярким дизайном',
      image: shoolImage,
      url: 'https://language-school-clone.vercel.app/',
      category: 'Промо-страница'
    },
    {
      id: 'pilates',
      title: 'Pilates LabSpace',
      description: 'Стильный сайт студии пилатеса с удобной записью',
      image: pilImage,
      url: 'https://pilates-six.vercel.app/',
      category: 'Сайт услуг'
    },
    {
      id: 'brightsmile',
      title: 'BrightSmile Clinic',
      description: 'Простой сайт стоматологической клиники с удобной записью',
      image: dentImage,
      url: 'https://brightsmile-clinic.vercel.app/',
      category: 'Медицинский сайт'
    }
  ];

  const services = [
    {
      id: 1,
      title: "Индивидуальный дизайн",
      description: "Уникальный дизайн под ваш бренд. Мы не используем шаблоны, каждый проект создается с нуля под ваши задачи.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Адаптивная верстка",
      description: "Идеальное отображение на всех устройствах. Ваш сайт будет удобен на любом смартфоне, планшете и десктопе.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "SEO оптимизация",
      description: "Настройка для поисковых систем. Правильная структура, мета-теги и быстрая загрузка для лучшего ранжирования.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Контент под ключ",
      description: "Пишем продающие тексты и создаем графику. Вам не нужно искать копирайтера или дизайнера отдельно.",
      icon: Layout,
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Сложные интеграции",
      description: "CRM, эквайринг, аналитика. Подключаем все необходимые сервисы для автоматизации вашего бизнеса.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Техническая поддержка",
      description: "Не бросаем после запуска. Помогаем с развитием, обновлением контента и мониторингом работоспособности.",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4">
        
        {/* Service description - Accordion Style */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column - Sticky Content */}
            <div className="lg:col-span-5 relative">
               <div className="sticky top-24">
                  <div className="inline-block mb-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                      НАШИ ПРЕИМУЩЕСТВА
                    </span>
          </div>
          
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                    Прозрачный процесс работы
                  </h2>
                  
                  <div className="flex items-center gap-4 mb-10">
                     <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                          <img src="https://i.pravatar.cc/100?img=33" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                          <img src="https://i.pravatar.cc/100?img=47" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                           <span className="text-xs font-bold text-slate-600">+3</span>
              </div>
            </div>
                     <p className="text-sm text-slate-600 max-w-[200px] leading-tight">
                        Мы создаем не просто сайты, а эффективные инструменты
              </p>
            </div>

              </div>
            </div>

            {/* Right Column - Accordion List */}
            <div className="lg:col-span-7 flex flex-col">
               {services.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`border-t border-slate-200 py-8 cursor-pointer group transition-all duration-500 ${activeService === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                    onClick={() => setActiveService(index)}
                  >
                     <div className="flex items-baseline gap-4 md:gap-8 mb-4">
                        <span className="text-sm md:text-base font-mono text-slate-400 font-medium">
                           {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex-1 group-hover:text-primary transition-colors">
                           {service.title}
                        </h3>
                        <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-transform duration-300 ${activeService === index ? 'rotate-180 bg-slate-900 text-white border-slate-900' : 'bg-transparent text-slate-400'}`}>
                           <ArrowRight className={`w-4 h-4 ${activeService === index ? 'rotate-[-45deg]' : ''}`} />
                        </div>
                </div>

                     <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${activeService === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="min-h-0">
                              <p className="text-slate-600 text-lg leading-relaxed pl-8 md:pl-12">
                                 {service.description}
                              </p>
                </div>
              </div>
            </div>
               ))}
            </div>
          </div>
        </div>

        {/* Portfolio preview - Carousel Style */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Примеры работ
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Современные сайты и лендинги, реализованные с помощью ИИ и современных технологий
            </p>
          </div>
          
          <div className="relative px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {portfolioWorks.map((work) => (
                  <CarouselItem key={work.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group relative rounded-[2.5rem] bg-white border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-[500px]">
                      {/* Image Container */}
                      <div className="absolute inset-0 z-0">
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                         <img 
                          src={work.image} 
                          alt={work.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                         />
                      </div>

                      {/* Content Overlay */}
                      <div className="relative z-20 p-8 flex flex-col h-full justify-end text-white">
                        <div className="mb-auto flex justify-between items-start">
                          <Badge variant="secondary" className="backdrop-blur-md bg-white/20 text-white border-white/20 px-4 py-1.5 rounded-full shadow-sm">
                      {work.category}
                    </Badge>
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                             <ArrowUpRight size={20} />
                  </div>
                </div>
                        
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight">{work.title}</h3>
                          <p className="text-slate-200 text-base md:text-lg mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {work.description}
                          </p>
                          <a 
                            href={work.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-white/0 hover:border-white transition-all pb-1"
                          >
                    Смотреть проект <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
                    </div>
                  </CarouselItem>
            ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex h-12 w-12 border-2 bg-white hover:bg-slate-50" />
              <CarouselNext className="hidden md:flex h-12 w-12 border-2 bg-white hover:bg-slate-50" />
            </Carousel>
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-6 text-lg font-semibold rounded-full border-2 hover:bg-slate-50 transition-all"
              onClick={() => handleCategoryClick('/web-design')}
            >
              Смотреть все кейсы <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Pricing packages */}
        <div className="max-w-6xl mx-auto mb-20 mt-20">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Выберите подходящий пакет для вашего проекта
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all rounded-[2.5rem] p-8 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-primary group-hover:to-orange-400 transition-all duration-500" />
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-sm text-4xl">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Быстрый старт</h3>
              </div>
              
              <div className="flex-1 flex flex-col space-y-6">
                <div className="flex-1">
                  <p className="text-slate-600 text-base mb-6 text-center">
                    Идеально для запуска MVP или простого лендинга
                  </p>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> До 3 страниц</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Адаптивная верстка</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Формы заявки</li>
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-500">Срок:</span>
                      <span className="font-bold text-slate-900">1–2 дня</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Стоимость:</span>
                      <span className="font-bold text-2xl text-primary">300 BYN</span>
                    </div>
                </div>

                <Button 
                  className="w-full rounded-xl py-6 text-base bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    const form = document.getElementById('order-form');
                    if (form) {
                      const select = form.querySelector('select[name="package"]') as HTMLSelectElement;
                      if (select) select.value = 'quick-start';
                      form.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Выбрать пакет
                </Button>
              </div>
            </div>
            {/* Package 2 */}
            <div className="bg-white border-2 border-primary shadow-2xl hover:shadow-3xl transition-all rounded-[2.5rem] p-8 flex flex-col h-full group relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-6 right-6">
                <span className="bg-primary text-white px-4 py-1.5 text-sm font-bold rounded-full shadow-md">
                  Популярный
                </span>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm text-5xl">
                  🎨
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Персональный</h3>
              </div>
              
              <div className="flex-1 flex flex-col space-y-6">
                <div className="flex-1">
                  <p className="text-slate-600 text-base mb-6 text-center font-medium">
                    Индивидуальный дизайн и продающая структура
                  </p>
                  <ul className="space-y-4 text-slate-700 text-sm font-medium">
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> До 7 страниц (Главная, Услуги, Контакты)</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Адаптив под все устройства</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Интеграция форм и мессенджеров</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Базовое SEO и аналитика</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Копирайтинг текстов</li>
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-500">Срок:</span>
                      <span className="font-bold text-slate-900">3–5 дней</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Стоимость:</span>
                      <span className="font-bold text-3xl text-primary">500 BYN</span>
                    </div>
                </div>

                <Button 
                  className="w-full rounded-xl py-7 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all font-bold"
                  onClick={() => {
                    const form = document.getElementById('order-form');
                    if (form) {
                      const select = form.querySelector('select[name="package"]') as HTMLSelectElement;
                      if (select) select.value = 'personal-design';
                      form.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Заказать проект
                </Button>
              </div>
            </div>
            {/* Package 3 */}
            <div className="bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all rounded-[2.5rem] p-8 flex flex-col h-full group relative overflow-hidden">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-sm text-4xl">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-slate-900">PRO Business</h3>
              </div>
              
              <div className="flex-1 flex flex-col space-y-6">
                <div className="flex-1">
                  <p className="text-slate-600 text-base mb-6 text-center">
                    Комплексное решение для серьезного бизнеса
                  </p>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Неограниченное число страниц</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Интернет-магазин / Каталог</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Сложные интеграции (CRM, 1C)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Продвинутое SEO</li>
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-500">Срок:</span>
                      <span className="font-bold text-slate-900">5–7 дней</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Стоимость:</span>
                      <span className="font-bold text-2xl text-primary">700 BYN</span>
                    </div>
                </div>

                <Button 
                  className="w-full rounded-xl py-6 text-base bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    const form = document.getElementById('order-form');
                    if (form) {
                      const select = form.querySelector('select[name="package"]') as HTMLSelectElement;
                      if (select) select.value = 'extended';
                      form.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Выбрать пакет
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-4 mb-4 text-xs text-muted-foreground text-left">
            Окончательная стоимость зависит от проекта и его сложности
          </div>
          <div className="max-w-6xl mx-auto mt-4 mb-4 text-xs text-muted-foreground text-left">
            Бесплатная техподдержка сайта в течение 1 месяца
          </div>
        </div>


        {/* Order Form */}
        <div id="order-form" className="max-w-2xl mx-auto mt-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Обсудим ваш проект
            </h3>
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
              className="w-full gap-2 bg-dark-purple hover:bg-dark-purple/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
    </section>
  );
};

export default ServicesSection;
