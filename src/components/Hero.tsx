/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, CloudLightning, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-start pt-[140px] md:pt-[180px] pb-12 overflow-hidden bg-brand-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-black/60 z-10" />
        <img 
          src="/treework4.png" 
          alt="Tree Removal Operation"
          className="w-full h-full object-cover animate-pulse-slow opacity-60"
        />
        {/* Modern Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-30 w-full mb-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-brand-red" />
            <span className="text-brand-red text-[11px] font-black uppercase tracking-[0.5em]">Licensed & Insured Full-Service Tree Care</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-12 italic uppercase select-none px-2">
            MASTERING <br />
            <span className="text-brand-red drop-shadow-[0_0_30px_rgba(211,47,47,0.4)]">THE OUTDOORS.</span> <br />
            PROTECTING <br />
            <span className="opacity-40">YOUR PROPERTY.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-medium max-w-2xl leading-relaxed">
            Northeast Alabama's premier specialist in high-risk removals, land management, and emergency storm response. No excuses. Just professional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="contents">
              <motion.button 
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-red text-white text-center px-10 py-6 font-black uppercase tracking-widest text-sm shadow-2xl shadow-brand-red/30 transition-all flex items-center justify-center gap-4"
              >
                Get A Free Quote
                <span className="text-xl">→</span>
              </motion.button>
            </Link>
            <motion.a 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              href="tel:256-996-4740"
              className="bg-transparent border border-white/20 text-white text-center px-10 py-6 font-black uppercase tracking-widest text-sm backdrop-blur-sm transition-all flex items-center justify-center gap-4"
            >
              24/7 Emergency Relief
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="absolute right-12 bottom-24 hidden lg:block z-30">
        <div className="flex flex-col gap-24 items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 rotate-90 origin-right whitespace-nowrap">ESTABLISHED IN ALABAMA</span>
          <div className="w-px h-32 bg-brand-border" />
        </div>
      </div>
    </section>
  );
}
