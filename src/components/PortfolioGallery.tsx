import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Eye, ArrowLeft, ExternalLink } from "lucide-react";

// Makeup images
import makeupImg from "@/assets/images/makeup/img.png";
import makeupImg1 from "@/assets/images/makeup/img (1).png";
import makeupImg2 from "@/assets/images/makeup/img (2).png";
import makeupImg3 from "@/assets/images/makeup/img (3).png";
import makeupImg4 from "@/assets/images/makeup/img (4).png";
import makeupImg5 from "@/assets/images/makeup/img (5).png";
import makeupHello from "@/assets/images/makeup/hello.jpg";
import makeupHello1 from "@/assets/images/makeup/hello1.jpg";
import makeupScreenshot1 from "@/assets/images/makeup/Screenshot 2025-07-03 at 20.18.55.png";
import makeupScreenshot2 from "@/assets/images/makeup/Screenshot 2025-07-26 at 23.24.18.png";
import makeupScreenshot3 from "@/assets/images/makeup/Screenshot 2025-07-26 at 23.24.35.png";
import makeupScreenshot4 from "@/assets/images/makeup/Screenshot 2025-07-26 at 23.28.42.png";

// Clothes images
import clothesModel1 from "@/assets/images/clothes/model1.png";
import clothesGlasses from "@/assets/images/clothes/glasses.png";
import clothesGirlDress from "@/assets/images/clothes/girl cherry dress.png";
import clothesF0d4c14e from "@/assets/images/clothes/f0d4c14e-797b-4f13-8a22-232efbbe78ab.png";
import clothesF4d8c9aa from "@/assets/images/clothes/f4d8c9aa-a542-49a0-87df-43e305db93c4.png";
import clothesScreenshot1 from "@/assets/images/clothes/Screenshot 2025-06-24 at 15.27.18.png";
import clothesScreenshot2 from "@/assets/images/clothes/Screenshot 2025-06-24 at 15.35.44.png";
import clothesScreenshot3 from "@/assets/images/clothes/Screenshot 2025-06-24 at 15.35.56.png";
import clothesScreenshot4 from "@/assets/images/clothes/Screenshot 2025-06-26 at 00.00.03.png";
import clothesScreenshot5 from "@/assets/images/clothes/Screenshot 2025-07-03 at 20.20.31.png";
import clothesScreenshot6 from "@/assets/images/clothes/Screenshot 2025-07-03 at 20.20.36.png";
import clothesScreenshot7 from "@/assets/images/clothes/Screenshot 2025-07-03 at 20.20.44.png";
import clothesScreenshot8 from "@/assets/images/clothes/Screenshot 2025-07-03 at 20.20.52.png";
import clothesScreenshot9 from "@/assets/images/clothes/Screenshot 2025-07-03 at 20.21.03.png";
import clothesScreenshot10 from "@/assets/images/clothes/Screenshot 2025-07-20 at 15.49.56.png";
import clothesScreenshot11 from "@/assets/images/clothes/Screenshot 2025-07-20 at 15.52.59.png";
import clothesScreenshot12 from "@/assets/images/clothes/Screenshot 2025-07-20 at 15.53.05.png";
import clothesScreenshot13 from "@/assets/images/clothes/Screenshot 2025-07-20 at 16.09.24.png";
import clothesScreenshot14 from "@/assets/images/clothes/Screenshot 2025-07-20 at 22.30.26.png";
import clothesScreenshot15 from "@/assets/images/clothes/Screenshot 2025-07-20 at 22.30.26 copy.png";
import clothesScreenshot16 from "@/assets/images/clothes/Screenshot 2025-07-20 at 22.30.32.png";
import clothesScreenshot17 from "@/assets/images/clothes/Screenshot 2025-07-20 at 22.33.50.png";
import clothesScreenshot18 from "@/assets/images/clothes/Screenshot 2025-07-20 at 22.59.24.png";
import clothesScreenshot19 from "@/assets/images/clothes/Screenshot 2025-07-20 at 22.59.40.png";
import clothesScreenshot20 from "@/assets/images/clothes/Screenshot 2025-07-20 at 23.02.50.png";
import clothesScreenshot21 from "@/assets/images/clothes/Screenshot 2025-07-20 at 23.03.29.png";

