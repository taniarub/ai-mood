import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Globe, Code, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "web-design",
      title: "Создание сайтов и лендингов",
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
    },
    {
      id: "photo-video",
      title: "Генерация фотографий и видео",
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
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <div className="flex items-baseline gap-1">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Выберите услугу
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Два основных направления работы с ИИ-технологиями для создания качественного контента
            </p>
          </div>

          {/* Services grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border bg-card shadow-soft backdrop-blur-sm"
                onClick={() => handleServiceClick(service.route)}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
                      {service.icon}
                    </div>
                    <Badge variant="secondary" className="text-primary bg-primary/10 border border-primary/20">
                      ИИ-технологии
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Что входит в услугу:</h4>
                    </div>
                    <div className="grid gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-muted/50">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-muted-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm border border-primary/30"
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