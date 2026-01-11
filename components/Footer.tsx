
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface Props {
  theme: 'light' | 'dark';
}

const Footer: React.FC<Props> = ({ theme }) => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-32 pb-12 overflow-hidden relative transition-colors duration-500 border-t border-slate-200 dark:border-slate-900">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 dark:bg-emerald-600/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-emerald-600/20">
                EA
              </div>
              <span className="text-3xl font-black tracking-tighter italic uppercase text-slate-900 dark:text-white">AGRO<span className="text-emerald-500">MINING</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm font-medium text-lg leading-relaxed mb-10">
              Лидеры в области проектирования автономных агро-кластеров. Мы строим бизнес на пересечении реального сектора и высоких технологий.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-slate-200 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all group">
                <Send className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-200 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all group">
                <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-[0.3em] mb-10">Навигация</h4>
            <ul className="space-y-6 text-slate-500 dark:text-slate-400 font-bold text-sm">
              <li><a href="#how-it-works" className="hover:text-emerald-500 transition-colors">Технология</a></li>
              <li><a href="#energy" className="hover:text-emerald-500 transition-colors">Энергоцентр</a></li>
              <li><a href="#greenhouse" className="hover:text-emerald-500 transition-colors">Вертикальные фермы</a></li>
              <li><a href="#economy" className="hover:text-emerald-500 transition-colors">Финансы</a></li>
              <li><a href="#calculator" className="hover:text-emerald-500 transition-colors">Калькулятор</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-[0.3em] mb-10">Контакты</h4>
            <ul className="space-y-8 text-slate-500 dark:text-slate-400 font-bold text-sm">
              <li className="flex items-start space-x-4">
                <MapPin className="text-emerald-500 flex-shrink-0" size={18} />
                <span>Москва, Пресненская наб., 12<br/>Башня Федерация, 45 этаж</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-emerald-500 flex-shrink-0" size={18} />
                <span>8 (800) 555-35-35</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-emerald-500 flex-shrink-0" size={18} />
                <span>invest@agro-mining.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
            © 2025 AGRO-MINING. <span className="text-slate-300 dark:text-slate-800 ml-4">DEVELOPED BY ECO-TECH AI</span>
          </div>
          <div className="flex space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
