'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if loading has been seen in session to improve dev loop (optional, but let's always show it elegantly)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        // Smooth random progression
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100vh',
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 bg-brand-green text-brand-cream"
        >
          {/* Top Navbar Placeholder */}
          <div className="flex justify-between items-center w-full">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-sans font-semibold">
              Dominion Ventures
            </span>
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-brand-cream/60">
              © 2026
            </span>
          </div>

          {/* Middle Branding Reveal */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Elegant SVG Logo animation placeholder */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8 w-24 h-24 flex items-center justify-center border border-brand-gold/20 rounded-full bg-brand-green-dark"
            >
              <span className="font-serif text-3xl font-bold text-brand-gold">DV</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif text-brand-gold mb-2 font-medium tracking-wide"
            >
              DOMINION VENTURES
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm md:text-md font-sans tracking-[0.2em] uppercase text-brand-cream/80"
            >
              Healthy Snacking, Reimagined
            </motion.p>
          </div>

          {/* Bottom Progress Tracker */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="w-full md:w-1/3">
              <div className="h-[2px] w-full bg-brand-cream/10 relative overflow-hidden">
                <div
                  className="h-full bg-brand-gold transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-6xl md:text-8xl font-light text-brand-gold">
                {progress}
              </span>
              <span className="font-sans text-lg text-brand-cream/60 uppercase tracking-widest">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
