
import React, { useState, useMemo, useEffect } from 'react';
import { Sliders, TrendingUp, Zap, Sprout, Coins, Info, CheckCircle2, ArrowRight } from 'lucide-react';

const Calculator: React.FC = () => {
  const [power, setPower] = useState(200); 
  const [gasPrice, setGasPrice] = useState(6.5);
  const [cropType, setCropType] = useState<'onion' | 'basil' | 'microgreens'>('basil');
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    setIsCalculated(false);
    const timer = setTimeout(() => setIsCalculated(true), 300);
    return () => clearTimeout(timer);
  }, [power, gasPrice, cropType]);

  const results = useMemo(() => {
    const energyCostPerHour = (power / 10.5) * gasPrice; 
    const energyCostPerMonth = energyCostPerHour * 24 * 30;
    const miningRevenuePerMonth = (power * 5800); 
    
    const cropMultipliers = {
      onion: 1.3,
      basil: 2.8,
      microgreens: 4.5
    };
    const agroRevenuePerMonth = power * 3100 * cropMultipliers[cropType];
    const totalRevenue = miningRevenuePerMonth + agroRevenuePerMonth;
    const maintenance = power * 480; 
    const netProfit = totalRevenue - energyCostPerMonth - maintenance;
    const investment = power * 155000;
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
    <section id="calculator" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest">
            Investment Tool 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">Финансовая <span className="text-emerald-600">модель</span></h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">Рассчитайте параметры вашего будущего комплекса в режиме реального времени.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-xl border border-slate-100 space-y-12">
            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-emerald-500" /> Мощность (кВт)
                </label>
                <div className="bg-slate-50 px-4 py-1 rounded-full text-2xl font-black text-slate-900">{power}</div>
              </div>
              <input 
                type="range" min="100" max="2000" step="100" 
                value={power} onChange={(e) => setPower(Number(e.target.value))}
                className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 mb-2"
              />
              <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase tracking-widest">
                <span>100 кВт</span>
                <span>2 МВт</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center">
                  <Sliders className="w-4 h-4 mr-2 text-emerald-500" /> Тариф газа (₽/м³)
                </label>
                <div className="bg-slate-50 px-4 py-1 rounded-full text-2xl font-black text-slate-900">{gasPrice} <span className="text-sm opacity-30 italic">₽</span></div>
              </div>
              <input 
                type="range" min="3" max="15" step="0.5" 
                value={gasPrice} onChange={(e) => setGasPrice(Number(e.target.value))}
                className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 mb-2"
              />
            </div>

            <div className="space-y-6">
              <label className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center">
                <Sprout className="w-4 h-4 mr-2 text-emerald-500" /> Выбор агро-культуры
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['onion', 'basil', 'microgreens'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setCropType(type)}
                    className={`py-6 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all border-2 flex flex-col items-center gap-2 ${
                      cropType === type 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xl' 
                      : 'bg-white text-slate-400 border-slate-100 hover:border-emerald-200'
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${cropType === type ? 'bg-white/20' : 'bg-slate-50'}`}>
                      <Sprout size={16} />
                    </div>
                    {type === 'onion' ? 'Лук' : type === 'basil' ? 'Базилик' : 'Микрозелень'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3.5rem] p-10 lg:p-14 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
              <TrendingUp size={120} />
            </div>
            
            <div className={`space-y-12 transition-all duration-700 ${isCalculated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Прогноз чистой прибыли</div>
                <div className="text-6xl md:text-7xl font-black tracking-tighter">
                  {results.profit.toLocaleString()} <span className="text-2xl text-emerald-500">₽/мес</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Майнинг</div>
                  <div className="text-2xl font-black text-blue-400">+{Math.round(results.mining / 1000)}к ₽</div>
                </div>
                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Агро</div>
                  <div className="text-2xl font-black text-emerald-400">+{Math.round(results.agro / 1000)}к ₽</div>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Срок окупаемости CAPEX</div>
                  <div className="text-3xl font-black text-emerald-500 italic">{results.payback} <span className="text-lg">месяцев</span></div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-slate-900">
                  <ArrowRight />
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-7 rounded-3xl font-black text-xl transition-all shadow-xl shadow-emerald-600/20 active:scale-[0.98] flex items-center justify-center space-x-3">
                <CheckCircle2 />
                <span>Запросить бизнес-план</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
