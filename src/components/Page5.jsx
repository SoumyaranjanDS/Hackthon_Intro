import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-teal-400 mr-3 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const RevenueModelPage = () => {
  const [activeTab, setActiveTab] = useState('patients'); // 'patients' or 'b2b'

  // Data based on your PPT Phase 4 (Revenue) and Phase 5 (Scaling)
  const pricingData = {
    patients: [
      {
        title: "AI Triage",
        price: "Free",
        desc: "Essential for rural accessibility",
        button: "Start Triage",
        features: ["Voice-based symptom analysis", "Regional language support", "Emergency detection", "Basic condition mapping", "Health report generation"],
        popular: false
      },
      {
        title: "Consultation",
        price: "₹199",
        unit: "/session",
        desc: "Direct specialist routing",
        button: "Book Doctor",
        features: ["AI-structured case summary", "Priority doctor matching", "Tele-consultation link", "Digital prescriptions", "Follow-up reminders"],
        popular: true
      },
      {
        title: "Doctor Pro",
        price: "₹1,499",
        unit: "/mo",
        desc: "For individual specialists",
        button: "Join Network",
        features: ["85% payout commission", "Priority visibility", "Advanced AI diagnostics", "Patient history vault", "Automated billing"],
        popular: false
      },
      {
        title: "Family Care",
        price: "₹499",
        unit: "/mo",
        desc: "Holistic family monitoring",
        button: "Subscribe",
        features: ["Unlimited AI Triage", "24/7 Emergency priority", "Family health dashboard", "Discounted consultations", "Monthly health trends"],
        popular: false
      }
    ],
    b2b: [
      {
        title: "Hospital SaaS",
        price: "₹9,999",
        unit: "/mo",
        desc: "Full triage infrastructure",
        button: "Get Demo",
        features: ["OPD load management", "Automated patient intake", "Internal doctor dashboard", "Hospital-wide analytics", "Custom EHR integration"],
        popular: true
      },
      {
        title: "API Access",
        price: "₹4,999",
        unit: "/mo",
        desc: "Agentic AI for your app",
        button: "View Docs",
        features: ["Symptom analysis API", "Medical LLM endpoints", "Regional translation layer", "High-concurrency support", "Dedicated API key"],
        popular: false
      },
      {
        title: "White Label",
        price: "Custom",
        desc: "Branded health solutions",
        button: "Contact Sales",
        features: ["Custom UI/UX branding", "Dedicated server instance", "On-premise deployment", "Staff training & support", "Regulatory compliance docs"],
        popular: false
      },
      {
        title: "Research Hub",
        price: "Tiered",
        desc: "Data-driven insights",
        button: "Inquire",
        features: ["Anonymized data access", "Rural disease trends", "Predictive outbreak maps", "Demographic analytics", "Govt. reporting tools"],
        popular: false
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#060d0e] text-white font-sans relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-teal-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Navigation */}
      {/* <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.4)] group-hover:rotate-12 transition-transform">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
          </div>
          <span className="text-2xl font-bold tracking-tighter">AGENTIC<span className="text-teal-400">HEALTH</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {["Overview", "Technology", "Revenue Model", "Team"].map((item) => (
            <a key={item} href="#" className="hover:text-teal-400 transition-colors">{item}</a>
          ))}
        </div>
        <button className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-all">Demo</button>
      </nav> */}

      {/* Hero Header */}
      <header className="relative z-10 text-center pt-16 pb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold tracking-tight mb-6"
        >
          Sustainable <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-emerald-500">Growth</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Bridging the rural healthcare gap through a scalable, multi-tier monetization model designed for impact.
        </p>

        {/* Toggle Switch */}
        <div className="relative inline-flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
          <motion.div
            className="absolute bg-teal-500 rounded-xl h-[calc(100%-12px)] top-1.5"
            initial={false}
            animate={{ 
              x: activeTab === 'patients' ? 0 : 160,
              width: activeTab === 'patients' ? 160 : 160 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <button 
            onClick={() => setActiveTab('patients')}
            className={`relative z-10 w-40 py-2.5 text-sm font-bold transition-colors ${activeTab === 'patients' ? 'text-black' : 'text-gray-400'}`}
          >
            Patients & Doctors
          </button>
          <button 
            onClick={() => setActiveTab('b2b')}
            className={`relative z-10 w-40 py-2.5 text-sm font-bold transition-colors ${activeTab === 'b2b' ? 'text-black' : 'text-gray-400'}`}
          >
            Hospitals & B2B
          </button>
        </div>
      </header>

      {/* Pricing Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {pricingData[activeTab].map((plan, idx) => (
              <motion.div
                key={`${activeTab}-${plan.title}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className={`relative group flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
                  plan.popular 
                  ? 'bg-linear-to-b from-teal-500/20 to-transparent border-teal-500/50 shadow-[0_20px_50px_rgba(20,184,166,0.1)]' 
                  : 'bg-[#111C1E]/50 border-white/5 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                <div className="mb-8">
                  <h3 className="text-gray-400 font-medium mb-4">{plan.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    {plan.unit && <span className="text-gray-500 text-sm">{plan.unit}</span>}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>
                </div>

                <button className={`w-full py-3 rounded-xl font-bold text-sm mb-8 transition-all ${
                  plan.popular 
                  ? 'bg-teal-400 text-black hover:bg-teal-300 shadow-lg shadow-teal-500/20' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}>
                  {plan.button}
                </button>

                <div className="grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/5 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <p className="text-teal-400 font-bold mb-1">TEAM ELITE</p>
            <p className="text-xs text-gray-500">Trident Academy of Creative Technology</p>
          </div>
          <div className="flex gap-4">
            {["Subhransu", "Soumyaranjan", "Seshadri", "Abinash", "Snehamayee", "Swayam Pragyan"].map(name => (
              <span key={name} className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-teal-400 cursor-default transition-colors">{name}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-tight">Developed by Soumya</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RevenueModelPage;