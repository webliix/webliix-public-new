/**
 * Cloudinary image optimization utility for Webliix
 *
 * Implements:
 * 1. Automatic format & quality delivery (f_auto,q_auto)
 * 2. Responsive image srcset generation with width & limit crop
 * 3. Safe URL transformation without duplicating transforms or altering cloud name, paths, versions, or filenames
 * 4. Safe pass-through for non-Cloudinary assets
 */

const CLOUDINARY_UPLOAD_MARKER = '/image/upload/';

/**
 * Checks if a URL is a Cloudinary delivery URL.
 * @param {string} url
 * @returns {boolean}
 */
export function isCloudinaryUrl(url) {
  return typeof url === 'string' && url.includes('res.cloudinary.com') && url.includes(CLOUDINARY_UPLOAD_MARKER);
}

/**
 * Applies f_auto,q_auto and optional custom transforms (e.g., width limit) to a Cloudinary URL.
 * Prevents duplicate transformations and preserves original asset path, version, and filename.
 *
 * @param {string} url - Original image URL
 * @param {Object} [options]
 * @param {number} [options.width] - Optional width limit for responsive sizing
 * @param {string} [options.crop='limit'] - Crop mode (default 'limit' avoids upscaling)
 * @returns {string} - Optimized URL
 */
export function optimizeCloudinaryUrl(url, options = {}) {
  if (!isCloudinaryUrl(url)) {
    return url;
  }

  const { width, crop = 'limit' } = options;
  const markerIndex = url.indexOf(CLOUDINARY_UPLOAD_MARKER);
  const base = url.slice(0, markerIndex + CLOUDINARY_UPLOAD_MARKER.length);
  const rest = url.slice(markerIndex + CLOUDINARY_UPLOAD_MARKER.length);

  // Check if there is already an existing transformation block before the version/asset path
  // Transformation blocks typically don't start with 'v' followed by digits and contain commas or transformation keys
  const segments = rest.split('/');
  const firstSegment = segments[0];

  let existingTransforms = [];
  let pathRemainder = rest;

  const isVersionOrDirectFile = /^v\d+$/.test(firstSegment) || (!firstSegment.includes(',') && !firstSegment.includes('_') && segments.length <= 2);

  if (!isVersionOrDirectFile) {
    // firstSegment contains transformations
    existingTransforms = firstSegment.split(',').filter(Boolean);
    pathRemainder = segments.slice(1).join('/');
  }

  // Build target transformations
  const transformSet = new Set();

  // Always ensure f_auto and q_auto
  transformSet.add('f_auto');
  transformSet.add('q_auto');

  // Preserve other existing transforms unless we're overriding width/crop
  for (const t of existingTransforms) {
    if (t.startsWith('w_') && width) continue;
    if (t.startsWith('c_') && width) continue;
    if (t === 'f_auto' || t === 'q_auto') continue;
    transformSet.add(t);
  }

  // Add width transformation if specified
  if (width && width > 0) {
    transformSet.add(`w_${Math.round(width)}`);
    transformSet.add(`c_${crop}`);
  }

  const transformString = Array.from(transformSet).join(',');
  return `${base}${transformString}/${pathRemainder}`;
}

/**
 * Generates responsive srcset attribute string for Cloudinary images.
 * Returns undefined for SVGs or non-Cloudinary images.
 *
 * @param {string} url - Original image URL
 * @param {number[]} [widths=[480, 768, 1024, 1440]] - Breakpoint widths in pixels
 * @returns {string|undefined}
 */
export function getCloudinarySrcSet(url, widths = [480, 768, 1024, 1440]) {
  if (!isCloudinaryUrl(url)) return undefined;

  // Don't generate width srcset for SVGs as vector graphics scale losslessly
  if (url.toLowerCase().endsWith('.svg') || url.includes('.svg?')) {
    return undefined;
  }

  return widths
    .map(w => `${optimizeCloudinaryUrl(url, { width: w })} ${w}w`)
    .join(', ');
}
