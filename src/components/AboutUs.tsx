/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <section id="about" className="relative min-h-[60vh] bg-brand-black flex flex-col lg:flex-row">
      {/* Left: Interactive Image */}
      <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden group">
         <img 
           src="https://picsum.photos/seed/crew/1000/1200" 
           alt="4-U Tree Service Crew in Action"
           referrerPolicy="no-referrer"
           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-700" />
         
         {/* Floating Badge */}
         <div className="absolute top-12 left-12 bg-white p-8 shadow-2xl skew-x-[-12deg] z-20">
            <div className="skew-x-[12deg] flex flex-col items-center">
               <span className="text-4xl font-black text-brand-black italic leading-none">20+</span>
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">Years Field Experience</span>
            </div>
         </div>
      </div>

      {/* Right: Narrative Content */}
      <div className="lg:w-1/2 flex items-center p-12 lg:p-16 bg-brand-elevated border-l border-brand-border">
         <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
               <span className="w-8 h-px bg-brand-red" />
               <span className="text-brand-red text-[11px] font-black uppercase tracking-[0.4em]">Our Core Identity</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-12">
               NOT JUST TREE SERVICE. <br />
               <span className="text-brand-red">PROPERTY DEFENSE.</span>
            </h2>

            <div className="space-y-8 text-gray-400 font-medium text-lg leading-relaxed">
               <p>
                 4-U Tree Service is a fully licensed and insured property protection specialist based in Fort Payne, AL. We don't just "cut trees"—we mitigate liability and defend structures through professional land management.
               </p>
               <p>
                 Our mission is simple: To provide the most professional, safest, and most dependable tree services in Northeast Alabama. Whether it’s clearing 50 acres of land or removing a hazardous oak from a residential rooftop, our crew executes with precision.
               </p>
               
               <div className="pt-12 grid grid-cols-2 gap-8 border-t border-brand-border text-glow-red">
                  <div>
                     <span className="text-white font-black italic block mb-2 uppercase">Service Reach</span>
                     <p className="text-sm">NE Alabama & Louisiana Parish Relief Operations.</p>
                  </div>
                  <div>
                     <span className="text-white font-black italic block mb-2 uppercase">Credentials</span>
                     <span className="text-sm block">Fully Licensed, Bonded, and Insured Specialists.</span>
                  </div>
               </div>

               <Link 
                 to="/contact"
                 className="inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm group mt-12"
               >
                 <motion.span 
                   whileHover={{ x: 10 }}
                   className="flex items-center gap-4"
                 >
                   Contact our specialists <span className="text-brand-red group-hover:translate-x-2 transition-transform">→</span>
                 </motion.span>
               </Link>
            </div>
         </div>
      </div>
    </section>
  );
}
