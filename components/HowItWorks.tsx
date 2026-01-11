
import React from 'react';
import { Zap, Cpu, Thermometer, Sprout, DollarSign } from 'lucide-react';

interface Props {
  onDetailClick: (id: string) => void;
}

const HowItWorks: React.FC<Props> = ({ onDetailClick }) => {
  const steps = [
    {
      id: "energy",
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: "Энергия",
      desc: "Газогенератор на локальном топливе выдает ток по 2 руб/кВт."
    },
    {
      id: "tech",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Майнинг",
      desc: "Оборудование генерирует BTC и огромное количество тепла."
    },
    {
      id: "tech",
      icon: <Thermometer className="w-8 h-8 text-orange-500" />,
      title: "Рекуперация",
      desc: "Бесплатное тепло от майнеров идет на обогрев системы."
    },
    {
      id: "agro",
      icon: <Sprout className="w-8 h-8 text-emerald-500" />,
      title: "Агро",
      desc: "Круглогодичный рост лука за счет дармового отопления."
    },
    {
      id: "economy",
      icon: <DollarSign className="w-8 h-8 text-emerald-700" />,
      title: "Профит",
      desc: "Две прибыли: от IT и сельского хозяйства."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Цикл эффективности</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic">Безотходная экосистема</h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              onClick={() => onDetailClick(step.id)}
              className="relative cursor-pointer group p-8 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500 border border-transparent hover:border-emerald-100"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="text-emerald-200 font-black text-4xl mb-4 opacity-50">0{idx + 1}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                Узнать детали →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
