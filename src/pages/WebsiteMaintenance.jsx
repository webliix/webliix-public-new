import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ShieldCheck,
  Zap,
  RefreshCw,
  Server,
  Lock,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Clock,
  AlertTriangle,
  FileCheck,
  BarChart3,
  HardDrive,
  MessageSquare,
  Award,
  LifeBuoy
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function WebsiteMaintenance() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const carePillars = [
    {
      icon: ShieldCheck,
      title: 'Website Security & Updates',
      desc: 'Regular security checks, SSL monitoring, software updates and practical hardening tasks based on the website platform and hosting environment.'
    },
    {
      icon: HardDrive,
      title: 'Website Backups',
      desc: 'Backup monitoring and scheduled offsite backups can help protect website files and databases against accidental changes, failures and other operational issues.'
    },
    {
      icon: Zap,
      title: 'Performance & Uptime Monitoring',
      desc: 'Monitor website availability and review page performance so technical issues, slow pages and broken customer journeys can be investigated promptly.'
    },
    {
      icon: RefreshCw,
      title: 'Framework & Dependency Maintenance',
      desc: 'Planned updates for supported frameworks, packages, plugins, runtimes and database components, with testing appropriate to the project.'
    },
    {
      icon: Wrench,
      title: 'Developer Website Updates',
      desc: 'Use included support time for content changes, new sections, product updates, forms, banners, tracking changes and other agreed website tasks.'
    },
    {
      icon: LifeBuoy,
      title: 'Technical Troubleshooting',
      desc: 'Help investigate website errors, broken forms, deployment issues, integration problems and other technical issues covered by your maintenance plan.'
    }
  ];

  const packages = [
    {
      name: 'Essential Website Care',
      price: '₹2,999',
      period: '/ month',
      badge: 'Small Business',
      popular: false,
      desc: 'Routine technical care for business websites that need regular updates, backups, security checks and monitoring.',
      timeline: 'Ongoing Website Care',
      features: [
        'Weekly Offsite Backup Monitoring',
        'Website Availability Monitoring',
        'Security Patches, SSL & Platform Checks',
        'Software & Dependency Updates',
        '1 Hour Monthly Included Developer Support',
        'Monthly Website Health Report',
        'Next-Business-Day Email & Ticket Support'
      ]
    },
    {
      name: 'Business Website Care',
      price: '₹5,999',
      period: '/ month',
      badge: 'Most Popular',
      popular: true,
      desc: 'Broader maintenance and developer support for active business websites, online stores and frequently updated websites.',
      timeline: 'Priority Support',
      features: [
        'Daily Backup Monitoring',
        'Performance & Core Web Vitals Review',
        'Database & Caching Maintenance Where Applicable',
        'Security Issue Investigation & Fixes',
        '4 Hours Monthly Included Developer Tasks',
        'Form & Payment Integration Checks',
        'Priority Support Response'
      ]
    },
    {
      name: 'Enterprise Application Care',
      price: '₹12,999',
      period: '/ month',
      badge: 'Mission Critical',
      popular: false,
      desc: 'Extended technical maintenance for custom web applications, SaaS products and larger e-commerce systems with ongoing development needs.',
      timeline: 'Priority Technical Support',
      features: [
        'Scheduled Backup & Recovery Monitoring',
        'Dedicated Technical Maintenance',
        '10 Hours Monthly Feature / Maintenance Work',
        'API & Webhook Monitoring Where Applicable',
        'Incident Investigation & Remediation',
        'Staging Environment & Release Support',
        'Dedicated Support Channel'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Why does a website need ongoing maintenance?',
      answer: 'Websites depend on software, hosting, domains, integrations and content that change over time. Regular maintenance helps keep supported components updated, monitor availability, manage backups and address technical problems as they appear.'
    },
    {
      question: 'What can the included developer hours be used for?',
      answer: 'Included support time can be used for agreed website tasks such as content and banner updates, product changes, new pages, form changes, analytics updates, troubleshooting and other minor development work.'
    },
    {
      question: 'Can I change or cancel my maintenance plan?',
      answer: 'Maintenance plans are offered on a flexible monthly basis. Plan changes and cancellation follow the terms agreed for your specific service.'
    },
    {
      question: 'Do you maintain websites that were not built by Webliix?',
      answer: 'Yes. We can review an existing website, hosting setup and technology stack before recommending the appropriate maintenance scope. Access and technical compatibility are required before work begins.'
    },
    {
      question: 'Do you provide maintenance for WordPress and custom websites?',
      answer: 'Yes, where the platform and access are supported. Maintenance can cover WordPress, WooCommerce, React, Next.js and other websites or applications depending on the technology and agreed scope.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Website Maintenance & Support Services | Webliix</title>
        <meta
          name="description"
          content="Website maintenance and technical support for business websites, WordPress, WooCommerce and custom web applications, including updates, backups, security checks, performance reviews and developer support."
        />
<link rel="canonical" href="https://webliix.com/website-maintenance" />

        {/* Open Graph */}
        <meta property="og:title" content="Website Maintenance & Support Services | Webliix" />
        <meta property="og:description" content="Ongoing website maintenance covering security checks, backups, updates, performance reviews, troubleshooting and developer support." />
        <meta property="og:url" content="https://webliix.com/website-maintenance" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website & Software Maintenance Services",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "serviceType": "Website Maintenance & DevOps",
            "description": "Website maintenance and technical support including software updates, backup monitoring, security checks, performance reviews, troubleshooting and developer support.",
            "offers": {
              "@type": "Offer",
              "price": "2999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://webliix.com/website-maintenance"
            }
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Wrench className="w-3.5 h-3.5" /> Ongoing Website Maintenance &amp; Technical Support
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Website <span className="text-shimmer">Maintenance</span> &amp; Support Services
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Keep your website maintained with scheduled updates, backup monitoring, security checks, performance reviews, troubleshooting and developer support. Maintenance is planned around your website platform and business requirements.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Protect Your Website
            </WebliixButton>
          </Link>
          <a href="#care-plans">
            <WebliixButton variant="ghost" size="lg">
              View Monthly Care Plans
            </WebliixButton>
          </a>
        </div>
      </div>

      {/* Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Active</div>
          <div className="text-xs text-theme-muted font-medium">Website Monitoring</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Scheduled</div>
          <div className="text-xs text-theme-muted font-medium">Backup Monitoring</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">Priority</div>
          <div className="text-xs text-theme-muted font-medium">Priority Support</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">0%</div>
          <div className="text-xs text-theme-muted font-medium">Monthly Service</div>
        </WebliixCard>
      </div>

      {/* Core Maintenance Pillars */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Total Peace of Mind
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Website Maintenance Services That Keep Your Site Supported
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <WebliixCard key={index} variant="feature" className="p-6 space-y-3">
                <WebliixIcon icon={Icon} variant="badge" size="md" />
                <h3 className="text-base font-display font-bold text-theme-text">
                  {pillar.title}
                </h3>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="care-plans" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Monthly Subscriptions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Website Maintenance Plans &amp; Pricing
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Simple monthly billing, zero hidden fees, cancel anytime.
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
                    Care Features Included
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
                    Subscribe to {pkg.name.split(' ')[0]}
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
            Clarity &amp; Support
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
          <Sparkles className="w-3.5 h-3.5" /> Website Maintenance &amp; Technical Support
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Need Website Maintenance or Technical Support?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Claim a free technical website health audit. We will evaluate your load speed, security vulnerabilities, and code dependencies at zero cost.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Request Free Health Audit
            </WebliixButton>
          </Link>
          <a
            href={`https://wa.me/${siteConfig.brand.contactPhone.replace(/[^0-9]/g, '')}?text=Hi%20Webliix,%20I'd%20like%20to%20learn%20more%20about%20your%20Website%20Maintenance%20plans.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="ghost" size="lg" icon={MessageSquare}>
              Chat with DevOps
            </WebliixButton>
          </a>
        </div>
      </WebliixCard>
    </div>
  );
}
