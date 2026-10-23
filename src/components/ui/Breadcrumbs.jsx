import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';
import WebliixIcon from './WebliixIcon';

const routeLabels = {
  '': 'Home',
  'about': 'About Us',
  'services': 'Services & Solutions',
  'website-development': 'Website Development',
  'web-app-development': 'Web App Development',
  'mobile-app-development': 'Mobile App Development',
  'ecommerce-store': 'E-Commerce Store',
  'seo': 'SEO Services',
  'seo-services': 'SEO Services',
  'branding-design': 'Branding & UI/UX Design',
  'paid-advertising': 'Paid Advertising (PPC)',
  'google-ads': 'Google Ads',
  'meta-ads': 'Meta & Instagram Ads',
  'launch-kit': 'LaunchKit',
  'website-maintenance': 'Website Maintenance & Care',
  'portfolio': 'Portfolio Showcase',
  'blog': 'Knowledge Hub',
  'tools': 'Free SEO Tools',
  'careers': 'Careers & Hiring',
  'feedback': 'Client Feedback',
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

const formatSegment = (segment) => {
  if (routeLabels[segment]) return routeLabels[segment];
  return segment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const getAbsoluteUrl = (path, currentPathname) => {
  const baseUrl = 'https://webliix.com';
  if (!path || path === '/') {
    return `${baseUrl}/`;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

export default function Breadcrumbs({ customCrumbs, className = '' }) {
  const location = useLocation();

  let crumbs = [];

  if (customCrumbs && customCrumbs.length > 0) {
    crumbs = [
      { label: 'Home', path: '/' },
      ...customCrumbs.map(c => ({
        label: c.label,
        path: c.path || null,
      }))
    ];
  } else {
    const pathSegments = location.pathname.split('/').filter(Boolean);

    // If on homepage, do not render breadcrumbs
    if (pathSegments.length === 0) {
      return null;
    }

    crumbs.push({ label: 'Home', path: '/' });
    let accumulated = '';
    pathSegments.forEach((segment, idx) => {
      accumulated += `/${segment}`;
      const isLast = idx === pathSegments.length - 1;
      crumbs.push({
        label: formatSegment(segment),
        path: isLast ? null : accumulated,
      });
    });
  }

  // Schema.org BreadcrumbList for rich snippets in Google Search Console
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, idx) => {
      const isLast = idx === crumbs.length - 1;
      const targetUrl = isLast
        ? getAbsoluteUrl(location.pathname)
        : getAbsoluteUrl(crumb.path);

      return {
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.label,
        item: targetUrl
      };
    })
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      <nav
        aria-label="Breadcrumb"
        className={`w-full flex items-center justify-start my-3 sm:my-4 select-none ${className}`}
      >
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-spatial border border-theme-border/60 hover:border-theme-primary/30 transition-all text-xs font-mono text-theme-muted max-w-full overflow-x-auto no-scrollbar shadow-xs whitespace-nowrap"
        >
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            const isHome = index === 0;
            const itemUrl = isLast
              ? getAbsoluteUrl(location.pathname)
              : getAbsoluteUrl(crumb.path);

            return (
              <li
                key={crumb.path || crumb.label}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="inline-flex items-center gap-1.5 sm:gap-2 shrink-0"
              >
                <meta itemProp="position" content={String(index + 1)} />

                {index > 0 && (
                  <WebliixIcon
                    icon={ChevronRight}
                    variant="inline"
                    size="xs"
                    className="opacity-40 shrink-0 text-theme-muted"
                  />
                )}

                {isLast ? (
                  <>
                    <meta itemProp="item" content={itemUrl} />
                    <span
                      itemProp="name"
                      aria-current="page"
                      className="text-theme-text font-semibold flex items-center gap-1.5 tracking-tight"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-primary shrink-0 animate-pulse" />
                      <span>{crumb.label}</span>
                    </span>
                  </>
                ) : (
                  <Link
                    to={crumb.path || '/'}
                    itemProp="item"
                    className="hover:text-theme-primary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    {isHome && (
                      <WebliixIcon
                        icon={Home}
                        variant="inline"
                        size="xs"
                        className="group-hover:text-theme-primary transition-colors shrink-0"
                      />
                    )}
                    <span itemProp="name" className="group-hover:underline underline-offset-2">
                      {crumb.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
