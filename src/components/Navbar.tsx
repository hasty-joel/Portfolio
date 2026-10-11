import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Palette, Check } from 'lucide-react';
import logo1Img from '../assets/images/logo1.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' }
];

const themes = [
  { id: 'blue', label: 'Sapphire', color: 'bg-blue-500 border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]' },
  { id: 'gold', label: 'Gold', color: 'bg-amber-500 border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]' },
  { id: 'green', label: 'Emerald', color: 'bg-emerald-500 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]' },
  { id: 'red', label: 'Ruby', color: 'bg-rose-500 border-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.5)]' },
  { id: 'pink', label: 'Rose', color: 'bg-pink-500 border-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.5)]' },
  { id: 'white', label: 'Platinum', color: 'bg-stone-200 border-stone-400 shadow-[0_0_8px_rgba(120,113,108,0.3)]' },
  { id: 'mixed', label: 'Nebula Mix', color: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 border-pink-300 shadow-[0_0_8px_rgba(168,85,247,0.6)]' }
];

interface NavbarProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile dropdown on window rescaling above lg breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#070b19]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-cyan-400/40 bg-slate-900/90 shadow-[0_0_12px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_18px_rgba(6,182,212,0.5)] group-hover:scale-105 group-hover:border-cyan-400/60 transition-all duration-300 flex items-center justify-center p-0.5">
              <img 
                src={logo1Img} 
                alt="Atamba Joel Brand Icon" 
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold font-sans tracking-wider text-sm group-hover:text-amber-400 transition-colors leading-none">
                ATAMBA JOEL
              </span>
              <span className="text-[9px] font-mono text-cyan-400/90 tracking-widest uppercase mt-0.5">
                UI/UX DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/25 via-cyan-500/25 to-amber-500/20 border border-cyan-400/40 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Theme Selector Dropdown (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-xs font-semibold text-white shadow-md shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Theme Trigger Selector */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-slate-900/60 hover:bg-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
                title="Select Theme Color"
              >
                <Palette className="w-3.5 h-3.5" />
                <span className="capitalize">{theme === 'mixed' ? 'Nebula' : theme}</span>
                <span className={`w-2.5 h-2.5 rounded-full border border-white/15 ${
                  themes.find(t => t.id === theme)?.color || 'bg-amber-400'
                }`} />
              </button>

              <AnimatePresence>
                {themeMenuOpen && (
                  <>
                    {/* Invisible Click-away Backdrop */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setThemeMenuOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute right-0 mt-2 w-48 rounded-xl border border-white/5 bg-[#0f172a]/95 backdrop-blur-xl shadow-2xl p-1.5 z-50 space-y-1"
                    >
                      <div className="px-2.5 py-1 text-[10px] font-mono tracking-wider text-zinc-500 uppercase border-b border-white/5 mb-1">
                        Select Theme
                      </div>
                      {themes.map((t) => {
                        const isActive = theme === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              onThemeChange(t.id);
                              setThemeMenuOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isActive 
                                ? 'bg-white/5 text-white' 
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={`w-3.5 h-3.5 rounded-full border border-white/10 ${t.color}`} />
                              <span>{t.label}</span>
                            </div>
                            {isActive && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="relative overflow-hidden group px-4 py-1.5 rounded-lg border border-red-500/30 bg-red-950/15 hover:bg-red-900/25 text-xs font-semibold text-red-300 flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">Hire Joel</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Hamburger button for dropdown menu on rescaling and smaller screens */}
          <div className="flex xl:hidden items-center gap-2.5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-900/60 hover:bg-white/10 text-zinc-200 transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-cyan-400" />
              ) : (
                <Menu className="w-4 h-4 text-zinc-300" />
              )}
              <span className="text-xs font-medium tracking-wide">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu on Rescaling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop to close when clicking outside */}
            <div 
              className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-30 xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden relative z-40 border-b border-white/10 bg-[#070b19]/95 backdrop-blur-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`flex items-center justify-between px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                        isActive 
                          ? 'text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-500' 
                          : 'text-zinc-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                    </a>
                  );
                })}

                {/* Theme Selector in dropdown */}
                <div className="pt-3 pb-2 border-t border-white/5 px-2 mt-2">
                  <div className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase mb-2 flex items-center gap-1.5">
                    <Palette className="w-3 h-3 text-cyan-400" />
                    <span>Theme</span>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                    {themes.map((t) => {
                      const isActive = theme === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => onThemeChange(t.id)}
                          className={`flex flex-col items-center gap-1 py-1.5 px-1 rounded-lg border transition-all cursor-pointer ${
                            isActive 
                              ? 'bg-white/10 border-cyan-500/50 text-white' 
                              : 'bg-slate-900/40 border-white/5 text-zinc-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className={`w-3 h-3 rounded-full border border-white/10 ${t.color}`} />
                          <span className="text-[9px] font-medium">{t.label.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 px-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-xs font-semibold text-white transition-all cursor-pointer shadow-md"
                  >
                    <span>Hire Joel</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
