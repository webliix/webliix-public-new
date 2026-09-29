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
import { submitPublicLead } from '../services/leadService';

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
      const reqText = `[Country: ${formData.country || 'N/A'}] [Current Website: ${formData.website || 'None'}] [Target Market: ${formData.targetMarket || 'N/A'}] ${formData.message || ''}`;
      await submitPublicLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.businessName,
        serviceRequested: formData.package || 'LaunchKit Tier',
        requirements: reqText,
        source: 'LAUNCHKIT_PAGE',
        page: '/launchkit',
      });
      setSubmitted(true);
      if (showToast) {
        showToast('LaunchKit inquiry submitted! Our project team will review your requirements and contact you.', 'success');
      }
    } catch (err) {
      if (showToast) {
        showToast(err.message || 'Failed to submit LaunchKit inquiry. Please try again.', 'error');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const cleanPhone = siteConfig.brand.contactPhone.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=Hi%20Webliix,%20I'm%20interested%20in%20${encodeURIComponent(
    formData.package || 'LaunchKit'
  )}%20for%20my%20business%20${encodeURIComponent(formData.businessName || '')}.`;

  // 1. What Your Business Launch Can Include (8 Core Pillars)
  const whatEveryLaunchIncludes = [
    {
      icon: Palette,
      title: 'Brand Identity',
      items: 'Logo • Colours • Fonts • Visual Direction'
    },
    {
      icon: Layout,
      title: 'Business Website',
      items: 'Responsive • Clear • Fast • Lead-focused'
    },
    {
      icon: MapPin,
      title: 'Google Business Presence',
      items: 'Business Profile • Maps • Search Console'
    },
    {
      icon: Search,
      title: 'SEO Foundation',
      items: 'Keyword Research • On-page SEO • Technical Structure'
    },
    {
      icon: PhoneCall,
      title: 'Customer Enquiries',
      items: 'WhatsApp • Calls • Forms • Contact Paths'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      items: 'GA4 • Search Console • Conversion Tracking'
    },
    {
      icon: Share2,
      title: 'Business Social Profiles',
      items: 'Profiles • Covers • Starter Brand Assets'
    },
    {
      icon: Rocket,
      title: 'Launch Support',
      items: 'Deployment • Testing • Post-launch Support'
    }
  ];

  // 2. High-Conversion "Which Business Launch Package Fits Your Needs?" Scenarios
  const whatDoYouNeedOptions = [
    {
      situation: 'Starting a new business?',
      recommendation: '01 — ESSENTIAL',
      badge: 'Get Online',
      pkgTarget: '01 — ESSENTIAL (Starting @ ₹9,999)',
      desc: 'Start with the essentials: a professional website, basic brand setup, Google Business Profile setup and core contact options.'
    },
    {
      situation: 'Need a stronger brand and website?',
      recommendation: '02 — PROFESSIONAL ⭐',
      badge: 'Build Your Brand',
      pkgTarget: '02 — PROFESSIONAL ⭐ (Starting @ ₹19,999)',
      desc: 'Combine a more complete visual identity, multi-page website, stronger lead sections and a deeper local SEO foundation.'
    },
    {
      situation: 'Want to improve your Google visibility?',
      recommendation: '02 — PROFESSIONAL + SEO',
      badge: 'Search Visibility',
      pkgTarget: '02 — PROFESSIONAL ⭐ (Starting @ ₹19,999)',
      desc: 'Add keyword research, page optimization, internal linking, Google Business Profile optimization and technical SEO work.'
    },
    {
      situation: 'Need a complete business website system?',
      recommendation: '03 — BUSINESS PRO',
      badge: 'Growth Setup',
      pkgTarget: '03 — BUSINESS PRO (Starting @ ₹34,999)',
      desc: 'A larger website structure with service and location content, blog setup, analytics, lead tracking and broader digital foundations.'
    },
    {
      situation: 'Want to sell products online?',
      recommendation: '04 — E-COMMERCE',
      badge: 'Online Store',
      pkgTarget: '04 — E-COMMERCE (Starting @ ₹29,999)',
      desc: 'Launch an online store with product categories, shopping cart, checkout, payment integration and basic store SEO.'
    },
    {
      situation: 'Already have a website?',
      recommendation: 'Custom Add-Ons / Services',
      badge: 'Improve Existing Site',
      pkgTarget: 'Custom Add-ons / Individual Services',
      desc: 'Choose website redesign, SEO, branding, advertising, lead systems or website care according to the specific gaps in your current setup.'
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
      desc: 'A practical business website package for startups, professionals and small businesses that need a credible online presence.',
      delivery: '5–10 working days',
      support: 'Basic website launch support',
      ctaText: 'Start My Business',
      sections: [
        {
          title: 'Brand Foundation',
          items: [
            'Logo design or logo refinement',
            'Brand colour palette',
            'Font / typography selection',
            'Light & dark logo versions',
            'Basic brand usage guidance'
          ]
        },
        {
          title: 'Business Website',
          items: [
            'Professional responsive website',
            'Up to 3–5 pages',
            'Mobile-first page structure',
            'Business-focused interface',
            'WhatsApp & click-to-call buttons',
            'Contact / enquiry form',
            'Google Maps integration',
            'Social media links'
          ]
        },
        {
          title: 'Google & SEO Foundation',
          items: [
            'Google Business Profile setup',
            'Basic keyword research',
            'SEO-friendly page structure',
            'Unique page titles & descriptions',
            'SEO-friendly URLs',
            'XML Sitemap & Robots.txt',
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
      desc: 'For businesses that need a stronger brand identity, more detailed website content and a stronger foundation for customer enquiries and local search.',
      subnote: 'Everything in Essential, plus:',
      delivery: '10–15 working days',
      support: '90 days post-launch support',
      ctaText: 'Build My Business Brand',
      seoHighlight: 'The package includes practical SEO foundations such as structured page content, internal linking, metadata and relevant structured data where appropriate.',
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
          title: 'Business Website',
          items: [
            'Up to 7–10 pages',
            'Custom UI design & clear CTA sections',
            'Service / product content sections',
            'Client testimonials showcase',
            'FAQ section',
            'Gallery / portfolio showcase',
            'WhatsApp enquiry flow & advanced contact forms',
            'Google Maps & social integrations'
          ]
        },
        {
          title: 'Local SEO Foundation',
          items: [
            'Local keyword research & service mapping',
            'Relevant location content optimization',
            'On-page SEO & internal linking',
            'LocalBusiness & Organization structured data where appropriate',
            'FAQ structured data where applicable',
            'Google Business Profile optimization',
            'Search Console setup & conversion tracking'
          ]
        },
        {
          title: 'Content & Copywriting',
          items: [
            'SEO-focused content structure',
            'Homepage search-intent optimization',
            'Service-page content optimization',
            'FAQ and CTA copy improvement'
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
      desc: 'For businesses that need a broader website architecture, richer content, stronger analytics and a connected digital launch foundation.',
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
            'Relevant location pages & portfolio / case studies',
            'Testimonials & review content sections',
            'FAQ system & blog setup',
            'Lead-generation sections & WhatsApp conversion flow',
            'Advanced multi-step enquiry forms'
          ]
        },
        {
          title: 'SEO & Search Visibility',
          items: [
            'Competitor and search-intent keyword research',
            'Service + location content mapping where relevant',
            'Technical SEO setup & advanced on-page SEO',
            'Relevant JSON-LD structured data',
            'Google Business Profile & local search optimization',
            'Search Console, GA4 & event tracking configuration',
            'Core Web Vitals review & SEO-ready content structure'
          ]
        },
        {
          title: 'Lead Generation & Growth Foundation',
          items: [
            'WhatsApp CTA & call tracking setup',
            'Form conversion and lead source tracking',
            'CRM-ready lead structure & email notifications',
            'Google Ads conversion tracking & Meta Pixel setup',
            'Social sharing optimization',
            'Basic review and reputation workflow'
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
      desc: 'For businesses that want to sell products online with a professional storefront, checkout experience and basic search optimization.',
      delivery: '10–18 working days',
      support: '60 days post-launch support',
      ctaText: 'Start Selling Online',
      subnote: 'Includes:',
      sections: [
        {
          title: 'Store Features Included',
          items: [
            'Professional e-commerce website',
            'Product & category architecture with mobile-first design',
            'Product search & filtering capabilities where required',
            'Shopping cart & checkout flow',
            'Razorpay / UPI / Stripe payment integration',
            'WhatsApp support & direct product enquiry option',
            'Shipping configuration & tax setup',
            'Basic product SEO & relevant structured data',
            'Google Analytics, Search Console & conversion tracking',
            'Social media integration & basic store branding',
            'Up to 25 products setup included'
          ]
        }
      ],
      extraNote: 'Additional products, advanced filters, marketplace integrations, shipping APIs and custom functionality are quoted separately.'
    }
  ];

  // 4. Detailed Additional Website, SEO &amp; Marketing Services
  const addonCategories = [
    {
      category: 'Branding Add-Ons',
      tagline: 'Build a consistent visual identity',
      icon: Palette,
      items: [
        {
          name: 'Logo Design',
          price: 'Starting @ ₹2,999',
          features: ['Logo concepts & revisions', 'Logo variations', 'PNG / JPG / SVG / PDF formats', 'Light & dark background versions']
        },
        {
          name: 'Brand Identity',
          price: 'Starting @ ₹6,999',
          features: ['Logo design', 'Brand colours & typography', 'Business card & letterhead', 'Email signature & social profile kit', 'Basic brand guide']
        },
        {
          name: 'Brand Kit',
          price: 'Starting @ ₹9,999',
          features: ['Complete visual identity system', 'Brand guidelines document', 'Business stationery mockups', 'Editable social post templates', 'Digital brand assets']
        }
      ]
    },
    {
      category: 'Website Add-Ons',
      tagline: 'Add pages and website functionality',
      icon: Layout,
      items: [
        { name: 'Additional Page', price: 'Starting @ ₹999', desc: 'Add a custom service, landing or informational page to the website.' },
        { name: 'High-Converting Landing Page', price: 'Starting @ ₹2,999', desc: 'Create a focused landing page for an advertising campaign, service or offer.' },
        { name: 'Blog / CMS System', price: 'Starting @ ₹4,999', desc: 'Publish articles, guides, news or business updates through a content system.' },
        { name: 'Portfolio / Case Study Section', price: 'Starting @ ₹2,999', desc: 'Showcase selected projects, services delivered, results and visual work.' },
        { name: 'Advanced Form / Lead System', price: 'Starting @ ₹2,999', desc: 'Add multi-step forms, file uploads, conditional fields or webhook integrations.' },
        { name: 'Payment Gateway Integration', price: 'Starting @ ₹2,999', desc: 'Set up supported payment options such as Razorpay, UPI or Stripe.' },
        { name: 'Additional Product Setup', price: 'Starting @ ₹499 / product', desc: 'Add product images, variants, descriptions, SKUs and SEO details.' },
        { name: 'Website Redesign', price: 'Starting @ ₹7,999', desc: 'Refresh an outdated website with a modern responsive structure while reviewing important existing URLs.' }
      ]
    },
    {
      category: 'Google & SEO',
      tagline: 'Improve organic and local search visibility',
      icon: Search,
      note: 'SEO services focus on the work that helps search engines understand and discover your website; rankings cannot be guaranteed.',
      items: [
        {
          name: 'Local SEO Package',
          price: 'Starting @ ₹7,999 / month',
          features: [
            'Google Business Profile optimization',
            'Local keyword research & service mapping',
            'On-page SEO & location content optimization',
            'Local content & Search Console monitoring',
            'Monthly performance reporting'
          ]
        },
        {
          name: 'SEO Growth Package',
          price: 'Starting @ ₹14,999 / month',
          features: [
            'Technical & on-page SEO',
            'Keyword strategy & content optimization',
            'Content publishing & internal linking',
            'Local SEO & Search Console monitoring',
            'Monthly performance reporting'
          ]
        },
        {
          name: 'Google Business Profile Management',
          price: 'Starting @ ₹4,999 / month',
          features: [
            'Profile information & service updates',
            'Business posts and profile activity',
            'Review response guidance',
            'Local search visibility improvements'
          ]
        }
      ]
    },
    {
      category: 'Marketing Add-Ons',
      tagline: 'Support customer acquisition and follow-up',
      icon: Target,
      items: [
        { name: 'Google Ads Management', price: 'Starting @ ₹7,999/mo + Ad Spend', desc: 'Search advertising, campaign structure, conversion tracking and negative keyword management.' },
        { name: 'Meta Ads Management', price: 'Starting @ ₹7,999/mo + Ad Spend', desc: 'Facebook and Instagram campaigns, audience targeting, retargeting and creative testing.' },
        { name: 'Social Media Management', price: 'Starting @ ₹7,999/mo', desc: 'Planned social media posts, basic brand consistency, scheduling and publishing support.' },
        { name: 'WhatsApp Business Setup', price: 'Starting @ ₹2,999', desc: 'Catalog, business profile, quick replies, greeting and away-message setup.' },
        { name: 'WhatsApp Automation Flow', price: 'Starting @ ₹7,999', desc: 'Automated chat steps, lead capture triggers and notification workflows.' },
        { name: 'CRM / Lead Management', price: 'Starting @ ₹4,999', desc: 'Lead pipeline configuration, notifications and follow-up workflow setup.' },
        { name: 'AI Chatbot Integration', price: 'Starting @ ₹9,999', desc: 'Business information chatbot integration for handling common customer questions.' }
      ]
    },
    {
      category: 'Website Care',
      tagline: 'Keep your website maintained after launch',
      icon: Wrench,
      items: [
        {
          name: 'Website Care & Maintenance Plan',
          price: 'Starting @ ₹1,999 / month',
          features: [
            'Website updates & content changes',
            'Technical monitoring',
            'Security checks',
            'Backup monitoring',
            'Speed & performance checks',
            'Minor updates & technical support'
          ]
        }
      ]
    }
  ];

  // 5. Package Comparison Table (All 4 Tiers)
  const comparisonTable = [
    { feature: 'Starting Price', essential: '₹9,999', professional: '₹19,999', businessPro: '₹34,999', ecommerce: '₹29,999' },
    { feature: 'Core Pages Included', essential: '3–5 Pages', professional: '7–10 Pages', businessPro: '12–15 Pages', ecommerce: 'Store + Product Pages' },
    { feature: 'Logo / Brand Design', essential: 'Basic Logo & Colors', professional: 'Brand Starter Kit', businessPro: 'Full Brand System + 3 Posts', ecommerce: 'Basic Store Branding' },
    { feature: 'Mobile-First Responsive UI', essential: '✓', professional: '✓', businessPro: '✓', ecommerce: '✓' },
    { feature: 'Google Business Profile', essential: 'Setup', professional: 'Optimization', businessPro: 'Expanded Optimization', ecommerce: 'Setup' },
    { feature: 'Technical & On-Page SEO', essential: 'Basic Setup', professional: 'Expanded SEO Foundation', businessPro: 'Advanced SEO Foundation', ecommerce: 'Product SEO Foundation' },
    { feature: 'Lead Capture & WhatsApp CTA', essential: 'Standard Form + CTA', professional: 'Advanced Forms + CTA', businessPro: 'Tracking + CRM Ready', ecommerce: 'Cart + Product Enquiries' },
    { feature: 'E-Commerce / Payment Gateway', essential: '—', professional: 'Optional Add-on', businessPro: 'Optional Add-on', ecommerce: 'Included (25 Products)' },
    { feature: 'Google Analytics & Search Console', essential: '✓', professional: '✓ + Conversion Tracking', businessPro: '✓ + Event / Pixel Tracking', ecommerce: '✓ + Purchase Tracking' },
    { feature: 'Professional Business Email', essential: '1 Account Setup', professional: 'Included', businessPro: 'Included', ecommerce: 'Included' },
    { feature: 'Post-Launch Support', essential: 'Launch Support', professional: '90 Days Included', businessPro: '180 Days Included', ecommerce: '60 Days Included' },
    { feature: 'Standard Delivery Time', essential: '5–10 Working Days', professional: '10–15 Working Days', businessPro: '15–25 Working Days', ecommerce: '10–18 Working Days' }
  ];

  // 6. FAQs (Exact 7 Questions)
  const faqs = [
    {
      q: 'How much does a business website package cost?',
      a: 'LaunchKit packages start at ₹9,999 for the Essential package. The final project cost depends on the number of pages, branding, e-commerce requirements, SEO scope, integrations and other custom functionality.'
    },
    {
      q: 'Can Webliix provide the website and branding together?',
      a: 'Yes. LaunchKit can combine website development with logo design, brand colours, typography, business cards, social assets, business email and other launch requirements according to the selected package.'
    },
    {
      q: 'Do LaunchKit packages include SEO?',
      a: 'Each package includes an SEO foundation appropriate to its scope. Additional local SEO, content optimization, technical SEO and ongoing search work can be added when required.'
    },
    {
      q: 'Can you help my business appear on Google?',
      a: 'Webliix can set up or optimize eligible Google Business Profiles and implement technical and on-page SEO foundations. Search visibility depends on relevance, competition, location, site quality and other factors, so specific rankings cannot be guaranteed.'
    },
    {
      q: 'Can I customise a LaunchKit package?',
      a: 'Yes. LaunchKit packages are starting scopes. Additional pages, website redesign, SEO, e-commerce features, advertising, lead systems, CRM integrations and other services can be added based on your requirements.'
    },
    {
      q: 'Do you provide Google Business Profile setup?',
      a: 'Yes. Google Business Profile setup and optimization are available according to the selected package and the eligibility of the business.'
    },
    {
      q: 'Do you provide website maintenance after launch?',
      a: 'Yes. Website care and maintenance can be added to a LaunchKit project or purchased separately according to the website platform and support requirements.'
    },
    {
      q: 'Do you work with businesses outside India?',
      a: 'Yes. Webliix can work with clients in India and international markets. Scope, communication, payment terms and delivery requirements are discussed for each project.'
    }
  ];

  // 7. Execution Process
  const processRoadmap = [
    { num: '01', title: 'Discovery & Goals', desc: 'We understand your business, services, target customers, website goals and preferred launch scope.' },
    { num: '02', title: 'Content & Brand Assets', desc: 'You provide your business information and available assets, or we help structure the required brand and website content.' },
    { num: '03', title: 'Design & Architecture', desc: 'We organize the page structure, user journey, content hierarchy and conversion paths around your audience.' },
    { num: '04', title: 'Development & Build', desc: 'We develop the agreed responsive website and implement the selected integrations and functionality.' },
    { num: '05', title: 'SEO & Tracking Setup', desc: 'We configure page metadata, internal linking, relevant structured data, Search Console, analytics and selected conversion tracking.' },
    { num: '06', title: 'Review & Revisions', desc: 'You review the development preview and provide feedback within the agreed project revision scope.' },
    { num: '07', title: 'Live Launch', desc: 'We connect the domain, configure HTTPS, publish the approved website and check the live implementation.' },
    { num: '08', title: 'Dedicated Support', desc: 'Your included post-launch support period helps with agreed technical fixes and launch-related updates.' }
  ];

  const canonicalUrl = `${siteConfig.brand.website || 'https://webliix.com'}/launch-kit`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Design, Branding & SEO Launch Packages | Webliix',
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
    description: 'Website design, branding and SEO launch packages for businesses, startups and professionals, including business websites, brand identity, Google Business Profile setup and SEO foundations.',
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
        <title>Website Design, Branding & SEO Packages for Businesses | Webliix</title>
        <meta
          name="description"
          content="Website design, branding and SEO packages for businesses, startups and professionals. Launch with a professional website, brand identity, Google Business Profile setup and SEO foundations from ₹9,999."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Website Design, Branding & SEO Packages for Businesses | Webliix" />
        <meta
          property="og:description"
          content="Website design, branding and SEO packages for businesses, startups and professionals. Launch with a professional website, brand identity, Google Business Profile setup and SEO foundations from ₹9,999."
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
          Website Design, Branding & <span className="text-shimmer">SEO Packages</span> for Businesses
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
            What Your Business Launch Can Include
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
            Choose Your Website &amp; Business Launch Package
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

      {/* HIGH-CONVERSION SECTION: "Which Business Launch Package Fits Your Needs?" */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Decision Helper
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Which Business Launch Package Fits Your Needs?
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
              Discuss Your Business Launch →
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
            Additional Website, SEO &amp; Marketing Services
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
            Compare LaunchKit Packages
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
            From Business Brief to Live Website
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Our structured workflow keeps the project focused from requirements and content through development, review and launch.
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
            LaunchKit FAQs
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
                Ready to Plan Your Business Website & Digital Launch?
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                Tell us about your business, your goals and what you need. We will review the requirements and prepare the appropriate LaunchKit scope.
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
                  Thank you, <strong className="text-theme-text">{formData.name}</strong>. Your LaunchKit enquiry has been received and our team will review the requirements.
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
                    <WebliixLabel htmlFor="lk-targetMarket" required>Target Market / Customer Location</WebliixLabel>
                    <WebliixInput
                      id="lk-targetMarket"
                      name="targetMarket"
                      type="text"
                      required
                      placeholder="e.g. Delhi NCR, California, London, Toronto, Dubai, International..."
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
                    <strong>Serving businesses in India & international markets:</strong> Clear scope, milestone-based delivery and agreed project assets provided at completion.
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
          Ready to Launch Your Business Website &amp; Digital Presence?
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