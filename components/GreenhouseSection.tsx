
import React, { useState } from 'react';
import { Leaf, Droplets, Info, Thermometer } from 'lucide-react';

const GreenhouseSection: React.FC = () => {
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null);

  const plants = [
    { title: "Базилик Премиум", cycle: "22 дня", temp: "+24°C", profit: "Высокая", icon: <Leaf className="w-5 h-5" />, color: "bg-emerald-500" },
    { title: "Микрозелень", cycle: "7-10 дней", temp: "+22°C", profit: "Экстремальная", icon: <Leaf className="w-5 h-5" />, color: "bg-green-400" },
    { title: "Салаты", cycle: "35 дней", temp: "+18°C", profit: "Средняя", icon: <Leaf className="w-5 h-5" />, color: "bg-emerald-600" },
    { title: "Зеленый лук", cycle: "25 дней", temp: "+20°C", profit: "Стабильная", icon: <Leaf className="w-5 h-5" />, color: "bg-green-600" }
  ];

  return (
    <section id="greenhouse" className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
          <div className="flex-1">
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight italic">
              Агро-активы <br/>
              <span className="text-emerald-600 dark:text-emerald-500">Complex-X</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
              Тепло от майнеров — это бесплатный ресурс. Мы направляем его на поддержание идеального микроклимата для культур с коротким циклом и высокой маржинальностью.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {plants.map((item, idx) => (
                <div 
                  key={idx} 
                  onMouseEnter={() => setSelectedPlant(idx)}
                  onMouseLeave={() => setSelectedPlant(null)}
                  className={`relative group cursor-pointer p-6 rounded-3xl transition-all duration-300 border ${
                    selectedPlant === idx 
                      ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-emerald-600 dark:border-emerald-500 shadow-xl' 
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${selectedPlant === idx ? 'bg-white/20' : 'bg-white dark:bg-slate-800 shadow-sm'} transition-colors`}>
                      {item.icon}
                    </div>
                    <Info className={`w-4 h-4 opacity-50 ${selectedPlant === idx ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                  </div>
                  <h4 className="font-black text-lg mb-1">{item.title}</h4>
                  
                  {selectedPlant === idx ? (
                    <div className="animate-fade-up text-xs space-y-2 mt-4 font-bold uppercase tracking-wider">
                      <div className="flex justify-between"><span>Цикл:</span> <span>{item.cycle}</span></div>
                      <div className="flex justify-between"><span>Темп:</span> <span>{item.temp}</span></div>
                      <div className="flex justify-between"><span>Маржа:</span> <span>{item.profit}</span></div>
                    </div>
                  ) : (
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Наведите для деталей</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-slate-50 dark:border-slate-900">
                  <img src="https://images.unsplash.com/photo-1592533011831-7bc33b276228?auto=format&fit=crop&q=80&w=600" alt="Basil" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="bg-emerald-600 dark:bg-emerald-700 aspect-square rounded-[3rem] p-10 flex flex-col justify-end text-white shadow-xl">
                  <Droplets className="w-10 h-10 mb-6 text-emerald-200" />
                  <span className="text-4xl font-black">95%</span>
                  <span className="text-emerald-100 font-bold text-sm uppercase">Автоматизация полива</span>
                </div>
              </div>
              <div className="pt-16 space-y-6">
                <div className="bg-slate-900 dark:bg-black aspect-square rounded-[3rem] p-10 flex flex-col justify-end text-white shadow-xl">
                  <Thermometer className="w-10 h-10 mb-6 text-emerald-500" />
                  <span className="text-4xl font-black">Stable</span>
                  <span className="text-slate-400 font-bold text-sm uppercase">Климатический контроль</span>
                </div>
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-slate-50 dark:border-slate-900">
                  <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600" alt="Micro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenhouseSection;
