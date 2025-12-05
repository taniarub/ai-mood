import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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

  const faqs = [
    {
      question: "🤖 Что такое ИИ-генерация контента?",
      answer: "ИИ-генерация — это создание фото и видео с помощью нейросетей. Вы получаете профессиональный контент с моделями любого типажа, в любой локации и стиле — без фотосъёмок, студий и моделей. Результат готов за часы, а не недели, и стоит в разы дешевле традиционной съёмки.",
      highlight: "Быстрее и доступнее обычной съёмки"
    },
    {
      question: "👥 Для кого подойдут AI-фото и видео?",
      answer: "• Бренды одежды и аксессуаров\n• Косметические марки\n• Магазины на Wildberries, Ozon, Яндекс.Маркет\n• Ювелирные изделия и handmade\n• Производители товаров для дома\n• SMM-специалисты и агентства\n\nЕсли вам нужен визуал для карточек товаров, соцсетей или рекламы — это для вас.",
      highlight: "Для маркетплейсов и соцсетей"
    },
    {
      question: "🎨 Какие услуги вы предоставляете?",
      answer: "• AI-фото с моделями для одежды и аксессуаров\n• Предметная съёмка косметики и товаров\n• Видеоконтент для Reels, TikTok и рекламы\n• Карточки товаров для маркетплейсов\n• Разработка сайтов и лендингов\n• Брендированный контент для социальных сетей",
      highlight: "Полный цикл визуального контента"
    },
    {
      question: "⏱️ Как быстро получу готовый контент?",
      answer: "Скорость зависит от объёма:\n• 5-10 фото — 1-2 дня\n• 20-50 фото — 3-5 дней\n• Видео (15-30 сек) — 2-3 дня\n• Сайт-визитка — 5-7 дней\n• Полноценный лендинг — 7-14 дней\n\nСрочные заказы обсуждаются индивидуально!",
      highlight: "От 1 дня"
    },
    {
      question: "💰 Сколько стоят ваши услуги?",
      answer: "Цены зависят от сложности и объёма:\n• AI-фото с моделью — от 500₽/фото\n• Предметная съёмка — от 300₽/фото\n• Видео для соцсетей — от 3000₽\n• Карточки для маркетплейсов — от 400₽/карточка\n• Сайт-визитка — от 15000₽\n\nПакеты от 20 фото — скидки до 30%!",
      highlight: "Гибкая ценовая политика"
    },
    {
      question: "🔄 Можно ли внести правки?",
      answer: "Да! Мы работаем до вашего полного одобрения:\n• Обсуждаем концепцию и показываем референсы\n• Создаём тестовые варианты\n• Вносим правки (входит в стоимость)\n• Финализируем только после вашего \"Да!\"\n\nОсновные правки бесплатны, кардинальные изменения концепции обсуждаются отдельно.",
      highlight: "Правки включены в стоимость"
    },
    {
      question: "🚀 Как начать работу?",
      answer: "Всего 3 шага:\n1. Напишите нам через форму или Telegram\n2. Расскажите о проекте: что нужно, для чего, какой стиль\n3. Получите расчёт стоимости и сроков\n\nМожно начать с тестового заказа на 3-5 фото, чтобы оценить качество!",
      highlight: "Старт за 24 часа"
    }
  ];

  const handleFAQClick = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleContactClick = () => {
    document.getElementById('contacts')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-foreground mb-6">
              Часто задаваемые вопросы
            </h2>
            
            <p className="fade-in-up text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ответы на главные вопросы о AI-генерации фото и видео
            </p>

            <div className="fade-in-up">
              <Button
                onClick={handleContactClick}
                className="gap-2 hover:bg-primary active:bg-primary"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                Задать свой вопрос
              </Button>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="fade-in-up bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-smooth"
                  onClick={() => handleFAQClick(index)}
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {faq.highlight && (
                      <div className="text-sm text-primary font-medium mt-1">
                        {faq.highlight}
                      </div>
                    )}
                  </div>
                  
                  <div className="w-6 h-6 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-4 h-4 text-white" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                      
                      {index === faqs.length - 1 && (
                        <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <p className="text-sm text-primary font-medium mb-2">
                            ✨ Готовы создать контент с AI?
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Свяжитесь с нами для бесплатной консультации и расчёта стоимости вашего проекта!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="fade-in-up text-center mt-12 p-8 gradient-subtle rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами — ответим в течение часа и рассчитаем стоимость вашего проекта
            </p>
            <Button
              onClick={handleContactClick}
              size="lg"
              className="gap-2 hover:bg-primary active:bg-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Написать сейчас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 