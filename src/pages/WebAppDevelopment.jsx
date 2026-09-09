import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Layers,
  Database,
  Server,
  Lock,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  Globe,
  BarChart3,
  Users,
  Settings,
  Shield,
  Workflow,
  KeyRound,
  FileCode2,
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function WebAppDevelopment() {
  const [selectedArch, setSelectedArch] = useState('saas');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const appTypes = [
    {
      id: 'saas',
      name: 'SaaS Platforms & Web Apps',
      badge: 'Multi-Tenant',
      icon: Cpu,
      desc: 'Scalable software-as-a-service platforms with subscription billing, recurring payments, multi-user workspaces, and granular permissions.',
      highlights: [
        'Stripe & Razorpay automated subscription billing',
        'JWT/OAuth2 secure authentication & role management',
        'Real-time WebSocket notifications & event streams',
        'Customer admin dashboard & metric analytics',
        'Multi-tenant database isolation & security'
      ]
    },
    {
      id: 'portals',
      name: 'Custom CRM, ERP & Business Portals',
      badge: 'Internal Systems',
      icon: Database,
      desc: 'Centralized operational software designed to automate sales pipelines, customer ticketing, inventory, invoices, and staff management.',
      highlights: [
        'Custom business workflow automation engine',
        'Employee, lead & project management modules',
        'Automated GST invoicing & PDF report generation',
        'Role-based access control (Admin, Manager, Staff)',
        'REST API & legacy database synchronization'
      ]
    },
    {
      id: 'booking',
      name: 'Marketplaces & Booking Engines',
      badge: 'Two-Sided Platforms',
      icon: Globe,
      desc: 'Complex interactive marketplaces connecting buyers and service providers with live scheduling, payments, and ratings.',
      highlights: [
        'Interactive calendar scheduling & time slot booking',
        'Split payment gateway distribution & escrow logic',
        'Geolocation search & radius-based provider matching',
        'Automated SMS/Email confirmation webhooks',
        'Review, dispute resolution & moderation queues'
      ]
    }
  ];

  const coreCapabilities = [
    {
      icon: Server,
      title: 'Enterprise Backend Engineering',
      desc: 'High-throughput microservices and REST APIs built with Java Spring Boot and Node.js designed to handle thousands of concurrent requests.'
    },
    {
      icon: Layers,
      title: 'Modern Single-Page Frontends',
      desc: 'Fluid, stateful user interfaces built with React and Next.js, featuring spatial glass aesthetics, instant transitions, and rich data tables.'
    },
    {
      icon: Database,
      title: 'Scalable Database Architecture',
      desc: 'Relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) data models engineered with indexing, caching layers, and automated daily backups.'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Security & Auth',
      desc: 'Role-based access control (RBAC), multi-factor authentication (MFA), OWASP Top 10 compliance, API rate-limiting, and 256-bit encryption.'
    },
    {
      icon: Zap,
      title: 'Cloud Deployment & CI/CD',
      desc: 'Automated deployment pipelines across AWS, Google Cloud, Docker, and Vercel with auto-scaling infrastructure and 99.99% uptime SLAs.'
    },
    {
      icon: BarChart3,
      title: 'Live Dashboards & Data Analytics',
      desc: 'Interactive visual charts, exportable CSV/PDF reports, audit logs, and actionable business intelligence metrics built natively.'
    }
  ];

  const packages = [
    {
      name: 'MVP Web Application',
      price: 'Custom Quote',
      period: 'Scope & Feature Based',
      badge: 'Startup Ready',
      popular: false,
      desc: 'Fast-track prototype development to validate your product concept with real users and initial investors.',
      timeline: '2–3 Weeks Delivery',
      features: [
        'Custom React Frontend & Node.js/Java REST API',
        'User Authentication & Role Management (Admin / User)',
        'PostgreSQL or MongoDB Database Architecture',
        'Responsive Web Application & Analytics Dashboard',
        'Payment Gateway Integration (Razorpay / Stripe)',
        'Cloud Server Setup & Automated SSL Deployment',
        'Complete Source Code Handover & Documentation',
        '45 Days Dedicated Technical Support'
      ]
    },
    {
      name: 'Full-Scale SaaS Platform',
      price: 'Custom Quote',
      period: 'Milestone & User Tier Based',
      badge: 'Most Popular',
      popular: true,
      desc: 'Comprehensive multi-tenant software system ready for customer onboarding, recurring subscriptions, and scale.',
      timeline: '4–6 Weeks Delivery',
      features: [
        'Advanced Next.js + Spring Boot Enterprise Architecture',
        'Multi-Tenant Data Partitioning & Subscriptions Engine',
        'Automated Invoice Generation & Usage-Based Billing',
        'Real-Time WebSockets & In-App Notification Hub',
        'Granular Role-Based Access Control (RBAC)',
        'Comprehensive Admin Management & Audit Log Suite',
        'Third-Party API & Webhook Ecosystem Integration',
        '90 Days Priority SLA Maintenance & Support'
      ]
    },
    {
      name: 'Custom Enterprise ERP / CRM',
      price: 'Custom Quote',
      period: 'Enterprise Custom Architecture',
      badge: 'Enterprise Architecture',
      popular: false,
      desc: 'Bespoke corporate management system designed to orchestrate complex internal operations across multiple departments.',
      timeline: '6–10 Weeks Delivery',
      features: [
        'Tailored Workflow Automation & Multi-Department Modules',
        'Sales Pipelines, Task Kanban & Inventory Engine',
        'Legacy Database Migration & High-Throughput APIs',
        'Air-Gapped or Custom On-Premise / Cloud Deployment',
        'SOC2 / GDPR / ISO-Ready Security Architecture',
        'Dedicated Solutions Architect & Sprint Lead',
        '180 Days Extended Enterprise Support & SLA'
      ]
    }
  ];

  const techStack = [
    { name: 'React / Next.js', role: 'Stateful Dynamic UI', tag: 'Frontend' },
    { name: 'Java Spring Boot', role: 'Enterprise Microservices', tag: 'Backend' },
    { name: 'Node.js / Express', role: 'High-Speed REST APIs', tag: 'API Engine' },
    { name: 'PostgreSQL', role: 'Relational ACID Data', tag: 'Database' },
    { name: 'Redis', role: 'In-Memory Caching & Queues', tag: 'Performance' },
    { name: 'AWS / Docker', role: 'Containerized Infrastructure', tag: 'DevOps' }
  ];

  const faqs = [
    {
      question: 'What is the difference between a standard website and a web application?',
      answer: 'A standard website primarily displays information and captures leads. A custom web application operates like software in the browser — allowing users to log in, create accounts, process complex transactions, manipulate dynamic data in real time, generate custom reports, and automate business operations.'
    },
    {
      question: 'How do you ensure our customer data and code remain secure?',
      answer: 'We implement industry standard enterprise security: salted bcrypt password hashing, JWT/OAuth2 tokens with short lifespans, parameterized SQL queries to prevent SQL injections, CSRF protections, strict CORS policies, SSL encryption in transit, and encrypted databases at rest.'
    },
    {
      question: 'Do we own 100% of the source code and IP?',
      answer: 'Yes. Webliix transfers complete intellectual property and source code repository rights to you upon project sign-off. We provide unencumbered, clean, documented code without proprietary runtime licenses.'
    },
    {
      question: 'Can you integrate with our existing CRM, ERP, or third-party APIs?',
      answer: 'Yes. We specialize in building secure RESTful connectors and webhook handlers to synchronize data seamlessly with services like Salesforce, HubSpot, QuickBooks, Shiprocket, Twilio, WhatsApp Business API, and custom legacy databases.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Custom Web Application & SaaS Development | Webliix</title>
        <meta
          name="description"
          content="Build scalable web applications, SaaS platforms, custom CRM/ERP portals, and enterprise dashboards with Webliix. React, Spring Boot, Node.js, and cloud architecture."
        />
        <meta
          name="keywords"
          content="custom web application development, saas product development, spring boot react agency, custom erp crm development, enterprise software development, webliix software"
        />
        <link rel="canonical" href="https://webliix.com/web-app-development" />

        {/* Open Graph */}
        <meta property="og:title" content="Custom Web Application & SaaS Development | Webliix" />
        <meta property="og:description" content="Enterprise web applications, SaaS platforms, and custom business portals built with modern React and Java Spring Boot." />
        <meta property="og:url" content="https://webliix.com/web-app-development" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Web Application Development",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "serviceType": "Software Development",
            "description": "Full-stack custom web application development, SaaS architectures, CRM/ERP systems, and scalable cloud integrations.",
            "offers": {
              "@type": "Offer",
              "price": "39999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://webliix.com/web-app-development"
            }
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Cpu className="w-3.5 h-3.5" /> Full-Stack Software Engineering
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Custom <span className="text-shimmer">Web Application</span> &amp; SaaS Development
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Transform your complex business workflows into scalable, cloud-ready software platforms. We build high-throughput backends, stateful React dashboards, and robust multi-tenant SaaS products.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Request Architecture Consultation
            </WebliixButton>
          </Link>
          <a href="#app-pricing">
            <WebliixButton variant="ghost" size="lg">
              Get Free Quote &amp; Estimate
            </WebliixButton>
          </a>
        </div>
      </div>

      {/* Engineering Capabilities Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">99.99%</div>
          <div className="text-xs text-theme-muted font-medium">Uptime Architecture</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">&lt; 100ms</div>
          <div className="text-xs text-theme-muted font-medium">API Response Time</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">100%</div>
          <div className="text-xs text-theme-muted font-medium">IP &amp; Code Ownership</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">SOC2 Ready</div>
          <div className="text-xs text-theme-muted font-medium">Security Compliant</div>
        </WebliixCard>
      </div>

      {/* Application Archetypes */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Application Models
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Software Engineered for Your Business Scale
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Explore our specialized development architectures designed for high performance and clean maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {appTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedArch === type.id;
            return (
              <WebliixCard
                key={type.id}
                variant={isSelected ? 'accent' : 'panel'}
                accentColor="primary"
                className="p-6 sm:p-8 space-y-5 flex flex-col justify-between cursor-pointer transition-all duration-300"
                onClick={() => setSelectedArch(type.id)}
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
                      Capabilities Included
                    </span>
                    <ul className="space-y-2 text-xs text-theme-text">
                      {type.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                          <span>{h}</span>
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
                      Configure {type.name.split(' ')[0]}
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
            Engineering Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Enterprise Quality in Every Module
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            We follow strict software engineering patterns, automated test suites, and clean architecture standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((feat, index) => {
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

      {/* Tech Stack Matrix */}
      <section className="space-y-6 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Robust Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
            Battle-Tested Tech Ecosystem
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

      {/* Packages Section */}
      <section id="app-pricing" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Tailored Scopes
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Software Development Scopes
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Milestone-based delivery with full scope transparency, weekly sprint demos, and complete code repositories shared from Day 1.
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
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-theme-text">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-theme-muted">
                      ({pkg.period})
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                    Architecture Deliverables
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
                    Get Free Quote &amp; Estimate
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
            Technical Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Frequently Asked Questions
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
          <Sparkles className="w-3.5 h-3.5" /> Engineer Your Vision
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Have a Custom Web App or SaaS Idea?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Talk directly with our lead engineers. We will analyze your system requirements and provide a detailed technical architecture proposal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Schedule Technical Consultation
            </WebliixButton>
          </Link>
          <a
            href={`https://wa.me/${siteConfig.brand.contactPhone.replace(/[^0-9]/g, '')}?text=Hi%20Webliix,%20I'd%20like%20to%20discuss%20a%20Custom%20Web%20App%20or%20Software%20project.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="ghost" size="lg" icon={MessageSquare}>
              Chat with Tech Lead
            </WebliixButton>
          </a>
        </div>
      </WebliixCard>
    </div>
  );
}
