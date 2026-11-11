import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop with fine pointer device
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable or custom cursor target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor-drag], [data-cursor-label]');
      if (interactive) {
        setIsPointer(true);
        const customLabel = interactive.getAttribute('data-cursor-label');
        if (customLabel) {
          setCursorText(customLabel);
        } else if (interactive.hasAttribute('data-cursor-drag')) {
          setCursorText('DRAG');
        } else {
          setCursorText('');
        }
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-cyan-400 mix-blend-difference hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? (cursorText ? 0 : 6) : 6,
          height: isPointer ? (cursorText ? 0 : 6) : 6,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Fluid Trailing Magnetic Ring with optional text label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-[1px] hidden md:flex items-center justify-center font-mono text-[9px] tracking-wider font-bold text-cyan-300 uppercase shadow-[0_0_20px_rgba(6,182,212,0.25)]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorText ? 64 : isPointer ? 48 : 28,
          height: cursorText ? 64 : isPointer ? 48 : 28,
          scale: isClicking ? 0.85 : 1,
          borderColor: isPointer ? 'rgba(6,182,212,0.8)' : 'rgba(6,182,212,0.35)',
          backgroundColor: isPointer ? 'rgba(6,182,212,0.18)' : 'rgba(6,182,212,0.04)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {cursorText && <span>{cursorText}</span>}
      </motion.div>
    </>
  );
}
