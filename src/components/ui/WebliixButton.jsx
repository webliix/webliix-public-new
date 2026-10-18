// WebliixButton.jsx
import React, { forwardRef } from 'react';
import { useAudio } from '../../context/AudioContext';

/**
 * WebliixButton — Spatial / Edgy Button System
 * Optimized with pure GPU-composited CSS transitions to eliminate
 * non-composited animation warnings and heavy Framer Motion runtime overhead.
 *
 * Variants:
 * primary    → Main CTA
 * ghost      → Secondary CTA
 * secondary  → Alias for ghost
 * utility    → Tabs / filters / controls
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
    'theme-rounded-btn',
    'shadow-[0_5px_18px_rgba(0,0,0,0.16)]',
    'hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.28)]',
    'hover:-translate-y-0.5',
    'active:translate-y-0',
    'active:scale-[0.98]',
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
    'theme-rounded-btn',
    'hover:shadow-[0_10px_28px_-10px_rgba(0,0,0,0.18)]',
    'hover:-translate-y-0.5',
    'active:translate-y-0',
    'active:scale-[0.98]',
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
    'theme-rounded-btn',
    'hover:shadow-[0_10px_26px_-10px_rgba(0,0,0,0.16)]',
    'hover:-translate-y-0.5',
    'active:translate-y-0',
    'active:scale-[0.98]',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-theme-primary/30',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-theme-background',
  ].join(' '),
};

VARIANTS.secondary = VARIANTS.ghost;

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

/* ─────────────────────────────────────────────
 * CORNER BRACKETS
 * Signature "targeting" accent — shared visual
 * language with WebliixCard. Two opposite
 * corners draw themselves in on hover.
 * Pure GPU-composited CSS transitions.
 * ───────────────────────────────────────────── */
function CornerBrackets({ variant }) {
  const borderColor = variant === 'primary' ? 'border-white/70' : 'border-theme-primary/70';
  const arm = `pointer-events-none absolute h-2.5 w-2.5 ${borderColor} opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-200 ease-out corner-bracket`;

  return (
    <div className="corner-bracket pointer-events-none">
      <span
        aria-hidden="true"
        className={`${arm} left-1.5 top-1.5 border-l-[1.5px] border-t-[1.5px]`}
      />
      <span
        aria-hidden="true"
        className={`${arm} right-1.5 bottom-1.5 border-r-[1.5px] border-b-[1.5px]`}
      />
    </div>
  );
}

const WebliixButton = forwardRef(function WebliixButton(
  {
    children,
    variant = 'primary',
    size = 'md',

    icon: Icon,
    iconLeft: IconLeft,
    iconOnly = false,

    fullWidth = false,

    loading = false,
    disabled = false,
    active = false,

    magnetic = true, // Retained for API compatibility

    className = '',
    onClick,
    type = 'button',

    ...props
  },
  ref
) {
  const { playHoverSound, playClickSound } = useAudio();

  const isDisabled = disabled || loading;
  const isGhost = variant === 'ghost' || variant === 'secondary';
  const isUtility = variant === 'utility';
  const isPrimary = variant === 'primary';

  const handleClick = (e) => {
    if (isDisabled) return;
    playClickSound();
    if (onClick) onClick(e);
  };

  const handleMouseEnter = () => {
    if (!isDisabled) playHoverSound();
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-pressed={active ? true : undefined}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={[
        VARIANTS[variant] || VARIANTS.primary,
        SIZES[size] || SIZES.md,
        active ? '!border-theme-primary !bg-theme-primary/15 !text-theme-primary font-bold shadow-sm' : '',

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
        'transition-[transform,box-shadow,border-color,background-color,color]',
        'duration-200',
        'ease-out',

        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
        'disabled:shadow-none',
        'disabled:hover:translate-y-0',
        'disabled:active:scale-100',

        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {/* CORNER BRACKETS — signature accent */}
      <CornerBrackets variant={variant} />

      {/* PRIMARY — MOVING LIGHT EDGE */}
      {isPrimary && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm -translate-x-[140%] group-hover:translate-x-[500%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-3 right-3 h-px bg-white/30"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-white/25 w-0 group-hover:w-full transition-[width] duration-300 ease-out"
          />
        </>
      )}

      {/* GHOST / SECONDARY — SPATIAL FILL */}
      {isGhost && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 origin-left bg-theme-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transformOrigin: 'left center' }}
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 w-16 bg-white/10 blur-md -translate-x-[120%] group-hover:translate-x-[600%] transition-transform duration-700 ease-out delay-75"
          />
        </>
      )}

      {/* UTILITY — ACTIVE EDGE */}
      {isUtility && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-theme-primary w-0 group-hover:w-[55%] transition-[width] duration-300 ease-out"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-theme-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </>
      )}

      {/* CONTENT */}
      <span
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
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
            <IconLeft className={[ICON_SIZE[size] || ICON_SIZE.md, 'shrink-0'].join(' ')} />
          </span>
        )}

        {loading ? (
          <>
            <span
              aria-hidden="true"
              className="h-4 w-4 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin"
            />
            <span>{typeof children === 'string' ? 'Processing...' : children}</span>
          </>
        ) : (
          <>
            {children !== undefined && children !== null && children !== false && <span>{children}</span>}

            {Icon && (
              <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                <Icon className={[ICON_SIZE[size] || ICON_SIZE.md, 'shrink-0'].join(' ')} />
              </span>
            )}
          </>
        )}
      </span>
    </button>
  );
});

export default WebliixButton;