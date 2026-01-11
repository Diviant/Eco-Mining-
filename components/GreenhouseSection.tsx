
import React from 'react';
import { CheckCircle2, Leaf, Zap, Droplets } from 'lucide-react';

const GreenhouseSection: React.FC = () => {
  return (
    <section id="greenhouse" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
          <div className="flex-1">
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
            <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight italic">
              Премиальное <br/>
              <span className="text-emerald-600">качество урожая</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Мы используем автоматизированные системы гидропоники для выращивания самых востребованных культур. Стабильный климат от тепла асиков гарантирует рост 365 дней в году.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Базилик и Мята", icon: <Leaf className="w-5 h-5" /> },
                { title: "Микрозелень", icon: <Leaf className="w-5 h-5" /> },
                { title: "Салаты и Шпинат", icon: <Leaf className="w-5 h-5" /> },
                { title: "Зеленый лук", icon: <Leaf className="w-5 h-5" /> },
                { title: "Умный автополив", icon: <Droplets className="w-5 h-5" /> },
                { title: "Контроль CO2", icon: <Zap className="w-5 h-5" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:bg-emerald-50 transition-colors">
                  <div className="text-emerald-600">{item.icon}</div>
                  <span className="text-slate-900 font-bold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1592533011831-7bc33b276228?auto=format&fit=crop&q=80&w=600" alt="Basil farm" className="w-full h-full object-cover" />
                </div>
                <div className="bg-emerald-600 aspect-square rounded-[2.5rem] p-8 flex flex-col justify-end text-white">
                  <span className="text-4xl font-black">21 день</span>
                  <span className="text-emerald-100 font-medium">средний цикл роста</span>
                </div>
              </div>
              <div className="pt-12 space-y-6">
                <div className="bg-slate-900 aspect-square rounded-[2.5rem] p-8 flex flex-col justify-end text-white">
                  <span className="text-4xl font-black">+24°C</span>
                  <span className="text-slate-400 font-medium italic">идеальный климат</span>
                </div>
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600" alt="Microgreens" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Background blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenhouseSection;
