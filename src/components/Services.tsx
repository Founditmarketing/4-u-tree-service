/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../constants/services';

function ServiceCard({ service, idx }: { service: typeof servicesData[0]; idx: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-1, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-1, 1], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px * 2);
    y.set(py * 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      style={{ perspective: 800 }}
    >
      <motion.a
        ref={ref}
        href={`/services/${service.id}`}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-[420px] overflow-hidden cursor-pointer bg-brand-elevated border border-brand-border block corner-cut"
        onClick={(e) => { e.preventDefault(); window.location.href = `/services/${service.id}`; }}
      >
        {/* Image */}
        <img
          src={service.img}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-45 group-hover:opacity-90 grayscale group-hover:grayscale-0"
        />

        {/* Red overlay on hover */}
        <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-85 transition-opacity duration-500" />

        {/* Shimmer sweep */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12 z-10" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
          <div className="transition-transform duration-400 translate-y-3 group-hover:translate-y-0">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red mb-2 group-hover:text-white/70 transition-colors block">
              4-U Specialized
            </span>
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">
              {service.title}
            </h3>
            <div className="h-px w-0 bg-white/50 group-hover:w-full transition-all duration-500 mb-4" />
            <p className="text-sm font-medium text-gray-400 group-hover:text-white/90 transition-colors">
              {service.desc}
            </p>
          </div>
        </div>

        {/* Index number */}
        <div className="absolute top-6 right-6 text-[10px] font-black text-white/20 group-hover:text-white/80 transition-colors z-20">
          0{idx + 1}
        </div>

        {/* Corner bracket accent */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-red/0 group-hover:border-brand-red/80 transition-all duration-300 z-20" />
      </motion.a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="pt-24 pb-8 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col mb-16">
          <motion.span
            className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px] mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-6"
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              PROFESSIONAL <br />
              <span className="text-brand-red">CAPABILITIES.</span>
            </motion.h2>
          </div>
          <motion.div
            className="h-1 bg-brand-red"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map((service, idx) => (
            <div key={service.id}>
              <ServiceCard service={service} idx={idx} />
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          className="mt-8 p-12 bg-brand-elevated border border-brand-border flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden corner-cut-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-brand-red to-transparent" />
          <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-brand-red to-transparent" />

          <div className="max-w-xl relative z-10">
            <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2">
              Need a specialized assessment?
            </h3>
            <p className="text-gray-400 font-medium">
              Our specialists will visit your property for a technical consultation and upfront estimate.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.04, x: 4 }}
            whileTap={{ scale: 0.96 }}
            href="#quote"
            className="relative bg-brand-red text-white px-10 py-5 font-black uppercase tracking-widest text-xs shadow-xl shadow-brand-red/30 overflow-hidden group corner-cut z-10"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/10 skew-x-12" />
            <span className="relative z-10">Book Consultation</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
