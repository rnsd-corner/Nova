import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data';

interface CounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const steps = 40;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0c0c10] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <span className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase block mb-3">
              // 05 TELEMETRY &amp; BENCHMARKS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase text-white font-extrabold tracking-tight leading-[1.05]">
              MEASURED IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7bd0ff]">
                RAW VELOCITY.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#c5c6ca] max-w-md font-light leading-relaxed">
            Quantifiable engineering acceleration verified across production codebases, automated workflows, and high-volume deployment pipelines.
          </p>
        </div>

        {/* 4 Telemetry Spec Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#121217] border border-white/[0.08] p-6 sm:p-8 rounded-sm flex flex-col justify-between hover:border-[#7bd0ff]/40 hover:bg-[#15151c] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono-code text-xs text-[#8f9194] tracking-widest uppercase">
                  {stat.code}
                </span>
                <span className="font-mono-code text-xs text-[#7bd0ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  [0{index + 1}]
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl sm:text-6xl font-extrabold text-white tracking-tighter">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.14em] text-white mt-3">
                  {stat.label}
                </h3>
                <p className="font-sans text-xs text-[#8f9194] mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[10px] font-mono-code text-[#7bd0ff] tracking-wider uppercase">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
