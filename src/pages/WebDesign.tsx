import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const webDesignWorks = [
  {
    id: "wda-1",
    title: "Neural Pathways Academy",
    description: "Лендинг образовательного проекта: чистая типографика, ясная структура, высокая конверсия",
    image: "/images/Лендинги и сайты/Screenshot 2025-08-09 at 19.46.53.png",
    url: "https://preview--neural-pathways-academy.lovable.app/",
    category: "Веб-дизайн",
  },
  {
    id: "wda-2",
    title: "AnyTranslator — AI-переводчик",
    description: "Продуктовый сайт: лаконичный дизайн, акцент на CTA и демонстрацию ценности",
    image: "/images/Лендинги и сайты/Screenshot 2025-08-09 at 19.53.43.png",
    url: "https://anytranslator.app/",
    category: "Веб-дизайн",
  },
  {
    id: "wda-3",
    title: "Концепт лендинга",
    description: "Чистый UI с акцентом на выгоды и быстрый скролл — готов к A/B-тестам",
    image: "/images/Лендинги и сайты/Screenshot 2025-08-09 at 19.54.05.png",
    category: "Веб-дизайн",
  },
];

const WebDesign = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Веб-дизайн"
        title="Лендинги и сайты"
        description="Современные веб-сайты, лендинги и интерфейсы, созданные с помощью ИИ-инструментов"
        initialWorks={webDesignWorks}
      />
    </>
  );
};

export default WebDesign; 