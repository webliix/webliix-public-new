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
  Smartphone
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { businessConfig } from '../config/businessConfig';
import SpatialHeroCanvas from '../components/spatial/SpatialHeroCanvas';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixIcon from '../components/ui/WebliixIcon';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixSpotlight from '../components/WebliixSpotlight';
import { useModal } from '../context/ModalContext';

export default function Home() {
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const { openModal } = useModal();

  const handleOpenServiceModal = (service) => {
    openModal({
      title: `${service.icon} ${service.title}`,
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
    { name: 'Startups & SMEs', desc: 'Business websites, landing pages and digital foundations for new and growing companies' },
    { name: 'Local Showrooms & Retail', desc: 'Business websites, product showcases, local search foundations and enquiry channels' },
    { name: 'Real Estate & Builders', desc: 'Property showcase websites, project pages, lead forms and location-focused content' },
    { name: 'Clinics & Healthcare', desc: 'Professional websites, service information, appointment enquiries and search-ready content' },
    { name: 'Education & Coaching', desc: 'Course, program and enquiry pages with clear information architecture' },
    { name: 'Restaurants & Cafes', desc: 'Menus, location information, ordering or booking journeys and mobile-friendly websites' }
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

      {/* HERO SECTION WITH 3D CANVAS & INTERACTIVE CAPABILITY HUB */}
      <section className="relative pt-6 pb-16 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <SpatialHeroCanvas />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Eyebrow Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 theme-rounded-badge glass-spatial border border-theme-primary/50 text-xs font-mono text-theme-primary font-bold tracking-wider shadow-sm"
          >
            <span className="w-2 h-2 theme-rounded-badge bg-theme-primary animate-pulse" />
            <span>Website Development • SEO • Digital Solutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-theme-text leading-[1.08] tracking-tight"
          >
            Empower Your<br />
            <span className="text-shimmer">Digital Journey</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-theme-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            We build business websites, e-commerce stores, custom web applications and search-ready digital experiences for startups, local businesses and growing companies in India and international markets.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 pt-1"
          >
            <Link to="/contact">
              <WebliixButton variant="primary" icon={ArrowRight} className="text-xs sm:text-sm px-6 py-3">
                Discuss Your Project
              </WebliixButton>
            </Link>
            <Link to="/services">
              <WebliixButton variant="ghost" className="text-xs sm:text-sm px-6 py-3">
                Explore Solutions
              </WebliixButton>
            </Link>
          </motion.div>

          {/* WEBLIIX SPOTLIGHT (DYNAMIC EDITORIAL HIGHLIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full"
          >
            <WebliixSpotlight />
          </motion.div>

          {/* Trust Badges + Subtle Udyam Compliance Badge */}
          <div className="pt-4 flex flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[11px] font-mono text-theme-muted uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-theme-primary" /> 5-Day Launch</span>
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-theme-primary" /> 4 Continents</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-theme-primary" /> 100% Code Ownership</span>
            </div>

            {/* Subtle Premium Compliance Link */}
            <Link
              to="/business-information"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-spatial border border-theme-primary/30 text-[10px] font-mono text-theme-primary hover:bg-theme-primary/10 transition group"
            >
              <Award className="w-3 h-3 text-theme-primary shrink-0" />
              <span>Udyam Registered Micro Enterprise • Udyam No. {businessConfig.udyamNumber}</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
                  src={client.logo}
                  alt={`${client.name} - Webliix Client`}
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
              onClick={() => handleOpenServiceModal(service)}
              className="p-5 sm:p-6 flex flex-col justify-between space-y-4 group cursor-pointer hover:border-theme-primary/60 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-theme-muted text-xs leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-theme-border flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-theme-primary">
                  {service.startingPrice}
                </span>
                <span className="text-theme-text font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
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
              Webliix LaunchKit — All-In-One Business Package
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
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-2 border border-theme-border/70 hover:border-theme-primary/50 transition-colors">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-theme-primary" />
                <h3 className="text-sm font-display font-bold text-theme-text">{ind.name}</h3>
              </div>
              <p className="text-xs text-theme-muted leading-relaxed pl-4">
                {ind.desc}
              </p>
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
                        alt={`${item.title} - Website Project by Webliix`}
                        className="h-32 sm:h-36 max-h-[96%] max-w-[96%] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
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
