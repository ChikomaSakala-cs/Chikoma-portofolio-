'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, ShieldCheck, PenTool, Code } from 'lucide-react';

const skillGroups = [
  {
    title: 'IT Infrastructure',
    icon: Server,
    skills: ['Windows/Linux Admin', 'Networking (TCP/IP)', 'Hardware Diagnostics', 'LAN Troubleshooting', 'Active Directory', 'Virtualization'],
  },
  {
    title: 'Software & Scripting',
    icon: Code,
    skills: ['Python/Bash Automation', 'HTML5/CSS3/JavaScript', 'Next.js', 'React', 'TypeScript', 'PHP/MySQL', 'Prisma', 'System Architecture'],
  },
  {
    title: 'Security & Strategy',
    icon: ShieldCheck,
    skills: ['Cybersecurity Awareness', 'Endpoint Security', 'Data Confidentiality', 'ICT Standards', 'ITIL/ITSM Practices', 'Asset Management'],
  },
  {
    title: 'Creative & Social',
    icon: PenTool,
    skills: ['Digital Marketing', 'Graphic Design', 'UI/UX Design', 'Figma', 'Adobe Creative Cloud', 'Content Creation (Viral Strategy)'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-48 px-6 bg-slate-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-6 block">Technical Arsenal</span>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-none tracking-tighter text-slate-900">
            Strategic <span className="text-slate-400">Toolkit</span> & Systems.
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="group p-12 bg-white hover:bg-slate-50 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 mb-10 transition-all duration-500">
                <group.icon size={24} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 group-hover:text-slate-900 transition-colors">
                {group.title}
              </h4>
              
              <div className="flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }}
                    className="text-xs font-bold text-slate-500 group-hover:text-slate-800 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
