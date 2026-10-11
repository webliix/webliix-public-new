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

// Eager load Home for instant LCP on initial landing
import Home from './pages/Home';

// Route-based code splitting for secondary pages and non-critical modals
const FirstVisitEnquiry = React.lazy(() => import('./components/ui/FirstVisitEnquiry'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const AuraDrishtiCaseStudy = React.lazy(() => import('./pages/AuraDrishtiCaseStudy'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const LaunchKit = React.lazy(() => import('./pages/LaunchKit'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Feedback = React.lazy(() => import('./pages/Feedback'));
const SeoServices = React.lazy(() => import('./pages/SeoServices'));
const EcommerceStore = React.lazy(() => import('./pages/EcommerceStore'));
const WebsiteDevelopment = React.lazy(() => import('./pages/WebsiteDevelopment'));
const WebAppDevelopment = React.lazy(() => import('./pages/WebAppDevelopment'));
const MobileAppDevelopment = React.lazy(() => import('./pages/MobileAppDevelopment'));
const BrandingDesign = React.lazy(() => import('./pages/BrandingDesign'));
const WebsiteMaintenance = React.lazy(() => import('./pages/WebsiteMaintenance'));
const PaidAdvertising = React.lazy(() => import('./pages/PaidAdvertising'));
const GoogleAds = React.lazy(() => import('./pages/GoogleAds'));
const MetaAds = React.lazy(() => import('./pages/MetaAds'));
const Careers = React.lazy(() => import('./pages/Careers'));
const BusinessInformation = React.lazy(() => import('./pages/BusinessInformation'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = React.lazy(() => import('./pages/TermsAndConditions'));
const RefundPolicy = React.lazy(() => import('./pages/RefundPolicy'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));

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
                  <React.Suspense fallback={<div className="min-h-screen bg-theme-bg" />}>
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
                      <Route path="/paid-advertising" element={<PaidAdvertising />} />
                      <Route path="/ads" element={<PaidAdvertising />} />
                      <Route path="/paid-ads" element={<PaidAdvertising />} />
                      <Route path="/advertising" element={<PaidAdvertising />} />
                      <Route path="/ads-management" element={<PaidAdvertising />} />
                      <Route path="/google-ads" element={<GoogleAds />} />
                      <Route path="/google-advertising" element={<GoogleAds />} />
                      <Route path="/google-ppc" element={<GoogleAds />} />
                      <Route path="/meta-ads" element={<MetaAds />} />
                      <Route path="/facebook-ads" element={<MetaAds />} />
                      <Route path="/instagram-ads" element={<MetaAds />} />
                      <Route path="/social-ads" element={<MetaAds />} />
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
                      <Route path="/pricing" element={<LaunchKit />} />
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
                  </React.Suspense>
                </main>

                <SpatialFooter />
                <SpatialThemeControl />
                <FloatingWhatsApp />
                <SpatialModal />
                <React.Suspense fallback={null}>
                  <FirstVisitEnquiry />
                </React.Suspense>
              </div>
            </Router>
          </ModalProvider>
        </AudioProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
