import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';

const NeuralCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Core Position Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Smoothed Values with slightly different physics for "Lag" effect
  // Outer Ring: More damping for a heavy, fluid feel
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 150 });
  
  // Inner Dot: Snappier and faster
  const dotX = useSpring(mouseX, { damping: 20, stiffness: 400 });
  const dotY = useSpring(mouseY, { damping: 20, stiffness: 400 });

  // 3. Velocity-based stretching
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);
  
  // Combine velocities to calculate overall speed
  const scrollVelocity = useTransform([velocityX, velocityY], ([vx, vy]) => 
    Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2))
  );

  // Map speed to scale and rotation (stretches the ring as you move fast)
  const scaleX = useTransform(scrollVelocity, [0, 3000], [1, 1.8]);
  const scaleY = useTransform(scrollVelocity, [0, 3000], [1, 0.6]);
  const rotate = useTransform([velocityX, velocityY], ([vx, vy]) => 
    (Math.atan2(vy, vx) * 180) / Math.PI
  );

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", moveMouse);
    
    // Add listeners for all interactive elements to trigger "Expand" effect
    const interactables = document.querySelectorAll('a, button, input, .cursor-pointer');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`
        body { cursor: none !important; }
        a, button, input, textarea { cursor: none !important; }
      `}</style>

      {/* OUTER RING: The Fluid Layer */}
      <motion.div 
        className="fixed top-0 left-0 pointer-events-none z-999999"
        style={{ 
          x: ringX, 
          y: ringY, 
          translateX: "-50%", 
          translateY: "-50%",
          rotate: rotate,
          scaleX: isHovered ? 2.5 : scaleX,
          scaleY: isHovered ? 2.5 : scaleY,
        }}
      >
        <div className={`w-10 h-10 border transition-colors duration-300 rounded-full ${isHovered ? 'border-teal-400 bg-teal-400/10' : 'border-teal-500/40'}`} />
      </motion.div>

      {/* INNER DOT: The Precise Layer */}
      <motion.div 
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-999999 shadow-[0_0_10px_#fff]"
        style={{ 
          x: dotX, 
          y: dotY, 
          translateX: "-50%", 
          translateY: "-50%",
          scale: isHovered ? 0 : 1
        }}
      />
      
      {/* MAGNETIC CORE BLUR */}
      <motion.div 
        className="fixed top-0 left-0 w-24 h-24 bg-teal-500/10 blur-3xl rounded-full pointer-events-none z-999998"
        style={{ 
          x: ringX, 
          y: ringY, 
          translateX: "-50%", 
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default NeuralCursor;