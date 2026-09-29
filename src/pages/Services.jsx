import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Code
} from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixIcon from '../components/ui/WebliixIcon';
import WebliixButton from '../components/ui/WebliixButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  /*
   * Service categories are organized around customer search intent.
   * Existing service IDs and routes remain unchanged.
   */
  const categories = [
    'All',
    'Web Development',
    'E-Commerce',
    'SEO & Local Search',
    'Digital Marketing',
    'Branding & UI/UX',
    'Software & Applications',
    'Maintenance'
  ];

  const filterServiceMap = {
    'Web Development': [
      'website-dev',
      'web-app-development'
    ],

    'E-Commerce': [
      'quick-ecommerce'
    ],

    'SEO & Local Search': [
      'seo-gmb'
    ],

    'Digital Marketing': [
      'paid-advertising',
      'google-ads',
      'meta-ads'
    ],

    'Branding & UI/UX': [
      'brand-launchkit',
      'branding-design',
      'ui-ux-design'
    ],

    'Software & Applications': [
      'mobile-app-development',
      'software-development',
      'saas-development',
      'crm-erp-development'
    ],

    'Maintenance': [
      'website-maintenance'
    ]
  };

  const filteredServices =
    activeCategory === 'All'
      ? siteConfig.services
      : siteConfig.services.filter((service) =>
          filterServiceMap[activeCategory]?.includes(service.id)
        );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    setTimeout(() => {
      let targetId = 'services-catalog';

      if (category !== 'All') {
        const firstServiceId = filterServiceMap[category]?.[0];

        if (firstServiceId) {
          targetId = `service-${firstServiceId}`;
        }
      }

      const targetElement =
        document.getElementById(targetId) ||
        document.getElementById('services-catalog');

      if (targetElement) {
        const navOffset = 90;
        const elementPosition =
          targetElement.getBoundingClientRect().top;

        const offsetPosition =
          elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 60);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-16">

      <Helmet>
        <title>
          Website Development, SEO & Digital Services | {siteConfig.brand.name}
        </title>

        <meta
          name="description"
          content="Explore Webliix website development, e-commerce, SEO, Google Business Profile, digital marketing, branding, UI/UX and custom software services for businesses in India and international markets."
        />

        <link
          rel="canonical"
          href="https://webliix.com/services"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://webliix.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services & Solutions',
                item: 'https://webliix.com/services'
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Webliix Digital Services',
            itemListElement: siteConfig.services
              .filter(service => service.link)
              .map((service, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: service.title,
                url: `https://webliix.com${service.link}`
              }))
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto space-y-5">

        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Digital Services for Businesses Worldwide
        </span>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Website Development, SEO & Digital Services for Businesses Worldwide
        </h1>

        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Webliix provides website design and development, e-commerce,
          search engine optimization, Google Business Profile services,
          digital marketing, branding, UI/UX design and custom software
          development for businesses, startups and organizations in India and
          international markets.
        </p>

        <p className="text-theme-muted text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Whether you need a new business website, an online store, stronger
          search visibility, paid advertising or a custom digital system,
          choose the service that matches your business goals.
        </p>

      </section>

      {/* Service Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <WebliixCard
          variant="feature"
          className="p-6 text-center space-y-2.5 flex flex-col items-center"
        >
          <WebliixIcon icon={Zap} variant="badge" size="lg" />

          <h2 className="text-base font-display font-bold text-theme-text">
            Business-Focused Solutions
          </h2>

          <p className="text-xs text-theme-muted leading-relaxed">
            Practical digital solutions planned around your business goals,
            customers, services and online requirements.
          </p>
        </WebliixCard>

        <WebliixCard
          variant="feature"
          className="p-6 text-center space-y-2.5 flex flex-col items-center"
        >
          <WebliixIcon icon={Code} variant="badge" size="lg" />

          <h2 className="text-base font-display font-bold text-theme-text">
            Modern Web Technology
          </h2>

          <p className="text-xs text-theme-muted leading-relaxed">
            Responsive websites and applications built with modern
            development technologies and maintainable technical foundations.
          </p>
        </WebliixCard>

        <WebliixCard
          variant="feature"
          className="p-6 text-center space-y-2.5 flex flex-col items-center"
        >
          <WebliixIcon icon={ShieldCheck} variant="badge" size="lg" />

          <h2 className="text-base font-display font-bold text-theme-text">
            Ongoing Support
          </h2>

          <p className="text-xs text-theme-muted leading-relaxed">
            Ongoing website maintenance, technical support, updates and
            development are available after launch.
          </p>
        </WebliixCard>

      </div>

      {/* Service Categories */}
      <nav
        aria-label="Service categories"
        className="flex items-center justify-center flex-wrap gap-2 pt-2"
      >
        {categories.map((category) => (
          <WebliixButton
            key={category}
            variant="utility"
            size="sm"
            active={activeCategory === category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </WebliixButton>
        ))}
      </nav>

      {/* Main Services Catalog */}
      <section
        id="services-catalog"
        className="space-y-8 pt-4 scroll-mt-24"
      >

        <div className="text-center max-w-3xl mx-auto space-y-3">

          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Webliix Services
          </span>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Website, SEO, E-Commerce & Software Services for Businesses
          </h2>

          <p className="text-theme-muted text-sm leading-relaxed">
            Explore business website development, e-commerce development,
            SEO and local search, digital advertising, branding, UI/UX design,
            custom software and ongoing website support. Choose the service
            that matches what your business needs now.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredServices.map((service) => (
            <GlassCard
              id={`service-${service.id}`}
              key={service.id}
              className="p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-theme-border/80 hover:border-theme-primary/60 transition-all duration-300 scroll-mt-24"
            >

              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-4xl p-2 theme-rounded-card bg-theme-primary/10 border border-theme-primary/20">
                    {service.icon}
                  </span>

                  <span className="px-3 py-1 theme-rounded-badge text-xs font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                    {service.tag}
                  </span>

                </div>

                <h3 className="text-2xl font-display font-bold text-theme-text">
                  {service.title}
                </h3>

                <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="pt-2 space-y-2">

                  <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider block">
                    Included Services
                  </span>

                  <ul className="space-y-2 text-xs text-theme-text">

                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-theme-primary shrink-0" />

                        <span className="font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

              <div className="pt-4 border-t border-theme-border flex items-center justify-between gap-2 flex-wrap">

                <div>
                  <span className="text-[10px] font-mono text-theme-muted block uppercase">
                    Starting Price
                  </span>

                  <span className="text-base font-mono font-extrabold text-theme-primary">
                    {service.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">

                  {service.link && (
                    <Link to={service.link}>
                      <WebliixButton
                        variant="ghost"
                        icon={ArrowUpRight}
                        size="sm"
                      >
                        Learn More
                      </WebliixButton>
                    </Link>
                  )}

                  <Link to="/contact">
                    <WebliixButton
                      variant="primary"
                      icon={ArrowUpRight}
                      size="sm"
                    >
                      {service.id === 'brand-launchkit'
                        ? 'Explore LaunchKit'
                        : service.id === 'quick-ecommerce'
                        ? 'Book Store Launch'
                        : service.startingPrice === 'Custom Quote'
                        ? 'Get Free Quote & Estimate'
                        : 'Book Service'}
                    </WebliixButton>
                  </Link>

                </div>

              </div>

            </GlassCard>
          ))}

        </div>

      </section>

      {/* Service Discovery Content */}
      <section
        id="service-help"
        className="text-center max-w-4xl mx-auto space-y-5 pt-4"
      >

        <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
          Find the Right Service
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
          Need a Website, SEO, Online Store or Custom Software?
        </h2>

        <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
          Start with the service that matches your immediate requirement.
          Webliix can help with professional business websites, e-commerce
          stores, search engine optimization, Google Business Profile
          optimization, paid advertising, branding, mobile applications,
          SaaS products, CRM and ERP systems, and ongoing website support.
        </p>

        <p className="text-theme-muted text-sm leading-relaxed">
          Not sure which service fits your business? Tell us what you are
          trying to build, improve or sell, and we can discuss the scope,
          technology, timeline and estimated project cost.
        </p>

        <div className="flex justify-center pt-2">

          <Link to="/contact">
            <WebliixButton
              variant="primary"
              icon={ArrowUpRight}
              size="lg"
            >
              Discuss Your Project
            </WebliixButton>
          </Link>

        </div>

      </section>

    </div>
  );
}