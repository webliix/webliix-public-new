// WebliixInput.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for ALL form elements across the Webliix website.
// Designed with the signature Webliix spatial aesthetic:
// - Edgy, crisp geometric borders matching WebliixCard & WebliixButton
// - Theme-controlled CSS variables (--color-primary, glass-spatial, etc.)
// - Sharp corner accents & high-contrast focus rings
// - Responsive, tactile, and accessible
//
// Exports:
//   WebliixInput       → <input> (text / tel / email / url / number / password)
//   WebliixTextarea    → <textarea>
//   WebliixSelect      → <select> with crisp chevron
//   WebliixLabel       → <label> — uppercase mono/display tracking, required star
//   WebliixCheckbox    → <input type="checkbox"> — edgy custom checkbox
//   WebliixFieldGroup  → Wrapper: label + input + optional hint / error
//   WebliixFormCard    → WebliixCard-based form container
//   netlifyEncode      → URL-encode helper for Netlify forms
// ─────────────────────────────────────────────────────────────────────────────

import React, { forwardRef } from 'react';
import { ChevronDown, AlertCircle, CheckCircle2 } from 'lucide-react';
import WebliixCard from './WebliixCard';

// ─── Shared Edgy Base Classes ───────────────────────────────────────────────
// Sharp, square edges throughout to match WebliixCard and WebliixButton
const BASE_INPUT = [
  'w-full',
  'px-4 py-3',
  'rounded-none sm:rounded-[4px]',
  'glass-spatial',
  'border border-theme-border/80',
  'text-theme-text text-sm',
  'placeholder:text-theme-muted/40',
  'bg-theme-bg/60',
  'hover:border-theme-primary/50',
  'focus:outline-none',
  'focus:border-theme-primary',
  'focus:ring-1 focus:ring-theme-primary/40',
  'focus:shadow-[0_0_15px_rgba(var(--color-primary-rgb,37,99,235),0.15)]',
  'transition-all duration-150',
  'disabled:opacity-50 disabled:cursor-not-allowed',
].join(' ');

// State modifiers
const STATE_CLASSES = {
  default: '',
  error:   'border-rose-400 focus:border-rose-400 focus:ring-rose-400/40 shadow-[0_0_10px_rgba(244,63,94,0.15)]',
  success: 'border-emerald-400 focus:border-emerald-400 focus:ring-emerald-400/40 shadow-[0_0_10px_rgba(52,211,153,0.15)]',
};

// ─── WebliixLabel ────────────────────────────────────────────────────────────
/**
 * Consistent edgy label component.
 */
