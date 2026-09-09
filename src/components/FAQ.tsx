import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Integration', 'Security', 'Billing'];

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const expandAll = () => setOpenIds(FAQ_ITEMS.map((item) => item.id));
  const collapseAll = () => setOpenIds([]);

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0c0c10] border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <span className="font-mono-code text-[11px] text-[#7bd0ff] tracking-[0.24em] uppercase block mb-3">
              // 07 CLARIFICATIONS &amp; ARCHITECTURE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase text-white font-extrabold tracking-tight">
              FREQUENTLY ASKED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7bd0ff]">
                QUESTIONS.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="text-xs font-mono-code text-[#8f9194] hover:text-white transition-colors cursor-pointer"
            >
              [ EXPAND ALL ]
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={collapseAll}
              className="text-xs font-mono-code text-[#8f9194] hover:text-white transition-colors cursor-pointer"
            >
              [ COLLAPSE ALL ]
            </button>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8f9194] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specifications..."
              className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-[#131317] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#7bd0ff] transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono-code transition-colors cursor-pointer shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white text-[#0a0a0c] font-bold'
                    : 'bg-white/[0.04] text-[#8f9194] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm font-mono-code text-[#8f9194] border border-white/5 rounded-sm bg-[#111116]">
              NO QUESTIONS FOUND MATCHING CRITERIA.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isOpen = openIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="rounded-sm border border-white/[0.08] bg-[#111116] overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono-code text-xs text-[#7bd0ff] shrink-0">
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                        {item.question}
                      </h3>
                    </div>

                    <div className="w-7 h-7 rounded-sm bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#7bd0ff] shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-2">
                          <p className="font-sans text-xs sm:text-sm text-[#c5c6ca] leading-relaxed max-w-3xl pt-4">
                            {item.answer}
                          </p>
                          <div className="mt-4 flex items-center gap-2">
                            <span className="font-mono-code text-[10px] uppercase text-[#8f9194] px-2 py-0.5 rounded-sm bg-white/5 border border-white/5">
                              CATEGORY: {item.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
