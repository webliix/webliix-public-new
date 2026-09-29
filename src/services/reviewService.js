import { resolveUrl } from '../config/apiConfig';

/**
 * Fetch all public approved reviews
 * @returns {Promise<Array>} Array of review objects
 */
export async function getPublicReviews() {
  const endpoint = resolveUrl('/api/v1/public/reviews');
  try {
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || json || [];
  } catch (err) {
    console.error('Failed to fetch public reviews:', err);
    return [];
  }
}

/**
 * Submit public feedback / review
 * @param {Object} reviewData 
 * @returns {Promise<Object>}
 */
export async function submitPublicReview(reviewData = {}) {
  const endpoint = resolveUrl('/api/v1/public/reviews');
  const payload = {
    authorName: reviewData.authorName || reviewData.name || '',
    companyName: reviewData.companyName || reviewData.company || '',
    email: reviewData.email || '',
    rating: reviewData.rating ? parseInt(reviewData.rating, 10) : 5,
    reviewText: reviewData.reviewText || reviewData.feedback || reviewData.message || '',
    platform: reviewData.platform || 'WEBSITE',
    platformUrl: reviewData.platformUrl || '',
    serviceUsed: reviewData.serviceUsed || reviewData.service || '',
    publishConsent: reviewData.publishConsent !== undefined ? reviewData.publishConsent : true,
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let errMsg = `Server returned HTTP ${res.status}`;
    try {
      const errJson = await res.json();
      errMsg = errJson.message || errJson.error || errMsg;
    } catch (_) {}
    throw new Error(errMsg);
  }

  const json = await res.json();
  return json.data || json;
}
