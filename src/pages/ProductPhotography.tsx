import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const cosmeticsWorks = [
  {
    id: "cos-1",
    title: "Glow Serum",
    description: "Чистые композиции и мягкий свет — подчеркивают премиальность продукта",
    image: "/images/косметика-и-уход/img.png",
    category: "Продуктовая съёмка",
  },
  {
    id: "cos-2",
    title: "Skincare Set",
    description: "Модульные карточки для маркетплейсов — высокий CTR и сохранение стиля",
    image: "/images/косметика-и-уход/img (1).png",
    category: "Продуктовая съёмка",
  },
  {
    id: "cos-3",
    title: "Daily Cream",
    description: "Фокус на текстурах и выгодах — быстро считывается в ленте",
    image: "/images/косметика-и-уход/img (2).png",
    category: "Продуктовая съёмка",
  },
  {
    id: "cos-4",
    title: "Hair Care",
    description: "Контрастная сценография — продукт выделяется и запоминается",
    image: "/images/косметика-и-уход/img (3).png",
    category: "Продуктовая съёмка",
  },
  {
    id: "cos-5",
    title: "Soft Cleanser",
    description: "Естественные оттенки + аккуратные тени — доверительный образ",
    image: "/images/косметика-и-уход/img (4).png",
    category: "Продуктовая съёмка",
  },
  {
    id: "cos-6",
    title: "Vitamin Boost",
    description: "Акцент на составе: визуально читаемые ингредиенты",
    image: "/images/косметика-и-уход/img (5).png",
    category: "Продуктовая съёмка",
  },
];

const ProductPhotography = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Продуктовая съёмка"
        title="Косметика и уход"
        description="Стильная презентация косметических продуктов, товаров и брендинговых материалов"
        initialWorks={cosmeticsWorks}
      />
    </>
  );
};

export default ProductPhotography; 