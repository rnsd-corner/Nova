import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Terminal, Sparkles, FolderGit2, Shield } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'Pro',
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [workspaceName, setWorkspaceName] = useState('hyper-velocity-engine');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleDone = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0a0c]/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-[#121217] border border-white/15 rounded-sm shadow-2xl overflow-hidden p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8f9194] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7bd0ff] shadow-[0_0_8px_#7bd0ff]" />
                <span className="font-mono-code text-xs text-[#7bd0ff] uppercase tracking-wider">
                  INITIALIZE NOVA COCKPIT
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                Commission Your Workspace
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#c5c6ca] leading-relaxed">
                Connect your engineering stack and start working at the speed of thought. No credit card required.
              </p>
            </div>

            <div className="space-y-4">
              {/* Workspace name */}
              <div className="space-y-1.5">
                <label className="font-mono-code text-xs text-[#8f9194] uppercase tracking-wider block">
                  WORKSPACE IDENTIFIER:
                </label>
                <div className="flex items-center gap-2 px-3 py-2.5 bg-[#0a0a0c] border border-white/10 rounded-sm">
                  <Terminal className="w-4 h-4 text-[#7bd0ff]" />
                  <input
                    type="text"
                    required
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    placeholder="my-workspace"
                    className="bg-transparent border-none outline-none text-white text-xs font-mono-code w-full"
                  />
                  <span className="text-[#8f9194] text-xs font-mono-code">.nova.app</span>
                </div>
              </div>

              {/* Work email */}
              <div className="space-y-1.5">
                <label className="font-mono-code text-xs text-[#8f9194] uppercase tracking-wider block">
                  WORK EMAIL:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@acme.corp"
                  className="w-full px-3 py-2.5 bg-[#0a0a0c] border border-white/10 rounded-sm text-white text-xs font-sans focus:outline-none focus:border-[#7bd0ff]"
                />
              </div>

              {/* Plan Choice */}
              <div className="space-y-1.5">
                <label className="font-mono-code text-xs text-[#8f9194] uppercase tracking-wider block">
                  SELECTED TIER:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Free', 'Pro', 'Team'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setSelectedPlan(tier)}
                      className={`py-2 rounded-sm text-xs font-mono-code uppercase transition-colors cursor-pointer ${
                        selectedPlan.toLowerCase() === tier.toLowerCase()
                          ? 'bg-[#7bd0ff] text-[#0a0a0c] font-bold shadow-[0_0_10px_#7bd0ff]'
                          : 'bg-white/[0.04] text-[#c5c6ca] border border-white/10 hover:border-white/20'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-white hover:bg-[#7bd0ff] text-[#0a0a0c] font-display text-xs sm:text-sm font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-all duration-300 rounded-sm cursor-pointer"
              >
                <span>Instantiate Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] font-mono-code text-[#8f9194] text-center">
              <Shield className="w-3 h-3 text-[#7bd0ff]" />
              <span>TLS 1.3 ENCRYPTED • SOC2 READY • ZERO TRAINING RETENTION</span>
            </div>
          </form>
        ) : (
          <div className="space-y-6 text-center py-4">
            <div className="w-14 h-14 rounded-full bg-[#27c93f]/10 border border-[#27c93f]/30 mx-auto flex items-center justify-center text-[#27c93f] shadow-[0_0_20px_rgba(39,201,63,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="font-mono-code text-xs text-[#7bd0ff] uppercase tracking-wider block">
                ALLOCATION GRANTED
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Workspace Initialized!
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#c5c6ca] leading-relaxed max-w-sm mx-auto">
                Your dedicated environment <strong>{workspaceName}.nova.app</strong> has been provisioned on the {selectedPlan} tier.
              </p>
            </div>

            <div className="p-3 bg-[#0a0a0c] border border-white/10 rounded-sm text-left font-mono-code text-xs space-y-1 text-[#8f9194]">
              <div className="text-[#7bd0ff]">STATUS: CLUSTER READY</div>
              <div>AUTH: TOKEN GENERATED</div>
              <div>REASONING KERNEL: ONLINE</div>
            </div>

            <button
              onClick={handleDone}
              className="w-full py-3.5 bg-[#7bd0ff] text-[#0a0a0c] font-display text-xs sm:text-sm font-bold uppercase tracking-[0.14em] rounded-sm hover:bg-white transition-colors cursor-pointer"
            >
              Enter Workspace Cockpit
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
