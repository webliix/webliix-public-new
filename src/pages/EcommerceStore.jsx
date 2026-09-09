import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Zap,
  CreditCard,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Package,
  Layers,
  Store,
  Smartphone,
  Globe,
  Lock,
  Clock,
  DollarSign,
  Award,
  RefreshCw,
  BarChart3,
  MessageSquare,
  Search,
  Sliders,
  BellRing,
  Tag,
  Share2,
  FileText
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function EcommerceStore() {
  const [selectedPlatform, setSelectedPlatform] = useState('shopify');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const platforms = [
    {
      id: 'shopify',
      name: 'Shopify Store Launch',
      badge: 'Best for D2C Brands',
      icon: Store,
      desc: 'Industry-standard ecommerce platform with zero server headaches, built-in apps, and frictionless mobile checkouts.',
      highlights: [
        'Turnkey Shopify theme customization & setup',
        'Official Shopify Payments / Razorpay / PhonePe integration',
        'Built-in inventory tracking & multi-location stock management',
        'Automated abandoned checkout recovery emails',
        'Shopify Mobile App for real-time sales management'
      ]
    },
    {
      id: 'woocommerce',
      name: 'WooCommerce / WordPress',
      badge: '100% Data Ownership',
      icon: Globe,
      desc: 'Complete control over your customer database, zero monthly platform fees, and infinite customization flexibility.',
      highlights: [
        'Custom WordPress + WooCommerce theme integration',
        'Zero monthly subscription fees or transaction commissions',
        'Direct UPI QR, Cards, NetBanking & COD payment gateways',
        'Shiprocket & automated logistics label generation',
        'Yoast/RankMath On-Page Product SEO schema'
      ]
    },
    {
      id: 'custom',
      name: 'Custom React & Headless Store',
      badge: 'Ultra-Fast Performance',
      icon: Zap,
      desc: 'High-performance React/Next.js storefront with sub-second page loads, custom checkout logic, and bespoke design systems.',
      highlights: [
        'Next.js / React single-page spatial shopping experience',
        'Lightning-fast 98+ Google PageSpeed mobile score',
        'Stripe / Razorpay direct custom API integration',
        'Headless CMS for effortless product & blog editing',
        'Bespoke product configurators & interactive 3D viewers'
      ]
    }
  ];

  const coreFeatures = [
    {
      icon: CreditCard,
      title: 'Multi-Gateway Payment Integration',
      desc: 'Pre-configured support for UPI (GPay, PhonePe, Paytm), Credit/Debit cards, NetBanking, EMI options, and Cash on Delivery (COD).'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Shopping Experience',
      desc: 'Over 80% of online orders happen on mobile. We design fluid, lightning-fast touch layouts with 1-tap checkout.'
    },
    {
      icon: Truck,
      title: 'Automated Courier & Shipping API',
      desc: 'Direct integration with Shiprocket, Delhivery, Blue Dart, or India Post for automated label generation, pin-code checking, and live order tracking.'
    },
    {
      icon: BellRing,
      title: 'WhatsApp & Email Order Alerts',
      desc: 'Keep buyers informed with instant automated WhatsApp confirmations, shipping tracking links, and delivery notifications.'
    },
    {
      icon: Search,
      title: 'Product Schema & Google Merchant SEO',
      desc: 'Structured JSON-LD Product schema tags displaying your prices, stock status, ratings, and rich snippets directly in Google search results.'
    },
    {
      icon: Tag,
      title: 'Discount Codes & Flash Sales Engine',
      desc: 'Run promotional campaigns with percentage discounts, flat coupons, Buy 1 Get 1 (BOGO), and free shipping threshold rules.'
    },
    {
      icon: RefreshCw,
      title: 'Abandoned Cart Recovery',
      desc: 'Recover up to 25% of lost sales with automated reminder emails and SMS incentives sent to visitors who left items in their cart.'
    },
    {
      icon: Lock,
      title: '256-Bit SSL & Bank-Grade Security',
      desc: 'End-to-end HTTPS encryption, secure checkout sessions, and PCI-DSS compliance ensuring complete customer privacy.'
    },
    {
      icon: BarChart3,
      title: 'Sales Dashboard & Analytics',
      desc: 'Real-time overview of daily revenue, top-selling products, average order value (AOV), traffic sources, and customer acquisition metrics.'
    }
  ];

  const packages = [
    {
      name: 'Starter Store Launch',
      price: '₹12,999',
      period: 'One-time setup',
      badge: 'Quick Launch',
      popular: false,
      desc: 'Perfect for local shops, boutiques, and emerging creators selling up to 25 products.',
      timeline: '5–7 Days Delivery',
      features: [
        'Up to 25 Initial Product Listings with Variants',
        'Shopify or WooCommerce Responsive Store Setup',
        'UPI & Razorpay / PhonePe Payment Gateway Setup',
        'Mobile-Optimized Shopping Cart & Checkout',
        'Automated Customer Order Confirmation Email',
        'Basic Product SEO & Google Indexing',
        'Free 1-Year Domain Setup & SSL Certificate',
        '30 Days Dedicated Post-Launch Technical Support'
      ]
    },
    {
      name: 'Growth E-Commerce Store',
      price: '₹24,999',
      period: 'One-time setup',
      badge: 'Most Popular',
      popular: true,
      desc: 'Designed for scaling D2C brands, retailers, and wholesalers with automated operations.',
      timeline: '7–10 Days Delivery',
      features: [
        'Up to 100 Initial Product Listings & Categories',
        'Customized Premium Storefront Design',
        'Multi-Gateway Integration (UPI, Cards, NetBanking, COD)',
        'Automated WhatsApp Order Notification System',
        'Courier Shipping API Integration (Shiprocket / Delhivery)',
        'Discount Coupons & Abandoned Cart Recovery',
        'Advanced Product Schema Markup for Google Shopping',
        'Comprehensive Admin Training & 60 Days Support'
      ]
    },
    {
      name: 'Custom Headless / Enterprise',
      price: 'Custom Quote',
      period: 'Tailored Architecture Scope',
      badge: 'High Performance',
      popular: false,
      desc: 'Bespoke React/Next.js web application for high-volume catalogs and complex custom workflows.',
      timeline: '12–18 Days Delivery',
      features: [
        'Unlimited Product Catalog Architecture',
        'Next.js / React Ultra-Fast Single Page Application',
        'Multi-Currency & International Tax Calculation',
        'Custom ERP, Inventory & CRM Database Integration',
        'Interactive Product 3D Configurator or Custom Filters',
        'Sub-second Page Speeds & 99.99% Uptime Hosting',
        'Dedicated Project Architect & 90 Days Priority Support'
      ]
    }
  ];

  const processSteps = [
    {
      day: 'Day 01',
      title: 'Catalog & Brand Onboarding',
      desc: 'We gather your product photos, descriptions, pricing, brand logos, and payment gateway credentials to build a structured catalog matrix.'
    },
    {
      day: 'Day 02',
      title: 'Storefront Design & Layout',
      desc: 'We craft your homepage, product category filters, product detail pages, and mobile checkout experience tailored to your brand identity.'
    },
    {
      day: 'Day 03',
      title: 'Payments, Shipping & Tax Setup',
      desc: 'We integrate UPI/Cards/COD gateways, connect your courier shipping partner (e.g. Shiprocket), and set up GST invoice automation.'
    },
    {
      day: 'Day 04',
      title: 'SEO, Security & Speed Optimization',
      desc: 'We configure Google Merchant/Product schema, SSL encryption, CDN caching, and conduct end-to-end test order transactions.'
    },
    {
      day: 'Day 05',
      title: 'Live Launch & Staff Training',
      desc: 'Your store goes live to the public. We provide a recorded video walkthrough showing you how to add products, process orders, and view sales.'
    }
  ];

  const faqs = [
    {
      question: 'How do I receive payments from customers into my bank account?',
      answer: 'We integrate trusted payment gateways like Razorpay, PhonePe, Paytm, or Stripe directly into your store. When customers pay via UPI, Credit/Debit cards, or NetBanking, the funds settle directly into your verified business bank account according to the standard T+1 or T+2 settlement cycle.'
    },
    {
      question: 'Do I have to pay any monthly commission on my sales?',
      answer: 'No! Unlike third-party marketplaces (Amazon, Flipkart, Swiggy) that charge 15% to 30% per sale, with Webliix you own your store 100%. You keep 100% of your retail margins with zero platform commissions to us.'
    },
    {
      question: 'Can I add or edit new products by myself after the launch?',
      answer: 'Yes, absolutely! We provide a user-friendly admin panel where you can add new products, update prices, upload images, manage stock, and change banners in seconds. We also include a 1-on-1 walkthrough session and video guide.'
    },
    {
      question: 'How are shipping rates and courier pickups handled?',
      answer: 'We integrate leading shipping aggregator APIs like Shiprocket, Delhivery, or Pickrr. When an order is placed, you can generate shipping labels and arrange doorstep courier pickups with a single click, while customers receive live SMS/WhatsApp tracking links.'
    },
    {
      question: 'What do I need to provide to start building my store?',
      answer: 'All you need to provide are your business name, logo, product photos with pricing/descriptions, contact details, and bank account/GST info for payment gateway activation. We handle all technical architecture, coding, design, and deployment from scratch.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Fast E-Commerce Store Launch in 5–7 Days | Webliix</title>
        <meta
          name="description"
          content="Launch your high-converting online store in 5–7 days with Webliix. Full payment gateway setup (UPI, Cards, COD), product catalog, mobile checkout, SEO schema, and 1-year maintenance."
        />
        <meta
          name="keywords"
          content="ecommerce store launch, shopify developer india, woocommerce website development, online store setup, ecommerce website cost, razorpay upi integration, shiprocket ecommerce website, webliix ecommerce"
        />
        <link rel="canonical" href="https://webliix.com/ecommerce-store" />

        {/* Open Graph */}
        <meta property="og:title" content="Fast E-Commerce Store Launch in 5–7 Days | Webliix" />
        <meta property="og:description" content="Turnkey online store setup with UPI/Card payments, courier tracking, and mobile-first speed. Launch your direct-to-consumer brand fast." />
        <meta property="og:url" content="https://webliix.com/ecommerce-store" />
        <meta property="og:type" content="website" />

        {/* Structured JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fast E-Commerce Store Launch",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "serviceType": "E-Commerce Website Development",
            "description": "Full-service turnkey online store development with UPI & Card payment gateways, automated courier shipping, mobile responsiveness, and SEO product schema.",
            "offers": {
              "@type": "Offer",
              "price": "12999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://webliix.com/ecommerce-store"
            }
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Zap className="w-3.5 h-3.5" /> 5–7 Day Turnkey Deployment
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Fast <span className="text-shimmer">E-Commerce Store</span> Launch
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Start selling online directly to your customers with zero marketplace commissions. Turnkey Shopify, WooCommerce, or custom React storefronts equipped with UPI/Card checkout, automated shipping, and mobile-first speed.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Launch Your Store
            </WebliixButton>
          </Link>
          <a href="#pricing-packages">
            <WebliixButton variant="ghost" size="lg">
              Explore Packages
            </WebliixButton>
          </a>
        </div>
      </div>

      {/* Highlight Stats Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">5–7 Days</div>
          <div className="text-xs text-theme-muted font-medium">Turnkey Launch Time</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">0%</div>
          <div className="text-xs text-theme-muted font-medium">Platform Commissions</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">UPI & Cards</div>
          <div className="text-xs text-theme-muted font-medium">Direct Bank Settlement</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">95+</div>
          <div className="text-xs text-theme-muted font-medium">Mobile PageSpeed</div>
        </WebliixCard>
      </div>

      {/* Platform Choices Selector */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Tailored Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Choose Your Ideal Store Platform
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Whether you want the simplicity of Shopify, the total freedom of WooCommerce, or the ultra-speed of React.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            const isSelected = selectedPlatform === plat.id;
            return (
              <WebliixCard
                key={plat.id}
                variant={isSelected ? 'accent' : 'panel'}
                accentColor="primary"
                className="p-6 sm:p-8 space-y-5 flex flex-col justify-between cursor-pointer transition-all duration-300"
                onClick={() => setSelectedPlatform(plat.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <WebliixIcon icon={Icon} variant="badge" size="md" />
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                      {plat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-theme-text">
                    {plat.name}
                  </h3>

                  <p className="text-xs text-theme-muted leading-relaxed">
                    {plat.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-theme-border/40">
                    <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                      Key Highlights
                    </span>
                    <ul className="space-y-2 text-xs text-theme-text">
                      {plat.highlights.map((h, i) => (
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
                      Select {plat.name.split(' ')[0]}
                    </WebliixButton>
                  </Link>
                </div>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Built-In Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Everything Required to Sell & Scale
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Every store engineered by Webliix comes loaded with enterprise features configured from day one.
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

      {/* Pricing Packages Section */}
      <section id="pricing-packages" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Simple, All-Inclusive Packages
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Clear deliverables with zero hidden costs. Complete code and store ownership transferred upon launch.
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
                    {pkg.price === 'Custom Quote' ? 'Get Free Quote & Estimate' : `Get Started with ${pkg.name.split(' ')[0]}`}
                  </WebliixButton>
                </Link>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* 5-Day Launch Process */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Fast-Track Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            How We Launch Your Store in 5 Days
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            A battle-tested deployment process ensuring quality, security, and sales readiness without delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30 inline-block">
                  {step.day}
                </span>
                <h4 className="text-sm font-display font-bold text-theme-text">
                  {step.title}
                </h4>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="text-right text-[10px] font-mono text-theme-primary/60 font-bold">
                Step 0{idx + 1}
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Everything You Need to Know
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Got questions before launching? Here are clear answers about payments, ownership, and maintenance.
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

      {/* Bottom CTA Banner */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Start Selling This Week
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Build Your Direct-to-Consumer Online Store?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Get a free consultation and project quote with zero obligations. We'll outline your catalog architecture, payment gateways, and launch timeline.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Book Free Consultation
            </WebliixButton>
          </Link>
          <a
            href={`https://wa.me/${siteConfig.brand.contactPhone.replace(/[^0-9]/g, '')}?text=Hi%20Webliix,%20I'm%20interested%20in%20launching%20an%20E-Commerce%20store.`}
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
