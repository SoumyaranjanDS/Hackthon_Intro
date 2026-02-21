import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Page6CTA = () => {
  // Smooth Mouse Tracking for Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized movement (-0.5 to 0.5)
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* ===== LAYER 0: THE NEURAL SPHERE ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Field Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08)_0%,transparent_70%)]" />
        
        {/* Animated Rings with Variable Speeds */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ width: 600 + i * 200, height: 600 + i * 200 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-teal-500/20 rounded-full"
          />
        ))}
      </div>

      {/* ===== LAYER 1: CONTENT WITH PARALLAX ===== */}
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h2 
            style={{ x: dx, y: dy }}
            className="text-teal-500 font-mono tracking-[1em] uppercase text-[10px] mb-8"
          >
            The Vision [cite: 223]
          </motion.h2>

          <motion.div 
            style={{ x: dx, y: dy }}
            className="relative"
          >
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter text-white leading-[0.8] mb-12">
              EVERY VILLAGE.<br/>
              <span className="text-transparent bg-clip-text bg-linear-to-b from-teal-300 via-teal-500 to-emerald-700 italic">CONNECTED.</span>
            </h1>
          </motion.div>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            "From symptoms to specialist — powered by intelligent autonomy."
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* CTA Button with Magnetic Glow */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-14 py-6 bg-teal-500 text-black font-black uppercase tracking-widest rounded-full transition-all"
            >
              <div className="absolute inset-0 rounded-full bg-teal-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              <span className="relative z-10">Launch Mission</span>
            </motion.button>

            {/* Team Meta Data from PPT */}
            <div className="text-left font-mono text-[9px] text-gray-500 border-l border-white/10 pl-8 space-y-1">
              <p className="text-teal-500/80 font-bold uppercase">Lead: {`Subhransu Sekhar Mishra`} </p>
              <p>INSTITUTE: {`Trident Academy of Creative Technology`}</p>
              <p>HACKATHON: {`TRITHON 2026`}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== LAYER 2: SMOOTH INFINITE TECH MARQUEE ===== */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <div className="flex w-[200%] gap-20 py-4 opacity-20 hover:opacity-50 transition-opacity pointer-events-none">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-20 items-center text-[11px] font-mono tracking-[0.5em] uppercase text-white"
          >
            {/* Tech Stack from PPT  */}
            <span>React.js</span> <span>Node.js</span> <span>GPT-4.1</span> 
            <span>Gemini 1.5 Pro</span> <span>MongoDB Atlas</span> <span>Tailwind</span>
            <span>Framer Motion</span> <span>Firebase</span> <span>AWS EC2</span>
            {/* Duplicate for seamless loop */}
            <span>React.js</span> <span>Node.js</span> <span>GPT-4.1</span> 
            <span>Gemini 1.5 Pro</span> <span>MongoDB Atlas</span> <span>Tailwind</span>
            <span>Framer Motion</span> <span>Firebase</span> <span>AWS EC2</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page6CTA;