import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Globe, Code, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "photo-video",
      title: "Генерация фотографий и видео",
      description: "Создаю профессиональный визуальный контент для социальных сетей, маркетплейсов и брендинга",
      features: [
        "Фотосессии для брендов",
        "Съемка косметических продуктов", 
        "Предметная фотография",
        "Короткие ролики для соцсетей",
        "Презентационные видео"
      ],
      icon: (
        <div className="flex items-center gap-2">
          <Camera className="w-6 h-6" />
          <Video className="w-6 h-6" />
        </div>
      ),
      route: "/photo-video-service",
      color: "from-pink-500 to-purple-600"
    },
    {
      id: "web-design",
      title: "Создание сайтов и лендингов",
      description: "Разрабатываю современные веб-сайты и лендинги с высоким UX и конверсией для бизнеса",
      features: [
        "Корпоративные сайты",
        "Продающие лендинги",
        "Интернет-магазины",
        "Образовательные платформы",
        "Адаптивный дизайн"
      ],
      icon: (
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6" />
          <Code className="w-6 h-6" />
        </div>
      ),
      route: "/web-design-service",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Выберите услугу
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Два основных направления работы с ИИ-технологиями для создания качественного контента
            </p>
          </div>

          {/* Services grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
                onClick={() => handleServiceClick(service.route)}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {service.icon}
                    </div>
                    <Badge variant="secondary" className="text-primary">
                      ИИ-технологии
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Что входит в услугу:</h4>
                    </div>
                    <div className="grid gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-background to-muted/20 border border-muted/30">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-muted-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm"
                    variant="outline"
                    size="lg"
                  >
                    <span>Подробнее об услуге</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;