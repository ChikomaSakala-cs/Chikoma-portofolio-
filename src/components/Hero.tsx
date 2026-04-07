'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 bg-background overflow-hidden text-center">
      {/* Narrative Background - Re-centered Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-50/30 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-slate-900 leading-[0.9] text-balance">
            Web Developer, <span className="text-indigo-600">Digital Marketing</span> & Graphic Design.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto text-balance">
            Crafting high-impact digital experiences with over <span className="text-slate-900 font-bold">2+ years of experience</span>. I blend technical development, strategic marketing, and premium design to help brands stand out.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a
              href="#projects"
              className="px-10 py-5 bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-white border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-[0.2em] rounded-full hover:border-indigo-600 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
