
import React, { useState, useMemo, useEffect } from 'react';
import { TrendingUp, Zap, Sprout, CheckCircle2, ArrowRight, Maximize, Cpu } from 'lucide-react';

const Calculator: React.FC = () => {
  // Константы эффективности: 1 ASIC = 100 TH/s = 3 kW
  const KW_PER_TH = 0.03; 
  
  const [power, setPower] = useState(240); 
  const [hashrate, setHashrate] = useState(8000); // TH/s
  const [area, setArea] = useState(500);
  const [cropType, setCropType] = useState<'onion' | 'basil' | 'microgreens' | 'mixed'>('basil');
  const [isCalculated, setIsCalculated] = useState(false);

  // Синхронизация: меняем хешрейт -> меняется мощность
  const handleHashrateChange = (value: number) => {
    setHashrate(value);
    const calculatedPower = Math.round(value * KW_PER_TH);
    setPower(Math.max(50, calculatedPower)); // Минималка 50 кВт
  };

  // Синхронизация: меняем мощность -> меняется хешрейт
  const handlePowerChange = (value: number) => {
    setPower(value);
    const calculatedHashrate = Math.round(value / KW_PER_TH);
    setHashrate(calculatedHashrate);
  };

  useEffect(() => {
    setIsCalculated(false);
    const timer = setTimeout(() => setIsCalculated(true), 300);
    return () => clearTimeout(timer);
  }, [power, hashrate, area, cropType]);

  const results = useMemo(() => {
    const costPerKWh = 1.8;
    const energyCostPerMonth = power * costPerKWh * 24 * 30;
    
    // Доход от майнинга (базируется на хешрейте: ~64.2 руб на 1 TH в мес)
    const miningRevenuePerMonth = (hashrate * 64.2); 
    
    const cropMultipliers = {
      onion: 1.2,
      basil: 2.5,
      microgreens: 4.8,
      mixed: 3.2
    };
    
    const agroRevenuePerMonth = area * 1200 * cropMultipliers[cropType];
    const totalRevenue = miningRevenuePerMonth + agroRevenuePerMonth;
    const maintenance = (power * 450) + (hashrate * 2.5) + (area * 150); 
    const netProfit = totalRevenue - energyCostPerMonth - maintenance;
    
    const investment = (power * 160000) + (area * 15000);
    const paybackMonths = investment / netProfit;

    return {
      mining: miningRevenuePerMonth,
      agro: agroRevenuePerMonth,
      expenses: energyCostPerMonth + maintenance,
      profit: netProfit,
      payback: isFinite(paybackMonths) && paybackMonths > 0 ? paybackMonths.toFixed(1) : "—",
      asicCount: Math.round(power / 3) // Условное кол-во асиков по 3кВт
    };
  }, [power, hashrate, area, cropType]);

  return (
    <section id="calculator" className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
            Hashrate Economy v5.0
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 italic uppercase tracking-tighter">Финансовая <span className="text-emerald-600 dark:text-emerald-500">модель</span></h2>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl mx-auto font-medium">Сбалансированная система: энергия генератора питает майнеры и греет теплицы.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-[3.5rem] shadow-xl border border-slate-100 dark:border-slate-800 space-y-10 transition-colors">
            
            {/* Параметр 1: Хешрейт (Ведущий) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-blue-500" /> Вычислительная мощность
                </label>
                <div className="bg-blue-50 dark:bg-blue-900/30 px-4 py-1 rounded-full text-2xl font-black text-blue-600 dark:text-blue-400 transition-colors">
                  {hashrate.toLocaleString()} <span className="text-sm opacity-60">TH/s</span>
                </div>
              </div>
              <input 
                type="range" min="1666" max="150000" step="100" 
                value={hashrate} onChange={(e) => handleHashrateChange(Number(e.target.value))}
                className="w-full h-2 bg-blue-100 dark:bg-blue-900 rounded-lg appearance-none cursor-pointer accent-blue-600 mb-2"
              />
            </div>

            {/* Параметр 2: Мощность (Связанный) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-emerald-500" /> Потребление (IT)
                </label>
                <div className="bg-slate-50 dark:bg-slate-800 px-4 py-1 rounded-full text-2xl font-black text-slate-900 dark:text-white transition-colors">
                  {power} <span className="text-sm opacity-40">кВт</span>
                </div>
              </div>
              <input 
                type="range" min="50" max="5000" step="50" 
                value={power} onChange={(e) => handlePowerChange(Number(e.target.value))}
                className="w-full h-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-600 mb-2"
              />
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2">Эквивалент: ~{results.asicCount} майнеров по 3 кВт</p>
            </div>

            {/* Параметр 3: Площадь теплицы (Точная настройка) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center">
                  <Maximize className="w-4 h-4 mr-2 text-emerald-500" /> Площадь теплицы (м²)
                </label>
                <div className="bg-slate-50 dark:bg-slate-800 px-4 py-1 rounded-full text-2xl font-black text-slate-900 dark:text-white transition-colors">
                  {area} <span className="text-sm opacity-40">м²</span>
                </div>
              </div>
              <input 
                type="range" min="10" max="5000" step="10" 
                value={area} onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-600 mb-2"
              />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center">
                <Sprout className="w-4 h-4 mr-2 text-emerald-500" /> Агро-культура
              </label>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
                {(['onion', 'basil', 'microgreens', 'mixed'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setCropType(type)}
                    className={`py-4 px-2 rounded-2xl font-black text-[9px] uppercase tracking-widest transition-all border-2 flex flex-col items-center gap-1.5 ${
                      cropType === type 
                      ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-emerald-600 dark:border-emerald-500 shadow-lg' 
                      : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-700'
                    }`}
                  >
                    <Sprout size={14} />
                    {type === 'onion' ? 'Лук' : type === 'basil' ? 'Базилик' : type === 'microgreens' ? 'Микрозелень' : 'Смешанные'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-black rounded-[3.5rem] p-10 lg:p-14 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group border border-white/5 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
              <TrendingUp size={120} />
            </div>
            
            <div className={`space-y-12 transition-all duration-700 ${isCalculated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 dark:text-emerald-400 mb-4">Прогноз чистой прибыли</div>
                <div className="text-6xl md:text-7xl font-black tracking-tighter">
                  {Math.round(results.profit).toLocaleString()} <span className="text-2xl text-emerald-500 dark:text-emerald-400">₽/мес</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-7 rounded-[2.5rem] bg-white/5 border border-white/10 transition-colors">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">IT Доход (BTC)</div>
                  <div className="text-2xl font-black text-blue-400">+{Math.round(results.mining / 1000)}к ₽</div>
                </div>
                <div className="p-7 rounded-[2.5rem] bg-white/5 border border-white/10 transition-colors">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Agro Доход</div>
                  <div className="text-2xl font-black text-emerald-400">+{Math.round(results.agro / 1000)}к ₽</div>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex items-center justify-between transition-colors">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Срок окупаемости</div>
                  <div className="text-4xl font-black text-emerald-500 dark:text-emerald-400 italic">{results.payback} <span className="text-lg">мес.</span></div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 dark:bg-emerald-600 flex items-center justify-center text-slate-900 dark:text-white transition-colors shadow-lg shadow-emerald-500/20">
                  <ArrowRight />
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="w-full bg-emerald-600 dark:bg-emerald-700 hover:bg-emerald-500 dark:hover:bg-emerald-600 py-8 rounded-[2rem] font-black text-xl transition-all shadow-xl shadow-emerald-600/20 active:scale-[0.98] flex items-center justify-center space-x-3">
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
