import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, ExternalLink, CheckCircle2, TrendingUp, Phone, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import SpatialButton from '../components/ui/SpatialButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import auradrishtiImg from '../assets/logos/auradrishti.png';

export default function AuraDrishtiCaseStudy() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-12">
      <Helmet>
        <title>AuraDrishti Case Study | {siteConfig.brand.name}</title>
        <meta name="description" content="View how Webliix transformed AuraDrishti with brand logo identity, custom web application, Google Maps GMB setup, and local SEO lead generation." />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Header */}
      <div className="text-center space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" /> Featured Case Study
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-theme-text">
          AuraDrishti – Noida's Smart Security Experts
        </h1>
        <p className="text-theme-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          A complete digital transformation journey for AuraDrishti, a premier CCTV surveillance & security installation provider in Noida, NCR.
        </p>
      </div>

      {/* Main Showcase Card */}
      <GlassCard className="p-6 sm:p-10 border border-theme-border space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-theme-border bg-white/5 p-4 flex items-center justify-center">
            <img src={auradrishtiImg} alt="AuraDrishti Platform" className="max-h-56 w-auto object-contain" />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono text-theme-primary uppercase font-semibold">Security & Surveillance Tech</span>
            <h2 className="text-2xl font-display font-bold text-theme-text">The Transformation Overview</h2>
            <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
              AuraDrishti needed a high-trust digital presence to compete with local CCTV installers in Noida. Webliix delivered an end-to-end brand package including vector logo design, custom responsive website, Google Business profile, and lead generation ad campaigns.
            </p>
          </div>
        </div>

        {/* Deliverables Breakdown */}
        <div className="pt-6 border-t border-theme-border/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl glass-spatial border border-theme-border space-y-2">
            <h4 className="text-sm font-display font-bold text-theme-text">01. Vector Brand Identity</h4>
            <p className="text-xs text-theme-muted leading-relaxed">Tech-forward logo reflecting trust, surveillance security, and custom business collateral with scannable QR codes.</p>
          </div>

          <div className="p-5 rounded-2xl glass-spatial border border-theme-border space-y-2">
            <h4 className="text-sm font-display font-bold text-theme-text">02. Responsive Web Storefront</h4>
            <p className="text-xs text-theme-muted leading-relaxed">Custom mobile & desktop Web application featuring CCTV product catalogs, WhatsApp booking, and quote calculators.</p>
          </div>

          <div className="p-5 rounded-2xl glass-spatial border border-theme-border space-y-2">
            <h4 className="text-sm font-display font-bold text-theme-text">03. Local SEO & GMB Rank #1</h4>
            <p className="text-xs text-theme-muted leading-relaxed">Noida-specific keyword optimization on Google Maps for CCTV, DVR, NVR, and smart doorbell queries.</p>
          </div>
        </div>
      </GlassCard>

      {/* Measured Results */}
      <GlassCard className="p-8 border border-emerald-500/40 text-center space-y-6">
        <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
          Verified Impact & Results
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1">
            <span className="text-3xl font-display font-extrabold text-theme-primary">3x Growth</span>
            <span className="text-xs text-theme-muted block">Google My Business Visits</span>
          </div>
          <div className="space-y-1">
            <span className="text-3xl font-display font-extrabold text-emerald-400">2.5x Calls</span>
            <span className="text-xs text-theme-muted block">Direct Client Inquiries (30 Days)</span>
          </div>
          <div className="space-y-1">
            <span className="text-3xl font-display font-extrabold text-theme-secondary">+70% Traffic</span>
            <span className="text-xs text-theme-muted block">Organic Local Search Growth</span>
          </div>
        </div>
        <div className="pt-4">
          <a href="https://auradrishti.com" target="_blank" rel="noopener noreferrer" className="inline-block">
            <SpatialButton variant="primary" icon={ExternalLink}>
              Visit Live AuraDrishti Platform
            </SpatialButton>
          </a>
        </div>
      </GlassCard>
    </div>
  );
}
