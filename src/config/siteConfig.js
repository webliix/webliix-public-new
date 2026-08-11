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
    tagline: 'Website Design, GMB, SEO & Software Development',
    logoDark,
    logoLight,
    iconMark,
    founded: '2025',
    headline: 'Empower Your Digital Journey',
    heroTag: 'FULL-SERVICE • GLOBAL REACH',
    heroTyping: [
      '< Your Success is Our Code />',
      '< Web Development & Branding />',
      '< Local SEO & GMB Optimization />',
      '< E-Commerce & Custom Software />'
    ],
    heroSubtext: 'Building immersive digital experiences, brands that resonate, and SEO engines that dominate — tailored for NCR India, USA, Canada & Germany.',
    contactEmail: 'contact@webliix.in',
    contactPhone: '+91 93101 81569',
    alternatePhone: '+91 88106 50511',
    address: 'Blue Sapphire Plaza, Sector 63, Noida, NCR, India',
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
      shortDesc: 'All-in-one digital launch package — logo, website, business email, GMB setup & 5-day ad campaign from day one.',
      fullDesc: 'Launch your entire brand professionally in 5–7 days. Includes complete brand identity, high-converting responsive web application, Google Business setup, and a targeted 5-day marketing campaign.',
      startingPrice: 'Starting at ₹15,999',
      features: [
        'Logo & Brand Strategy',
        'Website (Static, Interactive or E-Commerce)',
        'Domain & Professional Email Setup',
        'Google My Business (GMB) Setup',
        '5-Day Meta Ads Campaign',
        'Basic SEO & Analytics Setup'
      ],
      link: '/services'
    },
    {
      id: 'quick-ecommerce',
      title: 'Fast E-Commerce Store Launch',
      tag: 'Trending',
      icon: '⚡',
      shortDesc: 'Launch your online store in as little as 5–7 days with essentials done right — perfect for small businesses and quick market entry.',
      fullDesc: 'Custom e-commerce store built for speed, seamless checkout, up to 50 products, payment gateway, and mobile optimization.',
      startingPrice: 'Starting at ₹12,999',
      features: [
        'Shopify, WooCommerce or Custom React Store',
        'Up to 50 Product Listings',
        'Payment & Shipping Gateway Integration',
        'Basic SEO & Analytics Tracking',
        'Mobile-Responsive Design'
      ],
      link: '/services'
    },
    {
      id: 'website-dev',
      title: 'Website Development',
      tag: 'Core Service',
      icon: '💻',
      shortDesc: 'Crafting responsive, high-performance static and dynamic websites tailored to your business needs.',
      fullDesc: 'From business portfolio sites to dynamic interactive applications, we engineer clean, scalable websites built for conversion.',
      startingPrice: 'Starting at ₹9,999',
      features: [
        'Static & Dynamic Web Pages',
        'Fast Load Times & Top Google Speed',
        'Custom UI/UX Design',
        'Mobile & Tablet Responsive',
        'SSL & Security Best Practices'
      ],
      link: '/services'
    },
    {
      id: 'seo-gmb',
      title: 'SEO & GMB Setup',
      tag: 'Local Reach',
      icon: '📍',
      shortDesc: 'Boosting your local visibility with an optimized Google My Business profile and organic keyword rankings.',
      fullDesc: 'Data-driven local SEO and profile optimization strategies to get your business verified, ranked, and discovered on Google Maps.',
      startingPrice: 'Starting at ₹7,999',
      features: [
        'Google My Business Profile & Verification',
        'On-Page SEO & Meta Tags',
        'Keyword Research & Local Citations',
        'Ranking Optimization Reports'
      ],
      link: '/services'
    },
    {
      id: 'branding-design',
      title: 'Branding & Design',
      tag: 'Creative',
      icon: '🎨',
      shortDesc: 'Building a cohesive and memorable brand identity that resonates with your audience.',
      fullDesc: 'Custom logo design, brand guidelines, print-ready business cards, and social media starter kits.',
      startingPrice: 'Starting at ₹5,999',
      features: [
        'Custom Logo Design',
        'Brand Color & Typography Guidelines',
        'Digital & Print Business Cards',
        'Social Media Kit'
      ],
      link: '/services'
    },
    {
      id: 'website-maintenance',
      title: 'Website Maintenance',
      tag: 'Support',
      icon: '🔧',
      shortDesc: 'Ensuring your website stays secure, updated, and running smoothly with dedicated support.',
      fullDesc: 'Regular content updates, performance checks, security monitoring, and bug fixes to keep your digital site performing at peak.',
      startingPrice: 'Starting at ₹2,999 / mo',
      features: [
        'Regular Updates & Security Audits',
        'Bug Fixes & Speed Optimizations',
        'Office-Time Support',
        'Daily & Weekly Backups'
      ],
      link: '/services'
    }
  ],

  portfolio: [
    {
      id: 'sunsdust',
      title: 'Sunsdust Commercial Pvt. Ltd.',
      category: 'Industrial & E-Commerce',
      tag: 'Manufacturer Portal',
      metrics: 'Trusted across 28+ States',
      image: sunsdustImg,
      description: 'Manufacturer & Supplier of ESE Lightning Arresters, Surge Protection Devices, GI & Copper Bonded Earth Electrodes across 28+ states in India.',
      deliveredServices: ['Advertising', 'Web Development', 'Social Media Management', 'Branding', 'Graphic Design'],
      liveUrl: 'https://sunsdust-webliix.netlify.app'
    },
    {
      id: 'auradrishti',
      title: 'Aura Drishti Eye Care & Surveillance',
      category: 'Healthcare & Security',
      tag: 'Case Study',
      metrics: '4.9★ Rating • 3x GMB Visits',
      image: auradrishtiImg,
      description: 'A CCTV camera installation, surveillance accessories, and spiritual optical venture built with custom web UI, GMB verification, and lead campaigns.',
      deliveredServices: ['Advertising', 'Web Development', 'Social Media Management', 'Branding', 'Graphic Design'],
      liveUrl: 'https://auradrishti-webliix.netlify.app'
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
      liveUrl: 'https://webliix.in/portfolio'
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
      liveUrl: 'https://webliix.in/portfolio'
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
      liveUrl: 'https://webliix.in/portfolio'
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
      liveUrl: 'https://webliix.in/portfolio'
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
      liveUrl: 'https://webliix.in/portfolio'
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
