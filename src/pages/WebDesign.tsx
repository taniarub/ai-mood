import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const WebDesign = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        title="Лендинги и сайты"
        description="Современные сайты, лендинги и удобные интерфейсы с высокой конверсией"
        initialWorks={[
          {
            id: 'ai',
            title: 'Neural Pathways Academy',
            description: 'Лендинг образовательного проекта с чистой типографикой и высокой конверсией',
            image: '/images/website/ai.png',
            url: 'https://preview--neural-pathways-academy.lovable.app'
          },
          {
            id: 'any',
            title: 'AnyTranslator — AI-переводчик',
            description: 'Продуктовый сайт с лаконичным дизайном и акцентом на CTA',
            image: '/images/website/any.png',
            url: 'https://anytranslator.app/'
          },
          {
            id: 'flower',
            title: 'Mon Amour Flowers',
            description: 'Современный сайт цветочного магазина с элегантным дизайном',
            image: '/images/website/flower.png',
            url: 'https://mon-amour-flowers.lovable.app/'
          },
          {
            id: 'school',
            title: 'Language School',
            description: 'Лендинг языковой школы',
            image: '/images/website/shool.png',
            url: 'https://language-school-clone.lovable.app/'
          }
        ]}
      />
    </>
  );
};

export default WebDesign; 