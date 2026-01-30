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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://nalandauniv.edu.in/wp-content/uploads/2019/06/library.jpg" 
            alt="Hero" 
            className={`w-full h-full object-cover scale-105 transition-all duration-1000 ${isDark ? 'brightness-[0.45] grayscale-[0.2] contrast-110' : 'brightness-75'}`} 
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-black/20 via-black/70 to-black' : 'bg-royal/20'}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="flex justify-center mb-14 animate-in slide-in-from-top duration-1000">
            <div className="px-10 py-4 bg-black/80 backdrop-blur-3xl border border-gold/40 rounded-full flex items-center space-x-5 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
               <span className="text-gold text-[11px] font-cinzel font-bold tracking-[0.5em] gold-glow">PATNA'S PREMIER SANCTUARY</span>
               <div className="w-[1px] h-5 bg-gold/40"></div>
               <div className="flex space-x-1.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-xs">★</span>)}
               </div>
            </div>
          </div>

          <h2 className="font-cinzel text-7xl md:text-[11rem] font-bold mb-8 leading-none gold-gradient-text uppercase tracking-tighter drop-shadow-[0_15px_35px_rgba(0,0,0,1)]">
            {BRAND.NAME} <br/>
            <span className="text-white italic font-playfair font-normal lowercase tracking-normal text-3xl md:text-6xl opacity-90">{BRAND.SUBTITLE}</span>
          </h2>
          
          <h3 className="text-white/60 font-lora text-xl md:text-2xl mb-16 tracking-[0.6em] font-light italic max-w-2xl mx-auto uppercase">
            {BRAND.TAGLINE}
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <button 
              onClick={() => document.getElementById('petition')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-20 py-7 bg-gold text-black font-bold uppercase tracking-[0.4em] text-sm transition-all hover:bg-white hover:scale-105 shadow-[0_20px_60px_rgba(212,175,55,0.3)]"
            >
              Request Access
            </button>
            <Link 
              to="/vision" 
              className="px-20 py-7 border-2 border-white/20 text-white font-bold uppercase tracking-[0.4em] text-sm hover:bg-white/10 hover:border-gold transition-all backdrop-blur-md"
            >
              Our Vision
            </Link>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      <section className="py-32 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">
          {sanctuaryPillars.map((pill) => (
            <div key={pill.id} className="relative group p-14 bg-white/[0.02] border border-white/5 hover:border-gold/40 transition-all duration-700 rounded-2xl glass-card">
               <div className="relative z-10">
                  <div className="text-7xl font-cinzel text-gold font-bold opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all mb-8 duration-500">
                    {pill.id}
                  </div>
                  <h4 className="font-cinzel font-bold text-white tracking-[0.5em] text-xl mb-6 uppercase">{pill.title}</h4>
                  <div className="w-12 h-[2px] bg-gold mb-8 transition-all group-hover:w-24"></div>
                  <p className="text-base font-lora italic text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{pill.desc}</p>
               </div>
               <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-separator"></div>

      <section className="py-40 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <p className="text-gold font-bold uppercase tracking-[0.8em] text-[12px] mb-5 gold-glow">The Aesthetic Experience</p>
              <h2 className="font-cinzel text-6xl font-bold text-white uppercase tracking-widest leading-tight">Vault <br/><span className="text-gold italic font-playfair lowercase font-normal">visualization</span></h2>
            </div>
            <div className="h-[1px] flex-grow bg-white/10 mx-16 hidden md:block mb-6"></div>
            <Link to="/archive" className="text-white font-bold uppercase tracking-[0.5em] text-xs pb-3 border-b-2 border-gold/40 hover:border-gold transition-colors">Enter the Vault</Link>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
            {libraryImages.map((src, index) => (
              <div key={index} className="relative overflow-hidden group rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5 hover:border-gold/30 transition-all duration-500">
                <img src={src} alt="View" className="w-full object-cover transition-all duration-1000 group-hover:scale-110 brightness-[0.6] group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-12">
                   <p className="text-gold font-cinzel text-[11px] tracking-[0.6em] font-bold uppercase">Observation Protocol {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      <section className="py-32 bg-[#000814] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-28">
            <h2 className="font-cinzel text-5xl font-bold text-white uppercase tracking-[0.4em]">Elite <span className="text-gold italic font-playfair font-normal lowercase">commendations</span></h2>
            <div className="w-24 h-[1px] bg-gold/40 mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {REVIEWS.map((review) => (
              <div key={review.id} className="relative p-14 border border-white/10 bg-black/40 group hover:border-gold/40 transition-all rounded-xl glass-card">
                <div className="flex items-center space-x-8 mb-12">
                  <div className="w-20 h-20 rounded-full bg-[#000a1f] border-2 border-gold/40 flex items-center justify-center font-cinzel text-gold text-xl font-bold shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform duration-500">{review.initials}</div>
                  <div>
                    <h4 className="font-cinzel font-bold text-sm uppercase tracking-widest text-white mb-1">{review.name}</h4>
                    <p className="text-[11px] text-gold/70 uppercase tracking-widest font-bold">{review.status}</p>
                  </div>
                </div>
                <p className="font-lora italic text-white/60 leading-relaxed text-lg group-hover:text-white/90 transition-colors">"{review.comment}"</p>
                <div className="absolute -bottom-6 -right-6 text-[10rem] text-gold/5 font-serif font-bold group-hover:text-gold/10 transition-colors pointer-events-none italic">”</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      <section id="petition" className="py-40 bg-[#250000] relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-24 items-center">
            <div className="md:col-span-2 space-y-8">
               <h2 className="font-cinzel text-5xl font-bold text-gold uppercase leading-tight gold-glow tracking-tighter">Initiate <br/>Access Protocol</h2>
               <div className="w-24 h-[3px] bg-gold/50"></div>
               <p className="font-lora italic text-white/80 text-xl leading-relaxed">"True dedication is a rare currency. We only accept the most committed seekers."</p>
            </div>
            
            <div className="md:col-span-3 bg-black/70 backdrop-blur-3xl p-14 border-t-8 border-gold shadow-[0_40px_80px_rgba(0,0,0,0.6)] rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-gold/30"></div>
              {isSubmitted ? (
                <div className="text-center py-24 animate-in fade-in zoom-in duration-700">
                   <div className="w-24 h-24 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-10 animate-pulse shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                   </div>
                   <h3 className="font-cinzel text-gold text-2xl font-bold uppercase tracking-widest">Enrollment Sealed</h3>
                   <p className="text-white/40 uppercase text-[10px] tracking-widest mt-4">The Council will evaluate your petition.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gold/70 uppercase tracking-[0.4em] ml-1">Identity Confirmation</label>
                    <input required placeholder="Legal Name on the Scrolls..." className="w-full bg-transparent border-b-2 border-white/10 py-5 outline-none font-lora italic text-xl text-white focus:border-gold transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gold/70 uppercase tracking-[0.4em] ml-1">Secure Mobile Line</label>
                    <input required type="tel" placeholder="+91 XXXX XXX XXX" className="w-full bg-transparent border-b-2 border-white/10 py-5 outline-none font-lora italic text-xl text-white focus:border-gold transition-colors" />
                  </div>
                  <button type="submit" className="w-full py-7 bg-gold text-black font-bold uppercase tracking-[0.6em] text-xs hover:bg-white transition-all shadow-2xl active:scale-95">Seal Petition</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-28 gap-14">
            <div className="text-center md:text-left">
              <span className="text-gold font-bold uppercase tracking-[1em] text-[12px] mb-5 block gold-glow">Physical Coordinates</span>
              <h2 className="font-cinzel text-6xl text-white font-bold tracking-tighter uppercase leading-none">The <span className="text-gold">Sovereign Matrix</span></h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-14">
              <div className="text-center md:text-right">
                <p className="font-lora italic text-white/50 text-xl max-w-sm leading-relaxed">{CONTACT_INFO.SANCTUARY.ADDRESS}</p>
              </div>
              <a 
                href={CONTACT_INFO.SANCTUARY.MAP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-16 py-7 bg-white/5 border-2 border-gold/40 text-gold font-bold uppercase tracking-[0.5em] text-xs hover:bg-gold hover:text-black transition-all shadow-[0_0_40px_rgba(212,175,55,0.1)]"
              >
                Engage GPS
              </a>
            </div>
          </div>
          
          <div className="relative h-[700px] bg-[#0c0c0c] rounded-2xl overflow-hidden border border-white/10 group shadow-[0_0_120px_rgba(212,175,55,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1500" 
              alt="Map" 
              className="w-full h-full object-cover opacity-25 grayscale brightness-75 group-hover:scale-105 transition-transform duration-[40s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black"></div>
            
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(212,175,55,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/30 rounded-full blur-3xl animate-pulse scale-[2.5]"></div>
                <div className="relative p-8 bg-black border-[3px] border-gold rounded-full shadow-[0_0_60px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="absolute left-28 top-0 bg-black/95 border-2 border-gold/50 p-8 backdrop-blur-3xl rounded-xl whitespace-nowrap shadow-[0_30px_70px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-left duration-1000 border-l-[6px]">
                  <p className="text-gold font-cinzel font-bold text-[13px] tracking-[0.4em] uppercase mb-3 gold-glow">Sanctuary Locked</p>
                  <p className="text-white font-lora italic text-2xl mb-3">Ethics Main Archive</p>
                  <div className="h-[2px] bg-white/10 mb-3 w-full"></div>
                  <p className="text-[11px] font-mono text-gold/60 tracking-wider">LAT: 25.6110° N <br/> LONG: 85.1444° E</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-scan-line shadow-[0_0_20px_rgba(212,175,55,0.8)] z-40"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;