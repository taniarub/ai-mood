import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const ECommerce = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="E-commerce"
        title="Карточки товаров"
        description="Профессиональные изображения товаров для маркетплейсов и интернет-магазинов"
      />
    </>
  );
};

export default ECommerce; 