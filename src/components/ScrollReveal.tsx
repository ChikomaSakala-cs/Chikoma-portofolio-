'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  once?: boolean;
}

const ScrollReveal = ({ 
  children, 
  width = "100%", 
  className, 
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const getInitialPosition = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 30 };
      case 'down': return { opacity: 0, y: -30 };
      case 'left': return { opacity: 0, x: 30 };
      case 'right': return { opacity: 0, x: -30 };
      default: return { opacity: 0, y: 30 };
    }
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        initial={getInitialPosition()}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : getInitialPosition()}
        transition={{ 
          duration, 
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
