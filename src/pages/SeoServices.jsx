import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Cpu,
  FileText,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Zap,
  Globe,
  BarChart3,
  Layers,
  Check,
  HelpCircle,
  MessageCircle,
  Award,
  Clock,
  Target,
  ExternalLink,
  ChevronDown,
  Share2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function SeoServices() {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const seoModules = [
    {
      id: 'technical-seo',
      title: 'Technical SEO Audit',
      price: '₹4,999',
      tag: 'Foundation & Speed',
      badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
      icon: Cpu,
      idealFor: 'Fixing technical website errors & getting indexed fast on Google',
      desc: '100+ checkpoint audit optimizing site speed, mobile-readiness, XML sitemaps, canonical tags, and schema markup.',
      keyDeliverables: [
        'Speed Optimization (PageSpeed 95+)',
        'XML Sitemap & Robots.txt',
        'HTTPS & Canonical Fixes',
        'JSON-LD Schema Implementation'
      ],
      deepDive: [
        'Comprehensive 100+ point crawl and indexability diagnostics',
        'Core Web Vitals tuning (LCP < 2.0s, INP < 150ms, CLS < 0.05)',
        'Crawl budget allocation and robots.txt directives configuration',
        'Elimination of 301 redirect chains, 404 broken links, and loop errors',
        'Canonical tag architecture to permanently prevent duplicate content issues',
        'Structured Data testing and multi-layer JSON-LD Schema deployment',
        'Mobile-first layout validation and viewport responsiveness checks'
      ]
    },
    {
      id: 'onpage-seo',
      title: 'On-Page Content SEO',
      price: '₹3,999',
      tag: 'High-Intent Ranking',
      badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
      icon: FileText,
      idealFor: 'Ranking website pages higher for specific buyer search terms',
      desc: 'Targeted title tags, meta descriptions, H1-H6 heading hierarchy, and keyword placement for buyer intent.',
      keyDeliverables: [
        'Target Keyword Mapping (15-30 keywords)',
        'URL & Image Alt Text Optimization',
        'Internal Linking Structure',
        'Content Gap Analysis'
      ],
      deepDive: [
        'Buyer intent keyword classification (commercial & transactional)',
        'CTR-optimized Title tags & compelling Meta descriptions',
        'Semantic H1–H6 heading hierarchy restructuring',
        'Keyword cannibalization audit to stop internal ranking competition',
        'Internal linking silo architecture with descriptive anchor text distribution',
        'Image SEO: Next-Gen WebP compression, alt attributes, and file names',
        'Topical content gap analysis against top 3 organic ranking competitors'
      ]
    },
    {
      id: 'gmb-local-seo',
      title: 'Google My Business (GMB) Local SEO',
      price: '₹4,999',
      tag: 'Dominating Local Search',
      badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      icon: MapPin,
      idealFor: 'Dominating Google Maps & getting direct customer calls locally',
      desc: 'Local search engine dominance designed to rank your business profile #1 on Google Maps for regional buyer calls.',
      keyDeliverables: [
        'GMB Official Verification',
        'NAP Citation Consistency Check',
        'Local Category & Tag Mapping',
        'Review Generation Strategy'
      ],
      deepDive: [
        'Official Google Business Profile setup, claim & category verification',
        'EXIF coordinate geo-tagged photo uploads and media optimization',
        'NAP (Name, Address, Phone) consistency synchronization across local directories',
        'Local citation submissions across 40+ top business directories in India & region',
        'Google Maps Pin optimization & Service Area Business (SAB) boundary tuning',
        'Automated review generation funnel and review response strategy',
        'LocalBusiness JSON-LD structured schema creation and website injection'
      ]
    },
    {
      id: 'offpage-pr',
      title: 'Off-Page Link Building & PR',
      price: '₹6,999',
      tag: 'Authority & Trust',
      badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      icon: TrendingUp,
      idealFor: 'Building domain authority & outranking tough competitors',
      desc: 'High-authority backlink building, guest post placements, brand citation monitoring, and digital PR outreach.',
      keyDeliverables: [
        'High DA/DR Backlinks',
        'Guest Editorial Outreach',
        'Local Business Directory Listing',
        'Social Signals Amplification'
      ],
      deepDive: [
        'High-authority contextual backlinks from DA 40+ niche-relevant websites',
        '100% White-Hat manual guest editorial outreach and thought leadership',
        'Competitor backlink gap analysis and unlinked brand mention reclaim',
        'Top-tier local & national business directory listings',
        'Brand citation tracking and anchor text diversity management',
        'Social signals amplification across professional networks',
        'Monthly backlink profile health report & toxic link monitoring'
      ]
    }
  ];

  const comparisonRows = [
    { deliverable: '100+ Checkpoint Technical Site Audit', tech: true, onpage: false, gmb: false, offpage: false },
    { deliverable: 'Core Web Vitals & Speed 95+ Optimization', tech: true, onpage: false, gmb: false, offpage: false },
    { deliverable: 'Dynamic XML Sitemap & Robots.txt Directives', tech: true, onpage: false, gmb: false, offpage: false },
    { deliverable: 'HTTPS & Canonical Tag Fixes', tech: true, onpage: false, gmb: false, offpage: false },
    { deliverable: 'JSON-LD Schema Markup Implementation', tech: true, onpage: true, gmb: true, offpage: false },
    { deliverable: 'Target Keyword Mapping (15-30 Keywords)', tech: false, onpage: true, gmb: true, offpage: false },
    { deliverable: 'Title Tags & Meta Descriptions Optimization', tech: false, onpage: true, gmb: false, offpage: false },
    { deliverable: 'H1–H6 Heading Hierarchy Restructuring', tech: false, onpage: true, gmb: false, offpage: false },
    { deliverable: 'Internal Linking Silo Structure', tech: false, onpage: true, gmb: false, offpage: false },
    { deliverable: 'Competitor Content Gap Analysis', tech: false, onpage: true, gmb: false, offpage: true },
    { deliverable: 'Google Business Profile (GMB) Verification', tech: false, onpage: false, gmb: true, offpage: false },
    { deliverable: 'Google Maps 3-Pack Ranking Strategy', tech: false, onpage: false, gmb: true, offpage: false },
    { deliverable: 'NAP Multi-Directory Consistency Check', tech: false, onpage: false, gmb: true, offpage: true },
    { deliverable: 'Review Generation Funnel Strategy', tech: false, onpage: false, gmb: true, offpage: false },
    { deliverable: 'High DA/DR Contextual Backlinks', tech: false, onpage: false, gmb: false, offpage: true },
    { deliverable: 'Guest Editorial Outreach & Digital PR', tech: false, onpage: false, gmb: false, offpage: true },
    { deliverable: 'Local Business Directory Listings', tech: false, onpage: false, gmb: true, offpage: true },
    { deliverable: 'Social Signals Amplification', tech: false, onpage: false, gmb: false, offpage: true }
  ];

  const filteredModules = activeTab === 'all'
    ? seoModules
    : seoModules.filter(m => m.id === activeTab);

  const faqs = [
    {
      q: 'How do these specialized SEO modules work together?',
      a: 'Each module targets a critical pillar of Google search. Technical SEO fixes site speed and indexation; On-Page SEO optimizes your content for buyer searches; GMB Local SEO captures local map pack calls; and Off-Page Link Building boosts domain authority. You can select individual modules or combine them for a comprehensive organic campaign.'
    },
    {
      q: 'How soon can we expect results from Technical and GMB Local SEO?',
      a: 'Technical fixes and Google Business Profile optimizations often show positive ranking improvements in as little as 2 to 4 weeks. Organic keyword movements typically gain compound momentum within 60 to 90 days.'
    },
    {
      q: 'Is all link building and SEO work 100% White-Hat?',
      a: 'Yes. We strictly adhere to Google Search Essentials and Webmaster Guidelines. We never utilize private blog networks (PBNs), automated link blasts, or spam tactics, ensuring your website remains permanently safe from algorithm updates.'
    },
    {
      q: 'Can Webliix customize an SEO package specifically for our industry?',
      a: 'Absolutely. We customize keyword intent mapping, local radius targeting, and technical schemas for healthcare, retail, e-commerce, real estate, professional services, and tech startups.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      <Helmet>
        <title>Specialized SEO &amp; GMB Modules | {siteConfig.brand.name}</title>
        <meta
          name="description"
          content="Explore Webliix specialized SEO & GMB modules: Technical SEO Audit, On-Page Content SEO, Google My Business Local SEO, and Off-Page Link Building & PR."
        />
        <link rel="canonical" href="https://webliix.com/seo" />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 theme-rounded-badge bg-theme-primary/10 border border-theme-primary/30 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Search Engine Dominance</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Specialized <span className="text-theme-primary">SEO &amp; GMB</span> Modules
        </h1>

        <p className="text-base sm:text-xl text-theme-muted max-w-2xl mx-auto leading-relaxed">
          Data-driven search engine optimization designed to generate organic phone calls and qualified leads.
        </p>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
          <div className="p-4 theme-rounded-card glass-spatial border border-theme-border/60 text-center">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">100+</div>
            <div className="text-[11px] font-mono text-theme-muted mt-1 uppercase">Audit Checkpoints</div>
          </div>
          <div className="p-4 theme-rounded-card glass-spatial border border-theme-border/60 text-center">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">95+</div>
            <div className="text-[11px] font-mono text-theme-muted mt-1 uppercase">PageSpeed Score</div>
          </div>
          <div className="p-4 theme-rounded-card glass-spatial border border-theme-border/60 text-center">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">#1</div>
            <div className="text-[11px] font-mono text-theme-muted mt-1 uppercase">Google Maps Goal</div>
          </div>
          <div className="p-4 theme-rounded-card glass-spatial border border-theme-border/60 text-center">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">100%</div>
            <div className="text-[11px] font-mono text-theme-muted mt-1 uppercase">White-Hat Quality</div>
          </div>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Book an SEO Module
            </WebliixButton>
          </Link>
          <a
            href="https://wa.me/919310181569?text=Hi%20Webliix,%20I%20would%20like%20to%20inquire%20about%20your%20Specialized%20SEO%20&%20GMB%20Modules."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="secondary" size="lg" icon={MessageCircle}>
              Consult on WhatsApp
            </WebliixButton>
          </a>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="space-y-6">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 theme-rounded-btn text-xs font-mono font-semibold transition ${
              activeTab === 'all'
                ? 'bg-theme-primary text-white shadow-spatial'
                : 'glass-spatial text-theme-muted hover:text-theme-text border border-theme-border/60'
            }`}
          >
            All 4 Modules
          </button>
          {seoModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`px-4 py-2 theme-rounded-btn text-xs font-mono font-semibold transition flex items-center gap-1.5 ${
                activeTab === mod.id
                  ? 'bg-theme-primary text-white shadow-spatial'
                  : 'glass-spatial text-theme-muted hover:text-theme-text border border-theme-border/60'
              }`}
            >
              <mod.icon className="w-3.5 h-3.5" />
              <span>{mod.title}</span>
            </button>
          ))}
        </div>

        {/* MODULE CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredModules.map((mod) => (
            <WebliixCard
              key={mod.id}
              variant="featured"
              className="p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-theme-border/80 hover:border-theme-primary transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Header with Title and Price Pill */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="p-3 theme-rounded-card bg-theme-primary/15 border border-theme-primary/30 text-theme-primary">
                      <mod.icon className="w-6 h-6" />
                    </span>
                    <div>
                      <span className={`px-2.5 py-0.5 theme-rounded-badge text-[10px] font-mono font-bold uppercase tracking-wider border ${mod.badgeColor}`}>
                        {mod.tag}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text mt-1">
                        {mod.title}
                      </h2>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 theme-rounded-badge text-xs font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30 shrink-0">
                    {mod.price}
                  </span>
                </div>

                {/* Ideal for callout */}
                <div className="p-3 theme-rounded-card bg-theme-primary/10 border border-theme-primary/20 text-xs font-mono text-theme-primary flex items-start gap-1.5">
                  <span className="text-sm">💡</span>
                  <div>
                    <span className="font-bold">Ideal for:</span> {mod.idealFor}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                  {mod.desc}
                </p>

                {/* Key Deliverables Grid */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-theme-primary" /> Key Deliverables
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-text">
                    {mod.keyDeliverables.map((del, j) => (
                      <li key={j} className="flex items-center gap-2 p-2 theme-rounded-card bg-theme-card/60 border border-theme-border/40">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="font-medium">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deep Dive Deliverables */}
                <div className="space-y-2 pt-2 border-t border-theme-border/40">
                  <span className="text-[11px] font-mono text-theme-muted uppercase tracking-wider block font-semibold">
                    Detailed Scope Breakdown:
                  </span>
                  <ul className="space-y-1.5 text-xs text-theme-muted">
                    {mod.deepDive.map((item, k) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="text-theme-primary text-xs">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-theme-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-theme-muted">
                  Includes 100% White-Hat implementation
                </span>
                <Link to="/contact" className="w-full sm:w-auto">
                  <WebliixButton variant="primary" size="sm" icon={ArrowUpRight} fullWidth>
                    Book This Module
                  </WebliixButton>
                </Link>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Module Deliverables Matrix
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Compare Deliverables by Module
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Review exactly what is covered in each specialized SEO module.
          </p>
        </div>

        <div className="overflow-x-auto theme-rounded-card glass-spatial border border-theme-border shadow-spatial">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-theme-border/80 bg-theme-primary/10">
                <th className="p-4 font-mono font-bold text-theme-text uppercase tracking-wider">Deliverable</th>
                <th className="p-4 font-mono font-bold text-theme-primary text-center">Technical SEO (₹4,999)</th>
                <th className="p-4 font-mono font-bold text-theme-primary text-center">On-Page SEO (₹3,999)</th>
                <th className="p-4 font-mono font-bold text-theme-primary text-center">GMB Local (₹4,999)</th>
                <th className="p-4 font-mono font-bold text-theme-primary text-center">Link Building (₹6,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-theme-border/40">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-theme-card/50 transition-colors">
                  <td className="p-4 font-medium text-theme-text">{row.deliverable}</td>
                  <td className="p-4 text-center">
                    {row.tech ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-theme-muted/30 font-mono">—</span>}
                  </td>
                  <td className="p-4 text-center">
                    {row.onpage ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-theme-muted/30 font-mono">—</span>}
                  </td>
                  <td className="p-4 text-center">
                    {row.gmb ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-theme-muted/30 font-mono">—</span>}
                  </td>
                  <td className="p-4 text-center">
                    {row.offpage ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-theme-muted/30 font-mono">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Specialized SEO FAQs
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Everything you need to know about our SEO deliverables, turnaround times, and results.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="theme-rounded-card glass-spatial border border-theme-border/60 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:text-theme-primary transition-colors"
              >
                <span className="text-sm sm:text-base font-display font-bold text-theme-text">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-theme-primary shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-theme-muted leading-relaxed border-t border-theme-border/40 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Start Dominating Search Today
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Turn Organic Search Into Your Strongest Growth Channel?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Book your specialized SEO module today or speak with our search engineers on WhatsApp for a custom evaluation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Request SEO Consultation
            </WebliixButton>
          </Link>
          <a
            href="https://wa.me/919310181569?text=Hi%20Webliix,%20I%20am%20ready%20to%20book%20an%20SEO%20module."
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
