import { Sparkles } from "lucide-react";

const WhyAISection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pastel-purple/10">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-pastel-purple/20 px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-dark-purple" />
            <span className="text-sm font-semibold text-dark-purple uppercase tracking-wider">
              Преимущества ИИ
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-purple mb-6 leading-tight">
            Почему создание сайтов с{" "}
            <span className="relative inline-block">
              <span className="block w-full h-4 bg-gradient-to-r from-pastel-purple to-light-orange rounded-full absolute bottom-2 left-0 -z-10"></span>
              <span className="relative">помощью ИИ</span>
            </span>
            {" "}лучше?
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Сравните сами: традиционная разработка vs шаблонные конструкторы vs ИИ-технологии
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-dark-purple mb-8 text-center">
            Сравнение подходов к созданию сайтов
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-700"></th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-700">Традиционные программисты</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-700">Конструкторы (Tilda, Wix)</th>
                  <th className="text-center py-4 px-4 font-semibold text-dark-purple bg-pastel-purple/10 rounded-t-2xl">ИИ-разработка</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Срок создания</td>
                  <td className="text-center py-4 px-4 text-slate-600">2-6 месяцев</td>
                  <td className="text-center py-4 px-4 text-slate-600">1-2 недели</td>
                  <td className="text-center py-4 px-4 font-semibold text-dark-purple bg-pastel-purple/5">3-7 дней</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Стоимость</td>
                  <td className="text-center py-4 px-4 text-slate-600">от 150 000₽</td>
                  <td className="text-center py-4 px-4 text-slate-600">от 30 000₽</td>
                  <td className="text-center py-4 px-4 font-semibold text-dark-purple bg-pastel-purple/5">от 50 000₽</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Уникальность дизайна</td>
                  <td className="text-center py-4 px-4 text-slate-600">Высокая</td>
                  <td className="text-center py-4 px-4 text-slate-600">Низкая (шаблоны)</td>
                  <td className="text-center py-4 px-4 font-semibold text-dark-purple bg-pastel-purple/5">Очень высокая</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Скорость изменений</td>
                  <td className="text-center py-4 px-4 text-slate-600">Медленная</td>
                  <td className="text-center py-4 px-4 text-slate-600">Быстрая</td>
                  <td className="text-center py-4 px-4 font-semibold text-dark-purple bg-pastel-purple/5">Мгновенная</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Гибкость</td>
                  <td className="text-center py-4 px-4 text-slate-600">Максимальная</td>
                  <td className="text-center py-4 px-4 text-slate-600">Ограниченная</td>
                  <td className="text-center py-4 px-4 font-semibold text-dark-purple bg-pastel-purple/5">Высокая</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-700">SEO и производительность</td>
                  <td className="text-center py-4 px-4 text-slate-600">Отлично</td>
                  <td className="text-center py-4 px-4 text-slate-600">Средне</td>
                  <td className="text-center py-4 px-4 font-semibold text-dark-purple bg-pastel-purple/5 rounded-b-2xl">Отлично</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-slate-600 mb-4">
            Получите все преимущества индивидуальной разработки без высокой цены и долгого ожидания
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
