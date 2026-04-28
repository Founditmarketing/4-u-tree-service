import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Send, ChevronDown } from 'lucide-react';
import { useEffect } from 'react';
import { servicesData } from '../constants/services';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-brand-red font-black uppercase tracking-[0.6em] text-[12px] mb-6 block">Get In Touch</span>
          <h1 className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-[0.85]">
            DIRECT <br />
            <span className="text-brand-red">CONTACT.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Contact Info & Form */}
          <div className="space-y-16">
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-elevated flex items-center justify-center shrink-0 border border-brand-border">
                    <Phone className="text-brand-red" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block mb-1">Phone</span>
                    <a href="tel:256-996-4740" className="text-xl font-black text-white italic hover:text-brand-red">256-996-4740</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-elevated flex items-center justify-center shrink-0 border border-brand-border">
                    <Mail className="text-brand-red" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block mb-1">Email</span>
                    <a href="mailto:4utreeservicellc@gmail.com" className="text-lg font-black text-white italic hover:text-brand-red break-all">4utreeservicellc@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-elevated flex items-center justify-center shrink-0 border border-brand-border">
                    <MapPin className="text-brand-red" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block mb-1">Service Area</span>
                    <p className="text-lg font-black text-white italic">Northeast Alabama & Beyond</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-elevated flex items-center justify-center shrink-0 border border-brand-border">
                    <Facebook className="text-brand-red" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block mb-1">Follow Us</span>
                    <a 
                      href="https://www.facebook.com/4UTREESERVICE?mibextid=LQQJ4d" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg font-black text-white italic hover:text-brand-red flex items-center gap-2"
                    >
                      FB/4UTreeService
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Form */}
            <div className="bg-brand-elevated border border-brand-border p-10 md:p-12 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black italic text-8xl pointer-events-none select-none">4-U</div>
              <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-brand-black border border-brand-border p-4 text-white focus:border-brand-red outline-none transition-all font-bold text-sm"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="(256) 000-0000"
                      className="w-full bg-brand-black border border-brand-border p-4 text-white focus:border-brand-red outline-none transition-all font-bold text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="service@4utree.com"
                      className="w-full bg-brand-black border border-brand-border p-4 text-white focus:border-brand-red outline-none transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Service Required</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-brand-black border border-brand-border p-4 text-white focus:border-brand-red outline-none transition-all font-bold text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Select Specialist Service</option>
                      {servicesData.map(service => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                      ))}
                      <option value="other">Other / Custom Request</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Property Address</label>
                  <input 
                    type="text" 
                    placeholder="Property Address"
                    className="w-full bg-brand-black border border-brand-border p-4 text-white focus:border-brand-red outline-none transition-all font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">Tell Us About Your Job</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your tree management needs..."
                    className="w-full bg-brand-black border border-brand-border p-4 text-white focus:border-brand-red outline-none transition-all font-bold text-sm resize-none"
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-red text-white py-6 font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-brand-red/40 flex items-center justify-center gap-4 group"
                >
                  Send Mission Request
                  <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Right Column: Interactive Map */}
          <div className="h-full min-h-[500px] flex flex-col space-y-6">
            <div className="flex-1 min-h-[400px] relative border border-brand-border bg-brand-elevated group overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105214.39704281789!2d-85.79444391969371!3d34.43425941916327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88600d831518e19b%3A0x6d90d8a571f3088b!2sFort%20Payne%2C%20AL!5e0!3m2!1sen!2sus!4v1713374400000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-60 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              {/* Tactical Map UI Overlay */}
              <div className="absolute top-4 left-4 pointer-events-none">
                 <div className="bg-brand-black/80 backdrop-blur-md border border-brand-border p-4 skew-x-[-12deg]">
                    <div className="skew-x-[12deg] flex items-center gap-3">
                       <div className="w-2 h-2 bg-brand-red animate-pulse rounded-full" />
                       <span className="text-[10px] text-white font-black uppercase tracking-widest">HQ: Fort Payne, AL</span>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="p-8 border border-brand-border bg-brand-elevated">
               <h4 className="text-white font-black italic uppercase tracking-tighter text-xl mb-4">Our Service Area</h4>
               <p className="text-gray-400 text-sm font-medium leading-relaxed">
                 We primarily deploy within a 60-mile radius of Fort Payne, Alabama, covering DeKalb, Jackson, and Cherokee counties. Specialized high-priority extractions are considered throughout Northeast Alabama and Northwest Georgia.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
