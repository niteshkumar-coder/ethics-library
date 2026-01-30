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
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-royal">
        <div className="absolute inset-0">
          <img src="https://nalandauniv.edu.in/wp-content/uploads/2019/06/library.jpg" alt="Hero" className={`w-full h-full object-cover scale-105 transition-all duration-[10s] hover:scale-100 ${isDark ? 'brightness-50 grayscale-[0.2]' : 'brightness-75'}`} />
          <div className={`absolute inset-0 transition-colors duration-1000 ${isDark ? 'bg-black/60' : 'bg-royal/30'}`}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-royal/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mt-[-5vh]">
          {/* Excellence Badge */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-2 bg-black/40 backdrop-blur-md border border-gold/30 rounded-full flex items-center space-x-3 shadow-2xl animate-in zoom-in duration-1000">
               <div className="flex space-x-0.5">
                  {[...Array(4)].map((_, i) => <span key={i} className="text-gold text-xs">★</span>)}
                  <span className="text-gold text-xs opacity-50 relative overflow-hidden inline-block w-[6px]">★</span>
               </div>
               <div className="w-[1px] h-4 bg-gold/20"></div>
               <span className="font-cinzel text-white text-[10px] font-bold tracking-[0.2em]">4.5 EXCELLENCE RATING</span>
            </div>
          </div>

          <span className="font-cinzel text-gold tracking-[0.8em] text-xs font-bold uppercase mb-4 animate-pulse block">Sovereignty of Mind</span>
          <h2 className="font-cinzel text-6xl md:text-8xl font-bold text-white mb-6 leading-none drop-shadow-2xl">{BRAND.NAME} <br/><span className="text-gold italic font-playfair font-normal">{BRAND.SUBTITLE}</span></h2>
          <h3 className="text-white font-lora text-xl md:text-3xl mb-14 tracking-widest font-light italic">"{BRAND.TAGLINE}"</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button onClick={() => document.getElementById('petition')?.scrollIntoView({ behavior: 'smooth' })} className="px-14 py-6 bg-gold text-royal font-bold uppercase tracking-[0.3em] transition-all hover:scale-105 shadow-xl">Request Admission</button>
            <Link to="/vision" className="px-14 py-6 border-2 border-white/40 text-white font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-royal transition-all duration-700 backdrop-blur-md">Our Vision</Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className={`py-16 transition-colors duration-1000 ${isDark ? 'bg-[#000d1a]' : 'bg-[#001133]'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sanctuaryPillars.map((pill) => (
            <div key={pill.id} className="relative group p-8 bg-white/5 backdrop-blur-md border border-gold/20 hover:border-gold transition-all duration-500 overflow-hidden">
               <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-cinzel text-gold font-bold opacity-30 group-hover:opacity-100 transition-opacity">{pill.id}</div>
                  <h4 className="font-cinzel font-bold text-white tracking-[0.2em] text-lg mb-2 uppercase">{pill.title}</h4>
                  <div className="w-8 h-[1px] bg-gold mb-3"></div>
                  <p className="text-[12px] font-lora italic text-white/70 leading-relaxed">{pill.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className={`py-24 transition-colors duration-1000 ${isDark ? 'bg-black' : 'bg-[#fcfcf0]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-bold uppercase tracking-[0.5em] text-[10px] mb-4 text-gold">Visual Tour</p>
            <h2 className={`font-cinzel text-4xl font-bold uppercase ${isDark ? 'text-white' : 'text-royal'}`}>Library View</h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mt-6"></div>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {libraryImages.map((src, index) => (
              <div key={index} className="relative overflow-hidden group border border-gold/10 hover:border-gold/50 transition-all duration-500 rounded-sm">
                <img src={src} alt="View" className="w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <span className="text-gold font-cinzel text-[10px] tracking-[0.3em] font-bold uppercase">Sanctuary Detail {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className={`py-24 transition-colors duration-1000 ${isDark ? 'bg-[#000814]' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-bold uppercase tracking-[0.5em] text-[10px] mb-4 text-gold">Elite Testimonials</p>
            <h2 className={`font-cinzel text-4xl font-bold uppercase ${isDark ? 'text-white' : 'text-royal'}`}>Voices of Mastery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className={`p-8 border-l-4 transition-all hover:shadow-xl ${isDark ? 'bg-white/5 border-gold' : 'bg-white border-maroon shadow-sm'}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-royal text-gold flex items-center justify-center font-cinzel font-bold border border-gold/40">{review.initials}</div>
                  <div>
                    <h4 className="font-cinzel font-bold text-xs uppercase tracking-widest">{review.name}</h4>
                    <p className="text-[9px] text-gold font-bold uppercase tracking-widest">{review.status}</p>
                  </div>
                </div>
                <p className="font-lora italic text-sm leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PETITION */}
      <section id="petition" className="py-24 bg-maroon relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-white mb-4 tracking-widest uppercase">Petition for Elite Membership</h2>
            <p className="text-white/70 font-lora italic text-sm">Present your scholarly intent for review by the archives.</p>
          </div>
          <div className={`p-10 border-t-8 border-gold shadow-2xl ${isDark ? 'bg-[#001122]' : 'bg-white'}`}>
            {isSubmitted ? (
              <div className="text-center py-12"><h3 className="font-cinzel text-xl text-gold font-bold mb-3 uppercase tracking-widest">Petition Received</h3></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input required placeholder="Legal Identity" className="w-full border-b-2 py-3 outline-none font-lora italic bg-transparent border-gold/20" />
                  <input required type="tel" placeholder="Mobile Line" className="w-full border-b-2 py-3 outline-none font-lora italic bg-transparent border-gold/20" />
                </div>
                <input required type="email" placeholder="Gmail Correspondence" className="w-full border-b-2 py-3 outline-none font-lora italic bg-transparent border-gold/20" />
                <button type="submit" className="w-full py-5 bg-royal text-gold font-bold uppercase tracking-[0.3em] hover:bg-black transition-all">Submit Petition</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* DIGITAL MAP SECTION */}
      <section className={`py-24 border-y-8 border-gold overflow-hidden transition-colors duration-1000 ${isDark ? 'bg-black' : 'bg-[#001a33]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-cinzel text-gold tracking-[0.6em] uppercase text-[10px] font-bold block mb-2">Satellite Telemetry</span>
            <h2 className="font-cinzel text-4xl text-white font-bold tracking-[0.2em] uppercase">Patna Sanctuary Coordinates</h2>
          </div>
          
          <div className="relative group rounded-xl overflow-hidden border border-gold/40 bg-black/80 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
            {/* Real Map Image with Digital Overlay */}
            <div className="h-[500px] w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1500" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(0,0,0,0.8)_100%)]"></div>
              
              {/* Digital Grid Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(212,175,55,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
              
              {/* Scan Line Animation */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/50 animate-scan-line z-20 shadow-[0_0_15px_#D4AF37]"></div>
              
              {/* Precise Location Beacon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 bg-gold/20 rounded-full animate-ping"></div>
                  <div className="absolute w-12 h-12 bg-gold/40 rounded-full animate-pulse"></div>
                  <div className="relative p-2 bg-royal border-2 border-gold rounded-full shadow-[0_0_20px_#D4AF37]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  {/* Digital Callout */}
                  <div className="absolute left-10 top-0 whitespace-nowrap bg-black/80 border border-gold/50 p-3 backdrop-blur-md rounded shadow-2xl animate-in slide-in-from-left duration-1000">
                    <p className="font-cinzel text-gold text-[10px] font-bold tracking-widest uppercase mb-1">Target Identified</p>
                    <p className="font-lora text-white text-[11px] italic">Ethics Main Sanctuary</p>
                    <p className="font-mono text-gold/60 text-[8px] mt-1">25.611° N, 85.144° E</p>
                  </div>
                </div>
              </div>

              {/* HUD Elements */}
              <div className="absolute top-6 left-6 space-y-2 pointer-events-none">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 animate-pulse rounded-full"></div>
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-tighter">Live Telemetry Feed // Punaichak Sector</span>
                </div>
                <div className="border-l border-gold/40 pl-3 py-2">
                  <p className="font-mono text-[9px] text-gold">SIGNAL: SECURE</p>
                  <p className="font-mono text-[9px] text-gold">ALT: 53m MSL</p>
                  <p className="font-mono text-[9px] text-gold">VEL: 0.0km/h</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 text-right pointer-events-none">
                <p className="font-cinzel text-white/40 text-[9px] uppercase tracking-[0.5em] mb-2">Verification Protocol v4.2</p>
                <div className="flex justify-end space-x-1">
                  {[...Array(12)].map((_, i) => <div key={i} className={`h-1 w-1 rounded-full ${i < 8 ? 'bg-gold' : 'bg-white/10'}`}></div>)}
                </div>
              </div>
            </div>

            {/* Info Footer Info */}
            <div className="p-8 border-t border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-2xl">
              <div className="text-center md:text-left">
                <h4 className="font-cinzel text-gold font-bold tracking-[0.2em] text-xl uppercase mb-2">Sanctuary Entrance</h4>
                <p className="font-lora text-white/60 italic text-sm">{CONTACT_INFO.SANCTUARY.ADDRESS}</p>
              </div>
              <a 
                href={CONTACT_INFO.SANCTUARY.MAP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-12 py-4 bg-gold text-royal font-bold uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl text-xs"
              >
                Access GPS Interface
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;