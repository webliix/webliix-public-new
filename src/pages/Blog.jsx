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
  MessageSquare,
  Tag,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  RefreshCw,
  Flame,
  ArrowUpRight,
  AlertCircle,
  X,
  Filter
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
  getBlogTags,
  searchBlogs
} from '../services/blogService';
import { useAudio } from '../context/AudioContext';

const PAGE_SIZE = 9;

export default function Blog() {
  const { playSound } = useAudio();
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  // 1. Load Categories, Tags & Featured Posts on Mount
  const loadMeta = useCallback(async () => {
    try {
      const [cats, tagList, featured] = await Promise.all([
        getBlogCategories(),
        getBlogTags(),
        getFeaturedBlogs()
      ]);
      setCategories([{ id: 'all', name: 'All', slug: 'all', postCount: null }, ...(cats || [])]);
      setTags(tagList || []);
      setFeaturedBlogs(featured || []);
    } catch (err) {
      console.warn('Metadata fetch notice:', err.message);
    }
  }, []);

  useEffect(() => {
    loadMeta();
  }, [loadMeta]);

  // 2. Fetch Articles on Filter / Page / Search Change
  const loadArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let res;
      if (searchQuery.trim()) {
        res = await searchBlogs(searchQuery.trim(), {
          page: currentPage,
          size: PAGE_SIZE
        });
      } else {
        res = await getPublishedBlogs({
          category: selectedCategory === 'All' ? '' : selectedCategory,
          tag: selectedTag,
          page: currentPage,
          size: PAGE_SIZE
        });
      }

      setBlogs(res.content || []);
      setTotalPages(res.totalPages || 1);
      setTotalElements(res.totalElements || 0);
    } catch (err) {
      console.error('Blog fetch error from backend:', err);
      setError(err.message || 'Failed to load articles from the server.');
      setBlogs([]);
      setTotalPages(1);
      setTotalElements(0);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory, selectedTag, currentPage]);

  useEffect(() => {
    const timer = setTimeout(loadArticles, searchQuery ? 300 : 0);
    return () => clearTimeout(timer);
  }, [loadArticles, searchQuery]);

  // Handlers
  const handleCategoryChange = (catName) => {
    setSelectedCategory(catName);
    setSelectedTag('');
    setCurrentPage(0);
    setSearchQuery('');
    playSound('tab');
  };

  const handleTagClick = (tagName) => {
    if (selectedTag === tagName) {
      setSelectedTag('');
    } else {
      setSelectedTag(tagName);
      setSelectedCategory('All');
      setSearchQuery('');
      setCurrentPage(0);
    }
    playSound('click');
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 350, behavior: 'smooth' });
    playSound('click');
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedTag('');
    setSearchQuery('');
    setCurrentPage(0);
    playSound('click');
  };

  const primaryFeatured = featuredBlogs && featuredBlogs.length > 0 ? featuredBlogs[0] : null;

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-14">
      <Helmet>
        <title>Knowledge Hub & Engineering Insights | {siteConfig.brand.name}</title>
        <meta
          name="description"
          content="Explore deep architectural breakdowns, digital growth tutorials, Google Ads strategies, and technical SEO guides by Webliix digital architects."
        />
        <link rel="canonical" href="https://webliix.com/blog" />
        <meta property="og:title" content={`Knowledge Hub & Engineering Insights | ${siteConfig.brand.name}`} />
        <meta property="og:description" content="Explore deep architectural breakdowns, digital growth tutorials, and technical SEO strategies." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://webliix.com/blog" />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* HERO HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Webliix Knowledge Hub
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Insights on Web, <span className="text-shimmer">SEO &amp; Growth</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Deep architectural breakdowns, practical tutorials, and digital growth strategies direct from Webliix engineers.
        </p>

        {/* Live Search Bar */}
        <div className="relative max-w-lg mx-auto pt-2">
          <input
            type="text"
            placeholder="Search articles by keyword, topic or tag..."
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
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* FEATURED SPOTLIGHT ARTICLE (When on first page, not searching, and available) */}
      {!searchQuery && !selectedTag && selectedCategory === 'All' && currentPage === 0 && primaryFeatured && (
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
              {primaryFeatured.coverImageUrl ? (
                <div className="lg:col-span-5 theme-rounded-card overflow-hidden h-60 sm:h-72 border border-theme-border/60 relative bg-theme-bg/60">
                  <img
                    src={primaryFeatured.coverImageUrl}
                    alt={primaryFeatured.coverImageAlt || primaryFeatured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {primaryFeatured.category && (
                    <span className="absolute top-3 left-3 px-3 py-1 theme-rounded-badge bg-theme-primary text-white text-[11px] font-mono font-bold uppercase shadow-sm">
                      {typeof primaryFeatured.category === 'string' ? primaryFeatured.category : (primaryFeatured.category.name || 'Featured')}
                    </span>
                  )}
                </div>
              ) : null}

              {/* Content Details */}
              <div className={`space-y-4 ${primaryFeatured.coverImageUrl ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-theme-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-theme-primary" /> {primaryFeatured.readingTimeMinutes || 4} min read
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-theme-primary" /> {typeof primaryFeatured.authorName === 'string' ? primaryFeatured.authorName : 'Webliix Engineering'}
                  </span>
                  {primaryFeatured.publishedAt && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-theme-primary" />
                        {new Date(primaryFeatured.publishedAt).toLocaleDateString()}
                      </span>
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
                    {typeof primaryFeatured.viewsCount === 'number' && (
                      <span className="flex items-center gap-1" title="Views">
                        <Eye className="w-3.5 h-3.5 text-theme-primary" /> {primaryFeatured.viewsCount}
                      </span>
                    )}
                    {typeof primaryFeatured.likesCount === 'number' && (
                      <span className="flex items-center gap-1" title="Likes">
                        <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" /> {primaryFeatured.likesCount}
                      </span>
                    )}
                    {typeof primaryFeatured.commentsCount === 'number' && (
                      <span className="flex items-center gap-1" title="Comments">
                        <MessageSquare className="w-3.5 h-3.5 text-theme-primary" /> {primaryFeatured.commentsCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </WebliixCard>
        </section>
      )}

      {/* CATEGORY & TAG FILTER CONTROLS */}
      <section className="space-y-4 pt-2">
        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat, idx) => {
            const catName = typeof cat === 'string' ? cat : (cat.name || 'General');
            const catSlug = typeof cat === 'string' ? cat : (cat.slug || cat.name || idx);
            const postCount = typeof cat === 'object' ? cat.postCount : null;
            const isActive = selectedCategory === catName;
            return (
              <button
                key={`${catSlug}-${idx}`}
                onClick={() => handleCategoryChange(catName)}
                className={`px-4 py-2 theme-rounded-btn text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-theme-primary text-white font-bold shadow-spatial scale-[1.02]'
                    : 'glass-spatial border border-theme-border/70 text-theme-muted hover:text-theme-text hover:border-theme-primary/40'
                }`}
              >
                <span>{catName}</span>
                {postCount !== null && postCount !== undefined && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-theme-border/40 text-theme-muted'
                  }`}>
                    {postCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tag Cloud & Active Filter Indicator */}
        {tags && tags.length > 0 && (
          <div className="flex items-center justify-center flex-wrap gap-1.5 pt-1">
            <span className="text-[11px] font-mono text-theme-muted mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3 text-theme-primary" /> Popular Tags:
            </span>
            {tags.map((tag, idx) => {
              const tagName = typeof tag === 'string' ? tag : (tag.name || tag.slug || tag.tag || String(tag.id || idx));
              const isTagActive = selectedTag === tagName;
              return (
                <button
                  key={`${tagName}-${idx}`}
                  onClick={() => handleTagClick(tagName)}
                  className={`px-2.5 py-0.5 theme-rounded-badge text-[11px] font-mono transition-colors ${
                    isTagActive
                      ? 'bg-theme-primary text-white border-theme-primary'
                      : 'glass-spatial border border-theme-border/50 text-theme-muted hover:text-theme-primary'
                  }`}
                >
                  #{tagName}
                </button>
              );
            })}
          </div>
        )}

        {/* Active Filter Notification Bar */}
        {(selectedCategory !== 'All' || selectedTag || searchQuery) && (
          <div className="flex items-center justify-between p-3 theme-rounded-card bg-theme-primary/5 border border-theme-border/70 text-xs font-mono max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-theme-text">
              <Filter className="w-3.5 h-3.5 text-theme-primary" />
              <span>
                Filtered by: <strong>{searchQuery ? `Search: "${searchQuery}"` : selectedTag ? `Tag: #${selectedTag}` : `Category: ${selectedCategory}`}</strong> ({totalElements} {totalElements === 1 ? 'article' : 'articles'})
              </span>
            </div>
            <button
              onClick={handleResetFilters}
              className="text-theme-primary hover:underline font-bold flex items-center gap-1"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ARTICLES GRID / LOADING / ERROR / EMPTY STATES */}
      <section className="space-y-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-6 theme-rounded-card glass-spatial border border-theme-border/60 space-y-4">
                <div className="h-44 bg-theme-border/50 theme-rounded-card w-full" />
                <div className="h-4 bg-theme-border/60 rounded w-1/3" />
                <div className="h-6 bg-theme-border/80 rounded w-3/4" />
                <div className="space-y-2">
                  <div className="h-3 bg-theme-border/40 rounded w-full" />
                  <div className="h-3 bg-theme-border/40 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="p-10 theme-rounded-card glass-spatial border border-rose-500/30 text-center max-w-lg mx-auto space-y-4">
            <AlertCircle className="w-10 h-10 text-rose-400 mx-auto" />
            <h3 className="text-lg font-display font-bold text-theme-text">Unable to Load Articles</h3>
            <p className="text-xs text-theme-muted leading-relaxed">{error}</p>
            <div className="pt-2">
              <WebliixButton variant="primary" size="sm" icon={RefreshCw} onClick={loadArticles}>
                Retry Loading
              </WebliixButton>
            </div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="p-12 theme-rounded-card glass-spatial border border-theme-border/60 text-center max-w-md mx-auto space-y-4">
            <BookOpen className="w-10 h-10 text-theme-primary mx-auto opacity-70" />
            <h3 className="text-lg font-display font-bold text-theme-text">No Articles Found</h3>
            <p className="text-xs text-theme-muted leading-relaxed">
              No published articles match your current search query or filter selection.
            </p>
            <div className="pt-2">
              <WebliixButton variant="ghost" size="sm" onClick={handleResetFilters}>
                Reset All Filters
              </WebliixButton>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((post, pIdx) => {
              const postCategory = typeof post.category === 'string' ? post.category : (post.category?.name || 'Insights');
              const postAuthor = typeof post.authorName === 'string' ? post.authorName : (post.author?.name || 'Webliix');
              return (
                <Link
                  key={post.id || post.slug || pIdx}
                  to={`/blog/${post.slug || post.id}`}
                  className="group block h-full focus:outline-none"
                >
                  <WebliixCard
                    variant="featured"
                    className="p-5 sm:p-6 space-y-4 h-full flex flex-col justify-between border border-theme-border/80 group-hover:border-theme-primary/60 transition-all duration-300 hover:shadow-spatial"
                  >
                    <div className="space-y-4">
                      {/* Cover Thumbnail */}
                      {post.coverImageUrl ? (
                        <div className="theme-rounded-card overflow-hidden h-44 border border-theme-border/60 relative bg-theme-bg/60">
                          <img
                            src={post.coverImageUrl}
                            alt={post.coverImageAlt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          {postCategory && (
                            <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 theme-rounded-badge bg-theme-primary text-white text-[10px] font-mono font-bold uppercase shadow-sm">
                              {postCategory}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 theme-rounded-badge bg-theme-primary/15 text-theme-primary text-[10px] font-mono font-bold uppercase border border-theme-primary/30">
                            {postCategory}
                          </span>
                          <span className="text-[11px] font-mono text-theme-muted">
                            {post.readingTimeMinutes || 4} min read
                          </span>
                        </div>
                      )}

                      {/* Metadata Header if image exists */}
                      {post.coverImageUrl && (
                        <div className="flex items-center justify-between text-[11px] font-mono text-theme-muted">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3 text-theme-primary" /> {postAuthor}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-theme-primary" /> {post.readingTimeMinutes || 4} min
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Summary Excerpt */}
                      <p className="text-theme-muted text-xs leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    {/* Footer Metrics & Read Action */}
                    <div className="pt-3 border-t border-theme-border/40 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-3 text-theme-muted text-[11px]">
                        {typeof post.viewsCount === 'number' && (
                          <span className="flex items-center gap-1" title="Views">
                            <Eye className="w-3 h-3 text-theme-primary" /> {post.viewsCount}
                          </span>
                        )}
                        {typeof post.likesCount === 'number' && (
                          <span className="flex items-center gap-1" title="Likes">
                            <Heart className="w-3 h-3 text-rose-400 fill-current" /> {post.likesCount}
                          </span>
                        )}
                        {typeof post.commentsCount === 'number' && (
                          <span className="flex items-center gap-1" title="Comments">
                            <MessageSquare className="w-3 h-3 text-theme-primary" /> {post.commentsCount}
                          </span>
                        )}
                      </div>

                      <span className="font-bold text-theme-primary flex items-center gap-1 group-hover:underline">
                        Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </WebliixCard>
                </Link>
              );
            })}
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className="p-2.5 theme-rounded-btn glass-spatial border border-theme-border/80 text-theme-text disabled:opacity-30 disabled:cursor-not-allowed hover:border-theme-primary transition"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx)}
                className={`w-9 h-9 theme-rounded-btn font-mono text-xs font-bold transition-all ${
                  currentPage === idx
                    ? 'bg-theme-primary text-white shadow-spatial'
                    : 'glass-spatial border border-theme-border/80 text-theme-muted hover:text-theme-text hover:border-theme-primary/50'
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages - 1}
              className="p-2.5 theme-rounded-btn glass-spatial border border-theme-border/80 text-theme-text disabled:opacity-30 disabled:cursor-not-allowed hover:border-theme-primary transition"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM NEWSLETTER / LAUNCHKIT BANNER */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-5 border border-theme-primary/50 shadow-spatial-lg"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Turnkey Business Solutions
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Need a High-Performance Website for Your Business?
        </h2>
        <p className="text-sm text-theme-muted max-w-xl mx-auto leading-relaxed">
          From custom website development to Local SEO and digital advertising, Webliix builds conversion-focused platforms that drive measurable growth.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link to="/launch-kit">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Explore Webliix LaunchKit
            </WebliixButton>
          </Link>
          <Link to="/contact">
            <WebliixButton variant="ghost" size="lg">
              Get in Touch
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>
    </div>
  );
}
