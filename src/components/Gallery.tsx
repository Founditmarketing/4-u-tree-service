/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const projects = [
  { id: 1, title: "Precision Removal", category: "High-Risk", img: "https://picsum.photos/seed/removal-1/800/1000" },
  { id: 2, title: "Emergency Recovery", category: "Storm Relief", img: "https://picsum.photos/seed/storm-1/800/800" },
  { id: 3, title: "Land Restoration", category: "Clearing", img: "https://picsum.photos/seed/clearing-1/1000/800" },
  { id: 4, title: "Structural Defense", category: "Technical", img: "https://picsum.photos/seed/climb-1/800/800" },
  { id: 5, title: "Estate Management", category: "Residential", img: "https://picsum.photos/seed/estate-1/800/800" },
  { id: 6, title: "Crane Ops", category: "Heavy Gear", img: "https://picsum.photos/seed/crane-1/800/1000" }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    dragFree: true
  }, [
    AutoScroll({ 
      playOnInit: true, 
      speed: 0.8,
      stopOnInteraction: false,
      stopOnMouseEnter: true 
    })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-20 bg-brand-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
           <div className="max-w-xl">
              <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Field Archives</span>
              <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">
                RECENT <br />
                <span className="text-brand-red">EXECUTIONS.</span>
              </h2>
           </div>
           
           <div className="flex items-center gap-4">
              <button 
                onClick={scrollPrev}
                className="w-16 h-16 bg-brand-elevated border border-brand-border flex items-center justify-center text-white hover:bg-brand-red transition-all group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollNext}
                className="w-16 h-16 bg-brand-elevated border border-brand-border flex items-center justify-center text-white hover:bg-brand-red transition-all group"
                aria-label="Next slide"
              >
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-4">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0"
              >
                <div 
                  onClick={() => setSelectedImg(project.img)}
                  className="relative h-[600px] overflow-hidden group cursor-pointer border border-brand-border/20 z-10"
                >
                  <img 
                    src={project.img} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Overlay Controls */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <div className="w-12 h-12 bg-brand-red flex items-center justify-center text-white">
                      <Maximize2 size={20} />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                     <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">{project.category}</span>
                        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">{project.title}</h3>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CLICK TO ENLARGE LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-brand-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white w-12 h-12 bg-brand-red flex items-center justify-center z-[10000]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Enlarged execution document"
              className="max-w-full max-h-full object-contain shadow-2xl border border-brand-border"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
