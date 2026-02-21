import React from "react";
import { motion } from "framer-motion";

const Page10Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Roadmap", "Pricing", "AI Triage"],
    Company: ["About Us", "Contact", "Privacy Policy", "Terms of Service"],
    Connect: ["Twitter", "LinkedIn", "GitHub", "Discord"]
  };

  return (
    <footer className="relative bg-[#020202] pt-32 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Subtle Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none pointer-events-none">
        <h1 className="text-[15vw] font-black text-white/2 uppercase tracking-tighter">
          TEAM_ELITE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center font-black text-black">
                TE
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic text-white">
                TEAM<span className="text-teal-500">ELITE</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed mb-8">
              Revolutionizing healthcare triage with agentic AI. 
              Efficiency for hospitals, accessibility for patients.
            </p>
            <div className="flex gap-4">
              {/* Simple Social Circles */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-teal-500/50 hover:bg-teal-500/5 transition-all cursor-pointer group">
                  <div className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-teal-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal-500 mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">
            © {currentYear} Team ELITE nad Trithon. All Rights Reserved.
          </p>
          <div className="flex gap-8">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">System Status: Operational</span>
             </div>
             <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="text-gray-500 hover:text-teal-500 transition-colors text-[10px] font-mono uppercase tracking-widest"
             >
               Back to Top ↑
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Page10Footer;