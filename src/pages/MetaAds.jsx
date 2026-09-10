import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Share2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Target,
  ShieldCheck,
  DollarSign,
  BarChart3,
  MousePointerClick,
  PhoneCall,
  Eye,
  Percent,
  Sliders,
  Palette,
  Image,
  Video,
  Film,
  MessageSquare,
  Users,
  Layers,
  Zap,
  Lock,
  Search,
  Check
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import AdvertisingLeadForm from '../components/spatial/AdvertisingLeadForm';

export default function MetaAds() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const metaFlow = [
    { step: '01', title: 'Your Business', desc: 'Core services, target customer profile, and compelling promotional offer.' },
    { step: '02', title: 'Audience Research', desc: 'Demographics, geographic radius, local interests, and behavior targeting.' },
    { step: '03', title: 'Creative & Message', desc: 'Eye-catching visuals, clear headlines, and engaging ad copy tailored for social feeds.' },
    { step: '04', title: 'Facebook / Instagram Ads', desc: 'Feed, Story, and Reels placements launched with a strictly controlled budget.' },
    { step: '05', title: 'Customer Interaction', desc: 'Viewers interact with your ad via instant lead forms, website links, or WhatsApp buttons.' },
    { step: '06', title: 'Website / WhatsApp / Call', desc: 'Potential clients reach out directly to inquire, request a quote, or schedule an appointment.' },
    { step: '07', title: 'Qualified Lead', desc: 'Real customer inquiries delivered straight to your inbox and phone.' }
  ];

  const metaServices = [
    {
      icon: Target,
      title: 'Precision Audience Targeting',
      desc: 'Reach relevant audiences based on geographic location, age, interests, lifestyle behaviors, and platform engagement signals.'
    },
    {
      icon: Palette,
      title: 'Creative & Copy Testing',
      desc: 'Test multiple image variations, headlines, and call-to-actions to identify what resonates best with your potential customers.'
    },
    {
      icon: MessageSquare,
      title: 'Instant Lead Generation & WhatsApp',
      desc: 'Build frictionless lead campaigns that let prospects submit their contact details or start a WhatsApp chat in a single tap.'
    },
    {
      icon: MousePointerClick,
      title: 'Targeted Website Traffic',
      desc: 'Drive qualified local traffic directly to your high-converting service landing page or online store.'
    },
    {
      icon: Layers,
      title: 'Warm Audience Retargeting',
      desc: 'Reconnect with people who previously engaged with your Instagram profile, Facebook page, or website to encourage them to take action.'
    },
    {
      icon: BarChart3,
      title: 'Conversion Tracking & Pixel Setup',
      desc: 'Configure Meta Pixel and Conversions API to measure completed lead forms, phone clicks, and purchase events accurately.'
    }
  ];

  const creativeFormats = [
    { icon: Image, title: 'Static Feed Images', desc: 'High-contrast promotional banners showcasing your service, pricing, and main benefit.' },
    { icon: Palette, title: 'Promotional Graphics', desc: 'Branded visuals highlighting special offers, seasonal discounts, and customer guarantees.' },
    { icon: Video, title: 'Short Video Clips', desc: '15–30 second engaging clips demonstrating your product, clinic, or service in action.' },
    { icon: Film, title: 'Reels & Story Creatives', desc: 'Vertical 9:16 format designed to capture mobile viewers during natural story scrolling.' },
    { icon: MessageSquare, title: 'Testimonials & Reviews', desc: 'Social proof featuring real client feedback, before/after results, and ratings.' },
    { icon: Sparkles, title: 'Clear Value Offers', desc: 'Direct, easy-to-understand offers (e.g. "Free Consultation", "20% Off First Visit").' }
  ];

  const metrics = [
    {
      term: 'Reach',
      desc: 'The total number of unique individuals who saw your advertisement on Facebook or Instagram.'
    },
    {
      term: 'Impressions',
      desc: 'The total number of times your advertisements were displayed on screens (including repeat views).'
    },
    {
      term: 'Clicks',
      desc: 'Total interactions where users clicked on your link, lead form, or call-to-action button.'
    },
    {
      term: 'CTR (Click-Through Rate)',
      desc: 'The percentage of impressions that resulted in a click. Indicates how engaging your visual creative is.'
    },
    {
      term: 'Cost Per Result',
      desc: 'The average advertising cost associated with your selected objective (e.g. cost per lead or cost per click).'
    },
    {
      term: 'Leads',
      desc: 'The number of people who submitted their contact details or initiated a direct WhatsApp/phone inquiry.'
    }
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Meta Ads Starter',
      price: '₹5,999',
      period: '/month management fee',
      badge: 'FIRST-TIME SOCIAL ADS',
      popular: true,
      desc: 'For small local businesses wanting to generate enquiries from Facebook and Instagram with a controlled budget.',
      recommendedBudget: '₹10,000–₹20,000 / month ad spend (paid directly to Meta)',
      features: [
        'Facebook & Instagram Campaign Setup',
        'Up to 2 Targeted Ad Sets / Audiences',
        'Local Geo-Radius & Demographic Targeting',
        'Ad Copywriting & Headline Creation',
        'Basic Creative Direction (using client assets/templates)',
        'Instant Lead Form OR WhatsApp Click-to-Chat Setup',
        'Meta Pixel / Event Tracking Setup',
        'Weekly Frequency & Creative Fatigue Monitoring',
        'Monthly Transparent Performance Report'
      ]
    },
    {
      id: 'growth',
      name: 'Meta Ads Growth',
      price: '₹9,999',
      period: '/month management fee',
      badge: 'CREATIVE TESTING & SCALING',
      popular: false,
      desc: 'For businesses wanting multi-creative testing, custom audiences, and retargeting funnels.',
      recommendedBudget: '₹20,000–₹50,000 / month ad spend (paid directly to Meta)',
      features: [
        'Up to 4 Campaigns (Lead Gen + Retargeting)',
        'Custom Lookalike & Engagement Audiences',
        'Multi-Variant Creative Testing (Images & Short Video)',
        'Story & Reels Placement Optimization',
        'Landing Page Conversion Rate Advice',
        'Meta Pixel & Conversions API Setup',
        'Weekly Placement & Audience Optimization',
        'Monthly Strategic Growth Analysis'
      ]
    },
    {
      id: 'omnichannel',
      name: 'Google + Meta Bundle',
      price: '₹14,999',
      period: '/month management fee',
      badge: 'DUAL ACQUISITION',
      popular: false,
      desc: 'Combine Meta visual discovery with Google high-intent search capture for complete local coverage.',
      recommendedBudget: '₹30,000–₹60,000+ / month ad spend (paid to platforms)',
      features: [
        'Full Meta Ads Management (Facebook + Instagram)',
        'Full Google Ads Management (Search + Maps)',
        'Cross-Platform Retargeting Funnel',
        'Unified Tracking across both channels',
        'Ad Creative & Copy Alignment',
        'Dedicated Campaign Strategist',
        'Bi-Weekly Reviews & Continuous Optimization',
        'Comprehensive Multi-Channel Monthly Report'
      ]
    }
  ];

  const faqs = [
    {
      q: 'How do Facebook & Instagram Ads help my small business?',
      a: 'Meta advertising allows you to present your services, special offers, and visual work directly in front of people living in your specific city or neighborhood while they browse their Facebook feeds, Instagram stories, and Reels.'
    },
    {
      q: 'Is advertising spend included in Webliix’s management fee?',
      a: 'No. Advertising spend is paid directly to Meta (Facebook). You link your own business card to your Meta Ad Account, ensuring 100% transparent billing without hidden agency markups.'
    },
    {
      q: 'What kind of creative materials do I need to provide?',
      a: 'Photos of your team, clinic, shop, completed projects, or short smartphone video clips work exceptionally well for small businesses. Webliix provides copywriting, layout formatting, and basic creative direction. If you need extensive custom graphic design or professional photography, we can arrange that separately.'
    },
    {
      q: 'Can customers message me directly on WhatsApp from the ads?',
      a: 'Yes! Click-to-WhatsApp ads are one of the most effective ways for Indian and local businesses to receive immediate, direct customer inquiries without requiring prospects to fill out long forms.'
    },
    {
      q: 'Do you guarantee a specific number of sales or leads?',
      a: 'No. We do not make false guarantees. Meta ad performance depends on audience appeal, visual quality, your pricing offer, local competition, and fast response times to inquiries. We guarantee professional campaign architecture, creative testing, and transparent reporting.'
    },
    {
      q: 'Who owns the Meta Business Manager and ad accounts?',
      a: 'Your business owns 100% of your Meta Business Portfolio, Facebook Page, Instagram account, and pixel data. We manage campaigns via standard partner delegation.'
    }
  ];

  const canonicalUrl = `${siteConfig.brand.website || 'https://webliix.com'}/meta-ads`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Facebook & Instagram (Meta) Ads Management for Small Businesses',
    provider: {
      '@type': 'Organization',
      name: siteConfig.brand.name,
      url: 'https://webliix.com'
    },
    serviceType: 'Social Media Advertising Management',
    description: 'Webliix manages Facebook and Instagram advertising campaigns for small businesses with audience targeting, creative testing, conversion tracking, and transparent reporting.',
    areaServed: 'Worldwide'
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
        <title>Facebook & Instagram Ads Management | Webliix</title>
        <meta
          name="description"
          content="Webliix helps small businesses manage Facebook and Instagram advertising campaigns with audience targeting, creative testing, conversion tracking and reporting."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Facebook & Instagram Ads Management | Webliix" />
        <meta
          property="og:description"
          content="Reach local customers on Facebook and Instagram. Instant WhatsApp leads, creative testing, and separate transparent ad budgets."
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
          <Share2 className="w-3.5 h-3.5" />
          <span>WEBLIIX META ADS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-theme-text leading-[1.15]">
          Reach Customers on <span className="text-shimmer">Facebook & Instagram</span>
        </h1>

        <p className="text-base sm:text-lg text-theme-muted leading-relaxed max-w-2xl mx-auto">
          Webliix helps small businesses create and manage Facebook and Instagram advertising campaigns designed around clear business objectives such as enquiries, website visits, promotions and lead generation.
        </p>

        <div className="inline-block p-3 sm:px-6 theme-rounded-card bg-theme-primary/5 border border-theme-primary/30 text-xs sm:text-sm font-medium text-theme-text">
          📱 <strong className="text-theme-primary">Direct Customer Inquiries:</strong> Generate instant WhatsApp messages, phone calls, or qualified lead form submissions from local buyers.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#ad-consultation-form">
            <WebliixButton variant="primary" size="lg" icon={ArrowRight}>
              Start Meta Ads
            </WebliixButton>
          </a>
          <a href="#meta-pricing">
            <WebliixButton variant="ghost" size="lg">
              See Pricing
            </WebliixButton>
          </a>
          <Link to="/google-ads">
            <WebliixButton variant="ghost" size="lg" icon={Search}>
              Explore Google Ads
            </WebliixButton>
          </Link>
        </div>
      </section>

      {/* Section — Meta Ads How It Works (Visual Flow) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Acquisition Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            How Meta Ads Deliver Real Inquiries
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            From audience targeting to direct phone and WhatsApp conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {metaFlow.map((step, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-4 space-y-2 border border-theme-border/60 text-center flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-theme-primary px-2 py-0.5 rounded bg-theme-primary/10 inline-block mb-1.5">
                  {step.step}
                </span>
                <h4 className="text-xs font-display font-bold text-theme-text">
                  {step.title}
                </h4>
              </div>
              <p className="text-[11px] text-theme-muted leading-tight pt-1 border-t border-theme-border/40">
                {step.desc}
              </p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* Section — Meta Services */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Campaign Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Facebook & Instagram Ad Services
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Everything required to turn casual social media scrollers into active business inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metaServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <WebliixCard key={idx} variant="panel" className="p-6 space-y-3 border border-theme-border/70 hover:border-theme-primary/60 transition-all">
                <div className="p-2.5 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-theme-text">
                  {svc.title}
                </h3>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {svc.desc}
                </p>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Section — Meta Creative (Good Ads Need Good Creative) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Visual Storytelling
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Good Ads Need Good Creative
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
            Meta advertising is highly visual. The advertisement needs to stop the thumb scroll and communicate your value proposition clearly within seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {creativeFormats.map((fmt, idx) => {
            const Icon = fmt.icon;
            return (
              <WebliixCard key={idx} variant="panel" className="p-5 space-y-2 border border-theme-border/60">
                <div className="flex items-center gap-2 text-theme-primary">
                  <Icon className="w-4 h-4" />
                  <h4 className="text-sm font-display font-bold text-theme-text">
                    {fmt.title}
                  </h4>
                </div>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {fmt.desc}
                </p>
              </WebliixCard>
            );
          })}
        </div>

        <div className="p-4 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 text-center max-w-3xl mx-auto space-y-1">
          <p className="text-xs font-mono font-bold text-theme-primary uppercase">
            Creative Deliverables Scope
          </p>
          <p className="text-xs text-theme-muted leading-relaxed">
            Basic creative direction, ad copywriting, and formatting using your existing business imagery and video clips are included in the management package. Large-scale professional photoshoot production or complex 3D animation can be arranged separately if required.
          </p>
        </div>
      </section>

      {/* Section — Meta Metrics Explained Simply */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            No Confusion
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Meta Ads Metrics Explained Simply
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Evaluating your social advertising performance using clear business terminology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-2 border border-theme-border/60">
              <h4 className="text-sm font-display font-bold text-theme-primary font-mono uppercase">
                {m.term}
              </h4>
              <p className="text-xs text-theme-text leading-relaxed">
                {m.desc}
              </p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* Section — Meta Transparency */}
      <section className="space-y-6 pt-6 border-t border-theme-border/60">
        <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-border/80 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-theme-primary">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="text-xl font-display font-bold text-theme-text">
              Our Transparency Commitment on Meta Ads
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Meta advertising performance depends on audience appeal, visual creative resonance, local competition, the strength of your promotional offer, ad budget, landing page experience, and market demand.
          </p>
          <p className="text-xs text-theme-muted leading-relaxed">
            Webliix builds structured campaigns and optimizes audiences continuously, but we do not make false promises about guaranteed sales, lead volumes, or instant overnight returns.
          </p>
        </WebliixCard>
      </section>

      {/* Section — Pricing */}
      <section id="meta-pricing" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Simple Facebook & Instagram Ads Packages
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Meta advertising spend is paid directly to Meta and is separate from Webliix management fees.
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
                    No Contracts
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
                    <strong>Suggested Meta Budget:</strong> {pkg.recommendedBudget}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                    Deliverables:
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
                    Start With {pkg.name.split(' ')[0]}
                  </WebliixButton>
                </a>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* Section — FAQ Accordion */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Meta Ads FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Frequently Asked Questions About Meta Ads
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Clear answers to help you evaluate Facebook & Instagram advertising.
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

      {/* Section — Advertising Lead Form */}
      <section className="space-y-6 pt-6 border-t border-theme-border/60">
        <AdvertisingLeadForm
          defaultPlatform="Meta Ads"
          heading="Get Started With Facebook & Instagram Ads"
          subtext="Tell us about your business and ideal customers. We will analyze social audience size in your location and build a custom campaign strategy."
        />
      </section>

      {/* Cross-Link Footer Navigation */}
      <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono border-t border-theme-border/50">
        <Link to="/paid-advertising" className="text-theme-muted hover:text-theme-primary transition flex items-center gap-1">
          ← View All Paid Advertising Services
        </Link>
        <Link to="/google-ads" className="text-theme-primary hover:underline flex items-center gap-1 font-bold">
          Explore Google Ads Management →
        </Link>
      </div>
    </div>
  );
}
