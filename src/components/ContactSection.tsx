import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, Send, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ⚠️ ВАЖНО: В production переместите токен на backend!
  const TELEGRAM_BOT_TOKEN = '8017033289:AAFs2Zm2-eU1opGIYYDibKbmLe9bqikNAnI';
  const TELEGRAM_CHAT_ID = '277234658'; // ✅ Chat ID настроен!

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

  const sendToTelegram = async (data: typeof formData) => {
    const message = `
🎯 *НОВАЯ ЗАЯВКА С САЙТА DREAM AI*

👤 *Имя:* ${data.name}
📧 *Email:* ${data.email}
📱 *Телефон:* ${data.phone || 'Не указан'}
🎨 *Тип проекта:* ${data.project || 'Не выбран'}

💬 *Сообщение:*
${data.message}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
🌐 *Источник:* Сайт Dream AI
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
    
    if (!formData.name || !formData.email || !formData.message) {
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
          email: '',
          phone: '',
          project: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="fade-in-up text-4xl font-bold text-foreground mb-6">
              Обсудим ваш проект
            </h2>
            <p className="fade-in-up text-xl text-muted-foreground max-w-3xl mx-auto">
              Расскажите о ваших задачах, и мы предложим оптимальное решение с использованием ИИ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="fade-in-up space-y-6">
              <a 
                href="https://t.me/laura_palmers_theme" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-6 bg-card border border-border rounded-xl shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telegram</p>
                    <p className="text-sm text-muted-foreground">Быстрые ответы в мессенджере</p>
                  </div>
                </div>
              </a>

              <a 
                href="mailto:taniarub8@gmail.com" 
                className="group p-6 bg-card border border-border rounded-xl shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">Подробное обсуждение проекта</p>
                  </div>
                </div>
              </a>

              {/* Status notifications */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <Check className="w-5 h-5" />
                    <span className="font-semibold">Заявка отправлена в Telegram!</span>
                  </div>
                  <p className="text-emerald-700 text-sm mt-1">
                    Сообщение доставлено. Отвечу как можно скорее! 📱
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
                    Попробуйте еще раз или напишите напрямую в Telegram
                  </p>
                </div>
              )}
            </div>

            {/* Contact form */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                    placeholder="+7 (999) 123-45-67"
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
                    className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  >
                    <option value="">Выберите тип проекта</option>
                    <option value="photo">Фото с ИИ-моделями</option>
                    <option value="video">Видео для рекламы и Reels</option>
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
                    className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

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
      </div>
    </section>
  );
};

export default ContactSection;