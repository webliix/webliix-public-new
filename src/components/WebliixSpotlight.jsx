import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Rocket,
  Lightbulb,
  FileText,
  Tag,
  BellRing,
  Globe,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { currentSpotlight } from '../config/spotlightConfig';
import WebliixCard from './ui/WebliixCard';
import WebliixButton from './ui/WebliixButton';

// Icon and theme accent mapper for different spotlight content types
const TYPE_CONFIG = {
  launch: {
    icon: Rocket,
    label: 'LaunchKit',
    accentClass: 'text-theme-primary bg-theme-primary/10 border-theme-primary/20'
  },
  insight: {
    icon: Lightbulb,
    label: 'Webliix Insight',
    accentClass: 'text-amber-400 bg-amber-400/10 border-amber-400/20'
  },
  'case-study': {
    icon: FileText,
    label: 'Case Study',
    accentClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
  },
  offer: {
    icon: Tag,
    label: 'Special Feature',
    accentClass: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20'
  },
  update: {
    icon: BellRing,
    label: 'Webliix Update',
    accentClass: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20'
  },
  service: {
    icon: Layers,
    label: 'Featured Solution',
    accentClass: 'text-theme-primary bg-theme-primary/10 border-theme-primary/20'
  }
};

export default function WebliixSpotlight({ spotlight = currentSpotlight }) {
  if (!spotlight || spotlight.active === false) {
    return null;
  }

  const typeConfig = TYPE_CONFIG[spotlight.type] || TYPE_CONFIG.launch;
  const TypeIcon = typeConfig.icon;

  return (
    <section aria-label="Webliix Spotlight" className="relative z-10 w-full mx-auto my-2 sm:my-3">
      <WebliixCard
        variant="panel"
        tilt={false}
        hoverGlare={false}
        hoverable={false}
        className="p-6 sm:p-8 lg:p-10 border border-theme-primary/35 hover:border-theme-primary/65 shadow-spatial-md hover:shadow-spatial-lg relative overflow-hidden bg-theme-card/85 backdrop-blur-xl transition-all duration-300 ease-out group"
      >
        {/* Subtle Ambient Background Glow (Safely Contained) */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-theme-primary/10 blur-3xl pointer-events-none transition-opacity duration-300 group-hover:opacity-80"
        />

        <div className="relative z-10 space-y-6">
          {/* Header Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-theme-border/60">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-theme-primary">
                {spotlight.eyebrow || 'WEBLIIX SPOTLIGHT'}
              </span>
              <span className="hidden sm:inline-block text-theme-border/60">•</span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 theme-rounded-badge text-[10px] font-mono font-semibold bg-theme-primary/10 text-theme-primary border border-theme-primary/20">
                <TypeIcon className="w-3 h-3" />
                <span>{spotlight.badgeText || typeConfig.label}</span>
              </span>
            </div>

            {spotlight.period && (
              <span className="text-[11px] font-mono font-medium text-theme-muted tracking-wider uppercase">
                {spotlight.period}
              </span>
            )}
          </div>

          {/* Main 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline, Description & CTAs */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-theme-text leading-[1.18] tracking-tight">
                {spotlight.title}
              </h2>

              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed max-w-xl">
                {spotlight.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {spotlight.primaryCtaUrl && (
                  <Link to={spotlight.primaryCtaUrl}>
                    <WebliixButton variant="primary" size="md" icon={ArrowRight}>
                      {spotlight.primaryCtaText || 'Learn More'}
                    </WebliixButton>
                  </Link>
                )}

                {spotlight.secondaryCtaUrl && (
                  <Link to={spotlight.secondaryCtaUrl}>
                    <WebliixButton variant="ghost" size="md">
                      {spotlight.secondaryCtaText || 'Talk to Webliix'}
                    </WebliixButton>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Clean Supporting Visual / Deliverables Card */}
            <div className="lg:col-span-5">
              <div className="p-4 sm:p-5 theme-rounded-card glass-spatial border border-theme-border/70 group-hover:border-theme-primary/40 space-y-3 bg-theme-bg/40 shadow-inner transition-colors duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-theme-border/50">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 theme-rounded-btn bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-theme-text">
                      Key Highlights
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Live
                  </span>
                </div>

                {spotlight.highlights && spotlight.highlights.length > 0 ? (
                  <ul className="space-y-2 text-xs text-theme-text">
                    {spotlight.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-xs text-theme-muted leading-relaxed">
                    Designed and built with modern frameworks, transparent pricing, and zero technical hassle.
                  </div>
                )}

                <div className="pt-2 border-t border-theme-border/40 flex items-center justify-between text-[11px] font-mono text-theme-muted">
                  <span className="flex items-center gap-1">
                    <Globe className="w-3 h-3 text-theme-primary" />
                    <span>Serving Businesses Worldwide</span>
                  </span>
                  <Link
                    to={spotlight.primaryCtaUrl || '/launch-kit'}
                    className="text-theme-primary hover:underline font-bold flex items-center gap-0.5"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebliixCard>
    </section>
  );
}
