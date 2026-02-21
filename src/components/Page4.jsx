import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Page4UltraElite = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const features = [
    { title: "Voice-Neural AI", desc: "NLP optimized for 12+ regional dialects with 98% intent recognition.", stat: "0.2s Latency", color: "#14b8a6" },
    { title: "Edge Deployment", desc: "Proprietary compression allows full operation on legacy 2G networks.", stat: "Offline First", color: "#0d9488" },
    { title: "Predictive Triage", desc: "Clinical-grade algorithms matching patients to specialists in seconds.", stat: "99.4% Accuracy", color: "#0f766e" },
    { title: "Quantum Security", desc: "End-to-end AES-256-GCM encryption for absolute patient privacy.", stat: "Zero-Knowledge", color: "#115e59" }
  ];

  const metrics = [
    { label: "Deployment Speed", val: "5", unit: "Min", trend: "↓ 80%" },
    { label: "Patient Reach", val: "1.2", unit: "M+", trend: "↑ 12%" },
    { label: "Cost Reduction", val: "65", unit: "%", trend: "↓ 40%" },
    { label: "Doctor Efficiency", val: "4.2", unit: "x", trend: "↑ 300%" }
  ];

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#020202] text-white py-32 px-6 overflow-hidden">
      
      {/* ===== LAYER 0: THE BIOMETRIC BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#0d3d38_0%,transparent_50%)] opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#042f2e_0%,transparent_50%)] opacity-20" />
        {/* Scanning Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ===== HEADER: MINIMALIST & BOLD ===== */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-px bg-teal-500" />
              <span className="text-teal-500 font-mono text-[10px] tracking-[0.6em] uppercase">Impact Analytics</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase italic">
              Elite <br/> <span className="text-gray-800">Performance.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-right max-w-70 text-sm leading-relaxed border-r border-teal-500/30 pr-6">
            Our agentic infrastructure is not just a tool—it's a decentralized medical revolution.
          </p>
        </div>

        {/* ===== THE KINETIC INTERFACE ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: INTERACTIVE NAV (The "Neurons") */}
          <div className="lg:col-span-4 space-y-4">
            {features.map((item, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActiveTab(i)}
                className={`relative p-8 rounded-[30px] cursor-pointer transition-all duration-500 border-2 ${activeTab === i ? 'bg-white/5 border-teal-500/40 shadow-[0_0_40px_rgba(20,184,166,0.1)]' : 'border-transparent opacity-40 hover:opacity-100'}`}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] text-teal-600 tracking-tighter">SPEC_0{i+1}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.stat}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                </div>
                {activeTab === i && (
                  <motion.div layoutId="glow" className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-transparent rounded-[30px] -z-10" />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: THE CONSOLE (The "Core") */}
          <div className="lg:col-span-8 sticky top-32">
            <div className="relative aspect-16/10 w-full bg-[#080808] rounded-[40px] border border-white/5 p-12 overflow-hidden shadow-2xl">
              
              {/* Dynamic Visualization Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col justify-between relative z-10"
                >
                  <div>
                    <h4 className="text-5xl font-black mb-6 text-teal-400 italic tracking-tighter uppercase">{features[activeTab].title}</h4>
                    <p className="text-gray-400 text-xl max-w-xl leading-relaxed">{features[activeTab].desc}</p>
                  </div>
                  
                  {/* Digital Pulse UI */}
                  <div className="mt-auto pt-10 border-t border-white/10 flex justify-between items-end">
                    <div className="space-y-2">
                       <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Signal Processing</p>
                       <div className="flex gap-1 h-8 items-center">
                          {[...Array(24)].map((_, i) => (
                            <motion.div 
                              key={i}
                              animate={{ height: [4, Math.random() * 24 + 4, 4] }}
                              transition={{ repeat: Infinity, duration: 0.8 + Math.random() }}
                              className="w-1 bg-teal-500/40 rounded-full"
                            />
                          ))}
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-5xl font-black text-white">{features[activeTab].stat.split(' ')[0]}</p>
                       <p className="text-[10px] font-mono text-teal-600 uppercase tracking-widest">Metric Status</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#14b8a608_0%,transparent_70%)] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ===== THE METRIC COUNTER: NO OVERLAP RESOLUTION ===== */}
        <div className="mt-32 pt-20 border-t border-white/5">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {metrics.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">{m.label}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-black group-hover:text-teal-500 transition-colors">{m.val}</span>
                    <span className="text-teal-600 font-bold text-xl">{m.unit}</span>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-500/5 border border-teal-500/20 text-teal-500 font-mono text-[9px]">
                    {m.trend}
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default Page4UltraElite;