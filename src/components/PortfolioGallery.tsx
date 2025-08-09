import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Plus, X, Eye, ArrowLeft, ExternalLink } from "lucide-react";

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
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newWork, setNewWork] = useState({
    title: '',
    description: '',
    image: '',
    url: ''
  });
  const navigate = useNavigate();

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
            image: '/images/косметика-и-уход/img.png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm2',
            title: 'Косметические продукты - Серия 2',
            description: 'Стильная презентация средств по уходу за кожей',
            image: '/images/косметика-и-уход/img (1).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm3',
            title: 'Косметические продукты - Серия 3',
            description: 'Элегантная съемка декоративной косметики',
            image: '/images/косметика-и-уход/img (2).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm4',
            title: 'Косметические продукты - Серия 4',
            description: 'Профессиональная фотосессия средств по уходу',
            image: '/images/косметика-и-уход/img (3).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm5',
            title: 'Косметические продукты - Серия 5',
            description: 'Современная съемка косметических брендов',
            image: '/images/косметика-и-уход/img (4).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm6',
            title: 'Косметические продукты - Серия 6',
            description: 'Креативная презентация косметических средств',
            image: '/images/косметика-и-уход/img (5).png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm7',
            title: 'Косметические продукты - Фото 1',
            description: 'Профессиональная съемка косметики',
            image: '/images/косметика-и-уход/ааааацфаф-Photoroom.jpg',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm8',
            title: 'Косметические продукты - Фото 2',
            description: 'Стильная презентация косметических средств',
            image: '/images/косметика-и-уход/рмрара-Photoroom.jpg',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm9',
            title: 'Косметические продукты - Скриншот 1',
            description: 'Профессиональная съемка косметики',
            image: '/images/косметика-и-уход/Screenshot 2025-07-03 at 20.18.55.png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm10',
            title: 'Косметические продукты - Скриншот 2',
            description: 'Современная презентация косметических средств',
            image: '/images/косметика-и-уход/Screenshot 2025-07-26 at 23.24.18.png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm11',
            title: 'Косметические продукты - Скриншот 3',
            description: 'Элегантная съемка косметики',
            image: '/images/косметика-и-уход/Screenshot 2025-07-26 at 23.24.35.png',
            category: 'Косметика и уход'
          },
          {
            id: 'cosm12',
            title: 'Косметические продукты - Скриншот 4',
            description: 'Профессиональная фотосессия косметических средств',
            image: '/images/косметика-и-уход/Screenshot 2025-07-26 at 23.28.42.png',
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
            image: '/images/одежда-и-аксессуары/model1.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion2',
            title: 'Стильные очки',
            description: 'Элегантная презентация аксессуаров',
            image: '/images/одежда-и-аксессуары/glasses.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion3',
            title: 'Девушка в вишневом платье',
            description: 'Романтичная фотосессия в стильной одежде',
            image: '/images/одежда-и-аксессуары/girl cherry dress.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion4',
            title: 'Модная фотосессия - Серия 1',
            description: 'Современная съемка модной одежды',
            image: '/images/одежда-и-аксессуары/f0d4c14e-797b-4f13-8a22-232efbbe78ab.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion5',
            title: 'Модная фотосессия - Серия 2',
            description: 'Профессиональная съемка модных образов',
            image: '/images/одежда-и-аксессуары/f4d8c9aa-a542-49a0-87df-43e305db93c4.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion6',
            title: 'Модная фотосессия - Скриншот 1',
            description: 'Современная фотосессия модной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-06-24 at 15.27.18.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion7',
            title: 'Модная фотосессия - Скриншот 2',
            description: 'Профессиональная съемка модных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-06-24 at 15.35.44.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion8',
            title: 'Модная фотосессия - Скриншот 3',
            description: 'Элегантная презентация модной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-06-24 at 15.35.56.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion9',
            title: 'Модная фотосессия - Скриншот 4',
            description: 'Современная съемка стильных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-06-26 at 00.00.03.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion10',
            title: 'Модная фотосессия - Скриншот 5',
            description: 'Профессиональная фотосессия модной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-03 at 20.20.31.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion11',
            title: 'Модная фотосессия - Скриншот 6',
            description: 'Стильная презентация модных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-03 at 20.20.36.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion12',
            title: 'Модная фотосессия - Скриншот 7',
            description: 'Элегантная съемка современной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-03 at 20.20.44.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion13',
            title: 'Модная фотосессия - Скриншот 8',
            description: 'Профессиональная съемка модных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-03 at 20.20.52.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion14',
            title: 'Модная фотосессия - Скриншот 9',
            description: 'Современная фотосессия стильной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-03 at 20.21.03.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion15',
            title: 'Модная фотосессия - Скриншот 10',
            description: 'Профессиональная съемка модных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 15.49.56.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion16',
            title: 'Модная фотосессия - Скриншот 11',
            description: 'Элегантная презентация современной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 15.52.59.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion17',
            title: 'Модная фотосессия - Скриншот 12',
            description: 'Стильная съемка модных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 15.53.05.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion18',
            title: 'Модная фотосессия - Скриншот 13',
            description: 'Профессиональная фотосессия современной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 16.09.24.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion19',
            title: 'Модная фотосессия - Скриншот 14',
            description: 'Современная съемка стильных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 22.30.26.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion20',
            title: 'Модная фотосессия - Скриншот 15',
            description: 'Элегантная презентация модной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 22.30.26 copy.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion21',
            title: 'Модная фотосессия - Скриншот 16',
            description: 'Профессиональная съемка современных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 22.30.32.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion22',
            title: 'Модная фотосессия - Скриншот 17',
            description: 'Стильная фотосессия модной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 22.33.50.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion23',
            title: 'Модная фотосессия - Скриншот 18',
            description: 'Современная съемка элегантных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 22.59.24.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion24',
            title: 'Модная фотосессия - Скриншот 19',
            description: 'Профессиональная презентация модной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 22.59.40.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion25',
            title: 'Модная фотосессия - Скриншот 20',
            description: 'Элегантная съемка стильных образов',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 23.02.50.png',
            category: 'Одежда и аксессуары'
          },
          {
            id: 'fashion26',
            title: 'Модная фотосессия - Скриншот 21',
            description: 'Современная фотосессия модной одежды',
            image: '/images/одежда-и-аксессуары/Screenshot 2025-07-20 at 23.03.29.png',
            category: 'Одежда и аксессуары'
          }
        );
        break;

      case 'предметная съёмка':
      case 'product-photography':
        images.push(
          {
            id: 'product1',
            title: 'AI технологии - Предметная съемка',
            description: 'Профессиональная съемка технологических продуктов с акцентом на инновации',
            image: '/images/website/ai.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product2',
            title: 'Цветочные композиции - Предметная съемка',
            description: 'Элегантная съемка цветочных букетов и композиций',
            image: '/images/website/flower.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product3',
            title: 'Образовательные проекты - Предметная съемка',
            description: 'Профессиональная презентация образовательных материалов',
            image: '/images/website/shool.png',
            category: 'Предметная съёмка'
          },
          {
            id: 'product4',
            title: 'Переводческие сервисы - Предметная съемка',
            description: 'Современная съемка технологических сервисов',
            image: '/images/website/any.png',
            category: 'Предметная съёмка'
          }
        );
        break;
        
      case 'лендинги и сайты':
      case 'web-design':
        images.push(
          {
            id: 'web1',
            title: 'Neural Pathways Academy',
            description: 'Лендинг образовательного проекта с чистой типографикой, ясной структурой и высокой конверсией',
            image: '/images/Лендинги и сайты/Screenshot 2025-08-09 at 19.46.53.png',
            category: 'Лендинги и сайты',
            url: 'https://preview--neural-pathways-academy.lovable.app'
          },
          {
            id: 'web2',
            title: 'AnyTranslator — AI-переводчик',
            description: 'Продуктовый сайт с лаконичным дизайном, акцентом на CTA и демонстрацией ценности продукта',
            image: '/images/Лендинги и сайты/Screenshot 2025-08-09 at 19.53.43.png',
            category: 'Лендинги и сайты',
            url: 'https://anytranslator.app/'
          },
          {
            id: 'web3',
            title: 'Mon Amour Flowers',
            description: 'Современный сайт цветочного магазина с элегантным дизайном и удобной навигацией',
            image: '/images/Лендинги и сайты/Screenshot 2025-08-09 at 19.54.05.png',
            category: 'Лендинги и сайты',
            url: 'https://mon-amour-flowers.lovable.app/'
          }
        );
        break;
    }
    
    return images;
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewWork(prev => ({
          ...prev,
          image: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddWork = () => {
    if (newWork.title && newWork.description && newWork.image) {
      const work: WorkItem = {
        id: Date.now().toString(),
        ...newWork,
        category
      };
      setWorks(prev => [...prev, work]);
      setNewWork({ title: '', description: '', image: '', url: '' });
      setIsAddingNew(false);
    }
  };

  const handleDeleteWork = (id: string) => {
    setWorks(prev => prev.filter(work => work.id !== id));
  };

  const handleBackToPortfolio = () => {
    navigate('/#portfolio');
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
            Назад к портфолио
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
          {category && (
            <Badge variant="secondary" className="text-primary">
              {category}
            </Badge>
          )}
        </div>

        {/* Add new work button */}
        {category && (
          <div className="flex justify-center mb-8">
            <Button
              onClick={() => setIsAddingNew(!isAddingNew)}
              className="gap-2"
              variant={isAddingNew ? "outline" : "default"}
            >
              {isAddingNew ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {isAddingNew ? "Отменить" : "Добавить работу"}
            </Button>
          </div>
        )}

        {/* Add new work form */}
        {isAddingNew && (
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <CardTitle>Добавить новую работу</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Название работы</label>
                <Input
                  value={newWork.title}
                  onChange={(e) => setNewWork(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Введите название работы"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Описание</label>
                <Textarea
                  value={newWork.description}
                  onChange={(e) => setNewWork(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Опишите работу"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ссылка на сайт (опционально)</label>
                <Input
                  value={newWork.url}
                  onChange={(e) => setNewWork(prev => ({ ...prev, url: e.target.value }))}
                  placeholder="https://example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Изображение</label>
                <div className="flex flex-col gap-4">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="cursor-pointer"
                  />
                  {newWork.image && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <img
                        src={newWork.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button onClick={handleAddWork} className="flex-1">
                  <Upload className="w-4 h-4 mr-2" />
                  Добавить работу
                </Button>
                <Button variant="outline" onClick={() => setIsAddingNew(false)}>
                  Отменить
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Works gallery */}
        {works.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Пока нет работ в этой категории
            </h3>
            <p className="text-muted-foreground">
              Добавьте первую работу, нажав кнопку "Добавить работу"
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <Card key={work.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => handleDeleteWork(work.id)}
                      className="bg-red-500/90 hover:bg-red-500"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {work.description}
                  </p>
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Перейти на сайт →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery; 