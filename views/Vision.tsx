
import React, { useState } from 'react';
import { BRAND } from '../constants';

interface VisionProps { theme: 'light' | 'dark'; }

const Vision: React.FC<VisionProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', whatsapp: '', intent: '' });
  const [isSent, setIsSent] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDark ? 'bg-[#000814]' : 'bg-cream'}`}>
      {/* VISION HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000" 
            alt="Vision" 
            className={`w-full h-full object-cover transition-all duration-1000 ${isDark ? 'brightness-50 grayscale' : 'brightness-75'}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black/80 via-transparent' : 'from-royal/40 via-transparent'}`}></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <p className={`font-cinzel tracking-[0.8em] text-[10px] font-bold uppercase mb-4 animate-pulse ${isDark ? 'text-gold' : 'text-white'}`}>Sovereign Philosophy</p>
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-widest drop-shadow-lg">The Grand Vision</h1>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className={`font-cinzel text-3xl font-bold uppercase mb-8 ${isDark ? 'text-gold' : 'text-royal'}`}>A Testament to Excellence</h2>
            <p className={`font-lora text-xl italic leading-relaxed opacity-80 ${isDark ? 'text-white' : 'text-royal'}`}>
              "At {BRAND.NAME} {BRAND.SUBTITLE}, we envision a world where intellectual pursuit is inseparable from moral integrity. Our sanctuary is not merely a storehouse of books, but a foundry for the character of the next generation of leaders, thinkers, and sovereigns."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className={`p-8 border-l-2 border-gold transition-colors ${isDark ? 'bg-white/5' : 'bg-white shadow-xl shadow-royal/5'}`}>
              <h4 className={`font-cinzel font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-gold' : 'text-maroon'}`}>Intellectual Sovereignty</h4>
              <p className={`font-lora text-sm opacity-70 leading-relaxed ${isDark ? 'text-white' : 'text-royal'}`}>
                Empowering individuals to think independently, analyze critically, and arrive at truths through rigorous study and dedicated focus.
              </p>
            </div>
            <div className={`p-8 border-l-2 border-gold transition-colors ${isDark ? 'bg-white/5' : 'bg-white shadow-xl shadow-royal/5'}`}>
              <h4 className={`font-cinzel font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-gold' : 'text-maroon'}`}>Ethical Mastery</h4>
              <p className={`font-lora text-sm opacity-70 leading-relaxed ${isDark ? 'text-white' : 'text-royal'}`}>
                Fostering an environment where every lesson is contextualized within the framework of virtue, accountability, and scholarly honor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className={`py-24 border-y border-gold/20 transition-colors ${isDark ? 'bg-black/40' : 'bg-royal/5'}`}>
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className={`font-cinzel text-2xl font-bold uppercase mb-2 ${isDark ? 'text-white' : 'text-royal'}`}>Scholar Inquiry</h3>
            <p className={`font-lora italic text-[11px] opacity-60 ${isDark ? 'text-white' : 'text-royal'}`}>Reach out to the archives for scholarship opportunities and elite access.</p>
          </div>

          <div className={`p-10 border-t-4 border-gold shadow-2xl transition-colors ${isDark ? 'bg-[#001122]' : 'bg-white'}`}>
            {isSent ? (
              <div className="text-center py-12">
                <div className={`w-16 h-16 border-2 rounded-full flex items-center justify-center mx-auto mb-6 ${isDark ? 'border-gold' : 'border-royal'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#D4AF37" : "#002366"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4 className={`font-cinzel text-lg font-bold uppercase tracking-widest ${isDark ? 'text-gold' : 'text-royal'}`}>Inquiry Dispatched</h4>
                <p className={`text-[10px] mt-2 opacity-50 uppercase tracking-tighter ${isDark ? 'text-white' : 'text-royal'}`}>The Sage will contact you via WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-6">
                <div>
                  <label className={`block font-cinzel text-[10px] font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gold' : 'text-maroon'}`}>Scholar Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Full Legal Identity" 
                    className={`w-full p-4 border-b-2 outline-none font-lora italic bg-transparent transition-colors ${isDark ? 'border-gold/20 text-white focus:border-gold' : 'border-royal/20 text-royal focus:border-gold'}`}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className={`block font-cinzel text-[10px] font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gold' : 'text-maroon'}`}>WhatsApp Contact</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className={`w-full p-4 border-b-2 outline-none font-lora italic bg-transparent transition-colors ${isDark ? 'border-gold/20 text-white focus:border-gold' : 'border-royal/20 text-royal focus:border-gold'}`}
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>
                <div>
                  <label className={`block font-cinzel text-[10px] font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gold' : 'text-maroon'}`}>Scholarly Intent</label>
                  <textarea 
                    placeholder="Briefly describe your vision for your future..." 
                    className={`w-full p-4 border-b-2 outline-none font-lora italic bg-transparent h-32 resize-none transition-colors ${isDark ? 'border-gold/20 text-white focus:border-gold' : 'border-royal/20 text-royal focus:border-gold'}`}
                    value={formData.intent}
                    onChange={(e) => setFormData({...formData, intent: e.target.value})}
                  />
                </div>
                <button type="submit" className={`w-full py-5 font-bold uppercase tracking-[0.3em] text-xs transition-all shadow-xl ${isDark ? 'bg-gold text-royal hover:bg-white' : 'bg-royal text-gold hover:bg-maroon'}`}>
                  Submit Scholarly Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
