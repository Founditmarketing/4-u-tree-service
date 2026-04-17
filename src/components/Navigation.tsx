/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone, Mail, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../constants/services';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on navigation
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location.pathname]);

  const tabs = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'services', label: 'Services', href: '/#services', isDropdown: true },
    { id: 'gallery', label: 'Gallery', href: '/gallery', isPage: true },
    { id: 'contact', label: 'Contact', href: '/contact', isPage: true },
  ];

  const handleLinkClick = (href: string, isPage?: boolean) => {
    if (isPage) return;
    const targetId = href.split('#')[1];
    if (targetId && location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-black/95 backdrop-blur-xl border-brand-border py-0 shadow-2xl' 
          : 'bg-transparent border-transparent py-2'
      }`}
    >
      <div className={`max-w-7xl mx-auto flex justify-between items-center px-6 transition-all duration-500 ${isScrolled ? 'h-20' : 'h-28'}`}>
        <div className="flex items-center gap-12">
          <Link to="/" className="flex flex-col group">
            <span className="text-white font-black text-3xl tracking-tighter uppercase leading-none group-hover:text-brand-red transition-colors">
              4-U <span className="text-brand-red group-hover:text-white transition-colors">TREE</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-gray-500">Service LLC</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 border-l border-brand-border/20 pl-12 h-8">
            {tabs.map((tab) => (
              <div key={tab.id} className="relative">
                 {tab.isDropdown ? (
                  <div 
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="relative pb-2 mt-2"
                  >
                    <button
                      className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      {tab.label}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-brand-red' : ''}`} />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-64 bg-brand-elevated border border-brand-border mt-2 p-4 shadow-2xl"
                        >
                          <div className="grid grid-cols-1 gap-2">
                             {servicesData.map((service) => (
                               <Link 
                                 key={service.id} 
                                 to={`/services/${service.id}`}
                                 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-brand-red/10 p-3 flex items-center justify-between group/link transition-all border-l-2 border-transparent hover:border-brand-red"
                               >
                                 {service.title}
                                 <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                               </Link>
                             ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : tab.isPage ? (
                  <Link
                    to={tab.href}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {tab.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    href={tab.href}
                    onClick={() => handleLinkClick(tab.href, tab.isPage)}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {tab.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none mb-1 text-glow-red">Licensed & Insured</span>
            <a href="tel:256-996-4740" className="text-[14px] text-white font-black tracking-widest hover:text-brand-red transition-colors">256-996-4740</a>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:256-996-4740"
            className="bg-brand-red text-white px-8 py-4 text-[12px] font-black uppercase tracking-[0.15em] hover:bg-red-700 transition-all shadow-2xl shadow-brand-red/40"
          >
            CALL NOW
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
