import React, { useEffect, useRef, useState } from "react";

/* =========================
   Magnetic Card Component
========================= */
const MagneticCard = ({ item, index }) => {
  const cardRef = useRef(null);
  // Track mouse position and visibility in state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Setup Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      width: rect.width,
      height: rect.height,
    });
  };

  // Calculate rotation logic
  const rotateX = isHovered 
    ? ((mousePos.y - mousePos.height / 2) / (mousePos.height / 2)) * -10 
    : 0;
  const rotateY = isHovered 
    ? ((mousePos.x - mousePos.width / 2) / (mousePos.width / 2)) * 10 
    : 0;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-112.5 transition-all duration-1000 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        perspective: "1000px" 
      }}
    >
      <div 
        className="relative h-full w-full bg-[#0a0a0a] border border-white/10 rounded-[40px] p-10 overflow-hidden shadow-2xl group transition-all duration-200 ease-linear"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          willChange: "transform",
        }}
      >
        {/* Radial Glow Effect */}
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/20 blur-[100px] transition-opacity duration-300 z-0"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start">
            <div className="px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-[9px] font-mono text-teal-500 tracking-widest uppercase">
              {item.tag}
            </div>
            <div className="text-4xl font-black text-white/5">{item.id}</div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4 tracking-tighter group-hover:text-teal-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              {item.desc}
            </p>
            <div className="mt-8 h-px w-full bg-white/10 overflow-hidden">
              <div 
                className={`h-full bg-teal-500 transition-all duration-700 ease-in-out ${isHovered ? 'w-full' : 'w-0'}`} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   Main Page Component
========================= */
const Page2FinalSolution = () => {
  const problems = [
    { id: "01", title: "Specialist Void", tag: "ACCESS", desc: "Rural zones lack direct pathways to specialized medical expertise, creating a fatal wait-time gap." },
    { id: "02", title: "Digital Friction", tag: "LITERACY", desc: "Complex UI barriers prevent the tech-underserved from accessing modern telehealth tools." },
    { id: "03", title: "Travel Penalty", tag: "ECONOMY", desc: "Consultations require urban travel, costing families weeks of wages and immense physical strain." },
    { id: "04", title: "Silent Escalation", tag: "DIAGNOSIS", desc: "Ignored minor symptoms evolve into critical emergencies due to a lack of early intelligent triage." },
  ];

  return (
    <section className="relative py-32 bg-[#020202] text-white overflow-hidden selection:bg-teal-500/30">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0d3d38_0%,transparent_70%)] opacity-20" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-teal-500" />
            <span className="text-teal-400 font-mono text-xs tracking-[0.4em] uppercase">
              Rural Healthcare Breakdown
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">
            The Structural <br />
            <span className="text-gray-700 italic">Inequality.</span>
          </h2>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <MagneticCard key={problem.id} item={problem} index={i} />
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 border border-white/5 rounded-[40px] bg-white/1">
          {[
            { label: "Patient Ratio", val: "1:10,000" },
            { label: "Avg. Travel", val: "250 KM" },
            { label: "Wage Loss", val: "₹1,200/day" },
            { label: "Emergency Lag", val: "12 Hours" },
          ].map((stat, i) => (
            <div key={i} className="p-10 text-center border-r border-white/5 last:border-0">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-4xl font-bold tracking-tighter text-teal-500">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page2FinalSolution;