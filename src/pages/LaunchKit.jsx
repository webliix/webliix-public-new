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
  Globe,
  Layout,
  Smartphone,
  Search,
  Target,
  Share2,
  Wrench,
  Cpu,
  ShieldCheck,
  DollarSign,
  Briefcase,
  Users,
  Building2,
  Rocket,
  Check,
  Layers,
  Send,
  MessageSquare,
  Lock,
  Clock,
  Award,
  Zap
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useModal } from '../context/ModalContext';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import {
  WebliixInput,
  WebliixTextarea,
  WebliixSelect,
  WebliixFieldGroup,
  WebliixLabel,
  netlifyEncode
} from '../components/ui/WebliixInput';

const FORM_NAME = 'launchkit-enquiry';

export default function LaunchKit() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('LaunchKit Business');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    country: '',
    website: '',
    needs: 'New Website',
    package: 'LaunchKit Business',
    budget: '₹15,000–₹30,000 / equivalent',
    targetMarket: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useModal();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectPackageCTA = (pkgName) => {
    setSelectedPackage(pkgName);
    setFormData((prev) => ({ ...prev, package: pkgName }));
    const element = document.getElementById('launchkit-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: netlifyEncode({ 'form-name': FORM_NAME, ...formData })
      });
    } catch {
      // dev fallback
    }
    setSubmitted(true);
    setSubmitting(false);
    if (showToast) {
      showToast('LaunchKit enquiry submitted! Our project team will reach out within 2 hours.', 'success');
    }
  };

  const cleanPhone = siteConfig.brand.contactPhone.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=Hi%20Webliix,%20I'm%20interested%20in%20${encodeURIComponent(
    formData.package || 'LaunchKit'
  )}%20for%20my%20business%20${encodeURIComponent(formData.businessName || '')}.`;

  const heroBadges = [
    'Professional Website',
    'Mobile Ready',
    'SEO Foundation',
    'Lead Generation Ready',
    'Business Setup',
    'Worldwide Service'
  ];

  const whoIsItForCards = [
    {
      icon: Building2,
      title: 'Local Businesses',
      desc: 'Build trust and make it easier for local customers to discover, evaluate, and contact you.'
    },
    {
      icon: Briefcase,
      title: 'Service Businesses',
      desc: 'Showcase your services, experience, and past work while giving potential clients an easy way to enquire.'
    },
    {
      icon: Users,
      title: 'Professionals',
      desc: 'Create a professional digital presence that represents your expertise, credentials, and personal brand.'
    },
    {
      icon: Rocket,
      title: 'Startups & New Businesses',
      desc: 'Get the essential digital foundation you need to launch without having to build and coordinate everything separately.'
    },
    {
      icon: Layout,
      title: 'Freelancers & Creators',
      desc: 'Showcase your portfolio, client work, pricing packages, and experience in a polished format.'
    },
    {
      icon: Zap,
      title: 'Growing Businesses',
      desc: 'Upgrade an outdated or limited online presence and create a robust, search-ready foundation for future marketing.'
    }
  ];

  const packages = [
    {
      id: 'essential',
      name: 'LaunchKit Essential',
      price: '₹14,999',
      priceLabel: 'Starting from',
      intent: 'Get online',
      badge: 'ESSENTIAL SETUP',
      popular: false,
      desc: 'For individuals and small businesses that need a professional online presence without unnecessary complexity.',
      highlights: [
        'Up to 4 Core Responsive Pages',
        'Home, About, Services, Contact',
        'Mobile, Tablet & Desktop Optimized Layout',
        'Contact / Inquiry Form with Email Alerts',
        'WhatsApp / Direct Contact CTA',
        'Social Media Profile Links',
        'Search-Ready Technical SEO Foundation',
        'Meta Titles, Descriptions & XML Sitemap',
        'Domain Connection & SSL Certificate Setup',
        'Basic Website Analytics Setup',
        '30 Days Post-Launch Technical Support'
      ]
    },
    {
      id: 'business',
      name: 'LaunchKit Business',
      price: '₹19,999',
      priceLabel: 'Starting from',
      intent: 'Build credibility + generate enquiries',
      badge: 'MOST POPULAR',
      popular: true,
      desc: 'For small businesses that want a stronger website, better lead-generation capability and a more complete digital foundation.',
      highlights: [
        'Everything in Essential, PLUS:',
        'Up to 6 Core Responsive Pages',
        'Portfolio / Work Showcase Section',
        'Client Testimonials & Trust Elements',
        'Interactive FAQ Accordion Section',
        'Conversion-Focused Page Layouts',
        'Advanced Contact & Lead Capture Forms',
        'On-Page SEO & Internal Linking Setup',
        'Google Search Console & GA4 Setup',
        'Basic Schema Markup Implementation',
        '1 Professional Business Email Setup',
        'Google Business Profile Setup / Guidance',
        '30 Days Post-Launch Technical Support'
      ]
    },
    {
      id: 'growth',
      name: 'LaunchKit Growth',
      price: '₹29,999',
      priceLabel: 'Starting from',
      intent: 'Prepare for long-term growth',
      badge: 'EXPANDED FOUNDATION',
      popular: false,
      desc: 'For businesses that want a larger website and a stronger foundation for SEO, content and future marketing.',
      highlights: [
        'Everything in Business, PLUS:',
        'Up to 10 Core Responsive Pages',
        'Advanced Multi-Service Sections',
        'Detailed Case Studies Showcase',
        'Integrated Blog / Article Publishing Setup',
        'Multiple In-Page Lead Capture Forms',
        'Conversion & Event Tracking Configuration',
        'Expanded On-Page Technical SEO',
        'Advanced Structured Data (JSON-LD Schema)',
        'SEO-Ready Content Architecture',
        'Up to 2 Professional Business Email Setups',
        '60 Days Dedicated Post-Launch Support'
      ]
    }
  ];

  const comparisonFeatures = [
    { name: 'Responsive website', essential: '✓', business: '✓', growth: '✓' },
    { name: 'Core pages included', essential: 'Up to 4', business: 'Up to 6', growth: 'Up to 10' },
    { name: 'Contact / enquiry form', essential: '✓', business: '✓ (Advanced)', growth: '✓ (Multiple)' },
    { name: 'WhatsApp / direct CTA', essential: '✓', business: '✓', growth: '✓' },
    { name: 'Portfolio / Work section', essential: '✓', business: '✓', growth: '✓' },
    { name: 'Testimonials showcase', essential: '—', business: '✓', growth: '✓' },
    { name: 'FAQ accordion section', essential: '—', business: '✓', growth: '✓' },
    { name: 'Search-ready SEO foundation', essential: '✓', business: '✓', growth: '✓ (Advanced)' },
    { name: 'Google Search Console setup', essential: '—', business: '✓', growth: '✓' },
    { name: 'Google Analytics 4 setup', essential: '✓', business: '✓', growth: '✓' },
    { name: 'Local SEO / GMB guidance', essential: '—', business: '✓', growth: '✓ (Optimized)' },
    { name: 'Blog / publishing system', essential: '—', business: '—', growth: '✓' },
    { name: 'Case studies layout', essential: '—', business: '✓', growth: '✓' },
    { name: 'Conversion tracking setup', essential: '—', business: '✓', growth: '✓' },
    { name: 'Business email setup', essential: '—', business: '1 Account', growth: '2 Accounts' },
    { name: 'Post-launch support period', essential: '30 Days', business: '30 Days', growth: '60 Days' }
  ];

  const processRoadmap = [
    { num: '01', title: 'Discovery', desc: 'We understand your business, audience, services, goals, and preferred aesthetic.' },
    { num: '02', title: 'Content & Assets', desc: 'You provide your available business details, images, logo, and core messaging.' },
    { num: '03', title: 'Design', desc: 'We structure the website layout and visual experience tailored to your target audience.' },
    { num: '04', title: 'Development', desc: 'We build the responsive, high-performance website and implement all agreed features.' },
    { num: '05', title: 'SEO & Tracking', desc: 'We configure the technical SEO foundation, analytics, and conversion events.' },
    { num: '06', title: 'Review & Revisions', desc: 'You review the live preview and share feedback within the agreed revision scope.' },
    { num: '07', title: 'Launch', desc: 'We connect your domain, configure SSL, deploy the website, and make it live.' },
    { num: '08', title: 'Support', desc: 'Your included post-launch support period begins to ensure smooth operation.' }
  ];

  const whatWeNeed = [
    {
      title: 'Business Information',
      items: [
        'Business name & short description',
        'List of products or services offered',
        'Official contact details & service areas',
        'Opening hours & location (if applicable)'
      ]
    },
    {
      title: 'Brand Assets',
      items: [
        'Logo files (or guidance for creation)',
        'Brand color preferences if available',
        'High-resolution photos & video clips',
        'Existing brochures or marketing assets'
      ]
    },
    {
      title: 'Website Content',
      items: [
        'About us story & founder background',
        'Service descriptions & key benefits',
        'Customer testimonials or reviews',
        'Portfolio photos & project details'
      ]
    },
    {
      title: 'Account Access',
      items: [
        'Domain registrar access (or delegation)',
        'Hosting access (where required)',
        'Google Business Profile / Analytics',
        'Social media account usernames'
      ]
    }
  ];

  const recurringServices = [
    {
      icon: Wrench,
      title: 'Website Care & Maintenance',
      desc: 'Keep your website secure, updated, and monitored with continuous technical support and regular backups.',
      link: '/website-maintenance',
      cta: 'Explore Website Care'
    },
    {
      icon: Search,
      title: 'SEO & Organic Growth',
      desc: 'Improve your search visibility, target high-intent buyer keywords, and build long-term organic presence.',
      link: '/seo',
      cta: 'Explore SEO'
    },
    {
      icon: Target,
      title: 'Google & Meta Ads',
      desc: 'Reach immediate potential customers through paid advertising with transparent, separate campaign budgets.',
      link: '/paid-advertising',
      cta: 'Explore Advertising'
    },
    {
      icon: Cpu,
      title: 'CRM & Custom Automation',
      desc: 'Organize leads, automate customer follow-ups, and streamline your business workflow as you scale.',
      link: '/web-app-development',
      cta: 'Explore CRM & Automation'
    }
  ];

  const faqs = [
    {
      q: 'Is Webliix LaunchKit only available for businesses in India?',
      a: 'No. Webliix works with businesses and professionals across India, the United States, Canada, Australia, the United Kingdom, Europe, the Middle East, and worldwide. Project proposals and invoicing are tailored in the appropriate currency based on client location and project scope.'
    },
    {
      q: 'Is domain registration included in the package price?',
      a: 'Domain registration is generally separate unless specifically bundled in your custom proposal. We assist you in selecting and connecting your custom domain to the website at launch.'
    },
    {
      q: 'Is cloud hosting included?',
      a: 'Deployment setup is included. For standard static/React platforms, high-speed global CDN deployment is configured. Any specialized third-party server or database costs are always communicated transparently upfront.'
    },
    {
      q: 'Do I need to provide all the website content myself?',
      a: 'You provide the basic business information and photos available to you. We organize, refine, and structure the content for web usability. If you require full end-to-end professional copywriting, we can provide that as an add-on service.'
    },
    {
      q: 'Can I request design revisions during development?',
      a: 'Yes. Each LaunchKit includes structured revision rounds within the agreed project scope to ensure you are completely satisfied with the look, feel, and content before final launch.'
    },
    {
      q: 'Do you provide SEO with LaunchKit?',
      a: 'Every LaunchKit includes an SEO-ready technical foundation (clean HTML5 structure, meta tags, sitemap, OpenGraph tags, and mobile optimization). Ongoing keyword ranking and monthly link building are available through our separate ongoing SEO services.'
    },
    {
      q: 'Do you guarantee #1 rankings on Google?',
      a: 'No. No ethical agency guarantees specific Google rankings, traffic volumes, or sales. We guarantee search-engine-friendly code, correct indexing, and technical best practices.'
    },
    {
      q: 'Can you manage Google or Meta Ads after my website launches?',
      a: 'Yes. Webliix provides Google Ads and Meta Ads management as an optional recurring service. Advertising spend is paid directly to the ad platform and is completely separate from Webliix management fees.'
    },
    {
      q: 'Can Webliix maintain and update my website after launch?',
      a: 'Yes. We offer optional ongoing website care and maintenance plans covering technical updates, security scans, uptime checks, and minor content edits.'
    },
    {
      q: 'Can I upgrade my package or add pages later?',
      a: 'Yes, absolutely. LaunchKit is designed to grow with your business. You can add extra pages, e-commerce capabilities, blog publishing, CRM tools, or advertising at any time.'
    },
    {
      q: 'What is the standard payment structure for LaunchKit?',
      a: 'Standard projects follow a straightforward 50% advance milestone upon project kickoff and the remaining 50% upon final review and before live DNS deployment, ensuring mutual confidence throughout.'
    }
  ];

  const canonicalUrl = `${siteConfig.brand.website || 'https://webliix.com'}/launch-kit`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Webliix LaunchKit — Business Website & Digital Launch Packages',
    provider: {
      '@type': 'Organization',
      name: siteConfig.brand.name,
      url: 'https://webliix.com',
      logo: 'https://webliix.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.brand.contactPhone,
        contactType: 'customer support',
        areaServed: ['Worldwide', 'IN', 'US', 'CA', 'GB', 'AU', 'DE', 'AE']
      }
    },
    serviceType: 'Business Website Design, Branding & SEO Launch Packages',
    description: 'Turnkey digital launch packages for small businesses, professionals, and growing brands worldwide with responsive website design, SEO foundation, and lead generation setup.',
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
        <title>Webliix LaunchKit | Professional Business Website & Digital Launch</title>
        <meta
          name="description"
          content="Launch your business online with Webliix LaunchKit — professional website, SEO foundation, lead generation setup and launch support for businesses worldwide."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Webliix LaunchKit | Professional Business Website & Digital Launch" />
        <meta
          property="og:description"
          content="Everything you need to launch your business online. Professional website, search-ready foundation, and lead generation setup for businesses worldwide."
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
          <span>WEBLIIX LAUNCHKIT</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-theme-text leading-[1.15]">
          Everything You Need to <span className="text-shimmer">Launch Your Business Online</span>
        </h1>

        <p className="text-base sm:text-lg text-theme-muted leading-relaxed max-w-2xl mx-auto">
          Launch a professional online presence with a modern website, essential business setup and a search-ready foundation — without having to coordinate multiple providers.
        </p>

        <div className="inline-block p-3 sm:px-6 theme-rounded-card bg-theme-primary/5 border border-theme-primary/30 text-xs sm:text-sm font-medium text-theme-text">
          🌍 <strong className="text-theme-primary">Global Reach:</strong> Built for small businesses, professionals, and growing brands worldwide.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#launchkit-packages">
            <WebliixButton variant="primary" size="lg" icon={ArrowRight}>
              Choose Your LaunchKit
            </WebliixButton>
          </a>
          <a href="#launchkit-form-section">
            <WebliixButton variant="ghost" size="lg">
              Talk to Webliix
            </WebliixButton>
          </a>
        </div>

        {/* Hero Value Strip */}
        <div className="pt-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-3.5 theme-rounded-card glass-spatial border border-theme-border/60 text-xs font-mono text-theme-text">
            {heroBadges.map((badge, idx) => (
              <span key={idx} className="flex items-center gap-1.5 px-2 py-1">
                <Check className="w-3.5 h-3.5 text-theme-primary font-bold" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section — What is LaunchKit? */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            All-In-One Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Launch Your Business Without Starting From Scratch
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
            Getting a business online involves more than building a few web pages. You need a professional website, clear business information, contact options, basic search optimization, analytics and the right foundation for future marketing.
            LaunchKit brings these essential pieces together into one straightforward package.
          </p>
        </div>

        {/* Visual Formula */}
        <WebliixCard variant="panel" className="p-6 sm:p-8 max-w-4xl mx-auto text-center border border-theme-border/80 shadow-spatial-md">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-display font-bold text-theme-text">
            <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/60">
              <Layout className="w-4 h-4 text-theme-primary mx-auto mb-1" />
              Website
            </div>
            <span className="text-theme-primary text-lg font-bold">+</span>
            <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/60">
              <Briefcase className="w-4 h-4 text-theme-primary mx-auto mb-1" />
              Business Setup
            </div>
            <span className="text-theme-primary text-lg font-bold">+</span>
            <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/60">
              <Search className="w-4 h-4 text-theme-primary mx-auto mb-1" />
              SEO Foundation
            </div>
            <span className="text-theme-primary text-lg font-bold">+</span>
            <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/60">
              <Target className="w-4 h-4 text-theme-primary mx-auto mb-1" />
              Lead Generation
            </div>
            <span className="text-theme-primary text-lg font-bold">+</span>
            <div className="p-3 theme-rounded-card glass-spatial border border-theme-border/60">
              <ShieldCheck className="w-4 h-4 text-theme-primary mx-auto mb-1" />
              Launch Support
            </div>
            <span className="text-theme-primary text-lg font-bold">=</span>
            <div className="p-3 theme-rounded-card bg-theme-primary/20 border border-theme-primary/50 text-theme-primary font-extrabold">
              <Sparkles className="w-4 h-4 text-theme-primary mx-auto mb-1" />
              Webliix LaunchKit
            </div>
          </div>
        </WebliixCard>
      </section>

      {/* Section — Who is LaunchKit for? */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Tailored Fit
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Built for Businesses Ready to Go Online
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Whether you are starting fresh or upgrading an existing brand, LaunchKit provides a clear starting point.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoIsItForCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <WebliixCard key={idx} variant="panel" className="p-5 space-y-2.5 border border-theme-border/60">
                <div className="p-2 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20 w-fit">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-base font-display font-bold text-theme-text">
                  {card.title}
                </h4>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {card.desc}
                </p>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Section — Global Positioning (Serving Businesses Worldwide) */}
      <section className="space-y-6 pt-6 border-t border-theme-border/60">
        <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-primary/40 bg-theme-primary/5 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-theme-primary">
            <Globe className="w-5 h-5" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
              One Webliix. Businesses Worldwide.
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed max-w-2xl mx-auto">
            Webliix works with businesses and professionals across different markets and time zones.
            Whether you're launching in India, the United States, Canada, Australia, the United Kingdom, Europe, the Middle East, or elsewhere, we tailor the website and digital setup around your business, audience, and target market.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-theme-text pt-2">
            <span className="px-2.5 py-1 theme-rounded-badge bg-theme-bg/60 border border-theme-border/60">North America</span>
            <span className="px-2.5 py-1 theme-rounded-badge bg-theme-bg/60 border border-theme-border/60">United Kingdom & Europe</span>
            <span className="px-2.5 py-1 theme-rounded-badge bg-theme-bg/60 border border-theme-border/60">India & South Asia</span>
            <span className="px-2.5 py-1 theme-rounded-badge bg-theme-bg/60 border border-theme-border/60">Australia & Middle East</span>
          </div>
        </WebliixCard>
      </section>

      {/* Section — The Big Package Section */}
      <section id="launchkit-packages" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Retainers
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Choose Your LaunchKit
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Start with the package that matches your current needs. Every LaunchKit is designed to create a professional foundation that can grow with your business.
          </p>
        </div>

        {/* Visual Package Intent Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-center text-xs font-mono">
          <div className="p-2.5 theme-rounded-card glass-spatial border border-theme-border/60">
            <span className="text-theme-muted block text-[10px] uppercase">Essential</span>
            <strong className="text-theme-text">Get online</strong>
          </div>
          <div className="p-2.5 theme-rounded-card bg-theme-primary/15 border border-theme-primary/40 text-theme-primary">
            <span className="block text-[10px] uppercase font-bold">Business ⭐</span>
            <strong>Build credibility + enquiries</strong>
          </div>
          <div className="p-2.5 theme-rounded-card glass-spatial border border-theme-border/60">
            <span className="text-theme-muted block text-[10px] uppercase">Growth</span>
            <strong className="text-theme-text">Prepare for long-term growth</strong>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <WebliixCard
              key={pkg.id}
              variant={pkg.popular ? 'accent' : 'panel'}
              accentColor="primary"
              className={`p-6 sm:p-8 space-y-6 flex flex-col justify-between relative ${
                pkg.popular ? 'border-theme-primary/60 shadow-spatial-xl scale-[1.02] z-10' : 'border-theme-border/80'
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
                  <span className="text-[11px] font-mono text-theme-muted">
                    {pkg.intent}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-theme-text">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-theme-muted mt-1.5 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-theme-border/40">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-theme-text">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-theme-muted">
                      / {pkg.priceLabel}
                    </span>
                  </div>
                  <span className="text-[11px] text-theme-muted block mt-0.5">
                    * International quotes provided in local currency
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                    Deliverables Included:
                  </span>
                  <ul className="space-y-2 text-xs text-theme-text">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-theme-border/40">
                <WebliixButton
                  variant={pkg.popular ? 'primary' : 'ghost'}
                  size="md"
                  fullWidth
                  icon={ArrowUpRight}
                  onClick={() => handleSelectPackageCTA(pkg.name)}
                >
                  {pkg.id === 'essential' ? 'Start with Essential' : pkg.id === 'business' ? 'Choose Business' : 'Choose Growth'}
                </WebliixButton>
              </div>
            </WebliixCard>
          ))}
        </div>

        {/* Pricing Microcopy & Disclaimer */}
        <div className="p-4 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 text-center max-w-3xl mx-auto space-y-1">
          <p className="text-xs font-mono font-bold text-theme-primary uppercase">
            Transparent Pricing Details
          </p>
          <p className="text-xs text-theme-muted leading-relaxed">
            Final pricing depends on your business requirements, website scope, content, integrations, and any custom functionality requested. International projects are quoted in the appropriate currency based on project scope and client location.
          </p>
          <p className="text-[11px] text-theme-muted/80 leading-relaxed pt-1">
            Third-party costs such as domain registration, dedicated hosting, paid third-party software subscriptions, or advertising spend are separate unless explicitly stated otherwise.
          </p>
        </div>
      </section>

      {/* Section — Package Comparison Table */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Side-By-Side View
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Package Comparison Table
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Quickly compare the core features and support included across each LaunchKit tier.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-theme-border/80">
                <th className="p-3 font-mono font-bold text-theme-primary uppercase">Feature / Capability</th>
                <th className="p-3 font-mono font-bold text-theme-text uppercase">Essential</th>
                <th className="p-3 font-mono font-bold text-theme-primary uppercase bg-theme-primary/10 theme-rounded-card">
                  Business ⭐
                </th>
                <th className="p-3 font-mono font-bold text-theme-text uppercase">Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-theme-border/40 font-mono">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-theme-primary/5 transition-colors">
                  <td className="p-3 font-sans font-medium text-theme-text">{row.name}</td>
                  <td className="p-3 text-theme-muted">{row.essential}</td>
                  <td className="p-3 font-bold text-theme-primary bg-theme-primary/5">{row.business}</td>
                  <td className="p-3 text-theme-muted">{row.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section — What Happens After You Buy? (Execution Timeline) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Execution Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            From Idea to Live Website
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Our organized, structured workflow ensures transparent milestone updates with zero delays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processRoadmap.map((step, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-2 flex flex-col justify-between border border-theme-border/60">
              <div>
                <span className="px-2 py-0.5 theme-rounded-btn text-[10px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30 inline-block mb-1.5">
                  Step {step.num}
                </span>
                <h4 className="text-sm font-display font-bold text-theme-text">
                  {step.title}
                </h4>
              </div>
              <p className="text-xs text-theme-muted leading-relaxed pt-1 border-t border-theme-border/40">
                {step.desc}
              </p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* Section — What We Need From You */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Smooth Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            What Do We Need From You?
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            A successful website project is a true partnership. We make the technical work simple, but we need accurate business information and assets from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whatWeNeed.map((cat, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-3 border border-theme-border/60">
              <h4 className="text-sm font-display font-bold text-theme-text border-b border-theme-border/40 pb-2">
                {cat.title}
              </h4>
              <ul className="space-y-2 text-xs text-theme-muted">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-primary shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </WebliixCard>
          ))}
        </div>

        <div className="p-3 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 text-center max-w-2xl mx-auto text-xs text-theme-muted">
          🔒 <strong>Privacy Assurance:</strong> We never request your personal passwords when account-level delegation or invitation-based access can be used.
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
            Clear service boundaries to protect your timeline and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Included */}
          <WebliixCard variant="panel" className="p-6 space-y-3 border border-emerald-500/40 bg-emerald-500/5">
            <h3 className="text-base font-display font-bold text-theme-text flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Included in LaunchKit Package</span>
            </h3>
            <ul className="space-y-2 text-xs text-theme-text">
              {[
                'Website development within agreed package scope',
                'Mobile, tablet and desktop responsive UI design',
                'Search-ready on-page SEO foundation',
                'Contact forms and WhatsApp/direct inquiry integration',
                'Domain connection and HTTPS/SSL security setup',
                'Google Analytics 4 setup and deployment',
                'Agreed post-launch technical support period'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </WebliixCard>

          {/* Charged Separately */}
          <WebliixCard variant="panel" className="p-6 space-y-3 border border-theme-border/70">
            <h3 className="text-base font-display font-bold text-theme-text flex items-center gap-2">
              <Layers className="w-4 h-4 text-theme-primary" />
              <span>Available as Separate Add-Ons</span>
            </h3>
            <ul className="space-y-2 text-xs text-theme-text">
              {[
                'Complex e-commerce or payment gateway stores',
                'Advanced appointment booking or membership portals',
                'Custom full-stack web applications or SaaS tools',
                'Professional on-location photography/videography',
                'Extensive custom copywriting from scratch',
                'Paid Google / Meta advertising management',
                'Ongoing monthly SEO & backlink campaigns',
                'Third-party software subscription fees'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </WebliixCard>
        </div>

        <p className="text-xs text-center text-theme-muted max-w-xl mx-auto">
          If your project requires something outside the selected LaunchKit, Webliix will clearly explain the requirement and confirm exact pricing before any work begins.
        </p>
      </section>

      {/* Section — Digital Growth Ecosystem Journey */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <WebliixCard variant="accent" accentColor="primary" className="p-8 sm:p-10 space-y-6 text-center">
          <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Long-Term Growth Roadmap
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
            Your Website Is the Foundation — Not the Entire Marketing Strategy
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted max-w-xl mx-auto leading-relaxed">
            A professional website gives your business a strong digital foundation, but building long-term traffic and customer enquiries can require ongoing marketing.
            Once your website is live, you can continue with Webliix through optional services as you scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4 text-xs font-mono">
            {[
              { stage: 'LAUNCH', detail: 'Website' },
              { stage: 'MAINTAIN', detail: 'Website Care' },
              { stage: 'GROW', detail: 'SEO + Content' },
              { stage: 'ATTRACT', detail: 'Google + Meta Ads' },
              { stage: 'CONVERT', detail: 'Landing Pages' },
              { stage: 'MANAGE', detail: 'CRM + Automation' }
            ].map((item, i, arr) => (
              <React.Fragment key={item.stage}>
                <div className="p-2.5 theme-rounded-card glass-spatial border border-theme-primary/40 text-center">
                  <span className="text-[10px] text-theme-muted block">{item.stage}</span>
                  <strong className="text-theme-text">{item.detail}</strong>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-theme-primary hidden md:inline-block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </WebliixCard>
      </section>

      {/* Section — Recurring Services (What Can We Do After Launch?) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Post-Launch Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            What Can We Do After Launch?
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Optional services to keep your platform updated, visible, and generating leads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recurringServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <WebliixCard key={idx} variant="panel" className="p-5 space-y-3 flex flex-col justify-between border border-theme-border/60 hover:border-theme-primary/50 transition-all">
                <div className="space-y-2.5">
                  <div className="p-2 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20 w-fit">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-display font-bold text-theme-text">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-theme-muted leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-theme-border/40">
                  <Link to={srv.link} className="text-xs font-mono font-bold text-theme-primary hover:underline flex items-center gap-1">
                    <span>{srv.cta}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Section — Why Build With Webliix? */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            The Webliix Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Why Build With Webliix?
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            A dedicated digital partner engineered for speed, transparency, and scalable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'One Digital Partner',
              desc: 'Website design, SEO, advertising, automation, and support from one cohesive team.'
            },
            {
              title: 'Transparent Pricing',
              desc: 'Clear packages, defined scopes, and zero hidden markups or bundled ad spend.'
            },
            {
              title: 'Built to Grow',
              desc: 'Modular React architecture that easily expands with new features as your business scales.'
            },
            {
              title: 'Worldwide Reach',
              desc: 'We collaborate with businesses across North America, Europe, India, Australia, and the Middle East.'
            },
            {
              title: 'Modern Technology',
              desc: 'Fast, responsive, and secure web experiences built with clean modern frameworks.'
            },
            {
              title: 'Long-Term Support',
              desc: 'We are here for the long run with optional website care, marketing, and technical advice.'
            }
          ].map((item, idx) => (
            <WebliixCard key={idx} variant="panel" className="p-5 space-y-2 border border-theme-border/60">
              <h4 className="text-base font-display font-bold text-theme-text">
                {item.title}
              </h4>
              <p className="text-xs text-theme-muted leading-relaxed">
                {item.desc}
              </p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* Section — Trust & Transparency (No Lock-In) */}
      <section className="space-y-6 pt-6 border-t border-theme-border/60">
        <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-3 border border-theme-border/70 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-display font-bold text-theme-text">
            No Unnecessary Lock-In
          </h3>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Your website should remain an important business asset, not a reason to keep paying for something you no longer need.
            Webliix clearly defines what is included in your project upfront. Ongoing recurring services are completely optional unless agreed upon separately.
          </p>
        </WebliixCard>
      </section>

      {/* Section — FAQ Accordion */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Everything You Need to Know About LaunchKit
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Answers to common questions about deliverables, international clients, and project timelines.
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

      {/* Section — LaunchKit Lead Qualification Form */}
      <section id="launchkit-form-section" className="space-y-6 pt-6 border-t border-theme-border/60">
        <WebliixCard
          variant="panel"
          className="p-6 sm:p-10 border border-theme-primary/40 shadow-spatial-xl relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/15 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-theme-primary/30">
                <Sparkles className="w-3.5 h-3.5" /> Start Your Launch
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-theme-text">
                Ready to Launch Your Business Online?
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                Tell us about your business, your goals, and what you need from your website. We will recommend the LaunchKit plan that best fits your requirements.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-bold text-theme-text">
                  LaunchKit Plan Request Received!
                </h4>
                <p className="text-sm text-theme-muted max-w-md mx-auto">
                  Thank you, <strong className="text-theme-text">{formData.name}</strong>. Our project strategist is reviewing your requirements and will reach out within 2 hours.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    <WebliixButton variant="primary" icon={MessageSquare} size="md">
                      Chat Instantly on WhatsApp
                    </WebliixButton>
                  </a>
                  <WebliixButton
                    variant="ghost"
                    size="md"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        country: '',
                        website: '',
                        needs: 'New Website',
                        package: 'LaunchKit Business',
                        budget: '₹15,000–₹30,000 / equivalent',
                        targetMarket: '',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Request
                  </WebliixButton>
                </div>
              </div>
            ) : (
              <form
                name={FORM_NAME}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                {/* Grid 1: Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-name" required>Your Name</WebliixLabel>
                    <WebliixInput
                      id="lk-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </WebliixFieldGroup>

                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-businessName" required>Business Name</WebliixLabel>
                    <WebliixInput
                      id="lk-businessName"
                      name="businessName"
                      type="text"
                      required
                      placeholder="e.g. Apex Health & Wellness"
                      value={formData.businessName}
                      onChange={handleChange}
                    />
                  </WebliixFieldGroup>
                </div>

                {/* Grid 2: Email & Phone/WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-email" required>Business Email</WebliixLabel>
                    <WebliixInput
                      id="lk-email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@yourcompany.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </WebliixFieldGroup>

                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-phone" required>Phone / WhatsApp</WebliixLabel>
                    <WebliixInput
                      id="lk-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000 or +91..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </WebliixFieldGroup>
                </div>

                {/* Grid 3: Country & Current Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-country" required>Country / Region</WebliixLabel>
                    <WebliixInput
                      id="lk-country"
                      name="country"
                      type="text"
                      required
                      placeholder="e.g. USA, UK, Canada, Australia, India..."
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </WebliixFieldGroup>

                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-website" optional>Current Website URL</WebliixLabel>
                    <WebliixInput
                      id="lk-website"
                      name="website"
                      type="url"
                      placeholder="https://example.com (if redesign)"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </WebliixFieldGroup>
                </div>

                {/* Grid 4: Primary Need & Preferred Package */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-needs" required>What Do You Need?</WebliixLabel>
                    <WebliixSelect
                      id="lk-needs"
                      name="needs"
                      value={formData.needs}
                      onChange={handleChange}
                    >
                      <option value="New Website">Brand New Website</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Business Website">Business & Corporate Site</option>
                      <option value="Portfolio Website">Portfolio / Personal Brand</option>
                      <option value="Landing Page">High-Converting Landing Page</option>
                      <option value="SEO">SEO & Organic Visibility</option>
                      <option value="Online Advertising">Online Advertising Setup</option>
                      <option value="Not Sure">Not Sure (Need Recommendations)</option>
                    </WebliixSelect>
                  </WebliixFieldGroup>

                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-package" required>Preferred Package</WebliixLabel>
                    <WebliixSelect
                      id="lk-package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                    >
                      <option value="LaunchKit Essential">LaunchKit Essential (Starting from ₹14,999)</option>
                      <option value="LaunchKit Business">LaunchKit Business ⭐ (Starting from ₹19,999)</option>
                      <option value="LaunchKit Growth">LaunchKit Growth (Starting from ₹29,999)</option>
                      <option value="Not Sure">Not Sure (Advise Me)</option>
                    </WebliixSelect>
                  </WebliixFieldGroup>
                </div>

                {/* Grid 5: Approximate Budget & Target Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-budget" required>Approximate Budget</WebliixLabel>
                    <WebliixSelect
                      id="lk-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="Under ₹15,000 / equivalent">Under ₹15,000 / equivalent (~$180 USD)</option>
                      <option value="₹15,000–₹30,000 / equivalent">₹15,000–₹30,000 / equivalent (~$180–$360 USD)</option>
                      <option value="₹30,000–₹50,000 / equivalent">₹30,000–₹50,000 / equivalent (~$360–$600 USD)</option>
                      <option value="₹50,000+">₹50,000+ / equivalent</option>
                      <option value="Not Sure">Not Sure (Let's Discuss)</option>
                    </WebliixSelect>
                  </WebliixFieldGroup>

                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-targetMarket" required>Target Market / City</WebliixLabel>
                    <WebliixInput
                      id="lk-targetMarket"
                      name="targetMarket"
                      type="text"
                      required
                      placeholder="e.g. Local City, National, Worldwide..."
                      value={formData.targetMarket}
                      onChange={handleChange}
                    />
                  </WebliixFieldGroup>
                </div>

                {/* Message */}
                <WebliixFieldGroup>
                  <WebliixLabel htmlFor="lk-message" optional>
                    Tell us about your business & goals
                  </WebliixLabel>
                  <WebliixTextarea
                    id="lk-message"
                    name="message"
                    rows={3}
                    placeholder="What products or services do you offer? Who are your ideal customers? What are your key website goals?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </WebliixFieldGroup>

                {/* Global Trust Note */}
                <div className="flex items-start gap-2 p-3 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 text-[11px] text-theme-muted">
                  <Globe className="w-4 h-4 text-theme-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Serving businesses worldwide:</strong> Tell us your country, business type, and requirements, and we will prepare a tailored proposal for your market.
                  </span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <WebliixButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={submitting}
                    icon={Send}
                  >
                    {submitting ? 'Submitting Request...' : 'Get My LaunchKit Plan'}
                  </WebliixButton>
                </div>
              </form>
            )}
          </div>
        </WebliixCard>
      </section>

      {/* Final Bottom CTA */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Turnkey Digital Launch
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Launch?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Tell us about your business, your goals, and what you need from your website. We will recommend the LaunchKit option that best fits your requirements.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#launchkit-form-section">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Start My Launch
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