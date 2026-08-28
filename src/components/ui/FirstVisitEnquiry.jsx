import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, ChevronRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useTheme } from '../../context/ThemeContext';
import WebliixButton from './WebliixButton';

/* ─── constants ──────────────────────────────────────────────── */
const STORAGE_KEY   = 'webliix_enquiry_shown';
const SHOW_DELAY_MS = 2400;

const SERVICES = [
  'Webliix LaunchKit (All-in-One)',
  'Website Development',
  'E-Commerce Store',
  'Shopify Development / Setup',
  'Google Business Profile / GMB',
  'Local SEO',
  'Web Application',
  'Custom Software',
  'Website Redesign',
  'Website Maintenance',
  'Other / Not Listed',
];

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

/* ─── WhatsApp icon (inline to avoid extra import) ───────────── */
const WaIcon = () => (
  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891
    11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48
    8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057
    24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434
    9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889
    9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648
    3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941
    1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198
    0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213
    3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226
    1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

/* ─── component ─────────────────────────────────────────────── */
export default function FirstVisitEnquiry() {
  const { currentTheme } = useTheme();
  const [visible,    setVisible]    = useState(false);
  const [step,       setStep]       = useState(1);   // 1=form  2=success
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const scrollRef = useRef(null);

  const logoSrc = currentTheme.isDark === false
    ? siteConfig.brand.logoLight
    : siteConfig.brand.logoDark;

  /* show once */
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  /* lock body scroll while open */
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service) return;
    setSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'first-visit-enquiry', ...form }),
      });
    } catch {/* local dev — ignore */}
    setStep(2);
    localStorage.setItem(STORAGE_KEY, '1');
    setSubmitting(false);
    /* scroll inner container back to top for success view */
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  /* shared input/label styles */
  const input = [
    'w-full px-3.5 py-2.5 rounded-xl',
    'glass-spatial border border-theme-border',
    'text-theme-text text-sm',
    'focus:outline-none focus:border-theme-primary',
    'bg-transparent placeholder:text-theme-muted/40',
    'transition-colors duration-150',
  ].join(' ');

  const label = 'block text-[10px] sm:text-[11px] font-semibold text-theme-muted uppercase tracking-wider mb-1.5';

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── Backdrop ─────────────────────────────── */}
          <motion.div
            key="fve-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[9998] bg-black/65 backdrop-blur-[6px]"
            onClick={dismiss}
          />

          {/* ── Outer positioner ─────────────────────── */}
          {/*
              Mobile  → slides up from bottom, full-width, max-h 92dvh
              Desktop → springs in from center, max-w-lg, centered
          */}
          <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center pointer-events-none">
            <motion.div
              key="fve-panel"
              /* mobile: slide-up; desktop: scale+fade */
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{    opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className={[
                /* size */
                'relative w-full sm:max-w-lg pointer-events-auto',
                /* shape — square bottom on mobile (sheet), fully rounded on sm+ */
                'rounded-t-3xl sm:rounded-3xl',
                /* glass card */
                'glass-spatial border border-theme-primary/35',
                'shadow-[0_-8px_60px_rgba(0,0,0,0.5)] sm:shadow-[0_24px_80px_rgba(0,0,0,0.55)]',
                /* height control */
                'max-h-[92dvh] sm:max-h-[88vh]',
                /* gpu */
                'will-change-transform',
              ].join(' ')}
              style={{ transform: 'translateZ(0)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* gradient accent bar */}
              <div className="h-[3px] w-full rounded-t-3xl sm:rounded-t-3xl bg-gradient-to-r from-theme-primary via-violet-500 to-theme-primary" />

              {/* mobile drag handle pill */}
              <div className="flex sm:hidden justify-center pt-2.5 pb-0">
                <div className="w-10 h-1 rounded-full bg-theme-border/60" />
              </div>

              {/* close ✕ */}
              <button
                onClick={dismiss}
                aria-label="Close enquiry"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10
                           w-8 h-8 rounded-full
                           glass-spatial border border-theme-border
                           flex items-center justify-center
                           text-theme-muted hover:text-theme-text hover:border-theme-primary
                           transition-all duration-150"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* ── scrollable content ─────────────────── */}
              <div
                ref={scrollRef}
                className="overflow-y-auto overscroll-contain
                           px-5 pt-3 pb-6
                           sm:px-8 sm:pt-5 sm:pb-8
                           max-h-[calc(92dvh-12px)] sm:max-h-[calc(88vh-12px)]"
              >
                <AnimatePresence mode="wait" initial={false}>

                  {/* ══════════ STEP 1 — ENQUIRY FORM ══════════ */}
                  {step === 1 && (
                    <motion.div
                      key="fve-form"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x:   0  }}
                      exit={{   opacity: 0, x:  12  }}
                      transition={{ duration: 0.22 }}
                    >
                      {/* ── Header ──────────────────────────── */}
                      <div className="flex flex-col items-center text-center gap-2.5 mb-5">
                        <img
                          src={logoSrc}
                          alt={siteConfig.brand.name}
                          className="h-9 sm:h-11 w-auto object-contain"
                          draggable={false}
                        />
                        <div className="space-y-1.5">
                          <span className="inline-flex items-center gap-1.5
                                           px-3 py-1 rounded-full
                                           bg-theme-primary/15 border border-theme-primary/30
                                           text-theme-primary text-[10px] sm:text-[11px]
                                           font-mono font-bold uppercase tracking-widest">
                            <Sparkles className="w-3 h-3 shrink-0" />
                            Free Consultation — No Obligation
                          </span>
                          <h2 className="text-[1.3rem] sm:text-2xl font-display font-extrabold
                                         text-theme-text leading-snug">
                            Let's Build Something{' '}
                            <span className="text-shimmer">Remarkable</span>
                          </h2>
                          <p className="text-xs text-theme-muted leading-relaxed max-w-[18rem] mx-auto">
                            Drop your details — our team responds in{' '}
                            <strong className="text-theme-text">under 2 hours</strong>.
                          </p>
                        </div>
                      </div>

                      {/* ── Form ────────────────────────────── */}
                      <form
                        name="first-visit-enquiry"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        className="space-y-3.5"
                      >
                        <input type="hidden" name="form-name" value="first-visit-enquiry" />
                        <input type="hidden" name="bot-field" />

                        {/* Name + Phone — side by side on sm+ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className={label}>
                              Full Name <span className="text-rose-400">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="e.g. Aryan Sharma"
                              autoComplete="name"
                              className={input}
                            />
                          </div>
                          <div>
                            <label className={label}>
                              WhatsApp / Mobile <span className="text-rose-400">*</span>
                            </label>
                            <input
                              required
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              autoComplete="tel"
                              className={input}
                            />
                          </div>
                        </div>

                        {/* Service */}
                        <div>
                          <label className={label}>
                            I Need Help With <span className="text-rose-400">*</span>
                          </label>
                          <select
                            required
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={`${input} bg-theme-bg`}
                          >
                            <option value="" disabled>Choose a service…</option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        {/* Message — compact textarea */}
                        <div>
                          <label className={label}>
                            Brief Description{' '}
                            <span className="normal-case font-normal text-theme-muted/55">
                              (optional)
                            </span>
                          </label>
                          <textarea
                            rows={2}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="e.g. I need an e-commerce site for my clothing brand…"
                            className={`${input} resize-none`}
                          />
                        </div>

                        {/* Submit CTA */}
                        <WebliixButton
                          type="submit"
                          variant="primary"
                          fullWidth
                          disabled={submitting}
                          className="mt-1"
                          iconLeft={submitting ? undefined : Send}
                          icon={submitting ? undefined : ChevronRight}
                        >
                          {submitting ? (
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10"
                                  stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8z" />
                              </svg>
                              Sending enquiry…
                            </span>
                          ) : 'Get My Free Consultation'}
                        </WebliixButton>
                      </form>

                      {/* ── Footer strip ────────────────────── */}
                      <div className="mt-4 pt-4 border-t border-theme-border/40
                                      flex flex-col sm:flex-row items-center justify-between
                                      gap-2 text-[11px] text-theme-muted">
                        <a
                          href={`tel:${siteConfig.brand.contactPhone.replace(/\s/g, '')}`}
                          className="flex items-center gap-1.5 hover:text-theme-primary transition-colors"
                        >
                          <Phone className="w-3 h-3 shrink-0" />
                          {siteConfig.brand.contactPhone}
                        </a>
                        <button
                          onClick={dismiss}
                          className="hover:text-theme-primary transition-colors
                                     underline underline-offset-2 decoration-dotted"
                        >
                          Skip — I'll explore on my own
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* ══════════ STEP 2 — SUCCESS ══════════ */}
                  {step === 2 && (
                    <motion.div
                      key="fve-success"
                      initial={{ opacity: 0, scale: 0.9  }}
                      animate={{ opacity: 1, scale: 1    }}
                      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                      className="flex flex-col items-center text-center py-6 sm:py-8 gap-4 sm:gap-5"
                    >
                      {/* logo */}
                      <img
                        src={logoSrc}
                        alt={siteConfig.brand.name}
                        className="h-9 sm:h-11 w-auto object-contain"
                        draggable={false}
                      />

                      {/* animated checkmark */}
                      <div className="relative mt-1">
                        <div className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-full
                                        bg-emerald-500/15 border border-emerald-500/40
                                        flex items-center justify-center">
                          <motion.svg
                            viewBox="0 0 44 44"
                            className="w-9 h-9 sm:w-11 sm:h-11 text-emerald-400"
                          >
                            <motion.circle
                              cx="22" cy="22" r="19"
                              fill="none" stroke="currentColor" strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.55, ease: 'easeOut' }}
                            />
                            <motion.path
                              d="M13 22l7 7 11-14"
                              fill="none" stroke="currentColor" strokeWidth="2.8"
                              strokeLinecap="round" strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.38, delay: 0.55 }}
                            />
                          </motion.svg>
                        </div>
                        {/* pulse ring */}
                        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full
                                         bg-emerald-500 border-2 border-theme-bg
                                         animate-ping opacity-70" />
                      </div>

                      {/* text */}
                      <div className="space-y-2">
                        <h2 className="text-xl sm:text-2xl font-display font-extrabold text-theme-text">
                          Enquiry Received! 🎉
                        </h2>
                        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed max-w-[16rem] sm:max-w-xs mx-auto">
                          Thank you,{' '}
                          <strong className="text-theme-text">{form.name || 'there'}</strong>!
                          We'll contact you on{' '}
                          <strong className="text-theme-text">{form.phone}</strong>{' '}
                          within 2 hours.
                        </p>
                      </div>

                      {/* quick-contact buttons — stack on mobile */}
                      <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                        <a
                          href={`https://wa.me/${siteConfig.brand.contactPhone.replace(/\D/g, '')}?text=Hi%20Webliix!%20I%20just%20submitted%20an%20enquiry.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2
                                     px-5 py-2.5 rounded-xl
                                     bg-emerald-600/20 border border-emerald-500/40
                                     text-emerald-400 text-xs font-semibold
                                     hover:bg-emerald-600/30 transition-colors"
                        >
                          <WaIcon /> Chat on WhatsApp
                        </a>
                        <a
                          href={`mailto:${siteConfig.brand.contactEmail}`}
                          className="flex items-center justify-center gap-2
                                     px-5 py-2.5 rounded-xl
                                     glass-spatial border border-theme-border
                                     text-theme-muted text-xs font-semibold
                                     hover:text-theme-primary hover:border-theme-primary
                                     transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                          Send Email
                        </a>
                      </div>

                      <button
                        onClick={dismiss}
                        className="text-[11px] font-mono text-theme-muted
                                   hover:text-theme-primary transition-colors
                                   underline underline-offset-2 decoration-dotted"
                      >
                        Continue browsing the site
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
