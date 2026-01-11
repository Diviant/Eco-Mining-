
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-emerald-100">
                EA
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 italic uppercase">AGRO<span className="text-emerald-600">MINING</span></span>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
              Лидеры в области проектирования автономных агро-комплексов с интегрированным IT-оборудованием. Строим будущее сегодня.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest mb-6">Разделы</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><a href="#how-it-works" className="hover:text-emerald-600 transition-colors">Технология</a></li>
              <li><a href="#energy" className="hover:text-emerald-600 transition-colors">Энергетика</a></li>
              <li><a href="#greenhouse" className="hover:text-emerald-600 transition-colors">Агросектор</a></li>
              <li><a href="#economy" className="hover:text-emerald-600 transition-colors">Экономика</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest mb-6">Связь</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li className="text-emerald-600">Telegram: @agro_mining_cis</li>
              <li>Email: info@agro-mining.ru</li>
              <li>Москва, Пресненская наб., 12</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <div>© 2024 AGRO-MINING CLUSTER. Все права защищены.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-emerald-600">Политика конфиденциальности</a>
            <a href="#" className="hover:text-emerald-600">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
