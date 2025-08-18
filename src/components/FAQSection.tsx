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
      question: "🤖 Что такое ИИ-контент и чем он лучше обычной съёмки?",
      answer: "ИИ-контент — это фото, видео и дизайн, созданные нейросетями. В отличие от обычной съёмки, вы получаете результат в 10 раз быстрее, в 5 раз дешевле, с безлимитными вариантами моделей и локаций. Никаких студий, фотографов и долгих согласований — только техническое задание и готовый результат за несколько часов.",
      highlight: "В 10 раз быстрее, в 5 раз дешевле"
    },
    {
      question: "👥 Кому подойдут наши услуги?",
      answer: "Идеально для брендов одежды и косметики, продавцов на маркетплейсах (Wildberries, Ozon), инфобизнеса и личных брендов, handmade мастеров, ювелирных магазинов. Если вам нужен качественный визуальный контент без переплат — это для вас.",
      highlight: "500+ работ для 50+ брендов"
    },
    {
      question: "🎨 Что именно мы создаём?",
      answer: "• Фото с ИИ-моделями любого типажа и стиля\n• Видео для Reels и рекламы в соцсетях\n• Карточки товаров для маркетплейсов\n• Современные сайты и лендинги\n• Lifestyle съёмки и предметную фотографию\n\nВсе виды визуального контента под ключ!",
      highlight: "Полный цикл визуального контента"
    },
    {
      question: "⚡ Почему ИИ-контент действительно работает?",
      answer: "✅ Экономия времени: минуты вместо недель\n✅ Безлимитные варианты: любые модели, позы, фоны\n✅ Мгновенные правки: изменения за минуты\n✅ Современная эстетика: всегда актуальные тренды\n✅ Без зависимости от людей: никаких срывов съёмок\n✅ Масштабируемость: от 1 фото до 1000 за день",
      highlight: "+300% вовлечённости аудитории"
    },
    {
      question: "🏆 Как мы гарантируемкачество?",
      answer: "• Показываю превью перед финальной генерацией\n• Безлимитные правки до вашего 100% одобрения\n• 300+ успешных проектов в портфолио\n• Работаю только с профессиональными ИИ-инструментами\n• Гарантия возврата денег, если результат не устроит",
      highlight: "300+ довольных клиентов"
    },
    {
      question: "🚀 Что мне нужно предоставить для начала?",
      answer: "Минимум информации для максимального результата:\n• Описание проекта и целей (2-3 предложения)\n• Примеры желаемого стиля (ссылки на фото)\n• Технические требования (размеры, форматы)\n• Сроки и бюджет\n\nВсё остальное я беру на себя — от идеи до готового контента!",
      highlight: "Запуск проекта за 1 день"
    },
    {
      question: "🤔 А если мне не понравится результат?",
      answer: "Этого не произойдёт! 😊 Мы работаем поэтапно:\n1. Обсуждаем ТЗ и показываю примеры\n2. Создаю тестовые варианты для утверждения\n3. Вносим правки (бесплатно и без ограничений)\n4. Финальная генерация только после вашего \"ДА!\"\n\nГарантия качества — моя репутация стоит дороже одного заказа.",
      highlight: "100% гарантия качества"
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
              Всё, что нужно знать об ИИ-контенте для вашего бизнеса
            </p>

            <div className="fade-in-up">
              <Button 
                onClick={handleContactClick}
                className="gap-2"
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
                            🚀 Готовы начать проект?
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Напишите нам сейчас и получите персональную консультацию + расчёт стоимости бесплатно!
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
              Напишите нам лично — ответим в течение часа и рассчитаем2 стоимость вашего проекта
            </p>
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="gap-2"
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