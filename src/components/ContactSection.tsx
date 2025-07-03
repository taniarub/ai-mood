import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="fade-in-up inline-flex items-center gap-2 bg-secondary/50 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Контакты</span>
            </div>

            <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-foreground mb-6">
              Обсудим ваш проект
            </h2>
            
            <p className="fade-in-up text-xl text-muted-foreground max-w-3xl mx-auto">
              Расскажите о ваших задачах, и я предложу оптимальное решение с использованием ИИ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Свяжитесь со мной
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-soft">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@moodai.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-soft">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telegram</p>
                    <p className="text-muted-foreground">@moodai_creator</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="font-semibold text-foreground mb-3">Что нужно для начала работы:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 gradient-primary rounded-full"></div>
                    Описание проекта и задач
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 gradient-primary rounded-full"></div>
                    Примеры желаемого стиля
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 gradient-primary rounded-full"></div>
                    Сроки и бюджет
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 gradient-primary rounded-full"></div>
                    Технические требования
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="fade-in-up">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                <div className="space-y-4">
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
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                      placeholder="ваш@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                      Тип проекта
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                    >
                      <option value="">Выберите тип проекта</option>
                      <option value="photo">Фото с ИИ-моделями</option>
                      <option value="video">Видео для реклами и Reels</option>
                      <option value="products">Карточки товаров</option>
                      <option value="website">Сайт или лендинг</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth resize-none"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        Сообщение отправлено!
                      </>
                    ) : (
                      <>
                        Отправить сообщение
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;