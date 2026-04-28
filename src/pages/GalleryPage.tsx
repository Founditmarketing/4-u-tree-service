import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const projects = [
  { id: 1,  title: "Precision Removal",        category: "High-Risk",   img: "/treework2.jpg" },
  { id: 2,  title: "Emergency Recovery",        category: "Storm Relief",img: "/2472.jpg" },
  { id: 3,  title: "Land Restoration",          category: "Clearing",    img: "/landclearing.webp" },
  { id: 4,  title: "Structural Defense",        category: "Technical",   img: "/treework5.jpg" },
  { id: 5,  title: "Estate Management",         category: "Residential", img: "/treework6.jpg" },
  { id: 6,  title: "Crane Ops",                 category: "Heavy Gear",  img: "/services6.png" },
  { id: 7,  title: "Brush Management",          category: "Maintenance", img: "/services.png" },
  { id: 8,  title: "Hazardous Oak Extraction",  category: "Technical",   img: "/treework7.jpg" },
  { id: 9,  title: "Storm Perimeter Clear",     category: "Emergency",   img: "/treework8.jpg" },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-brand-black min-h-screen pt-40">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <motion.span
              className="text-brand-red font-black uppercase tracking-[0.6em] text-[12px] mb-6 block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Evidence of Excellence
            </motion.span>
            <div className="overflow-hidden">
              <motion.h1
                className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-[0.85]"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                FIELD <br />
                <span className="text-brand-red text-glow-red">ARCHIVES.</span>
              </motion.h1>
            </div>
          </div>
          <motion.p
            className="text-gray-400 max-w-md text-lg font-medium leading-relaxed lg:mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            A comprehensive visual log of our highest-priority tree removals and land management operations across Northeast Alabama.
          </motion.p>
        </div>

        {/* ── Category filters ── */}
        <motion.div
          className="flex flex-wrap gap-3 mt-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300 overflow-hidden group
                ${activeCategory === cat
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                  : 'bg-brand-elevated border border-brand-border text-gray-400 hover:text-white hover:border-brand-red/40'
                }`}
            >
              {activeCategory !== cat && (
                <span className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/8 transition-colors duration-300" />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Animated divider */}
        <motion.div
          className="divider-red mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* ── Masonry grid ── */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="masonry-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                className="masonry-item"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImg(project.img)}
              >
                <div className="relative overflow-hidden group cursor-pointer border border-brand-border/30 hover:border-brand-red/40 transition-colors duration-400">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto block transition-transform duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Expand */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <div className="w-10 h-10 bg-brand-red flex items-center justify-center corner-cut">
                      <Maximize2 size={14} />
                    </div>
                  </div>

                  {/* Info reveal */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 z-10">
                    <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[9px] mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-black text-white italic uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>

                  {/* Border trace on hover */}
                  <div className="absolute inset-0 border-2 border-brand-red/0 group-hover:border-brand-red/20 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-brand-black/97 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white w-12 h-12 bg-brand-red flex items-center justify-center corner-cut z-[10000]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImg(null)}
            >
              <X size={20} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImg}
              alt="Full size field archive"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-brand-border/40"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ContactForm />
    </div>
  );
}
