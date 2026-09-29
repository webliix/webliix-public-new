// ─────────────────────────────────────────────────────────────────────────────
// Webliix Public Blog REST API Service
// ─────────────────────────────────────────────────────────────────────────────
// Zero-Auth public endpoints for Webliix knowledge hub & blog system.
// Connects to Spring Boot backend: /api/v1/public/blogs
// ─────────────────────────────────────────────────────────────────────────────

import { resolveUrl } from '../config/apiConfig';
export { resolveUrl };

/**
 * Standard lightweight HTTP client
 */
export const http = {
  async get(url, options = {}) {
    const fullUrl = resolveUrl(url);
    const res = await fetch(fullUrl, {
      ...options,
      headers: {
        'Accept': 'application/json',
        ...(options.headers || {})
      }
    });
    if (!res.ok) {
      let errMsg = `HTTP Error ${res.status}`;
      try {
        const errJson = await res.json();
        errMsg = errJson.message || errJson.error || errMsg;
      } catch (_) {}
      throw new Error(errMsg);
    }
    const data = await res.json();
    return { data, status: res.status };
  },

  async post(url, body = {}, options = {}) {
    const fullUrl = resolveUrl(url);
    const res = await fetch(fullUrl, {
      method: 'POST',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(options.headers || {})
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      let errMsg = `HTTP Error ${res.status}`;
      try {
        const errJson = await res.json();
        errMsg = errJson.message || errJson.error || errMsg;
      } catch (_) {}
      throw new Error(errMsg);
    }
    const data = await res.json();
    return { data, status: res.status };
  }
};

export const BLOG_API_BASE = resolveUrl('/api/v1/public/blogs');

/**
 * Generic fetch wrapper with JSON unwrapping and error handling.
 */
async function apiRequest(endpoint = '', options = {}) {
  let path = endpoint;
  if (!path.startsWith('http')) {
    if (!path) {
      path = '/api/v1/public/blogs';
    } else if (path.startsWith('?') || path.startsWith('/')) {
      path = `/api/v1/public/blogs${path}`;
    } else {
      path = `/api/v1/public/blogs/${path}`;
    }
  }
  const res = await http.get(path, options);
  const json = res.data;
  if (json && typeof json === 'object' && json.data !== undefined) {
    return json.data;
  }
  return json;
}

/**
 * Normalize an article object so strings like category, authorName, and tags are safe primitives.
 */
export function normalizeArticle(article) {
  if (!article || typeof article !== 'object') return article;

  const normalized = { ...article };

  // Category normalization
  if (normalized.category && typeof normalized.category === 'object') {
    normalized.category = normalized.category.name || normalized.category.slug || 'General';
  }

  // Author normalization
  if (normalized.author && typeof normalized.author === 'object') {
    normalized.authorName = normalized.author.name || normalized.author.username || normalized.authorName || 'Webliix';
  } else if (!normalized.authorName && normalized.author) {
    normalized.authorName = String(normalized.author);
  }

  // Tags normalization
  if (Array.isArray(normalized.tags)) {
    normalized.tags = normalized.tags.map(t => (typeof t === 'object' ? (t.name || t.slug || String(t.id)) : String(t))).filter(Boolean);
  } else if (typeof normalized.tags === 'string') {
    normalized.tags = normalized.tags.split(',').map(t => t.trim()).filter(Boolean);
  } else {
    normalized.tags = normalized.category ? [normalized.category] : [];
  }

  // Metrics safe numbers
  normalized.likesCount = typeof normalized.likesCount === 'number' ? normalized.likesCount : (Number(normalized.likes) || 0);
  normalized.viewsCount = typeof normalized.viewsCount === 'number' ? normalized.viewsCount : (Number(normalized.views) || 0);
  normalized.commentsCount = typeof normalized.commentsCount === 'number' ? normalized.commentsCount : (Array.isArray(normalized.comments) ? normalized.comments.length : 0);

  // URL rewrite to ensure all images and inline links point to Render deployed backend
  if (typeof normalized.featuredImage === 'string') {
    normalized.featuredImage = normalized.featuredImage.replace(/http:\/\/localhost:(8082|8080|5173)/g, 'https://webliix-crm-backend.onrender.com');
  }
  if (typeof normalized.coverImage === 'string') {
    normalized.coverImage = normalized.coverImage.replace(/http:\/\/localhost:(8082|8080|5173)/g, 'https://webliix-crm-backend.onrender.com');
  }
  if (typeof normalized.content === 'string') {
    normalized.content = normalized.content.replace(/http:\/\/localhost:(8082|8080|5173)/g, 'https://webliix-crm-backend.onrender.com');
  }

  return normalized;
}

/**
 * Normalize threaded comments ensuring replies is always an array.
 */
export function normalizeComments(comments) {
  if (!Array.isArray(comments)) return [];
  return comments.map(c => ({
    ...c,
    id: c.id,
    authorName: c.authorName || c.name || c.author || 'Anonymous',
    content: c.content || c.comment || c.text || '',
    createdAt: c.createdAt || new Date().toISOString(),
    replies: Array.isArray(c.replies) ? normalizeComments(c.replies) : []
  }));
}

/**
 * 1. Fetch published articles (paginated with optional category & tag filters)
 * GET /api/v1/public/blogs?category={cat}&tag={tag}&page={page}&size={size}
 */
export async function getPublishedBlogs({ category = '', tag = '', page = 0, size = 9 } = {}) {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.append('category', category);
    if (tag) params.append('tag', tag);
    params.append('page', page);
    params.append('size', size);

    const data = await apiRequest(`?${params.toString()}`);
    
    // Normalize Spring Page or Array response
    if (data && typeof data === 'object') {
      const rawItems = Array.isArray(data.content) ? data.content : (Array.isArray(data) ? data : []);
      const items = rawItems.map(normalizeArticle);
      return {
        content: items,
        totalPages: typeof data.totalPages === 'number' ? data.totalPages : (items.length > 0 ? 1 : 0),
        totalElements: typeof data.totalElements === 'number' ? data.totalElements : items.length,
        number: typeof data.number === 'number' ? data.number : page,
        size: typeof data.size === 'number' ? data.size : size
      };
    }
    return { content: [], totalPages: 0, totalElements: 0, number: page, size };
  } catch (err) {
    console.error('Failed to fetch published blogs from backend:', err);
    throw err;
  }
}

