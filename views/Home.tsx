
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { REVIEWS, CONTACT_INFO, BRAND } from '../constants.tsx';

interface HomeProps { theme: 'light' | 'dark'; }

const Home: React.FC<HomeProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [isSubmitted, setIsSubmitted] = useState(false);

  const libraryImages = [
    "https://i.imgur.com/DgiXe7B.jpeg",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoOV_XSyzJ7VaKoOOJmVAtZGb26c3lZQfIO31uc_WigYzs52wpqTDvpcI-DSQkLrsfnoyO9h3PyrnGNLoqXPsuXS2y29nye969Dg7VOe0rrxHDkmQAKVtM-cYa3er31_dG2fU7E=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwermEraaS1jyfJA4jBqIuMxc0IsD9xXlMPAt3KaMFG-zggC0Wbc9yCWnF7nd5h-pQG3N3tFQ5oOL0FBgWidAE-a3tityaWRSBmXzbDtRtkime_x3HlTR0rtgH4XrRYYptOP2vNuw=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwersLQWHcizyFnxsE118pRxOfa3bK6bzwzG6e_AmrDY83-nId4z4P0oyKWBpBuq1_BE3J0NtvNUpoEwV91kSBeNmJ7btshocZkyHEi9nZfnFd6GxpjzDlMRFj0LAcrLTpS8QF5glew=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJZp8cOsNFJjeDNAFFvAQv5LFsK31_X_IMkyU2etldYiRi8YXis6S7VMCuhv1Dp383NurRYZwD_l-rC01MrfJd7M7dB4oiP3YkaWNcNCtT4r1xQedawHSSOmOhTI6GH-m87xZQ=s680-w680-h510-rw"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const sanctuaryPillars = [
    { id: '01', title: 'INTEGRITY', desc: 'Character is our primary currency.' },
    { id: '02', title: 'CLARITY', desc: 'Focus defines the elite scholar.' },
    { id: '03', title: 'VIRTUE', desc: 'Knowledge requires ethical duty.' },
  ];

  return (
    <div className="flex flex-col transition-colors duration-700">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://nalandauniv.edu.in/wp-content/uploads/2019/06/library.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover brightness-[0.4] grayscale-[0.2]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="flex justify-center mb-10 animate-in slide-in-from-top duration-700">
            <div className="px-6 py-2 backdrop-blur-3xl border border-gold/30 rounded-full flex items-center space-x-4 bg-black/60">
               <span className="text-gold text-[9px] font-cinzel font-bold tracking-[0.4em]">PREMIER SANCTUARY</span>
               <div className="w-[1px] h-3 bg-gold/30"></div>
               <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-[10px]">★</span>)}
               </div>
            </div>
          </div>

          <h2 className="font-cinzel text-6xl md:text-8xl font-bold mb-4 leading-none uppercase tracking-tighter drop-shadow-2xl gold-gradient-text">
            {BRAND.NAME} <br/>
            <span className="text-white italic font-playfair font-normal lowercase tracking-normal text-2xl md:text-4xl opacity-90">{BRAND.SUBTITLE}</span>
          </h2>
          
          <h3 className="text-white/50 font-lora text-lg md:text-xl mb-12 tracking-[0.4em] font-light italic max-w-xl mx-auto uppercase">
            {BRAND.TAGLINE}
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('petition')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-12 py-5 bg-gold text-black font-bold uppercase tracking-[0.3em] text-xs transition-all hover:scale-105"
            >
              Request Access
            </button>
            <Link 
              to="/vision" 
              className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-xs transition-all backdrop-blur-md hover:border-gold hover:bg-white/5"
            >
              Our Vision
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {sanctuaryPillars.map((pill) => (
            <div key={pill.id} className="relative group p-10 border border-white/5 rounded-xl glass-card transition-all hover:border-gold/30">
               <div className="relative z-10">
                  <div className="text-5xl font-cinzel font-bold opacity-10 group-hover:opacity-100 transition-all mb-4 text-gold">
                    {pill.id}
                  </div>
                  <h4 className="font-cinzel font-bold tracking-[0.3em] text-lg mb-3 uppercase text-white">{pill.title}</h4>
                  <div className="w-8 h-[2px] bg-gold mb-6 transition-all group-hover:w-16"></div>
                  <p className="text-sm font-lora italic leading-relaxed text-white/50 group-hover:text-white/80">{pill.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="font-bold uppercase tracking-[0.6em] text-[10px] mb-3 text-gold">THE AESTHETIC</p>
              <h2 className="font-cinzel text-4xl font-bold uppercase tracking-widest text-white">The <span className="text-gold italic font-playfair lowercase font-normal">vault</span></h2>
            </div>
            <Link to="/archive" className="font-bold uppercase tracking-[0.3em] text-[10px] pb-2 border-b border-gold/40 hover:border-gold text-white">Enter Archives</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {libraryImages.map((src, index) => (
              <div key={index} className="relative overflow-hidden group rounded-lg border border-white/5 hover:border-gold/30 transition-all duration-500 aspect-video">
                <img src={src} alt="View" className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                   <p className="font-cinzel text-[9px] tracking-[0.4em] font-bold uppercase text-gold">Observation {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="petition" className="py-24 relative overflow-hidden z-10 bg-[#1a0000]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 space-y-4">
               <h2 className="font-cinzel text-3xl font-bold uppercase leading-tight tracking-tighter text-gold">Initiate <br/>Access</h2>
               <p className="font-lora italic text-white/60 text-base">"Character is the entry requirement."</p>
            </div>
            
            <div className="md:col-span-3 backdrop-blur-3xl p-10 border-t-4 border-gold bg-black/60 rounded-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                   <h3 className="font-cinzel text-xl font-bold uppercase tracking-widest text-gold">Sealed</h3>
                   <p className="text-white/40 uppercase text-[9px] tracking-widest mt-2">Awaiting Council Evaluation</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/70">Scholar Identity</label>
                    <input required placeholder="Full Name..." className="w-full bg-transparent border-b border-white/10 py-3 outline-none font-lora italic text-lg text-white focus:border-gold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/70">Mobile Line</label>
                    <input required type="tel" placeholder="+91 XXXX..." className="w-full bg-transparent border-b border-white/10 py-3 outline-none font-lora italic text-lg text-white focus:border-gold" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-gold text-black font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all">Seal Petition</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
