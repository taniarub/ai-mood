import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";

const WebDesign = () => {
  return (
    <>
      <Header />
      <PortfolioGallery
        category="web-design"
        title="Лендинги и сайты"
        description="Современные сайты, лендинги и удобные интерфейсы с высокой конверсией"
        initialWorks={[
          {
            id: 'ai',
            title: 'Neural Pathways Academy',
            description: 'Лендинг образовательного проекта с чистой типографикой и высокой конверсией',
            image: '/images/website/ai.png',
            url: 'https://preview--neural-pathways-academy.lovable.app',
            category: 'website'
          },
          {
            id: 'any',
            title: 'AnyTranslator — AI-переводчик',
            description: 'Продуктовый сайт с лаконичным дизайном и акцентом на CTA',
            image: '/images/website/any.png',
            url: 'https://anytranslator.app/',
            category: 'website'
          },
          {
            id: 'flower',
            title: 'Mon Amour Flowers',
            description: 'Современный сайт цветочного магазина с элегантным дизайном',
            image: '/images/website/flower.png',
            url: 'https://mon-amour-flowers.lovable.app',
            category: 'website'
          },
          {
            id: 'school',
            title: 'Language School',
            description: 'Лендинг языковой школы',
            image: '/images/website/shool.png',
            url: 'https://language-school-clone.lovable.app/',
            category: 'website'
          },
          {
            id: 'pilates',
            title: 'Pilates LabSpace',
            description: 'Современный сайт студии пилатеса с элегантным дизайном и удобной записью на занятия',
            image: '/images/website/pil.png',
            url: 'https://pilates-labspace-clone.lovable.app',
            category: 'website'
          },
          {
            id: 'vetka',
            title: 'Vetka Recreation',
            description: 'Сайт рекреационного центра с удобной навигацией и бронированием',
            image: '/images/website/web1.png',
            url: 'https://vetka-recreation.lovable.app',
            category: 'website'
          }
        ]}
      />
    </>
  );
};

export default WebDesign; 