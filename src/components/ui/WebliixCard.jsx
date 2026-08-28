// WebliixCard.jsx
import React, { useState, useRef, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { useAudio } from '../../context/AudioContext';

/**
 * WebliixCard — Modern Spatial Card System
 * ─────────────────────────────────────────
 *
 * Design philosophy:
 * - Modern, spatial, premium, slightly edgy
 * - Sharp, square edges throughout
 * - Theme-driven, subtle depth
 * - Mouse-tracked 3D tilt (spring-eased, respects reduced motion)
 * - Corner-bracket "targeting" accent, shared motif with WebliixButton
 * - Purposeful, one-shot motion — nothing loops or distracts at rest
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
    base: 'bg-theme-card border border-theme-border/80 rounded-none sm:rounded-[4px] shadow-[0_4px_20px_rgba(0,0,0,0.055)]',
    hover: 'hover:border-theme-primary/50',
    lift: -3,
    tiltDeg: 2,
  },
  surface: {
    base: 'bg-theme-card border border-theme-border/80 rounded-none sm:rounded-[4px] shadow-[0_4px_20px_rgba(0,0,0,0.055)]',
    hover: 'hover:border-theme-primary/50',
    lift: -3,
    tiltDeg: 2,
  },
  feature: {
    base: 'bg-theme-card border border-theme-border/80 rounded-none sm:rounded-[4px] shadow-[0_4px_20px_rgba(0,0,0,0.055)] group',
    hover: 'hover:border-theme-primary/60',
    lift: -4,
    tiltDeg: 3,
  },
  featured: {
    base: 'bg-theme-card border border-theme-primary/40 rounded-none sm:rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.10)] relative overflow-hidden',
    hover: 'hover:border-theme-primary/70',
    lift: -3,
    tiltDeg: 5,
  },
  accent: {
    base: 'bg-theme-card border border-theme-primary/40 rounded-none sm:rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.10)] relative overflow-hidden',
    hover: 'hover:border-theme-primary/70',
    lift: -3,
    tiltDeg: 5,
  },
  spatial: {
    base: 'bg-theme-card border border-theme-primary/35 rounded-none sm:rounded-[4px] shadow-[0_16px_48px_rgba(0,0,0,0.12)] relative overflow-hidden',
    hover: 'hover:border-theme-primary/65',
    lift: -2,
    tiltDeg: 6,
  },
  stat: {
    base: 'bg-theme-card border border-theme-border/80 rounded-none sm:rounded-[4px] shadow-[0_4px_20px_rgba(0,0,0,0.055)] text-center group',
    hover: 'hover:border-theme-primary/55',
    lift: -2,
    tiltDeg: 2,
  },
  panel: {
    base: 'bg-theme-card border border-theme-border/80 rounded-none sm:rounded-[4px]',
    hover: 'hover:border-theme-primary/50',
    lift: 0,
    tiltDeg: 2,
  },
};

const HOVER_SHADOW = {
  standard: '0 18px 40px -12px rgba(0,0,0,0.16)',
  surface: '0 18px 40px -12px rgba(0,0,0,0.16)',
  feature: '0 20px 44px -12px rgba(0,0,0,0.18)',
  stat: '0 18px 40px -14px rgba(0,0,0,0.14)',
  panel: 'none',
};

/* ─────────────────────────────────────────────
 * CORNER BRACKETS — signature motif matching WebliixButton
 * Sits flush against the edgy square edges
 * ───────────────────────────────────────────── */

function CornerBrackets() {
  const armVariants = {
    rest: { opacity: 0, scale: 0.8 },
    hover: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
  };
  const arm = 'pointer-events-none absolute h-2.5 w-2.5 border-theme-primary';
  return (
    <>
      <motion.span aria-hidden="true" variants={armVariants} className={`${arm} left-1.5 top-1.5 border-l-[1.5px] border-t-[1.5px]`} />
      <motion.span aria-hidden="true" variants={armVariants} className={`${arm} right-1.5 top-1.5 border-r-[1.5px] border-t-[1.5px]`} />
      <motion.span aria-hidden="true" variants={armVariants} className={`${arm} left-1.5 bottom-1.5 border-l-[1.5px] border-b-[1.5px]`} />
      <motion.span aria-hidden="true" variants={armVariants} className={`${arm} right-1.5 bottom-1.5 border-r-[1.5px] border-b-[1.5px]`} />
    </>
  );
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
  ...props
}) {
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const { playClickSound } = useAudio();
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);

  const cfg = VARIANTS[variant] ?? VARIANTS.standard;
  const isFeatured = variant === 'featured' || variant === 'accent';
  const isSpatial = variant === 'spatial';
  const isFeature = variant === 'feature';
  const isStat = variant === 'stat';

  const isInteractive = clickable || onClick != null;
  const isHoverable = hoverable !== undefined ? hoverable : isInteractive || cfg.lift !== 0;

  const accentCfg = ACCENT_STYLES[accentColor] ?? ACCENT_STYLES.primary;

  /* 3D pointer-tracked tilt, independent of the whileHover 'y' lift. */
  const rotateX = useSpring(0, { stiffness: 260, damping: 24, mass: 0.7 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 24, mass: 0.7 });

  const handleMouseMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();

      if (hoverGlare) {
        setGlarePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }

      if (tilt && cfg.tiltDeg > 0 && !shouldReduceMotion) {
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * cfg.tiltDeg * 2);
        rotateX.set(py * -cfg.tiltDeg * 2);
      }
    },
    [hoverGlare, tilt, cfg.tiltDeg, shouldReduceMotion, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const handleClick = (e) => {
    if (!onClick) return;
    playClickSound();
    onClick(e);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      initial="rest"
      animate="rest"
      whileHover={isHoverable ? 'hover' : undefined}
      variants={{
        rest: {
          y: 0,
          boxShadow: isFeatured
            ? `0 12px 40px rgba(0,0,0,0.09), 0 18px 48px -16px ${accentCfg.glow}`
            : undefined,
        },
        hover: {
          y: cfg.lift !== 0 ? cfg.lift : 0,
          boxShadow: isFeatured
            ? `0 20px 56px rgba(0,0,0,0.13), 0 26px 64px -14px ${accentCfg.glow}`
            : HOVER_SHADOW[variant] || undefined,
        },
      }}
      transition={{ type: 'spring', stiffness: 360, damping: 28, mass: 0.8 }}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      className={[
        'relative',
        'overflow-hidden',
        'will-change-transform',
        'transition-[border-color,background-color]',
        'duration-300',
        cfg.base,
        isHoverable && cfg.hover ? cfg.hover : '',
        isInteractive ? 'cursor-pointer' : '',
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

      {/* FEATURED TOP ACCENT + one-shot light sweep on hover */}
      {isFeatured && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-theme-primary/70 to-transparent"
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 h-px w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px]"
            initial={{ left: '-10%' }}
            variants={{ hover: { left: '110%' } }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${glarePos.x}% ${glarePos.y}%, var(--color-glow, rgba(37,99,235,0.10)), transparent 72%)`,
          }}
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}