
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface Props {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Navbar: React.FC<Props> = ({ theme, onThemeToggle }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-lg border-b border-emerald-100/20 dark:border-emerald-900/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/40">
              EA
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white hidden sm:block italic uppercase">AGRO<span className="text-emerald-600">MINING</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-black text-slate-800 dark:text-slate-200">
            <a href="#how-it-works" className="hover:text-emerald-600 transition-colors uppercase tracking-widest">Технология</a>
            <a href="#energy" className="hover:text-emerald-600 transition-colors uppercase tracking-widest">Энергия</a>
            <a href="#greenhouse" className="hover:text-emerald-600 transition-colors uppercase tracking-widest">Агро</a>
            <a href="#economy" className="hover:text-emerald-600 transition-colors uppercase tracking-widest">Экономика</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onThemeToggle}
              className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-all border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl text-sm font-black transition-all shadow-xl shadow-emerald-200 dark:shadow-emerald-900/40 hover:scale-105 active:scale-95 uppercase tracking-widest">
              Связь
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
