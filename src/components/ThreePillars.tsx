/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, CalendarCheck, Axe } from 'lucide-react';

const pillars = [
  {
    title: "Safety-Driven",
    desc: "Rigorous planning to protect people and structures. We mitigate risk through technical precision.",
    icon: ShieldCheck,
    num: "01",
  },
  {
    title: "Dependable",
    desc: "We show up when promised. No excuses. Our reliability is the foundation of our business.",
    icon: CalendarCheck,
    num: "02",
  },
  {
    title: "Skilled Professionals",
    desc: "Years of hands-on experience paired with professional-grade arsenal of heavy equipment.",
    icon: Axe,
    num: "03",
  }
];

export default function ThreePillars() {
  return (
    <section id="why" className="py-28 bg-brand-black overflow-hidden relative grid-lines">
      {/* Background red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            className="text-brand-red font-black uppercase tracking-[0.6em] text-[10px] mb-6 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Standard of Excellence
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none"
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              DRIVEN BY <br />
              <span className="text-brand-red text-glow-red">PERFORMANCE.</span>
            </motion.h2>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Ghost number */}
              <div className="absolute -top-8 -left-2 font-black italic text-[7rem] leading-none stroke-text opacity-60 select-none pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-30">
                {pillar.num}
              </div>

              <div className="relative z-10 p-12 bg-brand-elevated border border-brand-border flex flex-col items-start text-left overflow-hidden corner-cut transition-all duration-500 group-hover:border-brand-red/40 group-hover:glow-red">
                {/* Animated fill on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/0 group-hover:from-brand-red/5 group-hover:to-transparent transition-all duration-700" />

                {/* Icon */}
                <motion.div
                  className="mb-10 w-20 h-20 bg-brand-black border border-brand-border flex items-center justify-center relative shadow-2xl group-hover:bg-brand-red transition-colors duration-500"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <pillar.icon size={38} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                  {/* Corner accent */}
                  <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-5 relative z-10">
                  {pillar.title}
                </h3>

                {/* Animated divider */}
                <motion.div
                  className="h-px bg-brand-red mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.4, duration: 0.6 }}
                />

                <p className="text-gray-400 font-medium leading-relaxed relative z-10">
                  {pillar.desc}
                </p>

                {/* Bottom-right corner accent */}
                <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-brand-red opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
