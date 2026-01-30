
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
    <div className={`group relative p-3 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full bg-white/5 border-gold/20`}>
      {book.isPremium && (
        <div className="absolute top-4 right-4 z-10 bg-gold text-black text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-tighter">
          Elite
        </div>
      )}
      <div className="overflow-hidden aspect-[4/5] mb-3 bg-royal/5">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
        />
      </div>
      <div className="space-y-1 flex-grow">
        <p className="text-[8px] uppercase font-bold tracking-widest text-gold">{book.category}</p>
        <h3 className="font-playfair text-base font-bold line-clamp-1 text-white">
          {book.title}
        </h3>
        <p className="text-[11px] italic font-lora opacity-50 text-white">
          By {book.author}
        </p>
        <p className="text-[10px] line-clamp-3 mt-1.5 leading-snug opacity-60 font-lora text-white/80">
          {book.description}
        </p>
      </div>
      <div className="pt-4 flex items-center justify-between mt-auto">
        <Link 
          to={`/read/${book.id}`}
          className="text-[9px] font-bold uppercase tracking-[0.2em] border-b border-gold/40 hover:border-gold text-gold transition-all"
        >
          Enter
        </Link>
        <div className="flex space-x-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-[8px] ${i < Math.floor(book.rating) ? 'text-gold' : 'text-gray-600'}`}>
              ✦
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
