import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Clock, User, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = siteConfig.blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <Helmet>
        <title>Blog &amp; Knowledge Hub | {siteConfig.brand.name}</title>
        <meta name="description" content="Read expert digital marketing guides, SEO tutorials, and web development strategies from Webliix engineers." />
        <link rel="canonical" href="https://webliix.com/blog" />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Knowledge Hub
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text">
          Insights on Web, <span className="text-shimmer">SEO &amp; Growth</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg">
          Practical strategies and technical tutorials written by Webliix digital architects.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto pt-2">
          <input
            type="text"
            placeholder="Search articles by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3.5 pl-11 theme-rounded-input glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary"
          />
          <Search className="w-4 h-4 text-theme-muted absolute left-4 top-6" />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="group block h-full"
          >
            <GlassCard
              className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-6 border border-theme-border hover:border-theme-primary/60 transition-all duration-300 hover:shadow-spatial"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-theme-muted font-mono">
                  <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/15 text-theme-primary font-semibold border border-theme-primary/30">
                    {blog.category}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-theme-muted text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-theme-muted">
                  <User className="w-3.5 h-3.5 text-theme-primary" />
                  <span>{blog.author}</span>
                </div>

                <span className="font-semibold text-theme-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}

