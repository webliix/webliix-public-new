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
  AlertCircle,
  Copy
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import {
  WebliixInput,
  WebliixTextarea,
  WebliixFieldGroup,
  WebliixLabel
} from '../components/ui/WebliixInput';
import {
  getBlogBySlug,
  getRelatedBlogs,
  likeBlogPost,
  recordArticleView,
  getBlogComments,
  addComment
} from '../services/blogService';
import { useAudio } from '../context/AudioContext';

function CommentNode({ comment, onReply, depth = 0 }) {
  const author = comment.authorName || comment.name || 'Anonymous Reader';
  const text = comment.content || comment.comment || comment.text || '';
  const dateStr = comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : '';

  return (
    <div
      className={`p-4 sm:p-5 theme-rounded-card glass-spatial border border-theme-border/60 space-y-3 ${
        depth > 0 ? 'bg-theme-bg/60 border-theme-border/40 ml-3 sm:ml-6 mt-2' : ''
      }`}
    >
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-theme-primary/20 text-theme-primary font-mono font-bold flex items-center justify-center text-xs shrink-0">
            {author.charAt(0).toUpperCase()}
          </div>
          <span className="font-bold text-theme-text">{author}</span>
        </div>
        {dateStr && (
          <span className="font-mono text-theme-muted text-[11px]">{dateStr}</span>
        )}
      </div>

      <p className="text-xs sm:text-sm text-theme-muted leading-relaxed pl-9">
        {text}
      </p>

      <div className="pl-9 pt-1 flex justify-end">
        <button
          onClick={() => onReply(comment.id, author)}
          className="text-xs font-mono text-theme-primary hover:underline flex items-center gap-1"
        >
          <CornerDownRight className="w-3.5 h-3.5" /> Reply
        </button>
      </div>

      {Array.isArray(comment.replies) && comment.replies.length > 0 && (
        <div className="space-y-3 border-t border-theme-border/40 pt-2 mt-2">
          {comment.replies.map((reply, rIdx) => (
            <CommentNode key={reply.id || rIdx} comment={reply} onReply={onReply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BlogPost() {
  const { id } = useParams();
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
  const [likeLoading, setLikeLoading] = useState(false);

  // Share & Copy state
  const [copied, setCopied] = useState(false);

  // Comment Form state
  const [commentForm, setCommentForm] = useState({
    authorName: '',
    authorEmail: '',
    content: ''
  });
  const [replyingToId, setReplyingToId] = useState(null);
  const [replyingToAuthor, setReplyingToAuthor] = useState('');
  const [commentStatus, setCommentStatus] = useState('idle'); // idle | submitting | success | error
  const [commentError, setCommentError] = useState('');

  // 1. Fetch Article & Meta on Mount or ID Change
  useEffect(() => {
    let isCancelled = false;
    async function loadPostData() {
      setLoading(true);
      setError(null);
      try {
        const data = await getBlogBySlug(id);
        if (!isCancelled && data) {
          const targetId = data.id || data.slug || id;
          
          // Optimistically update views count for the current session
          const initialViews = typeof data.viewsCount === 'number' ? data.viewsCount : 0;
          setPost({
            ...data,
            viewsCount: initialViews + 1
          });
          setLikes(typeof data.likesCount === 'number' ? data.likesCount : 0);

          // Record article view in backend
          recordArticleView(targetId);

          // Check localStorage if already liked
          const likedKey = `webliix_liked_${targetId}`;
          const likedSlugKey = data.slug ? `webliix_liked_${data.slug}` : null;
          const likedIdKey = data.id ? `webliix_liked_${data.id}` : null;
          setHasLiked(Boolean(
            localStorage.getItem(likedKey) ||
            (likedSlugKey && localStorage.getItem(likedSlugKey)) ||
            (likedIdKey && localStorage.getItem(likedIdKey))
          ));

          // Fetch related recommendations & comments in parallel
          try {
            const [rel, comms] = await Promise.all([
              getRelatedBlogs(targetId, 3),
              getBlogComments(targetId)
            ]);
            if (!isCancelled) {
              setRelatedPosts(rel || []);
              setComments(comms || []);
            }
          } catch (e) {
            console.warn('Could not load related recommendations or comments:', e);
          }
        }
      } catch (err) {
        console.error('Failed to load article:', err);
        if (!isCancelled) setError(err.message || 'Article could not be found.');
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    loadPostData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      isCancelled = true;
    };
  }, [id]);

  // 2. Handle Like Post (Optimistic UI + API Sync)
  const handleLike = async () => {
    if (!post || likeLoading) return;
    const targetId = post.id || post.slug || id;
    
    // Optimistic UI update
    setLikes(prev => prev + 1);
    setHasLiked(true);
    setLikeLoading(true);
    playSound('success');

    try {
      localStorage.setItem(`webliix_liked_${targetId}`, 'true');
      if (post.id) localStorage.setItem(`webliix_liked_${post.id}`, 'true');
      if (post.slug) localStorage.setItem(`webliix_liked_${post.slug}`, 'true');
      
      const res = await likeBlogPost(targetId);
      if (res && typeof res.likesCount === 'number') {
        setLikes(res.likesCount);
      }
    } catch (err) {
      console.warn('Like sync notice:', err);
    } finally {
      setLikeLoading(false);
    }
  };

  // 3. Social Sharing Handlers
  const handleShare = async () => {
    playSound('click');
    const shareUrl = window.location.href;
    const shareData = {
      title: post?.title || 'Webliix Knowledge Hub',
      text: post?.summary || '',
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    handleCopyLink();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    playSound('click');
    setTimeout(() => setCopied(false), 2500);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${post?.title} - Read more on Webliix: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // 4. Handle Comment Submission (Parent or Threaded Reply)
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const name = (commentForm.authorName || '').trim();
    const message = (commentForm.content || '').trim();

    if (!message) {
      setCommentError('Please enter your comment message.');
      playSound('error');
      return;
    }

    setCommentStatus('submitting');
    setCommentError('');
    playSound('click');

    try {
      const targetId = post.id || post.slug || id;
      const newComment = await addComment(targetId, {
        parentId: replyingToId,
        authorName: name || 'Anonymous Reader',
        authorEmail: commentForm.authorEmail.trim(),
        content: message
      });

      // Optimistically insert comment into hierarchy (handling nested replies)
      if (replyingToId) {
        setComments(prev => {
          const insertReply = (list) => {
            return list.map(c => {
              if (String(c.id) === String(replyingToId)) {
                return {
                  ...c,
                  replies: [...(c.replies || []), newComment]
                };
              }
              if (c.replies && c.replies.length > 0) {
                return {
                  ...c,
                  replies: insertReply(c.replies)
                };
              }
              return c;
            });
          };
          return insertReply(prev);
        });
      } else {
        setComments(prev => [newComment, ...prev]);
      }

      // Re-fetch authoritative comments list from backend in background
      try {
        const freshComments = await getBlogComments(targetId);
        if (Array.isArray(freshComments) && freshComments.length > 0) {
          setComments(freshComments);
        }
      } catch (_) {}

      setCommentForm(prev => ({ ...prev, content: '' }));
      setReplyingToId(null);
      setReplyingToAuthor('');
      setCommentStatus('success');
      playSound('success');

      // Update local comment counter
      setPost(prev => prev ? ({ ...prev, commentsCount: (prev.commentsCount || 0) + 1 }) : prev);

      setTimeout(() => {
        setCommentStatus('idle');
      }, 4000);
    } catch (err) {
      console.error('Comment submission error:', err);
      setCommentError(err.message || 'Failed to submit comment. Please check your connection and try again.');
      setCommentStatus('error');
      playSound('error');
    }
  };

  const startReply = (commentId, authorName) => {
    setReplyingToId(commentId);
    setReplyingToAuthor(authorName);
    playSound('click');
    const formSection = document.getElementById('comment-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToComments = () => {
    playSound('click');
    const commentsEl = document.getElementById('comments-section') || document.getElementById('comment-form-section');
    if (commentsEl) {
      commentsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Safe Category & Tags String Resolution
  const postCategory = typeof post?.category === 'string' ? post.category : (post?.category?.name || 'Insights');
  const postAuthor = typeof post?.authorName === 'string' ? post.authorName : (post?.author?.name || 'Webliix Engineering');

  const tagsList = post?.tags
    ? (Array.isArray(post.tags)
        ? post.tags.map(t => (typeof t === 'string' ? t : (t.name || t.slug || t.tag || String(t.id)))).filter(Boolean)
        : String(post.tags).split(',').map(t => t.trim()).filter(Boolean))
    : (postCategory ? [postCategory] : []);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-8 animate-pulse">
        <div className="h-6 w-36 bg-theme-border/60 rounded-full" />
        <div className="h-12 w-3/4 bg-theme-border/80 rounded-xl" />
        <div className="h-4 w-1/2 bg-theme-border/40 rounded" />
        <div className="h-80 w-full bg-theme-border/50 rounded-2xl" />
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
            {error || 'The article you are looking for might have been moved or is no longer published.'}
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
      name: postAuthor
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.brand.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://webliix.com/logo.png'
      }
    },
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt || post.publishedAt || post.createdAt,
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
          {postCategory && (
            <span className="px-3.5 py-1 rounded-full bg-theme-primary/15 border border-theme-primary/30 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider">
              {postCategory}
            </span>
          )}
          <span className="text-xs font-mono text-theme-muted flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-theme-primary" /> {post.readingTimeMinutes || 4} min read
          </span>
          {post.publishedAt && (
            <span className="text-xs font-mono text-theme-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-theme-primary" /> {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          )}
          {typeof post.viewsCount === 'number' && (
            <span className="text-xs font-mono text-theme-muted flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-theme-primary" /> {post.viewsCount} views
            </span>
          )}
          <button
            onClick={scrollToComments}
            className="text-xs font-mono text-theme-muted hover:text-theme-primary transition flex items-center gap-1 cursor-pointer"
            title="Jump to Discussion & Comments"
          >
            <MessageSquare className="w-3.5 h-3.5 text-theme-primary" /> {comments.length || post.commentsCount || 0} comments
          </button>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-theme-text leading-tight">
          {post.title}
        </h1>

        {post.summary && (
          <p className="text-theme-muted text-base sm:text-lg leading-relaxed border-l-2 border-theme-primary/60 pl-4 italic">
            {post.summary}
          </p>
        )}

        {/* Author Byline & Social Actions Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-theme-border/60 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-theme-primary/20 border border-theme-primary/40 flex items-center justify-center font-bold font-mono text-theme-primary text-sm shadow-sm">
              {(postAuthor || 'W').charAt(0)}
            </div>
            <div>
              <span className="text-sm font-bold text-theme-text block">{postAuthor}</span>
              <span className="text-xs text-theme-muted">Digital Strategy &amp; Core Architecture</span>
            </div>
          </div>

          {/* Social Share & Like Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Interactive Like / Clap Button */}
            <button
              id={`like-btn-${post.slug || post.id}`}
              onClick={handleLike}
              className={`px-3.5 py-2 theme-rounded-btn flex items-center gap-2 text-xs font-mono font-bold transition-all border ${
                hasLiked
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 shadow-sm'
                  : 'glass-spatial text-theme-muted hover:text-rose-400 border-theme-border/60 hover:border-rose-500/40'
              }`}
              title="Like this article"
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current text-rose-400' : ''}`} />
              <span id={`like-count-${post.slug || post.id}`}>{likes}</span>
            </button>

            {/* Top Comments Scroll Button */}
            <button
              onClick={scrollToComments}
              className="px-3 py-2 theme-rounded-btn glass-spatial border border-theme-border/60 hover:border-theme-primary text-theme-muted hover:text-theme-primary transition flex items-center gap-1.5 text-xs font-mono"
              title="Jump to Comments"
            >
              <MessageSquare className="w-4 h-4 text-theme-primary" />
              <span className="hidden sm:inline">Comments ({comments.length})</span>
            </button>

            {/* Quick Share Trigger */}
            <button
              onClick={handleShare}
              className="p-2.5 theme-rounded-btn glass-spatial border border-theme-border/60 hover:border-theme-primary text-theme-muted hover:text-theme-primary transition flex items-center gap-1.5 text-xs font-mono"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="p-2.5 theme-rounded-btn glass-spatial border border-theme-border/60 hover:border-theme-primary text-theme-muted hover:text-theme-primary transition"
              title="Copy URL"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* TOP GOOGLE AD UNIT BANNER */}
      {post.enableAds && post.topAdSlotId && (
        <div className="p-4 rounded-2xl bg-theme-bg/60 border border-dashed border-theme-border text-center space-y-2">
          <span className="text-[10px] font-mono text-theme-muted uppercase tracking-widest block font-bold">
            Advertisement
          </span>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={post.adSenseClientId || "ca-pub-1234567890123456"}
            data-ad-slot={post.topAdSlotId}
            data-ad-format={post.adFormat || "auto"}
            data-full-width-responsive="true"
          />
        </div>
      )}

      {/* COVER IMAGE */}
      {post.coverImageUrl && (
        <div className="space-y-2">
          <div
            className="theme-rounded-card overflow-hidden border border-theme-border/80 bg-theme-bg/60"
            style={{
              aspectRatio: post.coverImageAspectRatio === "21:9" ? "21/9" : post.coverImageAspectRatio === "4:3" ? "4/3" : post.coverImageAspectRatio === "1:1" ? "1/1" : "16/9"
            }}
          >
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
        {/* Render Rich HTML Content */}
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

        {/* BOTTOM GOOGLE AD UNIT BANNER */}
        {post.enableAds && post.bottomAdSlotId && (
          <div className="p-4 rounded-2xl bg-theme-bg/60 border border-dashed border-theme-border text-center space-y-2">
            <span className="text-[10px] font-mono text-theme-muted uppercase tracking-widest block font-bold">
              Advertisement
            </span>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client={post.adSenseClientId || "ca-pub-1234567890123456"}
              data-ad-slot={post.bottomAdSlotId}
              data-ad-format={post.adFormat || "auto"}
              data-full-width-responsive="true"
            />
          </div>
        )}

        {/* Topic Tags Cloud */}
        {tagsList.length > 0 && (
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
        )}
      </article>

      {/* LAUNCHKIT CALL-TO-ACTION BANNER */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-10 border border-theme-primary/50 space-y-5"
      >
        <div className="flex items-center gap-2 text-theme-primary font-mono text-xs font-bold uppercase tracking-widest">
          <Rocket className="w-4 h-4" /> Ready to Grow Your Business?
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
          Launch Your Website &amp; Digital Presence in 5–7 Days
        </h3>
        <p className="text-sm text-theme-muted max-w-2xl leading-relaxed">
          Webliix builds high-speed responsive websites, Local SEO, and brand identities with 100% source code ownership and transparent upfront pricing.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link to="/launch-kit">
            <WebliixButton variant="primary" icon={ArrowRight} size="md">
              Explore LaunchKit
            </WebliixButton>
          </Link>
          <Link to="/contact">
            <WebliixButton variant="ghost" size="md">
              Talk to an Expert
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>

      {/* COMMENTS & DISCUSSION SECTION */}
      <section id="comments-section" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-theme-text flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-theme-primary" />
            <span>Discussion &amp; Comments ({comments.length})</span>
          </h3>
        </div>

        {/* Comment Submission Form */}
        <div id="comment-form-section">
          <WebliixCard variant="panel" className="p-6 sm:p-8 space-y-4 border border-theme-border/80">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-display font-bold text-theme-text">
                {replyingToId ? `Replying to ${replyingToAuthor || 'Comment'}` : 'Join the Discussion'}
              </h4>
              {replyingToId && (
                <button
                  onClick={() => {
                    setReplyingToId(null);
                    setReplyingToAuthor('');
                  }}
                  className="text-xs font-mono text-rose-400 hover:underline"
                >
                  Cancel Reply
                </button>
              )}
            </div>

            {commentStatus === 'success' ? (
              <div className="p-4 theme-rounded-card bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! Your comment has been posted successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="comment-author" required>Your Name</WebliixLabel>
                    <WebliixInput
                      id="comment-author"
                      name="authorName"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={commentForm.authorName}
                      onChange={(e) => setCommentForm(prev => ({ ...prev, authorName: e.target.value }))}
                    />
                  </WebliixFieldGroup>

                  <WebliixFieldGroup>
                    <WebliixLabel htmlFor="comment-email" optional>Email Address (kept private)</WebliixLabel>
                    <WebliixInput
                      id="comment-email"
                      name="authorEmail"
                      type="email"
                      placeholder="rahul@example.com"
                      value={commentForm.authorEmail}
                      onChange={(e) => setCommentForm(prev => ({ ...prev, authorEmail: e.target.value }))}
                    />
                  </WebliixFieldGroup>
                </div>

                <WebliixFieldGroup>
                  <WebliixLabel htmlFor="comment-content" required>Your Message / Feedback</WebliixLabel>
                  <WebliixTextarea
                    id="comment-content"
                    name="content"
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
                    disabled={commentStatus === 'submitting'}
                    icon={Send}
                  >
                    {commentStatus === 'submitting' ? 'Submitting...' : replyingToId ? 'Post Reply' : 'Post Comment'}
                  </WebliixButton>
                </div>
              </form>
            )}
          </WebliixCard>
        </div>

        {/* Render Threaded Comments List */}
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment, cIdx) => (
              <CommentNode key={comment.id || cIdx} comment={comment} onReply={startReply} depth={0} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-xs font-mono text-theme-muted theme-rounded-card glass-spatial border border-theme-border/40">
            No comments yet. Be the first to share your thoughts!
          </div>
        )}
      </section>

      {/* RELATED ARTICLES RECOMMENDATIONS */}
      {relatedPosts.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-theme-border/60">
          <h3 className="text-xl font-display font-bold text-theme-text">
            Related Insights &amp; Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((item, rIdx) => {
              const itemCat = typeof item.category === 'string' ? item.category : (item.category?.name || 'Insights');
              return (
                <Link key={item.id || item.slug || rIdx} to={`/blog/${item.slug || item.id}`} className="group block h-full">
                  <WebliixCard
                    variant="featured"
                    className="p-4 sm:p-5 space-y-3 h-full flex flex-col justify-between group-hover:border-theme-primary/60 transition-colors"
                  >
                    <div className="space-y-2">
                      {itemCat && (
                        <span className="px-2 py-0.5 rounded-full bg-theme-primary/10 text-theme-primary text-[10px] font-mono border border-theme-primary/20">
                          {itemCat}
                        </span>
                      )}
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
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
