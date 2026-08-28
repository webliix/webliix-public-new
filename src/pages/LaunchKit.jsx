// LaunchKit.jsx
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Check,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Award,
  Building2,
  Rocket,
  ShoppingCart,
  MessageCircle,
  Clock,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixIcon from '../components/ui/WebliixIcon';
import WebliixButton from '../components/ui/WebliixButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';

/* ─────────────────────────────────────────────
 * DATA
 * All copy follows the "Important Marketing
 * Correction" — no ranking guarantees. GMB work
 * is described as optimization / local SEO
 * foundation, never a promised #1 result.
 * ───────────────────────────────────────────── */

const PACKAGES = {
  starter: {
    id: 'starter',
    icon: Building2,
    outcome: 'Establish my business',
    name: 'LaunchKit Starter — New Business Website',
    price: 14999,
    tagline: 'A complete new business website package with branding, Google presence and SEO foundations.',
    bestFor: 'New businesses, startups, freelancers, consultants, local service businesses and first-time founders.',
    timeline: '5–7 business days',
    support: '30 days post-launch support',
    cta: 'Launch My Business →',
    highlights: [
      '5-page business website',
      'Logo, brand colors & typography',
      'Google Business Profile setup',
      'Basic on-page SEO',
      '1 professional email',
    ],
    groups: [
      {
        title: 'Professional Website',
        items: [
          'Up to 5 responsive pages',
          'Custom UI design',
          'Mobile + tablet + desktop optimization',
          'Contact / inquiry form',
          'WhatsApp integration',
          'Custom domain connection & SSL',
        ],
      },
      {
        title: 'Brand Essentials',
        items: ['Professional logo', 'Brand color palette', 'Typography selection', 'Basic brand styling'],
      },
      {
        title: 'Google & SEO Foundation',
        items: [
          'Google Business Profile setup assistance',
          'Basic on-page SEO',
          'Meta titles & descriptions',
          'Sitemap & robots.txt',
          'Search Console setup',
          'Basic analytics',
        ],
      },
      {
        title: 'Business Setup',
        items: ['1 professional email', 'Business card design', 'Launch guidance'],
      },
    ],
    bonus: ['Free launch checklist', 'Free social media profile setup guidance'],
  },

  growth: {
    id: 'growth',
    icon: Rocket,
    outcome: 'Get more customers',
    name: 'LaunchKit Growth — Small Business Website & SEO',
    badge: 'Most Popular',
    price: 29999,
    tagline: "A conversion-focused small business website package built to generate enquiries and grow your online presence.",
    bestFor: 'Small and growing businesses that want more enquiries, leads and customers online.',
    timeline: '7–14 business days',
    support: '90 days post-launch support',
    cta: 'Start Growing →',
    highlights: [
      'Everything in Starter, plus:',
      '10-page conversion website + blog',
      'Advanced SEO foundation & schema',
      'Google Business Profile optimization',
      'Lead capture & WhatsApp funnels',
    ],
    groups: [
      {
        title: 'Conversion Website',
        items: [
          'Up to 10 pages',
          'Custom conversion-focused UI',
          'WhatsApp lead integration',
          'Advanced inquiry & lead-capture forms',
          'Blog / content system',
          'Testimonials & portfolio sections',
          'Google Maps integration',
        ],
      },
      {
        title: 'Brand System',
        items: ['Complete color & typography system', 'Business card design', 'Social media starter template'],
      },
      {
        title: 'SEO Foundation',
        items: [
          'Keyword targeting & on-page SEO',
          'Schema markup',
          'Image optimization & internal linking',
          'Search Console + GA4 analytics',
          'Technical SEO configuration',
        ],
      },
      {
        title: 'Google Business Profile',
        items: [
          'Profile setup & optimization',
          'Category & business info optimization',
          'Local SEO foundation',
          'Review strategy guidance',
        ],
      },
      {
        title: 'Lead Generation & Email',
        items: ['WhatsApp CTA & lead forms', 'Conversion-focused CTA placement', 'Up to 3 professional email accounts'],
      },
    ],
    bonus: ['3 social media launch creatives', 'SEO keyword starter report', '1 promotional landing section'],
  },

  business: {
    id: 'business',
    icon: ShoppingCart,
    outcome: 'Sell online',
    name: 'LaunchKit Business — Ecommerce Website',
    price: 59999,
    tagline: 'An ecommerce website package for businesses ready to sell products online with payments and order management.',
    bestFor: 'Established businesses, retailers, product brands and businesses ready to sell online.',
    timeline: '14–21 business days',
    support: '180 days post-launch support',
    cta: 'Build My Store →',
    highlights: [
      'Everything in Growth, plus:',
      'Up to 15-page advanced website',
      'Full e-commerce (50 products)',
      'Razorpay / UPI payment integration',
      '5 professional email accounts',
    ],
    groups: [
      {
        title: 'Advanced Website',
        items: [
          'Up to 15 core pages',
          'Dynamic content sections & blog/CMS',
          'Advanced lead forms & conversion optimization',
          'Advanced analytics',
        ],
      },
      {
        title: 'E-Commerce',
        items: [
          'Up to 50 initial products',
          'Product categories & detail pages',
          'Shopping cart & checkout',
          'Razorpay / UPI payment integration',
          'Order management & transaction status handling',
        ],
      },
      {
        title: 'Marketing Foundation',
        items: [
          'Advanced on-page SEO & schema mapping',
          'Google Business optimization',
          'Conversion tracking, Search Console & GA4',
        ],
      },
      {
        title: 'Business Infrastructure',
        items: ['Up to 5 professional email accounts', 'Domain, SSL & analytics', 'Business profile setup'],
      },
    ],
    bonus: ['5 product uploads', '5 social media launch creatives', 'SEO keyword strategy', 'Conversion tracking setup'],
  },
};