// Objects images
import object1 from "@/assets/images/objects/1.png";
import object2 from "@/assets/images/objects/2.png";
import object3 from "@/assets/images/objects/3.png";
import object4 from "@/assets/images/objects/4.png";
import object5 from "@/assets/images/objects/5.png";
import object6 from "@/assets/images/objects/6.png";
import object7 from "@/assets/images/objects/7.png";
import object8 from "@/assets/images/objects/8.png";
import object9 from "@/assets/images/objects/9.png";
import object10 from "@/assets/images/objects/10.png";
import object11 from "@/assets/images/objects/11.png";
import object12 from "@/assets/images/objects/12.png";
import object13 from "@/assets/images/objects/13.png";
import object14 from "@/assets/images/objects/14.png";

// Website images
import websiteAi from "@/assets/images/website/ai.png";
import websiteAny from "@/assets/images/website/any.png";
import websiteFlower from "@/assets/images/website/flower.png";

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
            image: makeupImg,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm2',
            title: 'Косметические продукты - Серия 2',
            description: 'Стильная презентация средств по уходу за кожей',
            image: makeupImg1,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm3',
            title: 'Косметические продукты - Серия 3',
            description: 'Элегантная съемка декоративной косметики',
            image: makeupImg2,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm4',
            title: 'Косметические продукты - Серия 4',
            description: 'Профессиональная фотосессия средств по уходу',
            image: makeupImg3,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm5',
            title: 'Косметические продукты - Серия 5',
            description: 'Современная съемка косметических брендов',
            image: makeupImg4,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm6',
            title: 'Косметические продукты - Серия 6',
            description: 'Креативная презентация косметических средств',
            image: makeupImg5,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm7',
            title: 'Косметические продукты - Фото 1',
            description: 'Профессиональная съемка косметики',
            image: makeupHello,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm8',
            title: 'Косметические продукты - Фото 2',
            description: 'Стильная презентация beauty-продуктов',
            image: makeupHello1,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm9',
            title: 'Косметические продукты - Естественность',
            description: 'Естественная красота и элегантность',
            image: makeupScreenshot1,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm10',
            title: 'Косметические продукты - Стиль 1',
            description: 'Модная съемка косметических товаров',
            image: makeupScreenshot2,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm11',
            title: 'Косметические продукты - Стиль 2',
            description: 'Креативная подача beauty-брендов',
            image: makeupScreenshot3,
            category: 'Косметика и уход'
          },
          {
            id: 'cosm12',
            title: 'Косметические продукты - Премиум',
            description: 'Премиальная презентация косметики',
            image: makeupScreenshot4,
            category: 'Косметика и уход'
          }
        );
        break;

      case 'одежда и аксессуары':
      case 'clothes':
      case 'fashion':
        images.push(
          {
            id: 'fash1',
            title: 'Модная одежда - Коллекция 1',
            description: 'Стильная фотосессия одежды с акцентом на детали и качество',
            image: clothesModel1,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash2',
            title: 'Аксессуары - Очки',
            description: 'Элегантная съемка модных аксессуаров',
            image: clothesGlasses,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash3',
            title: 'Платье - Вишневый стиль',
            description: 'Романтичный образ в вишневом платье',
            image: clothesGirlDress,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash4',
            title: 'Модная одежда - Коллекция 2',
            description: 'Современная мода и стиль',
            image: clothesF0d4c14e,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash5',
            title: 'Модная одежда - Коллекция 3',
            description: 'Трендовые образы сезона',
            image: clothesF4d8c9aa,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash6',
            title: 'Летняя коллекция - Стиль 1',
            description: 'Летние образы и легкие ткани',
            image: clothesScreenshot1,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash7',
            title: 'Летняя коллекция - Стиль 2',
            description: 'Яркие и свежие летние образы',
            image: clothesScreenshot2,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash8',
            title: 'Летняя коллекция - Стиль 3',
            description: 'Комфорт и элегантность в летнем стиле',
            image: clothesScreenshot3,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash9',
            title: 'Летняя коллекция - Стиль 4',
            description: 'Модные тенденции летнего сезона',
            image: clothesScreenshot4,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash10',
            title: 'Стильная одежда - Образ 1',
            description: 'Современный и стильный look',
            image: clothesScreenshot5,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash11',
            title: 'Стильная одежда - Образ 2',
            description: 'Элегантность в каждой детали',
            image: clothesScreenshot6,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash12',
            title: 'Стильная одежда - Образ 3',
            description: 'Изысканный стиль и комфорт',
            image: clothesScreenshot7,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash13',
            title: 'Стильная одежда - Образ 4',
            description: 'Модный и актуальный образ',
            image: clothesScreenshot8,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash14',
            title: 'Стильная одежда - Образ 5',
            description: 'Креативный подход к fashion-съемке',
            image: clothesScreenshot9,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash15',
            title: 'Модная коллекция - Летний стиль 1',
            description: 'Свежий взгляд на летнюю моду',
            image: clothesScreenshot10,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash16',
            title: 'Модная коллекция - Летний стиль 2',
            description: 'Легкость и воздушность в одежде',
            image: clothesScreenshot11,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash17',
            title: 'Модная коллекция - Летний стиль 3',
            description: 'Яркие краски летнего гардероба',
            image: clothesScreenshot12,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash18',
            title: 'Модная коллекция - Летний стиль 4',
            description: 'Стиль и комфорт в одном образе',
            image: clothesScreenshot13,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash19',
            title: 'Вечерняя коллекция - Образ 1',
            description: 'Элегантные вечерние образы',
            image: clothesScreenshot14,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash20',
            title: 'Вечерняя коллекция - Образ 2',
            description: 'Изысканность и роскошь',
            image: clothesScreenshot15,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash21',
            title: 'Вечерняя коллекция - Образ 3',
            description: 'Стильные решения для особых случаев',
            image: clothesScreenshot16,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash22',
            title: 'Вечерняя коллекция - Образ 4',
            description: 'Гламур и элегантность',
            image: clothesScreenshot17,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash23',
            title: 'Вечерняя коллекция - Образ 5',
            description: 'Роскошные вечерние наряды',
            image: clothesScreenshot18,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash24',
            title: 'Вечерняя коллекция - Образ 6',
            description: 'Утонченный стиль для особых моментов',
            image: clothesScreenshot19,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash25',
            title: 'Вечерняя коллекция - Образ 7',
            description: 'Идеальный образ для торжественных событий',
            image: clothesScreenshot20,
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fash26',
            title: 'Вечерняя коллекция - Образ 8',
            description: 'Завершающий штрих элегантности',
            image: clothesScreenshot21,
            category: 'Одежда и аксессуары'
          }
        );
        break;

      case 'товары и предметы':
      case 'предметная съёмка':
      case 'objects':
      case 'products':
        images.push(
          {
            id: 'obj1',
            title: 'Предметная съемка - Товар 1',
            description: 'Профессиональная съемка товаров для каталога',
            image: object1,
            category: 'Товары и предметы'
          },
          {
            id: 'obj2',
            title: 'Предметная съемка - Товар 2',
            description: 'Качественная презентация продукции',
            image: object2,
            category: 'Товары и предметы'
          },
          {
            id: 'obj3',
            title: 'Предметная съемка - Товар 3',
            description: 'Детализированная съемка предметов',
            image: object3,
            category: 'Товары и предметы'
          },
          {
            id: 'obj4',
            title: 'Предметная съемка - Товар 4',
            description: 'Стильная подача товаров',
            image: object4,
            category: 'Товары и предметы'
          },
          {
            id: 'obj5',
            title: 'Предметная съемка - Товар 5',
            description: 'Элегантная презентация изделий',
            image: object5,
            category: 'Товары и предметы'
          },
          {
            id: 'obj6',
            title: 'Предметная съемка - Товар 6',
            description: 'Современный подход к товарной фотографии',
            image: object6,
            category: 'Товары и предметы'
          },
          {
            id: 'obj7',
            title: 'Предметная съемка - Товар 7',
            description: 'Креативная съемка предметов',
            image: object7,
            category: 'Товары и предметы'
          },
          {
            id: 'obj8',
            title: 'Предметная съемка - Товар 8',
            description: 'Профессиональная product-съемка',
            image: object8,
            category: 'Товары и предметы'
          },
          {
            id: 'obj9',
            title: 'Предметная съемка - Товар 9',
            description: 'Качественная фотография товаров',
            image: object9,
            category: 'Товары и предметы'
          },
          {
            id: 'obj10',
            title: 'Предметная съемка - Товар 10',
            description: 'Стильная презентация продукции',
            image: object10,
            category: 'Товары и предметы'
          },
          {
            id: 'obj11',
            title: 'Предметная съемка - Товар 11',
            description: 'Элегантная товарная фотография',
            image: object11,
            category: 'Товары и предметы'
          },
          {
            id: 'obj12',
            title: 'Предметная съемка - Товар 12',
            description: 'Детальная съемка изделий',
            image: object12,
            category: 'Товары и предметы'
          },
          {
            id: 'obj13',
            title: 'Предметная съемка - Товар 13',
            description: 'Современная product-фотография',
            image: object13,
            category: 'Товары и предметы'
          },
          {
            id: 'obj14',
            title: 'Предметная съемка - Товар 14',
            description: 'Профессиональная съемка для e-commerce',
            image: object14,
            category: 'Товары и предметы'
          }
        );
        break;

      case 'лендинги и сайты':
      case 'web-design':
      case 'websites':
        images.push(
          {
            id: 'web1',
            title: 'AI-Academy',
            description: 'Сайт школы искусственного интеллекта, который привлекает учеников',
            image: websiteAi,
            url: 'https://language-school-clone.vercel.app/',
            category: 'Лендинги и сайты'
          },
          {
            id: 'web2',
            title: 'AnyTranslator — AI-переводчик',
            description: 'Простой сайт переводчика с ясными кнопками и удобным интерфейсом',
            image: websiteAny,
            url: 'https://anytranslator.app/',
            category: 'Лендинги и сайты'
          },
          {
            id: 'web3',
            title: 'Mon Amour Flowers',
            description: 'Красивый сайт цветочного магазина с лёгким заказом',
            image: websiteFlower,
            url: 'https://mon-amour-flowers.vercel.app/',
            category: 'Лендинги и сайты'
          }
        );
        break;

      default:
        break;
    }
    
    return images;
  }

  const handleBackToHome = () => {
    // Используем браузерную историю для возврата на предыдущую страницу
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback на главную страницу если истории нет
      navigate('/#portfolio');
    }
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  // Категории для навигации
  const categories = [
    { name: 'Косметика и уход', route: '/photography', emoji: '💄' },
    { name: 'Одежда и аксессуары', route: '/photo-video-service', emoji: '👗' },
    { name: 'Товары и предметы', route: '/product-photography', emoji: '📦' },
    { name: 'Лендинги и сайты', route: '/web-design', emoji: '💻' }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={handleBackToHome}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Card key={work.id} className="group overflow-hidden shadow-soft hover:shadow-xl transition-all bg-card border border-border">
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="gap-2"
                      onClick={() => openImageModal(work.image)}
                    >
                      <Eye className="w-4 h-4" />
                      Просмотр
                    </Button>
                    {work.url && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="gap-2"
                        onClick={() => window.open(work.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Сайт
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {work.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-7xl max-h-full">
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 z-10"
                onClick={closeImageModal}
              >
                <X className="w-4 h-4" />
              </Button>
              <img
                src={selectedImage}
                alt="Просмотр изображения"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery;