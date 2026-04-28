import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { servicesData } from '../constants/services';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useEffect, useRef } from 'react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-black text-white px-6">
        <div className="text-center">
          <h1 className="text-6xl font-black italic mb-8">404 - SERVICE NOT FOUND</h1>
          <Link to="/" className="text-brand-red font-bold hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-black pt-24 min-h-screen">

      {/* ── Hero Header ── */}
      <section ref={heroRef} className="relative h-[65vh] flex items-center overflow-hidden border-b border-brand-border scanlines">
        {/* Parallax bg */}
        <div className="absolute inset-0 z-0">
          <motion.div className="absolute inset-0 w-full h-[125%] -top-[12%]" style={{ y: imgY }}>
            <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-brand-black/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-transparent z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-20" />
        </div>

        {/* Accent line */}
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <motion.div
            className="absolute bottom-[30%] left-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '55%', transformOrigin: 'left' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-30 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="text-brand-red font-black uppercase tracking-[0.5em] text-[12px] mb-5 block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              4-U Specialist Service
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-8">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-brand-red text-glow-red' : ''}>
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

      {/* ── Detail Content ── */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div>
                <h2 className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6">How We Handle It</h2>
                <p className="text-gray-300 text-xl font-medium leading-relaxed italic border-l-4 border-brand-red pl-8">
                  &ldquo;{service.longDesc}&rdquo;
                </p>
              </div>

              <div className="grid sm:grid-cols-1 gap-4">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-brand-elevated border border-brand-border p-6 group hover:border-brand-red/50 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/4 transition-colors duration-300" />
                    <CheckCircle2 className="text-brand-red shrink-0 relative z-10" size={18} />
                    <span className="text-white font-bold uppercase tracking-widest text-[12px] relative z-10">{feature}</span>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-brand-red group-hover:w-full transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              {/* CTA Card */}
              <motion.div
                className="bg-brand-elevated border border-brand-border p-12 relative overflow-hidden corner-cut"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-brand-red to-transparent" />
                <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-brand-red to-transparent" />

                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6">GET A FREE QUOTE</h3>
                <p className="text-gray-400 font-medium mb-10 leading-relaxed">
                  Don't risk your property with amateur labor. Get a professional assessment and secure your spot on our calendar.
                </p>

                <div className="space-y-5">
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="tel:256-996-4740"
                    className="flex items-center justify-between bg-brand-black border border-brand-border p-6 group hover:bg-brand-red transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <Phone className="text-brand-red group-hover:text-white transition-colors" size={18} />
                      <span className="text-white font-black uppercase tracking-widest text-[12px]">Call: 256-996-4740</span>
                    </div>
                    <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" size={18} />
                  </motion.a>

                  <Link
                    to="/contact"
                    className="flex items-center justify-center bg-brand-red text-white py-6 font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-red/30 corner-cut group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/10 skew-x-12" />
                    <span className="relative z-10">Get a Free Estimate</span>
                  </Link>
                </div>
              </motion.div>

              {/* Secondary image */}
              <div className="relative aspect-video overflow-hidden border border-brand-border group">
                <img
                  src={service.secondaryImg}
                  alt={`${service.title} field work`}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <span className="text-white font-black italic uppercase tracking-tighter text-2xl">
                    4-U Field Documentation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="py-24 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] mb-12">Other Services</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesData.filter(s => s.id !== serviceId).slice(0, 4).map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/services/${s.id}`} className="group block relative h-48 overflow-hidden border border-brand-border hover:border-brand-red/40 transition-colors">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-90 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-brand-black/50 group-hover:bg-brand-red/10 transition-all" />
                  <div className="absolute inset-0 flex flex-col justify-end items-start p-5">
                    <span className="text-white font-black italic uppercase text-xs tracking-widest leading-tight">{s.title}</span>
                    <div className="h-px w-0 bg-brand-red group-hover:w-full transition-all duration-500 mt-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
