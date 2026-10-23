import React, { useState } from 'react';
import {
  Link } from 'react-router-dom';
import { motion,
  AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  ArrowUpRight,
  ExternalLink,
  HelpCircle,
  ChevronDown,
  Check,
  Star,
  Award,
  Clock,
  Code,
  Target,
  Sparkles,
  Layers,
  Rocket,
  Search,
  MapPin,
  TrendingUp,
  Cpu,
  Smartphone,
  Gauge,
  Activity,
  Terminal,
  RefreshCw,
  Server
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { businessConfig } from '../config/businessConfig';
import SpatialHeroCanvas from '../components/spatial/SpatialHeroCanvas';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixIcon from '../components/ui/WebliixIcon';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixSpotlight from '../components/WebliixSpotlight';
import { useModal } from '../context/ModalContext';
import { optimizeCloudinaryUrl, getCloudinarySrcSet } from '../utils/cloudinary';

export default function Home() {
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const { openModal } = useModal();
  const [cockpitTab, setCockpitTab] = useState('vitals'); // 'vitals' | 'stack' | 'seo'
  const [isAuditing, setIsAuditing] = useState(false);

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
    }, 850);
  };

  const handleOpenServiceModal = (service) => {
    openModal({
      title: service.title,
      content: (
        <div className="space-y-4">
          <p className="text-theme-muted text-sm leading-relaxed">{service.fullDesc}</p>
          <div className="p-4 rounded-2xl glass-spatial border border-theme-primary/30 space-y-2">
            <span className="text-xs font-semibold text-theme-primary uppercase tracking-wider block mb-2">Key Deliverables</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-text">
              {service.features.map(feat => (
                <li key={feat} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-mono font-bold text-theme-primary">
              {service.startingPrice}
            </span>
            <Link to="/contact">
              <WebliixButton variant="primary" icon={ArrowUpRight}>
                Book Consultation
              </WebliixButton>
            </Link>
          </div>
        </div>
      )
    });
  };

  const faqs = [
    {
      q: 'How fast can my website be launched?',
      a: 'Webliix LaunchKit is designed for a fast business launch. It can include a professional website, brand identity, domain setup, Google Business Profile support and essential launch setup. Delivery time depends on the final scope and the material provided.'
    },
    {
      q: 'Do I get 100% ownership of my website and code?',
      a: 'Yes, absolutely. Once final deliverables are approved, you hold 100% ownership of all domain records, source code, design graphics, and account credentials with zero hidden platform lock-in fees.'
    },
    {
      q: 'What is included in the Google My Business (GMB) Local SEO setup?',
      a: 'We can help eligible businesses set up or optimize their Google Business Profile, improve business information consistency, structure local service information, and build a foundation for relevant local searches. Specific rankings are not guaranteed.'
    },
    {
      q: 'Can Webliix build custom e-commerce stores with online payments?',
      a: 'Yes. We build e-commerce websites using Shopify, WooCommerce or custom web technologies, with product catalogs, mobile-friendly shopping experiences, payment integration, checkout and order workflows according to the project scope.'
    },
    {
      q: 'Do you provide support after the website goes live?',
      a: 'Post-launch support is available according to the selected package or maintenance plan. Support can include technical fixes, content updates, performance checks and ongoing website maintenance.'
    }
  ];

  const whyChooseUs = [
    {
      iconComponent: Clock,
      title: 'Clear Project Delivery',
      desc: 'We plan the website scope, content, development and launch process around your business requirements and agreed project timeline.'
    },
    {
      iconComponent: Code,
      title: 'Custom Website Development',
      desc: 'Modern, maintainable website and application development using technologies selected for your project requirements, performance and scalability.'
    },
    {
      iconComponent: Target,
      title: 'SEO-Ready Website Foundations',
      desc: 'Search-friendly page structure, metadata, internal linking, technical SEO and Google Business Profile support where appropriate.'
    },
    {
      iconComponent: ShieldCheck,
      title: 'Transparent Pricing & Ownership',
      desc: 'Clear project scope and pricing with source-code and domain ownership arrangements explained before and during delivery.'
    }
  ];

  const industryCapabilities = [
    { name: 'Startups & SMEs', desc: 'Business websites, landing pages and digital foundations for new and growing companies', link: '/launch-kit', linkText: 'Explore LaunchKit' },
    { name: 'Local Showrooms & Retail', desc: 'Business websites, product showcases, local search foundations and online storefronts', link: '/ecommerce-store', linkText: 'E-Commerce Solutions' },
    { name: 'Real Estate & Builders', desc: 'Property showcase websites, project pages, lead forms and location-focused content', link: '/website-development', linkText: 'Web Development' },
    { name: 'Clinics & Healthcare', desc: 'Professional websites, service information, appointment enquiries and local search optimization', link: '/seo', linkText: 'Local SEO & GMB' },
    { name: 'Education & Coaching', desc: 'Course, student portals, enquiry pages and custom interactive web platform architecture', link: '/web-app-development', linkText: 'Custom Web Apps' },
    { name: 'Restaurants & Cafes', desc: 'Menus, location information, digital menus and targeted social ad campaigns', link: '/paid-advertising', linkText: 'Paid Ads Management' }
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // Comprehensive SEO Structured Data JSON-LD Schemas (Google Rich Snippets)
  // ─────────────────────────────────────────────────────────────────────────
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://webliix.com/#organization',
    name: siteConfig.brand.name,
    alternateName: 'Webliix Digital Agency',
    url: 'https://webliix.com',
    logo: 'https://webliix.com/logo.png',
    description: 'Webliix provides website development, e-commerce, SEO, digital marketing, branding and custom software solutions for businesses in India and international markets.',
    foundingDate: siteConfig.brand.founded || '2025',
    founders: [
      {
        '@type': 'Person',
        name: 'Himanshu Sharma',
        jobTitle: 'Managing Director'
      },
      {
        '@type': 'Person',
        name: 'Abdul Latif',
        jobTitle: 'Technical Lead'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1st Floor, Hotel Raj Inn, Tetri, Naugachia Road',
      addressLocality: 'Naugachia',
      addressRegion: 'Bihar',
      postalCode: '853204',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.brand.contactPhone,
      contactType: 'customer service',
      areaServed: ['IN', 'US', 'CA', 'DE'],
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      siteConfig.brand.socials.linkedin,
      siteConfig.brand.socials.instagram,
      siteConfig.brand.socials.facebook,
      siteConfig.brand.socials.github
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://webliix.com/#website',
    url: 'https://webliix.com',
    name: siteConfig.brand.name,
    description: 'Website development, SEO and digital solutions for businesses in India and international markets',
    publisher: {
      '@id': 'https://webliix.com/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://webliix.com/blog?keyword={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://webliix.com/#localservice',
    name: 'Webliix - Website Development & Digital Services',
    image: 'https://webliix.com/logo.png',
    url: 'https://webliix.com',
    telephone: siteConfig.brand.contactPhone,
    priceRange: '₹9,999 - ₹49,999',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1st Floor, Hotel Raj Inn, Tetri, Naugachia Road',
      addressLocality: 'Naugachia',
      addressRegion: 'Bihar',
      postalCode: '853204',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.3900',
      longitude: '87.0989'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      }
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Greater Noida' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Germany' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Webliix Core Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webliix LaunchKit (Turnkey Business Website & Branding)',
            description: 'Business launch package combining responsive website development, branding, Google Business Profile support and SEO foundations.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web & Application Development',
            description: 'Custom web applications and business software built with modern frontend, backend, database and cloud technologies according to project requirements.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Business Profile (GMB) & Local SEO Optimization',
            description: 'Google Business Profile support and local SEO services focused on improving business information, relevance and visibility for appropriate local searches; rankings are not guaranteed.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopify & WooCommerce E-Commerce Development',
            description: 'E-commerce website development with product catalogs, mobile-friendly storefronts, checkout and payment integration according to project scope.'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16">
      {/* ADVANCED SEO METADATA & SCHEMA.ORG INJECTION */}
      <Helmet>
        <title>Webliix | Website Development, SEO & Digital Solutions</title>
        <meta
          name="description"
          content="Webliix builds business websites, e-commerce stores, custom web applications and SEO-focused digital solutions for businesses in India and international markets."
        />
        <meta
          name="keywords"
          content="website development India, web design agency NCR, local SEO services, Google Business Profile optimization, GMB ranking, ecommerce website development, custom web applications, SaaS development, mobile app development, Webliix LaunchKit, website maintenance"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://webliix.com/" />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webliix.com/" />
        <meta property="og:title" content="Webliix | Website Development, SEO & Digital Solutions" />
        <meta property="og:description" content="Business websites, e-commerce, custom web applications, SEO and digital solutions for businesses in India and international markets." />
        <meta property="og:image" content="https://webliix.com/og-image.jpg" />
        <meta property="og:site_name" content="Webliix" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://webliix.com/" />
        <meta name="twitter:title" content="Webliix | Website Development, SEO & Digital Solutions" />
        <meta name="twitter:description" content="Business websites, e-commerce, custom web applications, SEO and digital solutions for businesses in India and international markets." />
        <meta name="twitter:image" content="https://webliix.com/og-image.jpg" />
{/* Google Structured Data JSON-LD Injections */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(professionalServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* REDESIGNED INTERACTIVE SPATIAL HERO SECTION */}
      <section className="relative pt-4 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <SpatialHeroCanvas />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Main Hero Split Grid: Left Value Drivers + Right Interactive Engineering Cockpit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Headings, Value Drivers, Actions */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Eyebrow Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Webliix v2.5 Engineering • Fast Website &amp; SEO Engine</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-theme-text leading-[1.08] tracking-tight">
                High-Performance Web &amp; App Development With<br />
                <span className="text-shimmer">Data-Driven SEO Growth</span>
              </h1>

              {/* Subtext */}
              <p className="text-theme-muted text-sm sm:text-base max-w-2xl leading-relaxed">
                We engineer ultra-fast enterprise websites, headless Shopify e-commerce stores, custom cloud web applications, and local search engines. Built for sub-second page loads, conversion velocity, and 100% source-code ownership.
              </p>

              {/* Interactive Key Highlights Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl glass-spatial border border-theme-border/60 hover:border-theme-primary/40 transition-all flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-theme-primary text-xs font-bold font-mono">
                    <Zap className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                    <span>5-Day Launch</span>
                  </div>
                  <span className="text-[11px] text-theme-muted leading-tight">Turnkey launch kit with complete domain &amp; GMB</span>
                </div>

                <div className="p-2.5 rounded-xl glass-spatial border border-theme-border/60 hover:border-theme-primary/40 transition-all flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-theme-primary text-xs font-bold font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                    <span>100% Code Rights</span>
                  </div>
                  <span className="text-[11px] text-theme-muted leading-tight">Zero vendor lock-in; all source &amp; hosting is yours</span>
                </div>

                <div className="p-2.5 rounded-xl glass-spatial border border-theme-border/60 hover:border-theme-primary/40 transition-all flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-theme-primary text-xs font-bold font-mono">
                    <Gauge className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                    <span>99+ Vitals</span>
                  </div>
                  <span className="text-[11px] text-theme-muted leading-tight">Sub-second LCP with edge CDN caching</span>
                </div>

                <div className="p-2.5 rounded-xl glass-spatial border border-theme-border/60 hover:border-theme-primary/40 transition-all flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-theme-primary text-xs font-bold font-mono">
                    <Target className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                    <span>#1 Local SEO</span>
                  </div>
                  <span className="text-[11px] text-theme-muted leading-tight">Schema.org JSON-LD &amp; Google Map Pack setup</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/contact">
                  <WebliixButton variant="primary" icon={ArrowRight} className="text-xs sm:text-sm px-6 py-3">
                    Discuss Your Project
                  </WebliixButton>
                </Link>
                <Link to="/services">
                  <WebliixButton variant="ghost" className="text-xs sm:text-sm px-5 py-3">
                    Explore Services
                  </WebliixButton>
                </Link>
                <Link to="/launch-kit">
                  <WebliixButton variant="ghost" className="text-xs sm:text-sm px-5 py-3 text-theme-primary">
                    View LaunchKit
                  </WebliixButton>
                </Link>
              </div>

              {/* Social Proof & Compliance Strip */}
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-theme-muted">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-theme-text font-mono">4.9/5 Rating</span>
                  <span className="text-theme-muted">• 120+ Brands Launched</span>
                </div>

                <Link
                  to="/business-information"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-spatial border border-theme-primary/30 text-[10.5px] font-mono text-theme-primary hover:bg-theme-primary/10 transition group"
                >
                  <Award className="w-3 h-3 text-theme-primary shrink-0" />
                  <span>Udyam Registered Micro Enterprise</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE WEBLIIX SYSTEMS COCKPIT & LIVE DIAGNOSTICS */}
            <div className="lg:col-span-5">
              <WebliixCard variant="featured" className="p-4 sm:p-6 shadow-2xl relative">
                {/* Cockpit Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-theme-border/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-theme-muted ml-1 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-theme-primary" /> webliix-cockpit.sh
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Cockpit Tabs Switcher */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-theme-bg/60 rounded-xl border border-theme-border/60 mb-5 text-[11px] font-mono font-semibold">
                  <button
                    onClick={() => setCockpitTab('vitals')}
                    className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      cockpitTab === 'vitals'
                        ? 'bg-theme-primary text-black font-bold shadow-sm'
                        : 'text-theme-muted hover:text-theme-text'
                    }`}
                  >
                    <Gauge className="w-3 h-3" />
                    <span>Speed</span>
                  </button>
                  <button
                    onClick={() => setCockpitTab('stack')}
                    className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      cockpitTab === 'stack'
                        ? 'bg-theme-primary text-black font-bold shadow-sm'
                        : 'text-theme-muted hover:text-theme-text'
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>Stack</span>
                  </button>
                  <button
                    onClick={() => setCockpitTab('seo')}
                    className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      cockpitTab === 'seo'
                        ? 'bg-theme-primary text-black font-bold shadow-sm'
                        : 'text-theme-muted hover:text-theme-text'
                    }`}
                  >
                    <Search className="w-3 h-3" />
                    <span>SEO</span>
                  </button>
                </div>

                {/* Tab 1: Core Web Vitals & Speed */}
                {cockpitTab === 'vitals' && (
                  <div className="space-y-4">
                    {/* Lighthouse Scores Ring Showcase */}
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {[
                        { label: 'Performance', val: isAuditing ? '...' : '100', color: 'text-emerald-400' },
                        { label: 'Accessibility', val: isAuditing ? '...' : '100', color: 'text-emerald-400' },
                        { label: 'Best Practices', val: isAuditing ? '...' : '100', color: 'text-emerald-400' },
                        { label: 'SEO Health', val: isAuditing ? '...' : '100', color: 'text-emerald-400' },
                      ].map((item, i) => (
                        <div key={i} className="p-2 rounded-xl glass-spatial border border-theme-border/60">
                          <div className={`text-base sm:text-lg font-mono font-bold ${item.color}`}>
                            {item.val}
                          </div>
                          <div className="text-[9.5px] font-mono text-theme-muted truncate mt-0.5">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Telemetry Metrics Table */}
                    <div className="p-3 rounded-xl bg-theme-bg/50 border border-theme-border/60 space-y-2 text-xs font-mono">
                      <div className="flex justify-between items-center text-theme-muted">
                        <span className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-theme-primary" />
                          Largest Contentful Paint (LCP)
                        </span>
                        <span className="text-emerald-400 font-bold">{isAuditing ? 'Calculating...' : '0.42s'}</span>
                      </div>
                      <div className="flex justify-between items-center text-theme-muted">
                        <span className="flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          Interaction to Next Paint (INP)
                        </span>
                        <span className="text-emerald-400 font-bold">{isAuditing ? 'Calculating...' : '12ms'}</span>
                      </div>
                      <div className="flex justify-between items-center text-theme-muted">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          Cumulative Layout Shift (CLS)
                        </span>
                        <span className="text-emerald-400 font-bold">{isAuditing ? 'Calculating...' : '0.00'}</span>
                      </div>
                      <div className="flex justify-between items-center text-theme-muted">
                        <span className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-indigo-400" />
                          Cloudflare Edge TTFB
                        </span>
                        <span className="text-emerald-400 font-bold">{isAuditing ? 'Calculating...' : '48ms'}</span>
                      </div>
                    </div>

                    {/* Interactive Re-Audit Action Button */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-mono text-theme-muted">
                        Target benchmark: Mobile 4G Fast
                      </span>
                      <button
                        onClick={handleRunAudit}
                        disabled={isAuditing}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary hover:bg-theme-primary/10 transition active:scale-95 disabled:opacity-60"
                      >
                        <RefreshCw className={`w-3 h-3 ${isAuditing ? 'animate-spin' : ''}`} />
                        <span>{isAuditing ? 'Simulating Audit...' : 'Re-test Speed'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 2: Modern Production Tech Stack */}
                {cockpitTab === 'stack' && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 rounded-xl glass-spatial border border-theme-border/60 hover:border-theme-primary/40 transition">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-theme-text flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5 text-theme-primary" /> Modern Frontend Core
                        </span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">0.0s Hydration</span>
                      </div>
                      <p className="text-[11px] text-theme-muted">React 19, Vite Engine, Tailwind CSS, Framer Motion</p>
                    </div>

                    <div className="p-3 rounded-xl glass-spatial border border-theme-border/60 hover:border-theme-primary/40 transition">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-theme-text flex items-center gap-1.5">
                          <Server className="w-3.5 h-3.5 text-theme-primary" /> Backend &amp; Architecture
                        </span>
                        <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">Headless &amp; Cloud</span>
                      </div>
                      <p className="text-[11px] text-theme-muted">Node.js, Spring Boot microservices, PostgreSQL, Shopify Liquid</p>
                    </div>

                    <div className="p-3 rounded-xl glass-spatial border border-theme-border/60 hover:border-theme-primary/40 transition">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-theme-text flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-theme-primary" /> Global Edge Security
                        </span>
                        <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">SSL 256-bit</span>
                      </div>
                      <p className="text-[11px] text-theme-muted">Cloudflare Enterprise CDN, DDoS Shield, Automated Daily Backups</p>
                    </div>

                    <div className="pt-2 flex justify-between items-center text-[10px] text-theme-muted">
                      <span>✓ 100% Client Code Ownership</span>
                      <span>✓ Zero Platform Lock-in</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Search Engine Radar & SERP */}
                {cockpitTab === 'seo' && (
                  <div className="space-y-3">
                    {/* Simulated Google SERP Card */}
                    <div className="p-3 rounded-xl bg-theme-bg/60 border border-theme-border/80 space-y-1.5 text-left">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-theme-muted">
                        <Globe className="w-3 h-3 text-emerald-400" />
                        <span>https://webliix.com › website-development</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-theme-primary hover:underline cursor-pointer">
                        Top Website Development &amp; SEO Growth Agency | Webliix
                      </div>
                      <div className="flex items-center gap-2 text-[10.5px] font-mono text-amber-400">
                        <span>★★★★★ 4.9 (48 reviews)</span>
                        <span className="text-theme-muted">• Fast 5-Day Delivery</span>
                      </div>
                      <p className="text-[11px] text-theme-muted line-clamp-2">
                        Turnkey business website design, custom software applications, and Google Business Profile ranking engines built for sustained revenue growth.
                      </p>
                    </div>

                    {/* Ranking Signal Indicators */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg glass-spatial border border-theme-border/60">
                        <div className="text-emerald-400 font-bold text-sm">#1 Google 3-Pack</div>
                        <div className="text-[10px] text-theme-muted">Target Local Search Ranking</div>
                      </div>
                      <div className="p-2.5 rounded-lg glass-spatial border border-theme-border/60">
                        <div className="text-theme-primary font-bold text-sm">+340% Traffic</div>
                        <div className="text-[10px] text-theme-muted">Avg. Organic Search Growth</div>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-theme-muted">
                      <span>✓ JSON-LD Schema Verified</span>
                      <span>✓ Canonical &amp; Sitemap Auto-Sync</span>
                    </div>
                  </div>
                )}
              </WebliixCard>
            </div>
          </div>

          {/* DYNAMIC EDITORIAL SPOTLIGHT HIGHLIGHT */}
          <div className="w-full mt-10">
            <WebliixSpotlight />
          </div>

          {/* Trust Highlights Strip */}
          <div className="mt-8 pt-6 border-t border-theme-border/40 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-xs font-mono text-theme-muted">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-theme-primary" />
              <span>5-Day Fast Turnaround Available</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-theme-primary" />
              <span>Serving Clients Globally Across 4 Continents</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-theme-primary" />
              <span>100% Full Source Code &amp; Domain Ownership</span>
            </span>
            <Link to="/business-information" className="hover:text-theme-primary transition flex items-center gap-1">
              <Award className="w-4 h-4 text-theme-primary" />
              <span>Government Registered (Udyam: {businessConfig.udyamNumber})</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS SHOWCASE TICKER */}
      <section className="relative z-10 py-10 border-y border-theme-border/40 bg-theme-bg/40 backdrop-blur-md overflow-hidden">
        <div className="text-center mb-6 text-[11px] font-mono text-theme-muted uppercase tracking-widest font-semibold">
          120+ Projects Delivered Across Business &amp; Digital Sectors
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
            {siteConfig.clients.map((client, idx) => (
              <WebliixCard
                key={idx}
                variant="panel"
                className="p-2 sm:p-3 h-16 sm:h-20 lg:h-24 bg-white border border-gray-200/80 shadow-sm theme-rounded-card group hover:border-theme-primary/60 transition-all flex items-center justify-center overflow-hidden"
              >
                <img
                  src={optimizeCloudinaryUrl(client.logo, { width: 240 })}
                  srcSet={`${optimizeCloudinaryUrl(client.logo, { width: 120 })} 120w, ${optimizeCloudinaryUrl(client.logo, { width: 240 })} 240w`}
                  sizes="(max-width: 640px) 120px, 120px"
                  alt={`${client.name} - Webliix Client`}
                  width="120"
                  height="56"
                  loading="lazy"
                  decoding="async"
                  className="w-auto h-auto max-h-11 sm:max-h-14 max-w-[85%] object-contain mx-auto group-hover:scale-105 transition-all duration-300"
                />
              </WebliixCard>
            ))}
          </div>
        </div>
      </section>

      {/* STATS METRICS SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.stats.map((stat, i) => (
            <WebliixCard key={i} variant="stat" className="p-5 group">
              <div className="text-2xl sm:text-4xl font-display font-extrabold text-theme-primary mb-1 group-hover:scale-105 transition-transform">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-theme-muted">
                {stat.label}
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* INFORMATIVE SECTION: WHY CHOOSE WEBLIIX */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Competitive Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Why Businesses Work With Webliix
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            We combine website development, search-friendly foundations and practical digital services around the needs of your business and customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyChooseUs.map((item, idx) => (
            <WebliixCard key={idx} variant="feature" className="p-6 flex gap-4 items-start group">
              <WebliixIcon icon={item.iconComponent} variant="badge" size="lg" className="group-hover:scale-110" />
              <div className="space-y-1.5">
                <h3 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-theme-muted leading-relaxed">{item.desc}</p>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Services &amp; Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Website Development, SEO &amp; Digital Services
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Explore websites, e-commerce, SEO, advertising, branding and custom software solutions built around your business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service) => (
            <WebliixCard
              key={service.id}
              variant="featured"
              className="p-5 sm:p-6 flex flex-col justify-between space-y-4 group hover:border-theme-primary/60 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-theme-primary/10 text-theme-primary group-hover:bg-theme-primary group-hover:text-white transition-colors duration-200">
                    <WebliixIcon icon={service.icon} size="md" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                  <Link to={service.link || '/services'} className="hover:underline">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-theme-muted text-xs leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-theme-border flex items-center justify-between text-xs gap-2">
                <span className="font-mono font-bold text-theme-primary">
                  {service.startingPrice}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenServiceModal(service)}
                    className="text-theme-muted hover:text-theme-text text-[11px] font-mono font-semibold transition-colors"
                  >
                    Quick View
                  </button>
                  <Link
                    to={service.link || '/services'}
                    className="text-theme-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* WEBLIIX LAUNCHKIT SHOWCASE BANNER */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-6">
        <WebliixCard variant="accent" accentColor="primary" className="p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-theme-primary/50 shadow-spatial">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-mono font-bold border border-theme-primary/30 inline-flex items-center gap-1.5">
              <WebliixIcon icon={Rocket} variant="inline" size="xs" color="primary" /> Turnkey Business Launch Kit
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
              Webliix LaunchKit: Complete Business Launch Package
            </h3>
            <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
              A practical business launch package combining website development, branding, Google Business Profile support, WhatsApp integration and SEO foundations, starting from ₹9,999.
            </p>
          </div>
          <div className="shrink-0">
            <Link to="/launch-kit">
              <WebliixButton variant="primary" icon={ArrowRight} size="md">
                Explore LaunchKit
              </WebliixButton>
            </Link>
          </div>
        </WebliixCard>
      </section>

      {/* INDUSTRY CAPABILITIES & SEO KEYWORD COVERAGE */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Industry Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Website & Digital Solutions for Different Business Sectors
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Website, search and digital solutions can be adapted to the needs of different business types and customer journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industryCapabilities.map((ind, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 flex flex-col justify-between space-y-3 border border-theme-border/70 hover:border-theme-primary/50 transition-colors group">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-theme-primary" />
                  <h3 className="text-sm font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">{ind.name}</h3>
                </div>
                <p className="text-xs text-theme-muted leading-relaxed pl-4">
                  {ind.desc}
                </p>
              </div>
              <div className="pt-2 pl-4 border-t border-theme-border/40">
                <Link to={ind.link} className="text-xs font-mono font-medium text-theme-primary inline-flex items-center gap-1 hover:underline">
                  <span>{ind.linkText}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* INTERACTIVE 4-STEP BLUEPRINT WORKFLOW */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Execution Blueprint
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Our 4-Step Website Development Process
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Explore how we take a project from discovery and planning through development, testing and launch.
          </p>
        </div>

        <WebliixCard variant="panel" className="p-6 sm:p-8 border border-theme-border space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-theme-border/60 pb-4">
            {siteConfig.about.process.map((proc, index) => {
              const isActive = activeProcessStep === index;
              return (
                <WebliixButton
                  key={proc.step}
                  variant="utility"
                  active={isActive}
                  onClick={() => setActiveProcessStep(index)}
                  className="flex-col items-start h-auto p-3 text-left w-full"
                >
                  <span className="text-xs font-mono font-bold block opacity-80">{proc.step}</span>
                  <span className="text-xs font-display font-bold">{proc.title}</span>
                </WebliixButton>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProcessStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono font-extrabold text-theme-primary">
                  {siteConfig.about.process[activeProcessStep].step}
                </span>
                <h3 className="text-xl font-display font-bold text-theme-text">
                  {siteConfig.about.process[activeProcessStep].title} Phase
                </h3>
              </div>
              <p className="text-theme-muted text-sm leading-relaxed max-w-2xl">
                {siteConfig.about.process[activeProcessStep].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </WebliixCard>
      </section>

      {/* FEATURED CLIENT PROJECTS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text mt-1">
              Selected Website & Digital Projects
            </h2>
          </div>
          <Link to="/portfolio">
            <WebliixButton variant="ghost" size="sm" icon={ArrowRight}>
              View All Projects
            </WebliixButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.portfolio.slice(0, 6).map((item) => (
            <a
              key={item.id}
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <WebliixCard variant="featured" className="p-4 space-y-3 h-full flex flex-col justify-between border border-theme-border/80 hover:border-theme-primary/60 transition-all duration-300 hover:shadow-spatial">
                <div className="space-y-3">
                  <div className="theme-rounded-card overflow-hidden border border-theme-border/60 bg-white p-2 shadow-sm flex items-center justify-center">
                    <div className="aspect-[16/9] sm:aspect-video w-full flex items-center justify-center relative">
                      <img
                        src={item.image}
                        srcSet={getCloudinarySrcSet(item.image, [360, 640, 800])}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                        alt={`${item.title} - Website Project by Webliix`}
                        width="360"
                        height="200"
                        loading="lazy"
                        decoding="async"
                        className="h-32 sm:h-36 max-h-[96%] max-w-[96%] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-theme-primary px-2 py-0.5 rounded-full bg-theme-primary/10 border border-theme-primary/20">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        {item.metrics}
                      </span>
                    </div>

                    <h3 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-theme-muted text-xs line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-theme-border/40 flex flex-wrap gap-1">
                  {item.deliveredServices?.slice(0, 3).map((srv, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[9px] font-mono text-theme-muted px-1.5 py-0.5 rounded bg-theme-card/60 border border-theme-border/40"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </WebliixCard>
            </a>
          ))}
        </div>
      </section>

      {/* INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold flex items-center justify-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Website Development & Digital Service FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <WebliixCard key={idx} variant="panel" className="p-5 border border-theme-border">
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <h3 className="text-sm font-display font-bold text-theme-text">{faq.q}</h3>
                  <ChevronDown className={`w-4 h-4 text-theme-primary shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pt-3 border-t border-theme-border/60 mt-3 text-xs text-theme-muted leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* ECOSYSTEM INTERNAL LINKING DIRECTORY (SEO & DISCOVERY) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Digital Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            Explore All Webliix Solutions &amp; Platforms
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Quickly navigate our core development services, marketing channels, portfolio showcases, and business resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <WebliixCard variant="panel" className="p-4 space-y-2.5 border border-theme-border/70 hover:border-theme-primary/50 transition-colors">
            <h4 className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" /> Web &amp; Applications
            </h4>
            <ul className="space-y-1.5 text-xs text-theme-muted">
              <li><Link to="/website-development" className="hover:text-theme-primary transition-colors flex items-center justify-between">Website Development <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/ecommerce-store" className="hover:text-theme-primary transition-colors flex items-center justify-between">E-Commerce Stores <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/web-app-development" className="hover:text-theme-primary transition-colors flex items-center justify-between">Custom Web Apps <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/mobile-app-development" className="hover:text-theme-primary transition-colors flex items-center justify-between">Mobile Applications <ArrowRight className="w-3 h-3" /></Link></li>
            </ul>
          </WebliixCard>

          <WebliixCard variant="panel" className="p-4 space-y-2.5 border border-theme-border/70 hover:border-theme-primary/50 transition-colors">
            <h4 className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" /> Search &amp; Growth
            </h4>
            <ul className="space-y-1.5 text-xs text-theme-muted">
              <li><Link to="/seo" className="hover:text-theme-primary transition-colors flex items-center justify-between">Local SEO &amp; GMB <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/paid-advertising" className="hover:text-theme-primary transition-colors flex items-center justify-between">Paid Advertising <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/google-ads" className="hover:text-theme-primary transition-colors flex items-center justify-between">Google Ads PPC <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/meta-ads" className="hover:text-theme-primary transition-colors flex items-center justify-between">Meta &amp; Social Ads <ArrowRight className="w-3 h-3" /></Link></li>
            </ul>
          </WebliixCard>

          <WebliixCard variant="panel" className="p-4 space-y-2.5 border border-theme-border/70 hover:border-theme-primary/50 transition-colors">
            <h4 className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Turnkey &amp; Design
            </h4>
            <ul className="space-y-1.5 text-xs text-theme-muted">
              <li><Link to="/launch-kit" className="hover:text-theme-primary transition-colors flex items-center justify-between">Webliix LaunchKit <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/branding-design" className="hover:text-theme-primary transition-colors flex items-center justify-between">Branding &amp; UI/UX <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/website-maintenance" className="hover:text-theme-primary transition-colors flex items-center justify-between">Website Maintenance <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/feedback" className="hover:text-theme-primary transition-colors flex items-center justify-between">Client Reviews <ArrowRight className="w-3 h-3" /></Link></li>
            </ul>
          </WebliixCard>

          <WebliixCard variant="panel" className="p-4 space-y-2.5 border border-theme-border/70 hover:border-theme-primary/50 transition-colors">
            <h4 className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Proof &amp; Company
            </h4>
            <ul className="space-y-1.5 text-xs text-theme-muted">
              <li><Link to="/portfolio" className="hover:text-theme-primary transition-colors flex items-center justify-between">Portfolio Showcase <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/feedback" className="hover:text-theme-primary transition-colors flex items-center justify-between">Client Feedback &amp; Reviews <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/blog" className="hover:text-theme-primary transition-colors flex items-center justify-between">SEO Knowledge Hub <ArrowRight className="w-3 h-3" /></Link></li>
              <li><Link to="/careers" className="hover:text-theme-primary transition-colors flex items-center justify-between">Partner Program <ArrowRight className="w-3 h-3" /></Link></li>
            </ul>
          </WebliixCard>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <WebliixCard variant="accent" accentColor="primary" className="p-8 sm:p-12 text-center space-y-5 border border-theme-primary/50 shadow-spatial-lg">
          <h2 className="text-2xl sm:text-5xl font-display font-bold text-theme-text max-w-2xl mx-auto leading-tight">
            Ready to Build Your <span className="text-shimmer">Digital Presence?</span>
          </h2>
          <p className="text-theme-muted text-sm max-w-md mx-auto">
            Tell us what you want to build, improve or launch. We can discuss your requirements, scope, timeline and estimated project cost.
          </p>
          <div className="pt-2 flex justify-center">
            <Link to="/contact">
              <WebliixButton variant="primary" icon={ArrowUpRight} size="lg">
                Talk to Us
              </WebliixButton>
            </Link>
          </div>
        </WebliixCard>
      </section>
    </div>
  );
}
