
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';
import { BRAND } from '../constants';

interface HeaderProps {
  user: User | null;
  onAuthClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onAuthClick, onLogout }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Grand Hall', path: '/' },
    { name: 'The Archive', path: '/archive' },
    { name: 'Royal Sage', path: '/sage' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-gold/10 bg-black/80 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
             <img 
                src="https://img.icons8.com/color/96/scales--v1.png" 
                alt="Logo" 
                className="w-full h-full object-contain filter brightness-125 saturate-[1.5]"
             />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <h1 className="font-cinzel text-lg font-bold tracking-[0.15em] leading-none text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                {BRAND.NAME}
              </h1>
              <div className="px-1.5 py-0.5 border border-gold/30 bg-gold/10 rounded text-[8px] font-bold text-gold uppercase">Elite</div>
            </div>
            <p className="text-[7px] uppercase tracking-[0.3em] font-bold text-white/50">
              {BRAND.SUBTITLE}
            </p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all pb-0.5 border-b ${
                location.pathname === link.path 
                  ? 'text-gold border-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' 
                  : 'border-transparent text-white/60 hover:text-gold hover:border-gold/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[9px] font-bold uppercase text-white tracking-widest">
              {user ? user.name : 'Seeker'}
            </span>
          </div>

          {user ? (
            <button 
              onClick={onLogout}
              className="w-8 h-8 rounded-full border border-gold bg-midnight text-gold flex items-center justify-center font-cinzel text-xs font-bold transition-all hover:bg-maroon hover:border-white"
            >
              {user.name[0].toUpperCase()}
            </button>
          ) : (
            <button 
              onClick={onAuthClick}
              className="w-8 h-8 rounded-full border border-gold bg-midnight hover:bg-gold/10 flex items-center justify-center group transition-all"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
