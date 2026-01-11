
import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface PageProps {
  title: string;
  subtitle: string;
  content: string[];
  image: string;
  onBack: () => void;
}

const DetailsPage: React.FC<PageProps> = ({ title, subtitle, content, image, onBack }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-400 hover:text-emerald-600 transition-colors mb-12 font-black uppercase tracking-widest text-sm"
        >
          <ArrowLeft size={20} />
          <span>Вернуться</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-none">
              {title} <br/> <span className="text-emerald-600">{subtitle}</span>
            </h1>
            <div className="w-20 h-2 bg-emerald-500 rounded-full mb-12"></div>
            
            <div className="space-y-8">
              {content.map((text, idx) => (
                <div key={idx} className="flex space-x-4">
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <button className="mt-16 bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all shadow-xl">
              Обсудить детали
            </button>
          </div>

          <div className="sticky top-12">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50 aspect-square lg:aspect-auto lg:h-[700px]">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
