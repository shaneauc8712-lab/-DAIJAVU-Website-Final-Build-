
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
      {/* HERO_BANNER: Full-Bleed Video Region */}
      <div
        className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden h-[44vh] min-h-[320px] max-h-[460px] lg:h-[62vh] lg:min-h-[520px] lg:max-h-[680px]"
      >
        {/* Video Layer */}
        <video
          src={ASSETS.heroAnimation}
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center 30%'
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Top Scrim - Nav Readability */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.65) 0%, rgba(5, 5, 5, 0) 35%)'
          }}
        ></div>

        {/* Bottom Fade - Blends to Dark Page */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 5, 5, 0) 40%, rgba(5, 5, 5, 0.65) 70%, rgba(5, 5, 5, 1) 100%)'
          }}
        ></div>
      </div>

      {/* HERO_COPY: Centered Text Region Below Banner */}
      <div className="relative bg-background-dark py-12 lg:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Phase Badge */}
            <div className="mb-6 lg:mb-8 flex items-center gap-2.5 justify-center">
              <img src={ASSETS.mascot} alt="KONG Mascot" className="w-9 h-9 rounded-full border-2 border-primary-cyan/80 p-0.5 object-cover" />
              <span className="text-[10px] tracking-[0.35em] text-primary-cyan uppercase font-bold">Phase 0</span>
            </div>

            {/* H1 - Reduced Scale */}
            <h1
              className="font-extrabold tracking-tight mb-8 lg:mb-10 text-white mx-auto max-w-4xl"
              style={{
                fontSize: 'clamp(36px, 8vw, 44px)',
                lineHeight: '0.98',
                letterSpacing: '-0.025em'
              }}
            >
              {COPY.hero.h1}
            </h1>

            {/* Desktop H1 override */}
            <style>{`
              @media (min-width: 1024px) {
                h1 {
                  font-size: clamp(44px, 4.2vw, 64px) !important;
                }
              }
            `}</style>

            {/* Subhead */}
            <p className="text-base lg:text-lg text-text-secondary mx-auto max-w-3xl mb-12 lg:mb-14 leading-relaxed font-light">
              {COPY.hero.subhead}
            </p>

            {/* Value Prop List */}
            <div className="mb-14 space-y-4 max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.3em] text-border font-extrabold mb-6">Immediate Outcomes</p>
              {COPY.valueProp.map((prop, i) => (
                <div key={i} className="flex items-start gap-4 group text-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan group-hover:scale-150 transition-transform duration-300 mt-1.5 flex-shrink-0"></div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <span className="text-primary-cyan/60 italic mr-2">Do: "{COPY.hero.ctaButton}"</span>
                    <span className="text-white font-semibold">Get: {prop.get}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col gap-5 items-center">
              <button
                onClick={scrollToForm}
                className="group relative bg-primary-cyan hover:bg-white text-black font-extrabold py-5 lg:py-6 px-12 lg:px-16 rounded-none transition-all duration-500 transform hover:-translate-y-1 shadow-[0_0_50px_rgba(0,242,255,0.25)] hover:shadow-[0_0_80px_rgba(0,242,255,0.5)] uppercase tracking-[0.25em] text-sm overflow-hidden"
              >
                <span className="relative z-10">{COPY.hero.ctaButton}</span>
                {/* Border beam hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 border-2 border-primary-cyan/50 animate-[pulse_2s_ease-in-out_infinite]"></div>
                </div>
              </button>

              <div className="text-center max-w-md">
                <p className="text-sm text-white font-bold mb-1.5">
                  {COPY.hero.microClarity}
                </p>
                <span className="text-xs text-text-secondary block leading-relaxed">
                  {COPY.hero.ctaHelper}
                </span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 lg:mt-20 flex justify-center">
              <div className={`flex flex-col items-center gap-2.5 ${prefersReducedMotion ? '' : 'animate-bounce'}`}>
                <span className="text-[10px] text-border uppercase tracking-[0.35em]">Scroll</span>
                <svg className="w-4 h-4 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
