import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const ProductPhotography = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Продуктовая съёмка"
        title="Косметика и товары"
        description="Стильная презентация косметических продуктов, товаров и брендинговых материалов"
      />
    </>
  );
};

export default ProductPhotography; 