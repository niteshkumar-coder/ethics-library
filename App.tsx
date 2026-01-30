
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import AuthModal from './components/AuthModal.tsx';
import Home from './views/Home.tsx';
import Archive from './views/Archive.tsx';
import Reader from './views/Reader.tsx';
import RoyalSage from './views/RoyalSage.tsx';
import Vision from './views/Vision.tsx';
import { User } from './types.ts';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedUser = localStorage.getItem('eklavya_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedTheme = localStorage.getItem('eklavya_theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light'); // Default to light mode as requested
    }
  }, []);

  useEffect(() => {
    // Apply appropriate class to body for background gradients defined in index.html
    document.body.className = theme === 'dark' 
      ? 'antialiased sanctuary-bg-dark' 
      : 'antialiased sanctuary-bg-light';
  }, [theme]);

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
      <div className={`flex flex-col min-h-screen transition-all duration-700 ${
        theme === 'dark' ? 'text-white' : 'bg-white text-royal'
      }`}>
        <Header 
          user={user} 
          onAuthClick={() => setIsAuthModalOpen(true)} 
          onLogout={handleLogout}
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        
        <main className="flex-grow relative z-10">
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
