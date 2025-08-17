import PortfolioGallery from "@/components/PortfolioGallery";
import Header from "@/components/Header";
import aiImage from "@/assets/images/website/ai.png";
import anyImage from "@/assets/images/website/any.png";
import flowerImage from "@/assets/images/website/flower.png";
import shoolImage from "@/assets/images/website/shool.png";
import pilImage from "@/assets/images/website/pil.png";
import web1Image from "@/assets/images/website/web1.png";
import dentImage from "@/assets/images/website/dent.png";

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
            title: 'AI-Academy',
            description: 'Лендинг образовательного проекта с чистой типографикой и высокой конверсией',
            image: aiImage,
            url: 'https://preview--neural-pathways-academy.lovable.app',
            category: 'website'
          },
          {
            id: 'any',
            title: 'AnyTranslator — AI-переводчик',
            description: 'Продуктовый сайт с лаконичным дизайном и акцентом на CTA',
            image: anyImage,
            url: 'https://anytranslator.app/',
            category: 'website'
          },
          {
            id: 'flower',
            title: 'Mon Amour Flowers',
            description: 'Современный сайт цветочного магазина с элегантным дизайном',
            image: flowerImage,
            url: 'https://mon-amour-flowers.lovable.app',
            category: 'website'
          },
          {
            id: 'school',
            title: 'Language School',
            description: 'Лендинг языковой школы',
            image: shoolImage,
            url: 'https://language-school-clone.lovable.app/',
            category: 'website'
          },
          {
            id: 'pilates',
            title: 'Pilates LabSpace',
            description: 'Современный сайт студии пилатеса с элегантным дизайном и удобной записью на занятия',
            image: pilImage,
            url: 'https://pilates-labspace-clone.lovable.app',
            category: 'website'
          },
          {
            id: 'vetka',
            title: 'Flora Dream',
            description: 'Сайт рекреационного центра с удобной навигацией и бронированием',
            image: web1Image,
            url: 'https://vetka-recreation.lovable.app',
            category: 'website'
          },
          {
            id: 'brightsmile',
            title: 'BrightSmile Clinic',
            description: 'Современный сайт стоматологической клиники с удобной записью на прием',
            image: dentImage,
            url: 'https://brightsmile-clinic.lovable.app',
            category: 'website'
          }
        ]}
      />
    </>
  );
};

export default WebDesign; 