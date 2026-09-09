import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Terminal, Activity } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { time: '00:04', label: 'Semantic Context Ingestion (14 Repositories)' },
    { time: '00:12', label: 'Real-Time Vector Mesh Alignment' },
    { time: '00:24', label: 'Autonomous Multi-File Rust Code Generation' },
    { time: '00:38', label: 'Ephemeral Sandboxing & Automated Regression Tests' },
    { time: '00:52', label: 'Production Dispatch to Kubernetes Cluster' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-[#0a0a0c]/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl bg-[#111116] border border-white/10 rounded-sm shadow-2xl overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#16161c] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#7bd0ff] shadow-[0_0_8px_#7bd0ff]" />
            <span className="font-mono-code text-xs text-white uppercase tracking-wider">
              NOVA CINEMA // WORKSPACE ARCHITECTURE WALKTHROUGH
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#8f9194] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Walkthrough"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Video Simulation Stage */}
        <div className="relative aspect-video w-full bg-[#08080a] flex flex-col justify-between p-6 sm:p-10 overflow-hidden">
          {/* Blueprint grid background */}
          <div className="absolute inset-0 blueprint-grid opacity-[0.06] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(123,208,255,0.1)_0%,_transparent_75%)] pointer-events-none" />

          {/* Top telemetry in playback */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono-code text-[#8f9194]">
            <span className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#7bd0ff]" />
              <span className="text-white">NOVA-CORE: ACTIVE DEMO</span>
            </span>
            <span className="text-[#7bd0ff]">4K 60FPS SYNTHESIS</span>
          </div>

          {/* Center Playback Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 py-8">
            <div className="w-16 h-16 rounded-full bg-[#7bd0ff]/10 border border-[#7bd0ff]/40 flex items-center justify-center text-[#7bd0ff] shadow-[0_0_25px_rgba(123,208,255,0.3)]">
              {isPlaying ? <Activity className="w-8 h-8 animate-pulse" /> : <Play className="w-8 h-8 ml-1" />}
            </div>
            <div className="space-y-1 max-w-lg">
              <span className="font-mono-code text-xs text-[#7bd0ff] uppercase tracking-widest block">
                {steps[activeStep].time} // CURRENT PHASE
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                {steps[activeStep].label}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#8f9194]">
                Capturing multi-repo symbols and streaming syntactic AST updates with sub-millisecond execution resolution.
              </p>
            </div>
          </div>

          {/* Bottom Timeline Controls */}
          <div className="relative z-10 space-y-3 pt-4 border-t border-white/10">
            {/* Steps timeline selector */}
            <div className="grid grid-cols-5 gap-1.5">
              {steps.map((step, idx) => (
                <button
                  key={step.time}
                  onClick={() => setActiveStep(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'bg-[#7bd0ff] shadow-[0_0_8px_#7bd0ff]'
                      : idx < activeStep
                      ? 'bg-white/40'
                      : 'bg-white/10'
                  }`}
                  title={step.label}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-mono-code text-[#8f9194]">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span>00:24 / 01:00</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#7bd0ff]">
                <span>STREAM: 8K RESOLUTION</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
