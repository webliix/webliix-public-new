import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code,
  Layout,
  Smartphone,
  Zap,
  Lock,
  Search,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  Server,
} from 'lucide-react';
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
      name: 'Business & Corporate Websites',
      badge: 'Business Sites',
      icon: Layout,
      desc: 'Professional business and corporate websites that explain your services clearly, build trust, and make it easy for customers to contact you.',
      deliverables: [
        '5–10 custom responsive pages',
        'WhatsApp, click-to-call & enquiry forms',
        'Google Maps & business contact setup',
        'Performance-focused React / modern frontend architecture',
        'SEO-ready page structure, metadata & headings'
      ]
    },
    {
      id: 'landing',
      name: 'Landing Pages for Marketing Campaigns',
      badge: 'Lead Generation',
      icon: Zap,
      desc: 'Focused landing pages for Google Ads, Meta Ads, product launches and other campaigns where a clear message and strong call to action matter.',
      deliverables: [
        'Campaign-focused page structure & CTA placement',
        'Fast-loading responsive layout',
        'Lead capture with email or CRM forwarding',
        'Analytics and conversion event tracking',
        'Google Tag Manager, GA4 & advertising pixel integration'
      ]
    },
    {
      id: 'custom',
      name: 'Custom Web Platforms',
      badge: 'Custom Development',
      icon: Code,
      desc: 'Interactive websites and web platforms for businesses that need dashboards, customer portals, APIs, dynamic data, or custom workflows.',
      deliverables: [
        'React / Next.js application interfaces',
        'Role-based login, portals & dashboards',
        'REST API & third-party integrations',
        'Dynamic search, filters & custom forms',
        'Cloud deployment, HTTPS & production configuration'
      ]
    }
  ];

  const coreFeatures = [
    {
      icon: Smartphone,
      title: 'Responsive Website Design',
      desc: 'Layouts are designed for mobile phones, tablets, laptops and desktop screens so customers can navigate and contact your business comfortably on different devices.'
    },
    {
      icon: Zap,
      title: 'Performance-Focused Development',
      desc: 'Lightweight implementation, image optimization and Core Web Vitals awareness help create a fast, responsive browsing experience without promising a fixed PageSpeed score.'
    },
    {
      icon: Search,
      title: 'Technical SEO Foundation',
      desc: 'Semantic HTML, clear heading structure, unique metadata, crawlable links, sitemap support and relevant structured data help search engines understand your pages.'
    },
    {
      icon: Lock,
      title: 'HTTPS & Website Security',
      desc: 'Secure HTTPS configuration, safer form handling, spam protection and appropriate server or platform security settings are included according to the project setup.'
    },
    {
      icon: Server,
      title: 'Domain & Deployment Support',
      desc: 'We help connect your custom domain, configure hosting or CDN services, enable HTTPS and take the approved website live.'
    },
    {
      icon: ShieldCheck,
      title: 'Source Code & Asset Ownership',
      desc: 'You receive the project source code and agreed digital assets, with ownership and account access handled according to the project agreement.'
    }
  ];

  const packages = [
    {
      name: 'Starter Business Website',
      price: '₹9,999',
      period: 'One-time investment',
      badge: 'Essential Launch',
      popular: false,
      desc: 'A practical starting website for startups, consultants, professionals, clinics and local businesses that need a credible online presence.',
      timeline: '5–7 Days Delivery',
      features: [
        '5 Bespoke Responsive Pages (Home, About, Services, Gallery, Contact)',
        'Modern React & Tailwind CSS Architecture',
        'Contact / Enquiry Form with Email Notifications',
        'WhatsApp & Click-to-Call Integration',
        'Google Maps & Social Media Links',
        '1-Year Domain (.com / .in) & SSL Setup',
        'Basic On-Page SEO & Google Search Console Setup',
        '30 Days Post-Launch Technical Support'
      ]
    },
    {
      name: 'Growth Dynamic Website',
      price: '₹18,999',
      period: 'One-time investment',
      badge: 'Most Popular',
      popular: true,
      desc: 'For growing businesses that need more pages, content publishing, stronger lead capture and a more complete SEO foundation.',
      timeline: '7–10 Days Delivery',
      features: [
        'Up to 10 Custom Responsive Pages',
        'Integrated Blog / News Publishing System',
        'Advanced Lead Forms & Conversion-Focused Sections',
        'Filterable Portfolio / Case Study Showcase',
        'Performance Optimization & Core Web Vitals Review',
        'On-Page SEO & Relevant JSON-LD Structured Data',
        'Google Analytics 4 & Meta Pixel Setup',
        '60 Days Post-Launch Support'
      ]
    },
    {
      name: 'Custom Corporate Web Platform',
      price: 'Custom Quote',
      period: 'Tailored Architecture Scope',
      badge: 'Custom Platform',
      popular: false,
      desc: 'For organizations that need custom workflows, portals, integrations, multiple languages, or functionality beyond a standard business website.',
      timeline: '12–18 Days Delivery',
      features: [
        'Custom Page Layouts & Application Components',
        'React / Next.js Application Architecture',
        'User Authentication & Protected Portals',
        'CRM, ERP or REST API Integrations',
        'Multi-Language & Multi-Region Support',
        'Security, CDN & Deployment Configuration',
        'Project Roadmap & Technical Planning',
        '90 Days Priority Maintenance & Support'
      ]
    }
  ];

  const techStack = [
    { name: 'React.js', role: 'Interactive Frontend Development', tag: 'Frontend' },
    { name: 'Next.js', role: 'Modern Web Applications & SEO', tag: 'Full-Stack' },
    { name: 'Tailwind CSS', role: 'Responsive Interface Styling', tag: 'UI' },
    { name: 'Node.js', role: 'APIs & Server-Side Services', tag: 'Backend' },
    { name: 'Vite', role: 'Fast Frontend Build Tool', tag: 'Build' },
    { name: 'Cloudflare', role: 'CDN, DNS & Web Security', tag: 'Infrastructure' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Requirements',
      desc: 'We understand your business, customers, services, goals, existing website and required functionality before development begins.'
    },
    {
      step: '02',
      title: 'Content & Page Structure',
      desc: 'We organize the navigation, page hierarchy, calls to action and content structure so visitors can quickly understand what you offer.'
    },
    {
      step: '03',
      title: 'UI/UX Design & Development',
      desc: 'We build the approved interface with responsive layouts, reusable components and the agreed technologies and integrations.'
    },
    {
      step: '04',
      title: 'SEO, Performance & Testing',
      desc: 'We review headings, metadata, internal links, structured data, mobile usability and performance before launch.'
    },
    {
      step: '05',
      title: 'Deployment & Handover',
      desc: 'We connect the domain, configure HTTPS and deployment, verify the production website, and hand over the agreed project assets and access.'
    }
  ];

  const faqs = [
    {
      question: 'How much does website development cost?',
      answer: 'Website development cost depends on the number of pages, design requirements, content, integrations and functionality. Webliix website packages currently start at ₹9,999 for a standard business website, with custom quotes available for larger websites and web platforms.'
    },
    {
      question: 'How long does it take to build a business website?',
      answer: 'A Starter Business Website is typically planned for 5–7 days, a Growth Dynamic Website for 7–10 days, and a custom corporate web platform can take longer depending on the scope and integrations.'
    },
    {
      question: 'Do you build websites for businesses outside India?',
      answer: 'Yes. Webliix works with businesses in India and international markets. Project scope, communication, pricing and delivery are discussed according to the client and project requirements.'
    },
    {
      question: 'Will my website be ready for Google Search?',
      answer: 'We build a technical SEO foundation that can include semantic HTML, logical headings, unique page metadata, crawlable links, sitemap support, internal linking and relevant structured data. These practices help search engines understand the site, but no agency can guarantee a particular ranking position.'
    },
    {
      question: 'Can you redesign or rebuild an existing website?',
      answer: 'Yes. We can redesign an outdated website, rebuild it on a modern stack, improve its mobile experience and preserve important existing URLs where the project requirements allow.'
    },
    {
      question: 'Do I own my website and source code?',
      answer: 'Project ownership and account access are handled according to the agreed scope. Webliix can provide the project source code and agreed digital assets after completion, subject to any third-party software or service terms.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Website Development Services for Businesses | Webliix</title>
        <meta
          name="description"
          content="Webliix provides website development services for businesses, startups and professionals, including responsive websites, landing pages, custom React/Next.js development and SEO-ready website foundations."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://webliix.com/website-development" />

        {/* Open Graph */}
        <meta property="og:title" content="Website Development Services for Businesses | Webliix" />
        <meta property="og:description" content="Responsive business websites, landing pages and custom web platforms built around usability, search visibility and customer enquiries." />
        <meta property="og:url" content="https://webliix.com/website-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webliix.com/meta-gen/og_image.jpg" />
        <meta property="og:image:alt" content="Webliix website development services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development Services for Businesses | Webliix" />
        <meta name="twitter:description" content="Custom, responsive and SEO-ready website development for businesses in India and international markets." />
        <meta name="twitter:image" content="https://webliix.com/meta-gen/og_image.jpg" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://webliix.com/website-development#service",
            "name": "Website Development Services",
            "url": "https://webliix.com/website-development",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "serviceType": [
              "Website Development",
              "Custom Website Development",
              "Responsive Web Design",
              "React Development",
              "Next.js Development",
              "Landing Page Development",
              "Web Application Development"
            ],
            "description": "Website development services including responsive business websites, landing pages, React and Next.js development, and custom web platforms for businesses in India and international markets.",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Website Development Packages",
              "itemListElement": packages.map((pkg, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": pkg.name,
                "description": pkg.desc,
                "url": "https://webliix.com/website-development#website-pricing",
                ...(pkg.price !== "Custom Quote" ? {
                  "price": pkg.price.replace(/[^0-9]/g, ""),
                  "priceCurrency": "INR"
                } : {})
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Code className="w-3.5 h-3.5" /> Custom Website Development &amp; Web Design
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          <span className="text-shimmer">Website Development</span> Services for Businesses Worldwide
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Webliix builds custom, responsive websites for businesses, startups and professionals—from business websites and landing pages to React, Next.js and web application development. Each project is structured around usability, mobile experience, search visibility and customer enquiries.
        </p>

        <p className="text-theme-muted text-xs sm:text-sm max-w-2xl mx-auto">
          Our website development services cover business websites, corporate websites, landing pages, e-commerce websites and custom web platforms, with project delivery for clients in India and international markets.
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
          <div className="text-xs text-theme-muted font-medium">Page Performance Target</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">&lt; 1.5s</div>
          <div className="text-xs text-theme-muted font-medium">Load-Time Goal</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">100%</div>
          <div className="text-xs text-theme-muted font-medium">Code Ownership</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">5–7 Days</div>
          <div className="text-xs text-theme-muted font-medium">Typical Launch Time</div>
        </WebliixCard>
      </div>

      {/* Website Types Architecture */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Website Development for Different Business Needs
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
            Why Businesses Choose Webliix for Website Development
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
            Website Development Technologies
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
            Website Development Packages &amp; Pricing
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
            Our Website Development Process
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            From initial wireframing to live DNS propagation, our organized process ensures a clear, documented project workflow.
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
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFaq(idx);
                  }
                }}
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
          <Sparkles className="w-3.5 h-3.5" /> Start Your Website Project
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Build or Redesign Your Website?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Tell us about your business, website goals and required features. We will review the scope and discuss the right approach for your project.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Discuss Your Website Project
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
