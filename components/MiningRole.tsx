
import React from 'react';
import { Cpu, Zap, Wind, Shield, BarChart3, Database } from 'lucide-react';

const MiningRole: React.FC = () => {
  return (
    <section className="py-32 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-5 -translate-y-1/2 translate-x-1/4">
        <Cpu size={600} className="text-emerald-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-8">
              Digital Heat Generation
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 italic tracking-tighter leading-none">
              Майнинг как <br/>
              <span className="text-emerald-600">идеальный котел</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">
              Традиционные теплицы тратят до 40% бюджета на отопление. В Complex-X отопление — это <span className="text-emerald-600 font-bold underline decoration-2 underline-offset-4 italic">бесплатный побочный эффект</span> работы вычислительного оборудования.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Database size={20} />, title: "Uptime 99.9%", desc: "Бесперебойный поток тепла" },
                { icon: <BarChart3 size={20} />, title: "Высокая плотность", desc: "До 3 кВт тепла с 1 м² пола" },
                { icon: <Shield size={20} />, title: "Безопасность", desc: "Замкнутый масляный контур" },
                { icon: <Wind size={20} />, title: "Экология", desc: "Нулевой выброс NOx/CO2" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-3 bg-white rounded-xl text-emerald-600 shadow-sm">{item.icon}</div>
                  <div>
                    <div className="text-slate-900 font-black text-sm">{item.title}</div>
                    <div className="text-slate-400 text-[10px] font-bold uppercase">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: "Интеллектуальный нагрев", 
                  desc: "ASIC-чипы работают при температуре 75°C. Это идеальный диапазон для систем водяного отопления почв и воздуха.",
                  icon: <Cpu className="w-10 h-10 text-emerald-600" />
                },
                { 
                  title: "Экономия на охлаждении", 
                  desc: "Мы не тратим энергию на вентиляторы. Теплица сама выступает гигантским радиатором, забирая лишнее тепло.",
                  icon: <Wind className="w-10 h-10 text-emerald-600" />
                },
                { 
                  title: "Цифровая валюта", 
                  desc: "Пока теплица греется, вы получаете Bitcoin. Это превращает отопление из пассива в актив.",
                  icon: <Zap className="w-10 h-10 text-emerald-600" />
                }
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-1 transition-all">
                  <div className="flex items-center space-x-8">
                    <div className="bg-emerald-50 p-6 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiningRole;
