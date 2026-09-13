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
  Calculator,
  Globe2,
  Compass
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
  const location = useLocation();
  const { currentTheme, glassBlur } = useTheme();
  const dropdownTimeoutRef = useRef(null);

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
          tag: 'Rank #1',
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
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
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

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
    {
      name: 'GitHub',
      href: siteConfig.brand.socials.github,
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] w-full transition-all duration-500 ${
        scrolled
          ? 'glass-spatial border-b border-theme-border/80 shadow-spatial-lg'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(var(--glass-blur, 12px))' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(var(--glass-blur, 12px))' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-[68px] flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src={logoSrc}
            alt={siteConfig.brand.name}
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {/* Home Link */}
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
                  className="fixed top-16 sm:top-[66px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1140px] xl:max-w-[1200px] pt-2 z-50 pointer-events-auto"
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
                    <div className="flex items-center justify-between pb-3.5 border-b border-theme-border/60">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary">
                            Webliix Engineering & Growth Ecosystem
                          </span>
                        </div>
                        <span className="hidden sm:inline-block text-[11px] font-mono text-theme-muted/80 border-l border-theme-border/60 pl-3">
                          11+ Dedicated Solutions for Ambitious Businesses
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to="/services"
                          className="text-xs font-mono font-semibold text-theme-muted hover:text-theme-primary transition flex items-center gap-1.5 group px-2.5 py-1 theme-rounded-btn hover:bg-theme-primary/10 hover:shadow-[0_2px_10px_var(--color-glow)]"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-theme-primary" />
                        </Link>
                      </div>
                    </div>

                    {/* Main Mega Grid: 3 Service Columns + 1 LaunchKit Spotlight Rail */}
                    <div className="grid grid-cols-12 gap-5">
                      
                      {/* Left: 3 Categorized Service Columns (9 cols) */}
                      <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
                        
                        {/* Column 1: Web & App Engineering */}
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between px-1">
                            <span className="text-xs font-mono font-bold text-theme-text uppercase tracking-wider flex items-center gap-1.5">
                              <Layout className="w-3.5 h-3.5 text-theme-primary" />
                              <span>Engineering</span>
                            </span>
                            <span className="text-[10px] font-mono text-theme-muted px-1.5 py-0.5 theme-rounded-btn bg-theme-bg/60 border border-theme-border/40">
                              Full-Stack
                            </span>
                          </div>

                          <div className="space-y-2">
                            {serviceCategories[0].items.map((service) => {
                              const Icon = service.icon;
                              const isCurrent = location.pathname === service.path;
                              return (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className={`p-2.5 theme-rounded-card border transition-all duration-300 group flex items-start gap-2.5 ${
                                    isCurrent
                                      ? 'bg-theme-primary/20 border-theme-primary text-theme-primary shadow-[0_4px_16px_var(--color-glow)]'
                                      : 'border-theme-border/50 bg-theme-bg/30 hover:bg-theme-primary/10 hover:border-theme-primary hover:shadow-[0_4px_16px_var(--color-glow)]'
                                  }`}
                                  style={{
                                    backdropFilter: 'blur(var(--glass-blur, 12px))',
                                    WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
                                  }}
                                >
                                  <div className="p-1.5 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20 group-hover:scale-110 group-hover:bg-theme-primary group-hover:text-white transition-all duration-300 shrink-0 mt-0.5 shadow-sm">
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="space-y-0.5 flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <h4 className="text-xs font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors truncate">
                                        {service.name}
                                      </h4>
                                    </div>
                                    <p className="text-[11px] text-theme-muted line-clamp-1 leading-snug">
                                      {service.desc}
                                    </p>
                                    <div className="text-[9px] font-mono text-theme-primary font-semibold pt-0.5 truncate">
                                      {service.meta}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Column 2: Growth & Advertising */}
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between px-1">
                            <span className="text-xs font-mono font-bold text-theme-text uppercase tracking-wider flex items-center gap-1.5">
                              <Target className="w-3.5 h-3.5 text-theme-primary" />
                              <span>Growth & Ads</span>
                            </span>
                            <span className="text-[10px] font-mono text-theme-muted px-1.5 py-0.5 theme-rounded-btn bg-theme-bg/60 border border-theme-border/40">
                              ROI Driven
                            </span>
                          </div>

                          <div className="space-y-2">
                            {serviceCategories[1].items.map((service) => {
                              const Icon = service.icon;
                              const isCurrent = location.pathname === service.path;
                              return (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className={`p-2.5 theme-rounded-card border transition-all duration-300 group flex items-start gap-2.5 ${
                                    isCurrent
                                      ? 'bg-theme-primary/20 border-theme-primary text-theme-primary shadow-[0_4px_16px_var(--color-glow)]'
                                      : 'border-theme-border/50 bg-theme-bg/30 hover:bg-theme-primary/10 hover:border-theme-primary hover:shadow-[0_4px_16px_var(--color-glow)]'
                                  }`}
                                  style={{
                                    backdropFilter: 'blur(var(--glass-blur, 12px))',
                                    WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
                                  }}
                                >
                                  <div className="p-1.5 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20 group-hover:scale-110 group-hover:bg-theme-primary group-hover:text-white transition-all duration-300 shrink-0 mt-0.5 shadow-sm">
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="space-y-0.5 flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <h4 className="text-xs font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors truncate">
                                        {service.name}
                                      </h4>
                                    </div>
                                    <p className="text-[11px] text-theme-muted line-clamp-1 leading-snug">
                                      {service.desc}
                                    </p>
                                    <div className="text-[9px] font-mono text-theme-primary font-semibold pt-0.5 truncate">
                                      {service.meta}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Column 3: Creative & Care + Interactive Cost Estimator CTA */}
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between px-1">
                            <span className="text-xs font-mono font-bold text-theme-text uppercase tracking-wider flex items-center gap-1.5">
                              <Palette className="w-3.5 h-3.5 text-theme-primary" />
                              <span>Design & Care</span>
                            </span>
                            <span className="text-[10px] font-mono text-theme-muted px-1.5 py-0.5 theme-rounded-btn bg-theme-bg/60 border border-theme-border/40">
                              24/7 Support
                            </span>
                          </div>

                          <div className="space-y-2">
                            {serviceCategories[2].items.map((service) => {
                              const Icon = service.icon;
                              const isCurrent = location.pathname === service.path;
                              return (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className={`p-2.5 theme-rounded-card border transition-all duration-300 group flex items-start gap-2.5 ${
                                    isCurrent
                                      ? 'bg-theme-primary/20 border-theme-primary text-theme-primary shadow-[0_4px_16px_var(--color-glow)]'
                                      : 'border-theme-border/50 bg-theme-bg/30 hover:bg-theme-primary/10 hover:border-theme-primary hover:shadow-[0_4px_16px_var(--color-glow)]'
                                  }`}
                                  style={{
                                    backdropFilter: 'blur(var(--glass-blur, 12px))',
                                    WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
                                  }}
                                >
                                  <div className="p-1.5 theme-rounded-btn bg-theme-primary/10 text-theme-primary border border-theme-primary/20 group-hover:scale-110 group-hover:bg-theme-primary group-hover:text-white transition-all duration-300 shrink-0 mt-0.5 shadow-sm">
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="space-y-0.5 flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <h4 className="text-xs font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors truncate">
                                        {service.name}
                                      </h4>
                                    </div>
                                    <p className="text-[11px] text-theme-muted line-clamp-1 leading-snug">
                                      {service.desc}
                                    </p>
                                    <div className="text-[9px] font-mono text-theme-primary font-semibold pt-0.5 truncate">
                                      {service.meta}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}

                            {/* Interactive Instant Estimate Card */}
                            <Link
                              to="/services"
                              className="p-3 theme-rounded-card border border-theme-primary/30 bg-theme-primary/10 hover:bg-theme-primary/20 hover:border-theme-primary hover:shadow-[0_4px_16px_var(--color-glow)] transition-all duration-300 group block space-y-1"
                              style={{
                                backdropFilter: 'blur(var(--glass-blur, 12px))',
                                WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
                              }}
                            >
                              <div className="flex items-center gap-2 text-theme-primary font-bold text-xs">
                                <Calculator className="w-3.5 h-3.5" />
                                <span>Instant Quote Estimator</span>
                              </div>
                              <p className="text-[11px] text-theme-muted leading-tight">
                                Calculate instant custom project scopes & turnaround timelines.
                              </p>
                              <span className="text-[10px] font-mono font-bold text-theme-primary group-hover:underline inline-flex items-center gap-1 pt-1">
                                Calculate Scope <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            </Link>
                          </div>
                        </div>

                      </div>

                      {/* Right: Featured Showcase Rail (3 cols) */}
                      <div className="col-span-12 lg:col-span-3 flex flex-col">
                        <div
                          className="p-4 sm:p-4.5 theme-rounded-card border border-theme-primary/40 bg-gradient-to-br from-theme-primary/15 via-theme-bg/60 to-theme-primary/5 relative overflow-hidden flex flex-col justify-between h-full shadow-[0_8px_32px_var(--color-glow)] space-y-3.5 transition-[background-color,border-color,border-radius] duration-300"
                          style={{
                            backdropFilter: 'blur(var(--glass-blur, 12px))',
                            WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))'
                          }}
                        >
                          {/* Ambient glow accent */}
                          <div className="absolute -top-12 -right-12 w-28 h-28 bg-theme-primary/20 rounded-full blur-2xl pointer-events-none" />

                          <div className="space-y-2.5 relative z-10">
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 theme-rounded-btn bg-theme-primary/20 text-theme-primary border border-theme-primary/40 text-[10px] font-mono font-bold">
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

                          <div className="pt-2 border-t border-theme-border/60 relative z-10 space-y-2">
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
                    <div className="pt-3 border-t border-theme-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono bg-theme-primary/5 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 px-5 py-3 sm:px-6 rounded-b-[inherit]">
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
        <div className="hidden lg:flex items-center gap-3">
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
            className="lg:hidden overflow-hidden px-4 pt-1 pb-4"
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
                {/* Home */}
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
                                  className={`px-3 py-2 theme-rounded-btn text-xs font-medium flex items-center justify-between transition-all duration-200 ${
                                    isSrvActive
                                      ? 'bg-theme-primary text-white font-bold shadow-sm'
                                      : 'text-theme-text hover:bg-theme-primary/10 hover:text-theme-primary bg-theme-bg/40 border border-theme-border/30 hover:border-theme-primary/50'
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

