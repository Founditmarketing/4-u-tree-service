import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../constants/services';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-black text-white px-6">
        <div className="text-center">
          <h1 className="text-6xl font-black italic mb-8">404 - SERVICE NOT FOUND</h1>
          <Link to="/" className="text-brand-red font-bold hover:underline">Return to Base</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-black pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/70 z-10" />
          <img 
            src={service.img} 
            alt={service.title}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
           >
              <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[12px] mb-4 block">Operation Specialist</span>
              <h1 className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none mb-8">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-brand-red' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 text-xl font-medium max-w-2xl leading-relaxed">
                {service.desc}
              </p>
           </motion.div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
             <div className="space-y-12">
                <div>
                   <h2 className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6">Execution Strategy</h2>
                   <p className="text-gray-300 text-xl font-medium leading-relaxed italic border-l-4 border-brand-red pl-8">
                     "{service.longDesc}"
                   </p>
                </div>

                <div className="grid sm:grid-cols-1 gap-6">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 bg-brand-elevated border border-brand-border p-6 group hover:border-brand-red transition-all"
                    >
                       <CheckCircle2 className="text-brand-red" size={20} />
                       <span className="text-white font-bold uppercase tracking-widest text-[12px]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
             </div>

             <div className="space-y-12">
                <div className="bg-brand-elevated border border-brand-border p-12">
                   <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6">READY TO DEPLOY?</h3>
                   <p className="text-gray-400 font-medium mb-10 leading-relaxed">
                     Don't risk your property with amateur labor. Get a professional assessment and secure your spot on our high-priority calendar.
                   </p>
                   
                   <div className="space-y-6">
                      <a href="tel:256-996-4740" className="flex items-center justify-between bg-brand-black border border-brand-border p-6 group hover:bg-brand-red transition-all">
                         <div className="flex items-center gap-6">
                            <Phone className="text-brand-red group-hover:text-white" />
                            <span className="text-white font-black uppercase tracking-widest text-[12px]">Direct Line</span>
                         </div>
                         <ChevronRight className="text-gray-600 group-hover:text-white" />
                      </a>
                      <Link to="/contact" className="flex items-center justify-center bg-brand-red text-white py-6 font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-red/20">
                         Get Your Tactical Assessment
                      </Link>
                   </div>
                </div>

                <div className="relative aspect-video overflow-hidden border border-brand-border group">
                   <img 
                     src={service.secondaryImg} 
                     alt={`${service.title} field work`}
                     className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-brand-black/40" />
                   <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                      <span className="text-white font-black italic uppercase tracking-tighter text-2xl">Field Documentation Site: 4U-{service.id.toUpperCase()}</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 border-t border-brand-border">
         <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] mb-12">Other Specialist Capabilities</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
               {servicesData.filter(s => s.id !== serviceId).slice(0, 4).map((s) => (
                 <Link key={s.id} to={`/services/${s.id}`} className="group block relative h-40 overflow-hidden border border-brand-border">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 opacity-60 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-red/10 transition-all" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                       <span className="text-white font-black italic uppercase text-xs text-center tracking-widest leading-none">{s.title}</span>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      <ContactForm />
    </div>
  );
}
