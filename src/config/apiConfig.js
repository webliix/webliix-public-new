// ─────────────────────────────────────────────────────────────────────────────
// Webliix Public Website — Central API Configuration
// ─────────────────────────────────────────────────────────────────────────────
// Centralized API Base URL management supporting seamless switching between:
// 1. Cloud Server: https://webliix-crm-backend.onrender.com (Deployed Production)
// 2. Local Dev Server: http://localhost:8082 (Local PC Development)
// ─────────────────────────────────────────────────────────────────────────────

export const API_SERVERS = {
  CLOUD: 'https://webliix-crm-backend.onrender.com',
  LOCAL: 'http://localhost:8082',
};

/**
 * Returns the active API Base URL.
 * Order of precedence:
 * 1. Environment variable: VITE_API_BASE_URL
 * 2. Default Fallback: Cloud Backend Server (https://webliix-crm-backend.onrender.com)
 */
export function getApiBaseUrl() {
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) {
    const envUrl = import.meta.env.VITE_API_BASE_URL.trim();
    if (envUrl) {
      return envUrl.replace(/\/$/, '');
    }
  }
  return API_SERVERS.LOCAL;
}

/**
 * Resolves an API relative path (e.g. '/api/v1/public/blogs') to a full absolute URL.
 * If an absolute URL (http:// or https://) is passed, it returns it unchanged.
 * @param {string} path 
 * @returns {string} Absolute API URL
 */
export function resolveUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const baseUrl = getApiBaseUrl();
  return `${baseUrl}${cleanPath}`;
}
