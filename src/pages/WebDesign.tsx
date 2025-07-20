import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const WebDesign = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Веб-дизайн"
        title="Лендинги и сайты"
        description="Современные веб-сайты, лендинги и интерфейсы, созданные с помощью ИИ-инструментов"
      />
    </>
  );
};

export default WebDesign; 