import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Terminal, Shield, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenGetStarted: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenGetStarted }) => {
  return (
    <section className="relative w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] overflow-hidden border-t border-white/[0.08]">
      {/* Background Radial Glow & Precision Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(123,208,255,0.15)_0%,_transparent_75%)]" />
        <div className="absolute inset-0 blueprint-grid opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Overline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-[#15151b] border border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-pulse" />
          <span className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase">
            LIMITED COMMISSIONING ALLOCATION // 2026 COHORT
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase text-white font-extrabold tracking-tight leading-[1.0]"
        >
          Ready to work at the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e1e2e5] to-[#7bd0ff]">
            speed of thought?
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#c5c6ca] max-w-xl font-light leading-relaxed"
        >
          Turn ideas into action with NOVA. Connect your repositories, empower your team, and deploy with zero latency.
        </motion.p>

        {/* Action Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4"
        >
          <button
            onClick={onOpenGetStarted}
            className="px-9 py-4 sm:py-5 rounded-sm bg-white hover:bg-[#7bd0ff] text-[#0a0a0c] font-display text-sm sm:text-[15px] font-bold tracking-[0.16em] uppercase hover:shadow-[0_0_30px_rgba(123,208,255,0.45)] transition-all duration-300 flex items-center gap-3 cursor-pointer group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#pricing"
            className="px-9 py-4 sm:py-5 rounded-sm bg-[#16161b] hover:bg-[#202028] border border-white/10 text-white font-display text-sm sm:text-[15px] font-medium tracking-[0.16em] uppercase transition-all duration-300 flex items-center gap-2"
          >
            <span>View Pricing Plans</span>
          </a>
        </motion.div>

        {/* Telemetry specs footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-12 text-[#8f9194] font-mono-code text-[11px] tracking-widest uppercase flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-t border-white/[0.06] mt-6 w-full"
        >
          <span>ENCRYPTION: AES-256 GCM</span>
          <span className="text-white/20">•</span>
          <span>ZERO DATA RETENTION</span>
          <span className="text-white/20">•</span>
          <span>99.99% RUNTIME UPTIME</span>
          <span className="text-white/20">•</span>
          <span className="text-[#7bd0ff]">SOC2 TYPE II VERIFIED</span>
        </motion.div>
      </div>
    </section>
  );
};
