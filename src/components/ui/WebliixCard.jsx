// WebliixCard.jsx
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useAudio } from '../../context/AudioContext';

/**
 * WebliixCard — Modern Spatial Card System
 * ─────────────────────────────────────────
 *
 * Design philosophy:
 * - Ultra-smooth modern card with zero 3D tilt jitter
 * - Subtle elevation transform with custom bezier curve
 * - Ambient colored depth shadow and gentle light lift on hover
 * - Interactive cursor-following spotlight glare & illuminated border gradient
 * - Mobile-safe: no sticky hover on touch devices
 *
 * VARIANTS: standard / surface / feature / featured / accent / spatial / stat / panel
 * PROPS: variant, accentColor, hoverable, clickable, hoverGlare, onClick, className
 */

const ACCENT_STYLES = {
  primary: {
    border: 'border-theme-primary/50',
    glow: 'var(--color-glow, rgba(56, 189, 248, 0.28))',
    badge: 'bg-theme-primary/10 text-theme-primary border-theme-primary/30',
  },
  success: {
    border: 'border-emerald-500/50',
    glow: 'rgba(16, 185, 129, 0.25)',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
  warning: {
    border: 'border-amber-500/50',
    glow: 'rgba(245, 158, 11, 0.25)',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  },
};

const VARIANTS = {
  standard: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.055)] group',
    hover: 'hover:border-theme-primary/60 hover:shadow-spatial',
    lift: -4,
  },
  surface: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.055)] group',
    hover: 'hover:border-theme-primary/60 hover:shadow-spatial',
    lift: -4,
  },
  feature: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.055)] group',
    hover: 'hover:border-theme-primary/70 hover:shadow-spatial',
    lift: -5,
  },
  featured: {
    base: 'bg-theme-card glass-spatial border border-theme-primary/40 theme-rounded-card shadow-[0_12px_40px_rgba(0,0,0,0.10)] relative overflow-hidden group',
    hover: 'hover:border-theme-primary/80 hover:shadow-spatial-lg',
    lift: -5,
  },
  accent: {
    base: 'bg-theme-card glass-spatial border border-theme-primary/45 theme-rounded-card shadow-[0_12px_40px_rgba(0,0,0,0.10)] relative overflow-hidden group',
    hover: 'hover:border-theme-primary/80 hover:shadow-spatial-lg',
    lift: -5,
  },
  spatial: {
    base: 'bg-theme-card glass-spatial border border-theme-primary/35 theme-rounded-card shadow-[0_16px_48px_rgba(0,0,0,0.12)] relative overflow-hidden group',
    hover: 'hover:border-theme-primary/75 hover:shadow-spatial-lg',
    lift: -5,
  },
  stat: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.055)] text-center group',
    hover: 'hover:border-theme-primary/60 hover:shadow-spatial',
    lift: -3,
  },
  panel: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card group',
    hover: 'hover:border-theme-primary/55',
    lift: -2,
  },
};

/* ─────────────────────────────────────────────
 * CORNER BRACKETS — signature motif matching WebliixButton
 * ───────────────────────────────────────────── */
function CornerBrackets() {
  const arm = 'pointer-events-none absolute h-2.5 w-2.5 border-theme-primary corner-bracket transition-all duration-300';
  return (
    <div className="corner-bracket pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-300">
      <span aria-hidden="true" className={`${arm} left-1.5 top-1.5 border-l-[1.5px] border-t-[1.5px] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]`} />
      <span aria-hidden="true" className={`${arm} right-1.5 top-1.5 border-r-[1.5px] border-t-[1.5px] group-hover:translate-x-[1px] group-hover:translate-y-[-1px]`} />
      <span aria-hidden="true" className={`${arm} left-1.5 bottom-1.5 border-l-[1.5px] border-b-[1.5px] group-hover:translate-x-[-1px] group-hover:translate-y-[1px]`} />
      <span aria-hidden="true" className={`${arm} right-1.5 bottom-1.5 border-r-[1.5px] border-b-[1.5px] group-hover:translate-x-[1px] group-hover:translate-y-[1px]`} />
    </div>
  );
}

// Shared mobile view detection to avoid adding duplicate resize listeners across cards
let isMobileCache = typeof window !== 'undefined'
  ? (window.innerWidth < 768 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0 && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)))
  : false;

const mobileListeners = new Set();
if (typeof window !== 'undefined') {
  const updateMobile = () => {
    isMobileCache = window.innerWidth < 768 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0 && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent));
    mobileListeners.forEach(fn => fn(isMobileCache));
  };
  window.addEventListener('resize', updateMobile, { passive: true });
  window.addEventListener('orientationchange', updateMobile, { passive: true });
}

