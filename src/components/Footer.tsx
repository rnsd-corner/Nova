import React from 'react';
import { ArrowUp, Terminal, Radio } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08080a] border-t border-white/[0.08] pt-20 pb-12 text-[#8f9194]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        {/* Top Split with Giant Brand Mark & Nav Columns */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#7bd0ff] shadow-[0_0_10px_#7bd0ff]" />
              <h2 className="font-display text-3xl font-extrabold tracking-[0.2em] text-white">
                NOVA
              </h2>
            </div>
            <p className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase">
              ENGINEERED FOR COGNITIVE VELOCITY.
            </p>
            <p className="font-sans text-xs text-[#8f9194] leading-relaxed">
              NOVA is an autonomous intelligence workspace empowering engineering teams to think,
              create, and execute with zero friction.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Product */}
            <div className="flex flex-col gap-3">
              <span className="font-mono-code text-xs uppercase tracking-wider text-white font-bold">
                PRODUCT
              </span>
              <a href="#features" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                Features
              </a>
              <a href="#workflow" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                Workflow
              </a>
              <a href="#pricing" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                Pricing
              </a>
              <a href="#ai-demo" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                Interactive Demo
              </a>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-3">
              <span className="font-mono-code text-xs uppercase tracking-wider text-white font-bold">
                COMPANY
              </span>
              <a href="#" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                About
              </a>
              <a href="#" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors flex items-center gap-1.5">
                <span>Careers</span>
                <span className="px-1.5 py-0.2 rounded-xs bg-[#7bd0ff]/10 text-[#7bd0ff] text-[10px] font-mono-code">
                  HIRING
                </span>
              </a>
              <a href="#" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                Contact
              </a>
              <a href="#" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                Security
              </a>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-3">
              <span className="font-mono-code text-xs uppercase tracking-wider text-white font-bold">
                RESOURCES
              </span>
              <a href="#" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                Documentation
              </a>
              <a href="#" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                Help Center
              </a>
              <a href="#faq" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                FAQ
              </a>
              <a href="#" className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors">
                API Reference
              </a>
            </div>

            {/* Column 4: Social */}
            <div className="flex flex-col gap-3">
              <span className="font-mono-code text-xs uppercase tracking-wider text-white font-bold">
                CONNECT
              </span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#c5c6ca] hover:text-[#7bd0ff] transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Telemetry & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code">
          <p className="text-[#8f9194]">
            © 2026 NOVA. All rights reserved. Work at the speed of thought.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#8f9194]">
              <span>TELEMETRY: ONLINE</span>
              <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-pulse" />
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#8f9194] hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
