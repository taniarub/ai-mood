import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-subtle pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад
            </Button>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Политика обработки персональных данных
            </h1>
            
            <div className="bg-card rounded-2xl p-8 shadow-soft space-y-6 text-foreground">
              <div>
                <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая Политика обработки персональных данных (далее — Политика) разработана в соответствии с 
                  Законом Республики Беларусь «О защите персональных данных» от 7 мая 2021 г. № 99-З и определяет 
                  порядок обработки персональных данных, права субъектов персональных данных и меры по обеспечению 
                  безопасности персональных данных при их обработке.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">2. Оператор персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Оператором персональных данных является MoodAI (далее — Оператор), осуществляющий деятельность 
                  по созданию контента с использованием искусственного интеллекта.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">3. Цели обработки персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Персональные данные обрабатываются в следующих целях:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Обработка заявок на оказание услуг по созданию контента</li>
                  <li>Связь с клиентами для уточнения деталей заказа</li>
                  <li>Предоставление информации об услугах</li>
                  <li>Выполнение договорных обязательств</li>
                  <li>Консультирование по вопросам оказания услуг</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Правовые основания обработки</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, 
                  выраженного при заполнении формы обратной связи на сайте, в соответствии со статьей 6 Закона 
                  Республики Беларусь «О защите персональных данных».
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">5. Состав обрабатываемых персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Оператор обрабатывает следующие категории персональных данных:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Фамилия, имя, отчество</li>
                  <li>Номер телефона</li>
                  <li>Адрес электронной почты</li>
                  <li>Информация о предпочтениях по услугам</li>
                  <li>Техническая информация (IP-адрес, тип браузера, время посещения)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">6. Способы обработки персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Обработка персональных данных осуществляется как с использованием средств автоматизации, 
                  так и без использования таких средств. Персональные данные обрабатываются посредством 
                  сбора, записи, систематизации, накопления, хранения, уточнения, извлечения, использования, 
                  передачи, обезличивания, блокирования, удаления и уничтожения.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">7. Передача персональных данных третьим лицам</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Персональные данные могут передаваться третьим лицам только в случаях, предусмотренных 
                  законодательством Республики Беларусь, либо при получении согласия субъекта персональных данных. 
                  Оператор может использовать сервисы третьих лиц для технической обработки данных (хостинг, 
                  системы аналитики) при условии обеспечения соответствующего уровня защиты.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">8. Сроки обработки и хранения персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Персональные данные обрабатываются и хранятся в течение периода, необходимого для достижения 
                  целей обработки, либо в течение срока, установленного законодательством Республики Беларусь. 
                  По истечении указанных сроков персональные данные подлежат удалению или обезличиванию.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">9. Права субъектов персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  В соответствии с законодательством Республики Беларусь субъект персональных данных имеет право:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Получать информацию о порядке обработки своих персональных данных</li>
                  <li>Получать сведения о сроках обработки персональных данных</li>
                  <li>Требовать уточнения, дополнения, изменения, блокирования или удаления персональных данных</li>
                  <li>Отзывать согласие на обработку персональных данных</li>
                  <li>Обращаться в уполномоченный орган по защите прав субъектов персональных данных</li>
                  <li>Обращаться в суд для защиты своих прав</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">10. Меры по обеспечению безопасности персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Оператор принимает необходимые правовые, организационные и технические меры для защиты 
                  персональных данных от неправомерного или случайного доступа, уничтожения, изменения, 
                  блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">11. Изменение Политики</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Оператор оставляет за собой право внесения изменений в настоящую Политику. Новая редакция 
                  Политики вступает в силу с момента ее размещения на сайте, если иное не предусмотрено новой 
                  редакцией Политики.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">12. Контактная информация</h2>
                <p className="text-muted-foreground leading-relaxed">
                  По всем вопросам, касающимся обработки персональных данных, субъекты персональных данных 
                  могут обращаться к Оператору через форму обратной связи на сайте или по контактным данным, 
                  указанным на сайте.
                </p>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground text-center">
                  Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;