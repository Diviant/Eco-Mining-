
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

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
                text: 'A professional, ultra-realistic panoramic architectural photograph of a futuristic indoor agro-mining facility. The scene is wide and spacious. On one side, rows of high-performance cryptocurrency mining ASIC rigs with glowing green status lights are neatly arranged. Directly adjacent and integrated into the same space are lush, multi-level vertical hydroponic systems. These systems are overflowing with vivid green lettuce, aromatic basil, long green onions, and trays of dense microgreens. Soft natural light mixes with high-tech LED grow lights. The atmosphere is clean, premium, and bright. 8k resolution, cinematic composition, white and emerald color palette.',
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
          <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-emerald-800 font-bold uppercase tracking-widest animate-pulse">Проектирование комплекса...</span>
          </div>
        ) : (
          <>
            <img 
              src={imageUrl || ''} 
              alt="Autonomous Agro Mining Complex" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent lg:from-white/90 lg:via-white/40"></div>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-emerald-200 bg-white/80 backdrop-blur-md text-emerald-800 text-sm font-black uppercase tracking-widest mb-8 shadow-sm">
            <span className="w-3 h-3 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
            Технологии 2025: Автономный запуск
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1] mb-8 drop-shadow-sm">
            Ваша ферма — <br/>
            <span className="text-emerald-600">Ваша энергия</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-800 mb-12 leading-relaxed font-semibold max-w-2xl bg-white/20 backdrop-blur-sm rounded-xl p-2">
            Интеграция ASIC-майнинга и агро-лаборатории. Свежий базилик, микрозелень и доход от криптовалют в едином замкнутом цикле.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onCalcClick}
              className="bg-emerald-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-emerald-700 transition-all shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-95"
            >
              Рассчитать проект
            </button>
            <button className="border-2 border-slate-900/10 bg-white/80 backdrop-blur-md text-slate-900 px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white transition-all shadow-lg">
              Узнать больше
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm">
              <div className="text-emerald-600 font-black text-2xl">0 ₽</div>
              <div className="text-slate-600 text-xs font-bold uppercase tracking-widest">Тепло на отопление</div>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm">
              <div className="text-emerald-600 font-black text-2xl">24/7</div>
              <div className="text-slate-600 text-xs font-bold uppercase tracking-widest">Цикл генерации</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
