import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BrainCircuit,
  Sparkles,
  Zap,
  Cpu,
  Users,
  ShieldCheck,
  CheckCircle,
  ArrowUpRight,
  Database,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';
import { FEATURES } from '../data';

export const Features: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  return (
    <section id="features" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <span className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase block mb-3">
              // 02 ARCHITECTURAL CAPABILITIES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase text-white font-extrabold tracking-tight leading-[1.05]">
              ENGINEERED TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7bd0ff]">
                AMPLIFY INTELLECT.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#c5c6ca] max-w-md font-light leading-relaxed">
            Six interconnected intelligence layers designed to transform raw cognitive intent into
            hardened production execution without friction.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 01. THINK — Hero Large Feature (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 rounded-sm bg-[#111116] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7bd0ff]/40 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Corner telemetry */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono-code text-xs text-[#7bd0ff] tracking-widest uppercase">
                [ 01 / SYNTHESIS ]
              </span>
              <span className="font-mono-code text-[11px] text-[#8f9194] px-2 py-0.5 rounded-sm bg-white/5 border border-white/5">
                SEMANTIC GRAPH V4
              </span>
            </div>

            <div className="space-y-4 max-w-xl relative z-10">
              <div className="w-10 h-10 rounded-sm bg-[#7bd0ff]/10 border border-[#7bd0ff]/20 flex items-center justify-center text-[#7bd0ff]">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white font-bold group-hover:text-[#7bd0ff] transition-colors">
                THINK // Deep Context Understanding
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#c5c6ca] leading-relaxed">
                NOVA assimilates your entire engineering ecosystem—codebases, linear tickets, Figma design tokens, and technical discussions. It forms high-dimensional vector graphs to reason across cross-cutting architectural constraints.
              </p>
            </div>

            {/* Simulated Semantic Graph Node Visual */}
            <div className="mt-8 p-4 rounded-sm bg-[#0a0a0c] border border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-code">
              <div className="p-2.5 bg-[#141418] rounded-sm border border-white/5">
                <span className="text-[10px] text-[#8f9194] block">ENTITIES LINKED</span>
                <span className="text-white font-bold text-sm">14.2M</span>
              </div>
              <div className="p-2.5 bg-[#141418] rounded-sm border border-white/5">
                <span className="text-[10px] text-[#8f9194] block">QUERY RESOLUTION</span>
                <span className="text-[#7bd0ff] font-bold text-sm">18.2 ms</span>
              </div>
              <div className="p-2.5 bg-[#141418] rounded-sm border border-white/5">
                <span className="text-[10px] text-[#8f9194] block">CONTEXT WINDOW</span>
                <span className="text-white font-bold text-sm">2,000,000</span>
              </div>
              <div className="p-2.5 bg-[#141418] rounded-sm border border-white/5">
                <span className="text-[10px] text-[#8f9194] block">SEMANTIC DRIFT</span>
                <span className="text-[#27c93f] font-bold text-sm">&lt; 0.01%</span>
              </div>
            </div>
          </motion.div>

          {/* 02. CREATE — High Velocity Feature (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 rounded-sm bg-[#111116] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7bd0ff]/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-xs text-[#7bd0ff] tracking-widest uppercase">
                  [ 02 / GENERATE ]
                </span>
                <Sparkles className="w-4 h-4 text-[#7bd0ff]" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl uppercase text-white font-bold group-hover:text-[#7bd0ff] transition-colors">
                CREATE // Rapid Synthesis
              </h3>
              <p className="font-sans text-sm text-[#c5c6ca] leading-relaxed">
                Generate and refine ideas, multi-file code scaffolding, and interactive documentation instantly. Maintain conversational steering with surgical token precision.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#8f9194]">STREAM SPEED:</span>
              <span className="text-[#7bd0ff] font-bold">140 TOKENS / SEC</span>
            </div>
          </motion.div>

          {/* 03. EXECUTE — Autonomous Dispatch (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4 rounded-sm bg-[#111116] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7bd0ff]/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-xs text-[#7bd0ff] tracking-widest uppercase">
                  [ 03 / RESOLVE ]
                </span>
                <Zap className="w-4 h-4 text-[#7bd0ff]" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl uppercase text-white font-bold group-hover:text-[#7bd0ff] transition-colors">
                EXECUTE // Intent to Delivery
              </h3>
              <p className="font-sans text-sm text-[#c5c6ca] leading-relaxed">
                Turn concepts into working code. NOVA automatically compiles, executes regression tests, and drafts audit-ready pull requests with zero manual overhead.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#8f9194]">DISPATCH LATENCY:</span>
              <span className="text-white font-bold">0.04 SECONDS</span>
            </div>
          </motion.div>

          {/* 04. AUTOMATE — Background Daemons (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 rounded-sm bg-[#111116] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7bd0ff]/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-xs text-[#7bd0ff] tracking-widest uppercase">
                  [ 04 / DAEMONS ]
                </span>
                <Cpu className="w-4 h-4 text-[#7bd0ff]" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl uppercase text-white font-bold group-hover:text-[#7bd0ff] transition-colors">
                AUTOMATE // Background Workflows
              </h3>
              <p className="font-sans text-sm text-[#c5c6ca] leading-relaxed">
                Delegate recurring maintenance, dependency reconciliation, flaky test fixes, and telemetry triage to autonomous daemons that work 24/7 without fatigue.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#8f9194]">BOILERPLATE CUT:</span>
              <span className="text-[#7bd0ff] font-bold">78% AUTOMATED</span>
            </div>
          </motion.div>

          {/* 05. COLLABORATE — Multi-Agent (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-4 rounded-sm bg-[#111116] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7bd0ff]/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-xs text-[#7bd0ff] tracking-widest uppercase">
                  [ 05 / MULTIPLAYER ]
                </span>
                <Users className="w-4 h-4 text-[#7bd0ff]" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl uppercase text-white font-bold group-hover:text-[#7bd0ff] transition-colors">
                COLLABORATE // Shared Intellect
              </h3>
              <p className="font-sans text-sm text-[#c5c6ca] leading-relaxed">
                Real-time synchronized team workspaces where engineers, product leaders, and autonomous agents collaborate in fluid, multi-threaded harmony.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#8f9194]">SYNCHRONIZATION:</span>
              <span className="text-[#27c93f] font-bold">&lt; 15MS SYNC</span>
            </div>
          </motion.div>

          {/* 06. FOCUS — Unified Cockpit Banner (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-12 rounded-sm bg-gradient-to-r from-[#111116] via-[#16161c] to-[#111116] border border-white/[0.08] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-[#7bd0ff]/40 transition-all"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono-code text-xs text-[#7bd0ff] tracking-widest uppercase block">
                [ 06 / FOCUS ] COGNITIVE CALM
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white font-bold">
                A Unified Cockpit Without Distraction.
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#c5c6ca] leading-relaxed">
                Filter alert fatigue. NOVA replaces 10 disparate tabs with a high-density, nocturnal HUD that surfaces high-leverage decisions while suppressing background noise.
              </p>
            </div>

            <div className="flex items-center gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-10 shrink-0">
              <div>
                <div className="font-display text-3xl font-extrabold text-white">99.4%</div>
                <div className="font-mono-code text-[11px] text-[#8f9194] uppercase tracking-wider">
                  SIGNAL RETENTION
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-[#7bd0ff]">0 TABS</div>
                <div className="font-mono-code text-[11px] text-[#8f9194] uppercase tracking-wider">
                  CONTEXT SWITCHING
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
