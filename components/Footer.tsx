
import React from 'react';
import { COPY } from '../constants';

const Footer: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('diagnostic-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 border-t border-border bg-background-dark">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold tracking-tighter mb-6">{COPY.hero.h1}</h2>
        <p className="text-xl text-text-secondary mb-12 max-w-2xl">
          Routing is internal complexity, never client burden. One brand. One Promise.
        </p>

        <button
          onClick={scrollToForm}
          className="bg-primary-cyan hover:bg-white text-black font-bold py-5 px-12 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-primary-cyan/20 mb-20"
        >
          {COPY.hero.ctaButton}
        </button>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-border/50 text-left">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Daijavu</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><span className="text-text-secondary/50">(Not Specified)</span></li>
              <li><span className="text-text-secondary/50">(Not Specified)</span></li>
              <li><span className="text-text-secondary/50">(Not Specified)</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Intelligence</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#latest" className="hover:text-primary-cyan">Articles</a></li>
              <li><span className="text-text-secondary/50">(Not Specified)</span></li>
              <li><a href="#diagnostic-form" className="hover:text-primary-cyan">Diagnostics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><span className="text-text-secondary/50">(Not Specified)</span></li>
              <li><span className="text-text-secondary/50">(Not Specified)</span></li>
              <li><span className="text-text-secondary/50">(Not Specified)</span></li>
            </ul>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="text-right">
              <p className="text-xs text-text-secondary">© 2026 Daijavu OS.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
