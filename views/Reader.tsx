
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_BOOKS } from '../constants';
import { Book } from '../types';

const Reader: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const found = MOCK_BOOKS.find(b => b.id === id);
    if (found) setBook(found);
  }, [id]);

  if (!book) return <div className="h-screen flex items-center justify-center font-cinzel text-gold">Locating Archives...</div>;

  const contentBg = isFocused 
    ? (isDark ? 'bg-black' : 'bg-[#fffef0]') 
    : (isDark ? 'bg-[#000814]' : 'bg-cream');

  return (
    <div className={`min-h-screen py-20 transition-all duration-1000 ${contentBg}`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className={`flex justify-between items-center mb-16 border-b pb-6 ${isDark ? 'border-gold/20' : 'border-royal/10'}`}>
          <div className="flex items-center space-x-4">
            <Link to="/archive" className={`hover:text-gold transition-colors ${isDark ? 'text-white/40' : 'text-royal/40'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </Link>
            <h1 className={`font-playfair text-xl font-bold italic ${isDark ? 'text-white' : 'text-royal'}`}>{book.title}</h1>
          </div>
          <button 
            onClick={() => setIsFocused(!isFocused)}
            className={`text-[9px] font-bold uppercase tracking-widest px-4 py-2 border transition-all ${
              isFocused ? 'bg-gold text-royal border-gold' : `${isDark ? 'text-gold border-gold/50' : 'text-royal border-royal/30'}`
            }`}
          >
            {isFocused ? 'Distraction Off' : 'Focus Mode'}
          </button>
        </div>

        <article className={`prose prose-lg max-w-none font-lora leading-relaxed ${isDark ? 'text-white/80' : 'text-royal/90'}`}>
          <p className="first-letter:text-6xl first-letter:font-cinzel first-letter:float-left first-letter:mr-4 first-letter:text-gold mb-8">
            The journey toward ethical mastery begins with the quiet recognition of one's own character. In the hallowed history of our dedication, we find that the most profound wisdom is often gathered in moments of profound self-reflection, far from the bustling noise of the unexamined life.
          </p>
          
          <h2 className={`font-cinzel text-2xl font-bold mt-12 mb-6 ${isDark ? 'text-gold' : 'text-maroon'}`}>I. The Sanctuary of Integrity</h2>
          <p className="mb-8">
            A virtuous scholar does not merely accumulate facts; they construct a mental landscape where ethics is the foundation of every inquiry. Integrity is absolute. In our modern digital sanctuary, we replicate this through "Ethical Inquiry" — a methodology that emphasizes moral depth over mere information breadth.
          </p>
          
          <blockquote className={`border-l-4 border-gold pl-8 italic my-12 text-2xl font-playfair opacity-70 ${isDark ? 'text-white' : 'text-royal'}`}>
            "Knowledge without character is a dangerous weapon. The library that provides only data provides nothing. The library that provides a moral compass provides everything."
          </blockquote>

          <h2 className={`font-cinzel text-2xl font-bold mt-12 mb-6 ${isDark ? 'text-gold' : 'text-maroon'}`}>II. The Balance of Wisdom</h2>
          <p className="mb-8">
            True wisdom is found in the balance between intellect and empathy. Our "Royal Sage" AI exists to help you calibrate your moral compass, ensuring that every session spent within these walls brings you closer to intellectual sovereignty and ethical clarity.
          </p>
        </article>

        <div className={`mt-24 pt-10 border-t text-center ${isDark ? 'border-white/10' : 'border-royal/10'}`}>
          <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Archive Session Progress</p>
          <button className="px-12 py-4 bg-gold text-royal font-bold uppercase tracking-[0.3em] hover:bg-white hover:shadow-2xl transition-all border border-gold/50">
            Complete Meditation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reader;
