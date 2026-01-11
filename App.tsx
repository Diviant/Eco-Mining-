
import React, { useState, useEffect } from 'react';
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
import { Activity, Globe, ShieldCheck, Cpu } from 'lucide-react';

type PageState = 'home' | 'tech' | 'energy' | 'agro' | 'economy';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageState>('home');

  // Анимация появления при скролле (Scroll Reveal)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Даем React время на отрисовку, затем начинаем наблюдение
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activePage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderDetails = () => {
    const pages = {
      tech: {
        title: "Технология",
        subtitle: "Замкнутый цикл 2.0",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
        content: [
          "Иммерсионное охлаждение асиков для 100% утилизации тепла.",
          "Газопоршневые установки Caterpillar и Jenbacher для непрерывной работы.",
          "Система фильтрации воздуха с рекуперацией CO2 для ускорения роста растений.",
          "Облачный мониторинг всех систем комплекса в реальном времени."
        ]
      },
      energy: {
        title: "Энергетика",
        subtitle: "Сверхдешевая генерация",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
        content: [
          "Стоимость кВт*ч от 1.8 рублей при подключении к магистральному газу.",
          "Работа на сжиженном газе или ПНГ (попутном нефтяном газе).",
          "Автономные контейнерные решения для быстрой развертки в полевых условиях.",
          "Защита от перегрузок и интеллектуальное распределение фаз."
        ]
      },
      agro: {
        title: "Агрокомплекс",
        subtitle: "Вертикальные фермы",
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1200",
        content: [
          "Круглогодичное выращивание: Базилик, Микрозелень, Салат, Лук.",
          "Умная гидропоника с автоматическим контролем питательного раствора.",
          "Светодиодное освещение полного спектра, синхронизированное с фазами роста.",
          "Отсутствие пестицидов и ГМО — экологически чистый продукт для премиум-ритейла."
        ]
      },
      economy: {
        title: "Экономика",
        subtitle: "Двойная маржинальность",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        content: [
          "Стабильный доход от майнинга перекрывает все OPEX теплицы.",
          "Продажа свежей зелени в локальные сети обеспечивает чистую валютную прибыль.",
          "Срок окупаемости системы (Payback Period) — от 14 до 18 месяцев.",
          "Налоговые льготы для сельхозпроизводителей и IT-компаний."
        ]
      }
    };

    if (activePage === 'home') return null;

    const page = (pages as any)[activePage];
    return (
      <DetailsPage 
        title={page.title} 
        subtitle={page.subtitle} 
        image={page.image} 
        content={page.content} 
        onBack={() => setActivePage('home')} 
      />
    );
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {renderDetails()}
      
      <Navbar />
      <main className={activePage !== 'home' ? 'hidden' : ''}>
        <Hero onCalcClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} />
        
        <div className="reveal">
          <HowItWorks onDetailClick={(id) => setActivePage(id as any)} />
        </div>

        {/* НОВЫЙ БЛОК: LIVE STATS (Заполняем пустоту) */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <Activity className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                <div className="text-3xl font-black mb-1">98.4 TH/s</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Текущий хешрейт</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-black mb-1">12 объектов</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">География Complex-X</div>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <div className="text-3xl font-black mb-1">ISO 9001</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Сертификация</div>
              </div>
              <div className="text-center">
                <Cpu className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-black mb-1">2.4 MW</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Общая мощность</div>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal">
          <EnergySection onMore={() => setActivePage('energy')} />
        </div>
        
        <div id="calculator" className="reveal">
          <Calculator />
        </div>
        
        <div className="reveal">
          <GreenhouseSection />
        </div>

        <div className="reveal">
          <EconomySection />
        </div>
        
        <div className="bg-slate-50 reveal">
          <MiningRole />
        </div>
        
        {/* НОВЫЙ БЛОК: ПАРТНЕРЫ (Дополнительное наполнение) */}
        <section className="py-24 bg-white reveal">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12">Технологические партнеры</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-black text-slate-900">CATERPILLAR</span>
              <span className="text-2xl font-black text-slate-900">BITMAIN</span>
              <span className="text-2xl font-black text-slate-900">CUMMINS</span>
              <span className="text-2xl font-black text-slate-900">SAMSUNG</span>
              <span className="text-2xl font-black text-slate-900">SCHNEIDER</span>
            </div>
          </div>
        </section>
        
        <section className="py-32 bg-emerald-600 relative overflow-hidden reveal">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Готовы обсудить <br/> ваш Complex-X?</h2>
            <p className="text-emerald-50 text-xl mb-12 font-medium">
              Мы подготовим детальный финансовый план под ваш регион и доступные ресурсы.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-emerald-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl hover:-translate-y-1"
              >
                Рассчитать прибыль
              </button>
              <button className="bg-emerald-800 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-900 transition-all">
                Связаться в Telegram
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
