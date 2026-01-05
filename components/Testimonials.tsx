
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Daijavu removed the 'black box' of our delivery cycle. We now move with total clarity.",
      author: "COO, Fintech Growth",
      outcome: "2.4x Efficiency Gain"
    },
    {
      quote: "The only partner that actually mapped our internal decisions before trying to automate them.",
      author: "Director of Ops, SaaS Enterprise",
      outcome: "Zero Governance Debt"
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-12 hover:border-primary-purple transition-all group">
              <p className="text-2xl font-medium text-white mb-10 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-widest">{t.author}</div>
                </div>
                <div className="text-[10px] tracking-widest uppercase font-bold text-primary-cyan border border-primary-cyan/30 px-3 py-1 rounded-sm">
                  {t.outcome}
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
