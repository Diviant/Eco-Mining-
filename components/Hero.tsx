
import React from 'react';
import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';

interface Props {
  onCalcClick: () => void;
}

const Hero: React.FC<Props> = ({ onCalcClick }) => {
  // Используем присланное изображение (предполагается, что оно сохранено как hero.png в корне)
  // В качестве фоллбека оставляем качественный индустриальный фон
  const heroImage = "./hero.png";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src={heroImage} 
            alt="Agro-Mining Complex Concept" 
            className="w-full h-full object-cover scale-100 opacity-80 transition-opacity duration-1000 contrast-110 brightness-[0.6] saturate-[0.9]"
            onError={(e) => {
              // Если локальный файл не найден, используем подходящий по настроению сток
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          {/* Градиенты для создания атмосферы как на фото: теплый свет снизу (от дров) и холодный сверху */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
          
          {/* Световое пятно, имитирующее отсвет от оборудования */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/30 bg-slate-900/80 backdrop-blur-md text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
              Energy from Biomass
            </div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Zero-Emission Heat
            </div>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-black text-white leading-[0.9] mb-10 tracking-tighter drop-shadow-2xl">
            Энергия <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">из дров</span> <br/>
            в Биткоины
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-semibold max-w-2xl drop-shadow-md">
            Автономные газогенераторные комплексы Complex-X. Превращаем щепу и дрова в вычислительную мощность и тепло для ваших теплиц.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button 
              onClick={onCalcClick}
              className="bg-emerald-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-900/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
            >
              Рассчитать прибыль
              <TrendingUp className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/20 bg-white/5 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-slate-900 transition-all">
              Тех-характеристики
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg">
            <div className="flex items-start space-x-4 p-5 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
              <div className="bg-orange-500/20 p-2.5 rounded-xl text-orange-400"><Zap size={20} /></div>
              <div>
                <div className="text-white font-black text-lg">Автономно</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Дрова / Щепа / Пеллеты</div>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-5 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
              <div className="bg-emerald-500/20 p-2.5 rounded-xl text-emerald-400"><ShieldCheck size={20} /></div>
              <div>
                <div className="text-white font-black text-lg">КПД 94%</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Двойная рекуперация</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
