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
      title: '24/7 Security & Firewall Hardening',
      desc: 'Real-time malware scanning, brute-force attack prevention, core security patch updates, and automated SSL certificate renewals.'
    },
    {
      icon: HardDrive,
      title: 'Automated Daily Cloud Backups',
      desc: 'Full offsite database and file backups stored across encrypted cloud buckets with 1-click instant disaster recovery.'
    },
    {
      icon: Zap,
      title: 'Continuous Speed & Uptime Monitoring',
      desc: 'Round-the-clock server health checks with 60-second ping intervals and proactive Core Web Vitals optimization.'
    },
    {
      icon: RefreshCw,
      title: 'Framework & Dependency Updates',
      desc: 'Safe, staging-tested updates for React packages, Node.js runtimes, WordPress plugins, PHP versions, and database schemas.'
    },
    {
      icon: Wrench,
      title: 'Dedicated Developer Task Hours',
      desc: 'Monthly developer time allocated for adding new banners, modifying text, updating pricing, or creating new landing pages.'
    },
    {
      icon: LifeBuoy,
      title: 'Priority Emergency Bug Resolution',
      desc: 'Guaranteed emergency response SLAs to immediately diagnose and resolve server crashes, broken forms, or payment gateway issues.'
    }
  ];

  const packages = [
    {
      name: 'Essential Care Plan',
      price: '₹2,999',
      period: '/ month',
      badge: 'Small Business',
      popular: false,
      desc: 'Proactive security, uptime monitoring, and weekly backups for standard business websites.',
      timeline: '24/7 Proactive Care',
      features: [
        'Weekly Automated Offsite Cloud Backups',
        '24/7 Real-Time Uptime & Server Monitoring',
        'Security Patches, Firewall & SSL Auto-Renewal',
        'Software & Dependency Updates in Staging',
        '1 Hour Monthly Included Developer Support',
        'Monthly Website Health & Traffic Report',
        'Next-Business-Day Email & Ticket Support'
      ]
    },
    {
      name: 'Business Growth Care',
      price: '₹5,999',
      period: '/ month',
      badge: 'Most Popular',
      popular: true,
      desc: 'Comprehensive maintenance, speed tuning, and dedicated developer hours for active websites & online stores.',
      timeline: 'Priority SLA Response',
      features: [
        'Daily Automated Cloud Backups with 1-Click Restore',
        'Continuous Speed & Core Web Vitals Tuning',
        'Database Optimization & Caching Engine Maintenance',
        'Malware Removal & Proactive Vulnerability Fixes',
        '4 Hours Monthly Included Developer Tasks',
        'Form & Payment Gateway Health Testing',
        'Priority 4-Hour Response Time SLA'
      ]
    },
    {
      name: 'Enterprise SLA Care',
      price: '₹12,999',
      period: '/ month',
      badge: 'Mission Critical',
      popular: false,
      desc: 'VIP maintenance and rapid emergency response for high-traffic SaaS platforms and multi-store e-commerce brands.',
      timeline: '1-Hour Emergency SLA',
      features: [
        'Real-Time Continuous Backups & Geo-Redundancy',
        'Dedicated Senior DevOps & Frontend Engineer',
        '10 Hours Monthly Dedicated Feature Development',
        'Custom Webhooks & API Integration Monitoring',
        '1-Hour Emergency Incident Resolution SLA',
        'Staging Environment Management & Zero-Downtime Deploys',
        'Dedicated WhatsApp Channel with Lead Engineers'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Why do I need a monthly maintenance plan?',
      answer: 'Websites are live digital software platforms. Without regular updates, security vulnerabilities emerge, plugins break, database tables get bloated slowing down page speed, and unmonitored server errors can cause silent lost sales. Our plans ensure your website remains fast, secure, and fully operational 24/7.'
    },
    {
      question: 'What can I use my included monthly developer hours for?',
      answer: 'You can use your hours for any technical or design task: uploading new products, updating text and banners, creating new service pages, modifying forms, adding analytics tracking pixels, or styling tweaks.'
    },
    {
      question: 'Can I cancel or change my plan anytime?',
      answer: 'Yes. Our maintenance plans operate on a flexible month-to-month basis with zero long-term lock-in contracts. You can upgrade, downgrade, or cancel at any time.'
    },
    {
      question: 'Do you support websites not built by Webliix?',
      answer: 'Yes! We begin with a complimentary 360-degree technical audit of your existing website codebase and server architecture before onboarding you onto our maintenance infrastructure.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Website &amp; Software Maintenance Services | Webliix</title>
        <meta
          name="description"
          content="Keep your website secure, fast, and 99.99% operational with Webliix monthly maintenance plans. Daily cloud backups, speed optimization, security scans, and dedicated developer hours."
        />
        <meta
          name="keywords"
          content="website maintenance service, wordpress maintenance plan, software maintenance agency, speed optimization support, webliix website maintenance"
        />
        <link rel="canonical" href="https://webliix.com/website-maintenance" />

        {/* Open Graph */}
        <meta property="og:title" content="Website &amp; Software Maintenance Services | Webliix" />
        <meta property="og:description" content="Proactive website maintenance: daily backups, security monitoring, 95+ PageSpeed tuning, and dedicated developer hours." />
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
            "description": "Continuous website security scans, daily cloud backups, framework updates, speed tuning, and dedicated technical maintenance.",
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
          <Wrench className="w-3.5 h-3.5" /> 24/7 Proactive Technical Care
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Website &amp; Software <span className="text-shimmer">Maintenance</span> Plans
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Never worry about server crashes, malware attacks, or slow load times again. We handle daily cloud backups, security hardening, framework updates, and monthly developer tasks so you can focus on growing your business.
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
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">99.99%</div>
          <div className="text-xs text-theme-muted font-medium">Uptime Guarantee</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Daily</div>
          <div className="text-xs text-theme-muted font-medium">Encrypted Cloud Backups</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">1-Hour</div>
          <div className="text-xs text-theme-muted font-medium">Emergency SLA Response</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">0%</div>
          <div className="text-xs text-theme-muted font-medium">Lock-In Contracts</div>
        </WebliixCard>
      </div>

      {/* Core Maintenance Pillars */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Total Peace of Mind
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Comprehensive Proactive Website Care
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
            Choose Your Maintenance Tier
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
          <Sparkles className="w-3.5 h-3.5" /> 24/7 Security Assurance
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Need Proactive Maintenance For Your Digital Platform?
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
