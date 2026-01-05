
import React from 'react';
import { OUTCOMES } from '../constants';

const OutcomesGrid: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 px-6 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OUTCOMES.map((outcome, idx) => (
            <div
              key={idx}
              className="glass-card p-10 group hover:shadow-2xl hover:shadow-primary-cyan/5 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex gap-2 mb-8">
                {outcome.icons.map((icon, i) => (
                  <img key={i} src={icon} alt="Icon" className="w-10 h-10 rounded-lg bg-background-mid border border-border group-hover:border-primary-cyan transition-colors" />
                ))}
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{outcome.title}</h3>
                <span className="text-[10px] tracking-widest uppercase border border-border px-2 py-1 rounded-full text-text-secondary group-hover:border-primary-cyan group-hover:text-primary-cyan transition-colors">
                  {outcome.tag}
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesGrid;
