import React from 'react';
import { motion } from 'motion/react';
import { TRUSTED_COMPANIES } from '../data';

export const TrustedLogos: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 border-y border-white/[0.08] bg-[#0c0c0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-mono-code text-[11px] uppercase tracking-[0.28em] text-[#8f9194]">
            TRUSTED BY FORWARD-THINKING ARCHITECTS & INNOVATION TEAMS WORLDWIDE
          </p>
        </div>

        {/* Company Logos Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {TRUSTED_COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-sm bg-white/[0.02] border border-white/[0.05] hover:border-[#7bd0ff]/30 hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
            >
              <span className="font-mono-code text-[#7bd0ff] text-base group-hover:scale-110 transition-transform">
                {company.symbol}
              </span>
              <span className="font-display text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8f9194] group-hover:text-white transition-colors">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
