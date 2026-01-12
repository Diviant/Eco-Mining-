
import React from 'react';
import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';

interface Props {
  onCalcClick: () => void;
}

const Hero: React.FC<Props> = ({ onCalcClick }) => {
  // Путь '/hero.png' будет искать файл в корне папки public.
  // Просто загрузите ваш файл hero.png в созданную папку public.
  const heroImage = "/hero.png";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src={heroImage} 
            alt="Agro-Mining Tech Complex" 
            className="w-full h-full object-cover opacity-60 contrast-110 brightness-[0.7] saturate-[0.8]"
            onError={(e) => {
              // Если файл /hero.png еще не загружен или не найден, 
              // покажется это временное качественное изображение.
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          
          {/* Наложения для глубины */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent"></div>
          
          {/* Световые эффекты */}
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-[150px] rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
              Autonomous Complex-X
            </div>
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-orange-400 text-[10px] font-black uppercase tracking-[0.25em] shadow-2xl">
              Wood-to-Bitcoin Tech
            </div>
          </div>
          
          <h1 className="text-6xl md:text-[6.5rem] font-black text-white leading-[0.85] mb-10 tracking-tighter drop-shadow-2xl italic">
            ЭНЕРГИЯ <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-600">ИЗ ДРОВ</span> <br/>
            В БИТКОИНЫ
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-200 mb-14 leading-tight font-bold max-w-2xl drop-shadow-lg opacity-90">
            Автономные газогенераторные установки на биомассе. <br/>
            <span className="text-white border-b-4 border-emerald-500/50 pb-1 text-2xl md:text-3xl">Превращаем щепу в ток для IT и тепло для агро.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8 mb-20">
            <button 
              onClick={onCalcClick}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-14 py-7 rounded-[2rem] font-black text-2xl transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:-translate-y-2 active:scale-95 flex items-center justify-center group"
            >
              Рассчитать прибыль
              <TrendingUp className="ml-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border-2 border-white/30 bg-white/5 backdrop-blur-md text-white px-14 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all hover:border-white">
              Тех-паспорт
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            <div className="flex items-center space-x-6 p-7 bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="bg-emerald-500/20 p-4 rounded-2xl text-emerald-400 shadow-inner"><Zap size={28} /></div>
              <div>
                <div className="text-white font-black text-2xl tracking-tighter">1.40 ₽ / кВт</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Себестоимость</div>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-7 bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="bg-orange-500/20 p-4 rounded-2xl text-orange-400 shadow-inner"><ShieldCheck size={28} /></div>
              <div>
                <div className="text-white font-black text-2xl tracking-tighter">14 МЕСЯЦЕВ</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Окупаемость (ROI)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
