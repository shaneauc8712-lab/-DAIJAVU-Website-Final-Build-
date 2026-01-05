
import React, { useEffect, useState } from 'react';
import { COPY, ASSETS } from '../constants';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    mediaQuery.addEventListener('change', handleChange);
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  const scrollToForm = () => {
    document.getElementById('diagnostic-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row lg:items-center pt-20 lg:pt-20 overflow-hidden">
      {/* Mobile: Video Bleed Top Section */}
      <div className="lg:hidden relative w-full h-[50vh] overflow-hidden">
        <video
          src={ASSETS.heroAnimation}
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Mobile gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
      </div>

      {/* Desktop: Full-Bleed Background Video - Right Anchored */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <video
          src={ASSETS.heroAnimation}
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            objectPosition: 'right center',
            transform: prefersReducedMotion ? 'none' : `translateY(${scrollY * 0.3}px)`
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Gradient Overlay - Dark left to transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/95 to-background-dark/20"></div>

        {/* Subtle blur layer */}
        <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-background-dark/60 lg:via-transparent lg:to-transparent"></div>
      </div>

      {/* Decorative Glow */}
      <div className="hidden lg:block absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-cyan/3 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Content Container */}
      <div className="w-full px-6 lg:px-6 py-12 lg:py-0 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Tight Vertical Stack */}
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              {/* Mascot Stamp */}
              <div className="mb-6 flex items-center gap-3">
                <img src={ASSETS.mascot} alt="Mascot" className="w-10 h-10 rounded-full border border-primary-cyan p-0.5" />
                <span className="text-xs tracking-widest text-primary-cyan uppercase font-bold">Phase 0</span>
              </div>

              {/* H1 - Increased Dominance */}
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-10 leading-[0.85] text-white">
                {COPY.hero.h1}
              </h1>

              {/* Subhead */}
              <p className="text-xl md:text-2xl text-text-secondary max-w-lg mb-14 leading-relaxed font-light">
                {COPY.hero.subhead}
              </p>

              {/* Value Prop List */}
              <div className="mb-14 space-y-5">
                <p className="text-xs uppercase tracking-[0.25em] text-border font-extrabold mb-6">Immediate Outcomes</p>
                {COPY.valueProp.map((prop, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-sm text-text-secondary">
                      <span className="text-primary-cyan opacity-40 italic mr-2">Do: "{COPY.hero.ctaButton}"</span>
                      <span className="text-white font-semibold">Get: {prop.get}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA with Enhanced Hover */}
              <div className="flex flex-col gap-5 items-start">
                <button
                  onClick={scrollToForm}
                  className="group relative bg-primary-cyan hover:bg-white text-black font-extrabold py-6 px-14 rounded-none transition-all duration-500 transform hover:-translate-y-1 shadow-[0_0_40px_rgba(0,242,255,0.2)] hover:shadow-[0_0_60px_rgba(0,242,255,0.4)] uppercase tracking-[0.2em] overflow-hidden"
                >
                  <span className="relative z-10">{COPY.hero.ctaButton}</span>
                  {/* Enhanced border beam */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 border-2 border-primary-cyan animate-[pulse_2s_ease-in-out_infinite]"></div>
                  </div>
                </button>
                <div className="pl-1">
                  <p className="text-base text-white font-bold mb-1">
                    {COPY.hero.microClarity}
                  </p>
                  <span className="text-sm text-text-secondary block">
                    {COPY.hero.ctaHelper}
                  </span>
                </div>
              </div>

              {/* Scroll Indicator - Mobile Only */}
              <div className="lg:hidden mt-16 flex justify-center">
                <div className={`flex flex-col items-center gap-2 ${prefersReducedMotion ? '' : 'animate-bounce'}`}>
                  <span className="text-xs text-border uppercase tracking-widest">Scroll</span>
                  <svg className="w-5 h-5 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column - Scroll Indicator Desktop */}
            <div className="hidden lg:flex justify-center items-end h-full pb-20">
              <div className={`flex flex-col items-center gap-2 ${prefersReducedMotion ? '' : 'animate-bounce'}`}>
                <span className="text-xs text-border uppercase tracking-widest">Scroll</span>
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
