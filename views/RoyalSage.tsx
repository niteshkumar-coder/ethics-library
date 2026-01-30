
import React, { useState, useRef, useEffect } from 'react';
import { askRoyalSage } from '../geminiService';
import { ChatMessage } from '../types';

const RoyalSage: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'sage', text: 'Greetings, Esteemed Seeker of Excellence. I am the Royal Sage of Eklavya. What wisdom do you seek within these hallowed digital halls today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg, timestamp: new Date() }]);
    setIsLoading(true);

    const response = await askRoyalSage(userMsg);
    setMessages(prev => [...prev, { role: 'sage', text: response, timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <div className={`max-w-5xl mx-auto px-6 py-12 flex flex-col h-[85vh]`}>
      <div className="text-center mb-10">
        <p className={`font-bold uppercase tracking-[0.4em] text-[10px] mb-2 ${isDark ? 'text-gold' : 'text-maroon'}`}>Consult the Oracle</p>
        <h2 className={`font-cinzel text-3xl font-bold uppercase ${isDark ? 'text-white' : 'text-royal'}`}>THE ROYAL SAGE</h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-4"></div>
      </div>

      <div 
        ref={scrollRef}
        className={`flex-1 border p-8 overflow-y-auto space-y-8 mb-6 transition-all shadow-inner ${
          isDark ? 'bg-black/40 border-gold/20 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]' : 'bg-white border-gold/20'
        }`}
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-500`}>
            <div className={`max-w-[80%] p-6 shadow-lg relative ${
              m.role === 'user' 
                ? `${isDark ? 'bg-royal/80 text-gold border-gold/20' : 'bg-royal text-white border-gold/10'} rounded-l-2xl rounded-tr-2xl border` 
                : `${isDark ? 'bg-gold/10 text-white border-l-4 border-gold' : 'bg-cream text-royal border-l-4 border-gold'} rounded-r-2xl rounded-tl-2xl`
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[9px] font-bold uppercase tracking-widest ${m.role === 'user' ? 'text-gold' : 'text-maroon'}`}>
                  {m.role === 'user' ? 'The Seeker' : 'Royal Sage'}
                </span>
                <span className="text-[8px] opacity-40 font-mono">
                  {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="font-lora leading-relaxed italic text-sm md:text-base whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className={`p-6 border-l-4 border-gold animate-pulse ${isDark ? 'bg-white/5' : 'bg-cream'}`}>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-gold' : 'text-maroon'}`}>Consulting the Scrolls...</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative group">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Esteemed Seeker, present your inquiry..."
          className={`w-full p-6 font-lora text-lg outline-none transition-all duration-500 border pr-20 ${
            isDark ? 'bg-black border-gold/40 text-white focus:border-gold' : 'bg-white border-gold focus:border-royal text-royal'
          }`}
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 transition-all ${
            isDark ? 'bg-gold text-royal hover:bg-white' : 'bg-royal text-gold hover:bg-maroon'
          } disabled:opacity-50`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
      <p className="text-center mt-4 text-[9px] uppercase tracking-widest opacity-40">Consultation is privileged. The Sage responds to your dedication.</p>
    </div>
  );
};

export default RoyalSage;
