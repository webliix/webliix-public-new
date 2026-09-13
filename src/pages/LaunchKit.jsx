import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Globe,
  Layout,
  Search,
  Target,
  Share2,
  Wrench,
  ShieldCheck,
  Briefcase,
  Users,
  Building2,
  Rocket,
  Check,
  Layers,
  Send,
  MessageSquare,
  Clock,
  Award,
  Zap,
  Palette,
  MapPin,
  PhoneCall,
  BarChart3,
  ShoppingCart,
  TrendingUp,
  Cpu,
  Bot,
  RefreshCw,
  FileCode,
  CreditCard,
  PlusCircle,
  Star
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
  const [selectedPackage, setSelectedPackage] = useState('02 — PROFESSIONAL ⭐ (Starting @ ₹19,999)');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    country: '',
    website: '',
    needs: 'New Website',
    package: '02 — PROFESSIONAL ⭐ (Starting @ ₹19,999)',
    budget: '₹15,000–₹35,000',
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
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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

  // 1. What Every Webliix Business Launch Can Include (8 Core Pillars)
  const whatEveryLaunchIncludes = [
    {
      icon: Palette,
      title: 'Brand Identity',
      items: 'Logo • Colours • Fonts • Visual Style'
    },
    {
      icon: Layout,
      title: 'Website',
      items: 'Modern • Responsive • Fast • Conversion-focused'
    },
    {
      icon: MapPin,
      title: 'Google Presence',
      items: 'Google Business Profile • Maps • Search Console'
    },
    {
      icon: Search,
      title: 'SEO Foundation',
      items: 'Keywords • On-page SEO • Technical Structure'
    },
    {
      icon: PhoneCall,
      title: 'Lead Generation',
      items: 'WhatsApp • Calls • Forms • Enquiries'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      items: 'GA4 • Search Console • Conversion Tracking'
    },
    {
      icon: Share2,
      title: 'Social Presence',
      items: 'Profiles • Covers • Brand Assets'
    },
    {
      icon: Rocket,
      title: 'Launch Support',
      items: 'Deployment • Testing • Post-launch Support'
    }
  ];

  // 2. High-Conversion "What Do You Actually Need?" Scenarios
  const whatDoYouNeedOptions = [
    {
      situation: 'Starting a new business?',
      recommendation: '01 — ESSENTIAL',
      badge: 'Fastest Start',
      pkgTarget: '01 — ESSENTIAL (Starting @ ₹9,999)',
      desc: 'Get your logo, responsive website, Google Business Profile and business essentials ready in 5–10 days.'
    },
    {
      situation: 'Already have a business but no professional identity?',
      recommendation: '02 — PROFESSIONAL ⭐',
      badge: 'Brand Builder',
      pkgTarget: '02 — PROFESSIONAL ⭐ (Starting @ ₹19,999)',
      desc: 'Complete brand starter kit, custom UI, testimonial & FAQ sections, and conversion-focused design.'
    },
    {
      situation: 'Want more enquiries from Google?',
      recommendation: '02 — PROFESSIONAL + Local SEO',
      badge: 'Local Ranking',
      pkgTarget: '02 — PROFESSIONAL ⭐ (Starting @ ₹19,999)',
      desc: 'Structured schema markup, keyword mapping, GBP optimisation, and search-focused content architecture.'
    },
    {
      situation: 'Need a complete online growth foundation?',
      recommendation: '03 — BUSINESS PRO',
      badge: 'Complete System',
      pkgTarget: '03 — BUSINESS PRO (Starting @ ₹34,999)',
      desc: 'Advanced 12–15 page architecture, GA4 tracking, call tracking, Meta Pixel, and 180 days dedicated support.'
    },
    {
      situation: 'Want to sell products online?',
      recommendation: '04 — E-COMMERCE',
      badge: 'Online Store',
      pkgTarget: '04 — E-COMMERCE (Starting @ ₹29,999)',
      desc: 'E-commerce website with product catalog, cart, checkout, payment gateway, and shipping setup for up to 25 products.'
    },
    {
      situation: 'Already have a website?',
      recommendation: 'Choose Individual Add-Ons',
      badge: 'À La Carte',
      pkgTarget: 'Custom Add-ons / Individual Services',
      desc: 'Pick Branding, SEO, Website Redesign, Google Ads, or Website Care individually according to your needs.'
    }
  ];

  // 3. Core LaunchKit Packages
  const packages = [
    {
      id: 'essential',
      number: '01',
      name: '01 — ESSENTIAL',
      intent: 'Get Online',
      price: '₹9,999',
      priceLabel: 'Starting @',
      popular: false,
      badge: 'ESSENTIAL SETUP',
      desc: 'For businesses that need a professional online presence without unnecessary complexity.',
      delivery: '5–10 working days',
      support: 'Basic website launch support',
      ctaText: 'Start My Business',
      sections: [
        {
          title: 'Brand Foundation',
          items: [
            'Logo design / logo refinement',
            'Brand colour palette',
            'Font / typography selection',
            'Light & dark logo versions',
            'Basic brand usage guidance'
          ]
        },
        {
          title: 'Website',
          items: [
            'Professional responsive website',
            'Up to 3–5 pages',
            'Mobile-first design',
            'Modern business-focused UI',
            'WhatsApp button & click-to-call button',
            'Contact / enquiry form',
            'Google Maps integration',
            'Social media links'
          ]
        },
        {
          title: 'Google & SEO',
          items: [
            'Google Business Profile setup',
            'Basic keyword research',
            'SEO-friendly page structure',
            'Meta titles & descriptions',
            'SEO-friendly URLs',
            'Sitemap & Robots.txt',
            'Google Search Console setup',
            'Google Analytics setup'
          ]
        },
        {
          title: 'Business Essentials',
          items: [
            'Business email setup',
            'Favicon creation',
            'Social profile image setup',
            'Basic website launch support'
          ]
        }
      ]
    },
    {
      id: 'professional',
      number: '02',
      name: '02 — PROFESSIONAL ⭐',
      intent: 'Build Your Brand',
      price: '₹19,999',
      priceLabel: 'Starting @',
      popular: true,
      badge: 'MOST POPULAR',
      desc: 'For businesses that want a stronger brand identity and a website designed to generate enquiries.',
      subnote: 'Everything in Essential, plus:',
      delivery: '10–15 working days',
      support: '90 days post-launch support',
      ctaText: 'Build My Business Brand',
      seoHighlight: 'Google specifically supports structured data to help it understand business information and recommends sitemap submission and URL inspection as part of the search process.',
      sections: [
        {
          title: 'Complete Brand Starter Kit',
          items: [
            'Professional logo design & variations',
            'Primary & secondary colour palette',
            'Typography system & font pairing',
            'Brand style direction & Favicon',
            'Business card design',
            'Letterhead & email signature design',
            'Social media profile kit',
            'Basic brand guidelines'
          ]
        },
        {
          title: 'Website',
          items: [
            'Up to 7–10 pages',
            'Custom UI design & lead-focused CTA sections',
            'Service / product sections',
            'Client testimonials showcase',
            'Interactive FAQ section',
            'Gallery / portfolio showcase',
            'WhatsApp enquiry flow & advanced contact forms',
            'Google Maps & social integrations'
          ]
        },
        {
          title: 'Local SEO Setup',
          items: [
            'Local keyword research & service keyword mapping',
            'Location keyword optimisation',
            'On-page SEO & internal linking structure',
            'LocalBusiness & Organization schema markup',
            'FAQ schema where appropriate',
            'Google Business Profile optimisation',
            'Search Console setup & conversion tracking'
          ]
        },
        {
          title: 'Content & Copywriting',
          items: [
            'SEO-focused website content structure',
            'Homepage keyword optimisation',
            'Service-page content optimisation',
            'FAQ content & CTA copy optimisation'
          ]
        }
      ]
    },
    {
      id: 'business-pro',
      number: '03',
      name: '03 — BUSINESS PRO',
      intent: 'Build to Grow',
      price: '₹34,999',
      priceLabel: 'Starting @',
      popular: false,
      badge: 'GROWTH SYSTEM',
      desc: 'For businesses that want their website, branding and local search presence built as one complete system.',
      subnote: 'Everything in Professional, plus:',
      delivery: '15–25 working days',
      support: '180 days post-launch support',
      ctaText: 'Build My Growth System',
      sections: [
        {
          title: 'Brand Identity',
          items: [
            'Complete logo system & brand colour system',
            'Typography system & comprehensive brand guidelines',
            'Business card, letterhead & email signature',
            'Social media profile kit & cover design',
            '3 branded social post templates',
            'Brand assets optimized for digital use'
          ]
        },
        {
          title: 'Website Architecture',
          items: [
            'Up to 12–15 pages',
            'Advanced custom UI/UX design',
            'Service / category architecture & multiple service pages',
            'Location pages & portfolio / case studies',
            'Testimonials & reviews system',
            'FAQ system & blog setup',
            'Lead-generation sections & WhatsApp conversion flow',
            'Advanced multi-step enquiry forms'
          ]
        },
        {
          title: 'SEO & Google Dominance',
          items: [
            'Competitor research & search-intent keyword research',
            'Local SEO architecture & service+location mapping',
            'Technical SEO setup & advanced on-page SEO',
            'Advanced Schema implementation (JSON-LD)',
            'Google Business Profile & local search optimisation',
            'Search Console, GA4 & event tracking configuration',
            'Core Web Vitals optimisation & SEO-ready blog structure'
          ]
        },
        {
          title: 'Lead Generation & Growth Foundation',
          items: [
            'WhatsApp CTA optimisation & call tracking setup',
            'Form conversion tracking & lead source tracking',
            'CRM-ready lead structure & email lead notifications',
            'Google Ads conversion tracking & Meta Pixel setup',
            'Social sharing optimisation & AI-search/GEO-ready structure',
            'Basic review & reputation framework'
          ]
        }
      ]
    },
    {
      id: 'ecommerce',
      number: '04',
      name: '04 — E-COMMERCE',
      intent: 'Sell Online',
      price: '₹29,999',
      priceLabel: 'Starting @',
      popular: false,
      badge: 'ONLINE STORE',
      desc: 'For businesses selling products online.',
      delivery: '10–18 working days',
      support: '60 days post-launch support',
      ctaText: 'Start Selling Online',
      subnote: 'Includes:',
      sections: [
        {
          title: 'Store Features Included',
          items: [
            'Professional e-commerce website',
            'Product / category architecture & mobile-first design',
            'Product search & filtering capabilities',
            'Shopping cart & seamless checkout flow',
            'Razorpay / UPI / Stripe Payment Gateway Integration',
            'WhatsApp support & direct product enquiry option',
            'Shipping configuration & tax setup',
            'Basic product SEO & Product schema markup',
            'Google Analytics, Search Console & Conversion tracking',
            'Social media integration & basic store branding',
            'Up to 25 products setup included'
          ]
        }
      ],
      extraNote: 'Additional products, advanced filters, marketplaces, shipping APIs and custom functionality quoted separately.'
    }
  ];

  // 4. Detailed Add-On Services
  const addonCategories = [
    {
      category: 'Branding Add-Ons',
      tagline: 'Establish a memorable identity',
      icon: Palette,
      items: [
        {
          name: 'Logo Design',
          price: 'Starting @ ₹2,999',
          features: ['Logo concepts & revisions', 'Logo variations (Horizontal/Stacked)', 'PNG / JPG / SVG / PDF vector formats', 'Light & dark background versions']
        },
        {
          name: 'Brand Identity',
          price: 'Starting @ ₹6,999',
          features: ['Logo design', 'Brand colours & typography', 'Business card & letterhead', 'Email signature & social profile kit', 'Basic brand guide']
        },
        {
          name: 'Brand Kit',
          price: 'Starting @ ₹9,999',
          features: ['Complete visual identity system', 'Full brand guidelines document', 'Business stationery mockups', '3 editable social post templates', 'Digital brand assets']
        }
      ]
    },
    {
      category: 'Website Add-Ons',
      tagline: 'Expand pages and functional capabilities',
      icon: Layout,
      items: [
        { name: 'Additional Page', price: 'Starting @ ₹999', desc: 'Add extra custom service, landing or informational pages.' },
        { name: 'High-Converting Landing Page', price: 'Starting @ ₹2,999', desc: 'Standalone targeted conversion page for specific campaigns.' },
        { name: 'Blog / CMS System', price: 'Starting @ ₹4,999', desc: 'Publish SEO articles, news, and guides independently.' },
        { name: 'Portfolio / Case Study Section', price: 'Starting @ ₹2,999', desc: 'Showcase client deliverables, metrics, and visual galleries.' },
        { name: 'Advanced Form / Lead System', price: 'Starting @ ₹2,999', desc: 'Multi-step forms, file uploads, conditional logic, and webhooks.' },
        { name: 'Payment Gateway Integration', price: 'Starting @ ₹2,999', desc: 'Razorpay, UPI QR, Paytm, or Stripe checkout setup.' },
        { name: 'Additional Product Setup', price: 'Starting @ ₹499 / product', desc: 'Product imagery, variants, description, SKU, and SEO details.' },
        { name: 'Website Redesign', price: 'Starting @ ₹7,999', desc: 'Modernize an outdated design while preserving existing SEO authority.' }
      ]
    },
    {
      category: 'Google & SEO',
      tagline: 'Get Found on Google',
      icon: Search,
      note: "Don't promise rankings. Sell the work required to improve visibility.",
      items: [
        {
          name: 'Local SEO Package',
          price: 'Starting @ ₹7,999 / month',
          features: [
            'Google Business Profile optimisation',
            'Local keyword targeting & citation check',
            'On-page SEO & location optimisation',
            'Local content & Search Console monitoring',
            'Monthly performance reporting'
          ]
        },
        {
          name: 'SEO Growth Package',
          price: 'Starting @ ₹14,999 / month',
          features: [
            'Comprehensive technical & on-page SEO',
            'Keyword strategy & content optimisation',
            'Blog/content publishing & internal linking',
            'Local SEO & Search Console monitoring',
            'Monthly in-depth performance reporting'
          ]
        },
        {
          name: 'Google Business Profile Management',
          price: 'Starting @ ₹4,999 / month',
          features: [
            'Weekly GBP profile updates & posts',
            'Product & service listing updates',
            'Review & reputation response guidance',
            'Local visibility optimisation'
          ]
        }
      ]
    },
    {
      category: 'Marketing Add-Ons',
      tagline: 'Drive immediate enquiries and automate operations',
      icon: Target,
      items: [
        { name: 'Google Ads Management', price: 'Starting @ ₹7,999/mo + Ad Spend', desc: 'High-intent search ads, conversion tracking, keyword negative lists.' },
        { name: 'Meta Ads Management', price: 'Starting @ ₹7,999/mo + Ad Spend', desc: 'Facebook & Instagram lead generation, retargeting, and creative testing.' },
        { name: 'Social Media Management', price: 'Starting @ ₹7,999/mo', desc: 'Curated monthly posts, brand consistency, hashtags, and scheduling.' },
        { name: 'WhatsApp Business Setup', price: 'Starting @ ₹2,999', desc: 'Catalog setup, quick replies, automated greeting & away messages.' },
        { name: 'WhatsApp Automation Flow', price: 'Starting @ ₹7,999', desc: 'Interactive chat flow, lead capture triggers, automated notifications.' },
        { name: 'CRM / Lead Management', price: 'Starting @ ₹4,999', desc: 'Lead pipeline configuration, automatic email notifications, follow-up flow.' },
        { name: 'AI Chatbot Integration', price: 'Starting @ ₹9,999', desc: 'Smart AI chatbot trained on your business FAQs to answer queries 24/7.' }
      ]
    },
    {
      category: 'Website Care',
      tagline: 'Keep Your Website Running Fast & Secure',
      icon: Wrench,
      items: [
        {
          name: 'Website Care & Maintenance Plan',
          price: 'Starting @ ₹1,999 / month',
          features: [
            'Website updates & content changes',
            'Continuous technical monitoring',
            'Security checks & firewall protection',
            'Automatic backup monitoring',
            'Speed & performance checks',
            'Minor design tweaks & dedicated support'
          ]
        }
      ]
    }
  ];

  // 5. Package Comparison Table (All 4 Tiers)
  const comparisonTable = [
    { feature: 'Starting Price', essential: '₹9,999', professional: '₹19,999', businessPro: '₹34,999', ecommerce: '₹29,999' },
    { feature: 'Core Pages Included', essential: '3–5 Pages', professional: '7–10 Pages', businessPro: '12–15 Pages', ecommerce: 'Custom Pages + Store' },
    { feature: 'Turnkey Logo / Brand Design', essential: 'Basic Logo & Colors', professional: 'Complete Brand Starter Kit', businessPro: 'Full Brand System + 3 Posts', ecommerce: 'Basic Store Branding' },
    { feature: 'Mobile-First Responsive UI', essential: '✓', professional: '✓ (Custom UI)', businessPro: '✓ (Advanced UX)', ecommerce: '✓ (Store Optimized)' },
    { feature: 'Google Business Profile Setup', essential: 'Setup Included', professional: 'Optimised + Local Schema', businessPro: 'Full Local Dominance', ecommerce: 'Setup Included' },
    { feature: 'Technical & On-Page SEO', essential: 'Basic Setup', professional: 'Structured Data + FAQ Schema', businessPro: 'Competitor Research + GEO', ecommerce: 'Product SEO & Schema' },
    { feature: 'Lead Capture & WhatsApp CTA', essential: 'Standard Form + CTA', professional: 'Advanced Flow + Testimonials', businessPro: 'Call Tracking + CRM Ready', ecommerce: 'Cart + WhatsApp Orders' },
    { feature: 'E-Commerce / Payment Gateway', essential: '—', professional: 'Optional Add-on', businessPro: 'Optional Add-on', ecommerce: 'Included (25 Products)' },
    { feature: 'Google Analytics & Search Console', essential: '✓', professional: '✓ + Conversion Tracking', businessPro: '✓ + Event / Pixel Tracking', ecommerce: '✓ + Purchase Tracking' },
    { feature: 'Professional Business Email', essential: '1 Account Setup', professional: 'Included', businessPro: 'Included', ecommerce: 'Included' },
    { feature: 'Post-Launch Dedicated Support', essential: 'Launch Support', professional: '90 Days Included', businessPro: '180 Days Included', ecommerce: '60 Days Included' },
    { feature: 'Standard Delivery Time', essential: '5–10 Working Days', professional: '10–15 Working Days', businessPro: '15–25 Working Days', ecommerce: '10–18 Working Days' }
  ];

  // 6. FAQs (Exact 7 Questions)
  const faqs = [
    {
      q: 'How much does a business website cost in India?',
      a: 'Business website development in India varies according to design, pages, functionality, branding and SEO requirements. Webliix packages start from ₹9,999, with customised plans available for businesses with additional requirements.'
    },
    {
      q: 'Do you provide logo and website together?',
      a: 'Yes. Webliix can provide logo design, brand colours, typography, business card, letterhead, email signature and website design as one complete business launch package.'
    },
    {
      q: 'Do your website packages include SEO?',
      a: 'All packages include an SEO foundation. Advanced local SEO, content and ongoing search optimisation are available through higher packages and monthly SEO services.'
    },
    {
      q: 'Can you help my business appear on Google?',
      a: 'Webliix provides technical SEO, on-page SEO, Google Business Profile optimisation, local SEO and Search Console setup. Search rankings depend on competition, location, website quality, relevance and many external factors, so rankings cannot be guaranteed.'
    },
    {
      q: 'Can I customise a package?',
      a: 'Yes. Every package is a starting point. You can add pages, branding, SEO, e-commerce, automation, advertising, CRM integrations and other features according to your business requirements.'
    },
    {
      q: 'Do you provide Google Business Profile setup?',
      a: 'Yes. Google Business Profile setup and optimisation are available depending on the selected package.'
    },
    {
      q: 'Do you provide website maintenance?',
      a: 'Yes. Website care and maintenance plans start from ₹1,999/month and can be customised according to the website.'
    }
  ];

  // 7. Execution Process
  const processRoadmap = [
    { num: '01', title: 'Discovery & Goals', desc: 'We understand your business, target customers, service list, and visual brand preferences.' },
    { num: '02', title: 'Content & Brand Assets', desc: 'You provide your available business details, images, or we craft your brand foundation from scratch.' },
    { num: '03', title: 'Design & Architecture', desc: 'We structure the website layout, UI sections, and conversion paths tailored to your audience.' },
    { num: '04', title: 'Development & Build', desc: 'We engineer a lightning-fast responsive website and implement all agreed features and integrations.' },
    { num: '05', title: 'SEO & Tracking Setup', desc: 'We configure structured schema, meta tags, Google Business Profile, Search Console, and GA4 analytics.' },
    { num: '06', title: 'Review & Revisions', desc: 'You review the live development preview and share feedback within the agreed revision scope.' },
    { num: '07', title: 'Live Launch', desc: 'We connect your custom domain, install SSL certificates, verify indexing, and take your website live.' },
    { num: '08', title: 'Dedicated Support', desc: 'Your included 30, 90, or 180-day post-launch support period ensures smooth and worry-free operations.' }
  ];

  const canonicalUrl = `${siteConfig.brand.website || 'https://webliix.com'}/launch-kit`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Design, Branding & SEO Packages India | Webliix LaunchKit',
    provider: {
      '@type': 'Organization',
      name: siteConfig.brand.name,
      url: 'https://webliix.com',
      logo: 'https://webliix.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.brand.contactPhone,
        contactType: 'customer support',
        areaServed: ['IN', 'US', 'CA', 'GB', 'AU', 'Worldwide']
      }
    },
    serviceType: 'Business Website Design, Branding & SEO Launch Packages',
    description: 'Website design, branding and SEO packages for Indian businesses. Get a professional business website, logo, brand identity, Google Business Profile, local SEO and lead-generation setup. Starting @ ₹9,999.',
    offers: [
      {
        '@type': 'Offer',
        name: '01 — ESSENTIAL LaunchKit',
        price: '9999',
        priceCurrency: 'INR'
      },
      {
        '@type': 'Offer',
        name: '02 — PROFESSIONAL LaunchKit (Most Popular)',
        price: '19999',
        priceCurrency: 'INR'
      },
      {
        '@type': 'Offer',
        name: '03 — BUSINESS PRO LaunchKit',
        price: '34999',
        priceCurrency: 'INR'
      },
      {
        '@type': 'Offer',
        name: '04 — E-COMMERCE LaunchKit',
        price: '29999',
        priceCurrency: 'INR'
      }
    ]
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
        <title>Website Design, Branding & SEO Packages India | Webliix</title>
        <meta
          name="description"
          content="Website design, branding and SEO packages for Indian businesses. Get a professional business website, logo, brand identity, Google Business Profile, local SEO and lead-generation setup. Starting @ ₹9,999."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Website Design, Branding & SEO Packages India | Webliix" />
        <meta
          property="og:description"
          content="Website design, branding and SEO packages for Indian businesses. Get a professional business website, logo, brand identity, Google Business Profile, local SEO and lead-generation setup. Starting @ ₹9,999."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 theme-rounded-badge bg-theme-primary/10 border border-theme-primary/30 text-xs font-mono font-bold uppercase tracking-widest text-theme-primary shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WEBLIIX LAUNCH KIT</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-theme-text leading-[1.15]">
          Website Design, Branding & <span className="text-shimmer">Digital Growth Packages</span> for Businesses
        </h1>

        <p className="text-base sm:text-lg text-theme-muted leading-relaxed max-w-3xl mx-auto">
          Launch your business with everything you need to look professional, get discovered and generate enquiries.
        </p>

        {/* Value Pillars Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-theme-primary font-bold">
          {['Website', 'Branding', 'Google', 'SEO', 'WhatsApp', 'Business Essentials'].map((pillar, i, arr) => (
            <React.Fragment key={pillar}>
              <span className="px-3 py-1 theme-rounded-badge glass-spatial border border-theme-border/70 text-theme-text">
                {pillar}
              </span>
              {i < arr.length - 1 && <span className="text-theme-primary opacity-60">•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Pricing & Audience Callout */}
        <div className="space-y-2 pt-1">
          <div className="text-2xl sm:text-3xl font-mono font-extrabold text-theme-primary">
            Starting from ₹9,999*
          </div>
          <p className="text-xs sm:text-sm text-theme-muted max-w-2xl mx-auto leading-relaxed">
            Built for startups, local businesses, professionals, freelancers, home businesses and growing brands.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#launchkit-packages">
            <WebliixButton variant="primary" size="lg" icon={ArrowRight}>
              Get Your Business Online →
            </WebliixButton>
          </a>
          <a href="#launchkit-form-section">
            <WebliixButton variant="ghost" size="lg">
              Talk to a Webliix Expert
            </WebliixButton>
          </a>
        </div>

        {/* Small Text Disclaimer */}
        <p className="text-[11px] sm:text-xs text-theme-muted/80 max-w-xl mx-auto italic pt-2">
          Every business is different. Choose a starting package and customise it according to your actual requirements.
        </p>
      </section>

      {/* WHAT EVERY WEBLIIX BUSINESS LAUNCH CAN INCLUDE (8 Icon Section) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Comprehensive Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            What Every Webliix Business Launch Can Include
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Everything your business requires to establish authority, attract organic traffic, and convert visitors into leads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whatEveryLaunchIncludes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <WebliixCard key={idx} variant="panel" className="p-5 space-y-3 border border-theme-border/70 hover:border-theme-primary/50 transition-colors">
                <div className="p-2.5 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-theme-text">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-theme-muted mt-1 leading-relaxed">
                    {item.items}
                  </p>
                </div>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* 🚀 MAIN LAUNCHKIT PACKAGES (4 TIERS) */}
      <section id="launchkit-packages" className="space-y-8 pt-6 border-t border-theme-border/60 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Starting Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Choose Your Starting Package
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
            Select the package that fits your current business stage. Every tier is fully modular and can be customized with additional pages, SEO campaigns, or advertising as you grow.
          </p>
        </div>

        {/* 4 Main Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg) => (
            <WebliixCard
              key={pkg.id}
              variant={pkg.popular ? 'accent' : 'panel'}
              accentColor="primary"
              className={`p-6 sm:p-7 space-y-6 flex flex-col justify-between relative ${
                pkg.popular
                  ? 'border-theme-primary shadow-spatial-xl ring-2 ring-theme-primary/40 xl:-translate-y-2 z-10'
                  : 'border-theme-border/80'
              }`}
            >
              <div className="space-y-5">
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 theme-rounded-badge text-[11px] font-mono font-bold uppercase ${
                      pkg.popular
                        ? 'bg-theme-primary text-white shadow-sm'
                        : 'bg-theme-primary/15 text-theme-primary border border-theme-primary/30'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-theme-muted">
                    {pkg.intent}
                  </span>
                </div>

                {/* Package Name & Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-theme-muted mt-1.5 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-2 border-t border-theme-border/40">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-mono text-theme-muted uppercase font-semibold">
                      {pkg.priceLabel}
                    </span>
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-theme-primary">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-theme-muted mt-1">
                    <Clock className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                    <span>Delivery: {pkg.delivery}</span>
                  </div>
                </div>

                {/* Subnote if present (e.g. "Everything in Essential, plus:") */}
                {pkg.subnote && (
                  <div className="px-2.5 py-1 theme-rounded-card bg-theme-primary/10 border border-theme-primary/20 text-[11px] font-mono font-bold text-theme-primary">
                    {pkg.subnote}
                  </div>
                )}

                {/* Categorized Features */}
                <div className="space-y-4 pt-1">
                  {pkg.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <span className="text-[11px] font-mono font-bold text-theme-text uppercase tracking-wider block border-b border-theme-border/40 pb-1">
                        {sec.title}
                      </span>
                      <ul className="space-y-1.5 text-xs text-theme-muted">
                        {sec.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* SEO Highlight Note for Professional */}
                {pkg.seoHighlight && (
                  <div className="p-3 theme-rounded-card bg-theme-primary/5 border border-theme-primary/20 text-[11px] text-theme-muted leading-relaxed">
                    💡 <strong className="text-theme-text">Google Compliance:</strong> {pkg.seoHighlight}
                  </div>
                )}

                {/* Extra note for Ecommerce */}
                {pkg.extraNote && (
                  <div className="p-2.5 theme-rounded-card glass-spatial border border-theme-border/60 text-[11px] text-theme-muted leading-relaxed">
                    ℹ️ {pkg.extraNote}
                  </div>
                )}

                {/* Support Duration */}
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 p-2.5 theme-rounded-card border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{pkg.support}</span>
                </div>
              </div>

              {/* Package CTA Button */}
              <div className="pt-4 border-t border-theme-border/40">
                <WebliixButton
                  variant={pkg.popular ? 'primary' : 'ghost'}
                  size="md"
                  fullWidth
                  icon={ArrowUpRight}
                  onClick={() => handleSelectPackageCTA(pkg.name)}
                >
                  {pkg.ctaText}
                </WebliixButton>
              </div>
            </WebliixCard>
          ))}
        </div>

        {/* Pricing Microcopy & Disclaimer */}
        <div className="p-4 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 text-center max-w-3xl mx-auto space-y-1.5">
          <p className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider">
            Clear Scope & Zero Hidden Fees
          </p>
          <p className="text-xs text-theme-muted leading-relaxed">
            Starting packages are designed for standard business scopes. Custom requirements, additional pages, third-party software subscriptions, or ad spends are quoted transparently upfront before any work commences.
          </p>
        </div>
      </section>

      {/* HIGH-CONVERSION SECTION: "What Do You Actually Need?" */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Decision Helper
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            What Do You Actually Need?
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Not sure where to begin? Match your current business situation to the recommended starting path below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatDoYouNeedOptions.map((opt, idx) => (
            <WebliixCard
              key={idx}
              variant="panel"
              className="p-5 space-y-3 flex flex-col justify-between border border-theme-border/70 hover:border-theme-primary/60 transition-all cursor-pointer group"
              onClick={() => handleSelectPackageCTA(opt.pkgTarget)}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 theme-rounded-badge text-[10px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    {opt.badge}
                  </span>
                  <ArrowRight className="w-4 h-4 text-theme-muted group-hover:text-theme-primary group-hover:translate-x-1 transition-all" />
                </div>

                <h4 className="text-sm sm:text-base font-display font-bold text-theme-text">
                  {opt.situation}
                </h4>

                <div className="text-xs font-mono font-extrabold text-theme-primary flex items-center gap-1.5">
                  <span>→</span>
                  <span>{opt.recommendation}</span>
                </div>

                <p className="text-xs text-theme-muted leading-relaxed">
                  {opt.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-theme-border/40">
                <span className="text-xs font-mono font-bold text-theme-primary group-hover:underline flex items-center gap-1">
                  Select {opt.recommendation}
                </span>
              </div>
            </WebliixCard>
          ))}
        </div>

        <div className="text-center pt-2">
          <a href="#launchkit-form-section">
            <WebliixButton variant="primary" size="lg" icon={ArrowRight}>
              Talk to a Webliix Expert →
            </WebliixButton>
          </a>
        </div>
      </section>

      {/* 🧩 ADD-ON SERVICES SECTION (Modular Enhancements) */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Modular Enhancements
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Add-On Services
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Scale your project with modular add-ons. "Starting @" pricing gives you room to expand features without overpaying.
          </p>
        </div>

        <div className="space-y-8">
          {addonCategories.map((cat, cIdx) => {
            const Icon = cat.icon;
            return (
              <div key={cIdx} className="space-y-4">
                <div className="flex items-center gap-2.5 border-b border-theme-border/60 pb-2">
                  <div className="p-1.5 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-theme-text">
                      {cat.category}
                    </h3>
                    <span className="text-xs font-mono text-theme-muted">
                      {cat.tagline}
                    </span>
                  </div>
                </div>

                {/* Optional notice (like for Google SEO) */}
                {cat.note && (
                  <div className="p-3 theme-rounded-card bg-theme-primary/5 border border-theme-primary/20 text-xs font-mono text-theme-primary">
                    💡 <strong className="font-bold">Transparency Note:</strong> {cat.note}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, iIdx) => (
                    <WebliixCard key={iIdx} variant="panel" className="p-5 space-y-3 flex flex-col justify-between border border-theme-border/70">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-display font-bold text-theme-text">
                            {item.name}
                          </h4>
                          <span className="px-2 py-0.5 theme-rounded-badge text-[11px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30 shrink-0">
                            {item.price}
                          </span>
                        </div>

                        {item.desc && (
                          <p className="text-xs text-theme-muted leading-relaxed">
                            {item.desc}
                          </p>
                        )}

                        {item.features && (
                          <ul className="space-y-1 text-xs text-theme-muted pt-1">
                            {item.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="pt-2 border-t border-theme-border/40 flex justify-end">
                        <WebliixButton
                          variant="ghost"
                          size="sm"
                          icon={ArrowUpRight}
                          onClick={() => handleSelectPackageCTA(`Add-on: ${item.name} (${item.price})`)}
                        >
                          Add to Project
                        </WebliixButton>
                      </div>
                    </WebliixCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 📊 PACKAGE COMPARISON TABLE */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Side-By-Side Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Compare All 4 Packages
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Quickly evaluate deliverables, SEO depth, timelines, and support durations side-by-side.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-theme-border/80">
                <th className="p-3.5 font-mono font-bold text-theme-primary uppercase">Feature / Scope</th>
                <th className="p-3.5 font-mono font-bold text-theme-text uppercase">01 Essential</th>
                <th className="p-3.5 font-mono font-bold text-theme-primary uppercase bg-theme-primary/10 theme-rounded-card">
                  02 Professional ⭐
                </th>
                <th className="p-3.5 font-mono font-bold text-theme-text uppercase">03 Business Pro</th>
                <th className="p-3.5 font-mono font-bold text-theme-text uppercase">04 E-Commerce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-theme-border/40 font-mono">
              {comparisonTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-theme-primary/5 transition-colors">
                  <td className="p-3.5 font-sans font-semibold text-theme-text">{row.feature}</td>
                  <td className="p-3.5 text-theme-muted">{row.essential}</td>
                  <td className="p-3.5 font-bold text-theme-primary bg-theme-primary/5">{row.professional}</td>
                  <td className="p-3.5 text-theme-muted">{row.businessPro}</td>
                  <td className="p-3.5 text-theme-muted">{row.ecommerce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 🗺️ EXECUTION PROCESS ROADMAP */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Execution Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            From Initial Brief to Live Website
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

      {/* ❓ FREQUENTLY ASKED QUESTIONS */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Clear Answers to Common Questions
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Everything you need to know about pricing, branding, SEO inclusions, and customizations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <WebliixCard
                key={idx}
                variant="panel"
                className="p-5 space-y-3 cursor-pointer transition-all duration-200 border border-theme-border/60 hover:border-theme-primary/40"
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

      {/* 📝 LEAD CAPTURE / ENQUIRY FORM */}
      <section id="launchkit-form-section" className="space-y-6 pt-6 border-t border-theme-border/60 scroll-mt-24">
        <WebliixCard
          variant="panel"
          className="p-6 sm:p-10 border border-theme-primary/40 shadow-spatial-xl relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/15 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-theme-primary/30">
                <Sparkles className="w-3.5 h-3.5" /> Start Your Business Launch
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-theme-text">
                Ready to Launch Your Business Online?
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                Tell us about your business, your goals, and what you need. We will configure your LaunchKit proposal within 2 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-bold text-theme-text">
                  LaunchKit Enquiry Received!
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
                        package: '02 — PROFESSIONAL ⭐ (Starting @ ₹19,999)',
                        budget: '₹15,000–₹35,000',
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
                method="POST"
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
                      placeholder="e.g. Rahul Sharma / Sarah Jenkins"
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
                      placeholder="+91 93101 81569 or +1..."
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
                      placeholder="e.g. India, USA, UK, Canada, Australia, UAE..."
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
                      <option value="Branding & Logo">Logo & Brand Identity</option>
                      <option value="Local SEO & Google Maps">Local SEO & Google Maps</option>
                      <option value="E-Commerce Store">E-Commerce Online Store</option>
                      <option value="Paid Advertising">Google & Meta Ads Setup</option>
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
                      <option value="01 — ESSENTIAL (Starting @ ₹9,999)">01 — ESSENTIAL (Starting @ ₹9,999)</option>
                      <option value="02 — PROFESSIONAL ⭐ (Starting @ ₹19,999)">02 — PROFESSIONAL ⭐ Most Popular (Starting @ ₹19,999)</option>
                      <option value="03 — BUSINESS PRO (Starting @ ₹34,999)">03 — BUSINESS PRO (Starting @ ₹34,999)</option>
                      <option value="04 — E-COMMERCE (Starting @ ₹29,999)">04 — E-COMMERCE (Starting @ ₹29,999)</option>
                      <option value="Custom Add-ons / Individual Services">Custom Add-ons / Individual Services</option>
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
                      <option value="Under ₹15,000">Under ₹15,000</option>
                      <option value="₹15,000–₹35,000">₹15,000–₹35,000</option>
                      <option value="₹35,000–₹60,000">₹35,000–₹60,000</option>
                      <option value="₹60,000+">₹60,000+</option>
                      <option value="Not Sure">Not Sure (Let's Discuss)</option>
                    </WebliixSelect>
                  </WebliixFieldGroup>

                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="lk-targetMarket" required>Target City / Market</WebliixLabel>
                    <WebliixInput
                      id="lk-targetMarket"
                      name="targetMarket"
                      type="text"
                      required
                      placeholder="e.g. Delhi NCR, Mumbai, National India, International..."
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
                    placeholder="What products or services do you offer? Who are your ideal customers? What are your key website and growth goals?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </WebliixFieldGroup>

                {/* Global Trust Note */}
                <div className="flex items-start gap-2 p-3 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 text-[11px] text-theme-muted">
                  <Globe className="w-4 h-4 text-theme-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Serving businesses across India & Worldwide:</strong> Clear milestone roadmap, 100% source code ownership, and fast turnaround.
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
                    {submitting ? 'Submitting Request...' : 'Get My LaunchKit Proposal'}
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
          <Sparkles className="w-3.5 h-3.5" /> Turnkey Business Launch
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Launch Your Business with Everything You Need?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Tell us about your business, your goals, and what you need from your website. We will recommend the exact LaunchKit package that fits your stage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#launchkit-form-section">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Get Your Business Online
            </WebliixButton>
          </a>
          <Link to="/contact">
            <WebliixButton variant="ghost" size="lg">
              Talk to a Webliix Expert
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>
    </div>
  );
}