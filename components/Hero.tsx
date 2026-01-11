
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';

interface Props {
  onCalcClick: () => void;
}

const Hero: React.FC<Props> = ({ onCalcClick }) => {
  const [heroImage, setHeroImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const apiKey = (process.env as any).API_KEY;
        if (!apiKey) throw new Error("API Key missing");
        
        const ai = new GoogleGenAI({ apiKey });
        // Генерируем изображение, которое является точной копией вашего референса
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { 
            parts: [{ 
              text: "Full shot of a massive industrial biomass gasification unit, large cylindrical steel tanks, complex system of metal pipes and valves, integrated control panel with a glowing screen. A large stack of split wooden logs sits prominently on the concrete floor in the foreground. Dark, atmospheric warehouse interior with dramatic cinematic warm lighting and deep shadows. Ultra-realistic 8k render, photorealistic machinery." 
            }] 
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setHeroImage(`data:image/png;base64,${part.inlineData.data}`);
          }
        }
      } catch (error) {
        console.error("Image generation failed", error);
        // Фолбэк на похожее индустриальное фото, если API недоступен
        setHeroImage("https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-slate-950">
        {isLoading ? (
          <div className="w-full h-full flex flex-col items-center justify-center space-y-4 bg-slate-950">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-emerald-500/50 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Загрузка комплекса...</p>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img 
              src={heroImage} 
              alt="Industrial Agro-Mining Complex" 
              className="w-full h-full object-cover scale-100 animate-slow-zoom opacity-100 dark:opacity-50 transition-opacity duration-1000"
            />
            {/* Градиенты для читаемости текста */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-slate-900/10"></div>
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-emerald-800 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Complex-X v4.2
            </div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-700 dark:text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              Энергия из биомассы
            </div>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[0.9] mb-10 tracking-tighter">
            Майнинг, <br/>
            <span className="text-emerald-600 dark:text-emerald-500">который кормит</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-12 leading-relaxed font-semibold max-w-2xl drop-shadow-sm">
            Автономные энергоблоки на дровах и щепе, IT-кластер для вычислений и теплицы в едином индустриальном контуре.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button 
              onClick={onCalcClick}
              className="bg-emerald-600 dark:bg-emerald-500 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-200 dark:shadow-emerald-900/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
            >
              Рассчитать прибыль
              <TrendingUp className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-slate-900 dark:border-white bg-white/20 dark:bg-slate-900/50 backdrop-blur-md text-slate-900 dark:text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white dark:hover:bg-slate-800 transition-all">
              Презентация
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg">
            <div className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/30 dark:border-white/10">
              <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg text-emerald-600 dark:text-emerald-400"><Zap size={20} /></div>
              <div>
                <div className="text-slate-900 dark:text-white font-black text-lg">от 1.4 ₽ / кВт</div>
                <div className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest">Себестоимость</div>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/30 dark:border-white/10">
              <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg text-emerald-600 dark:text-emerald-400"><ShieldCheck size={20} /></div>
              <div>
                <div className="text-slate-900 dark:text-white font-black text-lg">Автономно</div>
                <div className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest">Без электросетей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
