import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const ProductPhotography = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Косметика и уход"
        title="Косметика и уход"
        description="Стильная презентация косметических продуктов, товаров и брендинговых материалов"
      />
    </>
  );
};

export default ProductPhotography; 