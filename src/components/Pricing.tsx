import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <span className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase block mb-3">
              // 06 COMMISSIONING &amp; ALLOCATION
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase text-white font-extrabold tracking-tight leading-[1.05]">
              TRANSPARENT TIERS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7bd0ff]">
                UNCONSTRAINED VELOCITY.
              </span>
            </h2>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center gap-3 bg-[#131318] p-1.5 rounded-sm border border-white/10 self-start md:self-end">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-sm text-xs font-mono-code uppercase tracking-wider transition-colors cursor-pointer ${
                !isAnnual ? 'bg-white text-[#0a0a0c] font-bold' : 'text-[#8f9194] hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-sm text-xs font-mono-code uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
                isAnnual ? 'bg-white text-[#0a0a0c] font-bold' : 'text-[#8f9194] hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="px-1.5 py-0.5 rounded-xs bg-[#7bd0ff] text-[#0a0a0c] text-[10px] font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-sm flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-[#14141c] border-2 border-[#7bd0ff] shadow-[0_0_35px_rgba(123,208,255,0.18)] lg:-translate-y-2'
                    : 'bg-[#111116] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-sm bg-[#7bd0ff] text-[#0a0a0c] font-mono-code text-[10px] font-bold uppercase tracking-widest shadow-[0_0_12px_#7bd0ff]">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Tier Code */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-xs text-[#7bd0ff] tracking-widest uppercase">
                      {plan.tier}
                    </span>
                    <span className="font-mono-code text-[11px] text-[#8f9194]">
                      {isAnnual && price > 0 ? 'BILLED ANNUALLY' : 'STANDARD BILLING'}
                    </span>
                  </div>

                  {/* Plan Name and description */}
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#8f9194] mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-baseline gap-1.5">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                      ${price}
                    </span>
                    <span className="font-mono-code text-xs text-[#8f9194]">
                      {price === 0 ? '/ FOREVER' : isAnnual ? '/ MO (BILLED ANNUALLY)' : '/ MONTH'}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                    <div className="font-mono-code text-[11px] text-[#8f9194] uppercase tracking-wider">
                      INCLUDED CAPABILITIES:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-xs sm:text-sm text-[#c5c6ca]">
                          <Check className="w-4 h-4 text-[#7bd0ff] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 rounded-sm font-display text-xs sm:text-sm font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isPopular
                        ? 'bg-[#7bd0ff] hover:bg-white text-[#0a0a0c] shadow-[0_0_20px_rgba(123,208,255,0.4)]'
                        : 'bg-white/[0.06] hover:bg-white text-white hover:text-[#0a0a0c] border border-white/10'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="p-6 rounded-sm bg-[#111116] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono-code text-[#8f9194]">
          <div className="flex items-center gap-2 text-white">
            <Shield className="w-4 h-4 text-[#7bd0ff]" />
            <span>14-DAY FULL MONEY-BACK GUARANTEE • ZERO COMMITMENT</span>
          </div>
          <div className="text-[#7bd0ff]">
            ENTERPRISE AIR-GAPPED DEPLOYMENTS AVAILABLE ON REQUEST
          </div>
        </div>
      </div>
    </section>
  );
};
