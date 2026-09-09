import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Cpu,
  Sparkles,
  GitBranch,
  Layers,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Activity,
  Sliders,
  Code2,
  CornerDownLeft,
  ChevronRight,
  RefreshCw,
  FolderGit2,
  Database,
  Radio
} from 'lucide-react';

export const ProductMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workspace' | 'graph' | 'telemetry'>('workspace');
  const [activePrompt, setActivePrompt] = useState('Synthesize sprint architecture and auto-resolve ticket #402');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionState, setExecutionState] = useState<'idle' | 'running' | 'completed'>('completed');

  const handleSimulateRun = () => {
    setIsExecuting(true);
    setExecutionState('running');
    setTimeout(() => {
      setIsExecuting(false);
      setExecutionState('completed');
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto select-none">
      {/* Outer Atmospheric Glow and Framing */}
      <div className="absolute -inset-1 bg-gradient-to-b from-[#7bd0ff]/20 via-transparent to-[#0a0a0c] rounded-lg blur-xl opacity-70 pointer-events-none" />

      {/* Main Terminal/Workspace Window */}
      <div className="relative rounded-md border border-white/[0.12] bg-[#111116]/95 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Window Top Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#16161b] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
            <span className="ml-2 text-xs font-mono-code text-[#8f9194] tracking-wider hidden sm:inline">
              nova://workspace/production-sprint-orchestrator
            </span>
          </div>

          {/* Quick tab switchers */}
          <div className="flex items-center gap-1 bg-[#0e0e12] p-0.5 rounded-sm border border-white/5">
            <button
              onClick={() => setActiveTab('workspace')}
              className={`px-3 py-1 rounded-sm text-[11px] font-mono-code uppercase tracking-wider transition-colors ${
                activeTab === 'workspace'
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-[#8f9194] hover:text-white'
              }`}
            >
              Workspace
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-3 py-1 rounded-sm text-[11px] font-mono-code uppercase tracking-wider transition-colors ${
                activeTab === 'graph'
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-[#8f9194] hover:text-white'
              }`}
            >
              Neural Graph
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-3 py-1 rounded-sm text-[11px] font-mono-code uppercase tracking-wider transition-colors ${
                activeTab === 'telemetry'
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-[#8f9194] hover:text-white'
              }`}
            >
              Live Telemetry
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-mono-code text-[#7bd0ff]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-pulse" />
              <span>32MS KERNEL</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Left Project Sidebar (3 cols) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col border-r border-white/[0.08] bg-[#0e0e12]/80 p-4 justify-between">
            <div className="space-y-5">
              {/* Context Selector */}
              <div>
                <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#8f9194] mb-2 flex items-center justify-between">
                  <span>ACTIVE REPOSITORIES</span>
                  <span className="text-[#7bd0ff]">4 CONNECTED</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-sm bg-white/[0.04] border border-white/10 text-xs text-white">
                    <span className="flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#7bd0ff]" />
                      <span>core-platform/kernel</span>
                    </span>
                    <span className="text-[10px] font-mono-code text-[#27c93f]">SYNCED</span>
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-sm hover:bg-white/[0.02] text-xs text-[#c5c6ca]">
                    <span className="flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#8f9194]" />
                      <span>neural-vector-mesh</span>
                    </span>
                    <span className="text-[10px] font-mono-code text-[#8f9194]">IDLE</span>
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-sm hover:bg-white/[0.02] text-xs text-[#c5c6ca]">
                    <span className="flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#8f9194]" />
                      <span>telemetry-streamer</span>
                    </span>
                    <span className="text-[10px] font-mono-code text-[#8f9194]">IDLE</span>
                  </div>
                </div>
              </div>

              {/* Memory Graph Indices */}
              <div>
                <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#8f9194] mb-2">
                  MEMORY GRAPH RETENTION
                </div>
                <div className="p-2.5 rounded-sm bg-[#141418] border border-white/5 space-y-2">
                  <div className="flex justify-between text-xs font-mono-code">
                    <span className="text-[#8f9194]">TOKENS INDEXED:</span>
                    <span className="text-white font-medium">1,842,900</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#202028] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7bd0ff] to-[#00a6e0] w-[88%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono-code text-[#7bd0ff]">
                    <span>SEMANTIC DRIFT: 0.02%</span>
                    <span>CACHE: HOT</span>
                  </div>
                </div>
              </div>

              {/* Agent Status */}
              <div>
                <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#8f9194] mb-2">
                  AUTONOMOUS AGENTS
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                    <span className="font-mono-code text-[11px]">ARCHITECT-01:</span>
                    <span className="text-[#8f9194] text-[11px]">IDLE (STANDBY)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-pulse" />
                    <span className="font-mono-code text-[11px]">SYNTHESIZER-03:</span>
                    <span className="text-[#7bd0ff] text-[11px]">MONITORING</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                    <span className="font-mono-code text-[11px]">REGRESSION-07:</span>
                    <span className="text-[#8f9194] text-[11px]">CLEARED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono-code text-[#8f9194]">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-[#7bd0ff] animate-pulse" />
                <span>DAEMON ACTIVE</span>
              </span>
              <span className="text-white">NODE #9</span>
            </div>
          </div>

          {/* Center Main Stage (Workspace View) (6 cols) */}
          <div className="lg:col-span-6 p-4 sm:p-6 flex flex-col justify-between space-y-4">
            {activeTab === 'workspace' && (
              <div className="space-y-4">
                {/* Command Bar / Prompt Bar */}
                <div className="relative">
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-sm bg-[#16161b] border border-white/10 text-sm shadow-inner">
                    <Search className="w-4 h-4 text-[#7bd0ff]" />
                    <input
                      type="text"
                      value={activePrompt}
                      onChange={(e) => setActivePrompt(e.target.value)}
                      className="bg-transparent border-none outline-none text-white text-xs sm:text-sm font-sans w-full placeholder-[#8f9194]"
                      placeholder="Ask NOVA or dispatch autonomous workflow..."
                    />
                    <button
                      onClick={handleSimulateRun}
                      disabled={isExecuting}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-[#0a0a0c] rounded-sm text-xs font-mono-code font-bold uppercase tracking-wider hover:bg-[#7bd0ff] transition-colors cursor-pointer"
                    >
                      {isExecuting ? (
                        <RefreshCw className="w-3 h-3 animate-spin" />
                      ) : (
                        <CornerDownLeft className="w-3 h-3" />
                      )}
                      <span className="hidden sm:inline">{isExecuting ? 'RUN' : 'EXEC'}</span>
                    </button>
                  </div>

                  {/* Suggestion Chips */}
                  <div className="flex items-center gap-1.5 mt-2 overflow-x-auto pb-1 text-[11px] font-mono-code">
                    <span className="text-[#8f9194] shrink-0">TRY:</span>
                    <button
                      onClick={() => setActivePrompt('Analyze latency regression in vector query pipeline')}
                      className="px-2 py-0.5 rounded-sm bg-white/[0.04] text-[#c5c6ca] hover:text-[#7bd0ff] hover:bg-white/[0.08] transition-colors shrink-0"
                    >
                      #vector-query
                    </button>
                    <button
                      onClick={() => setActivePrompt('Generate complete unit suite for auth token exchange')}
                      className="px-2 py-0.5 rounded-sm bg-white/[0.04] text-[#c5c6ca] hover:text-[#7bd0ff] hover:bg-white/[0.08] transition-colors shrink-0"
                    >
                      #generate-tests
                    </button>
                    <button
                      onClick={() => setActivePrompt('Trigger zero-downtime blue-green canary deployment')}
                      className="px-2 py-0.5 rounded-sm bg-white/[0.04] text-[#c5c6ca] hover:text-[#7bd0ff] hover:bg-white/[0.08] transition-colors shrink-0"
                    >
                      #deploy-canary
                    </button>
                  </div>
                </div>

                {/* Simulated AI Conversation and Execution Stream */}
                <div className="space-y-3">
                  {/* User Query Bubble */}
                  <div className="flex items-start gap-2.5 text-xs">
                    <div className="w-6 h-6 rounded-sm bg-white/10 flex items-center justify-center font-mono-code text-[11px] text-white shrink-0 mt-0.5">
                      YOU
                    </div>
                    <div className="bg-[#18181d] border border-white/5 rounded-sm p-3 text-white max-w-lg">
                      <p>{activePrompt}</p>
                    </div>
                  </div>

                  {/* NOVA Response Container */}
                  <div className="flex items-start gap-2.5 text-xs">
                    <div className="w-6 h-6 rounded-sm bg-[#7bd0ff]/20 border border-[#7bd0ff]/40 flex items-center justify-center font-mono-code text-[11px] text-[#7bd0ff] shrink-0 mt-0.5">
                      NV
                    </div>
                    <div className="bg-[#141418] border border-white/10 rounded-sm p-3.5 text-[#e5e1e4] flex-1 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono-code border-b border-white/5 pb-1.5">
                        <span className="text-[#7bd0ff] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>SYNTHESIS COMPLETE [0.04s]</span>
                        </span>
                        <span className="text-[#27c93f]">ALL CONSTRAINTS SATISFIED</span>
                      </div>

                      <p className="text-xs text-[#c5c6ca] leading-relaxed">
                        I have inspected the architectural dependencies across <strong>3 packages</strong>. Root cause identified in the asynchronous event queue lock contention.
                      </p>

                      {/* Code Snippet Box */}
                      <div className="rounded-sm bg-[#0a0a0c] border border-white/10 p-3 font-mono-code text-[11px] text-[#e1e2e5] space-y-1 overflow-x-auto">
                        <div className="text-[#8f9194] flex items-center justify-between pb-1 border-b border-white/5">
                          <span>src/kernel/dispatcher.rs</span>
                          <span className="text-[#7bd0ff]">LOCK-FREE MPSC</span>
                        </div>
                        <p className="text-[#27c93f]">+ pub async fn dispatch_parallel(&self, batch: Batch) &#123;</p>
                        <p className="text-[#c5c6ca]">&nbsp;&nbsp;&nbsp;&nbsp;let (tx, rx) = tokio::sync::oneshot::channel();</p>
                        <p className="text-[#7bd0ff]">&nbsp;&nbsp;&nbsp;&nbsp;self.scheduler.send_unbounded(Job::new(batch, tx))?;</p>
                        <p className="text-[#27c93f]">+ &#125;</p>
                      </div>

                      {/* Action verification checklist */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="flex items-center gap-1.5 text-[11px] text-[#27c93f] font-mono-code">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>42 Unit Tests Passed</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-[#7bd0ff] font-mono-code">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Staging PR #114 Created</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'graph' && (
              <div className="h-full flex flex-col justify-center items-center p-6 border border-white/5 bg-[#0e0e12] rounded-sm text-center">
                <Layers className="w-10 h-10 text-[#7bd0ff] mb-3 animate-pulse" />
                <h4 className="font-display text-sm uppercase text-white font-bold tracking-wider">
                  Interactive Semantic Vector Mesh
                </h4>
                <p className="text-xs text-[#8f9194] max-w-sm mt-1 mb-4">
                  14,200 entities dynamically linked across code repositories, design tokens, and technical documentation.
                </p>
                <div className="grid grid-cols-3 gap-2 w-full max-w-md text-xs font-mono-code">
                  <div className="p-2 bg-[#16161b] rounded-sm border border-white/5">
                    <div className="text-[#7bd0ff]">4,821</div>
                    <div className="text-[10px] text-[#8f9194]">CODE NODES</div>
                  </div>
                  <div className="p-2 bg-[#16161b] rounded-sm border border-white/5">
                    <div className="text-[#27c93f]">1,290</div>
                    <div className="text-[10px] text-[#8f9194]">DOCS & SPECS</div>
                  </div>
                  <div className="p-2 bg-[#16161b] rounded-sm border border-white/5">
                    <div className="text-white">99.8%</div>
                    <div className="text-[10px] text-[#8f9194]">CLUSTERING</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'telemetry' && (
              <div className="h-full flex flex-col justify-between p-4 border border-white/5 bg-[#0e0e12] rounded-sm space-y-4">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#7bd0ff] flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>KERNEL METRIC STREAM</span>
                  </span>
                  <span className="text-[#8f9194]">SAMPLING: 100HZ</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono-code">
                  <div className="p-3 bg-[#16161b] rounded-sm border border-white/5">
                    <span className="text-[10px] text-[#8f9194] block">INFERENCE LATENCY</span>
                    <span className="text-xl font-bold text-white">18.4 ms</span>
                  </div>
                  <div className="p-3 bg-[#16161b] rounded-sm border border-white/5">
                    <span className="text-[10px] text-[#8f9194] block">TOKENS PER SEC</span>
                    <span className="text-xl font-bold text-[#7bd0ff]">142.6</span>
                  </div>
                  <div className="p-3 bg-[#16161b] rounded-sm border border-white/5">
                    <span className="text-[10px] text-[#8f9194] block">CACHE HIT RATE</span>
                    <span className="text-xl font-bold text-[#27c93f]">98.9%</span>
                  </div>
                  <div className="p-3 bg-[#16161b] rounded-sm border border-white/5">
                    <span className="text-[10px] text-[#8f9194] block">MEMORY FOOTPRINT</span>
                    <span className="text-xl font-bold text-white">412 MB</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono-code text-[#8f9194] text-center border-t border-white/5 pt-2">
                  CLUSTER SPEC: DUAL H100 NVLINK • SECURE TENANCY
                </div>
              </div>
            )}

            {/* Micro status footer */}
            <div className="flex items-center justify-between text-[11px] font-mono-code text-[#8f9194] border-t border-white/5 pt-2">
              <span>COMMAND READY: CMD + K</span>
              <span className="text-[#7bd0ff]">AUTONOMOUS RUNTIME: ENGAGED</span>
            </div>
          </div>

          {/* Right Execution & Telemetry Strip (3 cols) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col border-l border-white/[0.08] bg-[#0e0e12]/80 p-4 justify-between">
            <div className="space-y-4">
              <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#8f9194] flex items-center justify-between">
                <span>PIPELINE SEQUENCE</span>
                <span className="text-[#27c93f]">RUNNING</span>
              </div>

              {/* Step checklist */}
              <div className="space-y-2 text-xs font-mono-code">
                <div className="p-2 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#27c93f]" />
                    <span>01. Ingestion</span>
                  </span>
                  <span className="text-[10px] text-[#8f9194]">12ms</span>
                </div>
                <div className="p-2 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#27c93f]" />
                    <span>02. Semantic AST</span>
                  </span>
                  <span className="text-[10px] text-[#8f9194]">24ms</span>
                </div>
                <div className="p-2 rounded-sm bg-white/[0.03] border border-[#7bd0ff]/30 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#7bd0ff]">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>03. Code Synthesis</span>
                  </span>
                  <span className="text-[10px] text-[#7bd0ff]">Active</span>
                </div>
                <div className="p-2 rounded-sm bg-white/[0.01] border border-white/5 flex items-center justify-between text-[#8f9194]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>04. Canary Verification</span>
                  </span>
                  <span className="text-[10px]">Queued</span>
                </div>
              </div>

              {/* Performance Radar Box */}
              <div className="p-3 bg-[#131317] border border-white/5 rounded-sm space-y-2">
                <div className="flex justify-between text-xs font-mono-code">
                  <span className="text-[#8f9194]">VELOCITY MULTIPLIER</span>
                  <span className="text-white font-bold">10.4x</span>
                </div>
                <div className="flex items-center gap-1 h-8 items-end justify-between pt-1">
                  <div className="w-2 h-3 bg-[#7bd0ff]/40 rounded-xs" />
                  <div className="w-2 h-4 bg-[#7bd0ff]/50 rounded-xs" />
                  <div className="w-2 h-3 bg-[#7bd0ff]/40 rounded-xs" />
                  <div className="w-2 h-6 bg-[#7bd0ff]/70 rounded-xs" />
                  <div className="w-2 h-5 bg-[#7bd0ff]/60 rounded-xs" />
                  <div className="w-2 h-7 bg-[#7bd0ff] rounded-xs shadow-[0_0_8px_#7bd0ff]" />
                  <div className="w-2 h-8 bg-white rounded-xs shadow-[0_0_10px_#fff]" />
                </div>
                <div className="text-[10px] font-mono-code text-[#7bd0ff] text-right">
                  PEAK: 148 EVENTS/SEC
                </div>
              </div>
            </div>

            {/* Bottom Quick Trigger */}
            <div className="pt-3 border-t border-white/[0.08]">
              <button
                onClick={handleSimulateRun}
                className="w-full py-2 px-3 rounded-sm bg-[#1a1a22] hover:bg-[#22222d] border border-white/10 text-white font-mono-code text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>RE-SYNC WORKSPACE</span>
                <ChevronRight className="w-3 h-3 text-[#7bd0ff]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
