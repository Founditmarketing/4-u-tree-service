/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { servicesData } from '../constants/services';

export default function ContactForm() {
  return (
    <section id="quote" className="py-20 bg-brand-black grid-lines relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
           <div className="flex flex-col justify-center">
              <span className="text-brand-red font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Request a Free Quote</span>
              <h2 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.85] mb-8">
                GET A FREE <br />
                <span className="text-brand-red">ESTIMATE.</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed mb-10 max-w-md">
                Our team is standing by for technical property evaluations. Request an upfront assessment and secure your project on our operational calendar.
              </p>

              <div className="space-y-12">
                 <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-all duration-500">
                       <Phone size={24} className="text-brand-red group-hover:text-white" />
                    </div>
                    <div>
                       <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block">Phone</span>
                       <a href="tel:256-996-4740" className="text-2xl font-black text-white italic tracking-tighter hover:text-brand-red">256-996-4740</a>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-all duration-500">
                       <Mail size={24} className="text-brand-red group-hover:text-white" />
                    </div>
                    <div>
                       <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block">Email</span>
                       <a href="mailto:4utreeservicellc@gmail.com" className="text-xl font-black text-white italic tracking-tighter hover:text-brand-red">4utreeservicellc@gmail.com</a>
                    </div>
                 </div>
              </div>
           </div>

           <div className="relative">
              <div className="absolute -inset-8 bg-brand-red opacity-[0.03] blur-3xl rounded-full" />
              <div className="bg-brand-black border border-brand-border p-12 relative z-10 shadow-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="space-y-2">
                         <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Your Name</label>
                         <input 
                           type="text" 
                           placeholder="John Doe"
                           className="w-full bg-brand-elevated border border-brand-border p-5 text-white focus:border-brand-red outline-none transition-all font-bold text-sm"
                         />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Phone</label>
                         <input 
                           type="tel" 
                           placeholder="(256) 000-0000"
                           className="w-full bg-brand-elevated border border-brand-border p-5 text-white focus:border-brand-red outline-none transition-all font-bold text-sm"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                         <input 
                           type="email" 
                           placeholder="service@4utree.com"
                           className="w-full bg-brand-elevated border border-brand-border p-5 text-white focus:border-brand-red outline-none transition-all font-bold text-sm"
                         />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Service Category</label>
                      <div className="relative">
                        <select 
                          className="w-full bg-brand-elevated border border-brand-border p-5 text-white focus:border-brand-red outline-none transition-all font-bold text-sm appearance-none cursor-pointer"
                        >
                          <option value="" disabled selected>Select Specialist Service</option>
                          {servicesData.map(service => (
                            <option key={service.id} value={service.id}>{service.title}</option>
                          ))}
                          <option value="other">Other / Custom Request</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Service Area</label>
                      <input 
                        type="text" 
                        placeholder="Property Zip or Address"
                        className="w-full bg-brand-elevated border border-brand-border p-5 text-white focus:border-brand-red outline-none transition-all font-bold text-sm"
                      />
                   </div>

                   <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Tell Us About Your Job</label>
                      <textarea 
                        rows={4}
                        placeholder="Describe your property needs..."
                        className="w-full bg-brand-elevated border border-brand-border p-5 text-white focus:border-brand-red outline-none transition-all font-bold text-sm resize-none"
                      />
                   </div>
                   <motion.button 
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     className="w-full bg-brand-red text-white py-6 font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-brand-red/40 hover:bg-brand-red hover:shadow-brand-red/60 transition-all flex items-center justify-center gap-4 group"
                   >
                     Submit Assessment Request
                     <span className="group-hover:translate-x-2 transition-transform">→</span>
                   </motion.button>
                </form>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
