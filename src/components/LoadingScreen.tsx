import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PenTool, 
  Code2, 
  CheckCircle2
} from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const designStages = [
  { phase: "01", title: "Tokens & Grid" },
  { phase: "02", title: "Vector Systems" },
  { phase: "03", title: "Component DOM" },
  { phase: "04", title: "Canvas Ready" }
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stageIndex, setStageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // Fast, responsive 1.8s sequence

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / duration, 1);
      const currentProgress = Math.floor(pct * 100);

      setProgress(currentProgress);

      const nextStage = Math.min(
        Math.floor(pct * designStages.length),
        designStages.length - 1
      );
      setStageIndex(nextStage);

      if (pct >= 1) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 500);
        }, 200);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  const currentStage = designStages[stageIndex];

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 overflow-hidden pointer-events-auto select-none bg-[#090d16] font-sans text-zinc-200 flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Subtle Designer Dot Matrix Blueprint Canvas Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

          {/* Ambient Design Studio Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />

          {/* Minimal Top Brand Bar */}
          <div className="relative z-20 w-full max-w-md mx-auto flex items-center justify-between text-xs font-mono text-zinc-500">
            <span className="text-zinc-400 font-semibold tracking-wider">ATAMBA JOEL</span>
            <span className="text-cyan-400/80 text-[10px] tracking-widest uppercase">UI/UX DEVELOPER</span>
          </div>

          {/* CENTER ARTBOARD STAGE */}
          <div className="relative z-20 w-full max-w-sm mx-auto flex flex-col items-center justify-center my-auto">
            {/* The Precision Artboard Frame */}
            <div className="relative w-64 sm:w-72 p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-cyan-500/25 shadow-2xl flex flex-col items-center">
              {/* Corner Handles */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-cyan-400 rounded-sm" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-sm" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-cyan-400 rounded-sm" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-sm" />

              {/* Central Vector Geometric Monogram with Pen Tool Path */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Rotating Vector Node Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30"
                />

                {/* Central Brand Badge */}
                <div className="relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-950/80 to-slate-900/90 border border-cyan-400/40 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-xl font-black tracking-tight text-white font-sans">
                    AJ
                  </span>
                </div>

                {/* Animated Pen Tool Cursor */}
                <motion.div
                  animate={{
                    x: [16, 32, 18, -16, -26, 16],
                    y: [-22, 10, 28, 22, -12, -22],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute z-20 pointer-events-none text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                >
                  <PenTool className="w-3.5 h-3.5 fill-cyan-400/30" />
                </motion.div>
              </div>

              {/* Clean Color Palette Dots */}
              <div className="mt-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.7)]" />
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              </div>
            </div>

            {/* Design Pipeline Progress */}
            <div className="mt-7 w-full max-w-xs flex flex-col items-center">
              <div className="w-full">
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-cyan-400 font-medium tracking-wider uppercase">{currentStage.title}</span>
                  <span className="text-zinc-500">{progress}%</span>
                </div>
                
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Dynamic Status Text */}
              <div className="mt-3 flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                {progress === 100 ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Ready</span>
                  </>
                ) : (
                  <>
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Loading workspace...</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Minimal Bottom Footer */}
          <div className="relative z-20 w-full max-w-md mx-auto flex items-center justify-center text-[10px] font-mono text-zinc-600">
            <span>PORTFOLIO // 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
