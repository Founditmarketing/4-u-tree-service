/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-brand-black flex flex-col lg:flex-row">
      {/* Left: Image — height constrained to match content */}
      <div className="lg:w-1/2 relative overflow-hidden group min-h-[300px] lg:min-h-0">
         <img 
           src="/team.png" 
           alt="4-U Tree Service Crew in Action"
           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-700" />
         
         {/* Floating Badge */}
         <div className="absolute top-8 left-8 bg-white p-6 shadow-2xl skew-x-[-12deg] z-20">
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
                 Our mission is simple: To provide the most professional, safest, and most dependable tree services in Northeast Alabama. Whether it's clearing 50 acres of land or removing a hazardous oak from a residential rooftop, our crew executes with precision.
               </p>
               
               <div className="pt-8 grid grid-cols-2 gap-8 border-t border-brand-border">
                  <div>
                     <span className="text-white font-black italic block mb-2 uppercase">Service Reach</span>
                     <p className="text-sm">NE Alabama &amp; Louisiana Parish Relief Operations.</p>
                  </div>
                  <div>
                     <span className="text-white font-black italic block mb-2 uppercase">Credentials</span>
                     <span className="text-sm block">Fully Licensed, Bonded, and Insured Specialists.</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
