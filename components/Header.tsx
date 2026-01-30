
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';
import { BRAND } from '../constants';

interface HeaderProps {
  user: User | null;
  onAuthClick: () => void;
  onLogout: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onAuthClick, onLogout, theme, toggleTheme }) => {
  const isDark = theme === 'dark';
  const location = useLocation();

  const navLinks = [
    { name: 'Grand Hall', path: '/' },
    { name: 'The Archive', path: '/archive' },
    { name: 'Royal Sage', path: '/sage' },
  ];

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
      isDark ? 'bg-[#000814]/90 border-gold/20' : 'bg-white/95 border-royal/10 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
             <img 
                src="https://img.icons8.com/color/96/scales--v1.png" 
                alt="Logo" 
                className={`w-full h-full object-contain filter ${isDark ? 'brightness-125 saturate-[1.5]' : 'contrast-125'}`}
             />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <h1 className={`font-cinzel text-xl font-bold tracking-[0.2em] leading-none ${isDark ? 'text-gold' : 'text-royal'}`}>
                {BRAND.NAME}
              </h1>
              <div className={`px-2 py-0.5 border rounded text-[9px] font-bold ${isDark ? 'bg-gold/10 border-gold/30 text-gold' : 'bg-royal/5 border-royal/20 text-royal'}`}>4.5 ★</div>
            </div>
            <p className={`text-[8px] uppercase tracking-[0.4em] font-bold mt-1 ${isDark ? 'text-white/60' : 'text-maroon'}`}>
              {BRAND.SUBTITLE}
            </p>
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all pb-1 border-b-2 ${
                location.pathname === link.path 
                  ? `${isDark ? 'text-gold border-gold' : 'text-royal border-royal'}` 
                  : `border-transparent hover:text-gold hover:border-gold ${isDark ? 'text-white/70' : 'text-royal/70'}`
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all border ${
              isDark ? 'bg-gold/10 text-gold border-gold/30' : 'bg-royal/5 text-royal border-royal/10'
            }`}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <div className="hidden sm:flex flex-col items-end">
            <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-white' : 'text-royal'}`}>
              {user ? user.name : 'Master Learner'}
            </span>
            <span className="text-[9px] text-gold uppercase font-bold">
              {user ? 'Elite Sovereign' : 'Scholar'}
            </span>
          </div>

          {user ? (
            <button 
              onClick={onLogout}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-cinzel font-bold transition-colors ${
                isDark ? 'border-gold bg-royal text-gold hover:bg-maroon' : 'border-royal bg-white text-royal hover:bg-royal hover:text-white'
              }`}
            >
              {user.name[0].toUpperCase()}
            </button>
          ) : (
            <button 
              onClick={onAuthClick}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center group transition-all ${
                isDark ? 'border-gold bg-royal hover:bg-maroon' : 'border-royal bg-white hover:bg-royal group-hover:stroke-white'
              }`}
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#D4AF37" : "#002366"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
