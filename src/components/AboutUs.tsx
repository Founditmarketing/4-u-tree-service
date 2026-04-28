/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.0]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section ref={sectionRef} id="about" className="relative bg-brand-black flex flex-col lg:flex-row overflow-hidden">

      {/* Left: Parallax image */}
      <div className="lg:w-1/2 relative overflow-hidden min-h-[320px] lg:min-h-[640px]">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale: imgScale, y: imgY }}
        >
          <img
            src="/team.jpg"
            alt="4-U Tree Service Crew in Action"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/20 via-transparent to-brand-black/30" />

        {/* Floating badge */}
        <motion.div
          className="absolute top-8 left-8 bg-white p-5 shadow-2xl z-20 corner-cut"
          initial={{ opacity: 0, x: -30, y: -10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-brand-black italic leading-none">20+</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-red mt-1">Years Experience</span>
          </div>
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-brand-black/80 backdrop-blur-sm border-t border-brand-border/50 flex z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: 'NE Alabama', label: 'Primary Market' },
            { value: 'Licensed', label: '& Insured' },
            { value: '500+', label: 'Jobs Done' },
          ].map((stat, i) => (
            <div key={i} className={`flex-1 py-5 px-4 text-center ${i < 2 ? 'border-r border-brand-border/40' : ''}`}>
              <span className="block text-white font-black italic text-lg">{stat.value}</span>
              <span className="block text-gray-500 text-[9px] uppercase tracking-widest font-bold">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: Content */}
      <motion.div
        className="lg:w-1/2 flex items-center p-12 lg:p-20 bg-brand-elevated border-l border-brand-border relative overflow-hidden"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ghost text background */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 font-black italic text-[14rem] leading-none stroke-text opacity-30 select-none pointer-events-none whitespace-nowrap">
          4-U
        </div>

        {/* Red glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/4 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-xl relative z-10">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-[11px] font-black uppercase tracking-[0.4em]">Our Core Identity</span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-8">
            <motion.h2
              className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none"
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              NOT JUST TREE SERVICE. <br />
              <span className="text-brand-red">PROPERTY DEFENSE.</span>
            </motion.h2>
          </div>

          {/* Body copy */}
          <div className="space-y-5 text-gray-400 font-medium text-base leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              4-U Tree Service is a fully licensed and insured property protection specialist based in Fort Payne, AL. We don't just "cut trees"—we mitigate liability and defend structures through professional land management.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              Our mission is simple: To provide the most professional, safest, and most dependable tree services in Northeast Alabama. Whether it's clearing 50 acres of land or removing a hazardous oak from a residential rooftop, our crew executes with precision.
            </motion.p>

            {/* Stat grid */}
            <motion.div
              className="pt-8 grid grid-cols-2 gap-6 border-t border-brand-border mt-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="group relative p-4 border border-brand-border hover:border-brand-red/50 transition-colors duration-300">
                <span className="text-white font-black italic block mb-1 uppercase text-sm">Service Reach</span>
                <p className="text-sm text-gray-500">NE Alabama &amp; Louisiana Parish Relief Operations.</p>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="group relative p-4 border border-brand-border hover:border-brand-red/50 transition-colors duration-300">
                <span className="text-white font-black italic block mb-1 uppercase text-sm">Credentials</span>
                <span className="text-sm text-gray-500 block">Fully Licensed, Bonded, and Insured Specialists.</span>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
