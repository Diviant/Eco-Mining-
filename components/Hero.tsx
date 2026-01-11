
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';

interface Props {
  onCalcClick: () => void;
}

const Hero: React.FC<Props> = ({ onCalcClick }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function generateHeroImage() {
      try {
        const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A hyper-realistic, high-angle interior shot of a massive, futuristic agro-industrial complex. On one side, thousands of ASIC miners in clean, white racks with flowing green LED lights. On the other side, vertical farming towers with vibrant green plants. Cinematic lighting, 8k resolution, premium tech look.',
              },
            ],
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Image generation failed", error);
        setImageUrl("https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=2000");
      } finally {
        setLoading(false);
      }
    }

    generateHeroImage();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {loading ? (
          <div className="w-full h-full bg-slate-900 dark:bg-black flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-emerald-500 font-black uppercase tracking-widest animate-pulse text-xs">Инициализация нейросети...</span>
          </div>
        ) : (
          <>
            <img 
              src={imageUrl || ''} 
              alt="Autonomous Agro Mining Complex" 
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
            {/* Градиентный оверлей меняется в зависимости от темы */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-white/50 dark:from-slate-950 dark:via-slate-950/70 dark:to-transparent transition-colors duration-500"></div>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-emerald-800 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Complex-X v4.0
            </div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-700 dark:text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              Гарантия ROI 70%+
            </div>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[0.9] mb-10 tracking-tighter">
            Майнинг, <br/>
            <span className="text-emerald-600 dark:text-emerald-500">который кормит</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium max-w-2xl">
            Первая в СНГ промышленная экосистема: собственная газогенерация, IT-кластер для майнинга и вертикальные фермы премиальной зелени в одном контуре.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button 
              onClick={onCalcClick}
              className="bg-emerald-600 dark:bg-emerald-500 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-200 dark:shadow-emerald-900/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
            >
              Рассчитать прибыль
              <TrendingUp className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-slate-900/10 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-slate-900 dark:text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white dark:hover:bg-slate-800 transition-all">
              Презентация (PDF)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg text-emerald-600 dark:text-emerald-400"><Zap size={20} strokeWidth={3} /></div>
              <div>
                <div className="text-slate-900 dark:text-white font-black text-lg">1.8 ₽ / кВт</div>
                <div className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase">Цена энергии</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg text-emerald-600 dark:text-emerald-400"><ShieldCheck size={20} strokeWidth={3} /></div>
              <div>
                <div className="text-slate-900 dark:text-white font-black text-lg">99.8%</div>
                <div className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase">Uptime системы</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
