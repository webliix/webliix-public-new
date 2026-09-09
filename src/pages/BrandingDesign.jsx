import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Palette,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  ArrowUpRight,
  HelpCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  FileImage,
  Layout,
  Share2,
  Printer,
  Sliders,
  Eye,
  MessageSquare,
  Zap,
  PenTool,
  Grid
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function BrandingDesign() {
  const [selectedTier, setSelectedTier] = useState('identity');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesBreakdown = [
    {
      id: 'logo-brand',
      name: 'Logo & Brand Identity Systems',
      badge: 'Core Identity',
      icon: Palette,
      desc: 'Distinctive, memorable vector logos designed with color psychology, versatile lockups, and complete brand style guidelines.',
      features: [
        '3–5 unique original logo concepts with unlimited revisions',
        'Vector source files (.AI, .EPS, .SVG, .PDF, .PNG, .JPG)',
        'Primary, secondary, monochrome, and inverted lockups',
        'Brand typography hierarchy & color palette hex codes',
        'Official Brand Style Guidelines PDF handbook'
      ]
    },
    {
      id: 'ui-ux',
      name: 'UI/UX Product & Web Design',
      badge: 'Figma Systems',
      icon: Layout,
      desc: 'Modern, high-conversion user interfaces for websites, mobile apps, and SaaS platforms created with pixel-perfect Figma design systems.',
      features: [
        'Figma interactive prototypes & user journey flows',
        'Spatial glassmorphism design language & micro-interactions',
        'Component design system & reusable style library',
        'Mobile-first responsive layout specifications',
        'Developer-ready auto-layout token exports'
      ]
    },
    {
      id: 'collateral',
      name: 'Marketing Collateral & Print Assets',
      badge: 'Print & Digital',
      icon: Printer,
      desc: 'Complete suite of physical stationery and digital marketing templates that maintain consistent branding across every touchpoint.',
      features: [
        'Print-ready business cards & premium letterhead designs',
        'Social media starter templates (Instagram, LinkedIn, Facebook)',
        'Email signature design & digital letterheads',
        'Promotional roll-up banners, brochures & pitch decks',
        'High-resolution 3D mockup presentations'
      ]
    }
  ];

  const packages = [
    {
      name: 'Starter Brand Identity',
      price: '₹5,999',
      period: 'One-time investment',
      badge: 'Essential Brand',
      popular: false,
      desc: 'Perfect for startups and local businesses establishing a memorable and professional visual identity.',
      timeline: '3–5 Days Delivery',
      features: [
        '3 Custom Vector Logo Design Concepts',
        'Unlimited Design Iterations on Selected Concept',
        'Full Vector Source File Bundle (.AI, .EPS, .SVG, .PNG, .JPG)',
        'Curated Brand Color Palette (HEX, RGB, CMYK)',
        'Typography & Font Hierarchy Pairing Guide',
        'Print-Ready Business Card Design (Front & Back)',
        'High-Resolution 3D Mockup Showcase',
        '100% Full Copyright & Commercial Ownership'
      ]
    },
    {
      name: 'Full Corporate Branding Suite',
      price: '₹12,999',
      period: 'One-time investment',
      badge: 'Most Popular',
      popular: true,
      desc: 'Comprehensive corporate identity package covering logo, brand book, stationery, and social media templates.',
      timeline: '5–7 Days Delivery',
      features: [
        '5 Premium Bespoke Logo Concepts with Unlimited Iterations',
        'Complete 15-Page Brand Guidelines PDF Book',
        'Full Stationery Kit (Business Card, Letterhead, Envelope)',
        'Social Media Kit (6 Editable Instagram & LinkedIn Templates)',
        'Professional Email Signature Design',
        'Favicon & Web App Icon Package',
        'Vector Source Files & Font License Documentation',
        'Dedicated Brand Designer & Priority Revisions'
      ]
    },
    {
      name: 'Complete UI/UX Product Design',
      price: 'Custom Quote',
      period: 'Scope & Screen Based',
      badge: 'Product Architecture',
      popular: false,
      desc: 'End-to-end Figma UI/UX design for web applications, SaaS platforms, and mobile apps.',
      timeline: '10–14 Days Delivery',
      features: [
        'Interactive Figma Prototype with Full Micro-Interactions',
        'Complete Spatial Design System & UI Component Library',
        'User Journey Wireframing & Usability Architecture',
        'Mobile, Tablet & Desktop Responsive Screen Mockups',
        'Design Token Export for React/Tailwind Frontend Developers',
        'Design Handoff Walkthrough Video & Source Files',
        '30 Days Post-Handoff Developer Consultation Support'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What source files will I receive for my logo and brand assets?',
      answer: 'You will receive the complete master file package including vector files (.AI, .EPS, .SVG, .PDF) that can be scaled infinitely without losing quality for billboard printing, as well as web-ready transparent formats (.PNG, .WebP, .JPG, .ICO).'
    },
    {
      question: 'Do I own the full copyright and trademark rights to my brand design?',
      answer: 'Yes, 100%. Webliix provides a full transfer of intellectual property and commercial copyright. Your logo and brand assets are 100% custom-crafted from scratch and eligible for legal trademark registration.'
    },
    {
      question: 'What if I need revisions to the logo concepts?',
      answer: 'We offer unlimited revisions during the drafting phase. We refine colors, fonts, shapes, and layouts until you are completely thrilled with the final design.'
    },
    {
      question: 'Can you deliver the UI/UX designs directly in Figma?',
      answer: 'Yes! All UI/UX projects are designed natively in Figma with Auto-Layout, reusable component sets, design tokens, and interactive click-through prototypes ready for immediate frontend development.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Branding &amp; UI/UX Design Services | Webliix</title>
        <meta
          name="description"
          content="Craft iconic brand identities, custom vector logos, and intuitive Figma UI/UX designs with Webliix. Full vector assets, brand guidelines, and 100% copyright ownership."
        />
        <meta
          name="keywords"
          content="branding design agency, logo design company, ui ux design figma, corporate brand identity, brand guidelines book, webliix branding"
        />
        <link rel="canonical" href="https://webliix.com/branding-design" />

        {/* Open Graph */}
        <meta property="og:title" content="Branding &amp; UI/UX Design Services | Webliix" />
        <meta property="og:description" content="Distinctive logo design, corporate brand guidelines, and conversion-focused Figma UI/UX product design." />
        <meta property="og:url" content="https://webliix.com/branding-design" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Branding & UI/UX Design Services",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "serviceType": "Graphic & UI/UX Design",
            "description": "Custom logo design, brand style guidelines, vector source assets, stationery design, and interactive Figma UI/UX prototypes.",
            "offers": {
              "@type": "Offer",
              "price": "5999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://webliix.com/branding-design"
            }
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Palette className="w-3.5 h-3.5" /> Iconic Brand Identities &amp; UI Systems
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Strategic <span className="text-shimmer">Branding</span> &amp; UI/UX Design
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Stand out with a timeless, authoritative brand presence. We design bespoke vector logos, comprehensive brand style books, and intuitive Figma UI/UX product experiences that command respect.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Start Your Brand Project
            </WebliixButton>
          </Link>
          <a href="#branding-pricing">
            <WebliixButton variant="ghost" size="lg">
              Explore Design Packages
            </WebliixButton>
          </a>
        </div>
      </div>

      {/* Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">100%</div>
          <div className="text-xs text-theme-muted font-medium">Original Vector Art</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Unlimited</div>
          <div className="text-xs text-theme-muted font-medium">Design Revisions</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">100%</div>
          <div className="text-xs text-theme-muted font-medium">Copyright Transfer</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Figma Ready</div>
          <div className="text-xs text-theme-muted font-medium">Developer Tokens</div>
        </WebliixCard>
      </div>

      {/* Design Pillars */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Creative Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            End-to-End Creative Design Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesBreakdown.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedTier === item.id;
            return (
              <WebliixCard
                key={item.id}
                variant={isSelected ? 'accent' : 'panel'}
                accentColor="primary"
                className="p-6 sm:p-8 space-y-5 flex flex-col justify-between cursor-pointer transition-all duration-300"
                onClick={() => setSelectedTier(item.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <WebliixIcon icon={Icon} variant="badge" size="md" />
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-theme-text">
                    {item.name}
                  </h3>

                  <p className="text-xs text-theme-muted leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-theme-border/40">
                    <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                      Deliverables Included
                    </span>
                    <ul className="space-y-2 text-xs text-theme-text">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/contact">
                    <WebliixButton
                      variant={isSelected ? 'primary' : 'ghost'}
                      size="sm"
                      fullWidth
                      icon={ArrowUpRight}
                    >
                      Choose {item.name.split(' ')[0]}
                    </WebliixButton>
                  </Link>
                </div>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="branding-pricing" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Creative Design Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, idx) => (
            <WebliixCard
              key={idx}
              variant={pkg.popular ? 'accent' : 'panel'}
              accentColor="primary"
              className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                pkg.popular ? 'border-2 border-theme-primary shadow-spatial-lg' : ''
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary px-2.5 py-0.5 rounded-full bg-theme-primary/10 border border-theme-primary/20">
                    {pkg.badge}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {pkg.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-theme-text">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-theme-muted mt-1 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-theme-border/40">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-theme-text">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-theme-muted">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                    What's Included
                  </span>
                  <ul className="space-y-2.5 text-xs text-theme-text">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-theme-border/40">
                <Link to="/contact">
                  <WebliixButton
                    variant={pkg.popular ? 'primary' : 'ghost'}
                    size="md"
                    fullWidth
                    icon={ArrowUpRight}
                  >
                    {pkg.price === 'Custom Quote' ? 'Get Free Quote & Estimate' : `Select ${pkg.name.split(' ')[0]}`}
                  </WebliixButton>
                </Link>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Everything You Need to Know
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <WebliixCard
                key={idx}
                variant="panel"
                className="p-5 space-y-3 cursor-pointer transition-all duration-200"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm sm:text-base font-display font-bold text-theme-text flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-theme-primary shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-theme-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-theme-primary' : ''
                    }`}
                  />
                </div>

                {isOpen && (
                  <p className="text-xs sm:text-sm text-theme-muted leading-relaxed pt-2 border-t border-theme-border/40">
                    {faq.answer}
                  </p>
                )}
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Transform Your Brand
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Craft an Unforgettable Brand Identity?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Get a free branding discovery session with our creative directors. We'll explore your aesthetic vision and deliver custom moodboard concepts.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Book Creative Discovery
            </WebliixButton>
          </Link>
          <a
            href={`https://wa.me/${siteConfig.brand.contactPhone.replace(/[^0-9]/g, '')}?text=Hi%20Webliix,%20I'd%20like%20to%20discuss%20a%20Branding%20or%20UI/UX%20Design%20project.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="ghost" size="lg" icon={MessageSquare}>
              Chat with Designer
            </WebliixButton>
          </a>
        </div>
      </WebliixCard>
    </div>
  );
}
