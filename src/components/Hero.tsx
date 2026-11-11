import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Send, X, FileText, Lock } from 'lucide-react';
import Magnetic from './Magnetic';
import { HERO_DATA } from '../data';
import { downloadProfessionalCV } from '../utils/pdfGenerator';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Mouse-following glow coordinate tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    downloadProfessionalCV();
  };

  const openConfirmModal = () => {
    setPassword('');
    setPasswordError('');
    setShowConfirmModal(true);
  };

  const handleConfirmDownload = () => {
    if (password.trim() === '31415') {
      handleDownloadCV();
      setShowConfirmModal(false);
      setPassword('');
      setPasswordError('');
    } else {
      setPasswordError('Access Denied: Invalid Personnel Passcode');
    }
  };

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.6,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      }
    }
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "ease-in-out"
      }
    }
  };

  const words = HERO_DATA.headline.split(" ");

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#070b19] bg-grid-pattern"
    >
      {/* Floating abstract glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-cyan-900/15 blur-[130px] animate-blob-1 -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-sky-900/15 blur-[120px] animate-blob-2 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[25rem] h-[25rem] rounded-full bg-red-900/10 blur-[100px] animate-blob-3 -z-10 pointer-events-none" />

      {/* Mouse-following glowing orb spotlight */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none -z-10 hidden sm:block"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transition: 'left 0.1s ease-out, top 0.1s ease-out'
        }}
      />

      {/* Geometric Ambient Frame Accents */}
      <div className="absolute top-10 left-10 w-24 h-24 border-l border-t border-sky-500/10 rounded-tl-3xl pointer-events-none hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-r border-b border-sky-500/10 rounded-br-3xl pointer-events-none hidden lg:block" />

      {/* Decorative vertical rails (Vercel-esque) */}
      <div className="absolute left-[5%] top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none hidden xl:block" />
      <div className="absolute right-[5%] top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none hidden xl:block" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Creative Developer Live Status Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-md text-xs font-mono tracking-wide mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 transition-all duration-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-zinc-300 font-sans font-medium text-xs">
              CREATIVE DEVELOPER <span className="text-zinc-600">/</span> FULL-STACK ENGINEER
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              AVAILABLE 2026
            </span>
          </motion.div>

          {/* Monumental Name Typography with Kinetic Character Stagger */}
          <div className="overflow-hidden mb-3">
            <motion.h1 
              variants={itemVariants}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-white font-sans uppercase selection:bg-cyan-500 selection:text-black drop-shadow-2xl flex flex-wrap justify-center items-center"
            >
              {Array.from(HERO_DATA.name).map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 80, opacity: 0, rotateZ: 4 }}
                  animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + index * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.08, 
                    color: '#38bdf8',
                    transition: { duration: 0.2 } 
                  }}
                  className={`inline-block cursor-default select-none ${char === ' ' ? 'w-4 sm:w-8' : ''}`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Animated Sub-Headline with Typewriter and dynamic colored accent */}
          <motion.div 
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-xl md:text-2xl font-bold tracking-[0.2em] bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent font-sans uppercase mb-6 flex flex-wrap justify-center items-center"
          >
            {words.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.35em] py-1">
                {Array.from(word).map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={letterVariants}
                    className="inline-block hover:text-white transition-colors"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
            <motion.span
              variants={cursorVariants}
              animate="blinking"
              className="inline-block w-[3px] h-[1.1em] bg-cyan-400 shrink-0 self-center rounded-xs ml-1"
            />
          </motion.div>

          {/* Precision Bio statement */}
          <motion.p 
            variants={itemVariants}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-10 text-balance"
          >
            {HERO_DATA.intro}
          </motion.p>

          {/* Magnetic Action Buttons with Kinetic Hover Glow */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center w-full"
          >
            <Magnetic range={70} strength={0.4}>
              <button 
                onClick={() => handleScrollTo('projects')}
                data-cursor-label="VIEW"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-400 hover:from-cyan-400 hover:to-sky-400 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2.5 hover:scale-[1.04] active:scale-[0.98] transition-all cursor-pointer group tracking-wide"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Magnetic>

            <Magnetic range={70} strength={0.4}>
              <button 
                onClick={openConfirmModal}
                data-cursor-label="CV"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/15 hover:border-cyan-400/60 bg-slate-900/60 hover:bg-slate-900/90 text-sm font-semibold text-zinc-100 hover:text-white flex items-center justify-center gap-2 hover:scale-[1.04] active:scale-[0.98] transition-all cursor-pointer group backdrop-blur-md shadow-lg shadow-black/30"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-cyan-400" />
                <span>DOWNLOAD CV</span>
              </button>
            </Magnetic>

            <Magnetic range={70} strength={0.4}>
              <button 
                onClick={() => handleScrollTo('contact')}
                data-cursor-label="TALK"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-sm font-semibold text-zinc-400 hover:text-white flex items-center justify-center gap-2 hover:scale-[1.04] active:scale-[0.98] transition-all cursor-pointer backdrop-blur-sm"
              >
                <Send className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                <span>LET'S CONNECT</span>
              </button>
            </Magnetic>
          </motion.div>

          {/* Interactive Creative Developer Metrics Strip */}
          <motion.div 
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full max-w-3xl text-left"
          >
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm group">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block group-hover:text-cyan-400 transition-colors">Specialization</span>
              <span className="text-sm sm:text-base font-bold text-white font-sans mt-0.5 block">Creative Engineering</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm group">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block group-hover:text-cyan-400 transition-colors">Shipped Work</span>
              <span className="text-sm sm:text-base font-bold text-white font-sans mt-0.5 block">12+ Production Apps</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm group">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block group-hover:text-amber-400 transition-colors">Club Leadership</span>
              <span className="text-sm sm:text-base font-bold text-white font-sans mt-0.5 block">STAHIZA President</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm group">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block group-hover:text-emerald-400 transition-colors">Tech Hub</span>
              <span className="text-sm sm:text-base font-bold text-white font-sans mt-0.5 block">Kampala, Uganda 🇺🇬</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Polite Download CV Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-amber-500/20 bg-[#020410] p-6 shadow-2xl shadow-amber-500/5 text-left z-10"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500 via-amber-500 to-red-500" />
              
              {/* Close Button */}
              <button
                onClick={() => setShowConfirmModal(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4 mt-2">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white tracking-wide font-sans flex items-center gap-2">
                    <span>Authorized Download Only</span>
                  </h3>
                  <p className="mt-2 text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                    Access to Atamba Joel's professional CV is restricted to authorized personnel. Please enter the required security passcode to proceed with the download.
                  </p>
                </div>
              </div>

              {/* Password Input Field */}
              <div className="mt-5 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-2.5">
                <label className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                  Security Passcode
                </label>
                <div className="relative">
                  <input
                    type="password"
                    maxLength={10}
                    placeholder="•••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (passwordError) setPasswordError('');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleConfirmDownload();
                      }
                    }}
                    className="w-full px-3 py-2 text-sm text-white placeholder-zinc-700 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all font-mono text-center tracking-[0.25em]"
                    autoFocus
                  />
                </div>
                <AnimatePresence mode="wait">
                  {passwordError ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-400 text-xs font-medium flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      {passwordError}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-end gap-3 border-t border-white/5 pt-4">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-zinc-400 hover:text-white bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDownload}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-xs font-bold text-black hover:scale-[1.02] transition-all cursor-pointer shadow-lg shadow-amber-500/10"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unlock & Download</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-3 bg-zinc-700 rounded-full"
        />
      </div>
    </section>
  );
}
