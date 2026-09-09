import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Clock,
  User,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  Sparkles,
  Heart,
  Eye,
  MessageSquare,
  CheckCircle2,
  Rocket,
  CornerDownRight,
  Send,
  ShieldCheck,
  Tag,
  Check,
  AlertCircle
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import {
  WebliixInput,
  WebliixTextarea,
  WebliixFieldGroup
} from '../components/ui/WebliixInput';
import {
  getBlogBySlug,
  getRelatedBlogs,
  likeBlogPost,
  recordArticleView,
  getBlogComments,
  postBlogComment
} from '../services/blogService';

import { useAudio } from '../context/AudioContext';

export default function BlogPost() {
  const { slug, id } = useParams();
  const articleSlugOrId = slug || id;
  const navigate = useNavigate();
  const { playSound } = useAudio();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Like interaction state
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Share state
  const [copied, setCopied] = useState(false);

  // Comment Form state
  const [commentForm, setCommentForm] = useState({
    authorName: '',
    authorEmail: '',
    content: ''
  });
  const [replyingToId, setReplyingToId] = useState(null);
  const [commentStatus, setCommentStatus] = useState('idle'); // idle | submitting | success | error
  const [commentError, setCommentError] = useState('');

  // Fetch article data on mount or slug change
  useEffect(() => {
    let isCancelled = false;
    async function loadPost() {
      setLoading(true);
      setError(null);
      try {
        const data = await getBlogBySlug(articleSlugOrId);
        if (!isCancelled) {
          setPost(data);
          setLikes(data.likesCount || 0);

          const identifier = data.slug || data.id;

          // Record article view in backend
          recordArticleView(identifier);

          // Check localStorage if already liked
          const likedKey = `webliix_liked_${identifier}`;
          const likedIdKey = `webliix_liked_${data.id}`;
          setHasLiked(Boolean(localStorage.getItem(likedKey) || localStorage.getItem(likedIdKey)));

          // Fetch related posts and comments
          try {
            const [rel, comms] = await Promise.all([
              getRelatedBlogs(identifier, 3),
              getBlogComments(identifier)
            ]);
            if (!isCancelled) {
              setRelatedPosts(rel || []);
              setComments(comms || []);
            }
          } catch (e) {
            console.warn('Could not load related posts or comments:', e);
          }
        }
      } catch (err) {
        console.error('Failed to load article:', err);
        if (!isCancelled) setError('Article could not be found.');
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    loadPost();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      isCancelled = true;
    };
  }, [articleSlugOrId]);

  // Handle Like Post (Optimistic + Backend Sync)
  const handleLike = async () => {
    if (hasLiked || !post) return;
    const identifier = post.slug || post.id;
    setLikes(prev => prev + 1);
    setHasLiked(true);
    playSound('success');

    try {
      localStorage.setItem(`webliix_liked_${identifier}`, 'true');
      localStorage.setItem(`webliix_liked_${post.id}`, 'true');
      const res = await likeBlogPost(identifier);
      if (res && typeof res.likesCount === 'number') {
        setLikes(res.likesCount);
      }
    } catch (err) {
      console.warn('Like submission failed:', err);
    }
  };


  // Handle Share Link
  const handleShare = async () => {
    playSound('click');
    const shareUrl = window.location.href;
    const shareData = {
      title: post?.title || 'Webliix Insights',
      text: post?.summary || '',
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Share dismissed
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Handle Comment Submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentForm.authorName.trim() || !commentForm.content.trim()) {
      setCommentError('Please fill in your name and comment.');
      playSound('error');
      return;
    }

    setCommentStatus('submitting');
    setCommentError('');
    playSound('click');

    try {
      const identifier = post.slug || post.id;
      const newComment = await postBlogComment(identifier, {
        parentId: replyingToId,
        authorName: commentForm.authorName.trim(),
        authorEmail: commentForm.authorEmail.trim(),
        content: commentForm.content.trim()
      });


      // Optimistically update comments list
      if (replyingToId) {
        setComments(prev =>
          prev.map(c => {
            if (c.id === replyingToId) {
              return {
                ...c,
                replies: [...(c.replies || []), newComment]
              };
            }
            return c;
          })
        );
      } else {
        setComments(prev => [newComment, ...prev]);
      }

      setCommentForm({ authorName: '', authorEmail: '', content: '' });
      setReplyingToId(null);
      setCommentStatus('success');
      playSound('success');

      // Update local comments count on post
      setPost(prev => prev ? ({ ...prev, commentsCount: (prev.commentsCount || 0) + 1 }) : prev);

      // Re-enable comment form after 3.5s
      setTimeout(() => {
        setCommentStatus('idle');
      }, 3500);
    } catch (err) {
      console.error('Comment error:', err);
      setCommentError('Failed to post comment. Please try again.');
      setCommentStatus('error');
      playSound('error');
    }
  };


  // Parse tags list
  const tagsList = post?.tags
    ? (Array.isArray(post.tags) ? post.tags : post.tags.split(',').map(t => t.trim()))
    : [post?.category || 'Technology'];

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-8 animate-pulse">
        <div className="h-6 w-32 bg-theme-border/60 rounded-full" />
        <div className="h-12 w-3/4 bg-theme-border/80 rounded-xl" />
        <div className="h-4 w-1/2 bg-theme-border/40 rounded" />
        <div className="h-72 w-full bg-theme-border/50 rounded-2xl" />
        <div className="space-y-3 pt-4">
          <div className="h-4 bg-theme-border/60 rounded w-full" />
          <div className="h-4 bg-theme-border/60 rounded w-5/6" />
          <div className="h-4 bg-theme-border/60 rounded w-4/6" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-4 max-w-lg mx-auto text-center space-y-6">
        <div className="p-8 theme-rounded-card glass-spatial border border-theme-border/80 space-y-4">
          <AlertCircle className="w-12 h-12 text-rose-400 mx-auto" />
          <h2 className="text-2xl font-display font-bold text-theme-text">Article Not Found</h2>
          <p className="text-sm text-theme-muted">
            The article you are looking for might have been moved or is no longer published.
          </p>
          <div className="pt-2">
            <Link to="/blog">
              <WebliixButton variant="primary" size="md" icon={ArrowLeft}>
                Back to Knowledge Hub
              </WebliixButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Structured Data JSON-LD for Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.summary,
    image: post.ogImageUrl || post.coverImageUrl || 'https://webliix.com/og-image.jpg',
    author: {
      '@type': 'Organization',
      name: post.authorName || 'Webliix Engineering'
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.brand.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://webliix.com/og-image.jpg'
      }
    },
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.publishedAt || post.createdAt,
    mainEntityOfPage: post.canonicalUrl || `https://webliix.com/blog/${post.slug || post.id}`
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
      <Helmet>
        <title>{post.seoTitle || `${post.title} | ${siteConfig.brand.name} Knowledge Hub`}</title>
        <meta name="description" content={post.seoDescription || post.summary} />
        <link rel="canonical" href={post.canonicalUrl || `https://webliix.com/blog/${post.slug || post.id}`} />
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={post.seoDescription || post.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://webliix.com/blog/${post.slug || post.id}`} />
        <meta property="og:image" content={post.ogImageUrl || post.coverImageUrl || 'https://webliix.com/og-image.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle || post.title} />
        <meta name="twitter:description" content={post.seoDescription || post.summary} />
        <meta name="twitter:image" content={post.ogImageUrl || post.coverImageUrl || 'https://webliix.com/og-image.jpg'} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Back to Blog Navigation */}
      <div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-theme-muted hover:text-theme-primary transition group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Knowledge Hub</span>
        </Link>
      </div>

      {/* ARTICLE HEADER */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3.5 py-1 rounded-full bg-theme-primary/15 border border-theme-primary/30 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-xs font-mono text-theme-muted flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-theme-primary" /> {post.readingTimeMinutes || 4} min read
          </span>
          {post.publishedAt && (
            <span className="text-xs font-mono text-theme-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-theme-primary" /> {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          )}
          {post.viewsCount > 0 && (
            <span className="text-xs font-mono text-theme-muted flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-theme-primary" /> {post.viewsCount} views
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-theme-text leading-tight">
          {post.title}
        </h1>

        {post.summary && (
          <p className="text-theme-muted text-base sm:text-lg leading-relaxed border-l-2 border-theme-primary/60 pl-4 italic">
            {post.summary}
          </p>
        )}

        {/* Author Byline & Social Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-theme-border/60 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-theme-primary/20 border border-theme-primary/40 flex items-center justify-center font-bold font-mono text-theme-primary text-sm">
              {(post.authorName || 'W').charAt(0)}
            </div>
            <div>
              <span className="text-sm font-bold text-theme-text block">{post.authorName || 'Webliix Engineering'}</span>
              <span className="text-xs text-theme-muted">Digital Strategy &amp; Core Systems</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Interactive Like Button */}
            <button
              onClick={handleLike}
              className={`p-2.5 theme-rounded-btn flex items-center gap-1.5 text-xs font-mono font-bold transition-all border ${
                hasLiked
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                  : 'glass-spatial text-theme-muted hover:text-rose-400 border-theme-border/60 hover:border-rose-500/40'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current text-rose-400' : ''}`} />
              <span>{likes}</span>
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="p-2.5 theme-rounded-btn glass-spatial border border-theme-border/60 hover:border-theme-primary text-theme-muted hover:text-theme-primary transition flex items-center gap-1.5 text-xs font-mono"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* COVER IMAGE */}
      {post.coverImageUrl && (
        <div className="space-y-2">
          <div className="theme-rounded-card overflow-hidden border border-theme-border/80 bg-theme-bg/60 max-h-[480px]">
            <img
              src={post.coverImageUrl}
              alt={post.coverImageAlt || post.title}
              className="w-full h-full object-cover"
            />
          </div>
          {post.coverImageCaption && (
            <p className="text-[11px] font-mono text-theme-muted text-center italic">
              {post.coverImageCaption}
            </p>
          )}
        </div>
      )}

      {/* ARTICLE BODY */}
      <article className="space-y-8 text-theme-text text-sm sm:text-base leading-relaxed">
        {/* Render HTML content safely */}
        {post.content ? (
          <div
            className="webliix-article-content prose prose-invert max-w-none space-y-6 text-theme-text/90 leading-relaxed [&>h2]:text-2xl [&>h2]:font-display [&>h2]:font-bold [&>h2]:text-theme-text [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-theme-text [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:leading-relaxed [&>p]:text-theme-muted [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>pre]:p-4 [&>pre]:theme-rounded-card [&>pre]:bg-black/50 [&>pre]:border [&>pre]:border-theme-border [&>code]:text-theme-primary [&>code]:font-mono [&>a]:text-theme-primary [&>a]:underline [&>blockquote]:border-l-2 [&>blockquote]:border-theme-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-theme-muted"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        ) : (
          <p className="text-theme-muted leading-relaxed">
            {post.summary}
          </p>
        )}

        {/* Topic Tags */}
        <div className="pt-6 border-t border-theme-border/60 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider mr-2 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" /> Topic Tags:
          </span>
          {tagsList.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1 rounded-lg glass-spatial border border-theme-border/80 text-xs font-mono text-theme-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* LAUNCHKIT CTA BANNER */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-10 border border-theme-primary/50 space-y-5"
      >
        <div className="flex items-center gap-2 text-theme-primary font-mono text-xs font-bold uppercase tracking-widest">
          <Rocket className="w-4 h-4" /> Transform Your Business Online
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
          Launch Your Website &amp; Local SEO in 5–7 Days
        </h3>
        <p className="text-sm text-theme-muted max-w-2xl leading-relaxed">
          Don't wait months to grow online. Webliix delivers full custom website design, Google Maps setup, SEO tags, and branding in one complete turnkey package.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link to="/contact">
            <WebliixButton variant="primary" icon={ArrowRight} size="md">
              Start Your Project
            </WebliixButton>
          </Link>
          <Link to="/portfolio-website">
            <WebliixButton variant="secondary" size="md">
              View Portfolio Websites
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>

      {/* COMMENTS & DISCUSSION SECTION */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-theme-text flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-theme-primary" />
            <span>Discussion &amp; Comments ({comments.length})</span>
          </h3>
        </div>

        {/* Post a Comment Form */}
        <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-border/80">
          <h4 className="text-base font-display font-bold text-theme-text">
            {replyingToId ? 'Leave a Reply' : 'Join the Discussion'}
          </h4>

          {replyingToId && (
            <div className="p-2.5 theme-rounded-card bg-theme-primary/10 border border-theme-primary/30 text-xs font-mono text-theme-primary flex items-center justify-between">
              <span>Replying to comment #{replyingToId}</span>
              <button
                onClick={() => setReplyingToId(null)}
                className="text-xs text-rose-400 hover:underline"
              >
                Cancel Reply
              </button>
            </div>
          )}

          {commentStatus === 'success' ? (
            <div className="p-4 theme-rounded-card bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Thank you! Your comment has been posted.</span>
            </div>
          ) : (
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <WebliixFieldGroup label="Your Name" required htmlFor="comment-name">
                  <WebliixInput
                    id="comment-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={commentForm.authorName}
                    onChange={(e) => setCommentForm(prev => ({ ...prev, authorName: e.target.value }))}
                  />
                </WebliixFieldGroup>

                <WebliixFieldGroup label="Email Address" required htmlFor="comment-email">
                  <WebliixInput
                    id="comment-email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={commentForm.authorEmail}
                    onChange={(e) => setCommentForm(prev => ({ ...prev, authorEmail: e.target.value }))}
                  />
                </WebliixFieldGroup>
              </div>

              <WebliixFieldGroup label="Your Comment" required htmlFor="comment-content">
                <WebliixTextarea
                  id="comment-content"
                  required
                  rows={3}
                  placeholder="Share your thoughts, architectural feedback, or questions..."
                  value={commentForm.content}
                  onChange={(e) => setCommentForm(prev => ({ ...prev, content: e.target.value }))}
                />
              </WebliixFieldGroup>

              {commentError && (
                <div className="p-3 theme-rounded-card bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                  {commentError}
                </div>
              )}

              <div className="flex justify-end">
                <WebliixButton
                  type="submit"
                  variant="primary"
                  size="sm"
                  loading={commentStatus === 'submitting'}
                  icon={Send}
                >
                  Post Comment
                </WebliixButton>
              </div>
            </form>
          )}
        </WebliixCard>

        {/* Render Threaded Comments List */}
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 sm:p-5 theme-rounded-card glass-spatial border border-theme-border/60 space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-theme-primary/20 text-theme-primary font-mono font-bold flex items-center justify-center text-xs">
                      {(comment.authorName || 'U').charAt(0)}
                    </div>
                    <span className="font-bold text-theme-text">{comment.authorName}</span>
                  </div>
                  {comment.createdAt && (
                    <span className="font-mono text-theme-muted text-[11px]">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-theme-muted leading-relaxed pl-9">
                  {comment.content}
                </p>

                <div className="pl-9 pt-1 flex justify-end">
                  <button
                    onClick={() => {
                      setReplyingToId(comment.id);
                      playSound('click');
                    }}
                    className="text-xs font-mono text-theme-primary hover:underline flex items-center gap-1"
                  >
                    <CornerDownRight className="w-3 h-3" /> Reply
                  </button>
                </div>

                {/* Nested Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="pl-9 pt-3 space-y-3 border-t border-theme-border/40 mt-3">
                    {comment.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="p-3.5 theme-rounded-card bg-theme-bg/60 border border-theme-border/50 space-y-2"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-theme-primary/30 text-theme-primary font-mono font-bold flex items-center justify-center text-[10px]">
                              {(reply.authorName || 'U').charAt(0)}
                            </div>
                            <span className="font-bold text-theme-text">{reply.authorName}</span>
                          </div>
                          {reply.createdAt && (
                            <span className="font-mono text-theme-muted text-[10px]">
                              {new Date(reply.createdAt).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-theme-muted pl-8 leading-relaxed">
                          {reply.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-xs font-mono text-theme-muted theme-rounded-card glass-spatial border border-theme-border/40">
            No comments yet. Be the first to start the discussion!
          </div>
        )}
      </section>

      {/* RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-theme-border/60">
          <h3 className="text-xl font-display font-bold text-theme-text">
            Related Insights &amp; Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((item) => (
              <Link key={item.id} to={`/blog/${item.slug || item.id}`} className="group block h-full">
                <WebliixCard
                  variant="featured"
                  className="p-4 sm:p-5 space-y-3 h-full flex flex-col justify-between group-hover:border-theme-primary/60 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded-full bg-theme-primary/10 text-theme-primary text-[10px] font-mono border border-theme-primary/20">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-theme-muted line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-theme-border/40 flex items-center justify-between text-xs font-semibold text-theme-primary">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </WebliixCard>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
