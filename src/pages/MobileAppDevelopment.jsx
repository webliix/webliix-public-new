import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Layers,
  Zap,
  Globe,
  Lock,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  BellRing,
  CreditCard,
  MapPin,
  Cpu,
  Download,
  Share2,
  MessageSquare,
  Award,
  Play
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function MobileAppDevelopment() {
  const [selectedCategory, setSelectedCategory] = useState('cross');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const appTypes = [
    {
      id: 'cross',
      name: 'Cross-Platform Flutter Apps',
      badge: 'Single Codebase',
      icon: Smartphone,
      desc: 'Native-feel iOS and Android applications compiled from a single, high-performance Flutter or React Native codebase.',
      features: [
        'Single codebase running on iOS & Android',
        '60 FPS buttery smooth native animations',
        'Offline storage & background data synchronization',
        'Device hardware access (Camera, GPS, Biometrics)',
        'App Store & Google Play Store publishing support'
      ]
    },
    {
      id: 'ecommerce-app',
      name: 'Mobile E-Commerce & Service Apps',
      badge: 'Direct Revenue',
      icon: CreditCard,
      desc: 'Customer-facing shopping apps with 1-tap UPI payments, push notification campaigns, and live order tracking.',
      features: [
        'One-click UPI, Cards & NetBanking checkout',
        'Targeted push notifications with deep links',
        'Live driver / order tracking with Google Maps API',
        'Customer loyalty points & referral bonus system',
        'Admin order fulfillment & inventory dashboard'
      ]
    },
    {
      id: 'enterprise-app',
      name: 'Enterprise Field & Staff Apps',
      badge: 'Internal Operations',
      icon: ShieldCheck,
      desc: 'Secure enterprise mobile tools for field workers, sales agents, logistics drivers, and on-site staff.',
      features: [
        'Role-based security & device hardware authentication',
        'Offline form filling & barcode/QR scanning',
        'Automated GPS attendance & route tracking',
        'Direct backend ERP/CRM database synchronization',
        'Enterprise MDM (Mobile Device Management) ready'
      ]
    }
  ];

  const capabilities = [
    {
      icon: BellRing,
      title: 'Automated Push Notifications',
      desc: 'Engage and re-activate customers with targeted push notifications for flash sales, order status updates, and reminders.'
    },
    {
      icon: CreditCard,
      title: 'Seamless Mobile Payment SDKs',
      desc: 'Direct in-app integration with Razorpay, Cashfree, Stripe, PhonePe, and Apple Pay / Google Pay.'
    },
    {
      icon: MapPin,
      title: 'Geolocation & Live GPS Tracking',
      desc: 'Real-time location mapping, radius-based discovery, and doorstep courier tracking powered by Google Maps API.'
    },
    {
      icon: Lock,
      title: 'Biometric & Secure Auth',
      desc: 'Instant FaceID, Fingerprint sensor, and OTP login flows ensuring bank-grade protection for customer accounts.'
    },
    {
      icon: Cpu,
      title: 'High-Throughput Cloud APIs',
      desc: 'Secure REST/GraphQL backend architecture with real-time webhooks, automated scaling, and low latency.'
    },
    {
      icon: Download,
      title: 'App Store & Play Store Guarantee',
      desc: 'We handle the complete submission, compliance checks, asset generation, and privacy policies for Apple and Google stores.'
    }
  ];

  const packages = [
    {
      name: 'Starter Mobile App (MVP)',
      price: 'Custom Quote',
      period: 'Feature & Screen Based',
      badge: 'Fast Launch',
      popular: false,
      desc: 'Perfect for startups and businesses launching their first Android & iOS app with core feature sets.',
      timeline: '3–4 Weeks Delivery',
      features: [
        'Flutter Cross-Platform Build for iOS & Android',
        'User Authentication (OTP, Google, Apple Login)',
        'Up to 8 Custom Screens & Interactive Navigation',
        'REST API Backend & Cloud Database Setup',
        'Firebase Push Notifications Integration',
        'Google Play Store & Apple App Store Publishing',
        'Complete Source Code & Asset Ownership',
        '45 Days Free Technical Maintenance'
      ]
    },
    {
      name: 'Commercial E-Commerce / Service App',
      price: 'Custom Quote',
      period: 'Integrations & Scale Based',
      badge: 'Most Popular',
      popular: true,
      desc: 'Complete mobile storefront or booking application with payments, live tracking, and admin dashboard.',
      timeline: '5–7 Weeks Delivery',
      features: [
        'Advanced iOS & Android Storefront Architecture',
        'Integrated Payment Gateways (UPI, Cards, Wallets)',
        'Live Google Maps Geolocation & Order Tracking',
        'Automated In-App Chat & WhatsApp Support Sync',
        'Promotional Coupon Codes & Abandoned Cart Alerts',
        'Web Admin Management Portal & Analytics Suite',
        'App Store Optimization (ASO) for Higher Search Ranking',
        '90 Days Priority SLA Maintenance & Support'
      ]
    },
    {
      name: 'Custom Enterprise Mobile Ecosystem',
      price: 'Custom Quote',
      period: 'Multi-App Architecture',
      badge: 'Multi-Role Suite',
      popular: false,
      desc: 'Multi-app ecosystem including Customer App, Partner/Driver App, and Centralized Operations Portal.',
      timeline: '8–12 Weeks Delivery',
      features: [
        'Dual or Triple App Architecture (Customer + Partner + Admin)',
        'Real-Time WebSocket Geolocation & Dispatch Logic',
        'Offline Data Sync & Enterprise Biometric Security',
        'Custom ERP / CRM / Database Integration',
        'High-Concurrency Microservices Backend',
        'Dedicated Mobile Solutions Architect',
        '180 Days Extended Enterprise Support & SLA'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Will our app work on both iPhone (iOS) and Android devices?',
      answer: 'Yes! We develop using modern cross-platform frameworks like Flutter and React Native. This allows your mobile application to run natively on both iOS (App Store) and Android (Google Play Store) with flawless 60 FPS performance while saving you 40% to 50% in development costs.'
    },
    {
      question: 'Do you assist with getting the app approved on Google Play and Apple App Store?',
      answer: 'Yes, 100%. App store submission and policy compliance are fully included in our packages. We prepare all developer screenshots, icons, privacy policy documents, and handle any app review clarifications until your app is live and downloadable.'
    },
    {
      question: 'Can we send push notifications to our users anytime?',
      answer: 'Yes. We integrate Firebase Cloud Messaging (FCM) and OneSignal, giving you an easy-to-use admin dashboard where you can broadcast push notifications to all users or send automated trigger-based notifications.'
    },
    {
      question: 'Do we own the full app source code?',
      answer: 'Yes. Webliix transfers complete, unencrypted source code repositories and IP rights to you upon project sign-off.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Mobile App Development Services (iOS & Android) | Webliix</title>
        <meta
          name="description"
          content="Build high-performance Android and iOS mobile applications with Webliix. Flutter, React Native, custom APIs, in-app payments, and full App Store publishing support."
        />
        <meta
          name="keywords"
          content="mobile app development company, flutter app development, android app developer, ios app development agency, ecommerce mobile app, webliix mobile app"
        />
        <link rel="canonical" href="https://webliix.com/mobile-app-development" />

        {/* Open Graph */}
        <meta property="og:title" content="Mobile App Development Services (iOS & Android) | Webliix" />
        <meta property="og:description" content="Turnkey Flutter & React Native mobile applications built for high performance, in-app payments, and instant App Store approval." />
        <meta property="og:url" content="https://webliix.com/mobile-app-development" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile App Development Services",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "serviceType": "Mobile Application Development",
            "description": "Cross-platform iOS and Android mobile app development with Flutter, React Native, payment gateway integrations, and App Store deployment.",
            "offers": {
              "@type": "Offer",
              "price": "49999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://webliix.com/mobile-app-development"
            }
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Smartphone className="w-3.5 h-3.5" /> iOS &amp; Android Cross-Platform Apps
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Native-Feel <span className="text-shimmer">Mobile App</span> Development
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Put your business in your customers' pockets. We craft high-speed, intuitive mobile apps for iOS and Android powered by Flutter, complete with in-app payments, push notifications, and App Store publishing.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Build Your Mobile App
            </WebliixButton>
          </Link>
          <a href="#app-packages">
            <WebliixButton variant="ghost" size="lg">
              Get Free Quote &amp; Estimate
            </WebliixButton>
          </a>
        </div>
      </div>

      {/* Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">60 FPS</div>
          <div className="text-xs text-theme-muted font-medium">Fluid UI Performance</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">iOS &amp; Android</div>
          <div className="text-xs text-theme-muted font-medium">Single Codebase</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">100%</div>
          <div className="text-xs text-theme-muted font-medium">Store Publishing Guarantee</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">100%</div>
          <div className="text-xs text-theme-muted font-medium">Source Code Ownership</div>
        </WebliixCard>
      </div>

      {/* App Categories */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Targeted Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Mobile Solutions for Every Industry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {appTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedCategory === type.id;
            return (
              <WebliixCard
                key={type.id}
                variant={isSelected ? 'accent' : 'panel'}
                accentColor="primary"
                className="p-6 sm:p-8 space-y-5 flex flex-col justify-between cursor-pointer transition-all duration-300"
                onClick={() => setSelectedCategory(type.id)}
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
                      Core Features
                    </span>
                    <ul className="space-y-2 text-xs text-theme-text">
                      {type.features.map((item, i) => (
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
                      Select {type.name.split(' ')[0]}
                    </WebliixButton>
                  </Link>
                </div>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Built-in Features */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Mobile Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Enterprise Features Built Into Every App
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((feat, index) => {
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

      {/* Pricing Packages */}
      <section id="app-packages" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Tailored Scopes
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Mobile Development Scopes
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
            Got Questions?
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
          <Sparkles className="w-3.5 h-3.5" /> Launch on iOS &amp; Android
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Build Your Mobile App?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Get a free consultation and project scope with zero obligations. We'll outline your app architecture, UI flow, and timeline.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Book Mobile App Consultation
            </WebliixButton>
          </Link>
          <a
            href={`https://wa.me/${siteConfig.brand.contactPhone.replace(/[^0-9]/g, '')}?text=Hi%20Webliix,%20I'd%20like%20to%20discuss%20a%20Mobile%20App%20Development%20project.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="ghost" size="lg" icon={MessageSquare}>
              Chat on WhatsApp
            </WebliixButton>
          </a>
        </div>
      </WebliixCard>
    </div>
  );
}
