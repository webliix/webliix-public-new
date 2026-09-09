import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code,
  Layout,
  Smartphone,
  Zap,
  Globe,
  Lock,
  Search,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Layers,
  Clock,
  ShieldCheck,
  Server,
  FileCode,
  Palette,
  MessageSquare,
  Award,
  Terminal,
  Cpu,
  Monitor
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function WebsiteDevelopment() {
  const [activeTab, setActiveTab] = useState('business');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const websiteTypes = [
    {
      id: 'business',
      name: 'Business & Corporate Sites',
      badge: 'High Conversion',
      icon: Layout,
      desc: 'Bespoke corporate platforms designed to build authoritative trust, showcase offerings, and convert high-intent client leads.',
      deliverables: [
        '5–10 custom designed responsive pages',
        'Direct WhatsApp & interactive lead generation forms',
        'Google Maps & professional business email setup',
        'Speed-optimized React & Tailwind CSS architecture',
        'Complete On-Page SEO hierarchy & meta tags'
      ]
    },
    {
      id: 'landing',
      name: 'High-Converting Landing Pages',
      badge: 'Fast Lead Gen',
      icon: Zap,
      desc: 'Ultra-targeted, single-page sales funnels engineered specifically for Google Ads, Meta Ads, and product launch campaigns.',
      deliverables: [
        'Psychology-driven visual hierarchy & CTA placement',
        'Sub-second load times for maximum ad conversion',
        'Custom lead capture with instant email/CRM forwarding',
        'A/B testing ready structure with event tracking',
        'Pixel, Google Tag Manager & GA4 integration'
      ]
    },
    {
      id: 'custom',
      name: 'Custom Interactive Web Platforms',
      badge: 'Complex Logic',
      icon: Code,
      desc: 'Dynamic, feature-rich web portals with database connections, client dashboards, API integrations, and customized user flows.',
      deliverables: [
        'Next.js / React single-page spatial experience',
        'Role-based login, client portals & dashboards',
        'REST API & third-party backend data synchronization',
        'Custom dynamic filters, search engines & forms',
        'Automated cloud hosting deployment with SSL'
      ]
    }
  ];

  const coreFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Responsive UI',
      desc: 'Every layout is meticulously designed and tested across iPhones, Android devices, iPads, laptops, and 4K desktop screens.'
    },
    {
      icon: Zap,
      title: '95+ Google PageSpeed Score',
      desc: 'Clean, lightweight code without bloated builders. We ensure your website loads in under 1.5 seconds for peak user retention.'
    },
    {
      icon: Search,
      title: 'Built-In On-Page Technical SEO',
      desc: 'Semantic HTML5 structure, schema markup, OpenGraph social previews, XML sitemaps, and robots.txt pre-configured for search engines.'
    },
    {
      icon: Lock,
      title: 'SSL Encryption & Enterprise Security',
      desc: 'Automated HTTPS encryption certificates, sanitized form inputs, spam protection, and secure server headers included free.'
    },
    {
      icon: Server,
      title: '1-Year Free Cloud Hosting & Domain',
      desc: 'We configure and connect high-speed global CDN cloud hosting and 1-year custom domain registration (.com / .in).'
    },
    {
      icon: ShieldCheck,
      title: '100% Code & Asset Ownership',
      desc: 'No vendor lock-in. You receive complete ownership of all source code, design assets, domain, and server accounts upon launch.'
    }
  ];

  const packages = [
    {
      name: 'Starter Business Website',
      price: '₹9,999',
      period: 'One-time investment',
      badge: 'Essential Launch',
      popular: false,
      desc: 'Ideal for startups, consultants, clinics, and local businesses establishing a professional web presence.',
      timeline: '5–7 Days Delivery',
      features: [
        '5 Bespoke Responsive Pages (Home, About, Services, Gallery, Contact)',
        'Modern React & Tailwind CSS Architecture',
        'Interactive Contact Form with Direct Email Notifications',
        'WhatsApp Live Chat Integration',
        'Google Maps & Social Media Links Setup',
        '1-Year Free Domain (.com / .in) & SSL Certificate',
        'Basic On-Page SEO & Google Search Console Submission',
        '30 Days Free Post-Launch Technical Support'
      ]
    },
    {
      name: 'Growth Dynamic Website',
      price: '₹18,999',
      period: 'One-time investment',
      badge: 'Most Popular',
      popular: true,
      desc: 'Perfect for growing companies needing multi-page authority, dynamic service showcases, and content marketing.',
      timeline: '7–10 Days Delivery',
      features: [
        'Up to 10 Custom Designed Responsive Pages',
        'Integrated Blog & News Publishing System',
        'Advanced Lead Generation Funnels & Interactive Calculator',
        'Dynamic Filterable Portfolio / Case Study Showcase',
        '95+ Mobile PageSpeed Performance Tuning',
        'Comprehensive On-Page SEO & JSON-LD Structured Data',
        'Google Analytics 4 & Meta Pixel Tracking Setup',
        '60 Days Dedicated Post-Launch Support & Maintenance'
      ]
    },
    {
      name: 'Custom Corporate Web Platform',
      price: 'Custom Quote',
      period: 'Tailored Architecture Scope',
      badge: 'Enterprise Grade',
      popular: false,
      desc: 'Engineered for enterprises, fintech, real estate, and organizations with complex multi-system workflows.',
      timeline: '12–18 Days Delivery',
      features: [
        'Unlimited Custom Page Layouts & Architectural Components',
        'Next.js / React SSR Architecture for Sub-Second Speeds',
        'User Authentication & Protected Client / Partner Portal',
        'Custom CRM, ERP, or REST API Backend Integrations',
        'Multi-Language & Multi-Region Localization Support',
        'Advanced Security Audits, DDoS Protection & Cloudflare CDN',
        'Dedicated Project Manager & Architectural Roadmap',
        '90 Days Priority SLA Maintenance & Support'
      ]
    }
  ];

  const techStack = [
    { name: 'React.js', role: 'Interactive Frontend', tag: 'High Speed' },
    { name: 'Next.js', role: 'Server-Side Rendering & SEO', tag: 'Enterprise' },
    { name: 'Tailwind CSS', role: 'Modern Design System', tag: 'Clean UI' },
    { name: 'Node.js', role: 'Fast API & Serverless', tag: 'Backend' },
    { name: 'Vite', role: 'Optimized Bundler', tag: 'Lightweight' },
    { name: 'Cloudflare', role: 'Edge CDN & Security', tag: 'Global' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Wireframing',
      desc: 'We analyze your target audience, competitor landscape, brand colors, and craft structured wireframe blueprints.'
    },
    {
      step: '02',
      title: 'UI/UX Visual Design',
      desc: 'We design high-fidelity visual layouts with custom typography, spatial glass styling, and conversion-focused copy.'
    },
    {
      step: '03',
      title: 'Modern Frontend Engineering',
      desc: 'We build your website using modern React/Next.js with clean modular components, fast API routes, and micro-interactions.'
    },
    {
      step: '04',
      title: 'SEO, Speed & Cross-Device QA',
      desc: 'We audit Core Web Vitals, implement structured Schema markup, and test responsiveness across 15+ screen resolutions.'
    },
    {
      step: '05',
      title: 'Deployment & Domain Handover',
      desc: 'We connect your domain, configure HTTPS SSL, submit XML sitemaps to Google, and hand over 100% source code ownership.'
    }
  ];

  const faqs = [
    {
      question: 'Why choose custom React/Next.js development over WordPress templates?',
      answer: 'Pre-made WordPress templates are often weighed down by dozens of unnecessary plugins, resulting in slow load times (5-8+ seconds) and frequent security vulnerabilities. Our custom React/Next.js websites load in under 1.5 seconds, achieve 95+ Google PageSpeed scores, have zero plugin bloat, and provide an ultra-modern spatial aesthetic that sets your brand apart.'
    },
    {
      question: 'How long does it take to design and launch my website?',
      answer: 'Our Starter Business Website is delivered within 5–7 business days. Growth Dynamic Websites take approximately 7–10 days, while custom enterprise platforms require 12–18 days depending on custom API integrations and feature specifications.'
    },
    {
      question: 'Do I own the website and domain after completion?',
      answer: 'Yes, 100%. Webliix operates with complete transparency — you receive full administrative ownership of your domain registration, cloud hosting account, and complete unencrypted source code repository upon project completion.'
    },
    {
      question: 'Will my website rank on Google?',
      answer: 'Yes. Every website we build includes foundational technical On-Page SEO: semantic HTML heading hierarchy, meta titles, descriptions, OpenGraph social cards, XML sitemaps, robots.txt directives, and JSON-LD structured schema markup to ensure fast Google indexing.'
    },
    {
      question: 'Can you update our existing outdated website?',
      answer: 'Absolutely. We regularly migrate legacy websites built on old CMSs or static templates into high-performance, modern React platforms while preserving existing SEO rankings and URL structures.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Professional Website Development Services | Webliix</title>
        <meta
          name="description"
          content="Transform your business with fast, custom React & Next.js website development by Webliix. 95+ PageSpeed scores, mobile-first design, SEO foundation, and 100% code ownership."
        />
        <meta
          name="keywords"
          content="website development company, custom web design, react website agency, nextjs development, corporate business website, landing page design, webliix website development"
        />
        <link rel="canonical" href="https://webliix.com/website-development" />

        {/* Open Graph */}
        <meta property="og:title" content="Professional Website Development Services | Webliix" />
        <meta property="og:description" content="Custom React & Next.js websites built for speed, SEO rankings, and high lead conversions. Clear pricing & 5–7 day delivery." />
        <meta property="og:url" content="https://webliix.com/website-development" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website Development Services",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "serviceType": "Web Development",
            "description": "High-performance React & Next.js website development, corporate websites, landing pages, and responsive design systems with built-in SEO.",
            "offers": {
              "@type": "Offer",
              "price": "9999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://webliix.com/website-development"
            }
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Code className="w-3.5 h-3.5" /> High-Performance Web Engineering
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Modern <span className="text-shimmer">Website Development</span> for High-Growth Brands
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          We engineer lightning-fast, custom websites with modern React architecture, spatial UI aesthetics, and built-in SEO foundations that convert visitors into paying clients.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Start Your Website
            </WebliixButton>
          </Link>
          <a href="#website-pricing">
            <WebliixButton variant="ghost" size="lg">
              Explore Packages
            </WebliixButton>
          </a>
        </div>
      </div>

      {/* Trust & Engineering Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">95+</div>
          <div className="text-xs text-theme-muted font-medium">PageSpeed Score</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">&lt; 1.5s</div>
          <div className="text-xs text-theme-muted font-medium">Average Load Speed</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">100%</div>
          <div className="text-xs text-theme-muted font-medium">Code Ownership</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">5–7 Days</div>
          <div className="text-xs text-theme-muted font-medium">Fast Turnaround</div>
        </WebliixCard>
      </div>

      {/* Website Types Architecture */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Websites Engineered for Your Exact Purpose
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Whether you need a prestigious corporate identity, a high-converting ad landing page, or a dynamic web application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {websiteTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = activeTab === type.id;
            return (
              <WebliixCard
                key={type.id}
                variant={isSelected ? 'accent' : 'panel'}
                accentColor="primary"
                className="p-6 sm:p-8 space-y-5 flex flex-col justify-between cursor-pointer transition-all duration-300"
                onClick={() => setActiveTab(type.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <WebliixIcon icon={Icon} variant="badge" size="md" />
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                      {type.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-theme-text">
                    {type.name}
                  </h3>

                  <p className="text-xs text-theme-muted leading-relaxed">
                    {type.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-theme-border/40">
                    <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                      Deliverables
                    </span>
                    <ul className="space-y-2 text-xs text-theme-text">
                      {type.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
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
                      Choose {type.name.split(' ')[0]}
                    </WebliixButton>
                  </Link>
                </div>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Core Engineering Features */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Built-In Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Why Our Websites Outperform Competitors
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Every website we deploy adheres to modern web standards, security best practices, and search engine guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <WebliixCard key={index} variant="feature" className="p-6 space-y-3">
                <WebliixIcon icon={Icon} variant="badge" size="md" />
                <h3 className="text-base font-display font-bold text-theme-text">
                  {feat.title}
                </h3>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {feat.desc}
                </p>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="space-y-6 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Modern Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            Powered by Leading Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {techStack.map((tech, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-4 text-center space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-theme-primary px-2 py-0.5 rounded bg-theme-primary/10 border border-theme-primary/20 inline-block">
                {tech.tag}
              </span>
              <div className="text-sm font-display font-bold text-theme-text">{tech.name}</div>
              <div className="text-[11px] text-theme-muted">{tech.role}</div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="website-pricing" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            All-Inclusive Development Packages
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Zero hidden fees or surprises. Clear milestone deliverables with complete source code handover upon completion.
          </p>
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
                    Deliverables Included
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
                    {pkg.price === 'Custom Quote' ? 'Get Free Quote & Estimate' : `Get Started with ${pkg.name.split(' ')[0]}`}
                  </WebliixButton>
                </Link>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* 5-Step Development Process */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Execution Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Our 5-Step Engineering Workflow
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            From initial wireframing to live DNS propagation, our organized process ensures zero delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30 inline-block">
                  Step {step.step}
                </span>
                <h4 className="text-sm font-display font-bold text-theme-text">
                  {step.title}
                </h4>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Frequently Asked Questions
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Everything you need to know about our web development technology, timeline, and deliverables.
          </p>
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
          <Sparkles className="w-3.5 h-3.5" /> Launch Your Dream Platform
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Elevate Your Brand With a Custom Website?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Schedule a free technical consultation with our lead architects. We will provide a custom wireframe proposal and roadmap with zero obligations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Book Free Consultation
            </WebliixButton>
          </Link>
          <Link to="/portfolio">
            <WebliixButton variant="ghost" size="lg">
              Explore Live Portfolio
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>
    </div>
  );
}
