import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Eye, ArrowLeft, ExternalLink } from "lucide-react";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  url?: string;
}

interface PortfolioGalleryProps {
  category: string;
  title: string;
  description: string;
  initialWorks?: WorkItem[];
}

const PortfolioGallery = ({ category, title, description, initialWorks = [] }: PortfolioGalleryProps) => {
  const [works, setWorks] = useState<WorkItem[]>(initialWorks);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Автоматически загружаем изображения для категории при монтировании компонента
  useEffect(() => {
    if (category && works.length === 0) {
      const categoryImages = getCategoryImages(category);
      setWorks(categoryImages);
    }
  }, [category]);

  function getCategoryImages(category: string): WorkItem[] {
    const images: WorkItem[] = [];
    
    switch (category.toLowerCase()) {
      case 'косметика и уход':
      case 'cosmetics':
        images.push(
          {
            id: 'cosm1',
            title: 'Косметические продукты - Серия 1',
            description: 'Профессиональная съемка косметических средств с акцентом на качество и детали',
            image: '/images/makeup/img.png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm2',
            title: 'Косметические продукты - Серия 2',
            description: 'Стильная презентация средств по уходу за кожей',
            image: '/images/makeup/img (1).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm3',
            title: 'Косметические продукты - Серия 3',
            description: 'Элегантная съемка декоративной косметики',
            image: '/images/makeup/img (2).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm4',
            title: 'Косметические продукты - Серия 4',
            description: 'Профессиональная фотосессия средств по уходу',
            image: '/images/makeup/img (3).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm5',
            title: 'Косметические продукты - Серия 5',
            description: 'Современная съемка косметических брендов',
            image: '/images/makeup/img (4).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm6',
            title: 'Косметические продукты - Серия 6',
            description: 'Креативная презентация косметических средств',
            image: '/images/makeup/img (5).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm7',
            title: 'Косметические продукты - Фото 1',
            description: 'Профессиональная съемка косметики',
            image: '/images/makeup/hello.jpg',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm8',
            title: 'Косметические продукты - Фото 2',
            description: 'Стильная презентация косметических средств',
            image: '/images/makeup/hello1.jpg',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm9',
            title: 'Косметические продукты - Скриншот 1',
            description: 'Профессиональная съемка косметики',
            image: '/images/makeup/Screenshot 2025-07-03 at 20.18.55.png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm10',
            title: 'Косметические продукты - Скриншот 2',
            description: 'Современная презентация косметических средств',
            image: '/images/makeup/Screenshot 2025-07-26 at 23.24.18.png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm11',
            title: 'Косметические продукты - Скриншот 3',
            description: 'Элегантная съемка косметики',
            image: '/images/makeup/Screenshot 2025-07-26 at 23.24.35.png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm12',
            title: 'Косметические продукты - Скриншот 4',
            description: 'Профессиональная фотосессия косметических средств',
            image: '/images/makeup/Screenshot 2025-07-26 at 23.28.42.png',
            category: 'Косметика и уход'
          }
        );
        break;
        
      case 'одежда и аксессуары':
      case 'fashion':
        images.push(
          {
            id: 'fashion1',
            title: 'Модная фотосессия - Модель 1',
            description: 'Современная фотосессия с профессиональной моделью',
            image: '/images/clothes/model1.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion2',
            title: 'Стильные очки',
            description: 'Элегантная презентация аксессуаров',
            image: '/images/clothes/glasses.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion3',
            title: 'Девушка в вишневом платье',
            description: 'Романтичная фотосессия в стильной одежде',
            image: '/images/clothes/girl cherry dress.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion4',
            title: 'Модная фотосессия - Серия 1',
            description: 'Современная съемка модной одежды',
            image: '/images/clothes/f0d4c14e-797b-4f13-8a22-232efbbe78ab.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion5',
            title: 'Модная фотосессия - Серия 2',
            description: 'Профессиональная съемка модных образов',
            image: '/images/clothes/f4d8c9aa-a542-49a0-87df-43e305db93c4.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion6',
            title: 'Модная фотосессия - Скриншот 1',
            description: 'Современная фотосессия модной одежды',
            image: '/images/clothes/Screenshot 2025-06-24 at 15.27.18.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion7',
            title: 'Модная фотосессия - Скриншот 2',
            description: 'Профессиональная съемка модных образов',
            image: '/images/clothes/Screenshot 2025-06-24 at 15.35.44.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion8',
            title: 'Модная фотосессия - Скриншот 3',
            description: 'Элегантная презентация модной одежды',
            image: '/images/clothes/Screenshot 2025-06-24 at 15.35.56.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion9',
            title: 'Модная фотосессия - Скриншот 4',
            description: 'Современная съемка стильных образов',
            image: '/images/clothes/Screenshot 2025-06-26 at 00.00.03.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion10',
            title: 'Модная фотосессия - Скриншот 5',
            description: 'Профессиональная фотосессия модной одежды',
            image: '/images/clothes/Screenshot 2025-07-03 at 20.20.31.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion11',
            title: 'Модная фотосессия - Скриншот 6',
            description: 'Стильная презентация модных образов',
            image: '/images/clothes/Screenshot 2025-07-03 at 20.20.36.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion12',
            title: 'Модная фотосессия - Скриншот 7',
            description: 'Элегантная съемка современной одежды',
            image: '/images/clothes/Screenshot 2025-07-03 at 20.20.44.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion13',
            title: 'Модная фотосессия - Скриншот 8',
            description: 'Профессиональная съемка модных образов',
            image: '/images/clothes/Screenshot 2025-07-03 at 20.20.52.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion14',
            title: 'Модная фотосессия - Скриншот 9',
            description: 'Современная фотосессия стильной одежды',
            image: '/images/clothes/Screenshot 2025-07-03 at 20.21.03.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion15',
            title: 'Модная фотосессия - Скриншот 10',
            description: 'Профессиональная съемка модных образов',
            image: '/images/clothes/Screenshot 2025-07-20 at 15.49.56.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion16',
            title: 'Модная фотосессия - Скриншот 11',
            description: 'Элегантная презентация современной одежды',
            image: '/images/clothes/Screenshot 2025-07-20 at 15.52.59.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion17',
            title: 'Модная фотосессия - Скриншот 12',
            description: 'Стильная съемка модных образов',
            image: '/images/clothes/Screenshot 2025-07-20 at 15.53.05.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion18',
            title: 'Модная фотосессия - Скриншот 13',
            description: 'Профессиональная фотосессия современной одежды',
            image: '/images/clothes/Screenshot 2025-07-20 at 16.09.24.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion19',
            title: 'Модная фотосессия - Скриншот 14',
            description: 'Современная съемка стильных образов',
            image: '/images/clothes/Screenshot 2025-07-20 at 22.30.26.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion20',
            title: 'Модная фотосессия - Скриншот 15',
            description: 'Элегантная презентация модной одежды',
            image: '/images/clothes/Screenshot 2025-07-20 at 22.30.26 copy.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion21',
            title: 'Модная фотосессия - Скриншот 16',
            description: 'Профессиональная съемка современных образов',
            image: '/images/clothes/Screenshot 2025-07-20 at 22.30.32.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion22',
            title: 'Модная фотосессия - Скриншот 17',
            description: 'Стильная фотосессия модной одежды',
            image: '/images/clothes/Screenshot 2025-07-20 at 22.33.50.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion23',
            title: 'Модная фотосессия - Скриншот 18',
            description: 'Современная съемка элегантных образов',
            image: '/images/clothes/Screenshot 2025-07-20 at 22.59.24.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion24',
            title: 'Модная фотосессия - Скриншот 19',
            description: 'Профессиональная презентация модной одежды',
            image: '/images/clothes/Screenshot 2025-07-20 at 22.59.40.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion25',
            title: 'Модная фотосессия - Скриншот 20',
            description: 'Элегантная съемка стильных образов',
            image: '/images/clothes/Screenshot 2025-07-20 at 23.02.50.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion26',
            title: 'Модная фотосессия - Скриншот 21',
            description: 'Современная фотосессия модной одежды',
            image: '/images/clothes/Screenshot 2025-07-20 at 23.03.29.png',
            category: 'Одежда и аксессуары'
          }
        );
        break;

      case 'предметная съёмка':
      case 'product-photography':
        images.push(
          {
            id: 'product1',
            title: 'Предметная съемка - Косметика с моделью',
            description: 'Профессиональная съемка косметических продуктов с участием модели',
            image: '/images/objects/1.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product2',
            title: 'Предметная съемка - Презентация продукта',
            description: 'Элегантная презентация косметического продукта с моделью',
            image: '/images/objects/2.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product3',
            title: 'Предметная съемка - Спортивное питание',
            description: 'Съемка спортивных добавок и протеинов для фитнес-брендов',
            image: '/images/objects/3.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product4',
            title: 'Предметная съемка - Lifestyle интерьер',
            description: 'Атмосферная съемка предметов в интерьерном стиле',
            image: '/images/objects/4.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product5',
            title: 'Предметная съемка - Солнцезащитные очки',
            description: 'Стильная презентация аксессуаров на природе',
            image: '/images/objects/5.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product6',
            title: 'Предметная съемка - Работа 6',
            description: 'Стильная съемка предметов с акцентом на бренд',
            image: '/images/objects/6.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product7',
            title: 'Предметная съемка - Работа 7',
            description: 'Современная фотография товаров для интернет-магазинов',
            image: '/images/objects/7.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product8',
            title: 'Предметная съемка - Работа 8',
            description: 'Элегантная презентация предметов с профессиональной подачей',
            image: '/images/objects/8.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product9',
            title: 'Предметная съемка - Работа 9',
            description: 'Качественная съемка товаров с четким фокусом и освещением',
            image: '/images/objects/9.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product10',
            title: 'Предметная съемка - Работа 10',
            description: 'Профессиональная фотосъемка предметов для каталогов',
            image: '/images/objects/10.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product11',
            title: 'Предметная съемка - Работа 11',
            description: 'Современная презентация товаров с высоким качеством изображения',
            image: '/images/objects/11.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product12',
            title: 'Предметная съемка - Работа 12',
            description: 'Стильная съемка предметов для рекламных материалов',
            image: '/images/objects/12.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product13',
            title: 'Предметная съемка - Работа 13',
            description: 'Элегантная фотография товаров с профессиональной обработкой',
            image: '/images/objects/13.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product14',
            title: 'Предметная съемка - Работа 14',
            description: 'Качественная презентация предметов для бизнеса',
            image: '/images/objects/14.png',
            category: 'Предметная съёмка'
          }
        );
        break;
        
      case 'лендинги и сайты':
      case 'web-design':
        images.push(
          {
            id: 'web1',
            title: 'AI-Academy',
            description: 'Лендинг образовательного проекта с чистой типографикой, ясной структурой и высокой конверсией',
            image: '/images/website/ai.png',
            category: 'Лендинги и сайты',
            url: 'https://preview--neural-pathways-academy.lovable.app'
          },
          {
            id: 'web2',
            title: 'AnyTranslator — AI-переводчик',
            description: 'Продуктовый сайт с лаконичным дизайном, акцентом на CTA и демонстрацией ценности продукта',
            image: '/images/website/any.png',
            category: 'Лендинги и сайты',
            url: 'https://anytranslator.app/'
          },
          {
            id: 'web3',
            title: 'Mon Amour Flowers',
            description: 'Современный сайт цветочного магазина с элегантным дизайном и удобной навигацией',
            image: '/images/website/flower.png',
            category: 'Лендинги и сайты',
            url: 'https://mon-amour-flowers.lovable.app'
          }
        );
        break;
    }
    
    return images;
  }

  const handleBackToPortfolio = () => {
    // Определяем на какую страницу услуги вернуться в зависимости от категории
    if (category === 'Лендинги и сайты' || category === 'web-design') {
      navigate('/web-design-service');
    } else if (category === 'Косметика и уход' || category === 'cosmetics' || 
               category === 'Одежда и аксессуары' || category === 'fashion' ||
               category === 'Предметная съёмка' || category === 'product-photography' ||
               category === 'Видео' || category === 'video') {
      navigate('/photo-video-service');
    } else {
      // Если категория не определена, возвращаемся на главную страницу к портфолио
      navigate('/#portfolio');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={handleBackToPortfolio}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к услуге
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {description}
          </p>
        </div>

        {/* Works gallery */}
        {works.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Пока нет работ в этой категории
            </h3>
            <p className="text-muted-foreground">
              Работы скоро появятся
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {works.map((work) => (
              <Card key={work.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage(work.image)}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                    {work.url && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white gap-1">
                          <ExternalLink className="w-4 h-4" />
                          На сайт
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {work.title}
                  </h3>
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-xs font-medium hover:underline"
                    >
                      Перейти на сайт →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-7xl max-h-full">
              <img
                src={selectedImage}
                alt="Увеличенное изображение"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery; 