
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, PieChart, Wallet } from 'lucide-react';

const data = [
  { month: 'Янв', mining: 145000, agriculture: 92000 },
  { month: 'Фев', mining: 152000, agriculture: 98000 },
  { month: 'Мар', mining: 148000, agriculture: 115000 },
  { month: 'Апр', mining: 165000, agriculture: 142000 },
  { month: 'Май', mining: 158000, agriculture: 168000 },
  { month: 'Июн', mining: 172000, agriculture: 155000 },
];

const EconomySection: React.FC = () => {
  return (
    <section id="economy" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Financial Model</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter italic">Экономика <span className="text-emerald-600">Complex-X</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Двойная диверсификация рисков: высокодоходный цифровой актив и стабильный товарный рынок FMCG.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            { label: "Чистая прибыль (кВт/мес)", value: "5 400 ₽", desc: "Средний показатель с 1 кВт мощности", icon: <TrendingUp className="text-emerald-500" /> },
            { label: "Срок окупаемости", value: "14.2 мес.", desc: "Включая стоимость ГПУ и ASIC", icon: <Wallet className="text-emerald-500" /> },
            { label: "Годовой ROI", value: "84%", desc: "С учетом роста сложности сети", icon: <PieChart className="text-emerald-600" /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{item.label}</h4>
              <div className="text-4xl font-black mb-3 text-slate-900">{item.value}</div>
              <p className="text-slate-500 text-xs font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-xl">
            <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center">
              <span className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></span>
              Прогноз выручки (USD/₽)
            </h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#94a3b8" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800 }} />
                  <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800 }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="mining" name="Майнинг (BTC)" fill="#3b82f6" radius={[8, 8, 0, 0]} barSize={35} />
                  <Bar dataKey="agriculture" name="Агро (Зелень)" fill="#10b981" radius={[8, 8, 0, 0]} barSize={35} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-black mb-8 italic">Структура себестоимости кВт/ч</h3>
            <div className="space-y-6">
              {[
                { label: "Топливо (Газ)", percent: 65, color: "bg-emerald-500" },
                { label: "Обслуживание ГПУ", percent: 15, color: "bg-blue-500" },
                { label: "ФОТ персонала", percent: 12, color: "bg-slate-500" },
                { label: "Агро-расходники", percent: 8, color: "bg-emerald-300" }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white">{item.percent}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-slate-400 text-sm italic font-medium">
                * Расчет произведен для комплекса мощностью 500 кВт при цене газа 6.5 ₽/м³.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomySection;
