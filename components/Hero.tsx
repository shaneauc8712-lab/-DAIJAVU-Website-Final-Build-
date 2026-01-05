
import React, { useEffect, useState } from 'react';
import { COPY, ASSETS } from '../constants';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const scrollToForm = () => {
    document.getElementById('diagnostic-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Full-Bleed Hero Video Background - Right Anchored */}
      <div className="absolute inset-0 z-0">
        <video
          src={ASSETS.heroAnimation}
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right center' }}
          onError={(e) => {
            // Fallback if video not found - hide video element
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Gradient Overlay - Dark left to transparent right for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/95 to-background-dark/20"></div>

        {/* Subtle blur layer for additional text separation */}
        <div className="absolute inset-0 backdrop-blur-[2px] lg:backdrop-blur-0 lg:bg-gradient-to-r lg:from-background-dark/60 lg:via-transparent lg:to-transparent"></div>
      </div>

      {/* Decorative Glow (subtle) */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-cyan/3 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Tight Vertical Stack */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            {/* Mascot Stamp */}
            <div className="mb-6 flex items-center gap-3">
              <img src={ASSETS.mascot} alt="Mascot" className="w-10 h-10 rounded-full border border-primary-cyan p-0.5" />
              <span className="text-xs tracking-widest text-primary-cyan uppercase font-bold">Phase 0</span>
            </div>

            {/* H1 */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white">
              {COPY.hero.h1}
            </h1>

            {/* Subhead */}
            <p className="text-xl text-text-secondary max-w-lg mb-12 leading-relaxed font-light">
              {COPY.hero.subhead}
            </p>

            {/* Value Prop List */}
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

            {/* CTA */}
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

          {/* Right Column - Empty on desktop (video fills background) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
