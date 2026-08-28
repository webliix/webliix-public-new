import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, MessageSquare, Sparkles, CheckCircle2, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixIcon from '../components/ui/WebliixIcon';
import {
  WebliixInput,
  WebliixTextarea,
  WebliixSelect,
  WebliixCheckbox,
  WebliixFieldGroup,
  WebliixFormCard,
  netlifyEncode,
} from '../components/ui/WebliixInput';

const FORM_NAME = 'client-feedback';

const SERVICE_OPTIONS = [
  { value: '',                     label: 'Select the service you used…' },
  { value: 'Webliix LaunchKit',    label: 'Webliix LaunchKit' },
  { value: 'Website Development',  label: 'Website Development' },
  { value: 'E-Commerce / Shopify', label: 'E-Commerce / Shopify' },
  { value: 'Google Business Profile', label: 'Google Business Profile (GMB)' },
  { value: 'Local SEO',            label: 'Local SEO' },
  { value: 'Web Application',      label: 'Web Application' },
  { value: 'Custom Software',      label: 'Custom Software' },
  { value: 'Website Redesign',     label: 'Website Redesign' },
  { value: 'Other',                label: 'Other / Multiple Services' },
];

const STAR_LABELS = ['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'];

// ─── Star Rating Component ───────────────────────────────────────────────────
function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
            className="p-1 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-theme-primary/40"
          >
            <Star
              className={[
                'w-8 h-8 transition-all duration-150',
                star <= active
                  ? 'fill-theme-primary text-theme-primary scale-110'
                  : 'fill-transparent text-theme-border',
              ].join(' ')}
            />
          </button>
        ))}
        {active > 0 && (
          <span className="ml-2 text-sm font-semibold text-theme-primary font-mono">
            {STAR_LABELS[active]}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Feedback() {
  const [form, setForm] = useState({
    name:        '',
    company:     '',
    email:       '',
    service:     '',
    rating:      0,
    feedback:    '',
    publishConsent: false,
  });
  const [step, setStep]         = useState('form'); // 'form' | 'success'
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors]     = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleRating = (val) => {
    setForm((p) => ({ ...p, rating: val }));
    if (errors.rating) setErrors((p) => ({ ...p, rating: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name     = 'Please enter your name.';
    if (!form.service)        e.service  = 'Please select the service you received.';
    if (!form.rating)         e.rating   = 'Please select a star rating.';
    if (!form.feedback.trim()) e.feedback = 'Please share your feedback (min 20 chars).';
    else if (form.feedback.trim().length < 20)
                              e.feedback = 'Please share a bit more detail (min 20 characters).';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    try {
      await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    netlifyEncode({
          'form-name':      FORM_NAME,
          name:             form.name,
          company:          form.company,
          email:            form.email,
          service:          form.service,
          rating:           String(form.rating),
          feedback:         form.feedback,
          publishConsent:   String(form.publishConsent),
        }),
      });
    } catch { /* local dev — ignore */ }
    setStep('success');
    setSubmitting(false);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-2xl mx-auto">
      <Helmet>
        <title>Share Feedback | {siteConfig.brand.name}</title>
        <meta
          name="description"
          content="Share your experience with Webliix. Your feedback helps us improve and helps other businesses find the right digital partner."
        />
      </Helmet>

      <Breadcrumbs />

      {step === 'success' ? (
        /* ── Success State ─────────────────────────────────────────────── */
        <div className="flex flex-col items-center text-center py-16 space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-6 h-6 ${s <= form.rating ? 'fill-theme-primary text-theme-primary' : 'fill-transparent text-theme-border'}`}
                />
              ))}
            </div>
            <h1 className="text-3xl font-display font-extrabold text-theme-text">
              Thank You, {form.name}!
            </h1>
            <p className="text-theme-muted text-base max-w-sm mx-auto">
              Your feedback has been received. It means the world to us and helps us
              serve our clients better.
            </p>
            {form.publishConsent && (
              <p className="text-xs text-theme-primary font-mono border border-theme-primary/30 rounded-xl px-4 py-2 inline-block bg-theme-primary/10">
                ✓ We may feature your testimonial on our website
              </p>
            )}
          </div>
          <WebliixButton variant="ghost" onClick={() => { setForm({ name: '', company: '', email: '', service: '', rating: 0, feedback: '', publishConsent: false }); setStep('form'); }}>
            Submit another response
          </WebliixButton>
        </div>
      ) : (
        /* ── Form State ─────────────────────────────────────────────────── */
        <>
          {/* Page Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" /> We Value Your Opinion
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-theme-text">
              Share Your{' '}
              <span className="text-shimmer">Experience</span>
            </h1>
            <p className="text-theme-muted text-base">
              Worked with Webliix? We'd love to hear how it went. Your honest
              feedback helps us grow and helps others choose the right digital partner.
            </p>
          </div>

          {/* Netlify detection form (hidden) */}
          <form name={FORM_NAME} data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text"   name="name"           />
            <input type="text"   name="company"        />
            <input type="email"  name="email"          />
            <input type="text"   name="service"        />
            <input type="number" name="rating"         />
            <textarea            name="feedback"       />
            <input type="checkbox" name="publishConsent" />
          </form>

          <WebliixFormCard
            badge="Client Feedback"
            headerIcon={Sparkles}
            title="Rate your Webliix experience"
            subtitle="Takes less than 2 minutes. All fields except name, service, rating, and feedback are optional."
            variant="spatial"
          >
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="rating" value={form.rating} />

              {/* Star Rating */}
              <div className="space-y-1.5">
                <span className="block text-[11px] font-semibold text-theme-muted uppercase tracking-wider">
                  Overall Rating <span className="text-rose-400">*</span>
                </span>
                <StarRating value={form.rating} onChange={handleRating} />
                {errors.rating && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1">
                    <WebliixIcon icon="error" size="xs" color="error" />
                    {errors.rating}
                  </p>
                )}
              </div>

              {/* Service */}
              <WebliixFieldGroup
                label="Service Received"
                htmlFor="fb-service"
                required
                error={errors.service}
              >
                <WebliixSelect
                  id="fb-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  options={SERVICE_OPTIONS}
                />
              </WebliixFieldGroup>

              {/* Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <WebliixFieldGroup
                  label="Your Name"
                  htmlFor="fb-name"
                  required
                  error={errors.name}
                >
                  <WebliixInput
                    id="fb-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Gupta"
                    autoComplete="name"
                  />
                </WebliixFieldGroup>

                <WebliixFieldGroup
                  label="Company / Business"
                  htmlFor="fb-company"
                  optional
                >
                  <WebliixInput
                    id="fb-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="e.g. Green Leaf Exports"
                  />
                </WebliixFieldGroup>
              </div>

              {/* Email */}
              <WebliixFieldGroup
                label="Email Address"
                htmlFor="fb-email"
                optional
                hint="Only used if we need to follow up. Never shared publicly."
              >
                <WebliixInput
                  id="fb-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </WebliixFieldGroup>

              {/* Feedback */}
              <WebliixFieldGroup
                label="Your Feedback"
                htmlFor="fb-feedback"
                required
                error={errors.feedback}
                hint="Share what you liked, what surprised you, or what we can improve."
              >
                <WebliixTextarea
                  id="fb-feedback"
                  name="feedback"
                  value={form.feedback}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your experience working with Webliix…"
                />
              </WebliixFieldGroup>

              {/* Testimonial Consent */}
              <WebliixCard variant="panel" className="p-4">
                <WebliixCheckbox
                  id="fb-consent"
                  name="publishConsent"
                  checked={form.publishConsent}
                  onChange={handleChange}
                  label="I consent to Webliix publishing my feedback (name, company, rating, and message) as a testimonial on their website and marketing materials. I understand my email address will never be published."
                />
              </WebliixCard>

              <WebliixButton
                type="submit"
                variant="primary"
                fullWidth
                loading={submitting}
                icon={Send}
              >
                Submit Feedback
              </WebliixButton>
            </form>
          </WebliixFormCard>

          {/* Trust signals */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🔒', title: 'Private & Secure', desc: 'Your email is never published' },
              { icon: '⭐', title: 'Helps Others', desc: 'Honest reviews guide future clients' },
              { icon: '📈', title: 'Drives Improvement', desc: 'Every response shapes our work' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-2xl glass-spatial border border-theme-border/60 text-center space-y-1"
              >
                <div className="text-2xl">{item.icon}</div>
                <p className="text-sm font-semibold text-theme-text">{item.title}</p>
                <p className="text-xs text-theme-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
