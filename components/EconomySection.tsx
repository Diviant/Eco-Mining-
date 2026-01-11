
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Янв', mining: 120, agriculture: 80 },
  { month: 'Фев', mining: 115, agriculture: 85 },
  { month: 'Мар', mining: 110, agriculture: 95 },
  { month: 'Апр', mining: 130, agriculture: 110 },
  { month: 'Май', mining: 125, agriculture: 120 },
  { month: 'Июн', mining: 118, agriculture: 115 },
];

const EconomySection: React.FC = () => {
  return (
    <section id="economy" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Прозрачная экономика</h2>
          <p className="text-slate-500 text-lg">Стабильность агросектора + доходность IT-технологий.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {[
            { label: "Чистая прибыль", value: "420 000 ₽", desc: "Среднемесячный показатель", color: "text-slate-900" },
            { label: "Окупаемость", value: "14 мес.", desc: "Реальный срок возврата инвестиций", color: "text-emerald-600" },
            { label: "ROI годовой", value: "72%", desc: "С учетом всех издержек", color: "text-slate-900" }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:scale-105 transition-transform">
              <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-4">{item.label}</h4>
              <div className={`text-4xl font-black mb-2 ${item.color}`}>{item.value}</div>
              <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-emerald-100 p-12 rounded-[3rem] shadow-xl shadow-emerald-50">
          <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">Прогноз выручки по секторам</h3>
          <div className="h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} />
                <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '30px' }} />
                <Bar dataKey="mining" name="Майнинг" fill="#3b82f6" radius={[10, 10, 0, 0]} barSize={40} />
                <Bar dataKey="agriculture" name="Теплица" fill="#10b981" radius={[10, 10, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomySection;
