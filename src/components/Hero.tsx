import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Terminal, Sparkles, Zap, Shield, Cpu, Activity } from 'lucide-react';
import { ProductMockup } from './ProductMockup';

interface HeroProps {
  onOpenGetStarted: () => void;
  onOpenVideoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGetStarted, onOpenVideoModal }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[95vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden select-none bg-[#0a0a0c]"
    >
      {/* Background Architectural Blueprint Grid & Radial Sheen */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial center glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-[radial-gradient(ellipse_at_top,_rgba(123,208,255,0.18)_0%,_rgba(14,14,18,0)_70%)] opacity-80" />
        {/* Blueprint line grid */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0a0a0c_90%)]" />
      </div>

      {/* Floating telemetry headers */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pb-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#7bd0ff] shadow-[0_0_12px_#7bd0ff]" />
          <span className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase">
            SYSTEM PROTOCOL // 01-ONLINE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-6 text-[#8f9194] font-mono-code text-[11px] uppercase tracking-widest"
        >
          <span>ENGINE: HYPERTEC KERNEL IV</span>
          <span className="text-white/20">/</span>
          <span>LATENCY: 42MS</span>
          <span className="text-white/20">/</span>
          <span className="text-[#7bd0ff]">SYS VER: 3.0.4</span>
        </motion.div>
      </div>

      {/* Central Hero Headline Stage */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center pt-2 pb-14">
        {/* Micro Overline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#16161b]/90 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-pulse" />
          <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#c5c6ca]">
            NOVA 3.0 INTELLECT PLATFORM // NOW AVAILABLE
          </p>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-[-0.04em] text-white font-extrabold leading-[0.95] max-w-5xl"
        >
          Work at the <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e1e2e5] to-[#7bd0ff]">
            speed of thought.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#c5c6ca] max-w-2xl mt-6 tracking-normal font-light leading-relaxed"
        >
          NOVA is an intelligent workspace and autonomous productivity platform that helps users
          think, create, and execute faster than ever before. Eliminating cognitive latency from
          ideation to production.
        </motion.p>

        {/* Action Buttons Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10"
        >
          <button
            onClick={onOpenGetStarted}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0a0c] font-display text-[14px] sm:text-[15px] font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#7bd0ff] hover:shadow-[0_0_30px_rgba(123,208,255,0.45)] group cursor-pointer rounded-sm"
          >
            <span>Start Building</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenVideoModal}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#16161b]/90 backdrop-blur-xl border border-white/10 text-white font-display text-[14px] sm:text-[15px] font-medium tracking-[0.14em] uppercase hover:bg-[#202028] hover:border-[#7bd0ff]/40 transition-all duration-300 group cursor-pointer rounded-sm"
          >
            <Play className="w-4 h-4 text-[#7bd0ff] transition-transform group-hover:scale-110" />
            <span>See How It Works</span>
          </button>
        </motion.div>

        {/* Micro Telemetry HUD Ribbon below actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 mt-12 pt-8 border-t border-white/[0.08] text-center"
        >
          <div>
            <div className="font-mono-code text-[10px] uppercase text-[#8f9194] tracking-widest">
              DISPATCH LATENCY
            </div>
            <div className="font-mono-code text-sm sm:text-base text-white font-bold mt-0.5">
              42 MS REAL-TIME
            </div>
          </div>
          <div>
            <div className="font-mono-code text-[10px] uppercase text-[#8f9194] tracking-widest">
              CONTEXT RETENTION
            </div>
            <div className="font-mono-code text-sm sm:text-base text-[#7bd0ff] font-bold mt-0.5">
              2,000,000 TOKENS
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="font-mono-code text-[10px] uppercase text-[#8f9194] tracking-widest">
              COGNITIVE GAIN
            </div>
            <div className="font-mono-code text-sm sm:text-base text-white font-bold mt-0.5">
              10X PRODUCTIVITY
            </div>
          </div>
        </motion.div>
      </div>

      {/* Futuristic Product/Interface Visual Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="relative z-10 w-full mt-2"
      >
        <ProductMockup />
      </motion.div>

      {/* Floating Bottom Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-10 flex items-center justify-between text-xs font-mono-code text-[#8f9194]">
        <span className="hidden sm:inline">CHASSIS SPEC: DISTRIBUTED MULTI-AGENT RUNTIME</span>
        <a
          href="#features"
          className="inline-flex items-center gap-2 hover:text-white transition-colors ml-auto sm:ml-0"
        >
          <span>SCROLL TO DISCOVER</span>
          <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-[#7bd0ff] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
