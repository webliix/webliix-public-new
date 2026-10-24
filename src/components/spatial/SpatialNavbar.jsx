import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  ChevronDown,
  Layout,
  ShoppingBag,
  Cpu,
  Smartphone,
  Search,
  Sparkles,
  Palette,
  Wrench,
  ArrowRight,
  Layers,
  Zap,
  CheckCircle2,
  Target,
  Share2,
  ShieldCheck,
  Clock,
  Globe2,
  Compass,
  Building2,
  Users,
  Award,
  Star,
  Briefcase,
  PhoneCall,
  LogIn
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useTheme } from '../../context/ThemeContext';
import SpatialButton from '../ui/SpatialButton';
import WebliixCard from '../ui/WebliixCard';
import WebliixIcon from '../ui/WebliixIcon';

export default function SpatialNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const location = useLocation();
  const { currentTheme, glassBlur } = useTheme();
  const dropdownTimeoutRef = useRef(null);
  const companyTimeoutRef = useRef(null);

  // Categorized services data for the Mega Menu
  const serviceCategories = [
    {
      id: 'engineering',
      title: 'Web & App Engineering',
      badge: 'Custom Architecture',
      items: [
        {
          name: 'Website Development',
          path: '/website-development',
          tag: 'Core Service',
          icon: Layout,
          desc: 'High-speed React & Next.js platforms with 95+ PageSpeed scores',
          meta: 'Custom UI • 95+ PageSpeed'
        },
        {
          name: 'Fast E-Commerce Store',
          path: '/ecommerce-store',
          tag: '5–7 Days',
          icon: ShoppingBag,
          desc: 'High-converting Shopify, WooCommerce & custom online stores',
          meta: 'Shopify / Custom • Payments'
        },
        {
          name: 'Web Apps & SaaS',
          path: '/web-app-development',
          tag: 'Full-Stack',
          icon: Cpu,
          desc: 'Scalable SaaS platforms, custom CRM/ERP & cloud portals',
          meta: 'Custom APIs • Cloud Backends'
        },
        {
          name: 'Mobile App Development',
          path: '/mobile-app-development',
          tag: 'iOS & Android',
          icon: Smartphone,
          desc: 'Cross-platform Flutter & React Native native mobile apps',
          meta: 'App Store • Play Store'
        }
      ]
    },
    {
      id: 'advertising',
      title: 'Growth & Advertising',
      badge: 'ROI Focused',
      items: [
        {
          name: 'Paid Advertising',
          path: '/paid-advertising',
          tag: 'Controlled Budget',
          icon: Target,
          desc: 'Transparent Google & Meta ad management for small businesses',
          meta: 'Flat Mgmt Fee • Direct Billing'
        },
        {
          name: 'Google Ads',
          path: '/google-ads',
          tag: 'High Intent',
          icon: Search,
          desc: 'Targeted Search, Maps & local call lead generation campaigns',
          meta: 'Search Ads • Maps • Calls'
        },
        {
          name: 'Meta (FB & IG) Ads',
          path: '/meta-ads',
          tag: 'Social Leads',
          icon: Share2,
          desc: 'Feed, Reels & WhatsApp click-to-chat campaigns that convert',
          meta: 'Instagram • Facebook • WhatsApp'
        },
        {
          name: 'SEO & Local Search',
          path: '/seo',
          tag: 'Local Growth',
          icon: Compass,
          desc: 'Google Maps verification, local SEO ranking & organic search',
          meta: 'GMB Setup • Local Citations'
        }
      ]
    },
    {
      id: 'creative',
      title: 'Creative & Care',
      badge: 'Full Lifecycle',
      items: [
        {
          name: 'Branding & UI/UX Design',
          path: '/branding-design',
          tag: 'Design System',
          icon: Palette,
          desc: 'Vector logos, brand books, typography & Figma UI/UX designs',
          meta: 'Original Logos • Figma Files'
        },
        {
          name: 'Website Maintenance',
          path: '/website-maintenance',
          tag: '24/7 Care',
          icon: Wrench,
          desc: 'Proactive security scans, daily backups, speed & bug fixes',
          meta: 'Daily Backups • 99.9% Uptime'
        }
      ]
    }
  ];

  // Flat list for active checks and search
  const allServices = [
    {
      name: 'Webliix LaunchKit',
      path: '/launch-kit',
      tag: 'All-In-One',
      icon: Sparkles,
      desc: 'Complete turnkey brand, website, email & GMB package'
    },
    ...serviceCategories.flatMap((category) => category.items)
  ];
  // Categorized Company data for the Mega Menu
  const companyCategories = [
    {
      id: 'organization',
      title: 'Agency & Culture',
      badge: 'Identity',
      icon: Building2,
      items: [
        {
          name: 'About Webliix',
          path: '/about',
          tag: 'Who We Are',
          icon: Users,
          desc: 'Our engineering philosophy, full-stack mission, culture & team',
          meta: 'Direct Execution • Zero Fluff'
        },
        {
          name: 'Careers & Partner Program',
          path: '/careers',
          tag: 'Hiring & Affiliates',
          icon: Briefcase,
          desc: 'Join our developer network or become an agency referral partner',
          meta: 'Remote-First • Growth Partner'
        },
        {
          name: 'Business & Compliance',
          path: '/business-information',
          tag: 'Verified MSME',
          icon: ShieldCheck,
          desc: 'Govt MSME registration, GSTIN, legal credentials & tax compliance',
          meta: 'Udyam Registered • Legal Entity'
        }
      ]
    },
    {
      id: 'proof',
      title: 'Proof & Trust',
      badge: 'Proven Record',
      icon: Award,
      items: [
        {
          name: 'Selected Work & Portfolio',
          path: '/portfolio',
          tag: 'Case Studies',
          icon: Layout,
          desc: 'Live production web apps, stores & performance benchmarks',
          meta: 'Real Results • 95+ PageSpeed'
        },
        {
          name: 'Client Reviews & Feedback',
          path: '/feedback',
          tag: '4.9★ Rated',
          icon: Star,
          desc: 'Verified testimonials from founders, SMBs & enterprise clients',
          meta: '100% Client Satisfaction'
        },
        {
          name: 'Client Portal Login',
          href: 'https://login.webliix.com',
          isExternal: true,
          tag: 'Customer Login',
          icon: LogIn,
          desc: 'Client access for real-time project milestones, invoices, live chat & support tickets',
          meta: 'login.webliix.com • 24/7 Access'
        },
        {
          name: 'Direct Consultation',
          path: '/contact',
          tag: 'Free 30-Min Call',
          icon: PhoneCall,
          desc: 'Discuss architecture, timeline & transparent pricing with senior engineers',
          meta: 'Same-Day Response • Direct Architects'
        }
      ]
    }
  ];


  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isOver = window.scrollY > 24;
          setScrolled(isOver);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    setCompanyDropdownOpen(false);
    setMobileCompanyOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.setAttribute('data-mobile-menu-open', 'true');
    } else {
      document.documentElement.removeAttribute('data-mobile-menu-open');
    }
    return () => {
      document.documentElement.removeAttribute('data-mobile-menu-open');
    };
  }, [mobileOpen]);

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    setCompanyDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const handleMouseEnterCompany = () => {
    if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(false);
    setCompanyDropdownOpen(true);
  };

  const handleMouseLeaveCompany = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isCompanyActive = () => {
    const paths = ['/about', '/portfolio', '/feedback', '/careers', '/business-information'];
    return paths.some((p) => location.pathname === p || location.pathname.startsWith(p + '/'));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: siteConfig.brand.socials.linkedin,
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: siteConfig.brand.socials.instagram,
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: siteConfig.brand.socials.facebook,
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      )
    },
  ];

  const rawPhone = siteConfig.brand.contactPhone.replace(/\D/g, '');
  const waUrl = `https://wa.me/${rawPhone}?text=Hi%20Webliix,%20I%20want%20to%20inquire%20about%20your%20digital%20services.`;

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const isServicesActive = () => {
    return (
      location.pathname === '/services' ||
      allServices.some((s) => location.pathname === s.path || location.pathname.startsWith(s.path + '/'))
    );
  };

  const logoSrc = currentTheme?.isDark === false
    ? siteConfig.brand.logoLight
    : siteConfig.brand.logoDark;

  const isDocked = scrolled || mobileOpen;

  return (
    <header
      className={`fixed z-[60] left-0 right-0 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isDocked
          ? 'top-0 glass-spatial border-b border-theme-border/80 shadow-spatial-lg'
          : 'top-3 sm:top-4 md:top-5 px-3 sm:px-6 lg:px-8 pointer-events-none'
      }`}
      style={{
        backdropFilter: isDocked ? 'blur(var(--glass-blur, 12px))' : 'none',
        WebkitBackdropFilter: isDocked ? 'blur(var(--glass-blur, 12px))' : 'none'
      }}
    >
      <div
        className={`w-full max-w-7xl mx-auto flex items-center justify-between relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDocked
            ? 'px-4 sm:px-6 h-14 sm:h-16'
            : 'pointer-events-auto h-16 sm:h-20 lg:h-22 px-3.5 sm:px-6 bg-transparent border border-transparent shadow-none'
        }`}
      >
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group z-20">
          <img
            src={logoSrc}
            alt={siteConfig.brand.name}
            width="280"
            height="72"
            fetchPriority="high"
            decoding="async"
            className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
              isDocked
                ? 'h-10 sm:h-11 md:h-12'
                : 'h-12 sm:h-15 md:h-16 lg:h-[4.25rem]'
            }`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isDocked ? 'gap-4 xl:gap-5' : 'gap-3 xl:gap-3.5'
          }`}
        >
          {/* Home Link - only rendered when NOT on home page */}
          {location.pathname !== '/' && (
            <Link
              to="/"
              className={`text-xs sm:text-sm font-medium tracking-tight transition-all relative py-1.5 ${
                isActive('/')
                  ? 'text-theme-primary font-bold'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
            >
              Home
              {isActive('/') && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-primary rounded-full shadow-[0_0_8px_var(--color-primary)]"
                />
              )}
            </Link>
          )}

          {/* Mega Services Trigger */}
          <div
            className="relative py-2"
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <Link
                to="/services"
                className={`text-xs sm:text-sm font-medium tracking-tight transition-all relative py-1.5 flex items-center gap-1.5 ${
                  isServicesActive()
                    ? 'text-theme-primary font-bold'
                    : 'text-theme-muted hover:text-theme-text'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    servicesDropdownOpen ? 'rotate-180 text-theme-primary' : ''
                  }`}
                />
                {isServicesActive() && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-primary rounded-full shadow-[0_0_8px_var(--color-primary)]"
                  />
                )}
              </Link>
            </div>

            {/* Desktop Full Mega Dropdown Menu - Viewport-centered & theme-glass reactive */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.985 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                  className={`fixed ${isDocked ? "top-14 sm:top-16" : "top-[76px] sm:top-[90px] md:top-[98px]"} left-1/2 -translate-x-1/2 w-[95vw] max-w-[1140px] xl:max-w-[1200px] pt-2 z-50 pointer-events-auto`}
                >
                  <WebliixCard
                    variant="panel"
                    tilt={false}
                    hoverable={false}
                    className="p-5 sm:p-6 space-y-4 sm:space-y-5 border border-theme-primary/40 shadow-[0_24px_70px_rgba(0,0,0,0.35)] overflow-hidden glass-spatial max-h-[calc(100vh-84px)] overflow-y-auto transition-[background-color,border-color,backdrop-filter,border-radius] duration-300"
                    style={{
                      backdropFilter: 'blur(var(--glass-blur, 12px))',
                      WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
                    }}
                  >
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-theme-border/20">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary">
                            Webliix Engineering & Growth Ecosystem
                          </span>
                        </div>
                        <span className="hidden sm:inline-block text-[11px] font-mono text-theme-muted/70 pl-3 border-l border-theme-border/20">
                          11+ Dedicated Solutions for Ambitious Businesses
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to="/services"
                          className="text-xs font-mono font-semibold text-theme-muted hover:text-theme-primary transition flex items-center gap-1.5 group px-2.5 py-1 rounded-lg hover:bg-theme-primary/10"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-theme-primary" />
                        </Link>
                      </div>
                    </div>

                    {/* Main Mega Grid: 3 Service Columns + 1 LaunchKit Spotlight Rail */}
                    <div className="grid grid-cols-12 gap-5">
                      
                      {/* Left: 3 Categorized Service Columns (9 cols) */}
                      <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-3">
                        
                        {/* Column 1: Web & App Engineering */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between px-2 pb-1">
                            <span className="text-xs font-mono font-bold text-theme-text uppercase tracking-wider flex items-center gap-1.5">
                              <Layout className="w-3.5 h-3.5 text-theme-primary" />
                              <span>Engineering</span>
                            </span>
                            <span className="text-[10px] font-mono text-theme-muted/80 px-2 py-0.5 rounded-full bg-theme-primary/5">
                              Full-Stack
                            </span>
                          </div>

                          <div className="space-y-0.5">
                            {serviceCategories[0].items.map((service) => {
                              const Icon = service.icon;
                              const isCurrent = location.pathname === service.path;
                              return (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className={`p-2.5 rounded-xl transition-all duration-200 group flex items-start gap-3 ${
                                    isCurrent
                                      ? 'bg-theme-primary/15 text-theme-primary font-semibold'
                                      : 'hover:bg-theme-primary/[0.08] text-theme-text'
                                  }`}
                                >
                                  <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-all duration-200 ${
                                    isCurrent
                                      ? 'bg-theme-primary text-white shadow-sm'
                                      : 'bg-theme-primary/10 text-theme-primary group-hover:bg-theme-primary group-hover:text-white'
                                  }`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="space-y-0.5 flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <h4 className="text-xs font-display font-semibold text-theme-text group-hover:text-theme-primary transition-colors truncate">
                                        {service.name}
                                      </h4>
                                    </div>
                                    <p className="text-[11px] text-theme-muted line-clamp-1 leading-snug">
                                      {service.desc}
                                    </p>
                                    <div className="text-[9px] font-mono text-theme-primary/80 font-medium pt-0.5 truncate">
                                      {service.meta}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Column 2: Growth & Advertising */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between px-2 pb-1">
                            <span className="text-xs font-mono font-bold text-theme-text uppercase tracking-wider flex items-center gap-1.5">
                              <Target className="w-3.5 h-3.5 text-theme-primary" />
                              <span>Growth & Ads</span>
                            </span>
                            <span className="text-[10px] font-mono text-theme-muted/80 px-2 py-0.5 rounded-full bg-theme-primary/5">
                              ROI Driven
                            </span>
                          </div>

                          <div className="space-y-0.5">
                            {serviceCategories[1].items.map((service) => {
                              const Icon = service.icon;
                              const isCurrent = location.pathname === service.path;
                              return (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className={`p-2.5 rounded-xl transition-all duration-200 group flex items-start gap-3 ${
                                    isCurrent
                                      ? 'bg-theme-primary/15 text-theme-primary font-semibold'
                                      : 'hover:bg-theme-primary/[0.08] text-theme-text'
                                  }`}
                                >
                                  <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-all duration-200 ${
                                    isCurrent
                                      ? 'bg-theme-primary text-white shadow-sm'
                                      : 'bg-theme-primary/10 text-theme-primary group-hover:bg-theme-primary group-hover:text-white'
                                  }`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="space-y-0.5 flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <h4 className="text-xs font-display font-semibold text-theme-text group-hover:text-theme-primary transition-colors truncate">
                                        {service.name}
                                      </h4>
                                    </div>
                                    <p className="text-[11px] text-theme-muted line-clamp-1 leading-snug">
                                      {service.desc}
                                    </p>
                                    <div className="text-[9px] font-mono text-theme-primary/80 font-medium pt-0.5 truncate">
                                      {service.meta}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Column 3: Creative & Care + Interactive Cost Estimator CTA */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between px-2 pb-1">
                            <span className="text-xs font-mono font-bold text-theme-text uppercase tracking-wider flex items-center gap-1.5">
                              <Palette className="w-3.5 h-3.5 text-theme-primary" />
                              <span>Design & Care</span>
                            </span>
                            <span className="text-[10px] font-mono text-theme-muted/80 px-2 py-0.5 rounded-full bg-theme-primary/5">
                              24/7 Support
                            </span>
                          </div>

                          <div className="space-y-0.5">
                            {serviceCategories[2].items.map((service) => {
                              const Icon = service.icon;
                              const isCurrent = location.pathname === service.path;
                              return (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className={`p-2.5 rounded-xl transition-all duration-200 group flex items-start gap-3 ${
                                    isCurrent
                                      ? 'bg-theme-primary/15 text-theme-primary font-semibold'
                                      : 'hover:bg-theme-primary/[0.08] text-theme-text'
                                  }`}
                                >
                                  <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-all duration-200 ${
                                    isCurrent
                                      ? 'bg-theme-primary text-white shadow-sm'
                                      : 'bg-theme-primary/10 text-theme-primary group-hover:bg-theme-primary group-hover:text-white'
                                  }`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="space-y-0.5 flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <h4 className="text-xs font-display font-semibold text-theme-text group-hover:text-theme-primary transition-colors truncate">
                                        {service.name}
                                      </h4>
                                    </div>
                                    <p className="text-[11px] text-theme-muted line-clamp-1 leading-snug">
                                      {service.desc}
                                    </p>
                                    <div className="text-[9px] font-mono text-theme-primary/80 font-medium pt-0.5 truncate">
                                      {service.meta}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* Right: Featured Showcase Rail (3 cols) */}
                      <div className="col-span-12 lg:col-span-3 flex flex-col">
                        <div
                          className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-theme-primary/10 via-theme-bg/50 to-transparent border border-theme-primary/20 relative overflow-hidden flex flex-col justify-between h-full space-y-3.5 transition-[background-color,border-color,border-radius] duration-300"
                          style={{
                            backdropFilter: 'blur(var(--glass-blur, 12px))',
                            WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
                          }}
                        >
                          {/* Ambient glow accent */}
                          <div className="absolute -top-12 -right-12 w-28 h-28 bg-theme-primary/15 rounded-full blur-2xl pointer-events-none" />

                          <div className="space-y-2.5 relative z-10">
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-theme-primary/15 text-theme-primary text-[10px] font-mono font-bold">
                              <Sparkles className="w-3 h-3" />
                              <span>FLAGSHIP ALL-IN-ONE</span>
                            </div>

                            <h3 className="text-sm font-display font-black text-theme-text tracking-tight">
                              Webliix LaunchKit™
                            </h3>

                            <p className="text-[11px] text-theme-muted leading-relaxed">
                              Turnkey digital launch package for new and growing businesses worldwide.
                            </p>

                            <div className="space-y-1.5 pt-1">
                              <div className="flex items-center gap-1.5 text-[11px] text-theme-text/90 font-medium">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                <span>Turnkey Logo & Brand Kit</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-theme-text/90 font-medium">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                <span>5-Page Fast React Website</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-theme-text/90 font-medium">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                <span>Domain, SSL & Work Email</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-theme-text/90 font-medium">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                <span>Google Maps & WhatsApp Chat</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-theme-border/20 relative z-10 space-y-2">
                            <div className="flex items-baseline justify-between">
                              <span className="text-[10px] font-mono text-theme-muted uppercase">Starting From</span>
                              <span className="text-xs font-mono font-bold text-theme-primary">₹9,999</span>
                            </div>

                            <Link to="/launch-kit" className="block w-full">
                              <SpatialButton
                                variant="primary"
                                className="w-full py-2 text-xs font-bold justify-center shadow-sm"
                                icon={ArrowRight}
                              >
                                Explore LaunchKit
                              </SpatialButton>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Trust & Guarantee Strip */}
                    <div className="pt-3 border-t border-theme-border/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono bg-theme-primary/[0.03] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 px-5 py-3 sm:px-6 rounded-b-[inherit]">
                      <div className="flex flex-wrap items-center gap-4 text-theme-muted text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                          <span>5–7 Days Turnkey Delivery</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>100% Code & Asset Ownership</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>Global Delivery Across 12+ Countries</span>
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="text-xs font-bold text-theme-primary hover:underline flex items-center gap-1 self-end sm:self-auto"
                      >
                        <span>Need Custom Engineering? Talk to Architects →</span>
                      </Link>
                    </div>
                  </WebliixCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mega Company Trigger */}
          <div
            className="relative py-2"
            onMouseEnter={handleMouseEnterCompany}
            onMouseLeave={handleMouseLeaveCompany}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <button
                type="button"
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                className={`text-xs sm:text-sm font-medium tracking-tight transition-all relative py-1.5 flex items-center gap-1.5 bg-transparent border-none cursor-pointer ${
                  isCompanyActive()
                    ? 'text-theme-primary font-bold'
                    : 'text-theme-muted hover:text-theme-text'
                }`}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    companyDropdownOpen ? 'rotate-180 text-theme-primary' : ''
                  }`}
                />
                {isCompanyActive() && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-primary rounded-full shadow-[0_0_8px_var(--color-primary)]"
                  />
                )}
              </button>
            </div>

            {/* Desktop Full Mega Dropdown Menu for Company */}
            <AnimatePresence>
              {companyDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.985 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={handleMouseEnterCompany}
                  onMouseLeave={handleMouseLeaveCompany}
                  className={`fixed ${isDocked ? "top-14 sm:top-16" : "top-[76px] sm:top-[90px] md:top-[98px]"} left-1/2 -translate-x-1/2 w-[95vw] max-w-[1060px] xl:max-w-[1120px] pt-2 z-50 pointer-events-auto`}
                >
                  <WebliixCard
                    variant="panel"
                    tilt={false}
                    hoverable={false}
                    className="p-5 sm:p-6 space-y-4 sm:space-y-5 border border-theme-primary/40 shadow-[0_24px_70px_rgba(0,0,0,0.35)] overflow-hidden glass-spatial max-h-[calc(100vh-84px)] overflow-y-auto transition-[background-color,border-color,backdrop-filter,border-radius] duration-300"
                    style={{
                      backdropFilter: 'blur(var(--glass-blur, 12px))',
                      WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
                    }}
                  >
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-theme-border/20">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary">
                            Webliix Agency & Corporate Ecosystem
                          </span>
                        </div>
                        <span className="hidden sm:inline-block text-[11px] font-mono text-theme-muted/70 pl-3 border-l border-theme-border/20">
                          Bespoke Digital Engineering & Certified Enterprise Trust
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href="https://login.webliix.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-semibold text-theme-primary bg-theme-primary/10 hover:bg-theme-primary/20 px-2.5 py-1 rounded-lg transition flex items-center gap-1.5 border border-theme-primary/30"
                        >
                          <LogIn className="w-3.5 h-3.5" />
                          <span>Client Portal Login</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                        <Link
                          to="/about"
                          className="text-xs font-mono font-semibold text-theme-muted hover:text-theme-primary transition flex items-center gap-1.5 group px-2.5 py-1 rounded-lg hover:bg-theme-primary/10"
                        >
                          <span>About Us</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-theme-primary" />
                        </Link>
                      </div>
                    </div>

                    {/* Main Mega Grid: 2 Company Columns (8 cols) + 1 Trust Spotlight Rail (4 cols) */}
                    <div className="grid grid-cols-12 gap-5">
                      
                      {/* Left: 2 Categorized Columns */}
                      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {companyCategories.map((category) => {
                          const CategoryIcon = category.icon;
                          return (
                            <div key={category.id} className="space-y-1.5">
                              <div className="flex items-center justify-between px-2 pb-1">
                                <span className="text-xs font-mono font-bold text-theme-text uppercase tracking-wider flex items-center gap-1.5">
                                  <CategoryIcon className="w-3.5 h-3.5 text-theme-primary" />
                                  <span>{category.title}</span>
                                </span>
                                <span className="text-[10px] font-mono text-theme-muted/80 px-2 py-0.5 rounded-full bg-theme-primary/5">
                                  {category.badge}
                                </span>
                              </div>

                              <div className="space-y-0.5">
                                {category.items.map((item) => {
                                  const Icon = item.icon;
                                  const isCurrent = item.path ? location.pathname === item.path : false;
                                  
                                  if (item.isExternal) {
                                    return (
                                      <a
                                        key={item.href || item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-xl transition-all duration-200 group flex items-start gap-3 hover:bg-theme-primary/[0.08] text-theme-text"
                                      >
                                        <div className="p-2 rounded-lg shrink-0 mt-0.5 transition-all duration-200 bg-theme-primary/10 text-theme-primary group-hover:bg-theme-primary group-hover:text-white">
                                          <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-0.5 flex-1 min-w-0">
                                          <div className="flex items-center justify-between gap-1">
                                            <h4 className="text-xs font-display font-semibold text-theme-text group-hover:text-theme-primary transition-colors truncate flex items-center gap-1">
                                              <span>{item.name}</span>
                                              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                                            </h4>
                                            <span className="text-[9px] font-mono text-theme-primary/80 px-1.5 py-0.5 rounded bg-theme-primary/10 shrink-0">
                                              {item.tag}
                                            </span>
                                          </div>
                                          <p className="text-[11px] text-theme-muted line-clamp-1 leading-snug">
                                            {item.desc}
                                          </p>
                                          <div className="text-[9px] font-mono text-theme-primary/80 font-medium pt-0.5 truncate">
                                            {item.meta}
                                          </div>
                                        </div>
                                      </a>
                                    );
                                  }

                                  return (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      className={`p-2.5 rounded-xl transition-all duration-200 group flex items-start gap-3 ${
                                        isCurrent
                                          ? 'bg-theme-primary/15 text-theme-primary font-semibold'
                                          : 'hover:bg-theme-primary/[0.08] text-theme-text'
                                      }`}
                                    >
                                      <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-all duration-200 ${
                                        isCurrent
                                          ? 'bg-theme-primary text-white shadow-sm'
                                          : 'bg-theme-primary/10 text-theme-primary group-hover:bg-theme-primary group-hover:text-white'
                                      }`}>
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div className="space-y-0.5 flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-1">
                                          <h4 className="text-xs font-display font-semibold text-theme-text group-hover:text-theme-primary transition-colors truncate">
                                            {item.name}
                                          </h4>
                                          <span className="text-[9px] font-mono text-theme-primary/80 px-1.5 py-0.5 rounded bg-theme-primary/10 shrink-0">
                                            {item.tag}
                                          </span>
                                        </div>
                                        <p className="text-[11px] text-theme-muted line-clamp-1 leading-snug">
                                          {item.desc}
                                        </p>
                                        <div className="text-[9px] font-mono text-theme-primary/80 font-medium pt-0.5 truncate">
                                          {item.meta}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Right: Company Spotlight Card */}
                      <div className="col-span-12 lg:col-span-4 flex flex-col justify-between p-4 rounded-xl border border-theme-primary/30 bg-gradient-to-br from-theme-primary/[0.08] via-theme-primary/[0.03] to-transparent relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/20 blur-2xl rounded-full pointer-events-none" />

                        <div className="space-y-3 relative z-10">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase font-bold text-theme-primary tracking-wider px-2 py-0.5 rounded-full bg-theme-primary/10">
                              Why Webliix?
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              MSME Verified
                            </span>
                          </div>

                          <div>
                            <h3 className="text-sm font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                              Engineered for Speed & Direct ROI
                            </h3>
                            <p className="text-xs text-theme-muted mt-1 leading-relaxed">
                              Zero bloated page builders. We build ultra-fast bespoke digital experiences with guaranteed 95+ PageSpeed scores and direct architect communication.
                            </p>
                          </div>

                          <div className="space-y-1.5 pt-1">
                            <div className="flex items-center gap-1.5 text-[11px] text-theme-text/90 font-medium">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span>100% In-House Code Ownership</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-theme-text/90 font-medium">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span>Direct Access to Senior Architects</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-theme-text/90 font-medium">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span>Zero Lock-In & Transparent Pricing</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-theme-border/20 relative z-10 space-y-2 mt-3">
                          <Link to="/portfolio" className="block w-full">
                            <SpatialButton
                              variant="primary"
                              className="w-full py-2 text-xs font-bold justify-center shadow-sm"
                              icon={ArrowRight}
                            >
                              Explore Portfolio
                            </SpatialButton>
                          </Link>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Trust Strip */}
                    <div className="pt-3 border-t border-theme-border/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono bg-theme-primary/[0.03] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 px-5 py-3 sm:px-6 rounded-b-[inherit]">
                      <div className="flex flex-wrap items-center gap-4 text-theme-muted text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Govt of India MSME Registered</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 fill-amber-400" />
                          <span>4.9/5★ Verified Client Satisfaction</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>Global Execution Across 12+ Countries</span>
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="text-xs font-bold text-theme-primary hover:underline flex items-center gap-1 self-end sm:self-auto"
                      >
                        <span>Schedule a 30-min Technical Discovery Call →</span>
                      </Link>
                    </div>
                  </WebliixCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          {/* Other Nav Links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs sm:text-sm font-medium tracking-tight transition-all relative py-1.5 ${
                isActive(link.path)
                  ? 'text-theme-primary font-bold'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-primary rounded-full shadow-[0_0_8px_var(--color-primary)]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Header Action Buttons & Social Icons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 z-20">
          <div className="flex items-center gap-1 border-r border-theme-border/60 pr-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-1.5 theme-rounded-btn text-theme-muted hover:text-theme-primary hover:bg-theme-primary/10 transition group"
              >
                <span className="group-hover:scale-110 transition-transform block">
                  {social.svg}
                </span>
              </a>
            ))}
          </div>

          {/* WhatsApp Professional SVG Icon Badge Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="p-2 theme-rounded-btn bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center group shadow-sm"
          >
            <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          <a
            href={`tel:${siteConfig.brand.contactPhone.replace(/\s+/g, '')}`}
            className="text-xs font-mono font-semibold text-theme-muted hover:text-theme-primary transition flex items-center gap-1.5 px-2.5 py-1.5 theme-rounded-btn hover:bg-theme-border/20"
          >
            <Phone className="w-3.5 h-3.5 text-theme-primary" />
            <span>{siteConfig.brand.contactPhone}</span>
          </a>

          <Link to="/contact">
            <SpatialButton variant="primary" className="text-xs py-2 px-4 shadow-sm" icon={ArrowUpRight}>
              Get Started
            </SpatialButton>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 theme-rounded-btn glass-spatial border border-theme-border/80 text-theme-text hover:text-theme-primary hover:border-theme-primary transition shadow-sm"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer inheriting WebliixCard */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden pointer-events-auto w-full max-w-7xl mx-auto pt-2 overflow-hidden"
          >
            <WebliixCard
              variant="spatial"
              tilt={false}
              hoverable={false}
              className="p-4 sm:p-5 space-y-4 max-h-[82vh] overflow-y-auto border border-theme-primary/40 shadow-spatial-2xl glass-spatial transition-[background-color,border-color,backdrop-filter,border-radius] duration-300"
              style={{
                backdropFilter: 'blur(var(--glass-blur, 12px))',
                WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
              }}
            >
              <nav className="flex flex-col space-y-1.5">
                {/* Home - only rendered when NOT on home page */}
                {location.pathname !== '/' && (
                  <Link
                    to="/"
                    className={`px-4 py-2.5 theme-rounded-btn text-sm font-semibold transition-all border ${
                      isActive('/')
                        ? 'bg-theme-primary text-white border-theme-primary shadow-sm font-bold'
                        : 'text-theme-text hover:bg-theme-primary/10 hover:border-theme-primary/40 border-transparent bg-theme-bg/30'
                    }`}
                  >
                    Home
                  </Link>
                )}

                {/* Mobile Services Accordion with Categories */}
                <div className="border border-theme-border/60 theme-rounded-card overflow-hidden bg-theme-bg/30">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full px-4 py-2.5 text-sm font-semibold flex items-center justify-between transition-colors ${
                      isServicesActive()
                        ? 'bg-theme-primary/15 text-theme-primary font-bold'
                        : 'text-theme-text hover:bg-theme-primary/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-theme-primary" />
                      <span>Services & Solutions</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180 text-theme-primary' : ''
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="p-3 space-y-3 bg-theme-bg/60 border-t border-theme-border/40">
                      
                      {/* Featured LaunchKit banner */}
                      <Link
                        to="/launch-kit"
                        className="p-3 theme-rounded-card border border-theme-primary/50 bg-theme-primary/15 flex items-center justify-between group shadow-sm hover:shadow-[0_4px_16px_var(--color-glow)] transition-all duration-300"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 theme-rounded-btn bg-theme-primary text-white">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-theme-text group-hover:text-theme-primary">
                              Webliix LaunchKit™
                            </div>
                            <div className="text-[10px] text-theme-muted">
                              Turnkey 5–7 Day Launch • From ₹9,999
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-theme-primary group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {/* Categorized List */}
                      {serviceCategories.map((category) => (
                        <div key={category.id} className="space-y-1.5 pt-1">
                          <div className="text-[10px] font-mono uppercase font-bold text-theme-primary tracking-wider px-1">
                            {category.title}
                          </div>
                          <div className="space-y-1">
                            {category.items.map((srv) => {
                              const Icon = srv.icon;
                              const isSrvActive = location.pathname === srv.path;
                              return (
                                <Link
                                  key={srv.path}
                                  to={srv.path}
                                  className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-all duration-200 ${
                                    isSrvActive
                                      ? 'bg-theme-primary text-white font-bold shadow-sm'
                                      : 'text-theme-text hover:bg-theme-primary/10 hover:text-theme-primary'
                                  }`}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <Icon className="w-3.5 h-3.5 shrink-0 text-theme-primary" />
                                    <span className="truncate">{srv.name}</span>
                                  </div>
                                  <span className="text-[10px] font-mono opacity-80 shrink-0 ml-2">
                                    {srv.tag}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}

                      <Link
                        to="/services"
                        className="px-3 py-2 text-xs font-mono font-bold text-theme-primary hover:bg-theme-primary/10 theme-rounded-btn flex items-center justify-between border border-theme-primary/30 mt-2 hover:shadow-[0_2px_10px_var(--color-glow)] transition-all"
                      >
                        <span>View Full Services Hub</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>

                
                {/* Mobile Company Accordion */}
                <div className="border border-theme-border/60 theme-rounded-card overflow-hidden bg-theme-bg/30">
                  <button
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    className={`w-full px-4 py-2.5 text-sm font-semibold flex items-center justify-between transition-colors ${
                      isCompanyActive()
                        ? 'bg-theme-primary/15 text-theme-primary font-bold'
                        : 'text-theme-text hover:bg-theme-primary/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-theme-primary" />
                      <span>Company</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileCompanyOpen ? 'rotate-180 text-theme-primary' : ''
                      }`}
                    />
                  </button>

                  {mobileCompanyOpen && (
                    <div className="p-3 space-y-3 bg-theme-bg/60 border-t border-theme-border/40">
                      {companyCategories.map((category) => (
                        <div key={category.id} className="space-y-1.5 pt-1">
                          <div className="text-[10px] font-mono uppercase font-bold text-theme-primary tracking-wider px-1">
                            {category.title}
                          </div>
                          <div className="space-y-1">
                            {category.items.map((item) => {
                              const Icon = item.icon;
                              const isItemActive = item.path ? location.pathname === item.path : false;

                              if (item.isExternal) {
                                return (
                                  <a
                                    key={item.href || item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-all duration-200 text-theme-text hover:bg-theme-primary/10 hover:text-theme-primary"
                                  >
                                    <div className="flex items-center gap-2 min-w-0">
                                      <Icon className="w-3.5 h-3.5 shrink-0 text-theme-primary" />
                                      <span className="truncate">{item.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1 shrink-0 ml-2">
                                      <span className="text-[10px] font-mono opacity-80">
                                        {item.tag}
                                      </span>
                                      <ArrowUpRight className="w-3 h-3 text-theme-primary" />
                                    </div>
                                  </a>
                                );
                              }

                              return (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-all duration-200 ${
                                    isItemActive
                                      ? 'bg-theme-primary text-white font-bold shadow-sm'
                                      : 'text-theme-text hover:bg-theme-primary/10 hover:text-theme-primary'
                                  }`}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <Icon className="w-3.5 h-3.5 shrink-0 text-theme-primary" />
                                    <span className="truncate">{item.name}</span>
                                  </div>
                                  <span className="text-[10px] font-mono opacity-80 shrink-0 ml-2">
                                    {item.tag}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other Navigation Links */}
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2.5 theme-rounded-btn text-sm font-semibold transition-all border ${
                      isActive(link.path)
                        ? 'bg-theme-primary text-white border-theme-primary shadow-sm font-bold'
                        : 'text-theme-text hover:bg-theme-primary/10 hover:border-theme-primary/40 border-transparent bg-theme-bg/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-3 border-t border-theme-border/60 space-y-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full p-2.5 theme-rounded-btn bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white font-mono text-xs font-bold shadow-sm transition"
                >
                  <WebliixIcon social="whatsapp" size="sm" color="inherit" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-mono text-theme-primary font-semibold uppercase tracking-wider">Official Socials</span>
                  <div className="flex items-center gap-1.5">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="p-2 theme-rounded-btn glass-spatial border border-theme-border/80 text-theme-muted hover:text-theme-primary hover:border-theme-primary transition group"
                      >
                        <span className="group-hover:scale-110 transition-transform block">
                          {social.svg}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="block w-full">
                  <SpatialButton variant="primary" className="w-full text-sm py-2.5" icon={ArrowUpRight}>
                    Get Started
                  </SpatialButton>
                </Link>
              </div>
            </WebliixCard>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

