
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  desc: string;
  Icon: LucideIcon;
  colorClass?: string;
}

const InteractiveCard: React.FC<Props> = ({ title, desc, Icon, colorClass = "text-emerald-600" }) => {
  return (
    <div className="group relative p-1 bg-white rounded-[2rem] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
      <div className="h-full p-8 rounded-[1.9rem] bg-white border border-slate-100 group-hover:border-transparent flex flex-col items-start text-left">
        <div className={`p-4 rounded-2xl bg-slate-50 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 ${colorClass}`}>
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
        <div className="mt-8 pt-6 border-t border-slate-50 w-full flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600">Подробнее</span>
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">→</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
