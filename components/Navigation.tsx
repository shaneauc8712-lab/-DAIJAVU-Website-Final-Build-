
import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('diagnostic-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-background-dark/95 backdrop-blur-xl border-b border-border/30 py-3'
        : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={ASSETS.logoLockup}
            alt="Daijavu"
            className="h-7 lg:h-8 object-contain"
          />
        </div>
        <button
          onClick={scrollToForm}
          className="bg-primary-cyan hover:bg-white text-black font-bold py-2.5 px-8 rounded-none transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider text-sm"
        >
          Start Diagnostic
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