export function WebliixLabel({ children, required, optional, htmlFor, className = '', ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={[
        'block text-[11px] font-mono font-bold text-theme-muted',
        'uppercase tracking-wider mb-1.5',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
      {required && <span className="text-rose-400 ml-1 font-bold">*</span>}
      {optional && (
        <span className="ml-1.5 normal-case font-normal text-theme-muted/50 text-[10px] tracking-normal">
          (optional)
        </span>
      )}
    </label>
  );
}

// ─── WebliixInput ────────────────────────────────────────────────────────────
/**
 * Edgy text/tel/email/number/password/url input.
 */
export const WebliixInput = forwardRef(function WebliixInput(
  {
    state = 'default',
    icon: Icon,
    iconRight: IconRight,
    className = '',
    ...props
  },
  ref
) {
  const stateClass = STATE_CLASSES[state] || STATE_CLASSES.default;

  if (Icon || IconRight) {
    return (
      <div className="relative group">
        {Icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-theme-muted/60 group-focus-within:text-theme-primary transition-colors">
            <Icon className="w-4 h-4" />
          </span>
        )}
        <input
          ref={ref}
          className={[
            BASE_INPUT,
            stateClass,
            Icon ? 'pl-10' : '',
            IconRight ? 'pr-10' : '',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />
        {IconRight && (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-theme-muted/60 group-focus-within:text-theme-primary transition-colors">
            <IconRight className="w-4 h-4" />
          </span>
        )}
      </div>
    );
  }

  return (
    <input
      ref={ref}
      className={[BASE_INPUT, stateClass, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
});

// ─── WebliixTextarea ─────────────────────────────────────────────────────────
/**
 * Edgy multi-line text input.
 */
export const WebliixTextarea = forwardRef(function WebliixTextarea(
  { state = 'default', rows = 4, resize = 'none', className = '', ...props },
  ref
) {
  const stateClass = STATE_CLASSES[state] || STATE_CLASSES.default;
  const resizeClass = {
    none:       'resize-none',
    vertical:   'resize-y',
    horizontal: 'resize-x',
    both:       'resize',
  }[resize] || 'resize-none';

  return (
    <textarea
      ref={ref}
      rows={rows}
      className={[BASE_INPUT, stateClass, resizeClass, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
});

// ─── WebliixSelect ───────────────────────────────────────────────────────────
/**
 * Edgy themed <select> with chevron indicator.
 */
export const WebliixSelect = forwardRef(function WebliixSelect(
  { state = 'default', placeholder, options, className = '', children, ...props },
  ref
) {
  const stateClass = STATE_CLASSES[state] || STATE_CLASSES.default;

  return (
    <div className="relative group">
      <select
        ref={ref}
        className={[
          BASE_INPUT,
          stateClass,
          'pr-10 appearance-none cursor-pointer',
          'bg-theme-bg',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options
          ? options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))
          : children}
      </select>
      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-theme-muted/60 group-focus-within:text-theme-primary transition-colors">
        <ChevronDown className="w-4 h-4" />
      </span>
    </div>
  );
});

// ─── WebliixCheckbox ─────────────────────────────────────────────────────────
/**
 * Edgy custom checkbox with square theme primary indicator.
 */
export const WebliixCheckbox = forwardRef(function WebliixCheckbox(
  { label, id, className = '', ...props },
  ref
) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group select-none">
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className="sr-only peer"
          {...props}
        />
        {/* Edgy Square Checkbox Box */}
        <div
          className={[
            'w-4.5 h-4.5 rounded-none sm:rounded-[2px] border border-theme-border/80',
            'glass-spatial transition-all duration-150',
            'peer-checked:bg-theme-primary peer-checked:border-theme-primary',
            'peer-focus:ring-2 peer-focus:ring-theme-primary/40',
            'group-hover:border-theme-primary/60',
            className,
          ].join(' ')}
        />
        {/* Checkmark SVG */}
        <svg
          viewBox="0 0 12 12"
          className="absolute inset-0 w-full h-full p-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M2 6l3 3 5-5" />
        </svg>
      </div>
      {label && (
        <span className="text-xs sm:text-sm text-theme-muted leading-relaxed group-hover:text-theme-text transition-colors duration-150">
          {label}
        </span>
      )}
    </label>
  );
});

// ─── WebliixFieldGroup ───────────────────────────────────────────────────────
/**
 * Combines label + input + optional hint text and error/success messages.
 */
export function WebliixFieldGroup({
  label,
  required,
  optional,
  hint,
  error,
  success,
  htmlFor,
  children,
  className = '',
}) {
  const state = error ? 'error' : success ? 'success' : 'default';

  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const isFormPrimitive = [WebliixInput, WebliixTextarea, WebliixSelect].includes(child.type);
    return isFormPrimitive ? React.cloneElement(child, { state }) : child;
  });

  return (
    <div className={['space-y-1.5', className].join(' ')}>
      {label && (
        <WebliixLabel htmlFor={htmlFor} required={required} optional={optional}>
          {label}
        </WebliixLabel>
      )}
      {enhancedChildren}
      {hint && !error && !success && (
        <p className="text-[11px] font-mono text-theme-muted/65 leading-snug">{hint}</p>
      )}
      {error && (
        <p className="flex items-center gap-1.5 text-[11px] font-mono text-rose-400 leading-snug pt-0.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}
      {success && (
        <p className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 leading-snug pt-0.5">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
          {success}
        </p>
      )}
    </div>
  );
}

// ─── WebliixFormCard ─────────────────────────────────────────────────────────
/**
 * A WebliixCard-wrapped form container.
 */
export function WebliixFormCard({
  title,
  subtitle,
  badge,
  headerIcon: HeaderIcon,
  variant = 'spatial',
  className = '',
  cardClass = '',
  children,
}) {
  return (
    <WebliixCard variant={variant} className={cardClass}>
      <div className={['p-6 sm:p-8 space-y-6', className].join(' ')}>
        {(badge || title || subtitle) && (
          <div className="space-y-2">
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none sm:rounded-[4px] bg-theme-primary/15 border border-theme-primary/30 text-theme-primary text-[11px] font-mono font-bold uppercase tracking-widest">
                {HeaderIcon && <HeaderIcon className="w-3 h-3 shrink-0" />}
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-2xl font-display font-bold text-theme-text leading-snug">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm text-theme-muted leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </WebliixCard>
  );
}

// ─── Netlify encode helper ───────────────────────────────────────────────────
export function netlifyEncode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}
