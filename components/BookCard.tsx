
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  theme: 'light' | 'dark';
}

const BookCard: React.FC<BookCardProps> = ({ book, theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className={`group relative p-4 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
      isDark ? 'bg-white/5 border-gold/20' : 'bg-white border-gold/20 shadow-sm'
    }`}>
      {book.isPremium && (
        <div className="absolute top-6 right-6 z-10 bg-gold text-royal text-[10px] px-2 py-1 font-bold uppercase tracking-tighter shadow-md">
          Elite
        </div>
      )}
      <div className="overflow-hidden aspect-[2/3] mb-4 bg-royal/5">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
        />
      </div>
      <div className="space-y-2">
        <p className="text-[10px] uppercase font-bold tracking-widest text-maroon">{book.category}</p>
        <h3 className={`font-playfair text-lg font-bold line-clamp-1 transition-colors ${isDark ? 'text-white' : 'text-royal'}`}>
          {book.title}
        </h3>
        <p className={`text-sm italic font-lora opacity-70 ${isDark ? 'text-white' : 'text-royal'}`}>
          By {book.author}
        </p>
        <p className={`text-xs line-clamp-2 mt-2 leading-relaxed opacity-60 ${isDark ? 'text-white' : 'text-royal'}`}>
          {book.description}
        </p>
        <div className="pt-4 flex items-center justify-between">
          <Link 
            to={`/read/${book.id}`}
            className={`text-[11px] font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${
              isDark ? 'text-gold border-gold/40 hover:border-gold' : 'text-royal border-royal/40 hover:border-royal'
            }`}
          >
            Enter Chamber
          </Link>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-[10px] ${i < Math.floor(book.rating) ? 'text-gold' : 'text-gray-300'}`}>
                ✦
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
