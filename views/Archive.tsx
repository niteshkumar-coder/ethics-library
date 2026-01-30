
import React, { useState } from 'react';
import BookCard from '../components/BookCard.tsx';
import { MOCK_BOOKS } from '../constants.tsx';

const Archive: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Philosophy', 'Science', 'History', 'Art', 'Royal Collection'];
  const filteredBooks = filter === 'All' ? MOCK_BOOKS : MOCK_BOOKS.filter(b => b.category === filter);

  return (
    <div className={`min-h-screen py-20 transition-colors duration-700 ${isDark ? 'bg-[#000814]' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className={`font-bold uppercase tracking-[0.4em] text-[10px] mb-4 ${isDark ? 'text-gold' : 'text-maroon'}`}>Elite Collections</p>
          <h2 className={`font-cinzel text-5xl font-bold uppercase transition-colors ${isDark ? 'text-white' : 'text-royal'}`}>The Archives</h2>
          <div className={`w-32 h-[1px] mx-auto mt-8 ${isDark ? 'bg-gold' : 'bg-maroon'}`}></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                filter === cat 
                  ? `${isDark ? 'bg-gold text-royal border-gold' : 'bg-royal text-gold border-royal'}` 
                  : `${isDark ? 'text-gold border-gold/30 hover:bg-gold/10' : 'text-royal border-royal/30 hover:bg-royal/5'}`
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} theme={theme} />
            ))}
          </div>
        ) : (
          <div className={`text-center py-20 opacity-40 italic ${isDark ? 'text-white' : 'text-royal'}`}>
            "The chamber is currently being curated. Please return at a later hour."
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
