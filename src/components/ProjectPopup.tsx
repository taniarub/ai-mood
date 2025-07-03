import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 5000); // Показываем popup через 5 секунд

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/laura_palmers_theme', '_blank');
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closePopup}
      />
      
      {/* Popup */}
      <div 
        className={`relative bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-medium transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-smooth group"
        >
          <X className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Не нашли свою сферу?
          </h3>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Нейросети могут создать контент для любого бизнеса. Расскажите о своём проекте, 
            и мы найдём идеальное решение.
          </p>
          
          <Button 
            onClick={handleTelegramClick}
            variant="cta" 
            size="lg" 
            className="w-full group"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Обсудить проект
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;