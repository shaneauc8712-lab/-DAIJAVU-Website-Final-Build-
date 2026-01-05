
import React, { useState } from 'react';
import { COPY } from '../constants';

/**
 * CLICKUP MAPPING (ENGINE DOCUMENTATION):
 * Company Name → 💎 Company Name (ID: 439f0fa4-01d5-402d-acd9-e701194351dd)
 * Email → 💎 Primary Email (ID: 235aafd6-d2ce-45ee-a946-5bccf8af9bf0)
 * Phone → 💎 Primary Phone (ID: 37745353-a9be-4cd0-9a78-b06c568e7ae6)
 * Website → 💎 Website (ID: 002e28a3-3c28-488b-b9e7-fa6ee8894c6f)
 * Role → 💎 Role / Job Title (ID: bd56cd33-4692-4580-b60a-2bca3cdddeca)
 * Timeline → 💎 Timeline (ID: dcee2ecc-dd08-4561-9ad3-323f8a8b6d31)
 * Win in 90 days → 💎 Need Summary (ID: bf716ee4-b92c-4f04-893a-9558574a4d36)
 * Recommended Path (computed later) → 💎 Recommended Path (ID: c2af4251-b126-42be-aa8b-fe7f5d65dc53)
 * Source → 💎 Source (ID: 0538288e-62cb-4339-85c1-baeb0aa3878f)
 * 
 * Primary goal storage default:
 * Store as ⭐ Work Category (ID: fe7e4621-a4eb-48f3-9038-b327b516d78b)
 */

declare global {
  interface Window {
    DAIJAVU_DIAGNOSTIC_ENDPOINT: string;
  }
}

const DiagnosticForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    goal: '',
    timeline: '',
    winSummary: '',
    role: '',
    website: '',
    phone: '',
    source: 'daijavu_home_form'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const endpoint = window.DAIJAVU_DIAGNOSTIC_ENDPOINT || null;

    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      setStatus('success');
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <section id="diagnostic-form" className="py-32 px-6 bg-background-mid">
        <div className="max-w-3xl mx-auto glass-card p-16 text-center border-primary-cyan/50 shadow-[0_0_100px_rgba(0,242,255,0.05)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary-cyan"></div>
          <div className="text-primary-cyan text-7xl mb-8">✅</div>
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Received.</h2>
          <p className="text-text-secondary text-xl font-light">
            You’ll get the recommended next step by email.
          </p>
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-xs text-border uppercase tracking-widest">Phase 0</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostic-form" className="py-32 px-6 bg-background-mid relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary-purple/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-6xl font-black tracking-tighter mb-10 leading-[0.9] text-white">
            {COPY.frictionKiller.headline}
          </h2>
          <div className="space-y-8 mb-12">
            {COPY.frictionKiller.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
                <div>
                  <p className="text-xl text-white font-medium group-hover:text-primary-cyan transition-colors">
                    {bullet}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 border-l-4 border-primary-purple">
            <h4 className="text-xs uppercase tracking-widest font-black text-white mb-6">Operating Laws</h4>
            <div className="space-y-5">
              {COPY.laws.map((law, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary-purple font-mono text-xs">[{i + 1}]</span>
                  <p className="text-sm text-text-secondary leading-relaxed italic">
                    {law}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-12 border-border/40 relative">
          <div className="absolute top-0 right-12 w-24 h-px bg-gradient-to-r from-transparent to-primary-cyan"></div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-black">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background-dark border-b border-border p-4 focus:border-primary-cyan focus:outline-none text-white transition-all hover:bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-black">Primary Email *</label>
                <input
                  required
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background-dark border-b border-border p-4 focus:border-primary-cyan focus:outline-none text-white transition-all hover:bg-white/5"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-black">Company Name *</label>
              <input
                required
                type="text"
                placeholder="Enterprise Inc."
                value={formData.companyName}
                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-background-dark border-b border-border p-4 focus:border-primary-cyan focus:outline-none text-white transition-all hover:bg-white/5"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-black">Primary Goal *</label>
                <select
                  required
                  value={formData.goal}
                  onChange={e => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-background-dark border-b border-border p-4 focus:border-primary-cyan focus:outline-none text-white transition-all appearance-none cursor-pointer hover:bg-white/5"
                >
                  <option value="" disabled className="text-border">Select Category</option>
                  <option value="Build">Build</option>
                  <option value="Fix">Fix</option>
                  <option value="Scale">Scale</option>
                  <option value="Unclear">Unclear</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-black">Timeline *</label>
                <select
                  required
                  value={formData.timeline}
                  onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-background-dark border-b border-border p-4 focus:border-primary-cyan focus:outline-none text-white transition-all appearance-none cursor-pointer hover:bg-white/5"
                >
                  <option value="" disabled className="text-border">Select Timeline</option>
                  <option value="ASAP">As soon as possible</option>
                  <option value="30days">Within 30 days</option>
                  <option value="90days">Within 90 days</option>
                  <option value="Exploring">Just exploring</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-black">What would make this a win in 90 days? *</label>
              <textarea
                required
                rows={2}
                value={formData.winSummary}
                onChange={e => setFormData({ ...formData, winSummary: e.target.value })}
                className="w-full bg-background-dark border-b border-border p-4 focus:border-primary-cyan focus:outline-none text-white transition-all resize-none hover:bg-white/5"
                placeholder="Briefly describe your desired outcome..."
              />
            </div>

            {/* Optional Fields (Faded) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40 hover:opacity-100 transition-opacity pt-4 border-t border-border/20">
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-widest text-text-secondary">Role</label>
                <input type="text" onChange={e => setFormData({ ...formData, role: e.target.value })} className="w-full bg-transparent border-b border-border/50 p-2 text-xs focus:border-primary-purple outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-widest text-text-secondary">Website</label>
                <input type="text" onChange={e => setFormData({ ...formData, website: e.target.value })} className="w-full bg-transparent border-b border-border/50 p-2 text-xs focus:border-primary-purple outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-widest text-text-secondary">Phone</label>
                <input type="text" onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-transparent border-b border-border/50 p-2 text-xs focus:border-primary-purple outline-none" />
              </div>
            </div>

            <div className="pt-6">
              <button
                disabled={status === 'loading'}
                className="w-full bg-primary-cyan hover:bg-white text-black font-black py-6 transition-all duration-500 transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,242,255,0.1)] flex items-center justify-center gap-4 uppercase tracking-widest"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : COPY.hero.ctaButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticForm;
