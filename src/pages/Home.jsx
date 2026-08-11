import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, ArrowUpRight, ExternalLink, HelpCircle, ChevronDown, Check, Star, Award, Clock, Code, Target, Sparkles, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { businessConfig } from '../config/businessConfig';
import SpatialHeroCanvas from '../components/spatial/SpatialHeroCanvas';
import GlassCard from '../components/spatial/GlassCard';
import SpatialButton from '../components/ui/SpatialButton';
import QuoteEstimator from '../components/spatial/QuoteEstimator';
import InteractiveEcosystemHub from '../components/spatial/InteractiveEcosystemHub';
import { useModal } from '../context/ModalContext';

export default function Home() {
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const { openModal } = useModal();

  const handleOpenServiceModal = (service) => {
    openModal({
      title: `${service.icon} ${service.title}`,
      content: (
        <div className="space-y-4">
          <p className="text-theme-muted text-sm leading-relaxed">{service.fullDesc}</p>
          <div className="p-4 rounded-2xl glass-spatial border border-theme-primary/30 space-y-2">
            <span className="text-xs font-semibold text-theme-primary uppercase tracking-wider block mb-2">Key Deliverables</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-text">
              {service.features.map(feat => (
                <li key={feat} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-mono font-bold text-theme-primary">
              {service.startingPrice}
            </span>
            <Link to="/contact">
              <SpatialButton variant="primary" icon={ArrowUpRight}>
                Book Consultation
              </SpatialButton>
            </Link>
          </div>
        </div>
      )
    });
  };

  const faqs = [
    {
      q: 'How fast can my website be launched?',
      a: 'With our Webliix LaunchKit package, your complete website, brand logo, domain setup, Google Business Profile, and initial marketing campaign are fully live within 5 to 7 business days.'
    },
    {
      q: 'Do I get 100% ownership of my website and code?',
      a: 'Yes, absolutely. Once final deliverables are approved, you hold 100% ownership of all domain records, source code, design graphics, and account credentials with zero hidden platform lock-in fees.'
    },
    {
      q: 'What is included in the Google My Business (GMB) Local SEO setup?',
      a: 'We handle official business profile creation, Google Maps verification, NAP (Name, Address, Phone) citation consistency, local category tagging, and strategic keyword optimization to boost your local search ranking.'
    },
    {
      q: 'Can Webliix build custom e-commerce stores with online payments?',
      a: 'Yes! We build high-converting e-commerce stores using Shopify, WooCommerce, or custom React applications complete with UPI payment gateways, credit card checkout, order tracking, and mobile optimization.'
    },
    {
      q: 'Do you provide support after the website goes live?',
      a: 'Every Webliix project includes 30 days of complimentary post-launch technical support, performance monitoring, security checks, and minor content updates.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-6 h-6 text-theme-primary" />,
      title: '5-Day Fast Launch Guarantee',
      desc: 'No waiting for months. We deploy turnkey brand websites, local SEO profiles, and marketing campaigns in 5–7 days.'
    },
    {
      icon: <Code className="w-6 h-6 text-theme-primary" />,
      title: '100% Custom SOLID Code',
      desc: 'Clean React 18, Vite, and Next.js architectures optimized for 99/100 Google PageSpeed scores.'
    },
    {
      icon: <Target className="w-6 h-6 text-theme-primary" />,
      title: 'Local Google Map Rank #1',
      desc: 'Targeted local SEO citations and Google My Business profile optimization engineered to capture high-intent local phone calls.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-theme-primary" />,
      title: 'Transparent Pricing & Zero Lock-In',
      desc: 'Clear upfront pricing starting from ₹15,999 with 100% client code and domain ownership upon completion.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16">
      <Helmet>
        <title>{siteConfig.brand.name} | {siteConfig.brand.tagline}</title>
        <meta name="description" content={siteConfig.brand.heroSubtext} />
      </Helmet>

      {/* HERO SECTION WITH 3D CANVAS & INTERACTIVE CAPABILITY HUB */}
      <section className="relative pt-6 pb-16 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <SpatialHeroCanvas />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-[11px] font-mono text-theme-primary font-semibold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {siteConfig.brand.heroTag}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-theme-text leading-[1.08] tracking-tight"
          >
            Empower Your<br />
            <span className="text-shimmer">Digital Journey</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-theme-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            {siteConfig.brand.heroSubtext}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 pt-1"
          >
            <Link to="/contact">
              <SpatialButton variant="primary" icon={ArrowRight} className="text-xs sm:text-sm px-6 py-3">
                Start Your Project Free
              </SpatialButton>
            </Link>
            <Link to="/services">
              <SpatialButton variant="glass" className="text-xs sm:text-sm px-6 py-3">
                Explore Solutions
              </SpatialButton>
            </Link>
          </motion.div>

          {/* 3D INTERACTIVE ECOSYSTEM HUB */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <InteractiveEcosystemHub />
          </motion.div>

          {/* Trust Badges + Subtle Udyam Compliance Badge */}
          <div className="pt-4 flex flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[11px] font-mono text-theme-muted uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-theme-primary" /> 5-Day Launch</span>
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-theme-primary" /> 4 Continents</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-theme-primary" /> Enterprise Grade</span>
            </div>

            {/* Subtle Premium Compliance Link */}
            <Link
              to="/business-information"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-spatial border border-theme-primary/30 text-[10px] font-mono text-theme-primary hover:bg-theme-primary/10 transition group"
            >
              <Award className="w-3 h-3 text-theme-primary shrink-0" />
              <span>Udyam Registered Micro Enterprise • Udyam No. {businessConfig.udyamNumber}</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS SHOWCASE TICKER WITH SOLID WHITE BADGES */}
      <section className="relative z-10 py-10 border-y border-theme-border/40 bg-theme-bg/40 backdrop-blur-md overflow-hidden">
        <div className="text-center mb-6 text-[11px] font-mono text-theme-muted uppercase tracking-widest font-semibold">
          Trusted by Businesses & Innovative Brands Worldwide
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {siteConfig.clients.map((client, idx) => (
              <GlassCard
                key={idx}
                className="p-2.5 h-20 sm:h-24 flex items-center justify-center border border-theme-border/40 hover:border-theme-primary/60 transition-all group"
                hoverAudio={false}
              >
                <div className="w-full h-full flex items-center justify-center p-1 bg-white rounded-xl shadow-sm border border-gray-200">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain max-h-16 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* STATS METRICS SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.stats.map((stat, i) => (
            <GlassCard key={i} className="p-5 text-center border border-theme-border group hover:border-theme-primary/60 transition-all">
              <div className="text-2xl sm:text-4xl font-display font-extrabold text-theme-primary mb-1 group-hover:scale-105 transition-transform">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-theme-muted">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* INFORMATIVE SECTION: WHY CHOOSE WEBLIIX */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Competitive Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Why 120+ Businesses Choose Webliix
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            We combine high-speed web engineering with strategic local SEO to deliver real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyChooseUs.map((item, idx) => (
            <GlassCard key={idx} className="p-6 border border-theme-border flex gap-4 items-start group">
              <div className="p-3 rounded-2xl bg-theme-primary/10 border border-theme-primary/30 shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-theme-muted leading-relaxed">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Services & Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            High-Performance Digital Solutions
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Engineered for high performance, clean responsive design, and maximum client conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service) => (
            <GlassCard
              key={service.id}
              onClick={() => handleOpenServiceModal(service)}
              className="p-5 sm:p-6 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-theme-muted text-xs leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-theme-border flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-theme-primary">
                  {service.startingPrice}
                </span>
                <span className="text-theme-text font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* INTERACTIVE 4-STEP BLUEPRINT WORKFLOW */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Execution Blueprint
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Our 4-Step Launch Blueprint
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Click each step below to inspect how we take your project from strategy to launch.
          </p>
        </div>

        <GlassCard className="p-6 sm:p-8 border border-theme-border space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-theme-border/60 pb-4">
            {siteConfig.about.process.map((proc, index) => {
              const isActive = activeProcessStep === index;
              return (
                <button
                  key={proc.step}
                  onClick={() => setActiveProcessStep(index)}
                  className={`p-3 rounded-2xl text-left transition-all ${
                    isActive
                      ? 'bg-theme-primary text-white shadow-spatial font-semibold'
                      : 'glass-spatial text-theme-muted hover:text-theme-text'
                  }`}
                >
                  <span className="text-xs font-mono font-bold block opacity-80">{proc.step}</span>
                  <span className="text-xs font-display font-bold">{proc.title}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProcessStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono font-extrabold text-theme-primary">
                  {siteConfig.about.process[activeProcessStep].step}
                </span>
                <h3 className="text-xl font-display font-bold text-theme-text">
                  {siteConfig.about.process[activeProcessStep].title} Phase
                </h3>
              </div>
              <p className="text-theme-muted text-sm leading-relaxed max-w-2xl">
                {siteConfig.about.process[activeProcessStep].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </section>

      {/* FEATURED CLIENT PROJECTS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text mt-1">
              Featured Client Deliverables
            </h2>
          </div>
          <Link to="/portfolio">
            <SpatialButton variant="glass" className="text-xs py-2.5 px-4" icon={ArrowRight}>
              View All Projects
            </SpatialButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.portfolio.slice(0, 6).map((item) => (
            <GlassCard key={item.id} className="p-4 space-y-3 group">
              <div className="rounded-xl overflow-hidden border border-theme-border bg-theme-bg/60">
                <div className="px-2.5 py-1.5 border-b border-theme-border/60 flex items-center justify-between text-[10px] font-mono text-theme-muted">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-theme-primary font-semibold">{item.category}</span>
                </div>

                <div className="h-40 sm:h-44 overflow-hidden relative bg-white p-2 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="px-2.5 py-0.5 rounded-lg glass-spatial text-emerald-400 font-bold text-[10px] font-mono border border-emerald-500/30">
                      {item.metrics}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-theme-muted text-xs line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-1 flex items-center justify-between text-[11px] font-semibold text-theme-primary">
                <span>View Case Study</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ESTIMATOR SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <QuoteEstimator />
      </section>

      {/* INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold flex items-center justify-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <GlassCard key={idx} className="p-5 border border-theme-border">
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <h3 className="text-sm font-display font-bold text-theme-text">{faq.q}</h3>
                  <ChevronDown className={`w-4 h-4 text-theme-primary shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pt-3 border-t border-theme-border/60 mt-3 text-xs text-theme-muted leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <GlassCard className="p-8 sm:p-12 text-center border border-theme-primary/40 shadow-spatial-lg space-y-5">
          <h2 className="text-2xl sm:text-5xl font-display font-bold text-theme-text max-w-2xl mx-auto leading-tight">
            Transform Your Vision into <span className="text-shimmer">Digital Reality</span>
          </h2>
          <p className="text-theme-muted text-sm max-w-md mx-auto">
            Book a free consultation with Webliix digital specialists today. Packages starting from ₹15,999.
          </p>
          <div className="pt-2 flex justify-center">
            <Link to="/contact">
              <SpatialButton variant="primary" icon={ArrowUpRight} className="text-sm px-6 py-3">
                Talk to Us
              </SpatialButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
