import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Sparkles, CheckCircle2, Bell } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import {
  WebliixInput,
  WebliixSelect,
  WebliixCheckbox,
  WebliixFieldGroup,
  WebliixFormCard,
  netlifyEncode,
} from '../components/ui/WebliixInput';

const FORM_NAME = 'newsletter-subscribe';

const INTEREST_OPTIONS = [
  { value: '', label: 'Choose your interest…' },
  { value: 'web-development',   label: 'Web Development & Design' },
  { value: 'seo-gmb',           label: 'SEO & Google Business Profile' },
  { value: 'launch-kit',        label: 'Webliix LaunchKit Packages' },
  { value: 'ecommerce',         label: 'E-Commerce & Shopify' },
  { value: 'software',          label: 'Custom Software & Web Apps' },
  { value: 'general',           label: 'General Business Growth Tips' },
];

export default function Subscribe() {
  const [form, setForm]         = useState({ name: '', email: '', interest: '', agree: false });
  const [step, setStep]         = useState('form'); // 'form' | 'success'
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors]     = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name     = 'Please enter your name.';
    if (!form.email.trim())    e.email    = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                               e.email    = 'Please enter a valid email address.';
    if (!form.interest)        e.interest = 'Please select an interest.';
    if (!form.agree)           e.agree    = 'Please consent to receive emails.';
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
        body:    netlifyEncode({ 'form-name': FORM_NAME, ...form }),
      });
    } catch { /* local dev — ignore */ }
    setStep('success');
    setSubmitting(false);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-2xl mx-auto">
      <Helmet>
        <title>Subscribe to Updates | {siteConfig.brand.name}</title>
        <meta
          name="description"
          content="Subscribe to the Webliix newsletter for web development tips, SEO insights, LaunchKit updates, and digital growth strategies."
        />
      </Helmet>

      <Breadcrumbs />

      {step === 'success' ? (
        /* ── Success State ─────────────────────────────────────────────── */
        <div className="flex flex-col items-center text-center py-16 space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-display font-extrabold text-theme-text">
              You're Subscribed!
            </h1>
            <p className="text-theme-muted text-base max-w-sm mx-auto">
              Welcome to the Webliix community,{' '}
              <strong className="text-theme-text">{form.name}</strong>!
              We'll send updates directly to{' '}
              <strong className="text-theme-primary">{form.email}</strong>.
            </p>
          </div>
          <WebliixButton
            variant="ghost"
            onClick={() => { setForm({ name: '', email: '', interest: '', agree: false }); setStep('form'); }}
          >
            Subscribe another email
          </WebliixButton>
        </div>
      ) : (
        /* ── Form State ─────────────────────────────────────────────────── */
        <>
          {/* Page Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5" /> Stay in the Loop
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-theme-text">
              Subscribe to{' '}
              <span className="text-shimmer">Webliix Updates</span>
            </h1>
            <p className="text-theme-muted text-base">
              Get expert tips on web development, SEO, Google Business Profile,
              and digital growth — delivered to your inbox.
            </p>
          </div>

          {/* Netlify hidden form for detection */}
          <form name={FORM_NAME} data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text"   name="name"     />
            <input type="email"  name="email"    />
            <input type="text"   name="interest" />
            <input type="checkbox" name="agree"  />
          </form>

          <WebliixFormCard
            badge="Free Newsletter"
            headerIcon={Sparkles}
            title="Join 500+ business owners"
            subtitle="No spam, ever. Unsubscribe at any time with a single click."
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

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <WebliixFieldGroup
                  label="Your Name"
                  htmlFor="sub-name"
                  required
                  error={errors.name}
                >
                  <WebliixInput
                    id="sub-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Aryan Sharma"
                    autoComplete="name"
                  />
                </WebliixFieldGroup>

                <WebliixFieldGroup
                  label="Email Address"
                  htmlFor="sub-email"
                  required
                  error={errors.email}
                >
                  <WebliixInput
                    id="sub-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    icon={Mail}
                  />
                </WebliixFieldGroup>
              </div>

              {/* Interest */}
              <WebliixFieldGroup
                label="I'm most interested in"
                htmlFor="sub-interest"
                required
                error={errors.interest}
                hint="We'll tailor content relevant to your interest."
              >
                <WebliixSelect
                  id="sub-interest"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  options={INTEREST_OPTIONS}
                />
              </WebliixFieldGroup>

              {/* Consent checkbox */}
              <div>
                <WebliixCheckbox
                  id="sub-agree"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  label="I agree to receive email newsletters from Webliix. I understand I can unsubscribe at any time."
                />
                {errors.agree && (
                  <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                    <WebliixIcon icon="error" size="xs" color="error" />
                    {errors.agree}
                  </p>
                )}
              </div>

              <WebliixButton
                type="submit"
                variant="primary"
                fullWidth
                loading={submitting}
                icon={Bell}
              >
                Subscribe Now — It's Free
              </WebliixButton>

              <p className="text-[11px] text-center text-theme-muted/60">
                By subscribing you agree to our{' '}
                <a href="/privacy-policy" className="text-theme-primary hover:underline">
                  Privacy Policy
                </a>
                . No spam. Unsubscribe anytime.
              </p>
            </form>
          </WebliixFormCard>

          {/* Value props */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '💡', title: 'Expert Tips', desc: 'Actionable web & SEO strategies' },
              { icon: '🚀', title: 'LaunchKit News', desc: 'New packages and exclusive deals' },
              { icon: '📊', title: 'Growth Insights', desc: 'Digital trends for Indian businesses' },
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
