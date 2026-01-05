
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
    <section className="relative min-h-screen flex flex-col">
      {/* BANNER ZONE (TOP) - Full Bleed Edge-to-Edge */}
      <div
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
        style={{
          height: 'clamp(260px, 38vh, 420px)'
        }}
      >
        {/* Layer A: Backdrop - Blurred Cover (fills edges) */}
        <div className="absolute inset-0">
          <video
            src={ASSETS.heroAnimation}
            autoPlay={!prefersReducedMotion}
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover scale-105"
            style={{
              filter: 'blur(20px) brightness(0.65) saturate(1.05)'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Layer B: Foreground - Full Ape Visible (contained) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            src={ASSETS.heroAnimation}
            autoPlay={!prefersReducedMotion}
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Bottom fade gradient - blend into text zone */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 5, 5, 0) 0%, rgba(5, 5, 5, 0.35) 55%, rgba(5, 5, 5, 1) 100%)',
            height: '110px',
            bottom: 0,
            top: 'auto'
          }}
        ></div>
      </div>

      {/* Desktop banner height override */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-banner {
            height: clamp(360px, 46vh, 520px) !important;
          }
          .hero-fade {
            height: 140px !important;
          }
        }
      `}</style>

      {/* TEXT ZONE (BOTTOM) - Centered, Longer */}
      <div className="relative flex-1 bg-background-dark flex items-center justify-center py-16 lg:py-20 px-6">
        <div className="w-full max-w-5xl mx-auto">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Phase Badge + Mascot */}
            <div className="mb-8 flex items-center gap-3 justify-center">
              <img src={ASSETS.mascot} alt="KONG Mascot" className="w-10 h-10 rounded-full border-2 border-primary-cyan p-0.5 object-cover" />
              <span className="text-xs tracking-[0.3em] text-primary-cyan uppercase font-bold">Phase 0</span>
            </div>

            {/* H1 - Reduced Scale */}
            <h1
              className="font-extrabold tracking-tight mb-8 text-white mx-auto max-w-4xl"
              style={{
                fontSize: 'clamp(44px, 5.4vw, 72px)',
                lineHeight: '1.05',
                letterSpacing: '-0.025em'
              }}
            >
              {COPY.hero.h1}
            </h1>

            {/* Subhead - Reduced Scale */}
            <p
              className="text-text-secondary mx-auto max-w-3xl mb-12 leading-relaxed font-light"
              style={{
                fontSize: 'clamp(14px, 1.35vw, 18px)'
              }}
            >
              {COPY.hero.subhead}
            </p>

            {/* Value Prop List - Centered */}
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

            {/* Primary CTA - Centered */}
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

              <div className="text-center">
                <p className="text-sm text-white font-bold mb-1.5">
                  {COPY.hero.microClarity}
                </p>
                <span className="text-xs text-text-secondary block leading-relaxed">
                  {COPY.hero.ctaHelper}
                </span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 flex justify-center">
              <div className={`flex flex-col items-center gap-2.5 ${prefersReducedMotion ? '' : 'animate-bounce'}`}>
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