/**
 * 2. Fetch top featured articles
 * GET /api/v1/public/blogs/featured
 */
export async function getFeaturedBlogs() {
  try {
    const data = await apiRequest('/featured');
    if (Array.isArray(data)) return data.map(normalizeArticle);
    if (data && Array.isArray(data.content)) return data.content.map(normalizeArticle);
    return [];
  } catch (err) {
    console.warn('Featured blogs request notice:', err.message);
    return [];
  }
}

/**
 * 3. Fetch single article by slug or ID
 * GET /api/v1/public/blogs/{slugOrId}
 */
export async function getBlogBySlug(slugOrId) {
  if (!slugOrId) throw new Error('Article slug or ID is required');
  try {
    const data = await apiRequest(`/${encodeURIComponent(slugOrId)}`);
    if (data && (data.title || data.id)) {
      return normalizeArticle(data);
    }
    throw new Error('Article not found');
  } catch (err) {
    console.error(`Failed to load article "${slugOrId}":`, err);
    throw err;
  }
}

/**
 * 4. Search articles by keyword
 * GET /api/v1/public/blogs/search?keyword={keyword}&page={page}&size={size}
 */
export async function searchBlogs(keyword, { page = 0, size = 9 } = {}) {
  if (!keyword || !keyword.trim()) {
    return getPublishedBlogs({ page, size });
  }
  const q = keyword.trim();
  try {
    const params = new URLSearchParams({
      keyword: q,
      page,
      size
    });
    const data = await apiRequest(`/search?${params.toString()}`);
    if (data && typeof data === 'object') {
      const rawItems = Array.isArray(data.content) ? data.content : (Array.isArray(data) ? data : []);
      const items = rawItems.map(normalizeArticle);
      return {
        content: items,
        totalPages: typeof data.totalPages === 'number' ? data.totalPages : (items.length > 0 ? 1 : 0),
        totalElements: typeof data.totalElements === 'number' ? data.totalElements : items.length,
        number: typeof data.number === 'number' ? data.number : page,
        size: typeof data.size === 'number' ? data.size : size
      };
    }
    return { content: [], totalPages: 0, totalElements: 0, number: page, size };
  } catch (err) {
    console.error('Search blogs error:', err);
    throw err;
  }
}

/**
 * 5. Fetch all active categories with counts
 * GET /api/v1/public/blogs/categories
 */
export async function getBlogCategories() {
  try {
    const data = await apiRequest('/categories');
    if (Array.isArray(data)) {
      return data.map((item, idx) => {
        if (typeof item === 'string') {
          return { id: item, name: item, slug: item.toLowerCase().replace(/\s+/g, '-'), postCount: null };
        }
        return {
          id: item.id || item.slug || item.name || idx,
          name: typeof item.name === 'string' ? item.name : (item.category || item.slug || 'General'),
          slug: typeof item.slug === 'string' ? item.slug : (item.name ? String(item.name).toLowerCase().replace(/\s+/g, '-') : 'general'),
          postCount: typeof item.postCount === 'number' ? item.postCount : (typeof item.count === 'number' ? item.count : null)
        };
      }).filter(c => c.name);
    }
    return [];
  } catch (err) {
    console.warn('Categories fetch notice:', err.message);
    return [];
  }
}

