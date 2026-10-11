import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, MessageSquare, ArrowUp, Copy, Check } from 'lucide-react';
import Magnetic from './Magnetic';

import logo1Img from '../assets/images/logo1.png';

export default function Footer() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(`${label} copied to clipboard!`);
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <footer className="py-12 bg-[#070b19] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-slate-900/60 p-0.5 shrink-0">
            <img src={logo1Img} alt="Joel Atamba Logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-left space-y-0.5">
            <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider font-semibold">
              JOEL ATAMBA
            </p>
            <p className="text-zinc-600 text-[10px] font-mono tracking-wider">
              © 2026 • All rights reserved
            </p>
          </div>
        </div>

        {/* Center: Contact Info & Social handles */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-3 items-center">
            <a 
              href="mailto:hasty0joel@gmail.com" 
              className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-400/40 text-zinc-400 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-900/90 transition-all cursor-pointer shadow-sm"
              title="Email Direct"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/joel-atamba" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-400/40 text-zinc-400 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-900/90 transition-all cursor-pointer shadow-sm"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/joel-atamba" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-400/40 text-zinc-400 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-900/90 transition-all cursor-pointer shadow-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/256760672702" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-400/40 text-zinc-400 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-900/90 transition-all cursor-pointer shadow-sm"
              title="WhatsApp Link"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] sm:text-xs font-mono">
            <div className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors">
              <span className="text-zinc-600 font-bold">MAIL:</span>
              <span className="text-zinc-400">hasty0joel@gmail.com</span>
              <button 
                onClick={() => handleCopy('hasty0joel@gmail.com', 'hasty0joel@gmail.com')} 
                className="p-1 rounded hover:bg-white/5 text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Copy Email"
              >
                <Copy className="w-3 h-3" />
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors">
              <span className="text-zinc-600 font-bold">WHATSAPP:</span>
              <span className="text-zinc-400">+256 760 672 702</span>
              <button 
                onClick={() => handleCopy('+256760672702', '+256 760 672 702')} 
                className="p-1 rounded hover:bg-white/5 text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Copy WhatsApp Link"
              >
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Back to Top */}
        <div className="flex justify-center">
          <Magnetic>
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-zinc-400 hover:text-cyan-300 transition-colors flex items-center justify-center cursor-pointer shadow-lg"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </Magnetic>
        </div>

      </div>

      {/* Floating Success Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border border-emerald-500/20 bg-[#081510] text-emerald-400 shadow-2xl shadow-emerald-500/10 max-w-sm"
          >
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-zinc-200 tracking-wide font-sans">Success!</p>
              <p className="text-[10px] font-mono text-zinc-400 mt-0.5 truncate">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
