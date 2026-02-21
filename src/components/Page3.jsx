import React, { useEffect, useRef } from "react";

const SolutionNode = ({ item, index }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("scale-100", "opacity-100");
      });
    }, { threshold: 0.5 });
    if (nodeRef.current) observer.observe(nodeRef.current);
  }, []);

  return (
    <div id="features"
      ref={nodeRef}
      className={`absolute w-64 md:w-72 p-6 rounded-[30px] backdrop-blur-2xl bg-white/3 border border-white/10 
                 scale-50 opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
                 hover:bg-white/8 hover:border-teal-400/50 group cursor-crosshair z-30 shadow-2xl ${item.coords}`}
    >
      {/* Dynamic ID Tag */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-mono text-teal-500 tracking-tighter">NODE_0{index + 1}</span>
        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shadow-[0_0_10px_#14b8a6]" />
      </div>
      
      <h3 className="text-lg font-bold mb-2 tracking-tight group-hover:text-teal-300 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
        {item.desc}
      </p>

      {/* Internal "Scanning" light sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[30px]">
        <div className="absolute -top-full left-0 w-full h-1/2 bg-linear-to-b from-transparent via-teal-500/10 to-transparent group-hover:animate-scan" />
      </div>
    </div>
  );
};

const Page3Elite = () => {
  const containerRef = useRef(null);

  const solutions = [
    { title: "Predictive Triage", desc: "AI instantly maps symptoms to specialist domains.", coords: "top-[5%] left-[5%] md:left-[15%]" },
    { title: "Dynamic Routing", desc: "Orchestrating patient-doctor matching in real-time.", coords: "top-[15%] right-[5%] md:right-[15%]" },
    { title: "Crisis Detection", desc: "Automated emergency triggers for critical signals.", coords: "bottom-[20%] right-[5%] md:right-[10%]" },
    { title: "Neural Summaries", desc: "Unstructured data turned into clinical insights.", coords: "bottom-[5%] left-[5%] md:left-[10%]" },
    { title: "Agentic Reports", desc: "Closing the loop with AI-verified medical docs.", coords: "top-[45%] left-[2%] md:left-[5%]" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mx', `${moveX}px`);
        containerRef.current.style.setProperty('--my', `${moveY}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-225 md:h-screen w-full bg-[#010101] text-white overflow-hidden flex items-center justify-center">
      
      {/* ===== CRAZY BACKGROUND: THE NEURAL MESH ===== */}
      <div className="absolute inset-0 z-0">
        {/* Warp-Grid that reacts to mouse */}
        <div className="absolute inset-0 opacity-[0.15] scale-110"
             style={{ 
               transform: 'translate(var(--mx), var(--my))',
               backgroundImage: `radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)`,
               backgroundSize: '40px 40px' 
             }} />
        
        {/* Deep Atmosphere Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#0d3d38_0%,transparent_60%)] opacity-40 animate-pulse" />
      </div>

      {/* ===== THE CORE: TEAM ELITE ===== */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Orbital Rings */}
        <div className="absolute w-75 h-75 md:w-125 md:h-125 border border-teal-500/10 rounded-full animate-spin-slow" />
        <div className="absolute w-100 h-100 md:w-175 md:h-175 border border-white/5 rounded-full animate-spin-reverse" />

        <div className="relative p-12 rounded-full bg-black border-2 border-teal-500/50 shadow-[0_0_80px_rgba(20,184,166,0.3)] group transition-all duration-500 hover:shadow-[0_0_120px_rgba(20,184,166,0.5)]">
          <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping opacity-30" />
          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-teal-500">
              TEAM <br/> ELITE
            </h2>
            <div className="mt-2 h-1 w-full bg-teal-500/20 rounded-full overflow-hidden">
              <div className="h-full bg-teal-500 w-full animate-loading-bar" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== THE NODES: Strategic Positioning ===== */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="relative w-full h-full pointer-events-auto">
          {solutions.map((item, i) => (
            <SolutionStep key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* ===== TEXT FILLER: EMPTY SPACE RESOLUTION ===== */}
      <div className="absolute top-12 left-12 opacity-20 pointer-events-none">
         <p className="font-mono text-[10px] tracking-[0.5em] text-teal-500 uppercase">System: Operational</p>
         <p className="font-mono text-[10px] tracking-[0.5em] text-gray-500 uppercase">Architecture: Decentralized</p>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -100%; }
          100% { top: 200%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 35s linear infinite; }
        .animate-scan { animation: scan 1.5s ease-in-out infinite; }
        .animate-loading-bar { animation: loading-bar 2s linear infinite; }
      `}</style>
    </section>
  );
};

// Internal sub-component for the solution step to handle its own logic
const SolutionStep = ({ item, index }) => (
  <SolutionNode item={item} index={index} />
);

export default Page3Elite;