/**
 * 6. Fetch all tags (Normalized into Array of Strings)
 * GET /api/v1/public/blogs/tags
 */
export async function getBlogTags() {
  try {
    const data = await apiRequest('/tags');
    if (Array.isArray(data)) {
      return data.map((item, idx) => {
        if (typeof item === 'string') return item;
        if (item && typeof item === 'object') {
          return item.name || item.tag || item.slug || String(item.id || idx);
        }
        return String(item);
      }).filter(Boolean);
    }
    return [];
  } catch (err) {
    console.warn('Tags fetch notice:', err.message);
    return [];
  }
}

/**
 * 7. Get related articles
 * GET /api/v1/public/blogs/{identifier}/related?limit={limit}
 */
export async function getRelatedBlogs(identifier, limit = 3) {
  if (!identifier) return [];
  try {
    const data = await apiRequest(`/${encodeURIComponent(identifier)}/related?limit=${limit}`);
    if (Array.isArray(data)) return data.map(normalizeArticle);
    if (data && Array.isArray(data.content)) return data.content.map(normalizeArticle);
    return [];
  } catch (err) {
    console.warn('Related blogs fetch notice:', err.message);
    return [];
  }
}

/**
 * 8. Like an article (supports ID or Slug)
 * POST /api/v1/public/blogs/{id}/like
 */
export async function likeBlogPost(id) {
  if (!id) return { success: false, likesCount: null };
  try {
    const res = await http.post(`/api/v1/public/blogs/${encodeURIComponent(id)}/like`);
    const data = res.data?.data || res.data;
    const count = typeof data?.likesCount === 'number'
      ? data.likesCount
      : (typeof res.data?.likesCount === 'number' ? res.data.likesCount : null);
    return {
      success: true,
      likesCount: count,
      data
    };
  } catch (err) {
    console.error(`Like article ${id} failed:`, err);
    return { success: false, likesCount: null };
  }
}

/**
 * 9. Record article view
 * POST /api/v1/public/blogs/{id}/view
 */
export async function recordArticleView(id) {
  if (!id) return;
  try {
    await http.post(`/api/v1/public/blogs/${encodeURIComponent(id)}/view`);
  } catch (_) {
    // Non-blocking telemetry
  }
}

/**
 * 10. Fetch approved threaded comments
 * GET /api/v1/public/blogs/{id}/comments
 */
export async function getBlogComments(id) {
  if (!id) return [];
  try {
    const res = await http.get(`/api/v1/public/blogs/${encodeURIComponent(id)}/comments`);
    const data = res.data?.data !== undefined ? res.data.data : res.data;
    if (Array.isArray(data)) return normalizeComments(data);
    if (data && Array.isArray(data.content)) return normalizeComments(data.content);
  } catch (err) {
    console.warn(`Comments fetch for ${id} notice:`, err.message);
  }
  return [];
}

/**
 * 11. Post a new comment or threaded reply
 * Matches standard approach:
 * async addComment(id: number, comment: CreateBlogCommentRequest): Promise<BlogComment> {
 *   const res = await http.post(`/api/v1/public/blogs/${id}/comments`, comment);
 *   return res.data?.data;
 * }
 */
export async function addComment(id, comment) {
  if (!id) throw new Error('Blog post ID is required');
  try {
    const payload = {
      authorName: (comment.authorName || comment.name || '').trim(),
      authorEmail: comment.authorEmail ? comment.authorEmail.trim() : null,
      content: (comment.content || comment.comment || comment.text || '').trim(),
      parentId: comment.parentId ? Number(comment.parentId) || comment.parentId : null
    };

    const res = await http.post(`/api/v1/public/blogs/${encodeURIComponent(id)}/comments`, payload);
    const commentData = res.data?.data || res.data;
    return {
      id: commentData?.id || Date.now(),
      postId: commentData?.postId || Number(id),
      parentId: commentData?.parentId || payload.parentId,
      authorName: commentData?.authorName || payload.authorName,
      authorEmail: commentData?.authorEmail || payload.authorEmail,
      content: commentData?.content || payload.content,
      status: commentData?.status || 'APPROVED',
      createdAt: commentData?.createdAt || new Date().toISOString(),
      replies: Array.isArray(commentData?.replies) ? commentData.replies : []
    };
  } catch (err) {
    console.error('Add comment error:', err);
    throw err;
  }
}

// Alias for compatibility
export const postBlogComment = addComment;

// ─── Attach Global Helper for Interoperability ──────────────────────────────
if (typeof window !== 'undefined') {
  window.WebliixBlog = {
    apiBase: BLOG_API_BASE,
    http,
    addComment,
    likeArticle: likeBlogPost,
    submitComment: addComment,
    fetchComments: getBlogComments,
    getPublishedBlogs,
    getFeaturedBlogs,
    getBlogBySlug,
    searchBlogs,
    getBlogCategories,
    getBlogTags
  };
}
