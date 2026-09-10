import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Search,
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
  MapPin,
  FileText,
  Layers,
  Zap,
  Lock,
  Share2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import AdvertisingLeadForm from '../components/spatial/AdvertisingLeadForm';

export default function GoogleAds() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const highIntentExamples = [
    { query: '"plumber near me"', category: 'Local Emergency Service', intent: 'Immediate repair need' },
    { query: '"house cleaning service"', category: 'Home & Facility Care', intent: 'Commercial & residential bookings' },
    { query: '"website development company"', category: 'B2B Digital Services', intent: 'High-intent agency hiring' },
    { query: '"dentist near me"', category: 'Healthcare & Dental', intent: 'Appointment booking' },
    { query: '"AC repair Noida / Delhi"', category: 'Appliance Maintenance', intent: 'Same-day technician visit' },
    { query: '"wedding photographer"', category: 'Events & Creative', intent: 'Portfolio review & booking' }
  ];

  const googleServices = [
    {
      icon: Search,
      title: 'Search Ads Management',
      desc: 'Show targeted text advertisements right at the top of Google when potential customers search for your specific services.'
    },
    {
      icon: Target,
      title: 'High-Intent Keyword Research',
      desc: 'Identify specific search phrases that signal ready-to-buy intent rather than broad, wasteful queries.'
    },
    {
      icon: Sliders,
      title: 'Negative Keyword Filtering',
      desc: 'Continuously block irrelevant search terms (e.g. "free", "jobs", "DIY") so your budget is never wasted on unqualified clicks.'
    },
    {
      icon: MapPin,
      title: 'Location & Radius Targeting',
      desc: 'Focus your advertising budget exclusively on the specific cities, pincodes, or radiuses where you operate.'
    },
    {
      icon: PhoneCall,
      title: 'Conversion & Call Tracking',
      desc: 'Measure valuable business actions such as phone calls, WhatsApp inquiries, and contact form submissions.'
    },
    {
      icon: BarChart3,
      title: 'Ongoing Campaign Optimization',
      desc: 'Review weekly search data to refine keyword bids, test ad copy variations, and improve quality scores.'
    }
  ];

  const processFlow = [
    { num: '01', title: 'Business Analysis', desc: 'Review your services, profit margins, competitors, and target geographic areas.' },
    { num: '02', title: 'Keyword Research', desc: 'Identify high-commercial-intent search queries and build initial negative keyword lists.' },
    { num: '03', title: 'Campaign Structure', desc: 'Set up tightly organized ad groups, geographical targeting, and daily spend limits.' },
    { num: '04', title: 'Ad Creation', desc: 'Write compelling, relevant headlines and descriptions tailored to your target audience.' },
    { num: '05', title: 'Conversion Tracking', desc: 'Set up tracking on your website to record calls, forms, and WhatsApp clicks.' },
    { num: '06', title: 'Launch', desc: 'Activate campaigns with controlled daily budgets to gather initial data.' },
    { num: '07', title: 'Monitoring', desc: 'Track incoming search queries, click rates, and daily expenditures.' },
    { num: '08', title: 'Optimization', desc: 'Add negative keywords, refine bid strategies, and adjust ad messaging.' },
    { num: '09', title: 'Monthly Reporting', desc: 'Receive transparent performance reports showing cost per lead and search results.' }
  ];

  const metrics = [
    {
      term: 'Impressions',
      desc: 'How often your advertisements appeared on Google when users searched for target keywords.'
    },
    {
      term: 'Clicks',
      desc: 'The total number of times interested searchers clicked on your ad to visit your website or call your business.'
    },
    {
      term: 'CTR (Click-Through Rate)',
      desc: 'The percentage of people who saw your ad and decided to click on it. Higher CTR usually indicates relevant ad copy.'
    },
    {
      term: 'CPC (Cost Per Click)',
      desc: 'The average amount paid to Google for each click. This depends on keyword competition and quality score.'
    },
    {
      term: 'Conversions',
      desc: 'The real business actions that matter to you — such as completed quote forms, incoming phone calls, or WhatsApp chats.'
    },
    {
      term: 'Cost Per Conversion',
      desc: 'The average advertising spend required to generate one tracked inquiry or lead.'
    }
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Google Ads Starter',
      price: '₹5,999',
      period: '/month management fee',
      badge: 'BEST FOR FIRST-TIME TESTING',
      popular: true,
      desc: 'For small local businesses testing Google Search Ads with a controlled monthly budget.',
      recommendedBudget: '₹10,000–₹20,000 / month ad spend (paid to Google)',
      features: [
        'Dedicated Google Search Campaign Setup',
        'Up to 2 Focused Ad Groups',
        'High-Intent Buyer Keyword Research',
        'Initial Negative Keyword Master List',
        'Geo-Location & City/Radius Targeting',
        'Responsive Search Ad Copywriting',
        'Google Tag Manager / Conversion Setup',
        'Weekly Search Terms Cleansing',
        'Monthly Transparent Performance Report'
      ]
    },
    {
      id: 'growth',
      name: 'Google Ads Growth',
      price: '₹9,999',
      period: '/month management fee',
      badge: 'SCALING CAMPAIGNS',
      popular: false,
      desc: 'For businesses wanting multi-service campaigns, competitor keyword targeting, and landing-page advice.',
      recommendedBudget: '₹20,000–₹50,000 / month ad spend (paid to Google)',
      features: [
        'Up to 4 Search Campaigns / Multiple Services',
        'In-Depth Competitor Keyword Research',
        'Extensive Negative Keyword Pruning',
        'Ad Extensions (Call, Sitelinks, Callouts, Structured Snippets)',
        'Landing Page Speed & Conversion Recommendations',
        'Call Tracking & Lead Form Integration',
        'Quality Score & Bid Strategy Optimization',
        'Bi-Weekly Campaign Reviews',
        'Detailed Monthly ROI Analysis'
      ]
    },
    {
      id: 'omnichannel',
      name: 'Google + Meta Bundle',
      price: '₹14,999',
      period: '/month management fee',
      badge: 'COMPLETE COVERAGE',
      popular: false,
      desc: 'Combine high-intent Google search capture with Facebook and Instagram visual discovery.',
      recommendedBudget: '₹30,000–₹60,000+ / month ad spend (paid to platforms)',
      features: [
        'Full Google Ads Management (Search + Maps)',
        'Full Meta Ads Management (Facebook + Instagram)',
        'Cross-Platform Lead Generation Strategy',
        'Retargeting Website Visitors on Social Media',
        'Unified Conversion Tracking across Google & Meta',
        'Landing Page Experience Audits',
        'Dedicated Campaign Strategist',
        'Comprehensive Multi-Channel Monthly Report'
      ]
    }
  ];

  const faqs = [
    {
      q: 'How does Google Ads work for small businesses?',
      a: 'When someone searches for a service like "electrician in Gurgaon" or "dental clinic near me", Google displays your text advertisement at the very top of search results. You only pay when an interested searcher clicks on your ad.'
    },
    {
      q: 'Is my Google advertising spend included in Webliix’s management fee?',
      a: 'No. Your Google advertising spend is 100% separate. You link your own payment method directly inside your Google Ads account, ensuring total financial transparency.'
    },
    {
      q: 'How much should a small business spend on Google Ads?',
      a: 'We generally recommend a starting budget of ₹10,000 to ₹20,000 per month for local businesses. This allows enough clicks and search data to test keywords and optimize cost per lead without overspending.'
    },
    {
      q: 'What are negative keywords and why are they important?',
      a: 'Negative keywords prevent your ads from showing on irrelevant searches like "free", "jobs", "salary", or "how to do it yourself". By blocking these wasteful queries, we protect your budget and ensure only real prospective buyers click your ad.'
    },
    {
      q: 'Do you guarantee #1 ranking or a specific number of leads on Google?',
      a: 'No reputable agency can guarantee #1 placement or fixed lead numbers. Google ad auctions depend on bids, ad relevance, landing page experience, and competition. We promise diligent keyword management, budget protection, and continuous campaign optimization.'
    },
    {
      q: 'Who owns the Google Ads account?',
      a: 'Your business owns the Google Ads account 100%. We manage campaigns through our Google Ads Manager account using standard partner access. You retain full ownership and billing control at all times.'
    }
  ];

  const canonicalUrl = `${siteConfig.brand.website || 'https://webliix.com'}/google-ads`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Google Ads Management for Small Businesses',
    provider: {
      '@type': 'Organization',
      name: siteConfig.brand.name,
      url: 'https://webliix.com'
    },
    serviceType: 'Google Ads PPC Management',
    description: 'Webliix manages Google Ads search and local campaigns for small businesses with transparent pricing, controlled budgets, and keyword optimization.',
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
        <title>Google Ads Management for Small Businesses | Webliix</title>
        <meta
          name="description"
          content="Webliix manages Google Ads campaigns for small businesses, including campaign setup, keyword research, conversion tracking, optimization and reporting."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Google Ads Management for Small Businesses | Webliix" />
        <meta
          property="og:description"
          content="Reach customers actively searching for your services on Google. Transparent fees, negative keyword filtering, and conversion tracking."
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
          <Search className="w-3.5 h-3.5" />
          <span>WEBLIIX GOOGLE ADS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-theme-text leading-[1.15]">
          Be There When Customers Are <span className="text-shimmer">Actively Searching</span>
        </h1>

        <p className="text-base sm:text-lg text-theme-muted leading-relaxed max-w-2xl mx-auto">
          Webliix helps small businesses create, manage and optimize Google Ads campaigns designed to reach people actively searching for relevant products and services.
        </p>

        <div className="inline-block p-3 sm:px-6 theme-rounded-card bg-theme-primary/5 border border-theme-primary/30 text-xs sm:text-sm font-medium text-theme-text">
          🎯 <strong className="text-theme-primary">High Commercial Intent:</strong> Show up right when potential buyers are looking for solutions in your service area.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#ad-consultation-form">
            <WebliixButton variant="primary" size="lg" icon={ArrowRight}>
              Start Google Ads
            </WebliixButton>
          </a>
          <a href="#google-pricing">
            <WebliixButton variant="ghost" size="lg">
              See Pricing
            </WebliixButton>
          </a>
          <Link to="/meta-ads">
            <WebliixButton variant="ghost" size="lg" icon={Share2}>
              Explore Meta Ads
            </WebliixButton>
          </Link>
        </div>
      </section>

      {/* Section — Is Google Ads Right for Your Business? */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Search Intent Matters
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Is Google Ads Right for Your Business?
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
            Google Ads is particularly powerful when people are already actively searching for the products or services your business provides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highIntentExamples.map((ex, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-2.5 border border-theme-border/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-theme-primary px-2 py-0.5 rounded bg-theme-primary/10">
                  {ex.category}
                </span>
                <Search className="w-3.5 h-3.5 text-theme-muted" />
              </div>
              <h4 className="text-base font-display font-bold text-theme-text font-mono">
                {ex.query}
              </h4>
              <p className="text-xs text-theme-muted">
                <strong>Buyer Intent:</strong> {ex.intent}
              </p>
            </WebliixCard>
          ))}
        </div>

        <p className="text-xs text-center text-theme-muted max-w-2xl mx-auto italic">
          * While Google Ads connects you with active searchers, campaign profitability depends on search volume, local competition, pricing, and your offer appeal.
        </p>
      </section>

      {/* Section — Google Ads Services */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Google Ads Services for Small Businesses
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Everything needed to launch, monitor, and refine high-converting Google Search campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleServices.map((svc, idx) => {
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

      {/* Section — Google Campaign Process */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Step-by-Step Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Our Google Campaign Process
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            From initial keyword scoping to ongoing negative keyword pruning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {processFlow.map((step, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-2 border border-theme-border/60">
              <span className="text-[10px] font-mono font-bold text-theme-primary px-2 py-0.5 rounded bg-theme-primary/10 inline-block">
                Step {step.num}
              </span>
              <h4 className="text-sm font-display font-bold text-theme-text">
                {step.title}
              </h4>
              <p className="text-xs text-theme-muted leading-relaxed">
                {step.desc}
              </p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* Section — Google Metrics Explained Simply */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            No Marketing Jargon
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Google Ads Metrics Explained Simply
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Understanding your campaign performance without complicated acronyms.
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

      {/* Section — Google Ads Transparency */}
      <section className="space-y-6 pt-6 border-t border-theme-border/60">
        <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-border/80 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-theme-primary">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="text-xl font-display font-bold text-theme-text">
              Our Transparency Commitment on Google Ads
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Google Ads performance is influenced by real-world factors including keyword competition, search demand, geographic location, ad budget, bidding strategies, advertisement quality, landing-page experience, and speed of customer follow-up.
          </p>
          <p className="text-xs text-theme-muted leading-relaxed">
            Webliix manages, monitors, and optimizes your campaigns with professional discipline and data-driven adjustments, but we do not make false guarantees about specific leads, rankings, or sales.
          </p>
        </WebliixCard>
      </section>

      {/* Section — Pricing */}
      <section id="google-pricing" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Simple Google Ads Management Packages
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Google advertising spend is paid directly to Google and is separate from Webliix management fees.
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
                    <strong>Suggested Google Budget:</strong> {pkg.recommendedBudget}
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
            Google Ads FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Frequently Asked Questions About Google Ads
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Clear answers to help you decide if Google Ads is the right fit.
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
          defaultPlatform="Google Ads"
          heading="Get Started With Google Ads Management"
          subtext="Tell us about your services and target location. We will analyze Google search volume in your area and prepare a transparent campaign proposal."
        />
      </section>

      {/* Cross-Link Footer Navigation */}
      <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono border-t border-theme-border/50">
        <Link to="/paid-advertising" className="text-theme-muted hover:text-theme-primary transition flex items-center gap-1">
          ← View All Paid Advertising Services
        </Link>
        <Link to="/meta-ads" className="text-theme-primary hover:underline flex items-center gap-1 font-bold">
          Explore Facebook & Instagram (Meta) Ads →
        </Link>
      </div>
    </div>
  );
}
