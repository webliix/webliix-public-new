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
      name: 'SaaS Platforms & Web Applications',
      badge: 'SaaS',
      icon: Cpu,
      desc: 'Custom software delivered through the web, with user accounts, subscriptions, dashboards, permissions and workflows tailored to the product.',
      highlights: [
        'Subscription and payment integration',
        'Secure authentication & role management',
        'Customer dashboards & account areas',
        'Notifications, events & workflow automation',
        'Multi-tenant application architecture'
      ]
    },
    {
      id: 'portals',
      name: 'CRM, ERP & Business Portals',
      badge: 'Business Systems',
      icon: Database,
      desc: 'Custom internal and customer-facing systems for managing leads, customers, projects, invoices, staff, support and operational workflows.',
      highlights: [
        'Lead, customer & project management',
        'Business workflow automation',
        'Invoices, reports & operational data',
        'Role-based access control',
        'REST API & existing-system integration'
      ]
    },
    {
      id: 'booking',
      name: 'Booking Platforms & Marketplaces',
      badge: 'Platforms',
      icon: Globe,
      desc: 'Custom booking systems and marketplace platforms for businesses that need scheduling, user accounts, payments and structured provider or customer workflows.',
      highlights: [
        'Calendar and time-slot booking',
        'Payment and transaction workflows',
        'Location-based search where required',
        'Email / SMS notification integrations',
        'Reviews, moderation & administrative workflows'
      ]
    }
  ];

  const coreCapabilities = [
    {
      icon: Server,
      title: 'Backend & API Development',
      desc: 'Business APIs and backend services built with technologies such as Java Spring Boot and Node.js, based on the application requirements and expected workload.'
    },
    {
      icon: Layers,
      title: 'React & Next.js Application Interfaces',
      desc: 'Responsive dashboards, portals and interactive application interfaces designed around user workflows, business operations and product requirements.'
    },
    {
      icon: Database,
      title: 'Database & Data Architecture',
      desc: 'Relational and supporting data technologies such as PostgreSQL, MySQL, MongoDB and Redis can be used where appropriate for the application architecture.'
    },
    {
      icon: Lock,
      title: 'Authentication & Access Control',
      desc: 'Role-based permissions, secure authentication, protected routes and appropriate API security controls are implemented according to the system requirements.'
    },
    {
      icon: Zap,
      title: 'Cloud Deployment & Application Delivery',
      desc: 'Deployment can be configured with Docker and cloud infrastructure suited to the application, including environment configuration, HTTPS and release workflows.'
    },
    {
      icon: BarChart3,
      title: 'Dashboards, Reports & Business Data',
      desc: 'Custom dashboards, reports, audit information and operational metrics can be built into the application to help teams work with their business data.'
    }
  ];

  const packages = [
    {
      name: 'MVP Web Application',
      price: 'Custom Quote',
      period: 'Scope & Feature Based',
      badge: 'Startup Ready',
      popular: false,
      desc: 'A focused first version of a web application for validating a product idea, workflow or customer experience with the features that matter most.',
      timeline: '2–3 Weeks Delivery',
      features: [
        'React Frontend & REST API Development',
        'User Authentication & Basic Role Management',
        'PostgreSQL or MongoDB Data Architecture',
        'Responsive Application Interface & Dashboard',
        'Payment Integration When Required',
        'Cloud Deployment & HTTPS Configuration',
        'Source Code Handover & Project Documentation',
        '45 Days Technical Support'
      ]
    },
    {
      name: 'Full-Scale SaaS Platform',
      price: 'Custom Quote',
      period: 'Milestone & Feature Based',
      badge: 'Most Popular',
      popular: true,
      desc: 'A complete SaaS application for products that need multiple users, account areas, subscriptions, dashboards and integrations.',
      timeline: '4–6 Weeks Delivery',
      features: [
        'Next.js + Spring Boot Application Architecture',
        'Multi-Tenant Data & Account Management',
        'Subscription & Billing Workflows',
        'In-App Notifications & Application Events',
        'Role-Based Access Control',
        'Admin Dashboard & Audit Features',
        'Third-Party APIs & Webhooks',
        '90 Days Priority Technical Support'
      ]
    },
    {
      name: 'Custom Enterprise ERP / CRM',
      price: 'Custom Quote',
      period: 'Enterprise Custom Scope',
      badge: 'Enterprise',
      popular: false,
      desc: 'Custom business software for organizations with multi-department workflows, existing systems, complex permissions and reporting requirements.',
      timeline: '6–10 Weeks Delivery',
      features: [
        'Custom CRM / ERP Modules',
        'Sales, Projects, Tasks & Operations Workflows',
        'Legacy Data Migration Where Required',
        'REST APIs & Third-Party Integrations',
        'Cloud or On-Premise Deployment Options',
        'Security & Access-Control Architecture',
        'Technical Architecture & Delivery Roadmap',
        '180 Days Extended Support'
      ]
    }
  ];

  const techStack = [
    { name: 'React / Next.js', role: 'Web Application Interface', tag: 'Frontend' },
    { name: 'Java Spring Boot', role: 'Enterprise Backend & APIs', tag: 'Backend' },
    { name: 'Node.js / Express', role: 'Application APIs & Services', tag: 'API' },
    { name: 'PostgreSQL', role: 'Relational Application Database', tag: 'Database' },
    { name: 'Redis', role: 'Caching & Fast Data Access', tag: 'Performance' },
    { name: 'Docker / Cloud', role: 'Deployment & Infrastructure', tag: 'DevOps' }
  ];

  const faqs = [
    {
      question: 'What is custom web application development?',
      answer: 'Custom web application development creates browser-based software for specific business or product workflows. Unlike a standard website, a web application can include user accounts, dashboards, permissions, dynamic data, transactions, automation and integrations.'
    },
    {
      question: 'What types of web applications can Webliix build?',
      answer: 'Webliix can build SaaS products, customer portals, CRM and ERP systems, dashboards, booking platforms, marketplaces, internal business tools and other custom web applications based on the required workflows and integrations.'
    },
    {
      question: 'Can you integrate an existing CRM, ERP or third-party API?',
      answer: 'Yes. We can plan REST APIs, webhooks and data integrations for existing systems and third-party services. The exact integration approach depends on the API documentation, authentication method and data requirements.'
    },
    {
      question: 'How is a custom web application project priced?',
      answer: 'Custom application projects are quoted according to features, user roles, integrations, database requirements, design complexity, security requirements and delivery scope. We first review the requirements, then propose the architecture and project estimate.'
    },
    {
      question: 'Do we receive the source code?',
      answer: 'The agreed project source code and documentation can be handed over at completion according to the project agreement. Third-party services, libraries and hosting remain subject to their respective licenses and account terms.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Custom Web Application & SaaS Development Services | Webliix</title>
        <meta
          name="description"
          content="Custom web application and SaaS development for businesses and startups, including CRM, ERP, dashboards, portals, APIs and business software built with modern web technologies."
        />
<link rel="canonical" href="https://webliix.com/web-app-development" />

        {/* Open Graph */}
        <meta property="og:title" content="Custom Web Application & SaaS Development Services | Webliix" />
        <meta property="og:description" content="Build custom web applications, SaaS products, CRM/ERP systems, portals, dashboards and business software with Webliix." />
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
            "description": "Custom web application development, SaaS product development, CRM and ERP systems, dashboards, portals and API integrations for businesses and software products."
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Cpu className="w-3.5 h-3.5" /> Custom Web Applications &amp; SaaS Development
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Custom <span className="text-shimmer">Web Application</span> &amp; SaaS Development Services
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
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Scalable</div>
          <div className="text-xs text-theme-muted font-medium">Application Architecture</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">API</div>
          <div className="text-xs text-theme-muted font-medium">Integration Ready</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">100%</div>
          <div className="text-xs text-theme-muted font-medium">IP &amp; Code Ownership</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Security</div>
          <div className="text-xs text-theme-muted font-medium">Security-Focused Build</div>
        </WebliixCard>
      </div>

      {/* Application Archetypes */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Application Models
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Custom Software for Your Business Requirements
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
                      Discuss {type.name.split(' ')[0]}
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
            Built Around Your Application Requirements
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
            Web Application Development Technologies
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
            Custom Web Application Development
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
                    Request Project Estimate
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
          Have a Custom Web Application or SaaS Idea?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Talk directly with our lead engineers. We will analyze your system requirements and provide a detailed technical architecture proposal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Discuss Your Application
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
