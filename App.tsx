
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
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageState>('home');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as Theme || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

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

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activePage, theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderDetails = () => {
    const pages = {
      tech: {
        title: "Технология",
        subtitle: "Замкнутый цикл 2.0",
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1200",
        content: [
          "Иммерсионное охлаждение асиков для 100% утилизации тепла без вентиляторов.",
          "Газопоршневые установки Caterpillar и Jenbacher для непрерывной генерации.",
          "Система фильтрации воздуха с рекуперацией тепла для тепличных залов.",
          "Собственное ПО для балансировки нагрузки между майнингом и агро-системами."
        ]
      },
      energy: {
        title: "Энергетика",
        subtitle: "Автономная генерация",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
        content: [
          "Стоимость кВт*ч от 1.8 рублей при использовании магистрального газа.",
          "Возможность работы на ПНГ (попутном нефтяном газе) прямо на месторождениях.",
          "Модульные контейнерные решения для быстрого масштабирования до 100 МВт.",
          "Интеллектуальная система защиты от перегрузок и стабилизации частоты."
        ]
      },
      agro: {
        title: "Агрокомплекс",
        subtitle: "Вертикальные фермы",
        image: "https://images.unsplash.com/photo-1530836361253-efad5d6ff430?auto=format&fit=crop&q=80&w=1200",
        content: [
          "Круглогодичное выращивание премиальной зелени (базилик, рукола, микрозелень).",
          "Полная автоматизация: от контроля pH раствора до спектрального освещения.",
          "Нулевые затраты на отопление благодаря теплоотводу от майнинг-серверов.",
          "Выход на полки ритейла в течение 24 часов после сбора урожая."
        ]
      },
      economy: {
        title: "Экономика",
        subtitle: "Двойная прибыль",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        content: [
          "Диверсификация: доход от криптовалют и стабильный спрос на FMCG продукты.",
          "Снижение себестоимости зелени на 60% за счет отсутствия счетов за тепло и свет.",
          "Срок окупаемости проекта (Payback Period) сокращается до 14-16 месяцев.",
          "Возможность получения сельхоз-субсидий и льгот на IT-инфраструктуру."
        ]
      }
    };

    if (activePage === 'home') return null;
    const page = (pages as any)[activePage];
    return <DetailsPage {...page} onBack={() => setActivePage('home')} />;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500">
      {renderDetails()}
      
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      
      <main className={activePage !== 'home' ? 'hidden' : ''}>
        <Hero onCalcClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} />
        
        <div className="reveal">
          <HowItWorks onDetailClick={(id) => setActivePage(id as any)} />
        </div>

        <section className="py-20 bg-slate-900 dark:bg-black text-white overflow-hidden relative reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <Activity className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                <div className="text-3xl font-black mb-1">98.4 TH/s</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Хешрейт</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-black mb-1">12 объектов</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">География</div>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <div className="text-3xl font-black mb-1">ISO 9001</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Сертификаты</div>
              </div>
              <div className="text-center">
                <Cpu className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-black mb-1">2.4 MW</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Мощность</div>
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
        
        <div className="bg-slate-50 dark:bg-slate-900/50 transition-colors reveal">
          <MiningRole />
        </div>
        
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors reveal">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] mb-12">Технологические партнеры</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-black">CATERPILLAR</span>
              <span className="text-2xl font-black">BITMAIN</span>
              <span className="text-2xl font-black">CUMMINS</span>
              <span className="text-2xl font-black">SAMSUNG</span>
              <span className="text-2xl font-black">NVIDIA</span>
            </div>
          </div>
        </section>
        
        <section className="py-32 bg-emerald-600 dark:bg-emerald-700 relative overflow-hidden transition-colors reveal">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic">Готовы запустить <br/> свой Complex-X?</h2>
            <p className="text-emerald-50 text-xl mb-12 font-medium">Мы подготовим детальный расчет под ваши условия и стоимость газа в регионе.</p>
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
      
      <Footer theme={theme} />
    </div>
  );
};

export default App;
