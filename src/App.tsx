/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  return (
    <Router>
      <div className="relative selection:bg-brand-red selection:text-white bg-brand-black min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

function ConditionalFooter() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;
  return <Footer />;
}
