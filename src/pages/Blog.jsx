import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Clock, User, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { useModal } from '../context/ModalContext';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const { openModal } = useModal();

  const filteredBlogs = siteConfig.blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReadBlog = (blog) => {
    openModal({
      title: blog.title,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-xs text-theme-muted border-b border-theme-border pb-3">
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-theme-primary" /> {blog.author}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-theme-primary" /> {blog.readTime}</span>
            <span>{blog.date}</span>
          </div>
          <p className="text-theme-text text-sm sm:text-base leading-relaxed font-sans">{blog.content}</p>
          <div className="p-4 rounded-2xl glass-spatial border border-theme-primary/30 space-y-2 text-xs">
            <h5 className="font-semibold text-theme-primary uppercase tracking-wider">Need Custom Implementation?</h5>
            <p className="text-theme-muted">Our engineering team can build and integrate these exact solutions into your website.</p>
          </div>
        </div>
      )
    });
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <Helmet>
        <title>Blog & Knowledge Hub | {siteConfig.brand.name}</title>
        <meta name="description" content="Read expert digital marketing guides, SEO tag tutorials, and web development strategies from Webliix engineers." />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Knowledge Hub
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text">
          Insights on Web, <span className="text-shimmer">SEO & Growth</span>
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
            className="w-full px-5 py-3.5 pl-11 rounded-2xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary"
          />
          <Search className="w-4 h-4 text-theme-muted absolute left-4 top-6" />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <GlassCard
            key={blog.id}
            onClick={() => handleReadBlog(blog)}
            className="p-6 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-theme-muted font-mono">
                <span className="px-2.5 py-1 rounded-full glass-spatial text-theme-primary border border-theme-primary/30">
                  {blog.category}
                </span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-theme-border flex items-center justify-between text-xs font-semibold text-theme-primary">
              <span className="text-theme-muted font-normal">{blog.date}</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
