import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IMPORTANT: These 'href' values must match the 'id' on your Page components
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Roadmap", href: "#roadmap" }, // Updated to match Page6
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4 } }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-9990 px-4 md:px-8 flex justify-center pointer-events-none">
      <div 
        className={`w-full max-w-6xl pointer-events-auto transition-all duration-500 border border-white/20 flex flex-col
          ${scrolled ? "mt-4 py-2 bg-black/40 backdrop-blur-2xl rounded-2xl md:rounded-full scale-[0.98]" : "mt-8 py-4 bg-white/5 backdrop-blur-md rounded-3xl md:rounded-[2.5rem]"}
          ${isOpen ? "bg-black/90 mt-4 rounded-3xl" : ""}`}
      >
        <div className="flex items-center justify-between px-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-9 h-9 bg-teal-500 rounded-xl flex items-center justify-center font-black text-black text-sm">TE</div>
            <span className="text-xl font-black tracking-tighter uppercase italic text-white">HealthAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-mono uppercase tracking-[0.3em] text-gray-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-teal-400 transition-colors text-[11px]"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-white text-black px-6 py-2 font-black rounded-full text-[10px] hover:bg-teal-500 hover:text-white transition-all">
              GET STARTED
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <motion.div style={{ willChange: "transform, opacity" }} animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white mb-1.5" />
            <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-teal-500 mb-1.5" />
            <motion.div animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="md:hidden overflow-hidden">
              <div className="flex flex-col gap-6 pt-10 pb-8 text-center border-t border-white/10 mt-5">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-lg font-mono tracking-widest text-gray-300 uppercase"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;