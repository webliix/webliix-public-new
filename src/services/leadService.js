// ─────────────────────────────────────────────────────────────────────────────
// Webliix Public Lead Submission API Service
// ─────────────────────────────────────────────────────────────────────────────
// Unified zero-auth public REST service connecting public website forms
// to Spring Boot backend: /api/v1/public/leads
// ─────────────────────────────────────────────────────────────────────────────

import { resolveUrl } from '../config/apiConfig';

/**
 * Extract UTM parameters and attribution data from URL and browser context
 */
export function getAttributionData() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  return {
    source: 'WEBSITE',
    page: window.location.pathname || '/',
    referrer: document.referrer || '',
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmTerm: params.get('utm_term') || '',
    utmContent: params.get('utm_content') || '',
  };
}

/**
 * Submit a public lead inquiry to Spring Boot backend
 * @param {Object} payload Lead form data
 * @returns {Promise<Object>} API response object
 */
export async function submitPublicLead(payload = {}) {
  const attribution = getAttributionData();

  const requestBody = {
    name: payload.name || payload.contactPerson || payload.fullName || '',
    email: payload.email || '',
    phone: payload.phone || payload.contactPhone || '',
    companyName: payload.companyName || payload.company || payload.businessName || '',
    serviceRequested: payload.serviceRequested || payload.service || payload.package || 'General Inquiry',
    requirements: payload.requirements || payload.inquiry || payload.message || payload.feedback || '',
    estimatedBudget: payload.estimatedBudget || payload.budget || payload.price || null,
    honeypot: payload.honeypot || payload.botField || '',
    source: payload.source || attribution.source,
    page: payload.page || attribution.page,
    referrer: payload.referrer || attribution.referrer,
    utmSource: payload.utmSource || attribution.utmSource,
    utmMedium: payload.utmMedium || attribution.utmMedium,
    utmCampaign: payload.utmCampaign || attribution.utmCampaign,
    utmTerm: payload.utmTerm || attribution.utmTerm,
    utmContent: payload.utmContent || attribution.utmContent,
  };

  const endpoint = resolveUrl('/api/v1/public/leads');

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(requestBody),
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
