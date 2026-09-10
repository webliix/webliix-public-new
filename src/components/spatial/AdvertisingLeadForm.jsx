import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useModal } from '../../context/ModalContext';
import WebliixCard from '../ui/WebliixCard';
import WebliixButton from '../ui/WebliixButton';
import {
  WebliixInput,
  WebliixTextarea,
  WebliixSelect,
  WebliixFieldGroup,
  WebliixLabel,
  netlifyEncode
} from '../ui/WebliixInput';

const FORM_NAME = 'advertising-consultation';

export default function AdvertisingLeadForm({
  defaultPlatform = 'Not Sure',
  heading = 'Request a Free Advertising Consultation',
  subtext = 'Tell us about your business, target audience, and monthly budget. We will review your goals and share a clear, no-obligation campaign plan.'
}) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    platform: defaultPlatform,
    adBudget: '₹10,000–₹20,000',
    location: '',
    goal: 'Generate Leads',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useModal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: netlifyEncode({ 'form-name': FORM_NAME, ...formData })
      });
    } catch {
      // Local dev fallback
    }
    setSubmitted(true);
    setSubmitting(false);
    if (showToast) {
      showToast('Advertising consultation request received! Our campaign strategist will reach out within 2 hours.', 'success');
    }
  };

  const cleanPhone = siteConfig.brand.contactPhone.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=Hi%20Webliix,%20I'm%20interested%20in%20Paid%20Advertising%20(${encodeURIComponent(
    formData.platform || 'Google & Meta Ads'
  )})%20for%20my%20business%20${encodeURIComponent(formData.businessName || '')}.`;

  return (
    <WebliixCard
      id="ad-consultation-form"
      variant="panel"
      className="p-6 sm:p-10 border border-theme-primary/40 shadow-spatial-xl relative overflow-hidden"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/15 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-theme-primary/30">
            <Sparkles className="w-3.5 h-3.5" /> No Jargon • Zero Pressure
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-theme-text">
            {heading}
          </h3>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            {subtext}
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-display font-bold text-theme-text">
              Consultation Request Received!
            </h4>
            <p className="text-sm text-theme-muted max-w-md mx-auto">
              Thank you, <strong className="text-theme-text">{formData.name}</strong>. Our campaign strategist is reviewing your business details and will get in touch within 2 hours.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <WebliixButton variant="primary" icon={MessageSquare} size="md">
                  Chat Instantly on WhatsApp
                </WebliixButton>
              </a>
              <WebliixButton
                variant="ghost"
                size="md"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    businessName: '',
                    email: '',
                    phone: '',
                    website: '',
                    platform: defaultPlatform,
                    adBudget: '₹10,000–₹20,000',
                    location: '',
                    goal: 'Generate Leads',
                    message: ''
                  });
                }}
              >
                Submit Another Request
              </WebliixButton>
            </div>
          </div>
        ) : (
          <form
            name={FORM_NAME}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Netlify hidden bot field */}
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            {/* Grid 1: Name & Business Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <WebliixFieldGroup>
                <WebliixLabel htmlFor="ad-name" required>Your Name</WebliixLabel>
                <WebliixInput
                  id="ad-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={handleChange}
                />
              </WebliixFieldGroup>

              <WebliixFieldGroup>
                <WebliixLabel htmlFor="ad-businessName" required>Business Name</WebliixLabel>
                <WebliixInput
                  id="ad-businessName"
                  name="businessName"
                  type="text"
                  required
                  placeholder="e.g. Apex Health Clinic"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </WebliixFieldGroup>
            </div>

            {/* Grid 2: Email & Phone/WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <WebliixFieldGroup>
                <WebliixLabel htmlFor="ad-email" required>Business Email</WebliixLabel>
                <WebliixInput
                  id="ad-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@yourcompany.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </WebliixFieldGroup>

              <WebliixFieldGroup>
                <WebliixLabel htmlFor="ad-phone" required>Phone / WhatsApp</WebliixLabel>
                <WebliixInput
                  id="ad-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </WebliixFieldGroup>
            </div>

            {/* Grid 3: Website & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <WebliixFieldGroup>
                <WebliixLabel htmlFor="ad-website" optional>Website / Landing Page URL</WebliixLabel>
                <WebliixInput
                  id="ad-website"
                  name="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </WebliixFieldGroup>

              <WebliixFieldGroup>
                <WebliixLabel htmlFor="ad-location" required>Target Location / Cities</WebliixLabel>
                <WebliixInput
                  id="ad-location"
                  name="location"
                  type="text"
                  required
                  placeholder="e.g. Delhi NCR, Bangalore, Pan-India"
                  value={formData.location}
                  onChange={handleChange}
                />
              </WebliixFieldGroup>
            </div>

            {/* Grid 4: Platform & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <WebliixFieldGroup>
                <WebliixLabel htmlFor="ad-platform" required>Advertising Platform</WebliixLabel>
                <WebliixSelect
                  id="ad-platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                >
                  <option value="Google Ads">Google Ads (Search & Maps)</option>
                  <option value="Meta Ads">Meta Ads (Facebook & Instagram)</option>
                  <option value="Both">Both (Google + Meta Ads)</option>
                  <option value="Not Sure">Not Sure (Need Guidance)</option>
                </WebliixSelect>
              </WebliixFieldGroup>

              <WebliixFieldGroup>
                <WebliixLabel htmlFor="ad-budget" required>Approx. Monthly Ad Budget</WebliixLabel>
                <WebliixSelect
                  id="ad-budget"
                  name="adBudget"
                  value={formData.adBudget}
                  onChange={handleChange}
                >
                  <option value="Under ₹10,000">Under ₹10,000 / month</option>
                  <option value="₹10,000–₹20,000">₹10,000–₹20,000 / month (Recommended Starter)</option>
                  <option value="₹20,000–₹50,000">₹20,000–₹50,000 / month (Growth)</option>
                  <option value="₹50,000+">₹50,000+ / month (Scaling)</option>
                  <option value="Not Sure">Not Sure (Advise Me)</option>
                </WebliixSelect>
              </WebliixFieldGroup>
            </div>

            {/* Goal Select */}
            <WebliixFieldGroup>
              <WebliixLabel htmlFor="ad-goal" required>Primary Campaign Goal</WebliixLabel>
              <WebliixSelect
                id="ad-goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
              >
                <option value="Generate Leads">Generate Qualified Inquiries / Leads</option>
                <option value="Get Calls">Get Direct Phone Calls</option>
                <option value="Get WhatsApp Enquiries">Get WhatsApp Messages & Chat Inquiries</option>
                <option value="Sell Products">Sell Products / E-Commerce Sales</option>
                <option value="Increase Website Traffic">Increase Targeted Website Traffic</option>
                <option value="Promote an Offer">Promote a Limited-Time Event / Offer</option>
                <option value="Not Sure">Not Sure (Need Recommendations)</option>
              </WebliixSelect>
            </WebliixFieldGroup>

            {/* Message */}
            <WebliixFieldGroup>
              <WebliixLabel htmlFor="ad-message" optional>
                Tell us about your business & goals
              </WebliixLabel>
              <WebliixTextarea
                id="ad-message"
                name="message"
                rows={3}
                placeholder="What products or services do you offer? Who are your ideal customers? What have you tried before?"
                value={formData.message}
                onChange={handleChange}
              />
            </WebliixFieldGroup>

            {/* Privacy & Account Security Assurance */}
            <div className="flex items-start gap-2 p-3 theme-rounded-card bg-theme-primary/5 border border-theme-border/60 text-[11px] text-theme-muted">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>100% Account Privacy:</strong> Webliix never asks for your personal passwords. Your ad accounts and ad spend stay 100% under your ownership.
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <WebliixButton
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={submitting}
                icon={Send}
              >
                {submitting ? 'Submitting Request...' : 'Request an Advertising Consultation'}
              </WebliixButton>
            </div>
          </form>
        )}
      </div>
    </WebliixCard>
  );
}
