
import React from 'react';
import { COPY } from '../constants';

const Testimonials: React.FC = () => {
  const principles = [
    {
      principle: COPY.laws[0],
      context: "The foundation of the TAISON engagement model."
    },
    {
      principle: COPY.laws[1],
      context: "Client experience is simplified through internal routing intelligence."
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">Proof Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => (
            <div key={idx} className="glass-card p-12 hover:border-primary-purple transition-all group">
              <p className="text-2xl font-medium text-white mb-10 leading-relaxed italic">
                "{p.principle}"
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-sm font-bold text-text-secondary uppercase tracking-widest">{p.context}</div>
                </div>
                <div className="text-[10px] tracking-widest uppercase font-bold text-primary-cyan border border-primary-cyan/30 px-3 py-1 rounded-sm">
                  Canon Law
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
