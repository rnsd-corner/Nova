import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FolderDown,
  Network,
  Wand2,
  Rocket,
  ArrowRight,
  CheckCircle,
  Database,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data';

export const Workflow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = WORKFLOW_STEPS[activeStepIndex];

  const icons = [FolderDown, Network, Wand2, Rocket];

  return (
    <section id="workflow" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <span className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase block mb-3">
              // 04 THE EXECUTION SEQUENCE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase text-white font-extrabold tracking-tight leading-[1.05]">
              FROM INTUITION TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7bd0ff]">
                COMPLETED SHIPMENT.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#c5c6ca] max-w-md font-light leading-relaxed">
            A frictionless pipeline engineered to collapse the latency between high-level conception
            and verified production releases.
          </p>
        </div>

        {/* 4 Connected Sequential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = icons[index];
            const isSelected = activeStepIndex === index;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveStepIndex(index)}
                className={`p-6 sm:p-8 rounded-sm transition-all duration-300 flex flex-col justify-between cursor-pointer border relative group ${
                  isSelected
                    ? 'bg-[#16161d] border-[#7bd0ff]/60 shadow-[0_0_24px_rgba(123,208,255,0.15)]'
                    : 'bg-[#111116] border-white/[0.08] hover:border-white/20 hover:bg-[#131318]'
                }`}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className={`font-mono-code text-xs tracking-widest uppercase transition-colors ${
                      isSelected ? 'text-[#7bd0ff] font-bold' : 'text-[#8f9194]'
                    }`}
                  >
                    [ {step.number} // {step.title} ]
                  </span>
                  <div
                    className={`w-8 h-8 rounded-sm flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#7bd0ff]/20 text-[#7bd0ff]'
                        : 'bg-white/[0.04] text-[#8f9194] group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-display text-xl sm:text-2xl uppercase text-white font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#c5c6ca] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom spec pill */}
                <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono-code">
                  <span className="text-[#8f9194]">{step.badge}</span>
                  <span className={isSelected ? 'text-[#7bd0ff]' : 'text-white/40'}>
                    PHASE 0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Expanded Inspector for Selected Step */}
        <motion.div
          key={activeStep.number}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-sm bg-[#121217] border border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7bd0ff]/10 border border-[#7bd0ff]/20 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff]" />
              <span className="font-mono-code text-[11px] text-[#7bd0ff] uppercase tracking-wider">
                DEEP ARCHITECTURAL INSPECTOR // PHASE {activeStep.number}
              </span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl text-white uppercase font-bold">
              {activeStep.title}: {activeStep.badge}
            </h4>
            <p className="font-sans text-sm sm:text-base text-[#c5c6ca] leading-relaxed">
              {activeStep.details}
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {activeStep.specs.map((spec, i) => (
              <div key={i} className="p-4 bg-[#0a0a0c] border border-white/5 rounded-sm space-y-1">
                <span className="text-[10px] font-mono-code text-[#8f9194] uppercase tracking-wider block">
                  {spec.label}
                </span>
                <span className="font-mono-code text-base font-bold text-white block">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
