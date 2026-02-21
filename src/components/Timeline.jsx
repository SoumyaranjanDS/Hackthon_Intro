import { useEffect } from "react";

function Timeline() {

  useEffect(() => {
    const steps = document.querySelectorAll(".timeline-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-step");
          }
        });
      },
      { threshold: 0.3 }
    );

    steps.forEach((step) => observer.observe(step));
  }, []);

  return (
    <div className="mt-40 relative">

      {/* Divider */}
      <div className="w-full h-px bg-linear-to-r 
                      from-transparent via-emerald-500/30 to-transparent mb-24" />

      {/* Title */}
      <div className="text-center mb-24 relative">
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-125 h-50 
                          bg-emerald-400/10 blur-3xl rounded-full" />
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold">
          How It Works – Step by Step
        </h2>
        <p className="text-gray-400 mt-4">
          A structured AI-driven healthcare workflow designed for rural communities.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">

        {/* Animated Vertical Line */}
        <div className="timeline-line absolute left-1/2 top-0 
                        transform -translate-x-1/2 w-px h-full" />

        {/* STEP 1 */}
        <div className="timeline-step mb-28 flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 md:pr-16 text-right">
            <h3 className="text-xl font-medium">01. Data Collection Agent</h3>
            <p className="text-gray-400 mt-3">
              Captures patient symptoms in regional languages and operates
              efficiently even in low-connectivity rural regions.
            </p>
          </div>
          <div className="timeline-dot" />
          <div className="md:w-1/2" />
        </div>

        {/* STEP 2 */}
        <div className="timeline-step mb-28 flex md:flex-row flex-col items-center">
          <div className="md:w-1/2" />
          <div className="timeline-dot" />
          <div className="md:w-1/2 md:pl-16 text-left">
            <h3 className="text-xl font-medium">02. Diagnosis Agent</h3>
            <p className="text-gray-400 mt-3">
              Processes collected data using AI models to determine probable
              conditions with intelligent risk assessment.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="timeline-step mb-28 flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 md:pr-16 text-right">
            <h3 className="text-xl font-medium">03. Assistance Agent</h3>
            <p className="text-gray-400 mt-3">
              Connects patients with verified healthcare providers and enables
              secure remote consultations.
            </p>
          </div>
          <div className="timeline-dot" />
          <div className="md:w-1/2" />
        </div>

        {/* STEP 4 */}
        <div className="timeline-step flex md:flex-row flex-col items-center">
          <div className="md:w-1/2" />
          <div className="timeline-dot" />
          <div className="md:w-1/2 md:pl-16 text-left">
            <h3 className="text-xl font-medium">04. Monitoring Agent</h3>
            <p className="text-gray-400 mt-3">
              Tracks patient recovery, sends reminders, and maintains
              encrypted digital health records.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Timeline;