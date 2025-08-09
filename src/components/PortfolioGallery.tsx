import { useState } from "react";
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
          <Badge variant="secondary" className="text-primary">
            {category}
          </Badge>
        </div>

        {/* Add new work button */}
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