import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Sparkles, ShieldCheck, Zap, Code, Target, Layers, Gift, Clock, DollarSign, ChevronRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import SpatialButton from '../components/ui/SpatialButton';
import QuoteEstimator from '../components/spatial/QuoteEstimator';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  // LaunchKit Interactive Configurator State (Extracted from old site BrandLaunchKit.jsx)
  const [selectedWebsiteType, setSelectedWebsiteType] = useState('portfolio');
  const [selectedServices, setSelectedServices] = useState([
    'logo', 'branding', 'businessCards', 'email', 'gmb', 'ads', 'seo', 'maintenance'
  ]);

  const launchkitWebsiteOptions = [
    {
      id: 'portfolio',
      label: 'Portfolio Website',
      price: 10000,
      bonus: 'Includes 1 free social media intro post & custom domain setup'
    },
    {
      id: 'interactive',
      label: 'Interactive Website (Starter)',
      price: 23000,
      bonus: 'Includes contact form + free WhatsApp chat integration'
    },
    {
      id: 'store',
      label: 'E-Commerce Store (Starter)',
      price: 49000,
      bonus: 'Includes 5 product uploads + UPI payment gateway setup'
    }
  ];

  const launchkitServicesList = [
    { id: 'logo', label: 'Vector Logo Design', price: 1000, bonus: 'Includes 1 free Insta post template' },
    { id: 'branding', label: 'Branding Kit (Colors, Fonts)', price: 2500, bonus: 'Free Brand Guidelines PDF included' },
    { id: 'businessCards', label: 'Business Card Print-Ready Design', price: 1000, bonus: 'Includes 3D mockups & vector files' },
    { id: 'email', label: 'Business Professional Email Setup', price: 1000, bonus: 'Comes with custom signature template' },
    { id: 'gmb', label: 'Google My Business (GMB) Rank #1 Setup', price: 2000, bonus: 'Free digital flyer for local promotion' },
    { id: 'ads', label: '5-Day Ad Campaign (Meta/Google Ads)', price: 3500, bonus: 'Includes 3 ad creatives + copywriting' },
    { id: 'seo', label: 'Technical & On-Page SEO Setup', price: 2000, bonus: 'Free keyword report + 1 blog topic' },
    { id: 'maintenance', label: 'Website Maintenance (1st Year)', price: 3000, bonus: 'Unlimited minor updates & uptime checks' }
  ];

  const toggleLaunchkitService = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const currentWebsitePrice = launchkitWebsiteOptions.find(w => w.id === selectedWebsiteType)?.price || 0;
  const currentServicesPrice = selectedServices.reduce((sum, id) => {
    const service = launchkitServicesList.find(s => s.id === id);
    return sum + (service?.price || 0);
  }, 0);

  const totalLaunchkitPrice = currentWebsitePrice + currentServicesPrice;
  const isValidLaunchkit = selectedServices.length >= 4;

  const categories = ['All', 'Webliix LaunchKit', 'Web Development', 'E-Commerce', 'SEO & Maps', 'Branding', 'Maintenance'];

  const seoServiceModules = [
    {
      title: 'Technical SEO Audit',
      startingPrice: '₹4,999',
      desc: '100+ checkpoint audit optimizing site speed, mobile-readiness, XML sitemaps, canonical tags, and schema markup.',
      deliverables: ['Speed Optimization (PageSpeed 95+)', 'XML Sitemap & Robots.txt', 'HTTPS & Canonical Fixes', 'JSON-LD Schema Implementation']
    },
    {
      title: 'On-Page Content SEO',
      startingPrice: '₹3,999',
      desc: 'Targeted title tags, meta descriptions, H1-H6 heading hierarchy, and keyword placement for buyer intent.',
      deliverables: ['Target Keyword Mapping (15-30 keywords)', 'URL & Image Alt Text Optimization', 'Internal Linking Structure', 'Content Gap Analysis']
    },
    {
      title: 'Google My Business (GMB) Local SEO',
      startingPrice: '₹4,999',
      desc: 'Local search engine dominance designed to rank your business profile #1 on Google Maps for regional buyer calls.',
      deliverables: ['GMB Official Verification', 'NAP Citation Consistency Check', 'Local Category & Tag Mapping', 'Review Generation Strategy']
    },
    {
      title: 'Off-Page Link Building & PR',
      startingPrice: '₹6,999',
      desc: 'High-authority backlink building, guest post placements, brand citation monitoring, and digital PR outreach.',
      deliverables: ['High DA/DR Backlinks', 'Guest Editorial Outreach', 'Local Business Directory Listing', 'Social Signals Amplification']
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <Helmet>
        <title>Digital Services & Packages | Web Development, SEO & Branding | {siteConfig.brand.name}</title>
        <meta name="description" content="Explore Webliix digital solutions: Webliix LaunchKit all-in-one package, custom React/Next.js web development, local SEO GMB ranking, and e-commerce applications." />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Complete Service Catalog
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text">
          Digital Services Engineered for <span className="text-shimmer">Growth</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          From 5-day brand launches to custom full-stack web applications and local GMB SEO dominance, explore our transparent, high-ROI service modules.
        </p>
      </div>

      {/* Guarantees Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <GlassCard className="p-6 text-center border border-theme-border space-y-2">
          <div className="w-10 h-10 rounded-xl bg-theme-primary/20 border border-theme-primary mx-auto flex items-center justify-center text-theme-primary">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-display font-bold text-theme-text">5–7 Day Fast Launch</h4>
          <p className="text-xs text-theme-muted">Rapid turnkey deployment with zero operational delays.</p>
        </GlassCard>

        <GlassCard className="p-6 text-center border border-theme-border space-y-2">
          <div className="w-10 h-10 rounded-xl bg-theme-primary/20 border border-theme-primary mx-auto flex items-center justify-center text-theme-primary">
            <Code className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-display font-bold text-theme-text">100% Code & Asset Ownership</h4>
          <p className="text-xs text-theme-muted">Full source code, domain, and GMB ownership upon project completion.</p>
        </GlassCard>

        <GlassCard className="p-6 text-center border border-theme-border space-y-2">
          <div className="w-10 h-10 rounded-xl bg-theme-primary/20 border border-theme-primary mx-auto flex items-center justify-center text-theme-primary">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-display font-bold text-theme-text">30 Days Post-Launch Support</h4>
          <p className="text-xs text-theme-muted">Complimentary post-launch maintenance & security checks included.</p>
        </GlassCard>
      </div>

      {/* 🚀 FEATURED LAUNCHKIT INTERACTIVE CONFIGURATOR */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30 inline-block">
            Featured All-In-One Package
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Webliix LaunchKit Configurator
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Customize your complete digital brand starter kit. Select your website framework and add-on services to calculate instant pricing.
          </p>
        </div>

        <GlassCard className="p-6 sm:p-10 border border-theme-primary/40 shadow-spatial space-y-8">
          
          {/* Step 1: Select Website Base */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider">
                Step 1: Choose Website Architecture
              </span>
              <span className="text-[11px] font-mono text-theme-muted">Select 1 option</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {launchkitWebsiteOptions.map((opt) => {
                const isSelected = selectedWebsiteType === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedWebsiteType(opt.id)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isSelected
                        ? 'bg-theme-primary/20 border-theme-primary shadow-spatial'
                        : 'glass-spatial border-theme-border/60 hover:border-theme-border'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-display font-bold text-theme-text">{opt.label}</h4>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-theme-primary shrink-0" />}
                    </div>
                    <p className="text-base font-mono font-bold text-theme-primary">
                      ₹{opt.price.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-emerald-400 mt-2 font-mono">
                      🎁 {opt.bonus}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Included Add-on Services */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider">
                Step 2: Select Brand Services (Min 4 Services Required)
              </span>
              <span className="text-[11px] font-mono text-theme-muted">
                {selectedServices.length} Selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {launchkitServicesList.map((srv) => {
                const isChecked = selectedServices.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleLaunchkitService(srv.id)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                      isChecked
                        ? 'bg-theme-primary/15 border-theme-primary/60 shadow-sm'
                        : 'glass-spatial border-theme-border/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleLaunchkitService(srv.id)}
                        className="mt-0.5 rounded border-theme-border text-theme-primary focus:ring-theme-primary"
                      />
                      <div>
                        <span className="text-xs font-display font-bold text-theme-text block leading-snug">
                          {srv.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-theme-primary block mt-0.5">
                          ₹{srv.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] text-emerald-400 mt-2 font-mono">
                      🎁 {srv.bonus}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Price Calculation Summary */}
          <div className="pt-4 border-t border-theme-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-theme-muted uppercase block">Estimated LaunchKit Investment</span>
              <div className="text-3xl font-mono font-extrabold text-theme-primary">
                ₹{totalLaunchkitPrice.toLocaleString()}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/contact">
                <SpatialButton variant="primary" icon={ArrowUpRight} className="text-sm py-3 px-6">
                  Order Customized LaunchKit
                </SpatialButton>
              </Link>
            </div>
          </div>

        </GlassCard>
      </section>

      {/* DETAILED SEO & MARKETING MATRIX */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Search Engine Dominance
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Specialized SEO & GMB Services
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Data-driven search engine optimization designed to generate organic phone calls and qualified leads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {seoServiceModules.map((mod, idx) => (
            <GlassCard key={idx} className="p-6 border border-theme-border space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                    {mod.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    {mod.startingPrice}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                  {mod.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-theme-primary uppercase font-semibold block">Key Deliverables</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-text">
                    {mod.deliverables.map((del, j) => (
                      <li key={j} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-theme-border flex justify-end">
                <Link to="/contact">
                  <SpatialButton variant="glass" icon={ArrowUpRight} className="text-xs py-2 px-4">
                    Book SEO Module
                  </SpatialButton>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FULL SERVICE CARDS GRID */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">Service Offerings</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">Complete Service Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <GlassCard key={service.id} className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-theme-text">
                  {service.title}
                </h3>
                <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-semibold text-theme-primary uppercase tracking-wider block">
                    Included Features
                  </span>
                  <ul className="space-y-1.5 text-xs text-theme-text">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-theme-border flex items-center justify-between">
                <span className="text-sm font-mono font-bold text-theme-primary">
                  {service.startingPrice}
                </span>
                <Link to="/contact">
                  <SpatialButton variant="primary" icon={ArrowUpRight}>
                    Get Started
                  </SpatialButton>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* INTERACTIVE PACKAGE ESTIMATOR */}
      <section className="pt-4">
        <QuoteEstimator />
      </section>

    </div>
  );
}
