/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

/* ── Kinetic word: each letter animates in sequentially ── */
function KineticWord({ word, delay = 0, className = '' }: { word: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`} aria-label={word}>
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0, rotateX: -40 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', transformOrigin: 'bottom center' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}


export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-start pt-[172px] md:pt-[202px] pb-28 overflow-hidden bg-brand-black scanlines"
    >
      {/* ── Parallax background ── */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{ y: imgY }}>
          <img
            src="/treework4.jpg"
            alt="Tree Removal Operation"
            className="w-full h-full object-cover"
            style={{ opacity: 0.65 }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-brand-black z-10"
          style={{ opacity: overlayOpacity }}
        />
        {/* Gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-transparent z-20" />
      </div>

      {/* ── Static ambient glow ── */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-brand-red/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-brand-red/5 blur-[120px] rounded-full" />
      </div>

      {/* ── Animated geometric accent lines ── */}
      <div className="absolute inset-0 z-[6] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[35%] left-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '60%', transformOrigin: 'left' }}
        />
        <motion.div
          className="absolute bottom-[25%] right-0 h-px bg-gradient-to-l from-transparent via-brand-red/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '40%', transformOrigin: 'right' }}
        />
        {/* Vertical accent */}
        <motion.div
          className="absolute left-[8%] top-0 w-px bg-gradient-to-b from-transparent via-brand-red/25 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '70%', transformOrigin: 'top' }}
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-30 w-full"
        style={{ y: contentY }}
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="bg-brand-red h-px"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <span className="text-brand-red text-[11px] font-black uppercase tracking-[0.5em]">
            Licensed &amp; Insured Full-Service Tree Care
          </span>
        </motion.div>

        {/* Kinetic headline */}
        <h1
          className="font-black text-white leading-[0.92] tracking-tight mb-12 italic uppercase select-none"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', perspective: '800px', letterSpacing: '0.04em' }}
        >
          <div className="block overflow-hidden">
            <KineticWord word="MASTERING" delay={0.3} />
          </div>
          <div className="block overflow-hidden">
            <KineticWord
              word="THE OUTDOORS."
              delay={0.55}
              className="text-brand-red text-glow-red"
            />
          </div>
          <div className="block overflow-hidden">
            <KineticWord word="PROTECTING" delay={0.8} />
          </div>
          <div className="block overflow-hidden">
            <KineticWord word="YOUR PROPERTY." delay={1.05} className="opacity-35" />
          </div>
        </h1>

        {/* Sub-copy */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-14 font-medium max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Northeast Alabama's premier specialist in high-risk removals, land management, and emergency storm response. No excuses. Just professional results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/contact" className="contents">
            <motion.button
              whileHover={{ scale: 1.03, x: 6 }}
              whileTap={{ scale: 0.97 }}
              className="relative bg-brand-red text-white text-center px-12 py-6 font-black uppercase tracking-widest text-sm shadow-2xl shadow-brand-red/40 transition-all flex items-center justify-center gap-4 corner-cut overflow-hidden group"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              <span className="relative z-10">Get A Free Quote</span>
              <motion.span
                className="relative z-10 text-xl"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >→</motion.span>
            </motion.button>
          </Link>

          <motion.a
            whileHover={{ borderColor: 'rgba(211,47,47,0.6)', color: '#fff' }}
            whileTap={{ scale: 0.97 }}
            href="tel:256-996-4740"
            className="relative border border-white/20 text-white text-center px-12 py-6 font-black uppercase tracking-widest text-sm backdrop-blur-sm transition-all flex items-center justify-center gap-4 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
            <span className="relative z-10">24/7 Emergency Relief</span>
          </motion.a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          className="mt-12 flex flex-wrap gap-12 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Completed' },
            { value: '24/7', label: 'Emergency Response' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl font-black text-white italic text-glow-white">{stat.value}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Vertical rail text ── */}



      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-brand-red/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>

      {/* ── Circular Saw ── */}
      <div
        className="absolute top-1/2 right-0 z-[18] pointer-events-none select-none"
        style={{ width: 580, height: 580, transform: 'translate(50%, -50%)' }}
        aria-hidden="true"
      >
        <img
          src="/TheSaw.png"
          alt=""
          style={{ width: '100%', height: '100%', animation: 'spin-saw 9s linear infinite', animationDirection: 'reverse' }}
        />
      </div>
    </section>
  );
}
