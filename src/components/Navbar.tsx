import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { NAV_LINKS } from '../data';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['hero', 'features', 'ai-demo', 'workflow', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when escape key pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0c]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2.5 group select-none"
              aria-label="NOVA Home"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-sm bg-[#16161a] border border-white/10 group-hover:border-[#7bd0ff]/60 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#7bd0ff] shadow-[0_0_10px_#7bd0ff]" />
                <span className="absolute -inset-1 rounded-sm bg-[#7bd0ff]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-display text-2xl font-bold tracking-[0.22em] text-white transition-opacity group-hover:text-white/90">
                NOVA
              </span>
              <span className="hidden sm:inline-block font-mono-code text-[11px] px-2 py-0.5 rounded-sm bg-white/[0.05] text-[#7bd0ff] border border-[#7bd0ff]/20 tracking-wider">
                v3.0
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-sm text-[13px] font-mono-code uppercase tracking-[0.14em] transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-[#c5c6ca]/70 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#7bd0ff] shadow-[0_0_8px_#7bd0ff]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono-code text-[#8f9194] tracking-wider uppercase border-r border-white/10 pr-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-pulse" />
              <span>SYS ONLINE</span>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-white hover:bg-[#e1e2e5] text-[#0a0a0c] font-display text-[13px] font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(123,208,255,0.4)] group cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenGetStarted}
              className="px-3.5 py-1.5 rounded-sm bg-white text-[#0a0a0c] font-display text-[12px] font-bold tracking-wider uppercase"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#16161a] border border-white/10 text-white hover:text-[#7bd0ff] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-20 z-40 bg-[#0a0a0c]/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-3 px-4 rounded-sm bg-[#131316] border border-white/5 text-white font-display text-base tracking-wider uppercase hover:border-[#7bd0ff]/40 hover:text-[#7bd0ff] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#7bd0ff]" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono-code text-[#8f9194] px-1">
                <span>SYSTEM STATUS</span>
                <span className="text-[#7bd0ff] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-pulse" />
                  LATENCY 38MS
                </span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-3.5 rounded-sm bg-white text-[#0a0a0c] font-display text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
