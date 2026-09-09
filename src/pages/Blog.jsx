import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Search,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  Eye,
  Heart,
  Tag,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  RefreshCw,
  SlidersHorizontal,
  Flame,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import {
  getPublishedBlogs,
  getFeaturedBlogs,
  getBlogCategories,
  searchBlogs
} from '../services/blogService';
import { useAudio } from '../context/AudioContext';

export default function Blog() {
  const { playSound } = useAudio();
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  // Load Categories & Featured Posts on Mount
  const loadMeta = useCallback(async () => {
    try {
      const [cats, featured] = await Promise.all([
        getBlogCategories(),
        getFeaturedBlogs()
      ]);
      setCategories([{ name: 'All', slug: 'all', postCount: null }, ...(cats || [])]);
      setFeaturedBlogs(featured || []);
    } catch (err) {
      console.warn('Backend categories meta fetch notice:', err.message);
    }
  }, []);

  useEffect(() => {
    loadMeta();
  }, [loadMeta]);

  // Fetch blogs on Category / Page / Search change
  const loadArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (searchQuery.trim()) {
        const res = await searchBlogs(searchQuery.trim());
        setBlogs(res.content || []);
        setTotalPages(res.totalPages || 1);
        setTotalElements(res.totalElements || res.content?.length || 0);
      } else {
        const res = await getPublishedBlogs({
          category: selectedCategory === 'All' ? '' : selectedCategory,
          page: currentPage,
          size: 9
        });
        setBlogs(res.content || []);
        setTotalPages(res.totalPages || 1);
        setTotalElements(res.totalElements || 0);
      }
    } catch (err) {
      console.error('Blog fetch error from backend:', err);
      setError(err.message || 'Failed to fetch articles from backend.');
      setBlogs([]);
      setTotalPages(1);
      setTotalElements(0);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory, currentPage]);

  useEffect(() => {
    const timer = setTimeout(loadArticles, searchQuery ? 350 : 0);
    return () => clearTimeout(timer);
  }, [loadArticles, searchQuery]);

  const handleCategoryChange = (catName) => {
    setSelectedCategory(catName);
    setCurrentPage(0);
    setSearchQuery('');
    playSound('tab');
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 300, behavior: 'smooth' });
    playSound('click');
  };

  const primaryFeatured = featuredBlogs && featuredBlogs.length > 0 ? featuredBlogs[0] : null;

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      <Helmet>
        <title>Engineering &amp; Growth Insights | {siteConfig.brand.name} Knowledge Hub</title>
        <meta
          name="description"
          content="Explore deep architectural breakdowns, digital growth tutorials, and technical SEO strategies written by Webliix digital architects."
        />
        <link rel="canonical" href="https://webliix.com/blog" />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* HERO HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Knowledge Hub &amp; Insights
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Insights on Web, <span className="text-shimmer">SEO &amp; Growth</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Deep architectural breakdowns, practical tutorials, and digital growth strategies by Webliix digital architects.
        </p>

        {/* Live Search Bar */}
        <div className="relative max-w-lg mx-auto pt-2">
          <input
            type="text"
            placeholder="Search articles by keyword or topic..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(0);
            }}
            className="w-full px-5 py-3.5 pl-11 pr-10 theme-rounded-input glass-spatial border border-theme-border/80 text-theme-text text-sm focus:outline-none focus:border-theme-primary focus:ring-1 focus:ring-theme-primary/40 transition-all placeholder:text-theme-muted/50"
          />
          <Search className="w-4 h-4 text-theme-muted absolute left-4 top-5.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-5.5 text-xs font-mono text-theme-muted hover:text-theme-primary"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* FEATURED SPOTLIGHT ARTICLE (When not searching, on page 0, and available) */}
      {!searchQuery && currentPage === 0 && primaryFeatured && !error && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-theme-primary uppercase tracking-widest">
            <Flame className="w-4 h-4 text-theme-primary" /> Featured Article
          </div>

          <WebliixCard
            variant="featured"
            className="p-6 sm:p-8 border border-theme-primary/50 overflow-hidden group hover:shadow-spatial-lg transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Cover Image */}
              {primaryFeatured.coverImageUrl && (
                <div className="lg:col-span-5 theme-rounded-card overflow-hidden h-60 sm:h-72 border border-theme-border/60 relative">
                  <img
                    src={primaryFeatured.coverImageUrl}
                    alt={primaryFeatured.coverImageAlt || primaryFeatured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 theme-rounded-badge bg-theme-primary text-white text-[11px] font-mono font-bold uppercase shadow-sm">
                    {primaryFeatured.category}
                  </span>
                </div>
              )}

              {/* Content Details */}
              <div className={`space-y-4 ${primaryFeatured.coverImageUrl ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-theme-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-theme-primary" /> {primaryFeatured.readingTimeMinutes || 4} min read
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-theme-primary" /> {primaryFeatured.authorName}
                  </span>
                  {primaryFeatured.publishedAt && (
                    <>
                      <span>•</span>
                      <span>{new Date(primaryFeatured.publishedAt).toLocaleDateString()}</span>
                    </>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors leading-snug">
                  <Link to={`/blog/${primaryFeatured.slug || primaryFeatured.id}`}>
                    {primaryFeatured.title}
                  </Link>
                </h2>

                <p className="text-theme-muted text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {primaryFeatured.summary}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <Link to={`/blog/${primaryFeatured.slug || primaryFeatured.id}`}>
                    <WebliixButton variant="primary" size="md" icon={ArrowRight}>
                      Read Full Article
                    </WebliixButton>
                  </Link>

                  <div className="flex items-center gap-4 text-xs font-mono text-theme-muted">
                    {primaryFeatured.viewsCount > 0 && (
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> {primaryFeatured.viewsCount} views
                      </span>
                    )}
                    {primaryFeatured.likesCount > 0 && (
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-rose-400" /> {primaryFeatured.likesCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </WebliixCard>
        </section>
      )}

      {/* CATEGORY TABS & FILTER BAR */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-theme-border/60 pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat, idx) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.id || idx}
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`px-3.5 py-1.5 theme-rounded-btn text-xs font-mono font-semibold transition flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-theme-primary text-white shadow-spatial'
                      : 'glass-spatial text-theme-muted hover:text-theme-text border border-theme-border/60'
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.postCount !== null && cat.postCount !== undefined && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected ? 'bg-white/25 text-white' : 'bg-theme-primary/15 text-theme-primary'
                    }`}>
                      {cat.postCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-theme-muted">
            {totalElements} {totalElements === 1 ? 'Article' : 'Articles'}
          </span>
        </div>

        {/* ERROR STATE */}
        {error && !loading && (
          <div className="p-8 text-center space-y-4 theme-rounded-card glass-spatial border border-rose-500/40 max-w-lg mx-auto bg-rose-500/5">
            <AlertCircle className="w-10 h-10 text-rose-400 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-lg font-display font-bold text-theme-text">Backend Connection Error</h3>
              <p className="text-xs text-rose-300 font-mono">
                {error}
              </p>
            </div>
            <div className="pt-2">
              <WebliixButton variant="secondary" size="sm" icon={RefreshCw} onClick={loadArticles}>
                Retry Loading
              </WebliixButton>
            </div>
          </div>
        )}

        {/* LOADING SKELETONS */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((sk) => (
              <div
                key={sk}
                className="p-6 theme-rounded-card glass-spatial border border-theme-border/60 space-y-4 animate-pulse"
              >
                <div className="h-44 bg-theme-border/40 theme-rounded-card w-full" />
                <div className="h-4 bg-theme-border/60 rounded w-1/3" />
                <div className="h-6 bg-theme-border/80 rounded w-3/4" />
                <div className="h-12 bg-theme-border/30 rounded w-full" />
                <div className="h-4 bg-theme-border/40 rounded w-1/2 pt-2" />
              </div>
            ))}
          </div>
        )}

        {/* ARTICLES GRID */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug || post.id}`}
                className="group block h-full"
              >
                <WebliixCard
                  variant="featured"
                  className="p-5 sm:p-6 flex flex-col justify-between h-full space-y-5 border border-theme-border/80 hover:border-theme-primary/60 transition-all duration-300 hover:shadow-spatial"
                >
                  <div className="space-y-4">
                    {/* Cover Thumbnail */}
                    {post.coverImageUrl && (
                      <div className="theme-rounded-card overflow-hidden h-44 border border-theme-border/60 bg-theme-bg/60 relative">
                        <img
                          src={post.coverImageUrl}
                          alt={post.coverImageAlt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 theme-rounded-badge bg-theme-bg/85 backdrop-blur-md border border-theme-border text-theme-primary text-[10px] font-mono font-bold uppercase">
                          {post.category}
                        </span>
                      </div>
                    )}

                    {/* Metadata Pill */}
                    <div className="flex items-center justify-between text-[11px] text-theme-muted font-mono">
                      {!post.coverImageUrl && (
                        <span className="px-2.5 py-0.5 theme-rounded-badge bg-theme-primary/15 text-theme-primary font-semibold border border-theme-primary/30">
                          {post.category}
                        </span>
                      )}
                      <span className="flex items-center gap-1 ml-auto">
                        <Clock className="w-3 h-3 text-theme-primary" /> {post.readingTimeMinutes || 4} min
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-theme-muted text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-theme-muted">
                      <User className="w-3.5 h-3.5 text-theme-primary" />
                      <span className="truncate max-w-[120px]">{post.authorName || 'Webliix'}</span>
                    </div>

                    <span className="font-semibold text-theme-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </WebliixCard>
              </Link>
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && blogs.length === 0 && (
          <div className="p-12 text-center space-y-4 theme-rounded-card glass-spatial border border-theme-border/60 max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-theme-muted/50 mx-auto" />
            <h3 className="text-xl font-display font-bold text-theme-text">No Articles Found</h3>
            <p className="text-xs sm:text-sm text-theme-muted">
              There are currently no published articles in the backend database.
            </p>
            <div className="pt-2">
              <WebliixButton
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  loadArticles();
                }}
              >
                Refresh
              </WebliixButton>
            </div>
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <WebliixButton
              variant="secondary"
              size="sm"
              icon={ChevronLeft}
              disabled={currentPage === 0}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </WebliixButton>

            <span className="px-4 py-2 theme-rounded-btn glass-spatial border border-theme-border text-xs font-mono text-theme-text font-bold">
              Page {currentPage + 1} of {totalPages}
            </span>

            <WebliixButton
              variant="secondary"
              size="sm"
              icon={ChevronRight}
              disabled={currentPage >= totalPages - 1}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </WebliixButton>
          </div>
        )}
      </section>

      {/* CLOSING CTA BANNER */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Transform Your Business Online
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Need Custom Web Engineering or Local SEO For Your Brand?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Webliix builds lightning-fast websites and high-ranking local search funnels tailored to convert visitors into loyal clients.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Start Your Project
            </WebliixButton>
          </Link>
          <Link to="/services">
            <WebliixButton variant="secondary" size="lg" icon={ArrowRight}>
              Explore Services
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>
    </div>
  );
}