const PACKAGE_ORDER = ['starter', 'growth', 'business'];

const COMPARISON_ROWS = [
  { label: 'Best for', values: ['New businesses', 'Growing businesses', 'Established businesses'] },
  { label: 'Starting price', values: ['₹14,999', '₹29,999', '₹59,999'] },
  { label: 'Website', values: ['5-page new business website', '8–10 page conversion website + blog', '15-page ecommerce website'] },
  { label: 'Mobile responsive', values: ['✓', '✓', '✓'] },
  { label: 'WhatsApp integration', values: ['✓', '✓', '✓'] },
  { label: 'Google Business Profile', values: ['Setup', 'Setup + optimization', 'Optimization + local SEO'] },
  { label: 'Analytics', values: ['Basic', 'GA4 + Search Console', 'GA4 + Search Console'] },
  { label: 'Business card design', values: ['—', '✓', '✓'] },
  { label: 'Professional email', values: ['1', '3', '5'] },
  { label: 'Blog system', values: ['—', '✓', '✓'] },
  { label: 'Lead automation', values: ['—', '✓', '✓'] },
  { label: 'E-commerce (products)', values: ['—', '—', 'Up to 50'] },
  { label: 'Payment gateway', values: ['—', '—', '✓'] },
  { label: 'Maintenance', values: ['30 days', '90 days', '180 days'] },
  { label: 'Launch timeline', values: ['5–7 days', '7–14 days', '14–21 days'] },
];

const NEED_ROWS = [
  { need: 'A professional online presence', choice: 'Starter', pkg: 'starter' },
  { need: 'More leads & customers', choice: 'Growth ⭐', pkg: 'growth' },
  { need: 'Online selling & payments', choice: 'Business', pkg: 'business' },
  { need: 'Something completely custom', choice: 'Talk to Webliix', pkg: null },
];

const VALUE_STACK = [
  { label: 'Professional Website', value: 18000 },
  { label: 'Logo & Brand System', value: 5000 },
  { label: 'SEO Foundation', value: 5000 },
  { label: 'Google Business Setup', value: 3000 },
  { label: 'Lead Generation Setup', value: 3000 },
  { label: 'Analytics & Tracking', value: 2000 },
  { label: 'Business Email Setup', value: 1500 },
  { label: 'Launch Support', value: 3000 },
];

