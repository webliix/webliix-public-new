import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/siteConfig';
import MetaGenTool from '../components/spatial/MetaGenTool';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function Tools() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-10">
      <Helmet>
        <title>Free SEO Meta Tag Generator | {siteConfig.brand.name}</title>
        <meta name="description" content="Generate 60+ SEO title tags, meta descriptions, OpenGraph, Twitter cards, and JSON-LD schema markup for free with Webliix MetaGen." />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      <MetaGenTool />
    </div>
  );
}
