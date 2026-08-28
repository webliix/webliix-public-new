// WebliixButton.jsx
import React, { useRef, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { useAudio } from '../../context/AudioContext';

/**
 * WebliixButton — Spatial / Edgy Button System
 *
 * Design:
 * - Spatial depth
 * - Magnetic pointer-tracked tilt
 * - Animated edge light
 * - Corner-bracket "targeting" accent (signature motif, shared with WebliixCard)
 * - Directional icon motion
 * - Premium press feedback
 * - Sharp, square edges throughout
 * - Theme controlled colors
 * - Reduced-motion friendly
 *
 * Variants:
 * primary  → Main CTA
 * ghost    → Secondary CTA
 * utility  → Tabs / filters / controls
 *
 * Sizes:
 * sm / md / lg
 */

const VARIANTS = {
  primary: [
    'relative',
    'overflow-hidden',
    'bg-theme-primary',
    'text-white',
    'border border-theme-primary',
    'shadow-[0_5px_18px_rgba(0,0,0,0.16)]',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-theme-primary/40',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-theme-background',
  ].join(' '),

  ghost: [
    'relative',
    'overflow-hidden',
    'group',
    'bg-transparent',
    'text-theme-text',
    'border border-theme-border',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-theme-primary/35',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-theme-background',
  ].join(' '),

  utility: [
    'relative',
    'overflow-hidden',
    'group',
    'bg-theme-card',
    'text-theme-muted',
    'border border-theme-border',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-theme-primary/30',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-theme-background',
  ].join(' '),
};

const SIZES = {
  sm: 'min-h-9 px-4 py-2 text-xs',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-[52px] px-7 py-3.5 text-base',
};

const GAPS = {
  sm: 'gap-1.5',
  md: 'gap-2',
  lg: 'gap-2.5',
};

const ICON_SIZE = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

// Elevated shadow per variant, applied on hover for extra spatial depth.
const HOVER_SHADOW = {
  primary: '0 16px 36px -8px rgba(0,0,0,0.28)',
  ghost: '0 10px 28px -10px rgba(0,0,0,0.18)',
  utility: '0 10px 26px -10px rgba(0,0,0,0.16)',
};

const BASE_SHADOW = {
  primary: '0 5px 18px rgba(0,0,0,0.16)',
  ghost: '0 0px 0px rgba(0,0,0,0)',
  utility: '0 0px 0px rgba(0,0,0,0)',
};

/* ─────────────────────────────────────────────
 * CORNER BRACKETS
 * Signature "targeting" accent — shared visual
 * language with WebliixCard. Two opposite
 * corners draw themselves in on hover. Sits
 * flush against the square edge now.
 * ───────────────────────────────────────────── */

function CornerBrackets({ reduceMotion }) {
  const armVariants = {
    rest: { opacity: 0, pathLength: 0.4, scale: 0.85 },
    hover: {
      opacity: 1,
      pathLength: 1,
      scale: 1,
      transition: { duration: reduceMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <motion.span
        aria-hidden="true"
        variants={armVariants}
        className="pointer-events-none absolute left-1.5 top-1.5 h-2.5 w-2.5 border-l-[1.5px] border-t-[1.5px] border-white/70 [.group_&]:border-theme-primary/70"
      />
      <motion.span
        aria-hidden="true"
        variants={armVariants}
        className="pointer-events-none absolute right-1.5 bottom-1.5 h-2.5 w-2.5 border-r-[1.5px] border-b-[1.5px] border-white/70 [.group_&]:border-theme-primary/70"
      />
    </>
  );
}

export default function WebliixButton({
  children,
  variant = 'primary',
  size = 'md',

  icon: Icon,
  iconLeft: IconLeft,

  fullWidth = false,

  loading = false,
  disabled = false,

  magnetic = true,

  className = '',
  onClick,

  ...props
}) {
  const { playHoverSound, playClickSound } = useAudio();
  const shouldReduceMotion = useReducedMotion();

  const isDisabled = disabled || loading;
  const isGhost = variant === 'ghost';
  const isUtility = variant === 'utility';
  const isPrimary = variant === 'primary';

  const btnRef = useRef(null);

  /* Magnetic pointer-tracked tilt — independent of the
     whileHover 'y' lift below, so the two never collide. */
  const rotateX = useSpring(0, { stiffness: 300, damping: 22, mass: 0.6 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 22, mass: 0.6 });
  const magX = useSpring(0, { stiffness: 250, damping: 20 });

  const handleMouseMove = useCallback(
    (e) => {
      if (isDisabled || !magnetic || shouldReduceMotion || !btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(px * 8);
      rotateX.set(py * -8);
      magX.set(px * 4);
    },
    [isDisabled, magnetic, shouldReduceMotion, rotateX, rotateY, magX]
  );

  const resetTilt = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    magX.set(0);
  }, [rotateX, rotateY, magX]);

  const handleClick = (e) => {
    if (isDisabled) return;
    playClickSound();
    if (onClick) onClick(e);
  };

  const handleMouseEnter = () => {
    if (!isDisabled) playHoverSound();
  };

  return (
    <motion.button
      ref={btnRef}
      type={props.type || 'button'}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial="rest"
      whileHover={!isDisabled ? 'hover' : undefined}
      whileTap={!isDisabled ? 'tap' : undefined}
      animate="rest"
      variants={{
        rest: {
          y: 0,
          scale: 1,
          boxShadow: BASE_SHADOW[variant] || BASE_SHADOW.primary,
        },
        hover: {
          y: -3,
          scale: 1,
          boxShadow: HOVER_SHADOW[variant] || HOVER_SHADOW.primary,
        },
        tap: {
          y: 0,
          scale: 0.965,
          boxShadow: BASE_SHADOW[variant] || BASE_SHADOW.primary,
        },
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 25, mass: 0.7 }}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        x: shouldReduceMotion ? 0 : magX,
        transformPerspective: 700,
      }}
      className={[
        VARIANTS[variant] || VARIANTS.primary,
        SIZES[size] || SIZES.md,

        'group',
        'inline-flex',
        'items-center',
        'justify-center',

        'font-display',
        'font-semibold',
        'tracking-wide',
        'select-none',
        'whitespace-nowrap',

        'will-change-transform',
        'transition-[border-color,background-color]',
        'duration-300',

        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
        'disabled:shadow-none',

        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {/* ═══════════════════════════════════════
          CORNER BRACKETS — signature accent
          ═══════════════════════════════════════ */}
      <CornerBrackets reduceMotion={shouldReduceMotion} />

      {/* ═══════════════════════════════════════
          PRIMARY — MOVING LIGHT EDGE
          ═══════════════════════════════════════ */}

      {isPrimary && (
        <>
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm"
            initial={{ x: '-140%' }}
            variants={{ hover: { x: '500%' } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-3 right-3 h-px bg-white/30"
          />

          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-white/25"
            initial={{ width: '0%' }}
            variants={{ hover: { width: '100%' } }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </>
      )}

      {/* ═══════════════════════════════════════
          GHOST — SPATIAL FILL
          ═══════════════════════════════════════ */}

      {isGhost && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 origin-left bg-theme-primary"
          initial={{ scaleX: 0 }}
          variants={{ hover: { scaleX: 1 } }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left center' }}
        />
      )}

      {isGhost && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 w-16 bg-white/10 blur-md"
          initial={{ x: '-120%' }}
          variants={{ hover: { x: '600%' } }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
        />
      )}

      {/* ═══════════════════════════════════════
          UTILITY — ACTIVE EDGE
          ═══════════════════════════════════════ */}

      {isUtility && (
        <>
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-theme-primary"
            initial={{ width: 0 }}
            variants={{ hover: { width: '55%' } }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />

          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-theme-primary/5"
            initial={{ opacity: 0 }}
            variants={{ hover: { opacity: 1 } }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}

      {/* ═══════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════ */}

      <motion.span
        className={[
          'relative',
          'z-10',
          'inline-flex',
          'items-center',
          GAPS[size] || GAPS.md,
          isGhost ? 'transition-colors duration-300 group-hover:text-white' : '',
        ].join(' ')}
      >
        {IconLeft && (
          <motion.span
            className="inline-flex shrink-0"
            variants={{ hover: !isDisabled ? { x: -2 } : {} }}
          >
            <IconLeft className={[ICON_SIZE[size] || ICON_SIZE.md, 'shrink-0'].join(' ')} />
          </motion.span>
        )}

        {loading ? (
          <>
            <motion.span
              aria-hidden="true"
              className="h-4 w-4 shrink-0 rounded-full border-2 border-current border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            />
            <span>{typeof children === 'string' ? 'Processing...' : children}</span>
          </>
        ) : (
          <>
            <span>{children}</span>

            {Icon && (
              <motion.span
                className="inline-flex shrink-0"
                variants={{ hover: !isDisabled ? { x: 5 } : {} }}
                transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              >
                <Icon className={[ICON_SIZE[size] || ICON_SIZE.md, 'shrink-0'].join(' ')} />
              </motion.span>
            )}
          </>
        )}
      </motion.span>
    </motion.button>
  );
}