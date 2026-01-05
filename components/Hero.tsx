
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
      {/* FULL-BLEED VIDEO BANNER (TOP) - Edge to Edge */}
      <div
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
        style={{
          height: 'clamp(300px, 44vh, 420px)'
        }}
      >
        {/* Layer A: Blurred Cover Background (cinematic edges) */}
        <div className="absolute inset-0">
          <video
            src={ASSETS.heroAnimation}
            autoPlay={!prefersReducedMotion}
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover scale-110"
            style={{
              filter: 'blur(24px) brightness(0.6) saturate(1.1)'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Subtle radial gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-radial from-primary-purple/5 via-transparent to-transparent"></div>
        </div>

        {/* Layer B: Sharp Foreground Video (full ape visible) */}
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

        {/* Bottom Fade Gradient - 40% of banner height, fades to #050505 */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '40%',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(5, 5, 5, 0.4) 30%, rgba(5, 5, 5, 0.85) 70%, #050505 100%)'
          }}
        ></div>
      </div>

      {/* Desktop banner height override */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-banner {
            height: clamp(420px, 56vh, 620px) !important;
          }
        }
      `}</style>

      {/* TEXT CONTENT (BELOW) - Overlaps banner with negative margin */}
      <div
        className="relative bg-background-dark px-6 pb-20 lg:pb-24"
        style={{
          marginTop: '-80px'
        }}
      >
        {/* Desktop overlap override */}
        <style>{`
          @media (min-width: 1024px) {
            .hero-text-overlap {
              margin-top: -120px !important;
            }
          }
        `}</style>

        <div className="max-w-6xl mx-auto hero-text-overlap">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Phase Badge + Mascot */}
            <div className="mb-8 flex items-center gap-3 justify-center relative z-10">
              <img src={ASSETS.mascot} alt="KONG Mascot" className="w-10 h-10 rounded-full border-2 border-primary-cyan p-0.5 object-cover" />
              <span className="text-xs tracking-[0.3em] text-primary-cyan uppercase font-bold">Phase 0</span>
            </div>

            {/* H1 - Reduced Scale, Dominant but Not Oversized */}
            <h1
              className="font-extrabold tracking-tight mb-8 lg:mb-10 text-white mx-auto max-w-4xl relative z-10"
              style={{
                fontSize: 'clamp(38px, 8vw, 60px)',
                lineHeight: '0.95',
                letterSpacing: '-0.025em'
              }}
            >
              {COPY.hero.h1}
            </h1>

            {/* Desktop H1 override */}
            <style>{`
              @media (min-width: 1024px) {
                .hero-h1 {
                  font-size: clamp(44px, 5vw, 84px) !important;
                }
              }
            `}</style>

            {/* Subhead */}
            <p className="text-base lg:text-lg text-text-secondary mx-auto max-w-3xl mb-12 lg:mb-14 leading-relaxed font-light relative z-10">
              {COPY.hero.subhead}
            </p>

            {/* Value Prop List - Centered */}
            <div className="mb-14 space-y-4 max-w-2xl mx-auto relative z-10">
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
            <div className="flex flex-col gap-5 items-center relative z-10">
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
            <div className="mt-20 flex justify-center relative z-10">
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
