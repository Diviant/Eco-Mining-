
import React from 'react';
import { Zap, Cpu, Thermometer, Sprout, Activity } from 'lucide-react';

interface Props {
  onDetailClick: (id: string) => void;
}

const HowItWorks: React.FC<Props> = ({ onDetailClick }) => {
  const steps = [
    {
      id: "energy",
      icon: <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Энергоцентр",
      desc: "Газопоршневые установки (ГПУ) генерируют ток из сетевого газа или ПНГ. Себестоимость — в 3-4 раза ниже рыночных тарифов."
    },
    {
      id: "tech",
      icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Вычисления",
      desc: "ASIC-майнеры последнего поколения (Antminer S21/T21) добывают криптовалюту, потребляя дешевый ток и выделяя тепло."
    },
    {
      id: "tech",
      icon: <Thermometer className="w-8 h-8 text-orange-500 dark:text-orange-400" />,
      title: "Рекуперация",
      desc: "Тепловая энергия от майнеров через жидкостный контур подается в систему отопления теплиц. КПД использования энергии — 98%."
    },
    {
      id: "agro",
      icon: <Sprout className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
      title: "Био-лаборатория",
      desc: "Вертикальные фермы используют тепло для поддержания идеальных +24°C, выращивая до 12 урожаев премиальной зелени в год."
    },
    {
      id: "economy",
      icon: <Activity className="w-8 h-8 text-emerald-700 dark:text-emerald-500" />,
      title: "Максимальная маржа",
      desc: "Вы зарабатываете дважды: на цифровых активах и на реальном продукте, который востребован ресторанами и ритейлом."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Технологический стек</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 italic tracking-tighter uppercase">Инженерия замкнутого <span className="text-emerald-600">цикла</span></h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 font-medium">Мы объединили несовместимые на первый взгляд отрасли в единую высокоэффективную бизнес-модель.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              onClick={() => onDetailClick(step.id)}
              className="relative cursor-pointer group p-8 bg-slate-50 dark:bg-slate-900 rounded-[3rem] hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl dark:hover:shadow-emerald-900/20 transition-all duration-500 border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-700"
            >
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:-translate-y-2 transition-all">
                {step.icon}
              </div>
              <div className="text-emerald-500/20 dark:text-emerald-500/10 font-black text-6xl mb-6 tracking-tighter leading-none">0{idx + 1}</div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium mb-6">{step.desc}</p>
              
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Спецификация <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
