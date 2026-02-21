import React, { useEffect, useRef } from "react";

const HeroPage = () => {
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Reveal animations
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });
    elements.forEach((el) => observer.observe(el));

    // Mouse Spotlight Effect
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      containerRef.current.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div  id="about" ref={containerRef} className="relative min-h-screen bg-[#060606] text-white overflow-hidden font-sans selection:bg-teal-500/30">
      
      {/* ===== THE "SECUNET" GRID & SPOTLIGHT ===== */}
      <div className="absolute inset-0 z-0">
        {/* Thick Dark Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{ 
            backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Dynamic Central Spotlight */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(20, 184, 166, 0.15) 0%, transparent 50%)`
          }}
        ></div>
        
        {/* Fixed Hero Glow (Future.ai Style) */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none"></div>
      </div>

      {/* ===== HERO CONTENT ===== */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 px-6">
        
        {/* Subtle Welcome Tag (Future.ai Style) */}
        <div className="reveal opacity-0 translate-y-4 transition-all duration-700 m-8">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] tracking-[0.2em] uppercase text-gray-400 backdrop-blur-md">
             Welcome to the Future of Health
          </div>
        </div>

        {/* MAIN TITLE (SecuNet/Future.ai Hybrid) */}
        <h1 ref={heroRef} className="reveal opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-center text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] max-w-5xl">
          Bridging Rural Healthcare <br /> 
          <span className="text-gray-500">Gaps Using </span> 
          <span className="relative inline-block italic">
            Agentic AI
            <svg className="absolute -bottom-2 left-0 w-full h-5 text-teal-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </h1>

        <p className="reveal opacity-0 translate-y-8 transition-all duration-1000 delay-400 mt-10 text-gray-400 text-center max-w-xl text-lg leading-relaxed">
          The first-level triage system engineered to identify urgency and route patients 
          to specialist doctors <span className="text-teal-400 italic">within minutes.</span>
        </p>

        {/* BUTTON GROUP (SecuNet Style) */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-1000 delay-600 mt-12 flex flex-col sm:flex-row gap-4 items-center">
          <button className="group relative px-10 py-4 bg-teal-500 text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(20,184,166,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              Get Started <span className="text-xl">→</span>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          
          <button className="px-10 py-4 text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2">
            Learn more <span>↓</span>
          </button>
        </div>

        {/* BOTTOM PARTNER / STATS LINE (Future.ai Style) */}
        <div className="reveal opacity-0 transition-all duration-1000 delay-1000 mt-10 w-full max-w-5xl p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-12 opacity-40 grayscale">
            <span className="font-bold text-xl tracking-tighter italic">TRIDENT</span>
            <span className="font-bold text-xl tracking-tighter italic">TEAM_ELITE</span>
            <span className="font-bold text-xl tracking-tighter italic">AI_AGENTIC</span>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="h-12 w-px bg-white/10 hidden md:block"></div>
             <div className="text-right">
                <div className="text-2xl font-bold">1+ Years</div>
                <div className="text-[10px] text-teal-500/60 font-mono tracking-tighter uppercase">Advancing Innovation</div>
             </div>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL STYLES & ANIMATIONS ===== */}
      <style>{`
        .reveal { transition: all 1s cubic-bezier(0.17, 0.55, 0.55, 1); }
        .reveal.active { opacity: 1 !important; transform: translateY(0) !important; }
        
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: subtleFloat 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HeroPage;