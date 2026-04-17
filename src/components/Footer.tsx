/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
            <div className="bg-brand-red p-2 rounded transform -rotate-3">
               <span className="text-white font-black text-2xl tracking-tighter">4-U</span>
            </div>
            <div className="flex flex-col -gap-1 text-left">
              <span className="font-black text-xl tracking-tight leading-none">TREE SERVICE</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Professional Specialists</span>
            </div>
          </div>
          
          <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-gray-500">
             <a href="/#about" className="hover:text-white transition-colors">About</a>
             <a href="/#services" className="hover:text-white transition-colors">Services</a>
             <Link to="/contact" className="hover:text-white transition-colors">Get A Quote</Link>
          </div>

          <div className="text-xs text-gray-500 font-medium text-center md:text-right">
             <p>© {new Date().getFullYear()} 4-U Tree Service LLC. All Rights Reserved.</p>
             <p className="mt-1">Licensed & Insured | Fort Payne, Alabama | Serving the Southeast</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
