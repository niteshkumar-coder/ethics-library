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
      {/* HERO SECTION - Enhanced Depth */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://nalandauniv.edu.in/wp-content/uploads/2019/06/library.jpg" 
            alt="Hero" 
            className={`w-full h-full object-cover scale-105 transition-all duration-[10s] hover:scale-100 ${isDark ? 'brightness-[0.4] contrast-125' : 'brightness-75'}`} 
          />
          {/* Layered Overlays */}
          <div className={`absolute inset-0 transition-all duration-1000 ${isDark ? 'bg-gradient-to-b from-royal/40 via-[#000814]/80 to-[#000d1a]' : 'bg-royal/30'}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mt-[-5vh]">
          <div className="flex justify-center mb-10">
            <div className="px-6 py-2 bg-black/60 backdrop-blur-xl border border-gold/40 rounded-full flex items-center space-x-3 shadow-[0_0_30px_rgba(212,175,55,0.2)] animate-in zoom-in duration-1000">
               <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className={`text-gold text-xs ${i === 4 ? 'opacity-40' : ''}`}>★</span>)}
               </div>
               <div className="w-[1px] h-4 bg-gold/20"></div>
               <span className="font-cinzel text-white text-[10px] font-bold tracking-[0.3em]">ELITE SCHOLARSHIP PROTOCOL</span>
            </div>
          </div>

          <span className="font-cinzel text-gold tracking-[0.8em] text-xs font-bold uppercase mb-4 animate-pulse block">Legacy of Excellence</span>
          <h2 className="font-cinzel text-6xl md:text-9xl font-bold mb-6 leading-none drop-shadow-2xl gold-gradient-text uppercase tracking-tighter">
            {BRAND.NAME} <br/>
            <span className="text-white italic font-playfair font-normal lowercase tracking-normal text-4xl md:text-6xl">{BRAND.SUBTITLE}</span>
          </h2>
          <h3 className="text-white/80 font-lora text-xl md:text-2xl mb-16 tracking-widest font-light italic max-w-2xl mx-auto">
            "{BRAND.TAGLINE}"
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button 
              onClick={() => document.getElementById('petition')?.scrollIntoView({ behavior: 'smooth' })} 
              className="group relative px-14 py-6 bg-gold overflow-hidden font-bold uppercase tracking-[0.3em] transition-all hover:scale-105 shadow-[0_20px_40px_rgba(212,175,55,0.3)]"
            >
              <span className="relative z-10 text-royal">Request Admission</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-20"></div>
            </button>
            <Link 
              to="/vision" 
              className="px-14 py-6 border-2 border-white/20 text-white font-bold uppercase tracking-[0.3em] hover:bg-white/10 hover:border-gold transition-all duration-700 backdrop-blur-md"
            >
              Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS - Distinct Obsidian Background */}
      <section className={`py-24 border-y border-gold/10 transition-colors duration-1000 ${isDark ? 'bg-[#000a1f]' : 'bg-[#001133]'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {sanctuaryPillars.map((pill) => (
            <div key={pill.id} className="relative group p-10 bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-gold transition-all duration-700 hover:bg-white/[0.08] rounded-xl">
               <div className="relative z-10 space-y-6">
                  <div className="text-5xl font-cinzel text-gold font-bold opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">{pill.id}</div>
                  <h4 className="font-cinzel font-bold text-white tracking-[0.3em] text-xl mb-2 uppercase">{pill.title}</h4>
                  <div className="w-12 h-[2px] bg-gold transition-all group-hover:w-20"></div>
                  <p className="text-sm font-lora italic text-white/60 leading-relaxed">{pill.desc}</p>
               </div>
               <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY - Charcoal Grid */}
      <section className={`py-32 transition-colors duration-1000 ${isDark ? 'bg-black' : 'bg-[#fcfcf0]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="font-bold uppercase tracking-[0.5em] text-[10px] mb-4 text-gold">The Sanctuary Aesthetics</p>
            <h2 className={`font-cinzel text-5xl font-bold uppercase ${isDark ? 'text-white' : 'text-royal'}`}>Digital Visual Tour</h2>
            <div className="w-32 h-[1px] bg-gold/50 mx-auto mt-8"></div>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {libraryImages.map((src, index) => (
              <div key={index} className="relative overflow-hidden group border border-white/5 hover:border-gold/30 transition-all duration-700 rounded-lg shadow-2xl">
                <img src={src} alt="View" className="w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 brightness-[0.8] group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-gold font-cinzel text-xs tracking-[0.4em] font-bold uppercase block mb-1">Observation {index + 1}</span>
                      <span className="text-white/60 text-[9px] uppercase tracking-widest">Ethics Archive Sector B</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS - Velvet Layer */}
      <section className={`py-32 relative transition-colors duration-1000 ${isDark ? 'bg-[#000814]' : 'bg-cream'}`}>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="font-bold uppercase tracking-[0.5em] text-[10px] mb-4 text-gold">Elite Commendations</p>
            <h2 className={`font-cinzel text-5xl font-bold uppercase ${isDark ? 'text-white' : 'text-royal'}`}>Voices of Sovereignty</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {REVIEWS.map((review) => (
              <div key={review.id} className={`p-10 border transition-all duration-500 hover:scale-105 group ${isDark ? 'bg-white/[0.03] border-white/10 hover:border-gold/50' : 'bg-white border-maroon shadow-sm'}`}>
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-14 h-14 rounded-full bg-royal text-gold flex items-center justify-center font-cinzel font-bold border-2 border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform">{review.initials}</div>
                  <div>
                    <h4 className="font-cinzel font-bold text-sm uppercase tracking-widest text-white">{review.name}</h4>
                    <p className="text-[10px] text-gold font-bold uppercase tracking-widest">{review.status}</p>
                  </div>
                </div>
                <div className="relative">
                   <span className="absolute -top-6 -left-4 text-gold/20 text-6xl font-serif">"</span>
                   <p className="font-lora italic text-base leading-relaxed text-white/70 relative z-10">
                     {review.comment}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PETITION - Bold Contrast Section */}
      <section id="petition" className="py-32 bg-[#4a0000] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl font-bold text-white mb-6 tracking-[0.3em] uppercase gold-glow">Sanctuary Enrollment</h2>
            <p className="text-white/80 font-lora italic text-lg max-w-xl mx-auto">"Entrance is granted only to those whose dedication is absolute."</p>
          </div>
          <div className={`p-12 border-t-8 border-gold shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${isDark ? 'bg-[#000d1a]' : 'bg-white'}`}>
            {isSubmitted ? (
              <div className="text-center py-20 animate-in fade-in duration-1000">
                <div className="w-20 h-20 bg-gold/20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-8">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="font-cinzel text-2xl text-gold font-bold mb-4 uppercase tracking-widest">Petition Sealed</h3>
                <p className="text-white/40 uppercase text-[10px] tracking-widest">The archives will evaluate your credentials.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-gold/60 uppercase tracking-widest ml-1">Full Legal Identity</label>
                    <input required placeholder="Name as per Scrolls" className="w-full border-b-2 py-4 outline-none font-lora italic bg-transparent border-gold/30 text-white focus:border-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-gold/60 uppercase tracking-widest ml-1">Verified Mobile Line</label>
                    <input required type="tel" placeholder="+91 XXXX XXX XXX" className="w-full border-b-2 py-4 outline-none font-lora italic bg-transparent border-gold/30 text-white focus:border-gold transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-gold/60 uppercase tracking-widest ml-1">Secure Correspondence</label>
                  <input required type="email" placeholder="official@gmail.com" className="w-full border-b-2 py-4 outline-none font-lora italic bg-transparent border-gold/30 text-white focus:border-gold transition-colors" />
                </div>
                <button type="submit" className="w-full py-6 bg-royal text-gold font-bold uppercase tracking-[0.4em] text-sm hover:bg-black transition-all shadow-2xl border border-gold/40">Initiate Protocol</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* DIGITAL MAP - High Contrast HUD */}
      <section className={`py-32 transition-colors duration-1000 ${isDark ? 'bg-black' : 'bg-[#001a33]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="font-cinzel text-gold tracking-[0.6em] uppercase text-[10px] font-bold block mb-4">Tactical Location Data</span>
            <h2 className="font-cinzel text-5xl text-white font-bold tracking-[0.2em] uppercase">The Sanctuary Matrix</h2>
          </div>
          
          <div className="relative group rounded-2xl overflow-hidden border-2 border-gold/40 bg-black shadow-[0_0_100px_rgba(212,175,55,0.15)]">
            <div className="h-[600px] w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1500" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale scale-110 group-hover:scale-100 transition-transform duration-[20s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-[#000814]/40 to-black"></div>
              
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(212,175,55,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-scan-line z-20 shadow-[0_0_20px_#D4AF37]"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-32 h-32 bg-gold/10 rounded-full animate-ping"></div>
                  <div className="absolute w-16 h-16 bg-gold/30 rounded-full animate-pulse blur-xl"></div>
                  <div className="relative p-4 bg-royal border-2 border-gold rounded-full shadow-[0_0_40px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="absolute left-16 top-0 whitespace-nowrap bg-black/90 border-2 border-gold/50 p-5 backdrop-blur-xl rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-in slide-in-from-left duration-1000">
                    <p className="font-cinzel text-gold text-xs font-bold tracking-widest uppercase mb-2">Location Locked</p>
                    <p className="font-lora text-white text-base italic border-b border-white/10 pb-2 mb-2">Ethics Main Archive</p>
                    <div className="flex space-x-4">
                       <p className="font-mono text-gold/60 text-[9px]">LAT: 25.6110° N</p>
                       <p className="font-mono text-gold/60 text-[9px]">LONG: 85.1444° E</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 bg-gradient-to-r from-black via-[#000d1a] to-black border-t border-gold/30 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left space-y-2">
                <h4 className="font-cinzel text-gold font-bold tracking-[0.4em] text-2xl uppercase">Sanctuary Entrance</h4>
                <p className="font-lora text-white/50 italic text-lg max-w-lg">{CONTACT_INFO.SANCTUARY.ADDRESS}</p>
              </div>
              <a 
                href={CONTACT_INFO.SANCTUARY.MAP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-16 py-6 bg-gold overflow-hidden font-bold uppercase tracking-[0.4em] transition-all hover:scale-105 shadow-[0_20px_40px_rgba(212,175,55,0.4)]"
              >
                <span className="relative z-10 text-royal text-sm">Open GPS Interface</span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right opacity-20"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;