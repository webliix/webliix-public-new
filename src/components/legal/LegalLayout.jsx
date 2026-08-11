import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Printer, List, ShieldCheck, FileText } from 'lucide-react';
import GlassCard from '../spatial/GlassCard';
import Breadcrumbs from '../ui/Breadcrumbs';
import { siteConfig } from '../../config/siteConfig';

export default function LegalLayout({
  title,
  subtitle,
  categoryTag = 'Legal & Compliance',
  lastUpdated = 'May 2, 2026',
  seoTitle,
  seoDescription,
  canonicalPath,
  tableOfContents = [],
  children
}) {
  const [activeSection, setActiveSection] = useState('');

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
      <Helmet>
        <title>{seoTitle || `${title} | ${siteConfig.brand.name}`}</title>
        <meta name="description" content={seoDescription || subtitle} />
        <link rel="canonical" href={`https://webliix.in${canonicalPath}`} />
      </Helmet>

      {/* Dynamic Breadcrumb Navigation */}
      <Breadcrumbs />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" /> {categoryTag} • Last Updated: {lastUpdated}
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-theme-text leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 print:hidden">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl glass-spatial border border-theme-primary/40 text-xs font-mono font-semibold text-theme-primary hover:bg-theme-primary hover:text-white transition-all flex items-center gap-2"
          >
            <Printer className="w-3.5 h-3.5" /> Print / Save PDF
          </button>
          <Link
            to="/business-information"
            className="px-4 py-2 rounded-xl glass-spatial border border-theme-border text-xs font-mono font-semibold text-theme-muted hover:text-theme-text transition flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" /> Business Information
          </Link>
        </div>
      </div>

      {/* Grid: Table of Contents + Content Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Table of Contents (Sticky on Desktop) */}
        {tableOfContents.length > 0 && (
          <aside className="lg:col-span-4 lg:sticky lg:top-28 print:hidden space-y-4">
            <GlassCard className="p-5 border border-theme-border space-y-3">
              <div className="flex items-center justify-between border-b border-theme-border/60 pb-2.5">
                <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-1.5">
                  <List className="w-3.5 h-3.5" /> Table of Contents
                </span>
                <span className="text-[10px] font-mono text-theme-muted">{tableOfContents.length} Sections</span>
              </div>
              
              <nav aria-label="Table of Contents Links" className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-all font-mono text-xs flex items-center justify-between group ${
                      activeSection === item.id
                        ? 'bg-theme-primary/20 text-theme-primary font-bold border border-theme-primary/30'
                        : 'text-theme-muted hover:text-theme-text hover:bg-theme-border/20'
                    }`}
                  >
                    <span className="truncate pr-2">{item.title}</span>
                  </button>
                ))}
              </nav>
            </GlassCard>
          </aside>
        )}

        {/* Main Content Area */}
        <main className={`${tableOfContents.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
          <GlassCard className="p-6 sm:p-10 border border-theme-border space-y-8 text-theme-text leading-relaxed font-sans shadow-spatial-lg">
            {children}
          </GlassCard>
        </main>
      </div>
    </div>
  );
}
