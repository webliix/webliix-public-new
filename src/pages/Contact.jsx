import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import SpatialButton from '../components/ui/SpatialButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { useModal } from '../context/ModalContext';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: 'Webliix LaunchKit',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useModal();

  const socialLinks = [
    {
      name: 'Instagram',
      href: siteConfig.brand.socials.instagram,
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: siteConfig.brand.socials.linkedin,
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: siteConfig.brand.socials.facebook,
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: siteConfig.brand.socials.github,
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Inquiry submitted! Our team will reach out within 2 hours.', 'success');
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <Helmet>
        <title>Contact Us | {siteConfig.brand.name}</title>
        <meta name="description" content="Get in touch with Webliix to start your website, SEO, or digital marketing project. Serving clients across NCR India, USA, Canada, and Germany." />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Let's Connect
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text">
          Start Your <span className="text-shimmer">Digital Journey</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg">
          Connect with Webliix engineers to build high-converting websites, local SEO engines, or custom software platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Details & Social Channels */}
        <div className="space-y-6">
          <GlassCard className="p-8 space-y-6 border border-theme-border">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-display font-bold text-theme-text">Direct Channels</h3>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <Clock className="w-3 h-3" /> SLA &lt; 2 Hrs
              </span>
            </div>

            <div className="space-y-4 text-sm text-theme-text">
              <a
                href={`tel:${siteConfig.brand.contactPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-spatial hover:border-theme-primary transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-theme-primary/20 border border-theme-primary flex items-center justify-center text-theme-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-theme-muted block">Call Direct / WhatsApp</span>
                  <span className="font-mono font-bold text-base">{siteConfig.brand.contactPhone}</span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.brand.contactEmail}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-spatial hover:border-theme-primary transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-theme-primary/20 border border-theme-primary flex items-center justify-center text-theme-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-theme-muted block">Email Inquiry</span>
                  <span className="font-mono font-bold text-base">{siteConfig.brand.contactEmail}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-spatial">
                <div className="w-10 h-10 rounded-xl bg-theme-primary/20 border border-theme-primary flex items-center justify-center text-theme-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-theme-muted block">Headquarters</span>
                  <span className="font-semibold">{siteConfig.brand.address}</span>
                </div>
              </div>
            </div>

            {/* Social Media Handles */}
            <div className="pt-2">
              <span className="text-xs font-mono font-semibold text-theme-primary uppercase tracking-wider block mb-3">
                Official Social Channels
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl glass-spatial border border-theme-border/60 hover:border-theme-primary hover:text-theme-primary text-theme-text text-xs font-semibold flex items-center justify-center gap-2 transition group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.svg}
                    </span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* WhatsApp Direct */}
          <GlassCard className="p-6 border border-emerald-500/40 shadow-spatial space-y-3 text-center">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              Instant WhatsApp Support
            </span>
            <p className="text-xs text-theme-muted">
              Need immediate answers? Chat directly with our lead project architect on WhatsApp.
            </p>
            <a
              href={`https://wa.me/${siteConfig.brand.contactPhone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <SpatialButton variant="primary" className="w-full bg-emerald-600 hover:bg-emerald-500 shadow-none" icon={MessageSquare}>
                Chat on WhatsApp Now
              </SpatialButton>
            </a>
          </GlassCard>
        </div>

        {/* Form Component */}
        <GlassCard className="p-8 sm:p-10 border border-theme-border shadow-spatial-lg">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-theme-text">
                Inquiry Received!
              </h3>
              <p className="text-theme-muted text-sm max-w-sm mx-auto">
                Thank you for connecting. Our project lead will get back to you within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-theme-primary hover:underline pt-4 block mx-auto"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-theme-text mb-2">
                Send a Message
              </h3>

              <div>
                <label className="text-xs font-semibold text-theme-muted block mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Aryan Kashyap"
                  className="w-full px-4 py-3 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-theme-muted block mb-1">
                  Mobile Number (WhatsApp) <span className="text-rose-400">*</span>
                </label>
                <input
                  required
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 93101 81569"
                  className="w-full px-4 py-3 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-theme-muted block mb-1">
                  Email Address <span className="text-theme-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@webliix.in"
                  className="w-full px-4 py-3 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-theme-muted block mb-1">
                  Interested Solution
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary bg-theme-bg"
                >
                  {siteConfig.services.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-theme-muted block mb-1">
                  Project Details <span className="text-rose-400">*</span>
                </label>
                <textarea
                  required
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business goals and timeline..."
                  className="w-full px-4 py-3 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary"
                />
              </div>

              <SpatialButton type="submit" variant="primary" className="w-full mt-2" icon={Send}>
                Submit Inquiry Now
              </SpatialButton>
            </form>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