const ADDONS = [
  { id: 'page', label: 'Additional website page', price: 750, unit: '/page' },
  { id: 'logo', label: 'Professional logo only', price: 1999 },
  { id: 'brandkit', label: 'Complete brand kit', price: 3999 },
  { id: 'bizcard', label: 'Business card design', price: 999 },
  { id: 'email', label: 'Professional email setup', price: 499, unit: '/account' },
  { id: 'gmb', label: 'Google Business Profile optimization', price: 2999 },
  { id: 'seosetup', label: 'Advanced SEO setup', price: 4999 },
  { id: 'ads', label: 'Meta/Google Ads setup', price: 3999 },
  { id: 'adcreative', label: 'Ad creative pack', price: 1999 },
  { id: 'landing', label: 'Additional landing page', price: 2999 },
  { id: 'blog', label: 'Blog setup', price: 2999 },
  { id: 'product', label: 'Additional product upload', price: 100, unit: '/product' },
  { id: 'seomonthly', label: 'SEO monthly management', price: 6999, unit: '/month', recurring: true, from: true },
  { id: 'maintenance', label: 'Website maintenance', price: 2999, unit: '/year', recurring: true, from: true },
];

const WHATSAPP_URL =
  "https://wa.me/919310181569?text=Hi%20Webliix!%20I'm%20interested%20in%20the%20LaunchKit.";

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function LaunchKit() {
  const [selectedPackageId, setSelectedPackageId] = useState('growth');
  const [selectedAddons, setSelectedAddons] = useState([]);

  const selectedPackage = PACKAGES[selectedPackageId];

  const toggleAddon = (id) => {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const addonsTotal = useMemo(
    () =>
      selectedAddons.reduce((sum, id) => {
        const addon = ADDONS.find((a) => a.id === id);
        return addon && !addon.recurring ? sum + addon.price : sum;
      }, 0),
    [selectedAddons]
  );

  const recurringAddons = useMemo(
    () => selectedAddons.map((id) => ADDONS.find((a) => a.id === id)).filter((a) => a?.recurring),
    [selectedAddons]
  );

  const total = selectedPackage.price + addonsTotal;

  const handleChoosePackage = (id) => {
    setSelectedPackageId(id);
    scrollToId('launchkit-details');
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <Helmet>
        <title>
          Business Launch Package for New Businesses | Website, Branding & SEO | Webliix
        </title>

        <meta
          name="description"
          content="Launch your new business with a professional website, branding, Google Business Profile support and SEO foundations. Webliix LaunchKit packages start at ₹14,999."
        />

        <link rel="canonical" href="https://webliix.com/launch-kit" />

        <meta
          property="og:title"
          content="Business Launch Package for New Businesses | Webliix"
        />
        <meta
          property="og:description"
          content="Website + branding + Google presence + SEO + lead generation in one coordinated business launch package. From ₹14,999."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webliix.com/launch-kit" />

        <meta
          property="og:image"
          content="https://webliix.com/og-launchkit.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Webliix" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Business Launch Package for New Businesses | Webliix"
        />
        <meta
          name="twitter:description"
          content="Launch your business with a professional website, branding, Google presence, SEO and lead-generation essentials."
        />
        <meta
          name="twitter:image"
          content="https://webliix.com/og-launchkit.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://webliix.com/launchkit#service",
            "name": "Webliix Business Launch Packages",
            "serviceType": "Business website design, branding and SEO launch packages",
            "description":
              "Turnkey digital launch packages for new businesses, startups, small businesses and retailers, combining website development, branding, Google Business Profile support, SEO foundations, analytics and lead generation.",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "areaServed": [
              {"@type": "Country", "name": "India"},
              {"@type": "Country", "name": "Australia"},
              {"@type": "Country", "name": "Canada"},
              {"@type": "Country", "name": "United States"}
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Webliix LaunchKit Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "LaunchKit Starter — New Business Website",
                  "price": "14999",
                  "priceCurrency": "INR",
                  "url": "https://webliix.com/launchkit"
                },
                {
                  "@type": "Offer",
                  "name": "LaunchKit Growth — Small Business Website & SEO",
                  "price": "29999",
                  "priceCurrency": "INR",
                  "url": "https://webliix.com/launchkit"
                },
                {
                  "@type": "Offer",
                  "name": "LaunchKit Business — Ecommerce Website",
                  "price": "59999",
                  "priceCurrency": "INR",
                  "url": "https://webliix.com/launchkit"
                }
              ]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://webliix.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Business Launch Packages",
                "item": "https://webliix.com/launchkit"
              }
            ]
          })}
        </script>
      </Helmet>

      <Breadcrumbs />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <div className="text-center max-w-3xl mx-auto space-y-5">
        <span className="px-4 py-1.5 glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Webliix LaunchKit
        </span>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Business launch package for new businesses —{' '}
          <span className="text-shimmer">everything you need to go online</span>
        </h1>

        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Launch your business with a professional website, brand identity, Google Business Profile support,
          SEO foundations, WhatsApp lead capture and business email — without managing multiple vendors.
        </p>

        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed max-w-2xl mx-auto">
          North India founders: <span className="text-theme-text font-semibold">Apna business online launch karein</span> —
          website, branding, Google aur SEO ek hi coordinated launch package mein.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <WebliixButton variant="primary" size="lg" icon={ArrowUpRight} onClick={() => scrollToId('launchkit-details')}>
            Start My Launch
          </WebliixButton>
          <WebliixButton variant="ghost" size="lg" onClick={() => scrollToId('launchkit-compare')}>
            Compare Packages
          </WebliixButton>
        </div>

        <p className="text-xs font-mono text-theme-muted pt-1">
          ⭐ Most businesses choose <span className="text-theme-primary font-bold">Growth — ₹29,999</span>
        </p>
      </div>

      {/* ═══════════════════════════════════════
          SEO INTRODUCTION / SEARCH INTENT
          ═══════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto space-y-5 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
          Business Launch Package
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
          Launch your business online with one complete digital setup
        </h2>
        <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
          Starting a new business is more than buying a domain and putting up a few pages.
          Your customers need a professional website, a clear brand, a discoverable Google presence,
          basic SEO, trusted contact details and a simple way to enquire or buy.
          Webliix LaunchKit brings those essentials together in one small-business website package.
        </p>
        <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
          It is designed for entrepreneurs, startups, freelancers, consultants, local service businesses,
          retailers and small companies launching a new brand or upgrading from an offline-only presence.
        </p>
      </section>

      {/* ═══════════════════════════════════════
          "WHAT ARE YOU TRYING TO BUILD?"
          ═══════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">Step 1</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">What are you trying to build?</h2>
          <p className="text-theme-muted text-xs sm:text-sm">Pick the outcome you want — we'll show you the right package.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PACKAGE_ORDER.map((id) => {
            const pkg = PACKAGES[id];
            const Icon = pkg.icon;
            const isSelected = selectedPackageId === id;
            const isGrowth = id === 'growth';

            return (
              <div
                key={id}
                onClick={() => setSelectedPackageId(id)}
                className={[
                  'p-6 cursor-pointer transition-all duration-300 border flex flex-col justify-between space-y-4 relative',
                  isGrowth
                    ? 'sm:scale-105 sm:-translate-y-1 bg-theme-primary/10 border-theme-primary shadow-[0_16px_44px_-12px_rgba(0,0,0,0.28)]'
                    : isSelected
                    ? 'bg-theme-primary/10 border-theme-primary'
                    : 'glass-spatial border-theme-border/60 hover:border-theme-primary/50',
                ].join(' ')}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-theme-primary text-white text-[10px] font-mono font-bold px-3 py-1 flex items-center gap-1 shadow-sm">
                    <Award className="w-3 h-3" /> {pkg.badge}
                  </span>
                )}

                <div className="space-y-2">
                  <WebliixIcon icon={Icon} variant="badge" size="md" />
                  <span className="text-[11px] font-mono text-theme-muted uppercase tracking-wider block">
                    {pkg.outcome}
                  </span>
                  <h3 className="text-lg font-display font-bold text-theme-text">{pkg.name}</h3>
                  <p className="text-2xl font-mono font-extrabold text-theme-primary">₹{pkg.price.toLocaleString()}</p>
                  <p className="text-xs text-theme-muted leading-relaxed">{pkg.tagline}</p>
                </div>

                <WebliixButton
                  variant={isGrowth ? 'primary' : 'ghost'}
                  size="sm"
                  fullWidth
                  onClick={() => handleChoosePackage(id)}
                >
                  {pkg.cta}
                </WebliixButton>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FULL COMPARISON TABLE
          ═══════════════════════════════════════ */}
      <section id="launchkit-compare" className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Full breakdown
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">Compare every package</h2>
        </div>

        <WebliixCard variant="panel" className="overflow-x-auto p-0">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-theme-border">
                <th className="text-left p-4 font-mono text-theme-muted uppercase tracking-wider text-[10px] sm:text-xs">
                  Feature
                </th>
                {PACKAGE_ORDER.map((id) => (
                  <th
                    key={id}
                    className={[
                      'p-4 text-center font-display font-bold whitespace-nowrap',
                      id === 'growth' ? 'text-theme-primary' : 'text-theme-text',
                    ].join(' ')}
                  >
                    {PACKAGES[id].name.replace('LaunchKit ', '')}
                    {id === 'growth' && <span className="ml-1">⭐</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-theme-card/40' : ''}>
                  <td className="p-4 text-theme-muted font-medium whitespace-nowrap">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td
                      key={j}
                      className={[
                        'p-4 text-center whitespace-nowrap',
                        v === '✓' ? 'text-theme-primary font-bold' : 'text-theme-text',
                        v === '—' ? 'text-theme-muted' : '',
                      ].join(' ')}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </WebliixCard>
      </section>

      {/* ═══════════════════════════════════════
          WHAT YOU NEED TO LAUNCH ONLINE
          ═══════════════════════════════════════ */}
      <section className="space-y-7">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Built for launch
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            What does a new business need to launch online?
          </h2>
          <p className="text-theme-muted text-sm">
            LaunchKit covers the core digital foundations that customers expect before they contact or buy from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ['Professional business website', 'Responsive pages, clear services, contact paths and a credible first impression.'],
            ['Brand identity', 'Logo, colors, typography and visual consistency for a recognizable business presence.'],
            ['Google Business Profile support', 'Setup and optimization support for eligible local and service-area businesses.'],
            ['SEO foundation', 'Keyword targeting, titles, descriptions, sitemap, internal linking, schema and search setup.'],
            ['Lead generation', 'WhatsApp CTAs, enquiry forms and conversion-focused calls to action.'],
            ['Business email & analytics', 'Professional email plus GA4/Search Console setup for visibility after launch.'],
          ].map(([title, description]) => (
            <WebliixCard key={title} variant="panel" className="p-5">
              <h3 className="text-base font-display font-bold text-theme-text">{title}</h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed mt-2">{description}</p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SELECTED PACKAGE DETAIL
          ═══════════════════════════════════════ */}
      <section id="launchkit-details" className="space-y-8 pt-4">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">Step 2</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">What’s included in your business launch package</h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Viewing <span className="text-theme-primary font-bold">{selectedPackage.name}</span> — switch above anytime.
          </p>
        </div>

        <WebliixCard variant="accent" accentColor="primary" className="p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-theme-border/60 pb-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-theme-text">{selectedPackage.name}</h3>
              <p className="text-xs text-theme-muted mt-1">{selectedPackage.bestFor}</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-xs font-mono text-theme-muted">
                <Clock className="w-4 h-4 text-theme-primary" /> {selectedPackage.timeline}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-theme-muted">
                <ShieldCheck className="w-4 h-4 text-theme-primary" /> {selectedPackage.support}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedPackage.groups.map((group) => (
              <div key={group.title} className="space-y-2.5">
                <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider block">
                  {group.title}
                </span>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-theme-text">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {selectedPackage.bonus?.length > 0 && (
            <div className="pt-4 border-t border-theme-border/60 flex flex-wrap gap-2">
              {selectedPackage.bonus.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
                >
                  🎁 {b}
                </span>
              ))}
            </div>
          )}
        </WebliixCard>
      </section>

      {/* ═══════════════════════════════════════
          CUSTOMIZE — secondary add-ons
          ═══════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="max-w-xl space-y-1">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            Want to customize your package?
          </h3>
          <p className="text-theme-muted text-xs sm:text-sm">Add exactly what you need.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ADDONS.map((addon) => {
            const isChecked = selectedAddons.includes(addon.id);
            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={[
                  'p-3.5 cursor-pointer transition-all duration-300 border flex items-center justify-between gap-3',
                  isChecked
                    ? 'bg-theme-primary/10 border-theme-primary'
                    : 'border-theme-border/50 hover:border-theme-border',
                ].join(' ')}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleAddon(addon.id)}
                    className="w-4 h-4 border-theme-border text-theme-primary focus:ring-theme-primary"
                  />
                  <span className="text-xs font-medium text-theme-text">{addon.label}</span>
                </div>
                <span className="text-xs font-mono font-bold text-theme-primary whitespace-nowrap">
                  {addon.from ? 'From ' : '+'}₹{addon.price.toLocaleString()}
                  {addon.unit || ''}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICE SUMMARY
          ═══════════════════════════════════════ */}
      <section>
        <WebliixCard variant="accent" accentColor="primary" className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <span className="text-xs font-mono text-theme-muted uppercase block font-semibold">Your LaunchKit</span>
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-theme-primary">
                ₹{total.toLocaleString()}
              </div>
              <span className="text-[11px] text-theme-muted block mt-1">One-time setup</span>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-4 justify-center sm:justify-start">
                {['Website', 'Branding', 'SEO Foundation', 'Google Business', 'WhatsApp Leads', 'Analytics'].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-1.5 text-xs text-theme-text">
                      <Check className="w-3.5 h-3.5 text-theme-primary" /> {item}
                    </span>
                  )
                )}
              </div>

              <p className="text-[11px] text-theme-muted pt-3">No hidden setup fees.</p>

              {recurringAddons.length > 0 && (
                <p className="text-[11px] text-theme-muted pt-1">
                  Plus recurring: {recurringAddons.map((a) => `${a.label} (${a.from ? 'from ' : ''}₹${a.price.toLocaleString()}${a.unit})`).join(', ')}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <WebliixButton variant="primary" icon={ArrowUpRight} size="lg" fullWidth>
                  Ready to Launch
                </WebliixButton>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <WebliixButton variant="ghost" icon={MessageCircle} size="md" fullWidth>
                  Talk to an Expert
                </WebliixButton>
              </a>
            </div>
          </div>
        </WebliixCard>
      </section>

      {/* ═══════════════════════════════════════
          VALUE STACK (Growth anchor)
          ═══════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Why LaunchKit Growth
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            You're not just buying a website
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">You're getting a complete digital launch system.</p>
        </div>

        <WebliixCard variant="feature" className="max-w-2xl mx-auto p-6 sm:p-8">
          <div className="divide-y divide-theme-border/60">
            {VALUE_STACK.map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2.5 text-sm">
                <span className="text-theme-text">{row.label}</span>
                <span className="font-mono text-theme-muted">₹{row.value.toLocaleString()}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-2.5 text-sm font-bold">
              <span className="text-theme-text">Estimated standalone value</span>
              <span className="font-mono text-theme-text">
                ₹{VALUE_STACK.reduce((s, r) => s + r.value, 0).toLocaleString()}+
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 text-base font-bold">
              <span className="text-theme-primary">LaunchKit Growth</span>
              <span className="font-mono text-theme-primary text-xl">₹29,999</span>
            </div>
          </div>
        </WebliixCard>
      </section>

      {/* ═══════════════════════════════════════
          "WHICH LAUNCHKIT IS RIGHT FOR YOU"
          ═══════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text text-center">
          Which LaunchKit is right for you?
        </h2>

        <WebliixCard variant="panel" className="max-w-2xl mx-auto p-0 overflow-hidden">
          {NEED_ROWS.map((row, i) => (
            <div
              key={row.need}
              className={[
                'flex items-center justify-between gap-4 p-4 sm:p-5',
                i !== NEED_ROWS.length - 1 ? 'border-b border-theme-border/60' : '',
              ].join(' ')}
            >
              <span className="text-sm text-theme-text flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-theme-muted shrink-0" /> You need... {row.need}
              </span>
              {row.pkg ? (
                <WebliixButton variant="utility" size="sm" onClick={() => handleChoosePackage(row.pkg)}>
                  {row.choice}
                </WebliixButton>
              ) : (
                <Link to="/contact">
                  <WebliixButton variant="ghost" size="sm">
                    {row.choice}
                  </WebliixButton>
                </Link>
              )}
            </div>
          ))}
        </WebliixCard>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
          ═══════════════════════════════════════ */}
      <section className="space-y-7">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Simple launch process
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            How to launch your business website with Webliix
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ['01', 'Plan', 'Tell us about your business, audience, services and launch goals.'],
            ['02', 'Build', 'We create your website, branding, business email and required integrations.'],
            ['03', 'Prepare', 'We configure on-page SEO, analytics, Search Console and local setup where eligible.'],
            ['04', 'Launch', 'We test the experience, connect your domain and help you go live.'],
          ].map(([number, title, description]) => (
            <WebliixCard key={number} variant="feature" className="p-5">
              <span className="font-mono text-theme-primary text-xs font-bold">{number}</span>
              <h3 className="text-lg font-display font-bold text-theme-text mt-2">{title}</h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed mt-2">{description}</p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SEO FOUNDATION
          ═══════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto space-y-4">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Search-ready foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            SEO for your new business website
          </h2>
        </div>
        <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
          LaunchKit includes SEO foundations so your website starts with a clear, crawlable and
          search-friendly structure. Depending on your package, this can include keyword targeting,
          page titles and meta descriptions, sitemap and robots.txt, internal linking, image optimization,
          schema markup, Google Search Console, GA4 and conversion tracking.
        </p>
        <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
          SEO is a long-term process, and no credible provider can guarantee a specific Google position.
          The goal at launch is to give your website the technical and on-page foundation needed for
          future content, authority and local SEO work.
        </p>
      </section>

      {/* ═══════════════════════════════════════
          NORTH INDIA + INTERNATIONAL
          ═══════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Where we work
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            Business website packages for North India and international clients
          </h2>
          <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
            Webliix can work remotely with businesses that want a professional website and digital launch system.
            For North India, our content and launch process is a strong fit for businesses in Delhi NCR,
            Gurugram, Noida, Chandigarh, Mohali, Panchkula, Punjab, Haryana, Uttar Pradesh, Rajasthan,
            Uttarakhand and Himachal Pradesh. We also work with businesses targeting Australia, Canada and the USA.
          </p>
        </div>

        <WebliixCard variant="panel" className="p-6 sm:p-8">
          <p className="text-sm text-theme-text leading-relaxed">
            <span className="font-semibold">North India:</span> Apna naya business online launch karna hai?
            Website, branding, Google presence aur SEO ko ek hi launch plan mein organize karein.
          </p>
          <p className="text-sm text-theme-text leading-relaxed mt-3">
            <span className="font-semibold">Punjab & Chandigarh region:</span> ਨਵਾਂ business online launch ਕਰਨਾ?
            Webliix LaunchKit gives you one coordinated starting point for your website and digital presence.
          </p>
        </WebliixCard>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            Frequently asked questions about business launch packages
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[
            ['What is a business launch package?',
              'A business launch package combines core digital setup services such as website development, branding, SEO foundations, online presence setup and launch support into one coordinated project.'],
            ['How much does a small business website package cost?',
              'Webliix LaunchKit packages in India start at ₹14,999. The right package depends on your page count, lead-generation needs, SEO depth and whether you need ecommerce.'],
            ['Is SEO included in the website package?',
              'Yes. Every LaunchKit package includes a defined SEO foundation, with deeper keyword targeting, schema and technical SEO in Growth and Business.'],
            ['Will my website rank #1 on Google?',
              'No ranking position is guaranteed. LaunchKit focuses on building a technically sound, useful and search-friendly foundation for future organic growth.'],
            ['Can you build a website for a new business?',
              'Yes. Starter is designed specifically for businesses establishing their first professional online presence, while Growth is aimed at lead generation and Business at ecommerce.'],
            ['Do you set up Google Business Profile?',
              'Google Business Profile setup or optimization support is available for eligible storefront and service-area businesses. Online-only businesses are not eligible for a Google Business Profile.'],
            ['Do you work with businesses outside India?',
              'Yes. Webliix can work remotely with businesses in Australia, Canada, the USA and other markets. Country-specific pricing and scope can be discussed before work begins.'],
            ['Can I add more pages or services later?',
              'Yes. LaunchKit can be extended with additional pages, landing pages, blog setup, SEO management, maintenance, product uploads and other add-ons.'],
          ].map(([question, answer]) => (
            <WebliixCard key={question} variant="panel" className="p-5">
              <h3 className="text-sm sm:text-base font-display font-bold text-theme-text">{question}</h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed mt-2">{answer}</p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════ */}
      <section>
        <WebliixCard variant="spatial" className="p-8 sm:p-14 text-center space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Webliix LaunchKit
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Everything your business needs to launch online — website, brand, Google, SEO and leads.
          </h2>
          <p className="text-theme-muted text-sm">Website. Branding. Google Business Profile. SEO. Leads. Business Email.</p>
          <p className="text-xs font-mono text-theme-muted">
            From ₹14,999 · ⭐ Most businesses choose Growth — ₹29,999
          </p>
          <div className="flex justify-center pt-2">
            <Link to="/contact">
              <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
                Start My Launch
              </WebliixButton>
            </Link>
          </div>
        </WebliixCard>
      </section>
    </div>
  );
}