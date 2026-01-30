import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, BRAND } from '../constants';

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  brandColor: string;
  hoverGlow: string;
}

// Enhanced SocialIcon to support brand-specific coloring
const SocialIcon = ({ href, children, brandColor, hoverGlow }: SocialIconProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`w-10 h-10 flex items-center justify-center border rounded-sm transition-all duration-300 ${brandColor} border-current/20 hover:border-current ${hoverGlow}`}
  >
    {children}
  </a>
);

const Footer: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const isDark = theme === 'dark';
  
  return (
    <footer className={`py-20 px-6 border-t-4 border-gold transition-colors duration-500 ${isDark ? 'bg-[#000d1a] text-white/80' : 'bg-royal text-white'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <h3 className="font-cinzel text-4xl font-bold tracking-widest text-gold">{BRAND.NAME}</h3>
              <div className="bg-white/5 border border-gold/20 px-3 py-1 rounded">
                <div className="flex items-center space-x-1 mb-0.5">
                  {[...Array(4)].map((_, i) => <span key={i} className="text-gold text-[10px]">★</span>)}
                  <span className="text-gold text-[10px] opacity-50 relative overflow-hidden inline-block w-[5px]">★</span>
                </div>
                <p className="text-[8px] font-bold text-gold tracking-widest leading-none">4.5/5 RATING</p>
              </div>
            </div>
            <p className="font-lora opacity-60 max-w-sm leading-relaxed italic text-sm">
              "{BRAND.MISSION}"
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-xs text-gold font-bold uppercase tracking-widest">Our Sanctuary in Patna</p>
            <div>
              <p className="text-[10px] font-cinzel text-gold/60 mb-1 uppercase tracking-widest">Main Archive</p>
              <p className="text-sm font-lora opacity-80 leading-relaxed max-w-xs">{CONTACT_INFO.SANCTUARY.ADDRESS}</p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-end space-x-4">
                <p className="text-xl font-cinzel text-gold gold-glow">{CONTACT_INFO.PHONE}</p>
                <div className="pb-1 border-l border-white/10 pl-4">
                  <p className="text-[9px] font-bold text-gold uppercase tracking-tighter">Verified Sanctuary</p>
                  <p className="text-[8px] opacity-40 uppercase tracking-tighter">Google Scholarly Reviews</p>
                </div>
              </div>
              
              {/* BRAND COLOR SOCIAL MEDIA ROW */}
              <div className="flex space-x-3 pt-2">
                <SocialIcon 
                  href={CONTACT_INFO.SOCIAL.YOUTUBE} 
                  brandColor="text-[#FF0000]" 
                  hoverGlow="hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </SocialIcon>
                
                <SocialIcon 
                  href={CONTACT_INFO.SOCIAL.INSTAGRAM} 
                  brandColor="text-[#E4405F]" 
                  hoverGlow="hover:shadow-[0_0_15px_rgba(228,64,95,0.5)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </SocialIcon>
                
                <SocialIcon 
                  href={CONTACT_INFO.SOCIAL.FACEBOOK} 
                  brandColor="text-[#1877F2]" 
                  hoverGlow="hover:shadow-[0_0_15px_rgba(24,119,242,0.5)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </SocialIcon>
                
                <SocialIcon 
                  href={CONTACT_INFO.SOCIAL.X} 
                  brandColor="text-white" 
                  hoverGlow="hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-cinzel font-bold mb-8 text-sm tracking-widest text-gold uppercase">Operational Hours</h4>
          <ul className="space-y-3 text-[10px] font-semibold uppercase tracking-widest opacity-60">
            {Object.entries(CONTACT_INFO.FULL_HOURS).map(([day, hours]) => (
              <li key={day} className="flex justify-between border-b border-white/5 pb-2">
                <span>{day}</span>
                <span className="text-gold/80">{hours}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-cinzel font-bold mb-8 text-sm tracking-widest text-gold uppercase">Quick Links</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] opacity-70">
            <li><Link to="/" className="hover:text-gold transition-colors block">Grand Hall</Link></li>
            <li><Link to="/archive" className="hover:text-gold transition-colors block">The Vault</Link></li>
            <li><Link to="/sage" className="hover:text-gold transition-colors block">Royal Sage Oracle</Link></li>
            <li><Link to="/" className="hover:text-gold transition-colors block">Privacy Sanctum</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40">
          &copy; 2026 {BRAND.NAME}. All Sovereignty Reserved.
        </p>
        <div className="flex space-x-6 text-[9px] uppercase font-bold tracking-widest opacity-30">
          <Link to="/" className="hover:opacity-100 transition-opacity">Terms of Mastery</Link>
          <Link to="/" className="hover:opacity-100 transition-opacity">Scholarly Conduct</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;