import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Video, Globe, Code, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "web-design",
      title: "Создание сайтов и лендингов",
      icon: (
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6" />
          <Code className="w-6 h-6" />
        </div>
      ),
      route: "/web-design-service"
    },
    {
      id: "photo-video",
      title: "Генерация фотографий и видео",
      icon: (
        <div className="flex items-center gap-2">
          <Camera className="w-6 h-6" />
          <Video className="w-6 h-6" />
        </div>
      ),
      route: "/photo-video-service"
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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

          {/* Services buttons */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Button
                key={service.id}
                onClick={() => handleServiceClick(service.route)}
                variant="outline"
                size="lg"
                className="h-32 w-full text-xl font-bold text-foreground bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-primary/30 hover:border-primary shadow-soft backdrop-blur-sm"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
                    {service.icon}
                  </div>
                  <span>{service.title}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;