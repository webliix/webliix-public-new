// WebliixCard.jsx
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useAudio } from '../../context/AudioContext';
import { useTheme } from '../../context/ThemeContext';

/**
 * WebliixCard — Modern Spatial Card System
 * ─────────────────────────────────────────
 *
 * Design philosophy:
 * - Modern, spatial, premium, slightly edgy
 * - Sharp, square edges throughout
 * - Theme-driven, subtle depth
 * - GPU-composited 3D tilt & hover effects
 * - CSS corner-bracket "targeting" accent, shared motif with WebliixButton
 * - Zero non-composited animations / forced reflows
 *
 * VARIANTS: standard / surface / feature / featured / accent / spatial / stat / panel
 * PROPS: variant, accentColor, hoverable, clickable, hoverGlare, tilt, onClick, className
 */

const ACCENT_STYLES = {
  primary: {
    border: 'border-theme-primary/50',
    glow: 'var(--color-glow, rgba(37, 99, 235, 0.20))',
    badge: 'bg-theme-primary/10 text-theme-primary border-theme-primary/30',
  },
  success: {
    border: 'border-theme-primary/40',
    glow: 'var(--color-glow, rgba(37, 99, 235, 0.16))',
    badge: 'bg-theme-primary/10 text-theme-primary border-theme-primary/30',
  },
  warning: {
    border: 'border-theme-primary/40',
    glow: 'var(--color-glow, rgba(37, 99, 235, 0.16))',
    badge: 'bg-theme-primary/10 text-theme-primary border-theme-primary/30',
  },
};

const VARIANTS = {
  standard: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.055)] hover:shadow-spatial',
    hover: 'hover:border-theme-primary/50',
    lift: -3,
    tiltDeg: 2,
  },
  surface: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.055)] hover:shadow-spatial',
    hover: 'hover:border-theme-primary/50',
    lift: -3,
    tiltDeg: 2,
  },
  feature: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.055)] hover:shadow-spatial group',
    hover: 'hover:border-theme-primary/60',
    lift: -4,
    tiltDeg: 3,
  },
  featured: {
    base: 'bg-theme-card glass-spatial border border-theme-primary/40 theme-rounded-card shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:shadow-spatial-lg relative overflow-hidden',
    hover: 'hover:border-theme-primary/70',
    lift: -3,
    tiltDeg: 5,
  },
  accent: {
    base: 'bg-theme-card glass-spatial border border-theme-primary/40 theme-rounded-card shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:shadow-spatial-lg relative overflow-hidden',
    hover: 'hover:border-theme-primary/70',
    lift: -3,
    tiltDeg: 5,
  },
  spatial: {
    base: 'bg-theme-card glass-spatial border border-theme-primary/35 theme-rounded-card shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:shadow-spatial-lg relative overflow-hidden',
    hover: 'hover:border-theme-primary/65',
    lift: -2,
    tiltDeg: 6,
  },
  stat: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.055)] text-center group hover:shadow-spatial',
    hover: 'hover:border-theme-primary/55',
    lift: -2,
    tiltDeg: 2,
  },
  panel: {
    base: 'bg-theme-card glass-spatial border border-theme-border/80 theme-rounded-card',
    hover: 'hover:border-theme-primary/50',
    lift: 0,
    tiltDeg: 2,
  },
};

/* ─────────────────────────────────────────────
 * CORNER BRACKETS — signature motif matching WebliixButton
 * Pure composited CSS transitions (eliminates 166+ animated JS nodes)
 * ───────────────────────────────────────────── */
function CornerBrackets() {
  const arm = 'pointer-events-none absolute h-2.5 w-2.5 border-theme-primary corner-bracket opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-200 ease-out';
  return (
    <div className="corner-bracket pointer-events-none">
      <span aria-hidden="true" className={`${arm} left-1.5 top-1.5 border-l-[1.5px] border-t-[1.5px]`} />
      <span aria-hidden="true" className={`${arm} right-1.5 top-1.5 border-r-[1.5px] border-t-[1.5px]`} />
      <span aria-hidden="true" className={`${arm} left-1.5 bottom-1.5 border-l-[1.5px] border-b-[1.5px]`} />
      <span aria-hidden="true" className={`${arm} right-1.5 bottom-1.5 border-r-[1.5px] border-b-[1.5px]`} />
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
  hoverable,
  clickable = false,
  hoverGlare = true,
  tilt = true,
  onClick,
  className = '',
  style = {},
  ...props
}) {
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [tiltStyle, setTiltStyle] = useState(null);
  const { playClickSound } = useAudio();
  const { desktopTilt = true } = useTheme();
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

  const isTiltAllowed = tilt && desktopTilt && !isMobileView && cfg.tiltDeg > 0;

  const handleMouseMove = useCallback(
    (e) => {
      if (isMobileView || (!hoverGlare && !isTiltAllowed)) return;
      const rect = e.currentTarget.getBoundingClientRect();

      if (hoverGlare) {
        setGlarePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }

      if (isTiltAllowed) {
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setTiltStyle({
          rotateY: px * cfg.tiltDeg * 2,
          rotateX: py * -cfg.tiltDeg * 2,
        });
      }
    },
    [hoverGlare, isTiltAllowed, cfg.tiltDeg, isMobileView]
  );

  const handleMouseLeave = useCallback(() => {
    setTiltStyle(null);
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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      style={{
        transform: tiltStyle ? `perspective(1000px) rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg)` : undefined,
        backdropFilter: 'blur(var(--glass-blur, 12px))',
        WebkitBackdropFilter: 'blur(var(--glass-blur, 12px))',
        ...style,
      }}
      className={[
        'relative',
        'overflow-hidden',
        'group',
        'transition-[transform,border-color,background-color,box-shadow]',
        'duration-300',
        cfg.base,
        isHoverable && cfg.lift !== 0 ? 'hover:-translate-y-1' : '',
        isHoverable && cfg.hover ? cfg.hover : '',
        isInteractive ? 'cursor-pointer' : '',
        isInteractive
          ? 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-background'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {/* CORNER BRACKETS — signature accent, hidden on calm 'panel' variant */}
      {cfg.tiltDeg > 0 && <CornerBrackets />}

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
          className="pointer-events-none absolute top-0 right-0 h-16 w-16 border-t border-r border-theme-primary/10 transition-all duration-300 group-hover:border-theme-primary/30"
        />
      )}

      {/* STAT CARD ACTIVE ACCENT */}
      {isStat && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 h-px w-12 -translate-x-1/2 bg-theme-primary opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-70"
        />
      )}

      {/* MOUSE-FOLLOWING LIGHT */}
      {hoverGlare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${glarePos.x}% ${glarePos.y}%, var(--color-glow, rgba(37,99,235,0.10)), transparent 72%)`,
          }}
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}