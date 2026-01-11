
import React from 'react';
import { ShieldCheck, Fuel, Zap } from 'lucide-react';

interface Props {
  onMore: () => void;
}

const EnergySection: React.FC<Props> = ({ onMore }) => {
  return (
    <section id="energy" className="py-32 bg-emerald-50/50 dark:bg-emerald-950/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              Собственная генерация — <br/>
              <span className="text-emerald-600 dark:text-emerald-500">фундамент прибыли</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Мы не зависим от тарифов электросетей и лимитов. Наша система превращает дешевое локальное топливо в высокомаржинальный продукт.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: <ShieldCheck className="text-emerald-600 dark:text-emerald-400" />, title: "Энергонезависимость", desc: "Полная защита от скачков цен и отключений." },
                { icon: <Fuel className="text-emerald-600 dark:text-emerald-400" />, title: "Низкая себестоимость", desc: "Газ напрямую от поставщика или скважины." },
                { icon: <Zap className="text-emerald-600 dark:text-emerald-400" />, title: "Масштабируемость", desc: "Легкое расширение мощностей под любые задачи." }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={onMore}
                  className="flex cursor-pointer group space-x-5 p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-emerald-100/50 dark:border-emerald-900/50 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
                >
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-1 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 shadow-2xl shadow-emerald-200/50 dark:shadow-black border border-emerald-100 dark:border-emerald-900/50">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10">Сравнение тарифов</h3>
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-3 uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <span>Городские сети</span>
                    <span className="text-slate-600 dark:text-slate-300">~ 7.50 ₽</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-4 rounded-full">
                    <div className="bg-slate-300 dark:bg-slate-600 h-full w-[100%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold mb-3 uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <span>Наш комплекс</span>
                    <span className="text-emerald-700 dark:text-emerald-200">1.80 - 2.20 ₽</span>
                  </div>
                  <div className="w-full bg-emerald-50 dark:bg-emerald-900/30 h-4 rounded-full">
                    <div className="bg-emerald-500 dark:bg-emerald-400 h-full w-[28%] rounded-full shadow-lg shadow-emerald-200 dark:shadow-emerald-900/40"></div>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl border border-emerald-100 dark:border-emerald-900 text-sm text-emerald-800 dark:text-emerald-200 font-medium text-center">
                💡 Экономия на энергии полностью покрывает операционные расходы агро-комплекса.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergySection;
