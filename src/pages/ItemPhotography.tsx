import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const ItemPhotography = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Предметная съёмка"
        title="Украшения и аксессуары"
        description="Элегантная презентация ювелирных изделий, аксессуаров и предметов роскоши"
      />
    </>
  );
};

export default ItemPhotography; 