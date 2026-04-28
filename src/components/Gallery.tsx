/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const projects = [
  { id: 1, title: "Precision Removal",   category: "High-Risk",   img: "/treework3.jpg" },
  { id: 2, title: "Emergency Recovery",  category: "Storm Relief", img: "/247.jpg" },
  { id: 3, title: "Land Restoration",    category: "Clearing",     img: "/landclearing.webp" },
  { id: 4, title: "Structural Defense",  category: "Technical",    img: "/treework5.jpg" },
  { id: 5, title: "Estate Management",   category: "Residential",  img: "/treework6.jpg" },
  { id: 6, title: "Crane Ops",           category: "Heavy Gear",   img: "/services2.jpg" },
];

// Double up so the track is always full on load
const slides = [...projects, ...projects];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 0.7, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="pt-20 pb-8 bg-brand-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-8">
          <div className="max-w-xl">
            <motion.span
              className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px] mb-4 block"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Field Archives
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-4"
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                RECENT <br />
                <span className="text-brand-red">WORK.</span>
              </motion.h2>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-3">
            {[{ fn: scrollPrev, icon: ChevronLeft, label: 'Previous slide' },
              { fn: scrollNext, icon: ChevronRight, label: 'Next slide' }].map(({ fn, icon: Icon, label }, i) => (
              <motion.button
                key={i}
                onClick={fn}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                className="w-14 h-14 bg-brand-elevated border border-brand-border flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 group"
                aria-label={label}
              >
                <Icon size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel — full bleed */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-4 items-stretch px-6">
          {slides.map((project, idx) => (
            <div
              key={idx}
              className="flex-[0_0_85%] md:flex-[0_0_42%] lg:flex-[0_0_30%] xl:flex-[0_0_24%] min-w-0 h-[440px] shrink-0"
            >
              <div
                onClick={() => setSelectedImg(project.img)}
                className="relative h-full overflow-hidden group cursor-pointer border border-brand-border/30"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-108 opacity-75 group-hover:opacity-100"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Expand icon */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-y-2 group-hover:translate-y-0">
                  <div className="w-11 h-11 bg-brand-red flex items-center justify-center corner-cut">
                    <Maximize2 size={16} />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 -translate-y-2 group-hover:translate-y-0">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60 bg-brand-black/60 backdrop-blur-sm px-3 py-1.5">
                    {project.category}
                  </span>
                </div>

                {/* Bottom title reveal */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                  <div className="translate-y-5 group-hover:translate-y-0 transition-transform duration-400">
                    <div className="w-0 group-hover:w-8 h-px bg-brand-red transition-all duration-500 mb-3" />
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-brand-black/97 flex items-center justify-center p-4 md:p-12 cursor-zoom-out backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white w-12 h-12 bg-brand-red flex items-center justify-center z-[10000] corner-cut"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImg(null)}
            >
              <X size={20} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImg}
              alt="Field archive"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-brand-border/50"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
