
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

  useEffect(() => {
    const savedUser = localStorage.getItem('eklavya_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    localStorage.setItem('eklavya_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('eklavya_user');
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen transition-all duration-700 bg-black text-white selection:bg-gold/30">
        <Header 
          user={user} 
          onAuthClick={() => setIsAuthModalOpen(true)} 
          onLogout={handleLogout}
        />
        
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home theme="dark" />} />
            <Route path="/archive" element={<Archive theme="dark" />} />
            <Route path="/read/:id" element={<Reader theme="dark" />} />
            <Route path="/sage" element={<RoyalSage theme="dark" />} />
            <Route path="/vision" element={<Vision theme="dark" />} />
          </Routes>
        </main>

        <Footer theme="dark" />

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
          onAuthSuccess={handleAuthSuccess}
          theme="dark"
        />
      </div>
    </HashRouter>
  );
};

export default App;
