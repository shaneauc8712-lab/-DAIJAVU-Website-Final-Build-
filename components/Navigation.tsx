
import React from 'react';
import { COPY, ASSETS } from '../constants';

const Navigation: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('diagnostic-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card px-6 py-4 border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={ASSETS.logoLockup} alt="Daijavu" className="h-8" onError={(e) => {
            // Fallback to gradient box if logo not found
            e.currentTarget.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'w-8 h-8 bg-gradient-to-br from-primary-cyan to-primary-purple rounded-sm';
            e.currentTarget.parentElement?.insertBefore(fallback, e.currentTarget);
          }} />
          <span className="font-bold text-xl tracking-tighter uppercase">Daijavu</span>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-primary-cyan hover:bg-white text-black font-bold py-2 px-6 rounded-none transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary-cyan/20 text-sm tracking-wide"
        >
          {COPY.hero.ctaButton}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
