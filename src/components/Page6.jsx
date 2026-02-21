import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Page6Roadmap = () => {
  const containerRef = useRef(null);
  
  // Tracking scroll for the "Neural Path" line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const roadmap = [
    { 
      phase: "01", 
      time: "0-6 Months", 
      title: "MVP & Core Triage", 
      details: ["AI Medical Triage launch", "Beta testing with local clinics", "Initial commission revenue"],
      gradient: "from-teal-500/20",
      accent: "#14b8a6"
    },
    { 
      phase: "02", 
      time: "6-12 Months", 
      title: "Revenue Stabilization", 
      details: ["Doctor subscription tiers", "Expansion of specialist categories", "Increased paid conversions"],
      gradient: "from-emerald-500/20",
      accent: "#10b981"
    },
    { 
      phase: "03", 
      time: "18-24 Months", 
      title: "Global Scaling", 
      details: ["SaaS licensing for hospitals", "API integration services", "Regional expansion to Tier-2 cities"],
      gradient: "from-blue-500/20",
      accent: "#3b82f6"
    }
  ];

  return (
    <section id="roadmap" ref={containerRef} className="relative min-h-screen bg-[#020202] text-white py-32 px-6 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-teal-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-teal-500" />
            <span className="font-mono text-teal-500 tracking-[0.5em] uppercase text-xs">
              Strategic Roadmap
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
            The <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-600">Evolution</span>
          </h2>
        </div>

        <div className="relative">
          {/* THE NEURAL PATH LINE (Desktop Only) */}
          <div className="hidden md:block absolute left-6 top-0 w-0.5 h-full bg-white/5">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-linear-to-b from-teal-500 via-emerald-500 to-blue-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]" 
            />
          </div>

          <div className="space-y-32">
            {roadmap.map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row items-start gap-12 group">
                
                {/* PHASE INDICATOR PIN */}
                <div className="relative z-20">
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     style={{ borderColor: item.accent }}
                     className="w-12 h-12 rounded-full bg-black border-2 flex items-center justify-center font-black text-sm z-20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
                   >
                     {item.phase}
                   </motion.div>
                   {/* Pulse Effect */}
                   <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ backgroundColor: item.accent }}
                    className="absolute inset-0 rounded-full -z-10"
                   />
                </div>

                {/* CONTENT CARD */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex-1 p-8 md:p-12 rounded-4xl border border-white/5 bg-linear-to-br ${item.gradient} to-transparent backdrop-blur-3xl hover:border-white/20 transition-all duration-500 group/card relative overflow-hidden`}
                >
                  {/* Subtle hover gradient flare */}
                  <div className="absolute -inset-1 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{item.title}</h3>
                    <span className="font-mono text-teal-400 text-xs tracking-widest bg-teal-500/10 px-4 py-2 rounded-full border border-teal-500/20">
                      {item.time}
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.details.map((point, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                        className="flex items-start gap-3 text-gray-400 text-sm md:text-base leading-relaxed"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page6Roadmap;