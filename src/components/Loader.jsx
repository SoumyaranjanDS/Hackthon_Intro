import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 800); // Slightly longer pause for the exit animation
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 2; 
      });
    }, 120);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
      className="fixed inset-0 z-9999 bg-[#020202] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. NEURAL CORE VISUAL */}
      <div className="relative flex items-center justify-center">
        
        {/* Outer Pulsing Rings */}
        {[1, 1.2, 1.5].map((s, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: s * 1.5, opacity: [0, 0.2, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
            className="absolute w-64 h-64 border border-teal-500/30 rounded-full"
          />
        ))}

        {/* The Central Neural SVG */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="relative z-10 w-32 h-32 md:w-48 md:h-48 text-teal-500"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <line 
                key={deg}
                x1="100" y1="100" 
                x2={100 + 80 * Math.cos(deg * Math.PI / 180)} 
                y2={100 + 80 * Math.sin(deg * Math.PI / 180)} 
                stroke="currentColor" strokeWidth="0.5" opacity="0.4"
              />
            ))}
          </svg>
        </motion.div>

        {/* 2. PERCENTAGE COUNTER (Smaller, Minimalist) */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <span className="text-white font-mono text-2xl font-black tracking-tighter">
            {progress}<span className="text-teal-500 text-xs">%</span>
          </span>
        </div>
      </div>

      {/* 3. STATUS LOGS */}
      <div className="mt-24 text-center">
        <motion.p 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[10px] font-mono text-teal-500 tracking-[0.6em] uppercase mb-2"
        >
          {progress < 30 ? "Initializing Neural Mesh..." : 
           progress < 70 ? "Syncing Medical Knowledge..." : 
           "Optimizing Agentic Triage..."}
        </motion.p>
        <div className="w-48 h-px bg-white/10 mx-auto overflow-hidden">
          <motion.div 
            className="h-full bg-teal-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 4. BACKGROUND NOISE (For Texture) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </motion.div>
  );
};

export default Loader;