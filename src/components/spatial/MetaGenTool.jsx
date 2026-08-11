import React, { useState } from 'react';
import { Copy, Check, Sparkles, Code, Globe, Shield } from 'lucide-react';
import GlassCard from './GlassCard';
import SpatialButton from '../ui/SpatialButton';
import { useModal } from '../../context/ModalContext';

export default function MetaGenTool() {
  const [formData, setFormData] = useState({
    title: 'Webliix | High-Converting Website Design, SEO & Software Studio',
    description: 'Webliix is a full-service digital agency offering custom website development, Google Business Profile (GMB) SEO, e-commerce applications, and branding across NCR India, USA, Canada & Germany.',
    keywords: 'Webliix, web development, SEO services, GMB setup, ecommerce, branding, Noida web agency, software studio',
    url: 'https://webliix.in/',
    ogImage: 'https://webliix.in/og-image.jpg',
    author: 'Webliix Spatial',
    twitterHandle: '@webliix'
  });

  const [copied, setCopied] = useState(false);
  const { showToast } = useModal();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generatedTags = `<!-- ✅ Essential SEO Title & Meta Description -->
<title>${formData.title}</title>
<meta name="description" content="${formData.description}" />
<meta name="keywords" content="${formData.keywords}" />
<meta name="author" content="${formData.author}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="${formData.url}" />

<!-- ✅ Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${formData.url}" />
<meta property="og:title" content="${formData.title}" />
<meta property="og:description" content="${formData.description}" />
<meta property="og:image" content="${formData.ogImage}" />

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="${formData.twitterHandle}" />
<meta name="twitter:title" content="${formData.title}" />
<meta name="twitter:description" content="${formData.description}" />
<meta name="twitter:image" content="${formData.ogImage}" />

<!-- ✅ JSON-LD Structured Data Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "${formData.author}",
  "url": "${formData.url}",
  "logo": "${formData.ogImage}",
  "description": "${formData.description}"
}
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedTags);
    setCopied(true);
    showToast('60+ Meta tags copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <GlassCard className="p-6 sm:p-10 border border-theme-border shadow-spatial-lg">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form Inputs */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-theme-primary font-display font-semibold text-sm mb-2">
            <Sparkles className="w-4 h-4" /> Free Spatial SEO Tool
          </div>
          <h3 className="text-2xl font-display font-bold text-theme-text">
            MetaGen: Live Meta Tag Generator
          </h3>
          <p className="text-theme-muted text-xs sm:text-sm">
            Fill in your page details to generate Google, OpenGraph, Twitter, and JSON-LD schema tags instantly.
          </p>

          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between items-center text-xs text-theme-muted mb-1">
                <label className="font-semibold">Page Title</label>
                <span className={formData.title.length > 60 ? 'text-amber-400 font-mono' : 'text-theme-muted font-mono'}>
                  {formData.title.length} / 60 chars
                </span>
              </div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs text-theme-muted mb-1">
                <label className="font-semibold">Meta Description</label>
                <span className={formData.description.length > 160 ? 'text-amber-400 font-mono' : 'text-theme-muted font-mono'}>
                  {formData.description.length} / 160 chars
                </span>
              </div>
              <textarea
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-theme-muted block mb-1">Canonical URL</label>
                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl glass-spatial border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-theme-muted block mb-1">OG Image URL</label>
                <input
                  type="url"
                  name="ogImage"
                  value={formData.ogImage}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl glass-spatial border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-theme-muted block mb-1">Target Keywords</label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl glass-spatial border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-primary"
              />
            </div>
          </div>
        </div>

        {/* Live Code Output */}
        <div className="flex-1 glass-spatial p-5 rounded-3xl border border-theme-primary/30 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-theme-border">
            <span className="text-xs font-semibold text-theme-muted uppercase tracking-wider flex items-center gap-1.5">
              <Code className="w-4 h-4 text-theme-primary" /> Generated Meta Tags
            </span>
            <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> 100% SEO Ready
            </span>
          </div>

          <pre className="p-4 rounded-2xl bg-black/40 border border-theme-border text-theme-text text-[11px] font-mono overflow-x-auto max-h-80 leading-relaxed whitespace-pre-wrap">
            {generatedTags}
          </pre>

          <SpatialButton onClick={handleCopy} variant="primary" className="w-full" icon={copied ? Check : Copy}>
            {copied ? 'Tags Copied to Clipboard!' : 'Copy HTML Meta Tags'}
          </SpatialButton>
        </div>
      </div>
    </GlassCard>
  );
}
