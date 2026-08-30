import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, User, Calendar, ArrowLeft, ArrowRight, Share2, Sparkles, CheckCircle2, Rocket, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';

// Extended blog article content details
const BLOG_DETAILS = {
  'free-meta-tag-generator-for-seo-2026': {
    tags: ['SEO', 'OpenGraph', 'Meta Tags', 'Schema Markup', 'Web Development'],
    sections: [
      {
        heading: 'Why Meta Tags Are Non-Negotiable in 2026',
        body: `Meta tags are the invisible foundation of search engine visibility. When a Google crawler indexes your webpage or a user shares your link on WhatsApp, LinkedIn, or Twitter/X, they rely entirely on metadata to understand what your page is about and how to display it. Without proper tags, your search snippet looks broken, your click-through rates plummet, and search algorithms penalize your ranking potential.`
      },
      {
        heading: 'The Critical Meta Tags Every Modern Website Needs',
        points: [
          'Primary SEO Title & Meta Description: The baseline title and summary shown on Google search results pages.',
          'Open Graph (OG) Tags: Dictate the preview image, title, and description when your URL is shared across Facebook, LinkedIn, Discord, and WhatsApp.',
          'Twitter Cards: Specifically formatted tags (summary_large_image) required for high-engagement link previews on X/Twitter.',
          'JSON-LD Structured Data: Schema.org markup that helps search engines parse your business address, phone number, services, reviews, and organization hierarchy.',
          'Robots & Canonical Directives: Ensure search engines index the primary canonical URL and avoid duplicate content penalties.'
        ]
      },
      {
        heading: 'How MetaGen Solves the Metadata Problem in Seconds',
        body: `Manually writing 50+ lines of HTML meta tags and formatting complex JSON-LD script blocks is tedious and error-prone. One misplaced bracket can invalidate your entire rich snippet. That's why Webliix engineered MetaGen — a 100% free, browser-based meta tag and schema generator. You simply input your webpage details, upload your social banner, and copy verified, production-ready tags directly into your code.`
      },
      {
        heading: 'Step-by-Step Guide to Implementing MetaGen Tags',
        body: `1. Visit the Free MetaGen Tool on Webliix.\n2. Enter your Page Title (keep under 60 characters for optimal Google display).\n3. Write an engaging Meta Description (150-160 characters with clear call to action).\n4. Specify your Canonical URL and OpenGraph preview image URL.\n5. Select your Business Schema type and copy the generated markup into your <head> section.`
      }
    ]
  },
  'digital-marketing-small-business-india-2026-complete-guide': {
    tags: ['Digital Marketing', 'Local SEO', 'Small Business', 'Google Maps', 'Growth Strategy'],
    sections: [
      {
        heading: 'The Shift in Indian Consumer Search Behaviour',
        body: `India has witnessed an unprecedented surge in digital discovery. Today, over 82% of consumers in Tier-1, Tier-2, and Tier-3 cities search for local service providers, doctors, restaurants, manufacturers, and retailers on Google Maps and WhatsApp before making any purchase decision. If your business is not visible at the exact moment a prospect searches, you are handing customers directly to your competitors.`
      },
      {
        heading: 'Core Pillars of a Winning Digital Marketing Engine',
        points: [
          'High-Converting Business Website: A modern, mobile-first website that loads in under 2 seconds and features clear WhatsApp & Call CTAs.',
          'Google Business Profile (GMB) Mastery: Proper category tagging, weekly posts, geotagged photos, and verified customer reviews that push your listing to the Top 3 Map Pack.',
          'Hyper-Local SEO Citations: Consistent Name, Address, and Phone (NAP) citations across trusted Indian business directories.',
          'Targeted Paid Ad Campaigns: High-intent Google Search ads for instant lead capture paired with Meta Retargeting campaigns.',
          'Direct Messaging Automation: Instant WhatsApp Business auto-replies and lead capture forms that respond to inquiries in under 2 minutes.'
        ]
      },
      {
        heading: 'Why Social Media Alone Is Not Enough',
        body: `Many small business owners make the mistake of relying entirely on Instagram or Facebook pages. While social media is great for top-of-funnel brand awareness, organic social reach changes with every algorithm update. Building your brand solely on rented social channels means you never own your customer database. A dedicated website with local SEO gives you complete ownership and continuous organic lead flow.`
      },
      {
        heading: 'Actionable 30-Day Blueprint for Business Owners',
        body: `Start with an audit of your digital presence. Ensure your Google Business Profile is 100% verified and optimized with accurate business hours. Next, deploy a fast, professional website with clear service packages. Finally, launch a local review collection campaign to build social proof and authority.`
      }
    ]
  },
  'why-every-small-business-in-india-needs-a-website-in-2025': {
    tags: ['Web Design', 'Business Strategy', 'Branding', 'Trust & Credibility'],
    sections: [
      {
        heading: 'Your Website is Your 24/7 Digital Flagship Store',
        body: `In the modern business landscape, your website is the very first impression potential clients, corporate partners, and investors have of your enterprise. A business without an official website looks unverified, temporary, and risky to deal with. A professionally engineered website instantly conveys legitimacy, trust, and enterprise-grade capability.`
      },
      {
        heading: '5 Tangible Reasons Your Business Needs a Website Now',
        points: [
          'Credibility & Trust: 75% of consumers judge a company’s credibility based solely on its website design.',
          'Zero Commission Lead Generation: Unlike aggregator platforms that charge high commissions on every order or lead, your own website delivers direct, zero-commission customer acquisition.',
          'Search Engine Discoverability: Rank for valuable keywords like "best service near me" and capture high-intent commercial buyers.',
          'Showcase Portfolio & Social Proof: Display client case studies, verified reviews, certifications, and product catalogs with zero layout restrictions.',
          'Round-the-Clock Automation: Capture customer inquiries, bookings, and payments 24 hours a day, even while your physical office is closed.'
        ]
      },
      {
        heading: 'How Modern Web Tech Has Made Websites Ultra-Fast and Affordable',
        body: `Gone are the days when building a business website cost lakhs of rupees and took 6 months to complete. With modern component frameworks, lightning-fast cloud hosting, and pre-engineered packages like Webliix LaunchKit, Indian small businesses can go live with a custom, high-speed website, domain, and SEO foundation in just 5 to 7 days starting from ₹14,999.`
      }
    ]
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const blog = siteConfig.blogs.find((b) => b.id === id);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const details = BLOG_DETAILS[blog.id] || {
    tags: [blog.category, 'Webliix'],
    sections: [
      {
        heading: 'Overview & Analysis',
        body: blog.content
      }
    ]
  };

  const otherBlogs = siteConfig.blogs.filter((b) => b.id !== blog.id);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto space-y-12">
      <Helmet>
        <title>{blog.title} | {siteConfig.brand.name} Knowledge Hub</title>
        <meta name="description" content={blog.excerpt} />
        <link rel="canonical" href={`https://webliix.com/blog/${blog.id}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://webliix.com/blog/${blog.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "description": blog.excerpt,
            "author": {
              "@type": "Person",
              "name": blog.author
            },
            "publisher": {
              "@type": "Organization",
              "name": siteConfig.brand.name,
              "logo": {
                "@type": "ImageObject",
                "url": "https://webliix.com/og-image.jpg"
              }
            },
            "datePublished": blog.date,
            "mainEntityOfPage": `https://webliix.com/blog/${blog.id}`
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Back Link */}
      <div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-theme-muted hover:text-theme-primary transition group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Knowledge Hub</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-theme-primary/15 border border-theme-primary/30 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider">
            {blog.category}
          </span>
          <span className="text-xs font-mono text-theme-muted flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {blog.readTime}
          </span>
          <span className="text-xs font-mono text-theme-muted flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {blog.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-theme-text leading-tight">
          {blog.title}
        </h1>

        <p className="text-theme-muted text-base sm:text-lg leading-relaxed border-l-2 border-theme-primary/60 pl-4 italic">
          {blog.excerpt}
        </p>

        {/* Author Byline */}
        <div className="flex items-center justify-between pt-4 border-t border-theme-border/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-theme-primary/20 border border-theme-primary/40 flex items-center justify-center font-bold font-mono text-theme-primary text-sm">
              {blog.author.charAt(0)}
            </div>
            <div>
              <span className="text-sm font-bold text-theme-text block">{blog.author}</span>
              <span className="text-xs text-theme-muted">Digital Strategy Engineer, Webliix</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: blog.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="p-2 theme-rounded-btn glass-spatial border border-theme-border/60 hover:border-theme-primary text-theme-muted hover:text-theme-primary transition flex items-center gap-1.5 text-xs font-mono"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Body Content */}
      <article className="space-y-10 text-theme-text text-sm sm:text-base leading-relaxed">
        {details.sections.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text flex items-center gap-2">
              <span className="text-theme-primary font-mono text-base">0{idx + 1}.</span> {sec.heading}
            </h2>

            {sec.body && (
              <p className="text-theme-muted leading-relaxed whitespace-pre-line">
                {sec.body}
              </p>
            )}

            {sec.points && (
              <ul className="space-y-3 pt-2">
                {sec.points.map((pt, pIdx) => {
                  const [title, ...rest] = pt.split(':');
                  return (
                    <li key={pIdx} className="flex items-start gap-3 p-3.5 theme-rounded-card glass-spatial border border-theme-border/60">
                      <CheckCircle2 className="w-4 h-4 text-theme-primary shrink-0 mt-0.5" />

                      <div className="text-xs sm:text-sm">
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-theme-text">{title}:</strong>
                            <span className="text-theme-muted">{rest.join(':')}</span>
                          </>
                        ) : (
                          <span className="text-theme-text">{pt}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}

        {/* Tags */}
        <div className="pt-6 border-t border-theme-border/60 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold text-theme-muted uppercase tracking-wider mr-2">Topic Tags:</span>
          {details.tags.map((tag, tIdx) => (
            <span key={tIdx} className="px-3 py-1 rounded-lg glass-spatial border border-theme-border/80 text-xs font-mono text-theme-muted">
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* LaunchKit / Implementation CTA Card */}
      <WebliixCard variant="featured" className="p-8 sm:p-10 border border-theme-primary/50 space-y-5">
        <div className="flex items-center gap-2 text-theme-primary font-mono text-xs font-bold uppercase tracking-widest">
          <Rocket className="w-4 h-4" /> Ready to Upgrade Your Business?
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
          Launch Your Website &amp; Local SEO in 5–7 Days
        </h3>
        <p className="text-sm text-theme-muted max-w-2xl leading-relaxed">
          Don't wait months to grow online. Webliix delivers full custom website design, Google Maps setup, SEO tags, and branding in one complete turnkey package.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link to="/launch-kit">
            <WebliixButton variant="primary" icon={ArrowRight} size="md">
              Explore LaunchKit Packages
            </WebliixButton>
          </Link>
          <Link to="/contact">
            <WebliixButton variant="ghost" size="md">
              Request Free Consultation
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>

      {/* Read Next / Related Articles */}
      <div className="space-y-6 pt-6 border-t border-theme-border/60">
        <h3 className="text-xl font-display font-bold text-theme-text">
          More Articles &amp; Strategies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {otherBlogs.map((item) => (
            <Link key={item.id} to={`/blog/${item.id}`} className="group">
              <WebliixCard variant="panel" className="p-5 space-y-3 h-full flex flex-col justify-between group-hover:border-theme-primary/60 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-theme-muted">
                    <span className="px-2 py-0.5 rounded-full bg-theme-primary/10 text-theme-primary border border-theme-primary/20">{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h4 className="text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-theme-muted line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-t border-theme-border/40 flex items-center justify-between text-xs font-semibold text-theme-primary">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </WebliixCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
