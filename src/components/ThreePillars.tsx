/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Clock, Users } from 'lucide-react';

const pillars = [
  {
    title: "Safety-Driven",
    desc: "Rigorous planning to protect people and structures. We mitigate risk through technical precision.",
    icon: Shield
  },
  {
    title: "Dependable",
    desc: "We show up when promised. No excuses. Our reliability is the foundation of our business.",
    icon: Clock
  },
  {
    title: "Skilled Professionals",
    desc: "Years of hands-on experience paired with professional-grade arsenal of heavy equipment.",
    icon: Users
  }
];

export default function ThreePillars() {
  return (
    <section id="why" className="py-20 bg-brand-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <span className="text-brand-red font-black uppercase tracking-[0.6em] text-[10px] mb-6 block">The Standard of Excellence</span>
          <h2 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            DRIVEN BY <br />
            <span className="text-brand-red">PERFORMANCE.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 relative z-10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative p-12 bg-brand-elevated border border-brand-border flex flex-col items-center text-center group"
            >
              <div className="mb-10 w-24 h-24 bg-brand-black border border-brand-border flex items-center justify-center relative shadow-2xl skew-x-[-12deg] group-hover:bg-brand-red transition-colors duration-500">
                <div className="skew-x-[12deg]">
                  <pillar.icon size={32} className="text-brand-red group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-6">
                {pillar.title}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                {pillar.desc}
              </p>
              
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
