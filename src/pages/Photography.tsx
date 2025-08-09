import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const fashionWorks = [
  {
    id: "ph-1",
    title: "Cherry Dress Look",
    description: "Стильная fashion-съёмка: эмоциональные ракурсы, живые фактуры",
    image: "/images/одежда-и-аксессуары/girl cherry dress.png",
    category: "Фотография",
  },
  {
    id: "ph-2",
    title: "Sunglasses Editorial",
    description: "Минимализм и контраст — идеально для брендовых кампаний",
    image: "/images/одежда-и-аксессуары/glasses.png",
    category: "Фотография",
  },
  {
    id: "ph-3",
    title: "Studio Portrait",
    description: "Чистый фон, мягкий свет — акцент на образ",
    image: "/images/одежда-и-аксессуары/model1.png",
    category: "Фотография",
  },
];

const Photography = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Фотография"
        title="AI-модели для брендов"
        description="Профессиональные фотографии моделей, портреты и модные съёмки, созданные с помощью ИИ-технологий"
        initialWorks={fashionWorks}
      />
    </>
  );
};

export default Photography; 