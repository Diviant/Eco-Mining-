
import React from 'react';
import { Cpu, Zap, Wind } from 'lucide-react';

const MiningRole: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest mb-8">
          Техническая концепция
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 italic">Майнинг как идеальный котел</h2>
        <p className="text-xl text-slate-500 leading-relaxed mb-16 max-w-3xl mx-auto">
          Вычислительное оборудование — это <span className="text-emerald-600 font-bold">интеллектуальный нагреватель</span>. Вместо бесполезного потребления газа на обогрев, мы пропускаем его через генератор и майнеры, получая <span className="text-slate-900 font-bold underline decoration-emerald-500 underline-offset-4">цифровую валюту</span> как побочный продукт отопления.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Cpu className="w-10 h-10 text-emerald-600" />, 
              title: "Высокая отдача", 
              desc: "95% потребленной электроэнергии превращается в тепло." 
            },
            { 
              icon: <Zap className="w-10 h-10 text-emerald-600" />, 
              title: "Постоянство", 
              desc: "Асики работают 24/7, обеспечивая стабильный прогрев почвы." 
            },
            { 
              icon: <Wind className="w-10 h-10 text-emerald-600" />, 
              title: "Eco-Friendly", 
              desc: "Нулевой выброс лишнего тепла. Полная утилизация энергии." 
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[2.5rem] shadow-xl shadow-emerald-100/20 border border-emerald-50 group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiningRole;
