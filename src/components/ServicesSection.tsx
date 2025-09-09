import { useNavigate } from "react-router-dom";
import { Camera, Video, Globe, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "web-design",
      title: "Создание сайтов и лендингов",
      icon: (
        <Globe className="w-6 h-6 text-blue-600" />
      ),
      route: "/web-design-service"
    },
    {
      id: "photo-video",
      title: "Генерация фотографий и видео",
      icon: (
        <Camera className="w-6 h-6 text-emerald-600" />
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
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Выберите услугу
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Два основных направления работы с ИИ-технологиями для создания качественного контента
            </p>
          </div>

          {/* Services cards */}
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-lg transition-all duration-300 bg-card border border-border backdrop-blur-sm hover:-translate-y-1 cursor-pointer"
                onClick={() => handleServiceClick(service.route)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-background to-muted flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
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