import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';
import WebliixIcon from './WebliixIcon';

const routeLabels = {
  '': 'Home',
  'about': 'About Us',
  'services': 'Services & Solutions',
  'website-development': 'Website Development',
  'web-development': 'Website Development',
  'website-design': 'Website Development',
  'web-app-development': 'Web App Development',
  'custom-software': 'Web App Development',
  'saas-development': 'Web App Development',
  'mobile-app-development': 'Mobile App Development',
  'mobile-apps': 'Mobile App Development',
  'app-development': 'Mobile App Development',
  'ecommerce-store': 'E-Commerce Store',
  'ecommerce': 'E-Commerce Store',
  'fast-ecommerce': 'E-Commerce Store',
  'seo': 'SEO Services',
  'seo-services': 'SEO Services',
  'seo-packages': 'SEO Services',
  'branding-design': 'Branding & UI/UX Design',
  'ui-ux-design': 'Branding & UI/UX Design',
  'branding': 'Branding & UI/UX Design',
  'paid-advertising': 'Paid Advertising (PPC)',
  'ads': 'Paid Advertising (PPC)',
  'paid-ads': 'Paid Advertising (PPC)',
  'google-ads': 'Google Ads',
  'meta-ads': 'Meta & Instagram Ads',
  'launch-kit': 'Webliix LaunchKit',
  'website-maintenance': 'Website Maintenance & Care',
  'maintenance': 'Website Maintenance & Care',
  'website-support': 'Website Maintenance & Care',
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

// Set of all routes that belong to Services & Solutions
const serviceRoutes = new Set([
  'website-development',
  'web-development',
  'website-design',
  'web-app-development',
  'custom-software',
  'saas-development',
  'mobile-app-development',
  'mobile-apps',
  'app-development',
  'ecommerce-store',
  'ecommerce',
  'fast-ecommerce',
  'seo',
  'seo-services',
  'seo-packages',
  'branding-design',
  'ui-ux-design',
  'branding',
  'paid-advertising',
  'ads',
  'paid-ads',
  'google-ads',
  'meta-ads',
  'launch-kit',
  'website-maintenance',
  'maintenance',
  'website-support'
]);

const formatSegment = (segment) => {
  if (routeLabels[segment]) return routeLabels[segment];
  return segment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const getAbsoluteUrl = (path) => {
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

    const firstSegment = pathSegments[0];
    const isServiceSubpage = serviceRoutes.has(firstSegment) && firstSegment !== 'services';

    // If viewing any service page, hierarchically nest it under Services & Solutions
    if (isServiceSubpage) {
      crumbs.push({
        label: 'Services & Solutions',
        path: '/services',
      });
    }

    let accumulated = '';
    pathSegments.forEach((segment, idx) => {
      accumulated += `/${segment}`;
      const isLast = idx === pathSegments.length - 1;

      // Avoid redundant Services segment if route is /services/...
      if (segment === 'services' && isServiceSubpage) {
        return;
      }

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
        className={`w-full flex items-center justify-start mb-4 sm:mb-6 select-none ${className}`}
      >
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs font-mono text-theme-muted max-w-full"
        >
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            const isHome = index === 0;
            const itemUrl = isLast
              ? getAbsoluteUrl(location.pathname)
              : getAbsoluteUrl(crumb.path);

            return (
              <li
                key={crumb.path ? `${crumb.path}-${index}` : `${crumb.label}-${index}`}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="inline-flex items-center gap-1.5 sm:gap-2 shrink-0"
              >
                <meta itemProp="position" content={String(index + 1)} />

                {index > 0 && (
                  <span aria-hidden="true" className="opacity-45 text-theme-muted font-mono select-none px-0.5">
                    &gt;
                  </span>
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
