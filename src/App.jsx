import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

// Component Imports
import Navbar from './components/Navbar'
import NeuralCursor from './components/NeuralCursor'
import Loader from './components/Loader'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Page7 from './components/Page7'
import Page8 from './components/Page8'
import Page9 from './components/Page9'
import Page10Footer from './components/Page10Footer'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Initialize Lenis (Smooth Scroll)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothTouch: false,
    });

    // 2. The Animation Frame Loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Scroll Management: Lock scroll while loading
    if (isLoading) {
      lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis.start();
      document.body.style.overflow = 'auto';
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="bg-black min-h-screen selection:bg-teal-500/30">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* --- THE LOADER --- */
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          /* --- THE MAIN SITE --- */
          <motion.div 
            key="main-content"
            className="main-content-fade" /* This class is in your index.css */
          >
            {/* Global Interactive Elements */}
            <NeuralCursor />
            <Navbar />
            
            {/* Page Sections with Anchor IDs */}
            <section id="about">
              <Page1 />
            </section>
            
            <Page2 />
            
            <section id="features">
              <Page3 />
            </section>
            
            <Page4 />
            
            <section id="roadmap">
              <Page6 />
            </section>
            
            <Page7 />
            <Page8 />
            
            {/* Pricing/Revenue Section */}
            <Page5 />
            
            <section id="contact">
              <Page9 />
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App