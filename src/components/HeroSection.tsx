import { Button } from "@/components/ui/button";
import { Play, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-10 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-dark-purple leading-[1.1]">
             Технологии 
              <br />
              для
              <span className="relative inline-block mx-3 align-middle">
                <span className="block w-32 h-12 bg-gradient-to-r from-pastel-purple to-light-orange rounded-full transform rotate-3 absolute top-0 left-0 -z-10"></span>
                <span className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-dark-purple">роста</span>
              </span>
              <br />
              вашего бизнеса
            </h1>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Создаем уникальные веб-сайты и лендинги с помощью нейросетей. 
              Ваши идеи — наше воплощение.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Button 
                className="rounded-full px-8 py-6 text-lg bg-dark-purple hover:bg-dark-purple/90 text-white shadow-lg hover:shadow-xl transition-all border-0"
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться с нами <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="grid grid-cols-2 gap-6 h-full min-h-[500px] lg:h-[600px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            
            {/* Large Card */}
            <div className="col-span-2 bg-light-beige rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group cursor-pointer transition-all hover:shadow-lg"
                 onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
                <h3 className="text-3xl sm:text-4xl font-medium leading-snug text-dark-purple max-w-md">
                  Хотите получить свой сайт быстро?
                  <br />
                  <span className="text-saturated-orange">Давайте начнем!</span>
                </h3>
              </div>
              
              {/* Abstract Liquid Shape (CSS) */}
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-r from-pastel-purple to-light-orange rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute bottom-0 right-20 w-48 h-48 bg-gradient-to-r from-calm-green to-light-beige rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>

              <div className="absolute right-8 bottom-8 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-6 h-6 text-dark-purple" />
              </div>
            </div>

            {/* Small Card 1 (Blue -> Pastel Purple theme) */}
            <div className="bg-pastel-purple/30 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all min-h-[200px]">
              <div className="flex justify-between items-start relative z-10">
                <span className="bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-dark-purple">Услуги</span>
                <div className="bg-white/50 p-2 rounded-full group-hover:bg-white transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-dark-purple" />
                </div>
              </div>
              
              <div className="relative z-10 mt-8">
                <h4 className="text-2xl font-medium text-dark-purple leading-tight">ИИ Генерация</h4>
                <p className="text-sm text-dark-purple/80 mt-2 font-medium">Сайты, лендинги, дизайн</p>
              </div>

              {/* Sphere Effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-pastel-purple to-white rounded-full blur-xl opacity-60"></div>
            </div>

            {/* Small Card 2 (Pink/Red -> Orange theme) */}
            <div className="bg-light-orange/30 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all min-h-[200px]">
              <div className="flex justify-between items-start relative z-10">
                <span className="bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-saturated-orange">Клиенты</span>
                <div className="flex -space-x-3">
                   <img 
                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" 
                     alt="Client 1" 
                     className="w-8 h-8 rounded-full border-2 border-white object-cover"
                   />
                   <img 
                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64" 
                     alt="Client 2" 
                     className="w-8 h-8 rounded-full border-2 border-white object-cover"
                   />
                   <img 
                     src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" 
                     alt="Client 3" 
                     className="w-8 h-8 rounded-full border-2 border-white object-cover"
                   />
                </div>
              </div>
              
              <div className="relative z-10 mt-8">
                <h4 className="text-4xl font-medium text-saturated-orange">100+</h4>
                <p className="text-sm text-saturated-orange/80 mt-2 font-medium">Довольных заказчиков</p>
              </div>
              
               {/* Shapes Effect */}
               <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-light-orange to-white rounded-full blur-2xl opacity-60 transform -translate-x-1/2"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;