export default function WebliixCard({
  children,
  variant = 'standard',
  accentColor = 'primary',
  active = false,
  hoverable,
  clickable = false,
  hoverGlare = true,
  tilt, // Ignored: 3D tilt mode intentionally removed for clean, modern flat hover
  onClick,
  className = '',
  style = {},
  ...props
}) {
  const { playClickSound } = useAudio();
  const cardRef = useRef(null);

  const [isMobileView, setIsMobileView] = useState(() => isMobileCache);

  useEffect(() => {
    mobileListeners.add(setIsMobileView);
    return () => {
      mobileListeners.delete(setIsMobileView);
    };
  }, []);

  const cfg = VARIANTS[variant] ?? VARIANTS.standard;
  const isFeatured = variant === 'featured' || variant === 'accent';
  const isSpatial = variant === 'spatial';
  const isFeature = variant === 'feature';
  const isStat = variant === 'stat';

  const isInteractive = clickable || onClick != null;
  const isHoverable = hoverable !== undefined ? hoverable : isInteractive || cfg.lift !== 0;

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current || isMobileView) return;
      const rect = cardRef.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;
      const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));

      // Direct DOM style property updates: 120 FPS cursor tracking with ZERO React component re-renders
      cardRef.current.style.setProperty('--mouse-x', `${x}%`);
      cardRef.current.style.setProperty('--mouse-y', `${y}%`);
      cardRef.current.style.setProperty('--glare-opacity', '1');

      if (isHoverable && cfg.lift !== 0) {
        cardRef.current.style.setProperty('--card-lift', `${cfg.lift}px`);
      }
    },
    [isHoverable, cfg.lift, isMobileView]
  );

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current || isMobileView) return;
    cardRef.current.style.setProperty('--glare-opacity', '1');
    if (isHoverable && cfg.lift !== 0) {
      cardRef.current.style.setProperty('--card-lift', `${cfg.lift}px`);
    }
  }, [isMobileView, isHoverable, cfg.lift]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--glare-opacity', '0');
    cardRef.current.style.setProperty('--card-lift', '0px');
  }, []);

  const handleClick = (e) => {
    if (!onClick) return;
    playClickSound();
    onClick(e);
  };

  const handleKeyDown = (e) => {
    if (!isInteractive) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  // Strip conflicting legacy transition and shadow classes passed from consumer pages
  const sanitizedClassName = className
    .replace(/\btransition-all\b/g, '')
    .replace(/\bhover:-translate-y-\d+\b/g, '')
    .trim();

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      style={{
        transform: 'translate3d(0, var(--card-lift, 0px), 0)',
        transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease',
        backdropFilter: 'blur(var(--glass-blur, 12px))',
        WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))',
        translate: '0 0',
        ...style,
      }}
      className={[
        'relative',
        'overflow-hidden',
        'group',
        'will-change-transform',
        'active:scale-[0.985]',
        cfg.base,
        isHoverable && cfg.hover ? cfg.hover : '',
        isInteractive ? 'cursor-pointer' : '',
        isInteractive
          ? 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-background'
          : '',
        active ? 'ring-1 ring-theme-primary/80 border-theme-primary shadow-spatial' : '',
        sanitizedClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {/* CORNER BRACKETS — signature accent, hidden on calm 'panel' variant */}
      {variant !== 'panel' && <CornerBrackets />}

      {/* INTERACTIVE BORDER GLOW ACCENT (Illuminates the edge near cursor on desktop) */}
      {!isMobileView && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 theme-rounded-card"
          style={{
            opacity: 'var(--glare-opacity, 0)',
            padding: '1px',
            background: `radial-gradient(360px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--color-primary, #38bdf8), transparent 70%)`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}

      {/* MOUSE-FOLLOWING SPOTLIGHT GLARE */}
      {hoverGlare && !isMobileView && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: 'var(--glare-opacity, 0)',
            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--color-glow, rgba(56, 189, 248, 0.16)), transparent 65%)`,
          }}
        />
      )}

      {/* SPATIAL GRID */}
      {isSpatial && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
      )}

      {/* SPATIAL AMBIENT LIGHT */}
      {isSpatial && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-theme-primary/10 blur-3xl"
        />
      )}

      {/* FEATURED TOP ACCENT + GPU-composited light sweep on hover */}
      {isFeatured && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-theme-primary/70 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 -left-24 h-px w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px] opacity-0 group-hover:opacity-100 group-hover:translate-x-[500px] transition-[transform,opacity] duration-1000 ease-out"
          />
        </>
      )}

      {/* FEATURE CARD CORNER DETAIL */}
      {isFeature && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-16 w-16 border-t border-r border-theme-primary/10 transition-all duration-300 group-hover:border-theme-primary/40"
        />
      )}

      {/* STAT CARD ACTIVE ACCENT */}
      {isStat && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 h-px w-12 -translate-x-1/2 bg-theme-primary opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-80"
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
