import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './context/ModalContext';
import { AudioProvider } from './context/AudioContext';

import SpatialNavbar from './components/spatial/SpatialNavbar';
import SpatialFooter from './components/spatial/SpatialFooter';
import SpatialThemeControl from './components/spatial/SpatialThemeControl';
import SpatialModal from './components/spatial/SpatialModal';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AuraDrishtiCaseStudy from './pages/AuraDrishtiCaseStudy';
import Blog from './pages/Blog';
import Tools from './pages/Tools';
import Contact from './pages/Contact';

import BusinessInformation from './pages/BusinessInformation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AudioProvider>
          <ModalProvider>
            <Router>
              <div className="relative min-h-screen bg-theme-bg text-theme-text font-sans antialiased selection:bg-theme-primary selection:text-white">
                <div className="scan-line" />
                <SpatialNavbar />

                <main className="relative z-10">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/case-studies/auradrishti" element={<AuraDrishtiCaseStudy />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Business Compliance & Legal System Routes */}
                    <Route path="/business-information" element={<BusinessInformation />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/refund-cancellation" element={<RefundPolicy />} />
                    <Route path="/refund" element={<RefundPolicy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />

                    <Route path="*" element={<Home />} />
                  </Routes>
                </main>

                <SpatialFooter />
                <SpatialThemeControl />
                <FloatingWhatsApp />
                <SpatialModal />
              </div>
            </Router>
          </ModalProvider>
        </AudioProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
