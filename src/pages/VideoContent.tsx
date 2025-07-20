import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const VideoContent = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="Видео"
        title="Lifestyle и рекламные ролики"
        description="Динамичные видеоролики для социальных сетей, рекламы и lifestyle-контента"
      />
    </>
  );
};

export default VideoContent; 