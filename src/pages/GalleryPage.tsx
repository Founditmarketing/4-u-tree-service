import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const projects = [
  { id: 1, title: "Precision Removal", category: "High-Risk", img: "https://picsum.photos/seed/removal-1/800/1000" },
  { id: 2, title: "Emergency Recovery", category: "Storm Relief", img: "https://picsum.photos/seed/storm-1/800/800" },
  { id: 3, title: "Land Restoration", category: "Clearing", img: "https://picsum.photos/seed/clearing-1/1000/800" },
  { id: 4, title: "Structural Defense", category: "Technical", img: "https://picsum.photos/seed/climb-1/800/800" },
  { id: 5, title: "Estate Management", category: "Residential", img: "https://picsum.photos/seed/estate-1/800/800" },
  { id: 6, title: "Crane Ops", category: "Heavy Gear", img: "https://picsum.photos/seed/crane-1/800/1000" },
  { id: 7, title: "Brush Management", category: "Maintenance", img: "https://picsum.photos/seed/brush-1/1000/1000" },
  { id: 8, title: "Hazardous Oak Extraction", category: "Technical", img: "https://picsum.photos/seed/oak-1/800/1200" },
  { id: 9, title: "Storm Perimeter Clear", category: "Emergency", img: "https://picsum.photos/seed/perimeter-1/1200/800" }
];

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen pt-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-brand-red font-black uppercase tracking-[0.6em] text-[12px] mb-6 block">Evidence of Excellence</span>
            <h1 className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-[0.85]">
              FIELD <br />
              <span className="text-brand-red">ARCHIVES.</span>
            </h1>
          </div>
          <p className="text-gray-400 max-w-md text-lg font-medium leading-relaxed lg:mb-4">
            A comprehensive visual log of our highest-priority tree removals and land management operations across Northeast Alabama.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(project.img)}
              className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] group cursor-pointer overflow-hidden border border-brand-border"
            >
              <img 
                src={project.img} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
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
            </motion.div>
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
            className="fixed inset-0 z-[9999] bg-brand-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white w-12 h-12 bg-brand-red flex items-center justify-center"
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
              alt="Full size field archive"
              className="max-w-full max-h-full object-contain shadow-2xl border border-brand-border"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ContactForm />
    </div>
  );
}
