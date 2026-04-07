'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      setSuccess(true);
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="max-w-7xl mx-auto asymmetric-grid items-start gap-24"
      >
        {/* Left: Strategic Context */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="asymmetric-item-left space-y-16"
        >
          <div className="space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Get In Touch</span>
            <h3 className="text-5xl md:text-7xl font-display font-black leading-none tracking-tighter text-slate-900">
              Let's <span className="text-slate-400">Work</span> Together.
            </h3>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
              Available for freelance projects, digital marketing strategy, and high-impact web development. Let's create something amazing.
            </p>
          </div>

          <div className="space-y-8">
             <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                   <Mail size={18} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Inquiries</p>
                   <a href="mailto:sakalajrchikoma@gmail.com" className="text-lg font-black text-slate-900 hover:text-indigo-600 transition-colors tracking-tight">sakalajrchikoma@gmail.com</a>
                </div>
             </motion.div>

             <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                   <Phone size={18} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Line</p>
                   <a href="tel:+260974039280" className="text-lg font-black text-slate-900 hover:text-indigo-600 transition-colors tracking-tight">+260 974 039 280</a>
                </div>
             </motion.div>
          </div>

          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex gap-4">
             {[
               { icon: Github, href: 'https://github.com/ChikomaSakala', label: 'GitHub' },
               { icon: Linkedin, href: 'https://zm.linkedin.com/in/chikoma-sakala-8ab64429b', label: 'LinkedIn' },
             ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-white hover:border-indigo-100 transition-all shadow-sm">
                   <social.icon size={20} />
                </a>
             ))}
          </motion.div>
        </motion.div>

        {/* Right: Minimalist Form */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="asymmetric-item-right p-12 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }} className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                <input required name="user_name" type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm font-bold focus:border-indigo-600 focus:outline-none transition-colors transition-all" />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }} className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Email</label>
                <input required name="user_email" type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm font-bold focus:border-indigo-600 focus:outline-none transition-colors transition-all" />
              </motion.div>
            </div>

            <motion.div variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }} className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
              <input required name="subject" type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm font-bold focus:border-indigo-600 focus:outline-none transition-colors transition-all" />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }} className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
              <textarea required name="message" rows={5} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm font-bold focus:border-indigo-600 focus:outline-none transition-colors transition-all resize-none" />
            </motion.div>

            <motion.button
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              disabled={loading}
              className="w-full py-6 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-4 group"
            >
              {loading ? 'Transmitting Data...' : (
                <>Send Message <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></>
              )}
            </motion.button>

            {success && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-[10px] font-black text-indigo-600 uppercase tracking-widest pt-4">Transmission Successful. Strategic review in progress.</motion.p>
            )}

            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-red-500 font-bold text-sm">Communication failed. Please try again.</motion.p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
