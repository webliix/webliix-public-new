import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  Server,
  Lock,
  ShoppingBag
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
  const [activeHeroTab, setActiveHeroTab] = useState('ecommerce'); // 'ecommerce' | 'seo'


  

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
      siteConfig.brand.socials.facebook
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
    <div className="relative min-h-screen pb-16">
      {/* ADVANCED SEO METADATA & SCHEMA.ORG INJECTION */}
      <Helmet>
        <title>Webliix | Web Design, SEO & Custom Software Development Agency</title>
        <meta
          name="description"
          content="Webliix is a full-service digital agency building high-performance business websites, Shopify stores, custom web apps, and Google SEO that turn traffic into revenue."
        />
        <meta
          name="keywords"
          content="website development India, web design agency NCR, local SEO services, Google Business Profile optimization, GMB ranking, ecommerce website development, custom web applications, SaaS development, mobile app development, Webliix LaunchKit, website maintenance"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://webliix.com/" />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webliix.com/" />
        <meta property="og:title" content="Webliix | Web Design, SEO & Custom Software Development Agency" />
        <meta property="og:description" content="Webliix is a full-service digital agency building high-performance business websites, Shopify stores, custom web apps, and Google SEO that turn traffic into revenue." />
        <meta property="og:image" content="https://webliix.com/og-image.jpg" />
        <meta property="og:site_name" content="Webliix" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://webliix.com/" />
        <meta name="twitter:title" content="Webliix | Web Design, SEO & Custom Software Development Agency" />
        <meta name="twitter:description" content="Webliix is a full-service digital agency building high-performance business websites, Shopify stores, custom web apps, and Google SEO that turn traffic into revenue." />
        <meta name="twitter:image" content="https://webliix.com/og-image.jpg" />

        {/* Structured Data JSON-LD: ProfessionalService & FAQPage (Organization & WebSite provided by index.html) */}
        <script type="application/ld+json">
          {JSON.stringify(professionalServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ═══════════════════════════════════════════════════════════════
          REDESIGNED MODERN HERO SECTION (MINIMALIST, HIGH-IMPACT, ZERO GRID)
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative pt-24 sm:pt-32 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Fixed Hero Background Layer (Stays fixed in viewport behind hero section) */}
        <div className="pointer-events-none fixed inset-0 z-0 w-full h-full overflow-hidden">
          {/* Layered CSS Ambient Radiant Halos */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[950px] h-[320px] sm:h-[460px] bg-gradient-to-b from-cyan-500/25 via-indigo-500/18 to-transparent blur-[130px] rounded-full opacity-80" />
          <div className="pointer-events-none absolute top-1/4 -left-20 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-purple-600/20 blur-[140px] rounded-full" />
          <div className="pointer-events-none absolute top-1/3 -right-20 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-cyan-400/20 blur-[140px] rounded-full" />

          {/* Interactive Fixed Canvas */}
          <SpatialHeroCanvas />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Eyebrow Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 theme-rounded-badge glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold shadow-xs animate-hero-fade-badge">
            <span className="w-2 h-2 rounded-full bg-theme-primary animate-pulse" />
            <span>Turnkey Websites • E-Commerce Stores • Top Google Visibility</span>
          </div>

          {/* Punchy Headline (High-converting, best text, no fluff) */}
          {/* Punchy Headline (High-converting, best text, no fluff) with Modern Clip-Reveal Effect */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-theme-text leading-[1.08] tracking-tight">
            <span className="inline-block overflow-hidden py-1">
              <span className="inline-block animate-hero-reveal-line1">Modern Websites Built to</span>
            </span>
            <br />
            <span className="inline-block overflow-hidden py-1">
              <span className="inline-block text-shimmer animate-hero-reveal-line2">Win Customers &amp; Grow Sales</span>
            </span>
          </h1>

          {/* Crisp 1-Sentence Subhead (Less text, clear value) */}
          <p className="text-theme-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-hero-fade-subhead">
            We build lightning-fast business websites, online stores, and Google SEO that help you attract more clients, close more sales, and own 100% of your code.
          </p>

          {/* High-Impact Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 animate-hero-fade-actions">
            <Link to="/contact">
              <WebliixButton variant="primary" icon={ArrowRight} className="text-xs sm:text-sm px-6 py-3">
                Start Your Project
              </WebliixButton>
            </Link>
            <Link to="/launch-kit">
              <WebliixButton variant="ghost" icon={Zap} className="text-xs sm:text-sm px-6 py-3 text-theme-primary">
                Explore 5-Day LaunchKit
              </WebliixButton>
            </Link>
          </div>

          {/* Micro Social Proof & Verified Trust Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-theme-muted font-mono pt-1 animate-hero-fade-proof">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-theme-text">4.9/5 Rating</span>
              <span>• 120+ Brands Launched</span>
            </div>
            <Link
              to="/business-information"
              className="inline-flex items-center gap-1 text-[11px] text-theme-primary hover:underline"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Govt. MSME Registered Enterprise</span>
            </Link>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              NEW INTERACTIVE STUDIO SHOWCASE (CLEAN, MODERN, ENGAGING)
              ═══════════════════════════════════════════════════════════ */}
          <div className="pt-4 max-w-4xl mx-auto relative">
            {/* Floating Modern Accent Badges (Linear/Stripe Studio Aesthetic) */}
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 theme-rounded-badge glass-spatial border border-emerald-500/40 text-[11px] font-mono text-emerald-400 absolute -top-3 -left-6 z-20 shadow-xl backdrop-blur-md pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>⚡ 0.4s Global Edge Load</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 theme-rounded-badge glass-spatial border border-theme-primary/40 text-[11px] font-mono text-theme-primary absolute -bottom-3 -right-6 z-20 shadow-xl backdrop-blur-md pointer-events-none">
              <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary" />
              <span>100% Code Ownership</span>
            </div>

            <WebliixCard variant="featured" className="p-4 sm:p-7 shadow-2xl relative text-left bg-theme-card/40 backdrop-blur-xl border border-theme-primary/30">
              
              {/* Studio Header: Browser Chrome + Mode Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-theme-border/60">
                {/* Browser Address Bar Pill */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 theme-rounded-badge bg-theme-bg/35 backdrop-blur-md border border-theme-border/50 text-[11px] font-mono text-theme-muted">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>https://yourbusiness.com</span>
                  </div>
                </div>

                {/* 3 Quick Interactive Switcher Tabs */}
                <div className="inline-flex p-1 theme-rounded-card bg-theme-bg/35 backdrop-blur-md border border-theme-border/50 text-xs font-mono font-semibold self-start sm:self-auto">
                  <button
                    onClick={() => setActiveHeroTab('ecommerce')}
                    className={`px-3 py-1.5 theme-rounded-btn transition-all flex items-center gap-1.5 ${
                      activeHeroTab === 'ecommerce' ? 'bg-theme-primary text-white font-bold shadow-sm'
                        : 'text-theme-muted hover:text-theme-text'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Online Store</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('seo')}
                    className={`px-3 py-1.5 theme-rounded-btn transition-all flex items-center gap-1.5 ${
                      activeHeroTab === 'seo' ? 'bg-theme-primary text-white font-bold shadow-sm'
                        : 'text-theme-muted hover:text-theme-text'
                    }`}
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>Google SEO</span>
                  </button>
                </div>
              </div>

              {/* TAB 2: E-Commerce Store */}
              {activeHeroTab === 'ecommerce' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 theme-rounded-card glass-spatial bg-theme-card/35 backdrop-blur-md border border-theme-border/50">
                      <div className="text-xs font-mono text-theme-muted uppercase tracking-wider mb-1">
                        Checkout Sales
                      </div>
                      <div className="text-3xl font-display font-extrabold text-emerald-400">
                        +42%
                      </div>
                      <div className="text-[11px] font-mono text-emerald-400/90 mt-1">
                        Quick 1-click mobile checkout
                      </div>
                    </div>

                    <div className="p-4 theme-rounded-card glass-spatial bg-theme-card/35 backdrop-blur-md border border-theme-border/50">
                      <div className="text-xs font-mono text-theme-muted uppercase tracking-wider mb-1">
                        Store Platforms
                      </div>
                      <div className="text-3xl font-display font-extrabold text-theme-primary">
                        Shopify
                      </div>
                      <div className="text-[11px] font-mono text-theme-muted mt-1">
                        + WooCommerce &amp; Custom
                      </div>
                    </div>

                    <div className="p-4 theme-rounded-card glass-spatial bg-theme-card/35 backdrop-blur-md border border-theme-border/50">
                      <div className="text-xs font-mono text-theme-muted uppercase tracking-wider mb-1">
                        Indian Payments
                      </div>
                      <div className="text-3xl font-display font-extrabold text-theme-text">
                        UPI &amp; Cards
                      </div>
                      <div className="text-[11px] font-mono text-cyan-400 mt-1">
                        UPI, Cards &amp; NetBanking
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs font-mono text-theme-muted border-t border-theme-border/40">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-theme-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary" /> Instant Order Alerts
                      </span>
                      <span className="flex items-center gap-1.5 text-theme-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary" /> WhatsApp Order Integration
                      </span>
                    </div>

                    <Link to="/ecommerce-store" className="text-theme-primary hover:underline flex items-center gap-1 ml-auto">
                      <span>Explore Store Packages</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}

              {/* TAB 3: Local SEO & Google Search */}
              {activeHeroTab === 'seo' && (
                <div className="space-y-4">
                  {/* Google SERP Simulated Result */}
                  <div className="p-3.5 theme-rounded-card bg-theme-bg/35 backdrop-blur-md border border-theme-border/50 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-theme-muted">
                      <Globe className="w-3 h-3 text-emerald-400" />
                      <span>https://yourbusiness.com</span>
                    </div>
                    <div className="text-sm font-semibold text-theme-primary">
                      Top-Rated Local Business in Your City | Your Brand
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-amber-400">
                      <span>★★★★★ 4.9 (52 Google Reviews)</span>
                      <span className="text-theme-muted">• Open 9 AM - 8 PM</span>
                    </div>
                    <p className="text-xs text-theme-muted line-clamp-1">
                      Professional service, verified Google Maps location, instant contact booking, and 5-star customer reviews.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs font-mono text-theme-muted border-t border-theme-border/40">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Top Google Maps Ranking
                      </span>
                      <span className="flex items-center gap-1.5 text-theme-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary" /> Google Search Ready
                      </span>
                      <span className="flex items-center gap-1.5 text-theme-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary" /> Google Business Profile Setup
                      </span>
                    </div>

                    <Link to="/seo" className="text-theme-primary hover:underline flex items-center gap-1 ml-auto">
                      <span>Explore SEO Packages</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}

            </WebliixCard>
          </div>

          {/* Dynamic Spotlight Feature Banner */}
          <div className="w-full pt-4">
            <WebliixSpotlight />
          </div>

          {/* Simple Clean Trust Ribbon */}
          <div className="pt-6 border-t border-theme-border/40 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-xs font-mono text-theme-muted">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-theme-primary" />
              <span>5-Day Fast Turnaround</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-theme-primary" />
              <span>100% Code &amp; Domain Rights</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-theme-primary" />
              <span>120+ Delivered Worldwide</span>
            </span>
            <Link to="/business-information" className="hover:text-theme-primary transition flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-theme-primary" />
              <span>Government Registered (Udyam)</span>
            </Link>
          </div>

        </div>
      </section>

            {/* WRAPPER FOR SECTIONS BELOW HERO: CONTROLLED BY THEME BLUR EFFECTS */}
      <div
        className="relative z-10 bg-theme-bg/90 transition-[backdrop-filter,background-color] duration-300"
        style={{
          backdropFilter: 'blur(var(--glass-blur, 12px))',
          WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
        }}
      >
      {/* CLIENT LOGOS SHOWCASE TICKER */}
      <section className="deferred-section relative z-10 py-10 border-y border-theme-border/40 bg-theme-bg/40 backdrop-blur-md overflow-hidden">
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
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-12">
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
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-12">
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
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-12">
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
          {siteConfig.services.slice(0, 6).map((service) => (
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

        {/* View All Services Action */}
        <div className="mt-10 flex justify-center">
          <Link to="/services">
            <WebliixButton variant="primary" icon={ArrowRight} size="md" className="px-8 py-3.5 shadow-spatial font-bold hover:scale-[1.02] transition-transform">
              View All Services &amp; Solutions
            </WebliixButton>
          </Link>
        </div>
      </section>

      {/* WEBLIIX LAUNCHKIT SHOWCASE BANNER */}
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-6">
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
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-12">
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
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-12">
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
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-12">
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
      <section className="deferred-section relative z-10 max-w-4xl mx-auto px-6 py-12 space-y-8">
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
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-10">
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
      <section className="deferred-section relative z-10 max-w-6xl mx-auto px-6 py-12">
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
    </div>
  );
}
