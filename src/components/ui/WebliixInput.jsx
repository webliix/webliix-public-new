// WebliixInput.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for ALL form elements across the Webliix website.
// Every component inherits theme CSS variables (--color-primary, etc.) so
// the SpatialThemeControl floating panel instantly re-skins every form.
//
// Exports:
//   WebliixInput       → <input> — text / tel / email / url / number / password
//   WebliixTextarea    → <textarea>
//   WebliixSelect      → <select> with chevron
//   WebliixLabel       → <label> — uppercase tracking, optional required star
//   WebliixCheckbox    → <input type="checkbox"> — theme-styled custom checkbox
//   WebliixFieldGroup  → Wrapper: label + input + optional hint / error
//   WebliixFormCard    → WebliixCard-based form container with header slot
// ─────────────────────────────────────────────────────────────────────────────

import React, { forwardRef } from 'react';
import { ChevronDown, AlertCircle, CheckCircle2 } from 'lucide-react';
import WebliixCard from './WebliixCard';

// ─── Shared base classes ────────────────────────────────────────────────────
// Uses only theme tokens — never raw Tailwind color classes.
const BASE_INPUT = [
  'w-full',
  'px-4 py-3',
  'rounded-xl',
  'glass-spatial',
  'border border-theme-border',
  'text-theme-text text-sm',
  'placeholder:text-theme-muted/40',
  'bg-transparent',
  'focus:outline-none',
  'focus:border-theme-primary',
  'focus:ring-1 focus:ring-theme-primary/30',
  'transition-colors duration-150',
  'disabled:opacity-50 disabled:cursor-not-allowed',
].join(' ');

// State modifiers
const STATE_CLASSES = {
  default: '',
  error:   'border-rose-400 focus:border-rose-400 focus:ring-rose-400/30',
  success: 'border-emerald-400 focus:border-emerald-400 focus:ring-emerald-400/30',
};

// ─── WebliixLabel ────────────────────────────────────────────────────────────
/**
 * Consistent label component.
 * Props:
 *   required  → renders a rose asterisk
 *   optional  → renders a muted "(optional)" suffix
 *   htmlFor   → standard label htmlFor
 */
export function WebliixLabel({ children, required, optional, htmlFor, className = '', ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={[
        'block text-[11px] font-semibold text-theme-muted',
        'uppercase tracking-wider mb-1.5',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
      {required && <span className="text-rose-400 ml-0.5">*</span>}
      {optional && (
        <span className="ml-1 normal-case font-normal text-theme-muted/55 tracking-normal">
          (optional)
        </span>
      )}
    </label>
  );
}

// ─── WebliixInput ────────────────────────────────────────────────────────────
/**
 * Standard text/tel/email/number/password/url input.
 * Props:
 *   state     → 'default' | 'error' | 'success'
 *   icon      → Lucide icon component rendered on the left
 *   iconRight → Lucide icon component rendered on the right
 *   + all standard <input> props
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
      <div className="relative">
        {Icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-theme-muted/60">
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
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-theme-muted/60">
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
 * Multi-line text input.
 * Props:
 *   state  → 'default' | 'error' | 'success'
 *   rows   → number of visible rows (default 4)
 *   resize → 'none' | 'vertical' | 'horizontal' | 'both' (default 'none')
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
 * Themed <select> with a custom chevron icon.
 * Props:
 *   state       → 'default' | 'error' | 'success'
 *   placeholder → disabled first option text
 *   options     → [{ value, label }] OR pass <option> children
 */
export const WebliixSelect = forwardRef(function WebliixSelect(
  { state = 'default', placeholder, options, className = '', children, ...props },
  ref
) {
  const stateClass = STATE_CLASSES[state] || STATE_CLASSES.default;

  return (
    <div className="relative">
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
      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-theme-muted/60">
        <ChevronDown className="w-4 h-4" />
      </span>
    </div>
  );
});

// ─── WebliixCheckbox ─────────────────────────────────────────────────────────
/**
 * Custom-styled checkbox that respects the theme primary color.
 * Props:
 *   label     → label text rendered next to the checkbox
 *   id        → required for label association
 *   + all standard <input type="checkbox"> props
 */
export const WebliixCheckbox = forwardRef(function WebliixCheckbox(
  { label, id, className = '', ...props },
  ref
) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className="sr-only peer"
          {...props}
        />
        {/* Custom checkbox box */}
        <div
          className={[
            'w-5 h-5 rounded-md border border-theme-border',
            'glass-spatial transition-all duration-150',
            'peer-checked:bg-theme-primary peer-checked:border-theme-primary',
            'peer-focus:ring-2 peer-focus:ring-theme-primary/30',
            'group-hover:border-theme-primary/60',
            className,
          ].join(' ')}
        />
        {/* Checkmark SVG */}
        <svg
          viewBox="0 0 12 12"
          className="absolute inset-0 w-full h-full p-1 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 6l3 3 5-5" />
        </svg>
      </div>
      {label && (
        <span className="text-sm text-theme-muted leading-relaxed group-hover:text-theme-text transition-colors duration-150">
          {label}
        </span>
      )}
    </label>
  );
});

