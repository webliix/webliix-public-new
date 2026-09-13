import logoDark from '../assets/lightlogo.png';
import logoLight from '../assets/logo.png';
import iconMark from '../assets/icon-png.png';
import himanshuImg from '../assets/himanshu.jpg';
import abdulImg from '../assets/abdul.jpg';

import auradrishtiImg from '../assets/logos/auradrishti.png';
import thehubImg from '../assets/logos/thehub.png';
import loanheavenImg from '../assets/logos/loanheaven.png';
import kitchen9villageImg from '../assets/logos/kitchen9village.png';
import connectifyImg from '../assets/logos/connectify.png';
import ghomesImg from '../assets/logos/ghomes.png';
import janaushadiImg from '../assets/logos/janaushadi.jpg';
import sunsdustImg from '../assets/logos/sunsdust.png';

import peoriaLogo from '../assets/logos/peoria.svg';

import client1 from '../assets/logos/client1.jpg';
import client2 from '../assets/logos/client2.png';
import client3 from '../assets/logos/client3.png';
import client4 from '../assets/logos/client4.png';
import client5 from '../assets/logos/client5.jpg';
import client6 from '../assets/logos/client6.png';
import client7 from '../assets/logos/client7.png';
import client8 from '../assets/logos/client8.png';


// Single Source of Truth for ALL Website Content & Data
export const siteConfig = {
  brand: {
    name: 'Webliix',
    tagline: '< Your Success is our Code />',
    serviceSummary: 'Website Design, GMB, SEO & Software Development',
    logoDark,
    logoLight,
    iconMark,
    founded: '2025',
    headline: 'Empower Your Digital Journey',
    heroTag: 'FULL-SERVICE • GLOBAL REACH',
    heroTyping: [
      '< Your Success is our Code />',
      '< Web Development & Branding />',
      '< Local SEO & GMB Optimization />',
      '< E-Commerce & Custom Software />'
    ],

    heroSubtext: 'Building immersive digital experiences, brands that resonate, and SEO engines that dominate — tailored for NCR India, USA, Canada & Germany.',
    contactEmail: 'contact@webliix.com',
    contactPhone: '+91 93101 81569',
    alternatePhone: '+91 88106 50511',
    address: '1st Floor, Hotel Raj Inn, Tetri, Naugachia Road, Naugachia, Bhagalpur, Bihar - 853204, India',
    geoReach: ['NCR India', 'USA', 'Canada', 'Germany'],
    socials: {
      linkedin: 'https://www.linkedin.com/company/webliix/',
      instagram: 'https://www.instagram.com/webliixmedia',
      facebook: 'https://www.facebook.com/webliix',
      github: 'https://github.com/webliix/'
    }
  },

  about: {
    mission: 'Every business deserves a commanding digital presence. We craft immersive, high-converting digital experiences that don’t just look beautiful — they perform.',
    vision: 'To empower 1,000+ businesses globally with state-of-the-art websites, organic search dominance, and seamless brand identities under one roof.',
    values: [
      { icon: '💡', title: 'Strategic Execution', desc: 'Designs built to convert visitors into real paying customers.' },
      { icon: '🚀', title: 'Top-Speed Performance', desc: 'Fast-loading, SEO-optimized web systems built with modern frameworks.' },
      { icon: '🤝', title: 'Transparent Partnership', desc: 'Dedicated project management with zero hidden costs or delays.' },
      { icon: '🔄', title: 'Ongoing Support', desc: 'Free post-launch monitoring and continuous security checks included.' }
    ],
    timeline: [
      { year: 'Apr 2025', title: 'Webliix Founded', desc: 'Himanshu and Abdul launch Webliix with a clear vision: world-class digital solutions for every business size.' },
      { year: 'May 2025', title: 'First 10 Clients', desc: 'Within weeks, Webliix lands its first 10 clients across NCR India, delivering websites, SEO, and branding.' },
      { year: 'Jul 2025', title: '25 Projects Milestone', desc: 'The team hits 25 completed projects, spanning e-commerce, service platforms, and marketing campaigns.' },
      { year: 'Sep 2025', title: 'International Reach', desc: 'Webliix expands to brands in the USA, Canada, and Germany operating across time zones.' },
      { year: 'Dec 2025', title: '50+ Projects Shipped', desc: 'Achieved 50+ delivered projects with a 98% client satisfaction rate.' },
      { year: '2026', title: 'Scaling Digital Systems', desc: 'Expanding services, deeper AI integration, and a relentless focus on client ROI.' }
    ],
    process: [
      { step: '01', title: 'Discover', desc: 'We analyze your business goals, target audience, and competition before writing a single line of code.' },
      { step: '02', title: 'Strategize', desc: 'A tailored roadmap is created connecting design, technology, and SEO into one coherent growth plan.' },
      { step: '03', title: 'Engineer', desc: 'Our team builds the platform with precision: responsive UI, fast performance, and clean code.' },
      { step: '04', title: 'Launch & Grow', desc: 'We test thoroughly, deploy securely, and monitor post-launch performance to ensure day-one success.' }
    ]
  },

  team: [
    {
      name: 'Himanshu Sharma',
      role: 'Founder & Managing Director',
      bio: 'Leading Webliix vision to deliver world-class websites, SEO, and digital growth systems for modern businesses.',
      image: himanshuImg
    },
    {
      name: 'Abdul Malik',
      role: 'Co-Founder & Technical Lead',
      bio: 'Specializing in full-stack architecture, interactive web apps, and high-performance frontend solutions.',
      image: abdulImg
    }
  ],

  clients: [
    { name: 'Peoria Home Cleaning', logo: 'https://res.cloudinary.com/vhth8clt/image/upload/v1788985903/peoria.png' },
    { name: 'Client 1', logo: client1 },
    { name: 'Client 2', logo: client2 },
    { name: 'Client 3', logo: client3 },
    { name: 'Client 4', logo: client4 },
    { name: 'Client 5', logo: client5 },
    { name: 'Client 6', logo: client6 },
    { name: 'Client 7', logo: client7 },
    { name: 'Client 8', logo: client8 },
  ],




  stats: [
    { value: 120, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 5, suffix: '+', label: 'Countries Served' },
    { value: 3, suffix: 'x', label: 'Avg. Traffic Growth' }
  ],

services: [
  {
    id: 'brand-launchkit',
    title: 'Webliix LaunchKit',
    tag: 'All in One',
    icon: '🚀',
    shortDesc:
      'All-in-one business launch package — branding, website, business email, Google Business Profile, SEO foundations and launch support.',
    fullDesc:
      'Launch your business professionally with a coordinated digital setup covering brand identity, a high-performance responsive website, business email, Google Business Profile support, SEO foundations, analytics and lead-generation essentials.',
    startingPrice: 'Starting at ₹9,999',
    features: [
      'Professional Logo & Brand Identity',
      'Business Website Development',
      'Domain, SSL & Professional Email Setup',
      'Google Business Profile Setup & Optimization',
      'On-Page SEO & Analytics Foundation',
      'WhatsApp Lead Generation Integration',
      'Business Launch Strategy & Guidance',
      'Post-Launch Support'
    ],
    link: '/launch-kit'
  },

  {
    id: 'quick-ecommerce',
    title: 'Fast E-Commerce Store Launch',
    tag: 'Trending',
    icon: '⚡',
    shortDesc:
      'Launch a professional online store in 5–7 days with products, payments, shipping and mobile optimization.',
    fullDesc:
      'Build a conversion-focused ecommerce website for your products or services with product catalogues, shopping cart, checkout, payment gateway integration, shipping configuration, analytics and SEO foundations.',
    startingPrice: 'Starting at ₹12,999',
    features: [
      'Shopify, WooCommerce or Custom React Store',
      'Up to 50 Initial Product Listings',
      'Product Categories & Detail Pages',
      'Shopping Cart & Secure Checkout',
      'Payment Gateway Integration',
      'Shipping & Order Management Setup',
      'Mobile-Responsive Store Design',
      'Basic SEO & Analytics Tracking'
    ],
    link: '/ecommerce-store'
  },

  {
    id: 'website-dev',
    title: 'Website Development',
    tag: 'Core Service',
    icon: '💻',
    shortDesc:
      'Professional business websites, landing pages and high-performance web experiences built around your goals.',
    fullDesc:
      'From simple business websites and portfolio sites to advanced dynamic websites and interactive web experiences, we build fast, responsive and scalable solutions designed for usability, SEO and conversions.',
    startingPrice: 'Starting at ₹9,999',
    features: [
      'Business & Corporate Websites',
      'Landing Pages & Marketing Websites',
      'Static & Dynamic Websites',
      'Custom UI/UX Design',
      'React, Next.js & Modern Web Technologies',
      'Mobile, Tablet & Desktop Optimization',
      'Performance & Technical SEO Foundation',
      'SSL, Security & Deployment Setup'
    ],
    link: '/website-development'
  },

  {
    id: 'web-app-development',
    title: 'Custom Web Application Development',
    tag: 'Advanced',
    icon: '🖥️',
    shortDesc:
      'Custom web applications, portals and business platforms built for complex workflows and scalable operations.',
    fullDesc:
      'We design and develop custom web applications for businesses that need more than a traditional website — including dashboards, portals, SaaS platforms, customer systems, booking platforms and workflow applications.',
    startingPrice: 'Custom Quote',
    features: [
      'Custom Web Application Architecture',
      'React & Next.js Frontends',
      'Java Spring Boot & Node.js Backends',
      'REST API & Third-Party Integrations',
      'Authentication & Role-Based Access',
      'Admin & Analytics Dashboards',
      'Database Design & Integration',
      'Cloud Deployment & Scalable Architecture'
    ],
    link: '/web-app-development'
  },

  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    tag: 'Mobile',
    icon: '📱',
    shortDesc:
      'Custom Android and iOS applications designed for startups, businesses and scalable digital products.',
    fullDesc:
      'Build a professional mobile application for Android, iPhone and other supported platforms with modern UI/UX, secure APIs, authentication, notifications, payments and scalable backend integration.',
    startingPrice: 'Starting from Custom Quote',
    features: [
      'Android App Development',
      'iOS App Development',
      'Cross-Platform Mobile Apps',
      'Flutter & Modern Mobile Technologies',
      'Custom Mobile UI/UX Design',
      'REST API & Backend Integration',
      'User Authentication & Role Management',
      'Push Notifications',
      'Payment Gateway Integration',
      'App Analytics & Crash Monitoring',
      'Google Play Store Deployment Support',
      'Apple App Store Deployment Support'
    ],
    link: '/mobile-app-development'
  },

  {
    id: 'software-development',
    title: 'Custom Software Development',
    tag: 'Business Solutions',
    icon: '⚙️',
    shortDesc:
      'Custom business software designed to automate workflows, improve operations and solve specific business requirements.',
    fullDesc:
      'We develop custom software systems for companies that need tailored solutions for internal operations, customer management, automation, reporting, finance, inventory and business workflows.',
    startingPrice: 'Custom Quote',
    features: [
      'Custom Business Software',
      'Workflow Automation',
      'Employee & User Management',
      'Inventory & Operations Systems',
      'Reporting & Analytics',
      'API Integrations',
      'Secure Authentication',
      'Role-Based Access Control',
      'Cloud & Database Integration',
      'Scalable Software Architecture'
    ],
    link: '/web-app-development'
  },

  {
    id: 'saas-development',
    title: 'SaaS Product Development',
    tag: 'Startup',
    icon: '☁️',
    shortDesc:
      'Build scalable SaaS products with subscriptions, user accounts, dashboards, APIs and cloud-ready architecture.',
    fullDesc:
      'Turn your software idea into a scalable SaaS platform with multi-user architecture, subscription workflows, dashboards, authentication, billing integrations, APIs and cloud deployment.',
    startingPrice: 'Custom Quote',
    features: [
      'SaaS Product Architecture',
      'Multi-User & Multi-Tenant Systems',
      'Subscription & Billing Integration',
      'User Authentication',
      'Role-Based Access Control',
      'Admin & Customer Dashboards',
      'REST API Development',
      'Database & Cloud Infrastructure',
      'Notifications & Email Workflows',
      'Scalable Backend Architecture'
    ],
    link: '/web-app-development'
  },

  {
    id: 'crm-erp-development',
    title: 'CRM & ERP Software',
    tag: 'Enterprise',
    icon: '📊',
    shortDesc:
      'Custom CRM and ERP systems that centralize customers, sales, projects, finance, HR and business operations.',
    fullDesc:
      'Build an integrated business management platform tailored to your organization, including CRM, customer management, sales pipelines, projects, tasks, invoicing, finance, HR, tickets, notifications and reporting.',
    startingPrice: 'Custom Quote',
    features: [
      'Custom CRM Development',
      'ERP Software Development',
      'Customer & Lead Management',
      'Sales Pipeline Management',
      'Project & Task Management',
      'Invoices & Payment Management',
      'HR & Employee Management',
      'Support Ticket Management',
      'Business Reports & Dashboards',
      'Workflow Automation',
      'Role-Based Access Control',
      'API & Third-Party Integrations'
    ],
    link: '/web-app-development'
  },

  {
    id: 'seo-gmb',
    title: 'SEO & Google Business Profile',
    tag: 'Local Reach',
    icon: '📍',
    shortDesc:
      'Improve your local online presence with Google Business Profile setup, local SEO and search-ready website optimization.',
    fullDesc:
      'Build a stronger local search foundation with Google Business Profile setup or optimization for eligible businesses, keyword targeting, on-page SEO, technical SEO and local search improvements.',
    startingPrice: 'Starting at ₹7,999',
    features: [
      'Google Business Profile Setup',
      'Google Business Profile Optimization',
      'Local SEO Foundation',
      'Keyword Research & Targeting',
      'On-Page SEO',
      'Meta Titles & Descriptions',
      'Technical SEO Setup',
      'Local Citation Guidance',
      'Google Search Console Setup',
      'GA4 Analytics Setup',
      'Schema Markup',
      'SEO Performance Reporting'
    ],
    link: '/seo'
  },

  {
    id: 'branding-design',
    title: 'Branding & Design',
    tag: 'Creative',
    icon: '🎨',
    shortDesc:
      'Build a professional and memorable visual identity for your business, startup or product.',
    fullDesc:
      'Create a cohesive brand identity including logo design, colors, typography, business cards, social media assets and brand guidelines that keep your business visually consistent.',
    startingPrice: 'Starting at ₹5,999',
    features: [
      'Custom Logo Design',
      'Brand Identity Development',
      'Brand Color Palette',
      'Typography System',
      'Business Card Design',
      'Social Media Starter Kit',
      'Digital Brand Guidelines',
      'Print-Ready Brand Assets'
    ],
    link: '/branding-design'
  },

  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tag: 'Product Design',
    icon: '✨',
    shortDesc:
      'User-focused interface and experience design for websites, dashboards, mobile apps and digital products.',
    fullDesc:
      'Design intuitive digital experiences that make websites and applications easier to use, visually consistent and focused on user journeys and business goals.',
    startingPrice: 'Custom Quote',
    features: [
      'Website UI/UX Design',
      'Mobile App UI/UX',
      'Dashboard Design',
      'SaaS Product Design',
      'User Flow Mapping',
      'Wireframes & Prototypes',
      'Responsive Design Systems',
      'Conversion-Focused Interfaces'
    ],
    link: '/branding-design'
  },

  {
    id: 'paid-advertising',
    title: 'Paid Advertising Management',
    tag: 'Controlled Budget',
    icon: '🎯',
    shortDesc:
      'Transparent Google, Facebook and Instagram ad management for small businesses with separate ad spend and clear reporting.',
    fullDesc:
      'We plan, launch, monitor and optimize targeted Google Ads and Meta Ads campaigns designed for measurable business inquiries with controlled budgets and 100% cost transparency.',
    startingPrice: 'Starting at ₹5,999 / mo',
    features: [
      'Separate Advertising Budget & Management Fee',
      'Google Search & High-Intent Keyword Targeting',
      'Facebook & Instagram Feed/Reels Ads',
      'Instant WhatsApp & Call Lead Tracking',
      'Continuous Negative Keyword & Bid Tuning',
      'Targeted Audience & Creative Testing',
      '100% Client Ownership of Ad Accounts',
      'Transparent Monthly Performance Reports'
    ],
    link: '/paid-advertising'
  },

  {
    id: 'google-ads',
    title: 'Google Ads (Search & Maps)',
    tag: 'High Intent',
    icon: '🔍',
    shortDesc:
      'Capture ready-to-buy customers actively searching for your services on Google Search and Google Maps.',
    fullDesc:
      'Reach local buyers at the exact moment they search for your services with targeted search campaigns, negative keyword filters, and conversion tracking.',
    startingPrice: 'Starting at ₹5,999 / mo',
    features: [
      'Google Search Campaign Setup',
      'High-Intent Buyer Keyword Research',
      'Negative Keyword Budget Protection',
      'Geo-Radius & City-Level Targeting',
      'Call & WhatsApp Conversion Tracking',
      'Continuous Bid & Quality Score Optimization',
      'Transparent Monthly Reporting'
    ],
    link: '/google-ads'
  },

  {
    id: 'meta-ads',
    title: 'Facebook & Instagram (Meta) Ads',
    tag: 'Social Leads',
    icon: '📱',
    shortDesc:
      'Turn social media scrollers into direct customer inquiries with Instagram Reels, Feed ads and WhatsApp click-to-chat campaigns.',
    fullDesc:
      'Engage local buyers on Facebook and Instagram with eye-catching visual ads, promotional offers, instant lead forms, and direct WhatsApp chat campaigns.',
    startingPrice: 'Starting at ₹5,999 / mo',
    features: [
      'Facebook Feed & Instagram Reels Ads',
      'Local Geo-Radius & Demographic Targeting',
      'Click-to-WhatsApp Campaign Setup',
      'Multi-Variant Creative & Copy Testing',
      'Warm Audience Retargeting Funnel',
      'Meta Pixel & Conversion Setup',
      'Transparent Monthly Reporting'
    ],
    link: '/meta-ads'
  },

  {
    id: 'website-maintenance',
    title: 'Website & Software Maintenance',
    tag: 'Support',
    icon: '🔧',
    shortDesc:
      'Keep your website, application or digital platform secure, updated and running smoothly.',
    fullDesc:
      'Ongoing technical support covering updates, performance checks, security monitoring, backups, bug fixes, content changes and optimization for websites and web applications.',
    startingPrice: 'Starting at ₹2,999 / mo',
    features: [
      'Regular Website Updates',
      'Security Monitoring',
      'Bug Fixes & Technical Support',
      'Performance Optimization',
      'Speed Monitoring',
      'Content Updates',
      'Database Maintenance',
      'Daily & Weekly Backup Options',
      'Software & Dependency Updates',
      'Office-Time Technical Support'
    ],
    link: '/website-maintenance'
  }
],

  portfolio: [
    {
      id: 'peoria-home-cleaning',
      title: 'Peoria Home Cleaning Services',
      category: 'Home Cleaning & Service Portal',
      tag: 'Service Portal',
      metrics: 'Online Booking & Local SEO',
      image: 'https://res.cloudinary.com/vhth8clt/image/upload/v1788985903/peoria.png',
      description: 'Professional residential and commercial cleaning website engineered with online booking inquiries, local SEO architecture, and targeted search ad campaigns.',
      deliveredServices: ['Website Development', 'Search Engine Optimization', 'Advertising'],
      liveUrl: 'https://peoria-webliix.netlify.app/'
    },



    {
      id: 'sunsdust',
      title: 'Sunsdust Commercial Pvt. Ltd.',
      category: 'Industrial & E-Commerce',
      tag: 'Manufacturer Portal',
      metrics: 'Trusted across 28+ States',
      image: sunsdustImg,
      description: 'Manufacturer & Supplier of ESE Lightning Arresters, Surge Protection Devices, GI & Copper Bonded Earth Electrodes across 28+ states in India.',
      deliveredServices: ['Advertising', 'Web Development', 'Social Media Management', 'Branding', 'Graphic Design'],
      liveUrl: 'https://sunsdust-webliix-2.netlify.app/'
    },

    {
      id: 'auradrishti',
      title: 'Aura Drishti CCTV & Surveillance',
      category: 'CCTV Installation & Security Services',
      tag: 'Case Study',
      metrics: '4.9★ Rating • 3x GMB Visits',
      image: auradrishtiImg,
      description: 'A CCTV camera installation, servicing, and surveillance equipment sales company built with custom web UI, GMB verification, and lead generation campaigns.',
      deliveredServices: ['Advertising', 'Web Development', 'Social Media Management', 'Branding', 'Graphic Design'],
      liveUrl: 'https://auradrishti-webliix.netlify.app/'
    },

    {
      id: 'kitchen9village',
      title: 'Kitchen 9 Village',
      category: 'Hospitality & Dining',
      tag: 'Cloud Kitchen',
      metrics: '+180% Direct Orders',
      image: kitchen9villageImg,
      description: 'Authentic Indian vegetarian cuisine crafted with traditional recipes, premium ingredients, and strict hygiene. Serving Siliguri with fast delivery.',
      deliveredServices: ['Website Development', 'Branding', 'Online Ordering'],
      liveUrl: 'https://kitchen9-webliix.netlify.app'
    },
    {
      id: 'saraswati-enterprise',
      title: 'Saraswati Enterprises',
      category: 'Corporate & Portfolio',
      tag: 'Redesign Project',
      metrics: '100% Mobile Responsive',
      image: sunsdustImg,
      description: 'A complete industrial portfolio website redesign to enhance user experience, showcase products, and generate direct inquiries.',
      deliveredServices: ['Website Redesign', 'UI/UX Enhancement', 'Portfolio Showcase'],
      liveUrl: 'https://latifcodes.github.io/Saraswati-Enterprise/'
    },
    {
      id: 'thehub-coworking',
      title: 'The Hub Solution',
      category: 'Real Estate & Corporate',
      tag: 'Co-Working Portal',
      metrics: '3x Lead Generation Rate',
      image: thehubImg,
      description: 'Modern corporate website showcasing premium workspace suites, virtual tour inquiries, and social media marketing.',
      deliveredServices: ['Advertising', 'Social Media Management', 'Web Development'],
      liveUrl: 'https://webliix.com/portfolio'
    },
    {
      id: 'ramji-events',
      title: 'Ramji Events & Luxury Caterers',
      category: 'Wedding & Event Planning',
      tag: 'Event & Catering Portal',
      metrics: 'Wedding & Luxury Catering',
      image: 'https://res.cloudinary.com/vhth8clt/image/upload/v1789332530/Best-Wedding-Planners-Luxury-Caterers-in-Greater-Noida-Ramji-Events-09-14-2026_02_17_AM.png',
      description: 'Wedding and event planning portal engineered for luxury event management, catering coordination, decor portfolio showcase, and instant client inquiries.',
      deliveredServices: ['Web Development', 'UI/UX Design', 'Lead Capture', 'Branding'],
      liveUrl: 'https://ramji-events.netlify.app/'
    },
    {
      id: 'loanheaven',
      title: 'Loan Heaven Financial Portal',
      category: 'Fintech & Lead System',
      tag: 'Financial Calculator',
      metrics: '10k+ Monthly EMI Calculations',
      image: loanheavenImg,
      description: 'Interactive financial platform equipped with instant EMI loan calculators, document submission flow, and advertising lead capture.',
      deliveredServices: ['Advertising', 'Website Maintenance', 'Lead Automation'],
      liveUrl: 'https://webliix.com/portfolio'
    },
    {
      id: 'connectify',
      title: 'Connectify Digital Platform',
      category: 'Software & SaaS',
      tag: 'SaaS Suite',
      metrics: '+150% Active Users',
      image: connectifyImg,
      description: 'Unified communication platform connecting modern enterprises with digital tools, social media marketing, and graphic design.',
      deliveredServices: ['Advertising', 'Website Maintenance', 'Social Media Management', 'Graphic Design'],
      liveUrl: 'https://webliix.com/portfolio'
    },
    {
      id: 'ghomes',
      title: 'G Homes Furnishing',
      category: 'Real Estate & Furnishing',
      tag: 'Property Showcase',
      metrics: '500+ Qualified Leads',
      image: ghomesImg,
      description: 'High-end property and home furnishing showcase portal featuring interactive floor plans, neighborhood guides, and lead advertising.',
      deliveredServices: ['Advertising', 'Property Listings', 'Lead Generation'],
      liveUrl: 'https://webliix.com/portfolio'
    },
    {
      id: 'janaushadi',
      title: 'Jan Aushadhi Kendra Network',
      category: 'Healthcare & Public Service',
      tag: 'E-Pharmacy Portal',
      metrics: '50k+ Monthly Visits',
      image: janaushadiImg,
      description: 'Public healthcare distribution portal listing accessible generic medicine prices, store finders, and targeted digital ad campaigns.',
      deliveredServices: ['Advertising', 'Public Portal', 'SEO Optimization'],
      liveUrl: 'https://webliix.com/portfolio'
    }
  ],

  blogs: [
    {
      id: 'free-meta-tag-generator-for-seo-2026',
      title: 'MetaGen: Free Meta Tag Generator (Review & Tutorial)',
      category: 'SEO Tools',
      date: 'April 18, 2026',
      readTime: '8 min read',
      excerpt: 'Missing meta tags keep 70% of websites invisible. Learn how MetaGen generates 60+ SEO-optimized tags, OpenGraph, and JSON-LD schema in seconds.',
      author: 'Himanshu Sharma',
      content: `Meta tags are the invisible blueprint of search engine optimization. In 2026, search algorithms require explicit Open Graph tags, Twitter Card metadata, and JSON-LD structured data to index content accurately.`
    },
    {
      id: 'digital-marketing-small-business-india-2026-complete-guide',
      title: 'Digital Marketing in 2026: Complete Strategy for Small Businesses',
      category: 'Marketing',
      date: 'March 28, 2026',
      readTime: '12 min read',
      excerpt: 'A step-by-step roadmap covering local SEO, Meta Ads targeting, Google Business profile optimization, and conversion-focused web design.',
      author: 'Abdul Malik',
      content: `Modern digital marketing requires a multi-touchpoint strategy. A standalone social media account without a high-converting website leaves 60% of potential leads behind.`
    },
    {
      id: 'why-every-small-business-in-india-needs-a-website-in-2025',
      title: 'Why Every Business Needs a Custom Website in 2026',
      category: 'Web Development',
      date: 'February 15, 2026',
      readTime: '6 min read',
      excerpt: 'Social media algorithms change daily. Owning your custom digital domain guarantees 100% control over customer acquisition and brand equity.',
      author: 'Himanshu Sharma',
      content: `Relying solely on social media for client acquisition is like building on rented land. A custom website provides round-the-clock credibility and direct conversions.`
    }
  ],

  pricingModules: [
    { id: 'design', name: 'UI/UX Design & Branding', price: 4999 },
    { id: 'frontend', name: 'Responsive Web Development', price: 6999 },
    { id: 'backend', name: 'Dynamic Backend & CMS', price: 5999 },
    { id: 'ecommerce', name: 'E-Commerce Setup & Store', price: 7999 },
    { id: 'seo', name: 'SEO & GMB Optimization', price: 3999 },
    { id: 'domainHost', name: '1-Yr Domain + SSL + Hosting', price: 2999 },
    { id: 'ads', name: '5-Day Launch Ad Campaign', price: 2499 }
  ]
};
