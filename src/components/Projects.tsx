'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Activity, GraduationCap, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Bwino Health Ecosystem',
    role: 'Product Architect',
    context: 'Traditional healthcare delivery in Zambia suffers from fragmentation. Patients lack a unified digital touchpoint for diagnostics and medication.',
    impact: 'Streamlined medication access across 50+ partner pharmacies and provided 24/7 remote patient monitoring via AI diagnostics.',
    tech: ['Next.js', 'AI Diagnostics', 'Product Strategy', 'Healthcare Ops'],
    icon: Activity,
    link: '#',
    github: '#',
  },
  {
    title: 'Enterprise LMS Strategy',
    role: 'Lead Developer',
    context: 'Impact Hub Lusaka required a high-performance internal platform to manage cross-disciplinary training programs without manual overhead.',
    impact: 'Automated student progress tracking for 500+ users, reducing administrative workflow by 60%.',
    tech: ['Full-Stack', 'User Architecture', 'Analytics', 'Enterprise UX'],
    icon: GraduationCap,
    link: '#',
    github: '#',
  },
  {
    title: 'Cleanlink Zambia Initiative',
    role: 'Tech Mentor',
    context: 'Empowering young women in tech while solving a critical environmental challenge through data-driven waste management.',
    impact: 'Global finalist project that proved the intersection of youth mentorship and scalable environmental technology.',
    tech: ['Social Impact', 'Mobile Strategy', 'Mentorship', 'Environment Tech'],
    icon: Cpu,
    link: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 text-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-6 block">My Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-none tracking-tighter text-slate-900 mb-10">
            Projects <span className="text-slate-400">Done.</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto group border-b border-slate-100 pb-20 last:border-0"
            >
              <div className="space-y-12">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-500 shadow-sm">
                    <project.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{project.title}</h4>
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">{project.role}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Context</h5>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">{project.context}</p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Impact</h5>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-10">
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.tech.map(t => (
                      <span 
                        key={t} 
                        className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-12">
                    <a href={project.github} className="text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest flex items-center gap-2">
                      <Github size={18} /> Source
                    </a>
                    <a href={project.link} className="text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest flex items-center gap-2">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">More to explore</p>
          <a
            href="https://github.com"
            className="px-12 py-6 rounded-full bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 hover-lift inline-block"
          >
            Explore More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
