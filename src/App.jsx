import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './context/ModalContext';
import { AudioProvider } from './context/AudioContext';

import SpatialNavbar from './components/spatial/SpatialNavbar';
import SpatialFooter from './components/spatial/SpatialFooter';
import SpatialThemeControl from './components/spatial/SpatialThemeControl';
import SpatialModal from './components/spatial/SpatialModal';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import ScrollToTop from './components/ui/ScrollToTop';
import FirstVisitEnquiry from './components/ui/FirstVisitEnquiry';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AuraDrishtiCaseStudy from './pages/AuraDrishtiCaseStudy';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LaunchKit from './pages/LaunchKit';
import BlogPost from './pages/BlogPost';
import Feedback from './pages/Feedback';
import SeoServices from './pages/SeoServices';
import EcommerceStore from './pages/EcommerceStore';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import WebAppDevelopment from './pages/WebAppDevelopment';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import BrandingDesign from './pages/BrandingDesign';
import WebsiteMaintenance from './pages/WebsiteMaintenance';
import Careers from './pages/Careers';

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
              <ScrollToTop />
              <div className="relative min-h-screen bg-theme-bg text-theme-text font-sans antialiased selection:bg-theme-primary selection:text-white">
                <div className="scan-line" />
                <SpatialNavbar />

                <main className="relative z-10">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio-website" element={<Navigate to="/portfolio" replace />} />
                    <Route path="/portfolio-site" element={<Navigate to="/portfolio" replace />} />
                    <Route path="/portfolio.com" element={<Navigate to="/portfolio" replace />} />
                    <Route path="/seo" element={<SeoServices />} />
                    <Route path="/seo-services" element={<SeoServices />} />
                    <Route path="/seo-packages" element={<SeoServices />} />
                    <Route path="/ecommerce-store" element={<EcommerceStore />} />
                    <Route path="/ecommerce" element={<EcommerceStore />} />
                    <Route path="/fast-ecommerce" element={<EcommerceStore />} />
                    <Route path="/website-development" element={<WebsiteDevelopment />} />
                    <Route path="/web-development" element={<WebsiteDevelopment />} />
                    <Route path="/website-design" element={<WebsiteDevelopment />} />
                    <Route path="/web-app-development" element={<WebAppDevelopment />} />
                    <Route path="/custom-software" element={<WebAppDevelopment />} />
                    <Route path="/saas-development" element={<WebAppDevelopment />} />
                    <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
                    <Route path="/mobile-apps" element={<MobileAppDevelopment />} />
                    <Route path="/app-development" element={<MobileAppDevelopment />} />
                    <Route path="/branding-design" element={<BrandingDesign />} />
                    <Route path="/ui-ux-design" element={<BrandingDesign />} />
                    <Route path="/branding" element={<BrandingDesign />} />
                    <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
                    <Route path="/maintenance" element={<WebsiteMaintenance />} />
                    <Route path="/website-support" element={<WebsiteMaintenance />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/career" element={<Careers />} />
                    <Route path="/partner-program" element={<Careers />} />
                    <Route path="/marketing-partner" element={<Careers />} />
                    <Route path="/case-studies/auradrishti" element={<AuraDrishtiCaseStudy />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/launch-kit" element={<LaunchKit />} />
                    <Route path="/launchkit" element={<LaunchKit />} />
                    <Route path="/feedback" element={<Feedback />} />






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
                <FirstVisitEnquiry />
              </div>
            </Router>
          </ModalProvider>
        </AudioProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
