
import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants';

declare global {
  interface Window {
    KONG_WIDGET?: {
      agentId?: string;
      theme?: any;
      privacyMode?: boolean;
    };
  }
}

const KongWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    // Check if KONG widget is configured
    const configured = !!(window.KONG_WIDGET?.agentId);
    setIsConfigured(configured);

    if (configured) {
      // Load ElevenLabs Convai Widget Script only if configured
      const scriptId = 'elevenlabs-convai-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://elevenlabs.io/convai-widget/index.js';
        script.async = true;
        script.type = 'text/javascript';
        document.head.appendChild(script);
      }
    }
  }, []);

  const scrollToForm = () => {
    setIsOpen(false);
    const form = document.getElementById('diagnostic-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* KONG Launcher Button (Bottom-Right) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-background-mid border border-border rounded-full flex items-center justify-center shadow-2xl hover:border-primary-cyan transition-all group z-50 overflow-hidden"
        aria-label="Ask KONG"
      >
        <div className="absolute inset-0 bg-primary-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img
          src={ASSETS.mascot}
          alt="KONG Mascot"
          className="w-10 h-10 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-cyan rounded-full animate-ping opacity-75"></div>
      </button>

      {/* KONG Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="glass-card w-full max-w-md p-0 relative animate-in fade-in zoom-in duration-300 overflow-hidden border-primary-cyan/30 shadow-[0_0_100px_rgba(0,242,255,0.1)]">
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between bg-background-mid/50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={ASSETS.mascot} alt="KONG" className="w-12 h-12 rounded-full border border-primary-cyan p-0.5" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background-dark rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white tracking-tight">KONG Assistant</h3>
                  <p className="text-[10px] uppercase tracking-widest text-primary-cyan font-black">Unified TAISON Engine</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-10 bg-background-dark flex flex-col items-center">
              {isConfigured ? (
                <>
                  <div className="w-full mb-10 text-center">
                    <p className="text-text-secondary text-sm leading-relaxed mb-8 italic">
                      "I am KONG. I route you through the TAISON machinery. During diagnosis, privacy is absolute. I will not request identity data until you commit to the system map."
                    </p>

                    {/* The ElevenLabs Convai Web Component */}
                    <div className="flex justify-center py-6 bg-white/5 rounded-2xl border border-border/50">
                      {/* @ts-ignore - Bypass type check for ElevenLabs custom element */}
                      <elevenlabs-convai agent-id={window.KONG_WIDGET?.agentId}></elevenlabs-convai>
                    </div>
                  </div>

                  {/* Funnel Section */}
                  <div className="w-full space-y-6 pt-8 border-t border-border">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-border uppercase tracking-[0.2em] font-black">
                        Privacy: Anonymized Session
                      </p>
                      <span className="w-2 h-2 rounded-full bg-primary-purple animate-pulse"></span>
                    </div>

                    <button
                      onClick={scrollToForm}
                      className="w-full bg-primary-cyan hover:bg-white text-black font-black py-5 transition-all duration-500 uppercase tracking-widest text-xs shadow-xl shadow-primary-cyan/10 hover:-translate-y-1"
                    >
                      Start Systems Diagnostic
                    </button>

                    <p className="text-[9px] text-center text-text-secondary opacity-60">
                      Submit context → we return the recommended path.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Widget Not Connected Placeholder */}
                  <div className="w-full text-center py-12">
                    <div className="text-6xl mb-6 opacity-20">🔌</div>
                    <h4 className="text-xl font-bold text-white mb-4">Widget Not Connected Yet</h4>
                    <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                      The KONG conversational interface requires configuration. For now, please use the Systems Diagnostic form.
                    </p>

                    <button
                      onClick={scrollToForm}
                      className="w-full bg-primary-cyan hover:bg-white text-black font-black py-5 transition-all duration-500 uppercase tracking-widest text-xs shadow-xl shadow-primary-cyan/10 hover:-translate-y-1"
                    >
                      Start Systems Diagnostic
                    </button>

                    <p className="text-[9px] text-center text-text-secondary opacity-60 mt-4">
                      Submit context → we return the recommended path.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KongWidget;
