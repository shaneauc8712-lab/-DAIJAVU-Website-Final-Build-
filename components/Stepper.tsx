
import React from 'react';
import { TIMELINE, ASSETS } from '../constants';

const Stepper: React.FC = () => {
  return (
    <section id="timeline" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <img src={ASSETS.mascot} alt="Stamp" className="w-12 h-12 mb-6 opacity-30 grayscale hover:grayscale-0 transition-all" />
          <h2 className="text-4xl font-bold tracking-tight text-center">The Path to One brand.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:divide-x divide-border">
          {TIMELINE.map((step, idx) => (
            <div key={idx} className="flex-1 p-8 group">
              <div className="text-xs tracking-widest uppercase text-primary-purple mb-4 font-bold">
                {step.phase}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-cyan transition-colors">
                {step.definition}
              </h4>
              <div className="mt-6">
                <span className="text-[10px] tracking-widest uppercase bg-white/5 text-text-secondary px-3 py-1 border border-border rounded-sm group-hover:border-primary-cyan transition-colors">
                  Output: {step.output}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stepper;
