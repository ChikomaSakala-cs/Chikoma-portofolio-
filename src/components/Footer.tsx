'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

const Footer = () => {
  const linkedinUrl = "https://zm.linkedin.com/in/chikoma-sakala-8ab64429b";

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 px-6 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="asymmetric-grid gap-16 md:gap-32">
          {/* Brand & Intent */}
          <div className="asymmetric-item-left space-y-12">
            <Link href="/" className="text-2xl font-display font-black tracking-tighter text-slate-900">
              CHIKOMA<span className="text-indigo-600">.</span>
            </Link>
          </div>

          {/* Contact & Card */}
          <div className="asymmetric-item-right space-y-16">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Network</span>
                <ul className="space-y-4">
                  <li><a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest">LinkedIn</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest">GitHub</a></li>
                  <li><a href="mailto:sakalajrchikoma@gmail.com" className="text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest">Email</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</span>
                <ul className="space-y-4">
                  <li><Link href="#about" className="text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest">About</Link></li>
                  <li><Link href="#projects" className="text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest">Work</Link></li>
                  <li><Link href="#contact" className="text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest">Strategy</Link></li>
                </ul>
              </div>
            </div>

            {/* Premium QR Module */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group hover:bg-slate-800 transition-colors duration-500">
               <div className="relative z-10 flex items-center justify-between">
                  <div className="space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Connect Mobile</p>
                     <p className="text-lg font-black tracking-tight">Save Portfolio Contact</p>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                     <QRCodeCanvas 
                        value={linkedinUrl}
                        size={64}
                        level="H"
                        includeMargin={false}
                     />
                  </div>
               </div>
               {/* Accent Gradient */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[60px] translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} CHIKOMA — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Digital Governance</Link>
            <Link href="#" className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
