import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const Photography = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Фотография"
        title="Fashion & Portrait съёмка"
        description="Профессиональные фотографии моделей, портреты и модные съёмки, созданные с помощью ИИ-технологий"
      />
    </>
  );
};

export default Photography; 