'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Rocket, Award, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const timelineData = [
  {
    year: 'Oct 2025 - Present',
    title: 'IT and Communications Officer (Volunteer)',
    organization: 'Impact Hub Lusaka',
    description: 'Providing frontline IT support across Windows/Linux environments. Developed a custom Learning Management System (LMS) and managed M365 ecosystems, network infrastructure, and automation.',
    icon: Shield,
    category: 'Work',
  },
  {
    year: 'Mar 2025 - Jan 2026',
    title: 'IT Support Officer (Part-Time)',
    organization: 'UN Youth Chapter Cavendish',
    description: 'Managed AV systems, communication tools (Teams/Zoom/Outlook), and internal digital platforms. Increased user engagement by 70% through technical training initiatives.',
    icon: Users,
    category: 'Work',
  },
  {
    year: 'Mar 2024 - Dec 2024',
    title: 'Graphic Designer & Web Developer (Intern)',
    organization: 'Law Bridge Zambia',
    description: 'Led technical development of the organizational website using HTML/CSS/JS. Authored technical guides and spearheaded viral content creation reaching 1M+ views.',
    icon: Rocket,
    category: 'Work',
  },
  {
    year: 'Jun 2021 - Present',
    title: 'Founder – IT Technician & Designer',
    organization: 'Zion Visuals',
    description: 'Directing end-to-end digital services for small businesses, including system maintenance, security updates, and comprehensive brand identity design.',
    icon: Briefcase,
    category: 'Work',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-6 block">Career Journey</span>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-none tracking-tighter text-slate-900">
            Professional <span className="text-slate-400">Experience.</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl">
          {/* Subtle Vertical Axis */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 md:left-[2.25rem] top-0 bottom-0 w-px bg-slate-100 origin-top" 
          />

          <div className="space-y-32">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.title + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 }
                  }
                }}
                className="relative pl-12 md:pl-24 group"
              >
                {/* Marker */}
                <motion.div 
                  variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
                  className="absolute left-3 md:left-[2rem] top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover:border-indigo-600 transition-colors duration-500 z-10" 
                />

                <div className="asymmetric-grid items-start gap-12">
                  <div className="asymmetric-item-left space-y-6">
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                       <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{item.year}</span>
                       <h4 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors duration-500">{item.title}</h4>
                       <p className="text-sm font-black text-indigo-600 uppercase tracking-widest">{item.organization}</p>
                    </motion.div>
                    <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-sm text-slate-500 leading-relaxed font-medium max-w-xl">
                      {item.description}
                    </motion.p>
                  </div>

                  <motion.div 
                    variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                    className="asymmetric-item-right hidden md:block"
                  >
                     <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 opacity-50 group-hover:opacity-100 transition-opacity hover-lift">
                        <item.icon size={24} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                     </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
