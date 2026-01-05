
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OutcomesGrid from './components/OutcomesGrid';
import VisualStrip from './components/VisualStrip';
import Stepper from './components/Stepper';
import Testimonials from './components/Testimonials';
import DiagnosticForm from './components/DiagnosticForm';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import KongWidget from './components/KongWidget';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="bg-gradient-animate"></div>
      
      <Navigation />
      
      <main>
        {/* 2) Hero */}
        <div className="scroll-reveal">
          <Hero />
        </div>

        {/* 3) Outcomes Grid */}
        <div className="scroll-reveal">
          <OutcomesGrid />
        </div>

        {/* 4) Wide Visual Strip */}
        <div className="scroll-reveal">
          <VisualStrip />
        </div>

        {/* 5) Timeline/Stepper */}
        <div className="scroll-reveal">
          <Stepper />
        </div>

        {/* 6) Testimonials */}
        <div className="scroll-reveal">
          <Testimonials />
        </div>

        {/* 7) Systems Diagnostic Form */}
        <div className="scroll-reveal">
          <DiagnosticForm />
        </div>

        {/* 8) Latest Articles/Blogs */}
        <div className="scroll-reveal">
          <BlogSection />
        </div>
      </main>

      {/* 9) Footer */}
      <Footer />

      {/* Engine Component 2: KONG */}
      <KongWidget />
    </div>
  );
};

export default App;
