
import React, { useState, useMemo } from 'react';
import { Sliders, TrendingUp, Zap, Sprout, Coins } from 'lucide-react';

const Calculator: React.FC = () => {
  const [power, setPower] = useState(100); // кВт
  const [gasPrice, setGasPrice] = useState(6.5); // руб/м3
  const [cropType, setCropType] = useState<'onion' | 'basil' | 'microgreens'>('onion');

  const results = useMemo(() => {
    // Упрощенная математика модели
    const energyCostPerHour = (power / 10) * gasPrice; // примерный расход газа
    const energyCostPerMonth = energyCostPerHour * 24 * 30;
    
    // Доход от майнинга (усредненно для 100кВт на текущий рынок)
    const miningRevenuePerMonth = (power * 5500); // 5500 руб с 1 кВт мощности
    
    // Доход от агро (зависит от тепла = мощности)
    const cropMultipliers = {
      onion: 1.2,
      basil: 2.5,
      microgreens: 4.0
    };
    const agroRevenuePerMonth = power * 2800 * cropMultipliers[cropType];
    
    const totalRevenue = miningRevenuePerMonth + agroRevenuePerMonth;
    const maintenance = power * 450; // ТО генераторов и асиков
    const netProfit = totalRevenue - energyCostPerMonth - maintenance;
    const investment = power * 145000; // примерная стоимость "под ключ" за 1 кВт
    const paybackMonths = investment / netProfit;

    return {
      mining: miningRevenuePerMonth,
      agro: agroRevenuePerMonth,
      expenses: energyCostPerMonth + maintenance,
      profit: netProfit,
      payback: paybackMonths.toFixed(1)
    };
  }, [power, gasPrice, cropType]);

  return (
    <section id="calculator" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic">Рассчитать ваш <span className="text-emerald-600">Complex-X</span></h2>
          <p className="text-slate-500 text-lg">Настройте параметры системы для получения финансового прогноза.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 lg:p-16 rounded-[4rem] shadow-2xl border border-emerald-100">
          <div className="space-y-10">
            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-sm font-black uppercase tracking-widest text-slate-500 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-emerald-500" /> Мощность комплекса (кВт)
                </label>
                <span className="text-2xl font-black text-emerald-600">{power} кВт</span>
              </div>
              <input 
                type="range" min="50" max="1000" step="10" 
                value={power} onChange={(e) => setPower(Number(e.target.value))}
                className="w-full h-3 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-sm font-black uppercase tracking-widest text-slate-500 flex items-center">
                  <Sliders className="w-4 h-4 mr-2 text-emerald-500" /> Цена газа (₽/м³)
                </label>
                <span className="text-2xl font-black text-emerald-600">{gasPrice} ₽</span>
              </div>
              <input 
                type="range" min="3" max="12" step="0.1" 
                value={gasPrice} onChange={(e) => setGasPrice(Number(e.target.value))}
                className="w-full h-3 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <label className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6 block flex items-center">
                <Sprout className="w-4 h-4 mr-2 text-emerald-500" /> Основная культура
              </label>
              <div className="grid grid-cols-3 gap-4">
                {(['onion', 'basil', 'microgreens'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setCropType(type)}
                    className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 ${
                      cropType === type 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200' 
                      : 'bg-white text-slate-500 border-slate-100 hover:border-emerald-200'
                    }`}
                  >
                    {type === 'onion' ? 'Лук' : type === 'basil' ? 'Базилик' : 'Микрозелень'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-[3rem] p-10 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-emerald-200 pb-4">
                <div>
                  <div className="text-xs font-black uppercase text-emerald-700/60 mb-1">Выручка (мес)</div>
                  <div className="text-3xl font-black text-emerald-900">{(results.mining + results.agro).toLocaleString()} ₽</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Майнинг / Агро</div>
                  <div className="text-sm font-bold text-emerald-600">{Math.round(results.mining / 1000)}к / {Math.round(results.agro / 1000)}к</div>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-emerald-200 pb-4">
                <div>
                  <div className="text-xs font-black uppercase text-rose-700/60 mb-1">Расходы (мес)</div>
                  <div className="text-2xl font-black text-rose-900">-{results.expenses.toLocaleString()} ₽</div>
                </div>
                <TrendingUp className="text-rose-400 w-8 h-8" />
              </div>

              <div className="pt-4">
                <div className="text-xs font-black uppercase text-emerald-700/60 mb-1">Чистая прибыль (мес)</div>
                <div className="text-5xl font-black text-emerald-600">{results.profit.toLocaleString()} ₽</div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black uppercase text-slate-400">Срок окупаемости</div>
                <div className="text-3xl font-black text-slate-900">{results.payback} мес.</div>
              </div>
              <button className="bg-emerald-600 text-white p-4 rounded-2xl hover:bg-emerald-700 transition-all">
                <Coins className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
