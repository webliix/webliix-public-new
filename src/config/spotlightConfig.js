// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE SPOTLIGHT CONTENT CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
// Update this configuration weekly or monthly to showcase what is current,
// useful, or new at Webliix without modifying any component layout or code.
//
// Supported types:
// - "launch"     : New package or product launches (e.g. Webliix LaunchKit)
// - "insight"    : Actionable SEO, UX, or digital marketing insights
// - "case-study" : Recent client transformation or project highlight
// - "offer"      : Limited-time promotion or seasonal package
// - "update"     : Company, technical, or global service updates
// - "service"    : Featured service deep-dive (e.g. Google Ads, Meta Ads)
// ─────────────────────────────────────────────────────────────────────────────

export const currentSpotlight = {
  // Content metadata
  id: 'spotlight-sept-2026-launchkit',
  type: 'launch',
  active: true,
  startDate: '2026-09-01',
  endDate: '2026-09-30',

  // Eyebrow and timeline badge
  eyebrow: 'WEBLIIX SPOTLIGHT',
  period: 'SEPTEMBER 2026',
  badgeText: 'Turnkey Digital Foundation',

  // Main Headline and Editorial Summary (Outcome-focused)
  title: 'Launch your business with the right digital foundation.',
  description:
    'Build a professional online presence ready for customers, search and future growth with Webliix LaunchKit — crafted for businesses worldwide.',

  // Call-To-Action buttons
  primaryCtaText: 'Explore LaunchKit',
  primaryCtaUrl: '/launch-kit',
  secondaryCtaText: 'Talk to Webliix',
  secondaryCtaUrl: '/contact',

  // Visual highlights / key takeaway points for the right-hand panel
  highlights: [
    'Complete Responsive Business Website',
    'Search-Ready SEO & Analytics Foundation',
    'Direct Lead Capture & WhatsApp Integration',
    '100% Code & Asset Ownership'
  ]
};
