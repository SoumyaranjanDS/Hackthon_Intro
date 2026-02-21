import React from "react";
import { motion } from "framer-motion";

const Page7Validation = () => {
  const reviews = [
    { name: "Dr. Arpan Mohanty", role: "Cardiologist", text: "The triage accuracy for cardiovascular symptoms is surprisingly precise. It saves hours of misdirected consultations.", rating: "4.9/5" },
    { name: "Rajesh K.", role: "Rural Patient", text: "I finally understood which doctor to visit without traveling 100km just for an inquiry. The voice feature is a lifesaver.", rating: "5.0/5" },
    { name: "Sarah L.", role: "Health Tech Reviewer", text: "The most seamless integration of Agentic AI in a low-bandwidth environment I've seen this year.", rating: "4.8/5" }
  ];

  return (
    <section className="relative min-h-screen bg-[#020202] text-white py-32 px-6 overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-20">
          <h2 className="text-teal-500 font-mono tracking-[0.5em] text-[10px] uppercase mb-4">Validation Hub</h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">
            Proven <br/><span className="text-gray-700">Precision.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: THE ACCURACY METER */}
          <div className="lg:col-span-1 p-10 rounded-[40px] bg-white/3 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-8xl font-black text-teal-500 mb-2">99%</div>
              <p className="text-xl font-bold uppercase tracking-widest text-white/80">Diagnostic Match</p>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                Our core engine has been stress-tested against 10,000+ clinical scenarios to ensure zero-fail triage.
              </p>
            </div>
            <div className="mt-12 p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-center font-mono text-[10px] text-teal-500">
              VERIFIED BY TEAM ELITE LABS
            </div>
          </div>

          {/* RIGHT COLUMN: REVIEWS MESH */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[35px] bg-white/2 border border-white/5 backdrop-blur-md flex flex-col justify-between hover:border-teal-500/30 transition-all group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, star) => (
                        <div key={star} className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      ))}
                    </div>
                    <span className="text-xs font-mono text-gray-600">{rev.rating}</span>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed mb-8">"{rev.text}"</p>
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-teal-400 transition-colors">{rev.name}</p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{rev.role}</p>
                </div>
              </motion.div>
            ))}

            {/* LIVE RATING BOX */}
            <div className="p-8 rounded-[35px] bg-teal-500 flex flex-col items-center justify-center text-black text-center">
               <p className="font-black text-6xl tracking-tighter">4.9</p>
               <p className="font-mono text-[10px] uppercase tracking-widest font-bold">Overall Pilot Rating</p>
               <div className="mt-4 w-full h-1 bg-black/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    className="h-full bg-black"
                  />
               </div>
            </div>
          </div>

        </div>

        {/* BOTTOM PROOF STRIP */}
        <div className="mt-12 py-8 border-y border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="font-black text-2xl tracking-tighter text-white uppercase italic">ISO:27001</div>
           <div className="font-black text-2xl tracking-tighter text-white uppercase italic">HIPAA READY</div>
           <div className="font-black text-2xl tracking-tighter text-white uppercase italic">GDPR SECURE</div>
           <div className="font-black text-2xl tracking-tighter text-white uppercase italic">NHA COMPLIANT</div>
        </div>
      </div>
    </section>
  );
};

export default Page7Validation;