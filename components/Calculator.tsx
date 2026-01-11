
import React, { useState, useMemo, useEffect } from 'react';
import { Sliders, TrendingUp, Zap, Sprout, Coins, Info, CheckCircle2 } from 'lucide-react';

const Calculator: React.FC = () => {
  const [power, setPower] = useState(100); 
  const [gasPrice, setGasPrice] = useState(6.5);
  const [cropType, setCropType] = useState<'onion' | 'basil' | 'microgreens'>('onion');
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
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest">
            Finance & ROI Model
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic uppercase">Рассчитать <span className="text-emerald-600">Complex-X</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Получите моментальный прогноз окупаемости на основе текущих цен на ресурсы.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white p-6 lg:p-12 rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(16,185,129,0.15)] border border-emerald-100">
          <div className="space-y-10">
            <div className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-lg">
              <div className="flex justify-between items-center mb-8">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-emerald-500" /> Мощность (кВт)
                </label>
                <span className="text-3xl font-black text-slate-900">{power}</span>
              </div>
              <input 
                type="range" min="50" max="1000" step="50" 
                value={power} onChange={(e) => setPower(Number(e.target.value))}
                className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Start (50)</span>
                <span>Max (1000)</span>
              </div>
            </div>

            <div className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-lg">
              <div className="flex justify-between items-center mb-8">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center">
                  <Sliders className="w-4 h-4 mr-2 text-emerald-500" /> Тариф газа (₽/м³)
                </label>
                <span className="text-3xl font-black text-slate-900">{gasPrice} <span className="text-lg text-slate-400">₽</span></span>
              </div>
              <input 
                type="range" min="3" max="12" step="0.5" 
                value={gasPrice} onChange={(e) => setGasPrice(Number(e.target.value))}
                className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <label className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 block flex items-center ml-4">
                <Sprout className="w-4 h-4 mr-2 text-emerald-500" /> Приоритет агро-сектора
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['onion', 'basil', 'microgreens'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setCropType(type)}
                    className={`py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all border-2 ${
                      cropType === type 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xl shadow-emerald-200' 
                      : 'bg-white text-slate-400 border-slate-100 hover:border-emerald-200'
                    }`}
                  >
                    {type === 'onion' ? 'Лук' : type === 'basil' ? 'Базилик' : 'Микрозелень'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className={`h-full rounded-[3rem] p-10 flex flex-col justify-between transition-all duration-500 ${isCalculated ? 'scale-100 opacity-100' : 'scale-95 opacity-50'} bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl`}>
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400/60 mb-3 flex items-center">
                    <Info className="w-3 h-3 mr-2" /> Общая выручка (месяц)
                  </div>
                  <div className="text-5xl font-black tracking-tighter">
                    {results.profit.toLocaleString()} <span className="text-2xl text-emerald-400">₽</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-[9px] font-black uppercase text-slate-400 mb-2">Майнинг</div>
                    <div className="font-bold text-emerald-400">+{Math.round(results.mining / 1000)}к ₽</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-[9px] font-black uppercase text-slate-400 mb-2">Агро</div>
                    <div className="font-bold text-emerald-400">+{Math.round(results.agro / 1000)}к ₽</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-400 uppercase tracking-widest">Окупаемость:</span>
                    <span className="text-emerald-500 text-2xl font-black underline decoration-emerald-500 underline-offset-8 decoration-2">{results.payback} мес.</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-6 rounded-2xl font-black text-lg transition-all flex items-center justify-center space-x-3 group active:scale-95 shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Получить полный PDF-расчет</span>
                </button>
                <p className="text-[10px] text-center text-slate-500 uppercase font-black tracking-widest">Расчет является предварительным и зависит от рыночных условий BTC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
