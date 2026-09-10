import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Sparkles, ShieldCheck, Zap, Code, Target, Layers, Gift, Clock, DollarSign, ChevronRight, HelpCircle, CheckCircle2, MessageCircle, Star, Award, Shield, FileText } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixIcon from '../components/ui/WebliixIcon';
import WebliixButton from '../components/ui/WebliixButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';


export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  // LaunchKit Interactive Configurator State
  const [selectedWebsiteType, setSelectedWebsiteType] = useState('portfolio');
  const [selectedServices, setSelectedServices] = useState([
    'logo', 'branding', 'businessCards', 'email', 'gmb', 'ads', 'seo', 'maintenance'
  ]);

  const launchkitWebsiteOptions = [
    {
      id: 'portfolio',
      label: 'Portfolio / Business Site',
      tag: 'Best for Small Biz',
      price: 10000,
      features: ['5 Responsive Pages', 'Speed 95+ Score', 'Contact Form', 'Custom Domain Setup'],
      bonus: 'Includes 1 free social media intro post & domain setup'
    },
    {
      id: 'interactive',
      label: 'Interactive Web Application',
      tag: 'Most Popular',
      price: 23000,
      features: ['10+ Custom Dynamic Pages', 'WhatsApp Live Chat', 'Lead Automation Form', 'Blog System'],
      bonus: 'Includes contact form + free WhatsApp chat integration'
    },
    {
      id: 'store',
      label: 'E-Commerce Online Store',
      tag: 'High ROI',
      price: 49000,
      features: ['Up to 50 Product Listings', 'Razorpay/UPI Payment Gateway', 'Order Management', 'Mobile App Layout'],
      bonus: 'Includes 5 product uploads + UPI payment gateway setup'
    }
  ];

  const launchkitServicesList = [
    { id: 'logo', label: 'Vector Logo Design', price: 1000, bonus: 'Includes 1 free Insta post template' },
    { id: 'branding', label: 'Branding Kit (Colors, Fonts)', price: 2500, bonus: 'Free Brand Guidelines PDF included' },
    { id: 'businessCards', label: 'Print-Ready Business Cards', price: 1000, bonus: 'Includes 3D mockups & vector files' },
    { id: 'email', label: 'Business Professional Email', price: 1000, bonus: 'Comes with custom signature template' },
    { id: 'gmb', label: 'GMB Google Maps Rank #1', price: 2000, bonus: 'Free digital flyer for local promotion' },
    { id: 'ads', label: '5-Day Ad Campaign (Meta/Google)', price: 3500, bonus: 'Includes 3 ad creatives + copywriting' },
    { id: 'seo', label: 'On-Page SEO & Schema Setup', price: 2000, bonus: 'Free keyword report + 1 blog topic' },
    { id: 'maintenance', label: '1st Year Maintenance & SSL', price: 3000, bonus: 'Unlimited minor updates & uptime checks' }
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

  const categories = ['All', 'Webliix LaunchKit', 'Paid Advertising', 'Web Development', 'E-Commerce', 'SEO & Maps', 'Branding', 'Maintenance'];

  const filterServiceMap = {
    'Webliix LaunchKit': ['brand-launchkit'],
    'Paid Advertising': ['paid-advertising', 'google-ads', 'meta-ads'],
    'Web Development': ['website-dev', 'web-app-development', 'mobile-app-development', 'software-development', 'saas-development', 'crm-erp-development'],
    'E-Commerce': ['quick-ecommerce'],
    'SEO & Maps': ['seo-gmb'],
    'Branding': ['branding-design', 'ui-ux-design'],
    'Maintenance': ['website-maintenance']
  };

  const filteredServices = activeCategory === 'All'
    ? siteConfig.services
    : siteConfig.services.filter(s => filterServiceMap[activeCategory]?.includes(s.id));

  const seoServiceModules = [
    {
      title: 'Technical SEO Audit',
      startingPrice: '₹4,999',
      idealFor: 'Fixing technical website errors & getting indexed fast on Google',
      desc: '100+ checkpoint audit optimizing site speed, mobile-readiness, XML sitemaps, canonical tags, and schema markup.',
      deliverables: ['Speed Optimization (PageSpeed 95+)', 'XML Sitemap & Robots.txt', 'HTTPS & Canonical Fixes', 'JSON-LD Schema Implementation']
    },
    {
      title: 'On-Page Content SEO',
      startingPrice: '₹3,999',
      idealFor: 'Ranking website pages higher for specific buyer search terms',
      desc: 'Targeted title tags, meta descriptions, H1-H6 heading hierarchy, and keyword placement for buyer intent.',
      deliverables: ['Target Keyword Mapping (15-30 keywords)', 'URL & Image Alt Text Optimization', 'Internal Linking Structure', 'Content Gap Analysis']
    },
    {
      title: 'Google My Business (GMB) Local SEO',
      startingPrice: '₹4,999',
      idealFor: 'Dominating Google Maps & getting direct customer calls locally',
      desc: 'Local search engine dominance designed to rank your business profile #1 on Google Maps for regional buyer calls.',
      deliverables: ['GMB Official Verification', 'NAP Citation Consistency Check', 'Local Category & Tag Mapping', 'Review Generation Strategy']
    },
    {
      title: 'Off-Page Link Building & PR',
      startingPrice: '₹6,999',
      idealFor: 'Building domain authority & outranking tough competitors',
      desc: 'High-authority backlink building, guest post placements, brand citation monitoring, and digital PR outreach.',
      deliverables: ['High DA/DR Backlinks', 'Guest Editorial Outreach', 'Local Business Directory Listing', 'Social Signals Amplification']
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <Helmet>
        <title>Services & Clear Pricing | Web Development, SEO & Branding | {siteConfig.brand.name}</title>
        <meta name="description" content="Explore Webliix digital solutions: Webliix LaunchKit all-in-one package, custom React/Next.js web development, local SEO GMB ranking, and e-commerce applications with 100% transparent pricing." />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Transparent Pricing & Clear Deliverables
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Services Designed for <span className="text-shimmer">Maximum Clarity & Growth</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Clear scope, upfront pricing, zero hidden fees. Choose your package or customize a complete turnkey solution with full code and domain ownership.
        </p>
      </div>

      {/* Trust & Guarantee Badges Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <WebliixCard variant="feature" className="p-6 text-center space-y-2.5 flex flex-col items-center">
          <WebliixIcon icon={Zap} variant="badge" size="lg" />
          <h4 className="text-base font-display font-bold text-theme-text">5–7 Day Fast Launch</h4>
          <p className="text-xs text-theme-muted leading-relaxed">Rapid turnkey deployment with zero operational delays.</p>
        </WebliixCard>

        <WebliixCard variant="feature" className="p-6 text-center space-y-2.5 flex flex-col items-center">
          <WebliixIcon icon={Code} variant="badge" size="lg" />
          <h4 className="text-base font-display font-bold text-theme-text">100% Code & Domain Ownership</h4>
          <p className="text-xs text-theme-muted leading-relaxed">Full source code, domain, and GMB ownership transferred upon launch.</p>
        </WebliixCard>

        <WebliixCard variant="feature" className="p-6 text-center space-y-2.5 flex flex-col items-center">
          <WebliixIcon icon={ShieldCheck} variant="badge" size="lg" />
          <h4 className="text-base font-display font-bold text-theme-text">30-Day Support Guarantee</h4>
          <p className="text-xs text-theme-muted leading-relaxed">Complimentary post-launch maintenance & security checks included.</p>
        </WebliixCard>
      </div>

      {/* Category Filter Tabs for Quick Clarity */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {categories.map((cat) => (
          <WebliixButton
            key={cat}
            variant="utility"
            size="sm"
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </WebliixButton>
        ))}
      </div>

      {/* 🚀 FEATURED LAUNCHKIT INTERACTIVE CONFIGURATOR */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/40 inline-flex items-center gap-1.5">
            <Award className="w-4 h-4" /> All-In-One Brand Package
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Webliix LaunchKit Configurator
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Build your custom package in real time. Choose your website architecture and select add-on modules below.
          </p>
          <div className="pt-1 flex justify-center">
            <Link to="/launch-kit">
              <WebliixButton variant="ghost" size="sm" icon={ArrowUpRight}>
                Explore Full LaunchKit Packages
              </WebliixButton>
            </Link>
          </div>
        </div>

        <WebliixCard variant="accent" accentColor="primary" className="p-6 sm:p-10 space-y-8 relative overflow-hidden">
          
          {/* Step 1: Select Website Architecture Base */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-theme-border/60 pb-2">
              <span className="text-sm font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-theme-primary text-white text-xs flex items-center justify-center">1</span>
                Choose Website Architecture
              </span>
              <span className="text-xs font-mono text-theme-muted">Step 1 of 2</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {launchkitWebsiteOptions.map((opt) => {
                const isSelected = selectedWebsiteType === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedWebsiteType(opt.id)}
                    className={`p-6 theme-rounded-card cursor-pointer transition-all duration-300 border flex flex-col justify-between space-y-4 relative ${
                      isSelected
                        ? 'bg-theme-primary/20 border-theme-primary shadow-spatial ring-2 ring-theme-primary/50'
                        : 'glass-spatial border-theme-border/60 hover:border-theme-border hover:bg-theme-card/60'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-3 right-3 bg-theme-primary text-white text-[10px] font-mono font-bold px-2 py-0.5 theme-rounded-badge flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Selected
                      </span>
                    )}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-theme-primary px-2 py-0.5 theme-rounded-badge bg-theme-primary/10 border border-theme-primary/20 inline-block">
                        {opt.tag}
                      </span>
                      <h4 className="text-base font-display font-bold text-theme-text pt-1">{opt.label}</h4>
                      <p className="text-2xl font-mono font-extrabold text-theme-primary pt-1">
                        ₹{opt.price.toLocaleString()}
                      </p>
                    </div>

                    <ul className="space-y-1.5 text-xs text-theme-text pt-2 border-t border-theme-border/40">
                      {opt.features.map(f => (
                        <li key={f} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-2.5 theme-rounded-card bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-mono">
                      🎁 {opt.bonus}
                    </div>

                    {opt.id === 'portfolio' && (
                      <div className="pt-2 border-t border-theme-border/40 flex justify-end">
                        <Link
                          to="/portfolio"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <WebliixButton variant="ghost" size="sm" icon={ArrowUpRight}>
                            Learn More
                          </WebliixButton>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>

          {/* Step 2: Included Add-on Services */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-theme-border/60 pb-2">
              <span className="text-sm font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 theme-rounded-badge bg-theme-primary text-white text-xs flex items-center justify-center">2</span>
                Select Included Services ({selectedServices.length} Selected)
              </span>
              <span className="text-xs font-mono text-theme-muted">Toggle services on/off</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {launchkitServicesList.map((srv) => {
                const isChecked = selectedServices.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleLaunchkitService(srv.id)}
                    className={`p-4 theme-rounded-card cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                      isChecked
                        ? 'bg-theme-primary/15 border-theme-primary/70 shadow-sm'
                        : 'glass-spatial border-theme-border/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleLaunchkitService(srv.id)}
                        className="mt-0.5 theme-rounded-input border-theme-border text-theme-primary focus:ring-theme-primary w-4 h-4"
                      />
                      <div>
                        <span className="text-xs font-display font-bold text-theme-text block leading-snug">
                          {srv.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-theme-primary block mt-0.5">
                          +₹{srv.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] text-emerald-400 mt-2 font-mono bg-emerald-500/10 p-1.5 theme-rounded-card border border-emerald-500/20">
                      🎁 {srv.bonus}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Price Calculation Summary */}
          <div className="pt-6 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-6 bg-theme-card/40 p-6 theme-rounded-card">
            <div>
              <span className="text-xs font-mono text-theme-muted uppercase block font-semibold">Total Custom LaunchKit Investment</span>
              <div className="text-4xl font-mono font-extrabold text-theme-primary">
                ₹{totalLaunchkitPrice.toLocaleString()}
              </div>
              <span className="text-[11px] text-theme-muted block mt-1">Includes all selected add-ons, domain setup & 1st-year maintenance.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap">
              <Link to="/launch-kit" className="w-full sm:w-auto">
                <WebliixButton variant="secondary" icon={ArrowUpRight} size="lg" fullWidth>
                  Explore LaunchKit
                </WebliixButton>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <WebliixButton variant="primary" icon={ArrowUpRight} size="lg" fullWidth>
                  Order LaunchKit Now
                </WebliixButton>
              </Link>
              <a
                href="https://wa.me/919310181569?text=Hi%20Webliix!%20I'm%20interested%20in%20customizing%20my%20LaunchKit."
                target="_blank"
                rel="noreferrer"
                className="p-3.5 theme-rounded-btn bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/25 transition-colors flex items-center justify-center shrink-0"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

        </WebliixCard>
      </section>

      {/* FULL SERVICES CATALOG GRID */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">Comprehensive Modules</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">Core Service Offerings</h2>
          <p className="text-theme-muted text-xs sm:text-sm">Direct, clear breakdown of deliverables and upfront pricing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <GlassCard key={service.id} className="p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-theme-border/80 hover:border-theme-primary/60 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl p-2 theme-rounded-card bg-theme-primary/10 border border-theme-primary/20">{service.icon}</span>
                  <span className="px-3 py-1 theme-rounded-badge text-xs font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
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
                  <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider block">
                    Included Deliverables
                  </span>
                  <ul className="space-y-2 text-xs text-theme-text">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-theme-primary shrink-0" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-theme-border flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <span className="text-[10px] font-mono text-theme-muted block uppercase">Pricing</span>
                  <span className="text-base font-mono font-extrabold text-theme-primary">
                    {service.startingPrice}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {service.link && (
                    <Link to={service.link}>
                      <WebliixButton variant="ghost" icon={ArrowUpRight} size="sm">
                        Learn More
                      </WebliixButton>
                    </Link>
                  )}
                  <Link to="/contact">
                    <WebliixButton variant="primary" icon={ArrowUpRight} size="sm">
                      {service.id === 'brand-launchkit'
                        ? 'Explore LaunchKit'
                        : service.id === 'quick-ecommerce'
                        ? 'Book Store Launch'
                        : service.startingPrice === 'Custom Quote'
                        ? 'Get Free Quote & Estimate'
                        : 'Book Service'}
                    </WebliixButton>
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* DETAILED SEO & MARKETING MATRIX */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Search Engine Dominance
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Specialized SEO & GMB Modules
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Data-driven search engine optimization designed to generate organic phone calls and qualified leads.
          </p>
          <div className="pt-2 flex justify-center">
            <Link to="/seo">
              <WebliixButton variant="ghost" icon={ArrowUpRight} size="sm">
                Learn More &amp; View All SEO Packages
              </WebliixButton>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {seoServiceModules.map((mod, idx) => (
            <GlassCard key={idx} className="p-6 border border-theme-border space-y-4 flex flex-col justify-between group hover:border-theme-primary/50 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                    {mod.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    {mod.startingPrice}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-theme-primary/10 border border-theme-primary/20 text-xs font-mono text-theme-primary">
                  💡 <span className="font-bold">Ideal for:</span> {mod.idealFor}
                </div>

                <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                  {mod.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-theme-primary uppercase font-bold block">Key Deliverables</span>
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

              <div className="pt-3 border-t border-theme-border flex items-center justify-between gap-2">
                <Link to="/seo">
                  <WebliixButton variant="ghost" icon={ArrowUpRight} size="sm">
                    Learn More
                  </WebliixButton>
                </Link>
                <Link to="/contact">
                  <WebliixButton variant="primary" icon={ArrowUpRight} size="sm">
                    Book SEO Module
                  </WebliixButton>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>



    </div>
  );
}

