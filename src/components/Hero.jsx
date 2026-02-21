import React from 'react'

const Hero = () => {
  return (
    <div>
    <section className="min-h-screen px-6 pt-32 pb-16 text-white flex flex-col items-center">
      
      {/* HERO TITLE */}
      <h1 className="text-center mt-7 text-6xl font-bold leading-tight max-w-5xl">
        Bridging Rural Healthcare Gaps Using{" "}
        <span className="bg-linear-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
          Agentic AI
        </span>
      </h1>

      {/* HERO IMAGE */}
            <button className="mt-12 px-8 py-4 
                   backdrop-blur-lg 
                   bg-white/10 
                   border border-white/20 
                   rounded-2xl 
                   text-white font-semibold 
                   tracking-wide 
                   shadow-xl 
                   hover:bg-white/20 
                   hover:scale-105 
                   transition-all duration-300">
                Get Started
            </button>

      {/* BOTTOM SECTION */}
      <div className="mt-16 w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT PARAGRAPH */}
        <p className=" text-gray-300 leading-relaxed">
          Our solution introduces an AI-powered healthcare assistant that acts as a first-level triage system. It analyzes patient 
symptoms, medical history, and reports to determine possible conditions,
urgency level, and the appropriate specialist 
required all within minutes.
        </p>

        {/* RIGHT TRUST STAT */}
        <div className="text-center md:text-right">
          <h2 className="text-5xl font-bold">1+ Years</h2>
          <p className="text-gray-400 mt-2">
            Advancing AI Healthcare Innovation
          </p>
        </div>

      </div>

    </section>
    </div>
  )
}

export default Hero
