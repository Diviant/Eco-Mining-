
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import EnergySection from './components/EnergySection';
import GreenhouseSection from './components/GreenhouseSection';
import EconomySection from './components/EconomySection';
import MiningRole from './components/MiningRole';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import DetailsPage from './components/DetailsPage';

type PageState = 'home' | 'tech' | 'energy' | 'agro' | 'economy';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageState>('home');

  const renderDetails = () => {
    switch (activePage) {
      case 'tech':
        return <DetailsPage 
          title="Технология" 
          subtitle="Замкнутый цикл" 
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
          content={[
            "Использование газопоршневых установок с КПД более 45%.",
            "Прямая передача тепла через жидкостный контур охлаждения ASIC-майнеров.",
            "Интеллектуальная система распределения потоков в зависимости от сезона.",
            "Полная автоматизация контроля климата в теплице через датчики IoT."
          ]}
          onBack={() => setActivePage('home')}
        />;
      case 'energy':
        return <DetailsPage 
          title="Энергетика" 
          subtitle="Ваша независимость" 
          image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
          content={[
            "Себестоимость киловатта до 2 рублей при использовании сетевого газа.",
            "Возможность работы на попутном нефтяном газе (ПНГ) с нулевой стоимостью топлива.",
            "Резервирование мощностей и работа в режиме Island Mode.",
            "Гарантия окупаемости оборудования за счет двойного использования энергии."
          ]}
          onBack={() => setActivePage('home')}
        />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderDetails()}
      
      <Navbar />
      <main>
        <Hero onCalcClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} />
        
        <div className="relative">
          <HowItWorks onDetailClick={(id) => setActivePage(id as any)} />
        </div>

        <EnergySection onMore={() => setActivePage('energy')} />
        
        <Calculator />
        
        <GreenhouseSection />
        <EconomySection />
        
        <div className="bg-slate-50">
          <MiningRole />
        </div>
        
        {/* CTA Section */}
        <section className="py-32 bg-emerald-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Начните свой проект <br/> уже сегодня</h2>
            <p className="text-emerald-50 text-xl mb-12 font-medium">
              Оставьте заявку на бесплатный экспресс-аудит вашего участка или площадки под комплекс.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => setActivePage('home')}
                className="bg-white text-emerald-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl hover:-translate-y-1"
              >
                Запросить план
              </button>
              <button className="bg-emerald-800 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-900 transition-all">
                Связаться
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
