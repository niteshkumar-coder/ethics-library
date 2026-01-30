import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './views/Home';
import Archive from './views/Archive';
import Reader from './views/Reader';
import RoyalSage from './views/RoyalSage';
import Vision from './views/Vision';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  // Defaulting to 'dark' mode as requested
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedUser = localStorage.getItem('eklavya_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedTheme = localStorage.getItem('eklavya_theme') as 'light' | 'dark';
    // If a theme was explicitly saved, use it, otherwise stay 'dark'
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    localStorage.setItem('eklavya_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('eklavya_user');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('eklavya_theme', newTheme);
  };

  return (
    <HashRouter>
      <div className={`flex flex-col min-h-screen transition-colors duration-700 ${
        theme === 'dark' ? 'bg-[#000814] text-white' : 'bg-[#F5F5DC] text-royal'
      }`}>
        <Header 
          user={user} 
          onAuthClick={() => setIsAuthModalOpen(true)} 
          onLogout={handleLogout}
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/archive" element={<Archive theme={theme} />} />
            <Route path="/read/:id" element={<Reader theme={theme} />} />
            <Route path="/sage" element={<RoyalSage theme={theme} />} />
            <Route path="/vision" element={<Vision theme={theme} />} />
          </Routes>
        </main>

        <Footer theme={theme} />

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
          onAuthSuccess={handleAuthSuccess}
          theme={theme}
        />
      </div>
    </HashRouter>
  );
};

export default App;