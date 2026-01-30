
import React, { useState } from 'react';
import BookCard from '../components/BookCard.tsx';
import { MOCK_BOOKS } from '../constants.tsx';

const Archive: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Philosophy', 'Science', 'History', 'Art', 'Royal Collection'];
  const filteredBooks = filter === 'All' ? MOCK_BOOKS : MOCK_BOOKS.filter(b => b.category === filter);

  return (
    <div className="min-h-screen py-16 bg-[#000814]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-bold uppercase tracking-[0.4em] text-[9px] mb-2 text-gold">Collections</p>
          <h2 className="font-cinzel text-4xl font-bold uppercase text-white">The Archives</h2>
          <div className="w-16 h-[1px] mx-auto mt-4 bg-gold"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest border transition-all ${
                filter === cat 
                  ? 'bg-gold text-black border-gold' 
                  : 'text-gold border-gold/20 hover:bg-gold/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} theme={theme} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 opacity-40 italic text-white text-xs">
            "The chamber is being curated."
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
