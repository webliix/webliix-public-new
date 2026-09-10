import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  Layers,
  Search,
  Share2,
  TrendingUp,
  Target,
  ShieldCheck,
  DollarSign,
  BarChart3,
  Users,
  Eye,
  MousePointerClick,
  PhoneCall,
  UserCheck,
  ShoppingBag,
  Award,
  Zap,
  Lock,
  Clock,
  Briefcase
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import AdvertisingLeadForm from '../components/spatial/AdvertisingLeadForm';

export default function PaidAdvertising() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const processSteps = [
    {
      num: '01',
      title: 'Understand Your Business',
      desc: 'We learn about your products or services, target customers, location, core offer, and advertising goals.'
    },
    {
      num: '02',
      title: 'Choose the Right Approach',
      desc: 'We determine whether Google Ads, Meta Ads, or a strategic combination makes the most practical sense for your business.'
    },
    {
      num: '03',
      title: 'Set Up Tracking',
      desc: 'Where applicable, we configure conversion tracking so valuable actions like forms, calls, and WhatsApp clicks are accurately measured.'
    },
    {
      num: '04',
      title: 'Build the Campaign',
      desc: 'We create targeted campaigns, keywords, audiences, ad copy, and tracking settings according to the agreed plan.'
    },
    {
      num: '05',
      title: 'Launch With a Controlled Budget',
      desc: 'We launch within your comfortable monthly budget rather than recommending unnecessary high spending from day one.'
    },
    {
      num: '06',
      title: 'Monitor & Optimize',
      desc: 'We regularly review incoming search query and audience data to refine keywords, negative matches, ad copy, and budget allocation.'
    },
    {
      num: '07',
      title: 'Transparent Reporting',
      desc: 'You receive a clear monthly performance summary showing exactly where your advertising budget went and what the campaigns achieved.'
    }
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Ads Starter',
      price: '₹5,999',
      period: '/month management fee',
      badge: 'START HERE',
      popular: false,
      desc: 'For small businesses testing paid advertising for the first time with a controlled, predictable budget.',
      recommendedBudget: '₹10,000–₹20,000 / month ad spend (paid directly to ad platform)',
      suitableFor: 'Local shops, service providers, clinics, and businesses trying paid ads for the first time',
      features: [
        '1 Advertising Platform (Google Ads OR Meta Ads)',
        'Up to 2 Active Campaigns',
        'Basic Campaign Strategy & Setup',
        'Target Audience & Location Targeting',
        'Keyword Research for Google (where applicable)',
        'Ad Copywriting & Basic Creative Direction',
        'Basic Conversion Tracking (Calls / Forms / WhatsApp)',
        'Active Campaign Monitoring & Adjustments',
        'Monthly Transparent Performance Report'
      ]
    },
    {
      id: 'growth',
      name: 'Ads Growth',
      price: '₹9,999',
      period: '/month management fee',
      badge: 'MOST POPULAR',
      popular: true,
      desc: 'For businesses that want more campaign variations, creative testing, and ongoing data-driven optimization.',
      recommendedBudget: '₹20,000–₹50,000 / month ad spend (paid directly to ad platform)',
      suitableFor: 'Growing local brands, e-commerce stores, and service companies looking to scale customer acquisition',
      features: [
        'Everything in Starter, plus:',
        'Up to 3 Active Campaigns on 1 Platform',
        'Detailed Audience & Search Query Research',
        'Multi-Variant Creative & Copy Testing',
        'Landing Page Experience Recommendations',
        'Retargeting Campaigns (where audience volume allows)',
        'Detailed Conversion & Event Tracking Setup',
        'Google Search Term & Negative Keyword Optimization',
        'Meta Audience & Placement Optimization',
        'Monthly Strategic Review & Recommendations'
      ]
    },
    {
      id: 'omnichannel',
      name: 'Google + Meta',
      price: '₹14,999',
      period: '/month management fee',
      badge: 'FULL COVERAGE',
      popular: false,
      desc: 'For businesses wanting to combine high-intent Google search traffic with Meta visual discovery.',
      recommendedBudget: '₹30,000–₹60,000+ / month ad spend (paid directly to ad platforms)',
      suitableFor: 'Established businesses wanting dual-channel acquisition across Google Search, Maps, Facebook & Instagram',
      features: [
        'Dual Platform Coverage: Google Ads + Meta Ads',
        'Google Search & High-Intent Keyword Management',
        'Negative Keyword Cleansing & Quality Score Optimization',
        'Facebook & Instagram Feed/Story/Reels Ad Management',
        'Audience Segmenting & Cross-Platform Retargeting',
        'Full Conversion Tracking across both platforms',
        'Landing Page & Funnel Optimization Advice',
        'Bi-Weekly Campaign Health Checks & Optimization',
        'Comprehensive Monthly Multi-Channel Report',
        'Dedicated Campaign Strategist Support'
      ]
    }
  ];

  const resultsMetrics = [
    {
      icon: Eye,
      title: 'Reach',
      desc: 'How many unique people saw your advertisements across Google, Facebook, or Instagram.'
    },
    {
      icon: MousePointerClick,
      title: 'Traffic',
      desc: 'How many interested people clicked on your ads to visit your website or landing page.'
    },
    {
      icon: PhoneCall,
      title: 'Leads',
      desc: 'How many people contacted your business via call, WhatsApp message, or inquiry form.'
    },
    {
      icon: DollarSign,
      title: 'Cost Per Lead',
      desc: 'The average advertising spend required to generate an inquiry or customer contact.'
    },
    {
      icon: UserCheck,
      title: 'Qualified Leads',
      desc: 'The proportion of inquiries that genuinely match your service area, budget, and offerings.'
    },
    {
      icon: ShoppingBag,
      title: 'Customers',
      desc: 'How many qualified leads ultimately became paying clients or completed purchases.'
    }
  ];

  const faqs = [
    {
      q: 'Is advertising spend included in Webliix’s management fee?',
      a: 'No. Advertising spend is completely separate. You pay your chosen advertising budget directly to Google or Meta through your own account. Webliix charges a separate management fee for planning, building, monitoring, and optimizing your campaigns.'
    },
    {
      q: 'Who receives my advertising budget?',
      a: 'Your advertising budget goes directly to the advertising platform (Google Ads or Meta). You link your own credit/debit card to your ad account, ensuring 100% financial transparency and full control over your spend.'
    },
    {
      q: 'Do I have to spend ₹10,000–₹20,000 every month on ads?',
      a: 'No. The budget figures shown are recommended starting ranges for suitable campaigns to gather meaningful data, not mandatory requirements. We work within your comfortable budget.'
    },
    {
      q: 'Do you guarantee a specific number of leads or sales?',
      a: 'No. We do not make false guarantees about specific lead counts, sales volumes, or ROAS. Campaign results depend on market demand, pricing, offer appeal, competition, landing page experience, and prompt customer follow-up. We promise professional setup, diligent optimization, and honest data-backed reporting.'
    },
    {
      q: 'How long does it take to see results from paid ads?',
      a: 'High-intent search campaigns can generate inquiries within the first few days of launch. However, finding the most cost-effective keywords and audience segments requires continuous data collection and optimization over 2–4 weeks.'
    },
    {
      q: 'Can I pause or stop my advertising campaigns at any time?',
      a: 'Yes. You can pause your ad campaigns anytime in your ad dashboard. For Webliix management services, terms are straightforward with simple monthly billing and no long-term lock-in contracts.'
    },
    {
      q: 'Who owns my advertising accounts and campaign data?',
      a: 'Your business owns 100% of your Google Ads account, Meta Business Portfolio, Facebook Page, Instagram account, and conversion data. Webliix is simply granted administrative partner access to manage campaigns on your behalf.'
    },
    {
      q: 'Do you need my personal Google or Facebook password?',
      a: 'No, never. We invite our manager account to your Google Ads and Meta Business Manager via official partner access. We will never ask for your personal email or social media login passwords.'
    },
    {
      q: 'Can you take over and optimize my existing ad campaigns?',
      a: 'Yes. We can perform a comprehensive audit of your active or past Google/Meta campaigns, identify wasted ad spend, suggest keyword and audience fixes, and take over ongoing management.'
    },
    {
      q: 'Can Webliix build a high-converting landing page for my ads?',
      a: 'Yes. We specialize in developing ultra-fast, mobile-friendly landing pages tailored specifically for Google and Meta ad conversions as an add-on or bundled service.'
    }
  ];

  const canonicalUrl = `${siteConfig.brand.website || 'https://webliix.com'}/paid-advertising`;

  // Structured Data Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Paid Advertising & Ads Management Services for Small Businesses',
    provider: {
      '@type': 'Organization',
      name: siteConfig.brand.name,
      url: 'https://webliix.com',
      logo: 'https://webliix.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.brand.contactPhone,
        contactType: 'customer support',
        areaServed: ['IN', 'US', 'CA', 'DE']
      }
    },
    serviceType: 'Digital Advertising Management',
    description: 'Transparent Google Ads and Meta Ads (Facebook & Instagram) campaign management tailored for small businesses with controlled budgets.',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Small Business Advertising Packages',
      itemListElement: packages.map((pkg) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: pkg.name,
          description: pkg.desc
        },
        price: pkg.price.replace(/\D/g, ''),
        priceCurrency: 'INR'
      }))
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <Helmet>
        <title>Paid Advertising Services for Small Businesses | Webliix</title>
        <meta
          name="description"
          content="Webliix helps small businesses manage Google, Facebook and Instagram advertising with transparent pricing, controlled budgets and clear reporting."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Paid Advertising Services for Small Businesses | Webliix" />
        <meta
          property="og:description"
          content="Transparent Google Ads and Meta Ads management. Separate ad budgets, clear reporting, and no marketing jargon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 theme-rounded-badge bg-theme-primary/10 border border-theme-primary/30 text-xs font-mono font-bold uppercase tracking-widest text-theme-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WEBLIIX PAID ADVERTISING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-theme-text leading-[1.15]">
          Reach the Right Customers With <span className="text-shimmer">Smarter Paid Advertising</span>
        </h1>

        <p className="text-base sm:text-lg text-theme-muted leading-relaxed max-w-2xl mx-auto">
          Webliix helps small businesses plan, launch and manage Google, Facebook and Instagram advertising campaigns with transparent pricing, controlled budgets and clear reporting.
        </p>

        {/* Supporting statement */}
        <div className="inline-block p-3 sm:px-6 theme-rounded-card bg-theme-primary/5 border border-theme-primary/30 text-xs sm:text-sm font-medium text-theme-text">
          ✨ <strong className="text-theme-primary">Clear Cost Separation:</strong> Your advertising budget stays yours. Our management fee is separate.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#ad-consultation-form">
            <WebliixButton variant="primary" size="lg" icon={ArrowRight}>
              Start Advertising With Webliix
            </WebliixButton>
          </a>
          <Link to="/services">
            <WebliixButton variant="ghost" size="lg">
              Explore Our Services
            </WebliixButton>
          </Link>
        </div>

        {/* Hero Visual Concept Flow */}
        <div className="pt-8">
          <WebliixCard variant="panel" className="p-6 sm:p-8 border border-theme-border/70 shadow-spatial-md">
            <span className="text-[11px] font-mono uppercase tracking-wider text-theme-muted block mb-4">
              How Paid Advertising Delivers Real Business Enquiries
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center text-center">
              <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/50">
                <Briefcase className="w-5 h-5 mx-auto text-theme-primary mb-1.5" />
                <span className="text-xs font-display font-bold text-theme-text block">Your Business</span>
                <span className="text-[10px] text-theme-muted">Offer & Goals</span>
              </div>

              <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/50">
                <Target className="w-5 h-5 mx-auto text-theme-primary mb-1.5" />
                <span className="text-xs font-display font-bold text-theme-text block">Webliix Setup</span>
                <span className="text-[10px] text-theme-muted">Targeting & Strategy</span>
              </div>

              <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/50">
                <Zap className="w-5 h-5 mx-auto text-theme-primary mb-1.5" />
                <span className="text-xs font-display font-bold text-theme-text block">Google / Meta</span>
                <span className="text-[10px] text-theme-muted">Controlled Budget</span>
              </div>

              <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/50">
                <Users className="w-5 h-5 mx-auto text-theme-primary mb-1.5" />
                <span className="text-xs font-display font-bold text-theme-text block">Customers</span>
                <span className="text-[10px] text-theme-muted">Active Search / Feed</span>
              </div>

              <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/50">
                <MousePointerClick className="w-5 h-5 mx-auto text-theme-primary mb-1.5" />
                <span className="text-xs font-display font-bold text-theme-text block">Interaction</span>
                <span className="text-[10px] text-theme-muted">Site / WhatsApp / Call</span>
              </div>

              <div className="p-3 theme-rounded-card bg-theme-primary/10 border border-theme-primary/40">
                <PhoneCall className="w-5 h-5 mx-auto text-emerald-400 mb-1.5" />
                <span className="text-xs font-display font-bold text-theme-text block">Real Leads</span>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">New Customers</span>
              </div>
            </div>
          </WebliixCard>
        </div>
      </section>

      {/* Section — Advertising Without the Confusion (Two-Cost Model) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            100% Financial Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Advertising Should Be Easy to Understand
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
            Paid advertising can become confusing when agencies combine advertising spend, management fees and additional services into one unclear price.
            Webliix keeps these costs separate so you know exactly where every rupee goes.
          </p>
        </div>

        {/* Two-Cost Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Advertising Budget */}
          <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-border/80 relative">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 theme-rounded-badge text-[10px] font-mono font-bold bg-theme-primary/10 text-theme-primary border border-theme-primary/20 uppercase">
                PAID TO THE AD PLATFORM
              </span>
              <DollarSign className="w-5 h-5 text-theme-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-theme-text">
              1. Advertising Budget
            </h3>
            <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
              The money used to show your advertisements on Google, Facebook, and Instagram. This amount is paid directly to the ad platform to deliver your campaigns to potential customers.
            </p>
            <div className="pt-3 border-t border-theme-border/50 flex items-baseline justify-between text-xs font-mono">
              <span className="text-theme-muted">Practical Starting Example:</span>
              <span className="font-bold text-theme-text text-sm">₹15,000 / month</span>
            </div>
          </WebliixCard>

          {/* Card 2: Webliix Management Fee */}
          <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-primary/50 relative bg-theme-primary/5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 theme-rounded-badge text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase">
                PAID TO WEBLIIX
              </span>
              <ShieldCheck className="w-5 h-5 text-theme-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-theme-text">
              2. Webliix Management Fee
            </h3>
            <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
              The fee you pay Webliix for planning, setting up, monitoring, optimizing, negative keyword management, ad copywriting, and reporting on your advertising campaigns.
            </p>
            <div className="pt-3 border-t border-theme-border/50 flex items-baseline justify-between text-xs font-mono">
              <span className="text-theme-muted">Starter Management Fee:</span>
              <span className="font-bold text-theme-primary text-sm">₹5,999 / month</span>
            </div>
          </WebliixCard>
        </div>

        {/* Cost Breakdown Visual */}
        <WebliixCard variant="accent" accentColor="primary" className="p-6 max-w-3xl mx-auto space-y-4 text-center">
          <span className="text-xs font-mono uppercase font-bold text-theme-primary">
            For Example: Simple Monthly Cost Calculation
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-display font-bold text-theme-text">
            <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/60">
              <span className="text-xs font-mono text-theme-muted block font-normal">Ad Platform Spend</span>
              ₹15,000/mo
            </div>
            <span className="text-theme-primary text-xl font-bold">+</span>
            <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/60">
              <span className="text-xs font-mono text-theme-muted block font-normal">Webliix Management</span>
              ₹5,999/mo
            </div>
            <span className="text-theme-primary text-xl font-bold">=</span>
            <div className="p-3 theme-rounded-card bg-theme-primary/20 border border-theme-primary/50 text-theme-primary">
              <span className="text-xs font-mono text-theme-muted block font-normal">Estimated Total</span>
              ₹20,999/mo
            </div>
          </div>
          <p className="text-[11px] text-theme-muted max-w-xl mx-auto">
            * Advertising spend and applicable taxes are paid directly to the ad platform and are separate from Webliix’s management fee.
            Actual budgets are customized to your goals.
          </p>
        </WebliixCard>
      </section>

      {/* Section — What Can Webliix Manage? (Google Ads & Meta Ads) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Advertising Channels
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            What Can Webliix Manage?
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Target high-intent searchers on Google or build visual interest on Facebook & Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Ads Card */}
          <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-5 flex flex-col justify-between border border-theme-border/80 hover:border-theme-primary/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20">
                  <Search className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-theme-primary/10 text-theme-primary border border-theme-primary/20">
                  High Search Intent
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-theme-text">
                  Google Ads
                </h3>
                <p className="text-xs sm:text-sm text-theme-muted mt-1 leading-relaxed">
                  Reach people who are actively searching for products and services like yours right now on Google Search and Maps.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-theme-border/50">
                <span className="text-[11px] font-mono uppercase font-bold text-theme-primary block">
                  Key Management Capabilities:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-text">
                  {[
                    'Search advertising setup',
                    'High-intent keyword research',
                    'Location & radius targeting',
                    'Negative keyword filters',
                    'Compelling ad copywriting',
                    'Call & lead conversion tracking',
                    'Ongoing bid optimization',
                    'Transparent monthly reporting'
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-theme-border/50">
              <Link to="/google-ads">
                <WebliixButton variant="primary" size="md" fullWidth icon={ArrowRight}>
                  Explore Google Ads Management
                </WebliixButton>
              </Link>
            </div>
          </WebliixCard>

          {/* Meta Ads Card */}
          <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-5 flex flex-col justify-between border border-theme-border/80 hover:border-theme-primary/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-theme-primary/10 text-theme-primary border border-theme-primary/20">
                  Visual Discovery
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-theme-text">
                  Facebook & Instagram Ads
                </h3>
                <p className="text-xs sm:text-sm text-theme-muted mt-1 leading-relaxed">
                  Reach potential customers while they discover businesses, products and local services on Facebook Feeds, Stories, and Instagram Reels.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-theme-border/50">
                <span className="text-[11px] font-mono uppercase font-bold text-theme-primary block">
                  Key Management Capabilities:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-text">
                  {[
                    'Facebook feed & story ads',
                    'Instagram visual campaigns',
                    'Audience interest & demographic targeting',
                    'Multi-variant creative testing',
                    'Retargeting interested visitors',
                    'WhatsApp & form lead capture',
                    'Weekly frequency & budget tuning',
                    'Transparent monthly reporting'
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-theme-border/50">
              <Link to="/meta-ads">
                <WebliixButton variant="primary" size="md" fullWidth icon={ArrowRight}>
                  Explore Meta Ads Management
                </WebliixButton>
              </Link>
            </div>
          </WebliixCard>
        </div>
      </section>

      {/* Section — How the Process Works */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Execution Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            From Strategy to Campaign Management
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            A structured, step-by-step process designed to launch carefully and scale profitably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 theme-rounded-btn text-[10px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30 inline-block">
                  Step {step.num}
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

      {/* Section — What We Actually Optimize */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Active Campaign Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            We Don't Just Launch Ads and Leave Them Running
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm max-w-xl mx-auto">
            Campaign performance changes over time. We continuously monitor incoming data and make adjustments to eliminate waste and improve lead quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Ads Optimization */}
          <WebliixCard variant="panel" className="p-6 space-y-4 border border-theme-border/70">
            <div className="flex items-center gap-2 text-theme-primary">
              <Search className="w-4 h-4" />
              <h3 className="text-lg font-display font-bold text-theme-text">
                What We Optimize on Google Ads
              </h3>
            </div>
            <p className="text-xs text-theme-muted">
              We focus on search intent purity and minimizing wasteful clicks:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-theme-text font-mono">
              {[
                'Search terms review',
                'High-converting keywords',
                'Negative keyword additions',
                'Click-through rate (CTR)',
                'Cost per click (CPC)',
                'Conversion rate tuning',
                'Cost per lead analysis',
                'Location performance',
                'Ad headline variations',
                'Budget reallocation'
              ].map((item, i) => (
                <div key={i} className="p-2 theme-rounded-card glass-spatial border border-theme-border/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </WebliixCard>

          {/* Meta Ads Optimization */}
          <WebliixCard variant="panel" className="p-6 space-y-4 border border-theme-border/70">
            <div className="flex items-center gap-2 text-theme-primary">
              <Share2 className="w-4 h-4" />
              <h3 className="text-lg font-display font-bold text-theme-text">
                What We Optimize on Meta Ads
              </h3>
            </div>
            <p className="text-xs text-theme-muted">
              We focus on creative resonance and audience relevance:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-theme-text font-mono">
              {[
                'Audience segment testing',
                'Creative image & video tests',
                'Cost per result (CPR)',
                'Click-through rate (CTR)',
                'Conversion tracking',
                'Ad frequency control',
                'Placement performance',
                'Retargeting audience pool',
                'Ad copy & CTA testing',
                'Budget scaling to winners'
              ].map((item, i) => (
                <div key={i} className="p-2 theme-rounded-card glass-spatial border border-theme-border/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </WebliixCard>
        </div>
      </section>

      {/* Section — Small Business First */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <WebliixCard variant="accent" accentColor="primary" className="p-8 sm:p-10 space-y-6 text-center">
          <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Our Small Business Philosophy
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
            Start Small. Learn. Then Scale.
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted max-w-xl mx-auto leading-relaxed">
            We believe small businesses should not have to commit a large advertising budget just to find out whether a campaign can work.
            We recommend starting with a controlled budget, collecting useful data, learning what works, and improving the campaign before considering larger spending.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-4">
            {['TEST', 'MEASURE', 'OPTIMIZE', 'LEARN', 'SCALE'].map((stage, i, arr) => (
              <React.Fragment key={stage}>
                <div className="px-4 py-2 theme-rounded-card glass-spatial border border-theme-primary/40 font-mono text-xs font-bold text-theme-text">
                  {stage}
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-theme-primary hidden sm:inline-block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </WebliixCard>
      </section>

      {/* Section — What Results Mean (Measurable Business Actions) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Real Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            We Focus on Measurable Business Actions
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Advertising performance should be evaluated using meaningful business metrics rather than vanity impressions alone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resultsMetrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <WebliixCard key={idx} variant="panel" className="p-5 space-y-2.5 border border-theme-border/60">
                <div className="p-2 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20 w-fit">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-display font-bold text-theme-text">
                  {m.title}
                </h4>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {m.desc}
                </p>
              </WebliixCard>
            );
          })}
        </div>

        <p className="text-xs text-center text-theme-muted max-w-2xl mx-auto italic">
          Note: Some customer conversions (such as walk-ins or offline phone closes) happen outside the ad platform. Accurate business-side inquiry logging is crucial for evaluating full return on investment.
        </p>
      </section>

      {/* Section — Transparency (What We Promise — And What We Don't) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Clear Expectations
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            What We Promise — And What We Don't
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Honest marketing partnerships are built on clarity and trust from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* What We Promise */}
          <WebliixCard variant="panel" className="p-6 space-y-4 border border-emerald-500/40 bg-emerald-500/5">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <h3 className="text-lg font-display font-bold text-theme-text">
                What We Promise
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-theme-text">
              {[
                'Clear, upfront management pricing',
                '100% separate ad spend and management fees',
                'Campaign setup matching the agreed strategy',
                'Continuous campaign monitoring and negative keyword updates',
                'Data-based adjustments based on real search terms',
                'Transparent monthly reporting without hidden data',
                'Clear, direct communication about what is working and what is not'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </WebliixCard>

          {/* What We Do NOT Promise */}
          <WebliixCard variant="panel" className="p-6 space-y-4 border border-rose-500/40 bg-rose-500/5">
            <div className="flex items-center gap-2 text-rose-400">
              <XCircle className="w-5 h-5 shrink-0" />
              <h3 className="text-lg font-display font-bold text-theme-text">
                What We Do Not Promise
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-theme-text">
              {[
                'A guaranteed fixed number of leads',
                'Guaranteed immediate sales or customer closes',
                'Guaranteed revenue numbers or 10x claims',
                'Guaranteed fixed cost per lead across markets',
                'Guaranteed ROAS on day one',
                'Instant overnight magic without sufficient market testing'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </WebliixCard>
        </div>

        <p className="text-xs text-center text-theme-muted max-w-2xl mx-auto leading-relaxed">
          Advertising results depend on factors including local competition, search demand, budget, offer appeal, pricing, website experience, landing-page quality, customer response time, and market conditions. Our role is to professionally manage the campaigns, measure data, and continuously improve performance.
        </p>
      </section>

      {/* Section — Client Responsibilities & Account Ownership */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Client Responsibilities */}
          <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-border/70">
            <div className="flex items-center gap-2 text-theme-primary">
              <Users className="w-5 h-5" />
              <h3 className="text-xl font-display font-bold text-theme-text">
                A Successful Campaign Is a Partnership
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
              Webliix manages the advertising campaigns, but the business itself has an important role in converting enquiries into paying customers.
            </p>

            <div className="space-y-2 pt-2 border-t border-theme-border/40">
              <span className="text-[11px] font-mono uppercase font-bold text-theme-primary block">
                What the Client Provides:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-text">
                {[
                  'Accurate service & pricing details',
                  'Clear offers & special promotions',
                  'Target service locations',
                  'Business contact information',
                  'Images/videos where required',
                  'Timely review & approvals',
                  'Website access (for tracking setup)',
                  'Prompt response to customer leads'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 theme-rounded-card bg-amber-500/10 border border-amber-500/30 text-xs text-theme-text">
              ⚡ <strong>Speed to Lead Matters:</strong> A good ad campaign generates an enquiry, but prompt response time from your sales team is essential to close the customer.
            </div>
          </WebliixCard>

          {/* Account Ownership */}
          <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-border/70">
            <div className="flex items-center gap-2 text-theme-primary">
              <Lock className="w-5 h-5" />
              <h3 className="text-xl font-display font-bold text-theme-text">
                Your Advertising Accounts Stay With You
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
              Where practical, Webliix recommends that clients retain full ownership of their Google Ads and Meta business assets while giving Webliix manager access.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 space-y-1.5">
                <span className="font-mono font-bold text-theme-primary uppercase text-[10px] block">You Own 100%</span>
                <ul className="space-y-1 text-theme-text">
                  <li>• Google Ads Account</li>
                  <li>• Meta Business Portfolio</li>
                  <li>• Facebook & Insta Pages</li>
                  <li>• Ad Creative & Assets</li>
                  <li>• Customer & Pixel Data</li>
                </ul>
              </div>

              <div className="p-3 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 space-y-1.5">
                <span className="font-mono font-bold text-emerald-400 uppercase text-[10px] block">Webliix Manages</span>
                <ul className="space-y-1 text-theme-text">
                  <li>• Campaign Structure</li>
                  <li>• Keyword & Audience Tuning</li>
                  <li>• Ad Copy & Creatives</li>
                  <li>• Ongoing Optimization</li>
                  <li>• Monthly Reports</li>
                </ul>
              </div>
            </div>

            <p className="text-[11px] text-theme-muted italic pt-1">
              🔒 Webliix does not need your personal Google or Facebook password to manage your campaigns.
            </p>
          </WebliixCard>
        </div>
      </section>

      {/* Section — Packages */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Retainers
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Simple Advertising Packages for Small Businesses
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Start with the level of management your business actually needs. Advertising budget is separate and controlled by you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <WebliixCard
              key={pkg.id}
              variant={pkg.popular ? 'accent' : 'panel'}
              accentColor="primary"
              className={`p-6 sm:p-8 space-y-6 flex flex-col justify-between relative ${
                pkg.popular ? 'border-theme-primary/60 shadow-spatial-lg' : 'border-theme-border/80'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 theme-rounded-badge text-[10px] font-mono font-bold uppercase ${
                    pkg.popular
                      ? 'bg-theme-primary text-white'
                      : 'bg-theme-primary/15 text-theme-primary border border-theme-primary/30'
                  }`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-mono text-theme-muted">
                    No Lock-In Contract
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
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-theme-text">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-theme-muted">
                      {pkg.period}
                    </span>
                  </div>
                  <div className="mt-2 p-2 theme-rounded-card bg-theme-primary/5 border border-theme-border/40 text-[11px] text-theme-muted font-mono">
                    <strong>Suggested Ad Spend:</strong> {pkg.recommendedBudget}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                    Management Includes:
                  </span>
                  <ul className="space-y-2 text-xs text-theme-text">
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
                <a href="#ad-consultation-form" className="block w-full">
                  <WebliixButton
                    variant={pkg.popular ? 'primary' : 'ghost'}
                    size="md"
                    fullWidth
                    icon={ArrowUpRight}
                  >
                    {pkg.id === 'starter' ? 'Get Started With Starter' : pkg.id === 'growth' ? 'Choose Growth' : 'Talk to Webliix'}
                  </WebliixButton>
                </a>
              </div>
            </WebliixCard>
          ))}
        </div>

        {/* Important Package Disclaimer */}
        <div className="p-4 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 text-center max-w-3xl mx-auto space-y-1">
          <p className="text-xs font-mono font-bold text-theme-primary uppercase">
            Important Budget Disclaimer
          </p>
          <p className="text-xs text-theme-muted leading-relaxed">
            Advertising spend is <strong>NOT</strong> included in the package prices. The recommended advertising budgets are examples to help you plan, not guarantees or mandatory spending requirements. Your actual recommended budget will depend on your business, market, location, competition, and campaign objective.
          </p>
        </div>
      </section>

      {/* Section — What's Included — And What's Separate */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Scope Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            What's Included — And What's Separate
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            We clearly define service boundaries to prevent surprises or unexpected invoices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Included */}
          <WebliixCard variant="panel" className="p-6 space-y-3 border border-theme-border/70">
            <h3 className="text-base font-display font-bold text-theme-text flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Included in Management Package</span>
            </h3>
            <ul className="space-y-2 text-xs text-theme-text">
              {[
                'Campaign setup & structural architecture',
                'Keyword research & negative keyword list management',
                'Audience demographic & interest targeting',
                'Ad copywriting & headline creation',
                'Basic creative direction & review',
                'Standard conversion tracking setup within agreed scope',
                'Continuous performance monitoring & optimization',
                'Monthly transparent performance reporting'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </WebliixCard>

          {/* Charged Separately */}
          <WebliixCard variant="panel" className="p-6 space-y-3 border border-theme-border/70">
            <h3 className="text-base font-display font-bold text-theme-text flex items-center gap-2">
              <Layers className="w-4 h-4 text-theme-primary" />
              <span>Available as Separate Services</span>
            </h3>
            <ul className="space-y-2 text-xs text-theme-text">
              {[
                'Full website or multi-page development',
                'Custom landing page design & coding',
                'Professional on-location photography or videography',
                'Extensive custom graphic illustration',
                'Major website architectural restructuring',
                'CRM pipeline implementation & advanced API automation',
                'Additional ad platforms (e.g. LinkedIn / Pinterest)',
                'Third-party software subscription fees'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </WebliixCard>
        </div>

        <p className="text-xs text-center text-theme-muted max-w-xl mx-auto">
          If your campaign requires additional design or landing-page work outside the selected package, Webliix will discuss the requirement and exact pricing before any work begins.
        </p>
      </section>

      {/* Section — FAQ Accordion */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Everything You Need to Know About Paid Ads
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Honest answers to common questions about advertising budgets, platforms, and management.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <WebliixCard
                key={idx}
                variant="panel"
                className="p-5 space-y-3 cursor-pointer transition-all duration-200 border border-theme-border/60"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm sm:text-base font-display font-bold text-theme-text flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-theme-primary shrink-0" />
                    <span>{faq.q}</span>
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-theme-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-theme-primary' : ''
                    }`}
                  />
                </div>

                {isOpen && (
                  <p className="text-xs sm:text-sm text-theme-muted leading-relaxed pt-2 border-t border-theme-border/40">
                    {faq.a}
                  </p>
                )}
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Section — Advertising Lead Consultation Form */}
      <section className="space-y-6 pt-6 border-t border-theme-border/60">
        <AdvertisingLeadForm
          defaultPlatform="Both"
          heading="Ready to Test Paid Advertising for Your Business?"
          subtext="Tell us about your business, target audience, and monthly budget. We will review your goals and share a clear, no-obligation campaign plan."
        />
      </section>

      {/* Final Bottom CTA */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Start With Controlled Risk
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Test Paid Advertising?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Tell us about your business, your target customers and your advertising goal. We'll help you determine whether Google Ads, Meta Ads or another approach makes sense for your business.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#ad-consultation-form">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Start Your Advertising Campaign
            </WebliixButton>
          </a>
          <Link to="/contact">
            <WebliixButton variant="ghost" size="lg">
              Talk to Webliix
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>
    </div>
  );
}
