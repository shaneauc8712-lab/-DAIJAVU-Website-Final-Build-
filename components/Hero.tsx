
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
    <section className="relative">
      {/* ZONE A: Full-Bleed Video Banner (Top) */}
      <div className="relative w-full h-[50vh] lg:h-[55vh] overflow-hidden">
        <video
          src={ASSETS.heroAnimation}
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Bottom fade gradient for visual blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark"></div>
      </div>

      {/* ZONE B: Text Block (Below Video) */}
      <div className="relative bg-background-dark pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Mascot Stamp */}
            <div className="mb-8 flex items-center gap-3">
              <img src={ASSETS.mascot} alt="Mascot" className="w-12 h-12 rounded-full border-2 border-primary-cyan p-0.5" />
              <span className="text-xs tracking-[0.3em] text-primary-cyan uppercase font-bold">Phase 0</span>
            </div>

            {/* H1 - Maximum Dominance */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-12 leading-[0.85] text-white">
              {COPY.hero.h1}
            </h1>

            {/* Subhead */}
            <p className="text-2xl md:text-3xl text-text-secondary max-w-3xl mb-16 leading-relaxed font-light">
              {COPY.hero.subhead}
            </p>

            {/* Value Prop List */}
            <div className="mb-16 space-y-6 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-border font-extrabold mb-8">Immediate Outcomes</p>
              {COPY.valueProp.map((prop, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-2 h-2 rounded-full bg-primary-cyan group-hover:scale-150 transition-transform duration-300 mt-1.5 flex-shrink-0"></div>
                  <p className="text-base text-text-secondary leading-relaxed">
                    <span className="text-primary-cyan/60 italic mr-2">Do: "{COPY.hero.ctaButton}"</span>
                    <span className="text-white font-semibold">Get: {prop.get}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col gap-6 items-start">
              <button
                onClick={scrollToForm}
                className="group relative bg-primary-cyan hover:bg-white text-black font-extrabold py-6 px-16 rounded-none transition-all duration-500 transform hover:-translate-y-1 shadow-[0_0_50px_rgba(0,242,255,0.25)] hover:shadow-[0_0_80px_rgba(0,242,255,0.5)] uppercase tracking-[0.25em] text-sm overflow-hidden"
              >
                <span className="relative z-10">{COPY.hero.ctaButton}</span>
                {/* Border beam hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 border-2 border-primary-cyan/50 animate-[pulse_2s_ease-in-out_infinite]"></div>
                </div>
              </button>

              <div className="pl-2">
                <p className="text-base text-white font-bold mb-2">
                  {COPY.hero.microClarity}
                </p>
                <span className="text-sm text-text-secondary block leading-relaxed">
                  {COPY.hero.ctaHelper}
                </span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 flex justify-center">
              <div className={`flex flex-col items-center gap-3 ${prefersReducedMotion ? '' : 'animate-bounce'}`}>
                <span className="text-xs text-border uppercase tracking-[0.3em]">Scroll</span>
                <svg className="w-5 h-5 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
