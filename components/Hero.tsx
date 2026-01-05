
import React, { useEffect, useState } from 'react';
import { COPY, ASSETS } from '../constants';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    document.getElementById('diagnostic-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-purple/5 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        {/* Left Content */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="mb-6 flex items-center gap-3">
            <img src={ASSETS.mascot} alt="Mascot" className="w-10 h-10 rounded-full border border-primary-cyan p-0.5" />
            <span className="text-xs tracking-widest text-primary-cyan uppercase font-bold">Taison Protocol</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white">
            {COPY.hero.h1}
          </h1>

          <p className="text-xl text-text-secondary max-w-lg mb-12 leading-relaxed font-light">
            {COPY.hero.subhead}
          </p>

          {/* Value Prop List (Do X -> Get Y) */}
          <div className="mb-12 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-border font-bold mb-4">Immediate Outcomes</p>
            {COPY.valueProp.map((prop, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan group-hover:scale-150 transition-transform"></div>
                <p className="text-sm text-text-secondary">
                  <span className="text-primary-cyan opacity-40 italic mr-2">Do: "{COPY.hero.ctaButton}"</span>
                  <span className="text-white font-medium">Get: {prop.get}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 items-start">
            <button
              onClick={scrollToForm}
              className="bg-primary-cyan hover:bg-white text-black font-extrabold py-5 px-12 rounded-none transition-all duration-500 transform hover:-translate-y-1 shadow-[0_0_40px_rgba(0,242,255,0.15)] border-beam uppercase tracking-widest"
            >
              {COPY.hero.ctaButton}
            </button>
            <div className="pl-1">
              <p className="text-sm text-white font-bold">
                {COPY.hero.microClarity}
              </p>
              <span className="text-xs text-text-secondary mt-1 block">
                {COPY.hero.ctaHelper}
              </span>
            </div>
          </div>
        </div>

        {/* Right Animation */}
        <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative w-full aspect-square max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-primary-cyan/5 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
            <div className="glass-card w-full h-full rounded-2xl flex items-center justify-center border border-border/30 overflow-hidden shadow-[0_0_80px_rgba(188,19,254,0.05)]">
              <div className="w-full h-full bg-gradient-to-tr from-background-mid to-black p-1 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Core Animation Placeholder */}
                <video
                  src={ASSETS.heroAnimation}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-50"
                  onError={(e) => {
                    // Fallback if video not found
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Fallback visual if video fails */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 border-[0.5px] border-primary-cyan/40 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center p-4">
                      <div className="w-full h-full border border-primary-purple/40 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-[10px] tracking-[0.3em] uppercase text-primary-cyan font-bold mb-2">Animation Placeholder</div>
                      <div className="text-2xl font-black text-white tracking-tighter">TAISON</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
