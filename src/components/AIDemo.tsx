import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Terminal,
  Send,
  RotateCcw,
  Copy,
  Check,
  Cpu,
  Clock,
  CheckCircle2,
  AlertCircle,
  Code2,
  FileText
} from 'lucide-react';
import { DEMO_PRESETS } from '../data';

export const AIDemo: React.FC = () => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [promptInput, setPromptInput] = useState(DEMO_PRESETS[0].prompt);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState<string>('');
  const [hasRun, setHasRun] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeResponse, setActiveResponse] = useState(DEMO_PRESETS[0].simulatedResponse);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelectPreset = (index: number) => {
    setSelectedPresetIndex(index);
    setPromptInput(DEMO_PRESETS[index].prompt);
    setActiveResponse(DEMO_PRESETS[index].simulatedResponse);
  };

  const handleRunDemo = () => {
    if (!promptInput.trim()) return;

    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }

    setIsLoading(true);
    setHasRun(false);
    setDisplayedText('');

    // Determine matching preset or generate dynamic response
    const matchedPreset = DEMO_PRESETS.find(
      (p) => p.prompt.toLowerCase() === promptInput.toLowerCase()
    );

    const targetResponse = matchedPreset
      ? matchedPreset.simulatedResponse
      : {
          status: 'SYNTHESIZED',
          time: '246ms',
          summary: `Synthesized custom instruction: "${promptInput.slice(0, 48)}..."`,
          quote: `“Objective mapped to 4 workspace branches. All semantic dependencies verified.”`,
          tasks: [
            { title: 'Decompose objective into discrete execution graph', status: 'Completed', priority: 'High', owner: 'NOVA Agent' },
            { title: 'Type inference & memory bounds validation', status: 'Passed', priority: 'Critical', owner: 'NOVA Agent' },
          ],
          recommendation: 'Target ready for automated staging deployment. Zero regression detected across 42 unit test suites.',
        };

    setActiveResponse(targetResponse);

    // Multi-step loading states
    setLoadingStep('Analyzing semantic token dependencies...');
    setTimeout(() => {
      setLoadingStep('Querying multi-repo vector graph across 18 nodes...');
    }, 450);

    setTimeout(() => {
      setLoadingStep('Synthesizing structured execution artifact at 140 tok/s...');
    }, 900);

    setTimeout(() => {
      setIsLoading(false);
      setHasRun(true);

      // Typing effect for the summary
      const textToType = targetResponse.summary;
      let currentChar = 0;

      typingTimerRef.current = setInterval(() => {
        if (currentChar <= textToType.length) {
          setDisplayedText(textToType.slice(0, currentChar));
          currentChar += 2;
        } else {
          if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        }
      }, 20);
    }, 1350);
  };

  const handleReset = () => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setHasRun(false);
    setIsLoading(false);
    setDisplayedText('');
    setPromptInput(DEMO_PRESETS[0].prompt);
    setActiveResponse(DEMO_PRESETS[0].simulatedResponse);
  };

  const handleCopy = () => {
    const content = JSON.stringify(activeResponse, null, 2);
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Run on initial mount
  useEffect(() => {
    handleRunDemo();
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, []);

  return (
    <section id="ai-demo" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0e0e12] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase block mb-3">
              // 03 INTERACTIVE REASONING DEMO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase text-white font-extrabold tracking-tight leading-[1.05]">
              TEST THE KERNEL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7bd0ff]">
                IN REAL TIME.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#c5c6ca] max-w-md font-light leading-relaxed">
            Experience the sub-millisecond execution loop. Select a preset engineering prompt or input your own custom objective.
          </p>
        </div>

        {/* Demo Cockpit Box */}
        <div className="rounded-md border border-white/10 bg-[#121217] shadow-2xl overflow-hidden">
          {/* Top telemetry status bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#18181f] border-b border-white/10 font-mono-code text-xs">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#7bd0ff]" />
              <span className="text-white font-medium">NOVA REASONING PLAYGROUND</span>
              <span className="hidden sm:inline text-[#8f9194]">// PROTOCOL 3.0</span>
            </div>
            <div className="flex items-center gap-4 text-[#8f9194]">
              <span className="hidden md:inline">TENANCY: EPHEMERAL SANDBOX</span>
              <span className="text-[#7bd0ff] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-pulse" />
                ONLINE
              </span>
            </div>
          </div>

          {/* Preset Prompts Chips Strip */}
          <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-[#14141a]">
            <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#8f9194] mb-3">
              SELECT PRESET SPECIFICATION:
            </div>
            <div className="flex flex-wrap gap-2">
              {DEMO_PRESETS.map((preset, idx) => (
                <button
                  key={preset.label}
                  onClick={() => handleSelectPreset(idx)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-mono-code transition-all cursor-pointer ${
                    selectedPresetIndex === idx
                      ? 'bg-white text-[#0a0a0c] font-bold shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                      : 'bg-white/[0.04] text-[#c5c6ca] border border-white/10 hover:border-[#7bd0ff]/40 hover:text-white'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Input Form */}
          <div className="p-4 sm:p-6 bg-[#121217]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRunDemo();
              }}
              className="flex flex-col sm:flex-row items-stretch gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder="Enter objective (e.g. Summarize project tasks and blockers)..."
                  className="w-full px-4 py-3.5 rounded-sm bg-[#0e0e12] border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-[#7bd0ff] transition-colors"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-white hover:bg-[#7bd0ff] text-[#0a0a0c] font-display text-xs sm:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isLoading ? 'Processing...' : 'Execute Prompt'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset Demo"
                  className="p-3.5 rounded-sm bg-white/[0.05] border border-white/10 text-[#8f9194] hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Response Display Window */}
          <div className="p-4 sm:p-6 border-t border-white/[0.08] bg-[#0d0d11] min-h-[300px] flex flex-col justify-between">
            {isLoading ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="relative flex items-center justify-center w-12 h-12">
                  <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-[#7bd0ff] animate-spin" />
                  <Sparkles className="w-5 h-5 text-[#7bd0ff] absolute" />
                </div>
                <div className="space-y-1">
                  <p className="font-mono-code text-xs text-[#7bd0ff] tracking-wider animate-pulse">
                    {loadingStep}
                  </p>
                  <p className="font-mono-code text-[11px] text-[#8f9194]">
                    SAMPLING VECTOR EMBEDDINGS AT 100HZ
                  </p>
                </div>
              </div>
            ) : hasRun ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Result header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded-sm bg-[#27c93f]/10 border border-[#27c93f]/30 text-[#27c93f] font-mono-code text-[11px] uppercase tracking-wider">
                      {activeResponse.status}
                    </span>
                    <span className="font-mono-code text-xs text-[#8f9194]">
                      EXECUTION TIME: <strong className="text-white">{activeResponse.time}</strong>
                    </span>
                    <span className="font-mono-code text-xs text-[#8f9194] hidden sm:inline">
                      CONFIDENCE: <strong className="text-[#7bd0ff]">99.8%</strong>
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/[0.05] border border-white/10 text-xs font-mono-code text-[#8f9194] hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#27c93f]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Output'}</span>
                  </button>
                </div>

                {/* Summary typed line */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#8f9194]">
                    SYNTHESIS RESULT:
                  </div>
                  <p className="font-sans text-sm sm:text-base text-white font-medium leading-relaxed">
                    {displayedText}
                  </p>
                </div>

                {/* Structured Quote if present */}
                {'quote' in activeResponse && activeResponse.quote && (
                  <blockquote className="p-4 rounded-sm bg-white/[0.02] border-l-2 border-[#7bd0ff] font-sans text-sm text-[#c5c6ca] italic">
                    {activeResponse.quote}
                  </blockquote>
                )}

                {/* Task Checklist if present */}
                {'tasks' in activeResponse && activeResponse.tasks && (
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#8f9194]">
                      HIGH-PRIORITY PIPELINE ITEMS:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeResponse.tasks.map((task, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-sm bg-[#15151b] border border-white/5 flex flex-col justify-between gap-2"
                        >
                          <div className="flex items-start justify-between gap-2 text-xs">
                            <span className="text-white font-medium">{task.title}</span>
                            <span className="font-mono-code text-[10px] px-1.5 py-0.5 rounded-xs bg-[#7bd0ff]/10 text-[#7bd0ff]">
                              {task.priority}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] font-mono-code text-[#8f9194]">
                            <span>STATUS: {task.status}</span>
                            <span>{task.owner}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Generated Code if present */}
                {'code' in activeResponse && activeResponse.code && (
                  <div className="space-y-1 pt-2">
                    <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#8f9194]">
                      AUTONOMOUS CODE EMISSION:
                    </div>
                    <pre className="p-4 rounded-sm bg-[#08080a] border border-white/10 font-mono-code text-xs text-[#7bd0ff] overflow-x-auto">
                      <code>{activeResponse.code}</code>
                    </pre>
                  </div>
                )}

                {/* Bullets if present */}
                {'bullets' in activeResponse && activeResponse.bullets && (
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#c5c6ca] list-disc list-inside">
                    {activeResponse.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {/* Recommendation Footer */}
                {activeResponse.recommendation && (
                  <div className="p-3 rounded-sm bg-[#131317] border border-white/5 flex items-start gap-2.5 text-xs text-[#8f9194]">
                    <CheckCircle2 className="w-4 h-4 text-[#27c93f] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">RECOMMENDATION:</strong> {activeResponse.recommendation}
                    </span>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="py-12 text-center text-xs font-mono-code text-[#8f9194]">
                ENTER A PROMPT OR SELECT A PRESET TO DISPATCH REASONING SIMULATION.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