// ─── WebliixFieldGroup ───────────────────────────────────────────────────────
/**
 * Combines label + input + optional hint text and error/success messages.
 * Props:
 *   label     → string
 *   required  → bool → passes required star to label
 *   optional  → bool → passes "(optional)" to label
 *   hint      → string → muted helper text below input
 *   error     → string → rose error message + icon
 *   success   → string → emerald success message + icon
 *   htmlFor   → id of the associated input
 *   children  → the input element(s)
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

  // Clone child inputs to pass state prop automatically
  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    // Only pass state to WebliixInput/Textarea/Select (they accept it)
    const isFormPrimitive = [WebliixInput, WebliixTextarea, WebliixSelect].includes(child.type);
    return isFormPrimitive ? React.cloneElement(child, { state }) : child;
  });

  return (
    <div className={['space-y-1', className].join(' ')}>
      {label && (
        <WebliixLabel htmlFor={htmlFor} required={required} optional={optional}>
          {label}
        </WebliixLabel>
      )}
      {enhancedChildren}
      {hint && !error && !success && (
        <p className="text-[11px] text-theme-muted/70 leading-snug">{hint}</p>
      )}
      {error && (
        <p className="flex items-center gap-1 text-[11px] text-rose-400 leading-snug">
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </p>
      )}
      {success && (
        <p className="flex items-center gap-1 text-[11px] text-emerald-400 leading-snug">
          <CheckCircle2 className="w-3 h-3 shrink-0" />
          {success}
        </p>
      )}
    </div>
  );
}

// ─── WebliixFormCard ─────────────────────────────────────────────────────────
/**
 * A WebliixCard-wrapped form container with an optional header section.
 * Props:
 *   title       → string — form heading
 *   subtitle    → string — muted subtitle
 *   badge       → string — small mono badge text (e.g. "Free Consultation")
 *   headerIcon  → Lucide icon component for badge
 *   variant     → WebliixCard variant (default: 'spatial')
 *   className   → extra classes for the inner padding wrapper
 *   cardClass   → extra classes for the WebliixCard root
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
        {/* Header */}
        {(badge || title || subtitle) && (
          <div className="space-y-2">
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 border border-theme-primary/30 text-theme-primary text-[11px] font-mono font-bold uppercase tracking-widest">
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
        {/* Form content */}
        {children}
      </div>
    </WebliixCard>
  );
}

// ─── Netlify encode helper ───────────────────────────────────────────────────
/**
 * Encodes a form data object as application/x-www-form-urlencoded.
 * Use with fetch('/', { method: 'POST', body: netlifyEncode({...}) }).
 */
export function netlifyEncode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}
