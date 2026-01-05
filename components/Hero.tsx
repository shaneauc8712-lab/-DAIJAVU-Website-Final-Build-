
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

  // Nav height constant (matches Navigation component)
  const NAV_HEIGHT = 'var(--nav-height, 64px)';

  return (
    <section className="relative">
      {/* ZONE A: Full-Bleed Video Banner (Top) - Increased Height, Starts Below Nav */}
      <div
        className="relative w-full h-[40vh] lg:h-[48vh] min-h-[280px] max-h-[420px] lg:min-h-[360px] lg:max-h-[560px] overflow-hidden"
        style={{ paddingTop: NAV_HEIGHT }}
      >
        {/* Layer A: Backdrop - Blurred & Dimmed Cover Video */}
        <div className="absolute inset-0">
          <video
            src={ASSETS.heroAnimation}
            autoPlay={!prefersReducedMotion}
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover blur-xl opacity-30"
            style={{ objectPosition: 'center center' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Layer B: Foreground - Full Frame Contained Video */}
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

        {/* Top fade - subtle polish at edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.45) 0%, transparent 25%)'
          }}
        ></div>

        {/* Bottom fade gradient - explicit opacity for blend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 55%, rgba(5, 5, 5, 0.7) 100%)'
          }}
        ></div>
      </div>

      {/* ZONE B: Text Block (Below Video) */}
      <div className="relative bg-background-dark pt-12 lg:pt-16 pb-20 lg:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Mascot Stamp */}
            <div className="mb-6 lg:mb-8 flex items-center gap-3">
              <img src={ASSETS.mascot} alt="KONG Mascot" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-primary-cyan p-0.5 object-cover" />
              <span className="text-xs tracking-[0.3em] text-primary-cyan uppercase font-bold">Phase 0</span>
            </div>

            {/* H1 - Linear Scale with clamp */}
            <h1
              className="font-extrabold tracking-tight mb-8 lg:mb-10 text-white"
              style={{
                fontSize: 'clamp(44px, 6vw, 84px)',
                lineHeight: '0.98',
                letterSpacing: '-0.02em'
              }}
            >
              {COPY.hero.h1}
            </h1>

            {/* Subhead */}
            <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mb-12 lg:mb-14 leading-relaxed font-light">
              {COPY.hero.subhead}
            </p>

            {/* Value Prop List */}
            <div className="mb-12 lg:mb-14 space-y-4 lg:space-y-5 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-border font-extrabold mb-6">Immediate Outcomes</p>
              {COPY.valueProp.map((prop, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan group-hover:scale-150 transition-transform duration-300 mt-1.5 flex-shrink-0"></div>
                  <p className="text-sm lg:text-base text-text-secondary leading-relaxed">
                    <span className="text-primary-cyan/60 italic mr-2">Do: "{COPY.hero.ctaButton}"</span>
                    <span className="text-white font-semibold">Get: {prop.get}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col gap-5 items-start">
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

              <div className="pl-2">
                <p className="text-sm lg:text-base text-white font-bold mb-1.5">
                  {COPY.hero.microClarity}
                </p>
                <span className="text-xs lg:text-sm text-text-secondary block leading-relaxed">
                  {COPY.hero.ctaHelper}
                </span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 lg:mt-20 flex justify-center">
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
