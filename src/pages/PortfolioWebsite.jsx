import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Search,
  Server,
  Mail,
  Share2,
  MapPin,
  Lock,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  PlusCircle,
  Layers,
  Award,
  Check,
  X,
  FileCode,
  Shield,
  HelpCircle,
  Zap,
  Layout,
  Palette,
  FileText
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function PortfolioWebsite() {
  const coreFeatures = [
    {
      icon: Layout,
      title: 'Custom Designed 5 Pages',
      desc: 'Complete bespoke layouts for Home, About, Services, Portfolio, and Contact tailored to your brand identity.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Fully Responsive',
      desc: 'Flawless layout rendering across smartphones, tablets, laptops, and ultra-wide desktop monitors.'
    },
    {
      icon: Search,
      title: 'Basic On-Page SEO',
      desc: 'Engineered for search visibility with meta tags, semantic heading hierarchy, and clean indexing code.'
    },
    {
      icon: Globe,
      title: '1-Year Free Domain',
      desc: 'Includes 1-year custom domain registration (.com / .in) configured and connected to your site.'
    },
    {
      icon: Server,
      title: '1-Year Reliable Hosting & Maintenance',
      desc: 'High-speed cloud hosting with 99.99% uptime, regular checks, and 1-year free maintenance included.'
    },
    {
      icon: Mail,
      title: 'Contact & Lead Inquiry Forms',
      desc: 'Interactive client inquiry forms with instant email notifications and direct lead forwarding.'
    },
    {
      icon: Share2,
      title: 'Social Media Profiles Integration',
      desc: 'Direct synchronization with LinkedIn, Instagram, Facebook, GitHub, and professional channels.'
    },
    {
      icon: MapPin,
      title: 'Google Maps Business Location',
      desc: 'Interactive embedded Google Maps for physical office, studio, or local service area location.'
    },
    {
      icon: Lock,
      title: 'SSL Certificate for Secure Browsing',
      desc: 'End-to-end automated HTTPS encryption ensuring visitor trust and Google ranking compliance.'
    }
  ];

  const whatsIncluded = [
    'Custom Professional Design & Development',
    'SEO-Optimized Code & Structure',
    '1-Year Free Domain & Hosting Setup',
    'Performance & Speed Optimization',
    'Contact & Lead Capture Forms',
    'Social Media & Google Maps Integration',
    'SSL Certificate Integration',
    '1 Year Support & Maintenance Post Launch'
  ];

  const whatsNotIncluded = [
    'Dynamic Features (CMS, User Login, Dashboards)',
    'eCommerce Functionality (Shopping Cart, Payments)',
    'Advanced SEO Services & Marketing',
    'Content Writing, Photography, or Video Production',
    'Ongoing Maintenance After Support Period'
  ];

  const addOns = [
    {
      title: 'Additional Custom Page',
      desc: 'Expand your website with extra custom-designed pages (e.g. Testimonials, Pricing, FAQ, Team).',
      icon: PlusCircle
    },
    {
      title: 'Portfolio Gallery Setup',
      desc: 'High-resolution filterable project showcase gallery with interactive lightboxes and case study modals.',
      icon: Layers
    },
    {
      title: 'Logo & Branding Design',
      desc: 'Vector logo design, brand typography, custom color palette, and digital brand asset guidelines.',
      icon: Palette
    },
    {
      title: 'Content Writing Services',
      desc: 'Professional, conversion-focused copywriting crafted specifically for your target industry audience.',
      icon: FileText
    },
    {
      title: 'Technical SEO',
      desc: 'Core Web Vitals performance tuning, JSON-LD rich schema markup, and Google Search Console setup.',
      icon: Zap
    },
    {
      title: 'Advanced SEO Package',
      desc: 'In-depth buyer intent keyword mapping, competitor gap analysis, and comprehensive search ranking strategy.',
      icon: Search
    }
  ];

  const competitorComparison = [
    {
      provider: 'Webliix',
      isWebliix: true,
      pages: '5 Pages',
      features: 'Custom Design, On-Page SEO, Domain, Hosting & 1-Yr Support',
      support: '1 Year Free Maintenance & 100% Code Ownership'
    },
    {
      provider: 'Sujatha Tech',
      isWebliix: false,
      pages: '5 - 12 Pages',
      features: 'Responsive Design, SEO, Support',
      support: 'Basic Support'
    },
    {
      provider: 'WebByFriends',
      isWebliix: false,
      pages: '6 - 15 Pages',
      features: 'Custom Design, Social Media',
      support: 'Standard Hosting'
    },
    {
      provider: 'Zebnux Tech',
      isWebliix: false,
      pages: '5 - 7 Pages',
      features: 'Logo, Email, Live Chat',
      support: 'Limited Support'
    },
    {
      provider: 'SiteVela',
      isWebliix: false,
      pages: '10 - 20 Pages',
      features: 'Custom Design, Admin Panel',
      support: 'Agency Retainer'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      <Helmet>
        <title>Business &amp; Portfolio Websites | {siteConfig.brand.name}</title>
        <meta
          name="description"
          content="Create a stunning online presence with Webliix's professional, responsive business & portfolio websites tailored for freelancers, startups, and small businesses."
        />
        <link rel="canonical" href="https://webliix.com/portfolio-website" />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 theme-rounded-badge bg-theme-primary/10 border border-theme-primary/30 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Web Solutions</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Business &amp; <span className="text-theme-primary">Portfolio Websites</span>
        </h1>

        <p className="text-base sm:text-xl text-theme-muted max-w-2xl mx-auto leading-relaxed">
          Create a stunning online presence with Webliix's professional, responsive websites tailored for freelancers, startups, and small businesses.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Build Your Website
            </WebliixButton>
          </Link>
          <a
            href="https://wa.me/919310181569?text=Hi%20Webliix,%20I%20am%20interested%20in%20building%20a%20Business%20&%20Portfolio%20Website."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="secondary" size="lg" icon={MessageCircle}>
              Chat on WhatsApp
            </WebliixButton>
          </a>
        </div>
      </section>

      {/* CORE FEATURES SECTION */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Everything You Need
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Core Features
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Complete high-performance foundational stack included with every website build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat, i) => (
            <WebliixCard key={i} variant="feature" className="p-6 space-y-3">
              <span className="p-3 theme-rounded-card bg-theme-primary/15 border border-theme-primary/30 text-theme-primary inline-block">
                <feat.icon className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-display font-bold text-theme-text">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                {feat.desc}
              </p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* TRANSPARENT SCOPE SECTION */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-6">
        <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
          Transparent Scope
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
          Clear Scope &amp; Deliverables
        </h2>
        <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
          Affordable, high-quality website packages designed to meet your business needs. Custom tailored based on your brand features and project complexity.
        </p>
      </section>

      {/* WHAT'S INCLUDED VS WHAT'S NOT INCLUDED */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
        {/* What's Included */}
        <div className="p-6 sm:p-8 theme-rounded-card glass-spatial border border-emerald-500/40 shadow-spatial space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-emerald-500/20">
            <span className="p-2.5 theme-rounded-card bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-400">
                What’s Included
              </h3>
              <span className="text-xs font-mono text-theme-muted">
                Core deliverables with every build
              </span>
            </div>
          </div>

          <ul className="space-y-3.5">
            {whatsIncluded.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-theme-text">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What's Not Included */}
        <div className="p-6 sm:p-8 theme-rounded-card glass-spatial border border-amber-500/40 shadow-spatial space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-amber-500/20">
            <span className="p-2.5 theme-rounded-card bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <XCircle className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-amber-400">
                What’s Not Included
              </h3>
              <span className="text-xs font-mono text-theme-muted">
                Available as separate specialized services
              </span>
            </div>
          </div>

          <ul className="space-y-3.5">
            {whatsNotIncluded.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-theme-muted">
                <X className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OPTIONAL ADD-ONS */}
      <section className="space-y-8 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Custom Enhancements
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Optional Add-Ons
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Customize your website package with specialized modular expansions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addon, i) => (
            <WebliixCard key={i} variant="featured" className="p-6 space-y-3 flex flex-col justify-between border border-theme-border/70 hover:border-theme-primary transition-all">
              <div className="space-y-3">
                <span className="p-2.5 theme-rounded-card bg-theme-primary/15 border border-theme-primary/30 text-theme-primary inline-block">
                  <addon.icon className="w-5 h-5" />
                </span>
                <h3 className="text-base sm:text-lg font-display font-bold text-theme-text">
                  {addon.title}
                </h3>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {addon.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-theme-border/60">
                <Link to="/contact">
                  <span className="text-xs font-mono font-bold text-theme-primary hover:underline flex items-center gap-1">
                    Request Add-On <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* COMPARE WITH COMPETITORS TABLE */}
      <section className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Market Benchmark
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Compare with Competitors
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            See how Webliix provides unmatched value, full code ownership, and 1-year support.
          </p>
        </div>

        <div className="overflow-x-auto theme-rounded-card glass-spatial border border-theme-border shadow-spatial">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-theme-border/80 bg-theme-primary/10">
                <th className="p-4 font-mono font-bold text-theme-text uppercase tracking-wider">Provider</th>
                <th className="p-4 font-mono font-bold text-theme-text uppercase tracking-wider text-center">Pages</th>
                <th className="p-4 font-mono font-bold text-theme-text uppercase tracking-wider">Key Features</th>
                <th className="p-4 font-mono font-bold text-theme-text uppercase tracking-wider">Support &amp; Ownership</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-theme-border/40">
              {competitorComparison.map((comp, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    comp.isWebliix
                      ? 'bg-theme-primary/15 font-semibold text-theme-text'
                      : 'hover:bg-theme-card/50 text-theme-muted'
                  }`}
                >
                  <td className="p-4 font-display font-bold text-theme-text flex items-center gap-2">
                    {comp.isWebliix && <Sparkles className="w-4 h-4 text-theme-primary shrink-0" />}
                    <span>{comp.provider}</span>
                    {comp.isWebliix && (
                      <span className="px-2 py-0.5 theme-rounded-badge bg-theme-primary text-white text-[9px] font-mono font-bold uppercase ml-1">
                        Our Standard
                      </span>
                    )}
                  </td>
                  <td className="p-4 font-mono text-center text-theme-text">{comp.pages}</td>
                  <td className="p-4">{comp.features}</td>
                  <td className="p-4 font-mono text-xs">{comp.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CLOSING HERO CTA BANNER */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Start Your Website Today
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Elevate Your Online Presence?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Let Webliix design a stunning website tailored to your business goals.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Contact Us Today
            </WebliixButton>
          </Link>
          <a
            href="https://wa.me/919310181569?text=Hi%20Webliix,%20I'm%20ready%20to%20build%20my%20website."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="secondary" size="lg" icon={MessageCircle}>
              Chat on WhatsApp
            </WebliixButton>
          </a>
        </div>
      </WebliixCard>
    </div>
  );
}
