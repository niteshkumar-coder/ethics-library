import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { REVIEWS, CONTACT_INFO, BRAND } from '../constants';

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
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJZp8cOsNFJjeDNAFFvAQv5LFsK31_X_IMkyU2etldYiRi8YXis6S7VMCuhv1Dp383NurRYZwD_l-rC01MrfJd7M7dB4oiP3YkaWNcNCtT4r1xQedawHSSOmOhTI6GH-m87xZQ=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweowsfppM31C3cxCXp_d-E9lzlkc3FARPISFDn5JkGlIY7CJL9E2xGR-STSdT8P_vuy_18cqQ2HbFFi7PLZQ4UZjypSLtC4xQmrdwUBr7f_GUB7J0Yb-8Qa6nr1kxos6DJkpIS6d=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqMjTXA_XRiyqBeQD9GF89746uSDLpKa9O7YYScZGQ0CxT_uB_Odh1NzQPPEVUe_pQ2SCp7jwgaWyeK4k-5mM0BhB2Reo13afWSlfv89NftwocBS0x0yZmiDakXfqDkYFfokPc3=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerT9Pacp7d2uiqu0ICP-BoJtfPl8-JfQ2EqvaOmxtA2wDKSlk1_xbbYECePAK1Qty-a7M0VLsPJAJA93NfrZuJ_wfgcVKFZkwd7EBma9cktGfnkEAKFdkk2WceegZh6xIBOFobw=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerKeaLdHaCE5lJ2ZJO7pvHwKoO7Zwiw7bLs_YlL-ytIuakEXayqvttoKuZ6pstupnI9INFsUb-NhS8F3ItxY-XvmdRGRL5sOtQX4vvrR7ktkCKcbiROjFNv_LxoYBVqGoOKgBrRcg=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqTDhCbl4u1MvOGk0DX3gUgtF_MdHkl9yDw9OSacVpKHaMzozTUQ5w7fEws_bpO5ETxxN_l0WjooA8fLiuUr97-nX-HtlaaV_krnINi13lwW8aKvZShaXIdrKib_aC_JV1BHMI=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerHBWfkFAxl_V9rTuYkVOwODlBhDomiEwIx8s-wempMP1ZLRvLJchPNwIIJlf4z3bn54AAmqI1nyviDG3q0CnUWkJPiUlbyrVytjrVYCA6uAw98nFbpOp0ZzQDbWHoBy8KOsD75=s680-w680-h510-rw"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const sanctuaryPillars = [
    { id: '01', title: 'INTEGRITY', desc: 'The foundation of true wisdom lies in the character of the seeker.' },
    { id: '02', title: 'CLARITY', desc: 'A focused mind achieves what a thousand wandering thoughts cannot.' },
    { id: '03', title: 'VIRTUE', desc: 'Knowledge is a gift, but its ethical application is a responsibility.' },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION - Deep Obsidian Depth with Spotlight */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://nalandauniv.edu.in/wp-content/uploads/2019/06/library.jpg" 
            alt="Hero" 
            className={`w-full h-full object-cover scale-105 ${isDark ? 'brightness-[0.25] grayscale-[0.3]' : 'brightness-75'}`} 
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-transparent via-black/80 to-[#0c0c0c]' : 'bg-royal/20'}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="flex justify-center mb-12 animate-in slide-in-from-top duration-1000">
            <div className="px-8 py-3 bg-black/80 backdrop-blur-3xl border border-gold/30 rounded-full flex items-center space-x-4 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
               <span className="text-gold text-[10px] font-cinzel font-bold tracking-[0.4em]">PATNA'S PREMIER SANCTUARY</span>
               <div className="w-[1px] h-4 bg-gold/30"></div>
               <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-[10px]">★</span>)}
               </div>
            </div>
          </div>

          <h2 className="font-cinzel text-7xl md:text-9xl font-bold mb-8 leading-none gold-gradient-text uppercase tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
            {BRAND.NAME} <br/>
            <span className="text-white italic font-playfair font-normal lowercase tracking-normal text-3xl md:text-5xl opacity-80">{BRAND.SUBTITLE}</span>
          </h2>
          
          <h3 className="text-white/50 font-lora text-lg md:text-xl mb-16 tracking-[0.5em] font-light italic max-w-xl mx-auto uppercase">
            {BRAND.TAGLINE}
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button 
              onClick={() => document.getElementById('petition')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-16 py-6 bg-gold text-black font-bold uppercase tracking-[0.4em] text-xs transition-all hover:bg-white hover:scale-105 shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
            >
              Request Access
            </button>
            <Link 
              to="/vision" 
              className="px-16 py-6 border border-white/20 text-white font-bold uppercase tracking-[0.4em] text-xs hover:bg-white/10 hover:border-gold transition-all backdrop-blur-sm"
            >
              Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS - Charcoal/Gunmetal contrast layer */}
      <section className="py-32 bg-[#0c0c0c] section-border-top">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {sanctuaryPillars.map((pill) => (
            <div key={pill.id} className="relative group p-12 bg-black/60 border border-white/5 hover:border-gold/30 transition-all duration-700 rounded-lg">
               <div className="relative z-10">
                  <div className="text-6xl font-cinzel text-gold font-bold opacity-10 group-hover:opacity-100 transition-all mb-6">{pill.id}</div>
                  <h4 className="font-cinzel font-bold text-white tracking-[0.4em] text-lg mb-4 uppercase">{pill.title}</h4>
                  <div className="w-10 h-[1px] bg-gold mb-6 transition-all group-hover:w-20"></div>
                  <p className="text-sm font-lora italic text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">{pill.desc}</p>
               </div>
               <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY - Absolute Black Canvas */}
      <section className="py-32 bg-black section-border-top">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <p className="text-gold font-bold uppercase tracking-[0.6em] text-[10px] mb-4">The Aesthetic Experience</p>
              <h2 className="font-cinzel text-5xl font-bold text-white uppercase tracking-widest leading-tight">Archive <br/><span className="text-gold italic font-playfair lowercase font-normal">visualization</span></h2>
            </div>
            <div className="h-[1px] flex-grow bg-white/10 mx-10 hidden md:block mb-4"></div>
            <Link to="/archive" className="text-white font-bold uppercase tracking-[0.4em] text-[10px] pb-2 border-b border-gold hover:text-gold transition-colors">Enter the Vault</Link>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
            {libraryImages.map((src, index) => (
              <div key={index} className="relative overflow-hidden group rounded-sm shadow-2xl border border-white/5 hover:border-gold/20 transition-all duration-500">
                <img src={src} alt="View" className="w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 brightness-50 group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                   <p className="text-gold font-cinzel text-[10px] tracking-[0.5em] font-bold uppercase">Sector Observation {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS - Midnight Navy Shift to break the greys */}
      <section className="py-32 bg-[#000510] relative section-border-top">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-cinzel text-4xl font-bold text-white uppercase tracking-[0.3em]">Sanctuary <span className="text-gold italic font-playfair font-normal lowercase">testimonials</span></h2>
            <div className="w-20 h-[1px] bg-gold/30 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {REVIEWS.map((review) => (
              <div key={review.id} className="relative p-12 border border-white/10 bg-black/40 group hover:border-gold/30 transition-all rounded-sm">
                <div className="flex items-center space-x-6 mb-10">
                  <div className="w-16 h-16 rounded-full bg-[#000a1f] border border-gold/40 flex items-center justify-center font-cinzel text-gold font-bold shadow-2xl group-hover:scale-110 transition-transform">{review.initials}</div>
                  <div>
                    <h4 className="font-cinzel font-bold text-xs uppercase tracking-widest text-white">{review.name}</h4>
                    <p className="text-[10px] text-gold/60 uppercase tracking-widest mt-1">{review.status}</p>
                  </div>
                </div>
                <p className="font-lora italic text-white/50 leading-relaxed text-base group-hover:text-white/80 transition-colors">"{review.comment}"</p>
                <div className="absolute -bottom-4 -right-4 text-6xl text-gold/5 font-serif font-bold group-hover:text-gold/10 transition-colors">”</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PETITION - Deep Crimson warmth contrast */}
      <section id="petition" className="py-32 bg-[#2a0000] relative overflow-hidden section-border-top">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-20 items-center">
            <div className="md:col-span-2 space-y-6">
               <h2 className="font-cinzel text-4xl font-bold text-gold uppercase leading-tight gold-glow">Request <br/>Enrollment</h2>
               <div className="w-20 h-[2px] bg-gold/40"></div>
               <p className="font-lora italic text-white/70 text-lg">"Excellence is not an act, but a habit. Enrollment is the first step toward that mastery."</p>
            </div>
            
            <div className="md:col-span-3 bg-black/60 backdrop-blur-2xl p-12 border-t-4 border-gold shadow-2xl rounded-sm">
              {isSubmitted ? (
                <div className="text-center py-20 animate-in fade-in duration-700">
                   <div className="w-20 h-20 border border-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                   </div>
                   <h3 className="font-cinzel text-gold font-bold uppercase tracking-widest">Protocol Initiated</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-gold/60 uppercase tracking-[0.3em]">Identity</label>
                    <input required placeholder="Name on the scrolls..." className="w-full bg-transparent border-b border-white/20 py-4 outline-none font-lora italic text-white focus:border-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-gold/60 uppercase tracking-[0.3em]">Verified Contact</label>
                    <input required type="tel" placeholder="+91 XXXX XXX XXX" className="w-full bg-transparent border-b border-white/20 py-4 outline-none font-lora italic text-white focus:border-gold transition-colors" />
                  </div>
                  <button type="submit" className="w-full py-6 bg-gold text-black font-bold uppercase tracking-[0.5em] text-xs hover:bg-white transition-all shadow-xl">Submit Credentials</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP - High-Contrast Tactical HUD on Black */}
      <section className="py-32 bg-black section-border-top">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
            <div className="text-center md:text-left">
              <span className="text-gold font-bold uppercase tracking-[0.8em] text-[10px] mb-4 block">Physical Sanctuary</span>
              <h2 className="font-cinzel text-5xl text-white font-bold tracking-tighter uppercase leading-none">The <span className="text-gold">Coordinates</span></h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="text-center md:text-right">
                <p className="font-lora italic text-white/40 text-sm max-w-xs">{CONTACT_INFO.SANCTUARY.ADDRESS}</p>
              </div>
              <a 
                href={CONTACT_INFO.SANCTUARY.MAP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-14 py-6 bg-white/5 border border-gold/30 text-gold font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-gold hover:text-black transition-all shadow-2xl"
              >
                Launch GPS
              </a>
            </div>
          </div>
          
          <div className="relative h-[600px] bg-[#0c0c0c] rounded-xl overflow-hidden border border-white/10 group shadow-[0_0_100px_rgba(212,175,55,0.05)]">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1500" 
              alt="Map" 
              className="w-full h-full object-cover opacity-10 grayscale brightness-50 group-hover:scale-105 transition-transform duration-[30s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse scale-150"></div>
                <div className="relative p-6 bg-black border-2 border-gold rounded-full shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="absolute left-20 top-0 bg-black/90 border border-gold/40 p-6 backdrop-blur-xl rounded-lg whitespace-nowrap shadow-2xl animate-in fade-in slide-in-from-left duration-1000">
                  <p className="text-gold font-cinzel font-bold text-[11px] tracking-widest uppercase mb-2">Sanctuary Locked</p>
                  <p className="text-white font-lora italic text-lg mb-2">Ethics Main Archive</p>
                  <div className="h-[1px] bg-white/10 mb-2"></div>
                  <p className="text-[9px] font-mono text-gold/40">GEO: 25.6110° N, 85.1444° E</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent animate-scan-line shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;