'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Shield, Rocket, Lightbulb, Users, GraduationCap, Award, Lock, Zap } from 'lucide-react';

const mindset = [
  {
    title: 'Enterprise Support',
    description: '2+ years of expertise in diagnosing hardware/software faults and managing enterprise ICT operations.',
    icon: Shield,
  },
  {
    title: 'Digital Solutions',
    description: 'Bridging technical support with creative web development and digital marketing strategies.',
    icon: Lightbulb,
  },
  {
    title: 'User Confidentiality',
    description: 'Committed to cybersecurity awareness and maintaining absolute user data confidentiality.',
    icon: Lock,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.2
              }
            }
          }}
          className="asymmetric-grid items-center"
        >
          {/* Left: Foundation & Governance */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="asymmetric-item-left space-y-16"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">My Background</span>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight">
                Combining Creative <span className="text-slate-500">Development</span> and Digital Strategy.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 font-black text-xs uppercase tracking-widest">
                  <Shield size={16} className="text-indigo-600" /> Infrastructure
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Microsoft IT Support Specialist with 2+ years of enterprise experience. Managing Active Directory, network integrity, and mission-critical hardware diagnostics.
                </p>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 font-black text-xs uppercase tracking-widest">
                  <Award size={16} className="text-indigo-600" /> Compliance
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Member of ICTAZ. Committed to absolute data confidentiality, ICT standards, and ensuring system uptime through rigorous maintenance.
                </p>
              </motion.div>
            </div>

            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row gap-8 items-center hover-lift transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                <GraduationCap size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">Academic Rigor</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Bachelor of Computer Science from Cavendish University. Specialized in Healthcare IT Support via Johns Hopkins University.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Leadership & Impact */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="asymmetric-item-right space-y-12 lg:pl-10"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Social Impact</span>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Mentorship & Sustainable Tech</h3>
            </div>

            <div className="space-y-10">
              <motion.div variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }} className="group flex gap-6">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
                  <Users size={20} />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 mb-1 tracking-tight">Technovation Girls Mentor</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Leading young innovators in building Cleanlink Zambia—a bridge between tech and environment.</p>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }} className="group flex gap-6">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 mb-1 tracking-tight">Smart Solar Edu-hubs</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Architecting digital solutions for sustainable education hubs under Youthteammup.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
