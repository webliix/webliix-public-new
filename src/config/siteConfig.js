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

  pricing: {
    launchKitBasePrice: '₹12,999',
    launchKitBasePriceNum: 12999,
    websiteDevBasePrice: '₹12,999',
    packages: {
      essential: '₹12,999',
      professional: '₹19,999',
      businessPro: '₹34,999',
      ecommerce: '₹29,999'
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
      'A complete digital launch package combining website development, branding, business email, Google Business Profile support and SEO foundations.',
    fullDesc:
      'Launch your business with the essential digital foundations in one coordinated service. Webliix LaunchKit combines professional website development, brand identity, business email, Google Business Profile support, SEO foundations, analytics and lead-generation essentials for new and growing businesses.',
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
    title: 'E-Commerce Website Development',
    tag: 'Trending',
    icon: '⚡',
    shortDesc:
      'Professional online store development with product catalogs, payments, checkout, order management and mobile optimization.',
    fullDesc:
      'Build an online store for your products or services with a mobile-friendly shopping experience, product catalogs, categories, shopping cart, checkout, payment gateway integration, shipping configuration, analytics and e-commerce SEO foundations.',
    startingPrice: 'Starting at ₹12,999',
    features: [
      'Shopify, WooCommerce or Custom React Store',
      'Up to 50 Initial Product Listings',
      'Product Categories & Detail Pages',
      'Shopping Cart & Secure Checkout',
      'Payment Gateway Integration',
      'Shipping & Order Management Setup',
      'Mobile-Responsive Store Design',
      'Basic E-Commerce SEO & Analytics'
    ],
    link: '/ecommerce-store'
  },

  {
    id: 'website-dev',
    title: 'Website Development Services',
    tag: 'Core Service',
    icon: '💻',
    shortDesc:
      'Professional business website design and development for companies, startups, professionals and organizations.',
    fullDesc:
      'Webliix develops responsive business websites, corporate websites, landing pages, portfolio websites and custom web experiences designed around your business goals, customers and search visibility. Websites are built for mobile devices, clear navigation, performance, technical SEO foundations and lead generation.',
    startingPrice: 'Starting at ₹9,999',
    features: [
      'Business & Corporate Websites',
      'Landing Pages & Marketing Websites',
      'Portfolio & Professional Websites',
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
      'Custom web applications, portals and business platforms for complex workflows, customer systems and digital operations.',
    fullDesc:
      'We design and develop custom web applications for businesses that need more than a traditional website, including dashboards, customer portals, SaaS platforms, booking systems, workflow applications and business management platforms.',
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
    title: 'Mobile App Development Services',
    tag: 'Mobile',
    icon: '📱',
    shortDesc:
      'Custom Android and iOS applications for startups, businesses and digital products.',
    fullDesc:
      'Build a professional mobile application with modern UI/UX, secure APIs, authentication, notifications, payments and scalable backend integration for Android, iOS and supported cross-platform environments.',
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
      'Purpose-built business software for workflow automation, operations, reporting, integrations and internal systems.',
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
      'Scalable SaaS product development with user accounts, dashboards, APIs, subscriptions and cloud-ready architecture.',
    fullDesc:
      'Turn your software idea into a SaaS product with multi-user architecture, subscription workflows, dashboards, authentication, billing integrations, APIs and cloud deployment designed around your product requirements.',
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
    title: 'CRM & ERP Software Development',
    tag: 'Enterprise',
    icon: '📊',
    shortDesc:
      'Custom CRM and ERP systems for managing customers, sales, projects, finance, HR, support and business operations.',
    fullDesc:
      'Build an integrated business management platform tailored to your organization, including CRM, customer management, sales pipelines, projects, tasks, invoicing, finance, HR, support tickets, notifications and reporting.',
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
    title: 'SEO & Google Business Profile Services',
    tag: 'Local Reach',
    icon: '📍',
    shortDesc:
      'Search engine optimization and Google Business Profile services for improving organic and local search visibility.',
    fullDesc:
      'Build a stronger search presence with technical SEO, on-page optimization, search-intent research, Google Business Profile setup or optimization for eligible businesses, local SEO foundations, analytics and search performance tracking.',
    startingPrice: 'Starting at ₹7,999',
    features: [
      'Google Business Profile Setup',
      'Google Business Profile Optimization',
      'Local SEO Foundation',
      'Keyword Research & Search Intent',
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
    title: 'Branding & Graphic Design Services',
    tag: 'Creative',
    icon: '🎨',
    shortDesc:
      'Professional brand identity and graphic design for businesses, startups, products and organizations.',
    fullDesc:
      'Create a consistent visual identity with logo design, brand colors, typography, business cards, social media assets and brand guidelines that can be used across your website, marketing and customer communications.',
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
    title: 'UI/UX Design Services',
    tag: 'Product Design',
    icon: '✨',
    shortDesc:
      'User-focused interface and experience design for websites, dashboards, mobile applications and digital products.',
    fullDesc:
      'Design intuitive digital experiences with clear navigation, consistent interfaces, responsive layouts and user journeys aligned with your business and product goals.',
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
      'Google, Facebook and Instagram advertising management focused on relevant audiences, enquiries and measurable campaign performance.',
    fullDesc:
      'Plan, launch, monitor and optimize Google Ads and Meta Ads campaigns around your target audience, search intent, offers, landing pages and conversion goals with transparent management and advertising costs.',
    startingPrice: 'Starting at ₹5,999 / mo',
    features: [
      'Separate Advertising Budget & Management Fee',
      'Google Search & High-Intent Keyword Targeting',
      'Facebook & Instagram Advertising',
      'WhatsApp & Call Lead Tracking',
      'Negative Keyword & Bid Optimization',
      'Audience & Creative Testing',
      'Client Ownership of Advertising Accounts',
      'Transparent Monthly Performance Reports'
    ],
    link: '/paid-advertising'
  },

  {
    id: 'google-ads',
    title: 'Google Ads Management Services',
    tag: 'High Intent',
    icon: '🔍',
    shortDesc:
      'Google Search and Maps advertising for businesses targeting customers who are actively searching for relevant products or services.',
    fullDesc:
      'Create and manage Google Ads campaigns around relevant commercial search terms, geographic targeting, negative keywords, conversion tracking and landing-page alignment.',
    startingPrice: 'Starting at ₹5,999 / mo',
    features: [
      'Google Search Campaign Setup',
      'Commercial Keyword Research',
      'Negative Keyword Management',
      'Geographic & Audience Targeting',
      'Call & WhatsApp Conversion Tracking',
      'Ad Copy & Campaign Optimization',
      'Transparent Monthly Reporting'
    ],
    link: '/google-ads'
  },

  {
    id: 'meta-ads',
    title: 'Meta Ads Management Services',
    tag: 'Social Leads',
    icon: '📱',
    shortDesc:
      'Facebook and Instagram advertising designed around audience targeting, creative testing and customer enquiries.',
    fullDesc:
      'Plan and manage Facebook and Instagram campaigns using audience research, creative testing, lead forms, click-to-WhatsApp campaigns, retargeting and conversion tracking.',
    startingPrice: 'Starting at ₹5,999 / mo',
    features: [
      'Facebook Feed & Instagram Reels Ads',
      'Geographic & Demographic Targeting',
      'Click-to-WhatsApp Campaigns',
      'Creative & Copy Testing',
      'Retargeting Campaigns',
      'Meta Pixel & Conversion Setup',
      'Transparent Monthly Reporting'
    ],
    link: '/meta-ads'
  },

  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Support Services',
    tag: 'Support',
    icon: '🔧',
    shortDesc:
      'Ongoing website and software maintenance covering updates, security, performance, content changes and technical support.',
    fullDesc:
      'Keep your website, application or digital platform maintained with technical updates, security checks, performance improvements, bug fixes, content changes, backups and ongoing support.',
    startingPrice: 'Starting at ₹2,999 / mo',
    features: [
      'Regular Website Updates',
      'Security Monitoring',
      'Bug Fixes & Technical Support',
      'Performance Optimization',
      'Speed Monitoring',
      'Content Updates',
      'Database Maintenance',
      'Backup Options',
      'Software & Dependency Updates',
      'Technical Support'
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

  blogs: [],

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
