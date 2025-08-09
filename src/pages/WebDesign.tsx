import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const WebDesign = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Лендинги и сайты"
        title="Лендинги и сайты"
        description="Современные веб-сайты, лендинги и интерфейсы с высоким UX и конверсией. Включает образовательные платформы, AI-сервисы и e-commerce проекты."
      />
    </>
  );
};

export default WebDesign; 