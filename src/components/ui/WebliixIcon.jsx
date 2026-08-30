import React from 'react';

/**
 * Built-in Social Icon SVGs for unified site-wide social media UI/UX
 */
const SOCIAL_ICONS = {
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
    </svg>
  ),
  github: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  whatsapp: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  ),
  twitter: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  youtube: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
};

/**
 * WebliixIcon - Centralized icon component with theme support and unified UX design.
 *
 * Variants:
 * - inline: bare icon for text labels, tags, breadcrumbs, metrics (default)
 * - badge: icon housed in a spatial background container with theme border & glow
 * - section: medium/large bare icon used next to section headers and features
 * - social: styled social icon tile with theme hover effects & smooth scaling
 */
export default function WebliixIcon({
  icon,
  social,
  variant = 'inline',
  size,
  color = 'primary',
  className = '',
  ...props
}) {
  // Resolve icon component (Lucide component OR social string identifier)
  let IconComponent = icon;

  const socialKey = (typeof icon === 'string' ? icon : social || '').toLowerCase();
  if (socialKey && SOCIAL_ICONS[socialKey]) {
    IconComponent = SOCIAL_ICONS[socialKey];
  }

  if (!IconComponent) return null;

  // Determine default sizes based on variant if not specified
  const effectiveSize = size || (variant === 'badge' ? 'lg' : variant === 'section' ? 'md' : variant === 'social' ? 'md' : 'sm');

  // Text color mapping
  const colorMap = {
    primary: 'text-theme-primary',
    muted: 'text-theme-muted',
    success: 'text-emerald-400',
    error: 'text-rose-400',
    text: 'text-theme-text',
    inherit: 'text-inherit'
  };

  // Badge container background & border mapping
  const badgeColorMap = {
    primary: 'bg-theme-primary/15 border-theme-primary/40 text-theme-primary',
    muted: 'bg-theme-muted/15 border-theme-muted/40 text-theme-muted',
    success: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
    error: 'bg-rose-500/15 border-rose-500/40 text-rose-400',
    text: 'bg-theme-text/10 border-theme-text/30 text-theme-text',
    inherit: 'bg-current/10 border-current/30 text-inherit'
  };

  // Size mapping for inline/section icons
  const iconSizeMap = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    '2xl': 'w-8 h-8'
  };

  // Container & icon size mapping for badge variant — Dynamic theme corner styles
  const badgeContainerSizeMap = {
    sm: 'w-8 h-8 theme-rounded-badge',
    md: 'w-10 h-10 theme-rounded-badge',
    lg: 'w-12 h-12 theme-rounded-badge',
    xl: 'w-14 h-14 theme-rounded-badge'
  };

  const badgeIconSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  const textColorClass = colorMap[color] || colorMap.primary;

  // Social Variant — Dynamic theme corner container with hover scaling & theme primary accent
  if (variant === 'social') {
    const socialIconSizeClass = iconSizeMap[effectiveSize] || iconSizeMap.md;
    return (
      <div
        className={`inline-flex items-center justify-center p-2.5 theme-rounded-btn glass-spatial border border-theme-border/80 hover:border-theme-primary hover:text-theme-primary text-theme-muted transition-all duration-300 group shrink-0 shadow-sm ${className}`}
        {...props}
      >
        <IconComponent className={`${socialIconSizeClass} group-hover:scale-110 transition-transform block shrink-0`} />
      </div>
    );
  }

  // Badge Variant
  if (variant === 'badge') {
    const containerSizeClass = badgeContainerSizeMap[effectiveSize] || badgeContainerSizeMap.lg;
    const badgeIconSizeClass = badgeIconSizeMap[effectiveSize] || badgeIconSizeMap.lg;
    const badgeColorClass = badgeColorMap[color] || badgeColorMap.primary;

    return (
      <div
        className={`inline-flex items-center justify-center shrink-0 border transition-all duration-300 shadow-sm ${containerSizeClass} ${badgeColorClass} ${className}`}
        {...props}
      >
        <IconComponent className={`${badgeIconSizeClass} shrink-0`} />
      </div>
    );
  }



  // Inline & Section Variant
  const iconSizeClass = iconSizeMap[effectiveSize] || iconSizeMap.sm;

  return (
    <IconComponent
      className={`shrink-0 transition-colors duration-300 ${iconSizeClass} ${textColorClass} ${className}`}
      {...props}
    />
  );
}
