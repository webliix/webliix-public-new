import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeLabels = {
  '': 'Home',
  'about': 'About Us',
  'services': 'Services & Solutions',
  'portfolio': 'Portfolio Showcase',
  'case-studies': 'Case Studies',
  'auradrishti': 'AuraDrishti CCTV Security',
  'blog': 'Knowledge Hub',
  'tools': 'Free SEO Tools',
  'contact': 'Contact & Support',
  'business-information': 'Business & Compliance',
  'privacy-policy': 'Privacy Policy',
  'privacy': 'Privacy Policy',
  'terms-and-conditions': 'Terms & Conditions',
  'terms': 'Terms & Conditions',
  'refund-cancellation': 'Refund & Cancellation',
  'refund': 'Refund Policy',
  'disclaimer': 'Disclaimer'
};

export default function Breadcrumbs({ customCrumbs, className = '' }) {
  const location = useLocation();

  // If custom breadcrumbs are explicitly provided
  if (customCrumbs && customCrumbs.length > 0) {
    return (
      <nav aria-label="Breadcrumb" className={`text-xs font-mono text-theme-muted flex items-center gap-1.5 flex-wrap ${className}`}>
        <Link to="/" className="hover:text-theme-primary transition-colors flex items-center gap-1">
          <Home className="w-3 h-3" />
          <span>Home</span>
        </Link>
        {customCrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-theme-border shrink-0" />
            {crumb.path ? (
              <Link to={crumb.path} className="hover:text-theme-primary transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-theme-text font-semibold">{crumb.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  }

  // Otherwise, automatically derive breadcrumbs from location.pathname
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // If on homepage, return null or simple root indicator
  if (pathSegments.length === 0) {
    return null;
  }

  let accumulatedPath = '';

  return (
    <nav aria-label="Breadcrumb" className={`text-xs font-mono text-theme-muted flex items-center gap-1.5 flex-wrap ${className}`}>
      <Link to="/" className="hover:text-theme-primary transition-colors flex items-center gap-1">
        <Home className="w-3 h-3" />
        <span>Home</span>
      </Link>

      {pathSegments.map((segment, idx) => {
        accumulatedPath += `/${segment}`;
        const isLast = idx === pathSegments.length - 1;
        const label = routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

        return (
          <React.Fragment key={accumulatedPath}>
            <ChevronRight className="w-3 h-3 text-theme-border shrink-0" />
            {isLast ? (
              <span className="text-theme-text font-semibold">{label}</span>
            ) : (
              <Link to={accumulatedPath} className="hover:text-theme-primary transition-colors">
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
