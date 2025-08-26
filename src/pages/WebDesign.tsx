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
            description: 'Сайт школы искусственного интеллекта, который привлекает учеников (временно работает только с VPN)',
            image: aiImage,
            url: 'https://preview--neural-pathways-academy.lovable.app',
            category: 'website'
          },
          {
            id: 'any',
            title: 'AnyTranslator — AI-переводчик',
            description: 'Простой сайт переводчика с ясными кнопками и удобным интерфейсом',
            image: anyImage,
            url: 'https://anytranslator.app/',
            category: 'website'
          },
          {
            id: 'flower',
            title: 'Mon Amour Flowers',
            description: 'Красивый сайт цветочного магазина с лёгким заказом',
            image: flowerImage,
            url: 'https://mon-amour-flowers.vercel.app/',
            category: 'website'
          },
          {
            id: 'school',
            title: 'Language School',
            description: 'Простой сайт языковой школы с ярким дизайном',
            image: shoolImage,
            url: 'https://language-school-clone.vercel.app/',
            category: 'website'
          },
          {
            id: 'pilates',
            title: 'Pilates LabSpace',
            description: 'Стильный сайт студии пилатеса с удобной записью',
            image: pilImage,
            url: 'https://pilates-six.vercel.app/',
            category: 'website'
          },
          {
            id: 'vetka',
            title: 'Flora Dream',
            description: 'Красивый сайт цветочного магазина с лёгким заказом и бронированием',
            image: web1Image,
            url: 'https://vetka-recreation.vercel.app/',
            category: 'website'
          },
          {
            id: 'brightsmile',
            title: 'BrightSmile Clinic',
            description: 'Простой сайт стоматологической клиники с удобной записью',
            image: dentImage,
            url: 'https://brightsmile-clinic.vercel.app/',
            category: 'website'
          }
        ]}
      />
    </>
  );
};

export default WebDesign; 