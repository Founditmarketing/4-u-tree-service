/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../constants/services';

export default function Services() {
  return (
    <section id="services" className="pt-20 pb-4 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px] mb-4">Tactical Operations</span>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
            PROFESSIONAL <br />
            <span className="text-brand-red">CAPABILITIES.</span>
          </h2>
          <div className="w-24 h-1 bg-brand-red" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/services/${service.id}`}
                className="group relative h-[450px] overflow-hidden cursor-pointer bg-brand-elevated border border-brand-border block"
              >
                {/* Image Background */}
                <img 
                  src={service.img} 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100 grayscale hover:grayscale-0 group-hover:grayscale-0"
                />

                {/* Red Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-2 group-hover:text-white transition-colors">4-U Specialized</span>
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <div className="h-px w-0 bg-white/40 group-hover:w-full transition-all duration-500 mb-4" />
                  <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-[10px] font-black text-white/20 group-hover:text-white transition-colors">
                   0{idx + 1}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-12 bg-brand-elevated border border-brand-border flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-xl">
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2">Need a specialized assessment?</h3>
              <p className="text-gray-400 font-medium">Our specialists will visit your property for a technical consultation and upfront estimate.</p>
           </div>
           <motion.a 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             href="#quote"
             className="bg-brand-red text-white px-10 py-5 font-black uppercase tracking-widest text-xs"
           >
             Book Consultation
           </motion.a>
        </div>
      </div>
    </section>
  );
}
