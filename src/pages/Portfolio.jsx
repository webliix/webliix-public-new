import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Sparkles, Check, ArrowRight, Laptop, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import SpatialButton from '../components/ui/SpatialButton';
import { useModal } from '../context/ModalContext';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { openModal } = useModal();

  const categories = [
    'All',
    'Industrial & E-Commerce',
    'Healthcare & Security',
    'Hospitality & Dining',
    'Corporate & Portfolio',
    'Fintech & Lead System',
    'Software & SaaS'
  ];

  const websiteProjects = [
    {
      id: 'sunsdust',
      title: 'Sunsdust Commercial Pvt. Ltd.',
      category: 'Portfolio & E-Commerce Website',
      description: 'Manufacturer & Supplier of ESE Lightning Arresters, Surge Protection Devices, GI & Copper Bonded Earth Electrodes across 28+ states in India.',
      image: siteConfig.portfolio.find(p => p.id === 'sunsdust')?.image,
      liveUrl: 'https://sunsdust-webliix.netlify.app',
      metrics: 'Trusted Across 28+ States',
      tags: ['Website Development', 'Branding', 'SEO', 'Product Catalog']
    },
    {
      id: 'auradrishti',
      title: 'Aura Drishti Smart Security',
      category: 'Security Product Portfolio Website',
      description: 'CCTV camera installation, surveillance products, appointment booking, and local GMB lead generation platform.',
      image: siteConfig.portfolio.find(p => p.id === 'auradrishti')?.image,
      liveUrl: 'https://auradrishti-webliix.netlify.app',
      metrics: '4.9★ Rating • 3x GMB Visits',
      tags: ['Security Website', 'GMB SEO', 'WhatsApp Leads', 'Branding']
    },
    {
      id: 'kitchen9village',
      title: 'Kitchen 9 Village',
      category: 'Cloud Kitchen & Dining Website',
      description: 'Authentic Indian vegetarian cuisine, traditional recipes, premium ingredients, serving Siliguri with direct online orders.',
      image: siteConfig.portfolio.find(p => p.id === 'kitchen9village')?.image,
      liveUrl: 'https://kitchen9-webliix.netlify.app',
      metrics: '+180% Direct Orders',
      tags: ['Cloud Kitchen', 'Online Menu', 'Mobile Checkout', 'SEO']
    },
    {
      id: 'saraswati-enterprise',
      title: 'Saraswati Enterprises',
      category: 'Industrial Portfolio Website',
      description: 'A complete website redesign to enhance user experience, showcase industrial equipment, and capture client inquiries.',
      image: siteConfig.portfolio.find(p => p.id === 'sunsdust')?.image,
      liveUrl: 'https://latifcodes.github.io/Saraswati-Enterprise/',
      metrics: '100% Mobile Responsive',
      tags: ['Website Redesign', 'UI/UX Design', 'Lead Capture']
    },
    {
      id: 'thehub-coworking',
      title: 'The Hub Co-Working Spaces',
      category: 'Corporate Real Estate Website',
      description: 'Modern corporate portal showcasing workspace suites, membership plans, virtual tours, and automated booking.',
      image: siteConfig.portfolio.find(p => p.id === 'thehub-coworking')?.image,
      liveUrl: 'https://webliix.in/portfolio',
      metrics: '3x Lead Generation Rate',
      tags: ['Corporate Site', 'Membership Portal', 'Ad Funnels']
    },
    {
      id: 'loanheaven',
      title: 'Loan Heaven Financial Portal',
      category: 'Fintech & Lead System Website',
      description: 'Interactive financial platform with instant EMI loan calculators, document submissions, and CRM lead capture.',
      image: siteConfig.portfolio.find(p => p.id === 'loanheaven')?.image,
      liveUrl: 'https://webliix.in/portfolio',
      metrics: '10k+ Monthly EMI Calculations',
      tags: ['Fintech Portal', 'EMI Calculator', 'Lead Automation']
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter(item => item.category === activeCategory);

  const handleOpenCaseStudy = (item) => {
    openModal({
      title: item.title,
      content: (
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-theme-border">
            <div className="px-3 py-1.5 bg-theme-bg/80 border-b border-theme-border flex items-center justify-between text-[11px] font-mono text-theme-muted">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span>{item.category}</span>
            </div>
            <div className="h-48 sm:h-56 overflow-hidden bg-white p-3 flex items-center justify-center">
              <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="px-3 py-1 rounded-full glass-spatial text-theme-primary border border-theme-primary/30 font-semibold">
              {item.category}
            </span>
            <span className="text-emerald-400 font-bold">{item.metrics}</span>
          </div>

          <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">{item.description}</p>

          <div className="space-y-2 pt-1">
            <span className="text-xs font-mono text-theme-primary font-semibold uppercase tracking-wider block">
              Delivered Services
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.deliveredServices.map((srv, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg glass-spatial text-xs font-mono text-theme-text border border-theme-border">
                  ✓ {srv}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            {item.id === 'auradrishti' && (
              <Link to="/case-studies/auradrishti" className="flex-1">
                <SpatialButton variant="glass" className="w-full text-xs py-2.5" icon={ArrowRight}>
                  Read Full Case Study
                </SpatialButton>
              </Link>
            )}
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <SpatialButton variant="primary" className="w-full text-xs py-2.5" icon={ExternalLink}>
                Visit Live Site Demo
              </SpatialButton>
            </a>
          </div>
        </div>
      )
    });
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-12">
      <Helmet>
        <title>Our Portfolio | Website Showcase & Branding | {siteConfig.brand.name}</title>
        <meta name="description" content="Discover Webliix portfolio of live client websites, e-commerce storefronts, branding samples, and local SEO case studies." />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Webliix Project Showcase
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-theme-text">
          Our Portfolio <span className="text-shimmer">& Live Websites</span>
        </h1>
        <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
          Explore our client websites, e-commerce applications, and branding projects engineered for businesses worldwide.
        </p>
      </div>

      {/* DEDICATED LIVE WEBSITE PROJECTS SHOWCASE */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-theme-border/60 pb-4">
          <div>
            <span className="text-xs font-mono text-theme-primary font-semibold uppercase tracking-wider block">
              Web Development Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text flex items-center gap-2 mt-0.5">
              <Laptop className="w-6 h-6 text-theme-primary" /> Live Client Website Projects
            </h2>
          </div>
          <span className="text-xs font-mono text-theme-muted">
            All Sites 100% Mobile & Desktop Optimized
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteProjects.map((web) => (
            <GlassCard key={web.id} className="p-5 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                {/* Browser Header Bar */}
                <div className="rounded-xl overflow-hidden border border-theme-border bg-theme-bg/60">
                  <div className="px-2.5 py-1.5 border-b border-theme-border/60 flex items-center justify-between text-[10px] font-mono text-theme-muted">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-theme-primary font-semibold">{web.category}</span>
                  </div>

                  {/* Clean Image Badge Container */}
                  <div className="h-44 overflow-hidden relative bg-white p-3 flex items-center justify-center">
                    <img
                      src={web.image}
                      alt={web.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                    {web.title}
                  </h3>
                  <p className="text-theme-muted text-xs leading-relaxed">
                    {web.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {web.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-theme-primary/10 text-theme-primary border border-theme-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-theme-border/60 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-emerald-400">
                  {web.metrics}
                </span>
                <a href={web.liveUrl} target="_blank" rel="noopener noreferrer">
                  <SpatialButton variant="primary" className="text-xs py-2 px-3.5" icon={ExternalLink}>
                    View Live Site
                  </SpatialButton>
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* FILTERABLE FULL CATEGORY GRID */}
      <div className="space-y-8 pt-8 border-t border-theme-border/60">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Filtered Portfolio Matrix
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            All Deliverables & Case Studies
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-theme-primary text-white shadow-spatial'
                  : 'glass-spatial text-theme-muted hover:text-theme-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <GlassCard
              key={item.id}
              onClick={() => handleOpenCaseStudy(item)}
              className="p-4 space-y-3 group"
            >
              <div className="rounded-xl overflow-hidden border border-theme-border bg-theme-bg/60">
                <div className="px-2.5 py-1.5 border-b border-theme-border/60 flex items-center justify-between text-[10px] font-mono text-theme-muted">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-theme-primary font-semibold">{item.category}</span>
                </div>

                <div className="h-40 overflow-hidden relative bg-white p-3 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-theme-muted text-xs line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-1 flex items-center justify-between text-[11px] font-semibold text-theme-primary">
                <span>View Details</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* BRAND & CLIENT PARTNER SHOWCASE GRID (CLEAN WHITE LOGO BADGES) */}
      <div className="pt-12 border-t border-theme-border/60 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Our Brand & Client Partners
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Trusted Partners & Delivered Services
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Empowering growth through custom web, branding, and marketing services by Webliix.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.portfolio.map((partner) => (
            <GlassCard key={partner.id} className="p-5 border border-theme-border space-y-4">
              {/* Clean White Solid Logo Badge Container */}
              <div className="w-full h-20 bg-white rounded-2xl p-3 border border-gray-200 shadow-md flex items-center justify-center">
                <img
                  src={partner.image}
                  alt={`${partner.title} Logo`}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>

              <div className="text-center space-y-1">
                <h4 className="text-base font-display font-bold text-theme-text">{partner.title}</h4>
                <span className="text-xs font-mono text-theme-primary font-semibold block">{partner.category}</span>
              </div>

              {/* Delivered Services Badges */}
              <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                {partner.deliveredServices.map((srv, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    ✓ {srv}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
