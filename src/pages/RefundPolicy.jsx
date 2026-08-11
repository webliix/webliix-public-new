import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, CheckCircle2, XCircle, Clock, ShieldCheck, Mail, Phone, Printer } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';

export default function RefundPolicy() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto space-y-12">
      <Helmet>
        <title>Refund Policy | Service Guarantees & Returns | {siteConfig.brand.name}</title>
        <meta name="description" content="Understand Webliix official Refund & Cancellation Policy regarding digital web development, local SEO packages, branding assets, and project cancellations." />
      </Helmet>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <RefreshCw className="w-3.5 h-3.5" /> Effective Date: May 2, 2025 · Consumer Protection
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text">
          Refund & <span className="text-shimmer">Cancellation Policy</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg">
          We stand behind the quality of our digital engineering and web design. This document outlines our eligibility criteria, cancellation windows, and refund processing workflows.
        </p>
      </div>

      {/* Print PDF Button */}
      <div className="flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="px-4 py-2 rounded-xl glass-spatial border border-theme-primary/40 text-xs font-mono font-semibold text-theme-primary hover:bg-theme-primary hover:text-white transition flex items-center gap-2"
        >
          <Printer className="w-4 h-4" /> Save / Print PDF Copy
        </button>
      </div>

      {/* Policy Card */}
      <GlassCard className="p-8 sm:p-12 border border-theme-border space-y-10 text-theme-text leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 1. Eligibility for Refund
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Client satisfaction is fundamental to Webliix's commercial standards. You are eligible to request a full or partial refund under the following conditions:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-theme-muted space-y-2">
            <li>
              <strong className="text-theme-text">Deviations from Agreed Specifications:</strong> If the delivered web solution or branding package significantly deviates from the technical scope outlined in the signed proposal, and Webliix cannot rectify the deficiency within seven (7) business days.
            </li>
            <li>
              <strong className="text-theme-text">Early Service Cancellation:</strong> If you submit a formal written cancellation request within fourteen (14) calendar days of initial deposit payment, provided that production has not exceeded 25% of the overall project timeline.
            </li>
            <li>
              <strong className="text-theme-text">Defective Code or Technical Delivery:</strong> If a technical component fails to function according to specifications and our engineering team cannot resolve the issue during the warranty period.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-rose-400" /> 2. Non-Eligible Scenarios
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Refunds will not be issued under the following circumstances:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-theme-muted space-y-2">
            <li>
              <strong className="text-theme-text">Change of Preference:</strong> If you request cancellation due to internal business strategy shifts after design sign-off and milestone delivery.
            </li>
            <li>
              <strong className="text-theme-text">Completed Projects:</strong> Once final source code, domain administration rights, or GMB credentials have been handed over.
            </li>
            <li>
              <strong className="text-theme-text">Third-Party Disbursement Costs:</strong> Expenses incurred for third-party domain purchases, SSL certificates, server hosting, or active ad platform spend (Meta/Google Ads) are strictly non-refundable.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2 flex items-center gap-2">
            <Clock className="w-5 h-5 text-theme-primary" /> 3. Step-by-Step Refund Process & Timeline
          </h2>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-theme-muted space-y-2">
            <li>Submit a formal refund request via email to <a href={`mailto:${siteConfig.brand.contactEmail}`} className="text-theme-primary hover:underline font-mono">{siteConfig.brand.contactEmail}</a> including your invoice number and reason.</li>
            <li>Our billing and engineering leads will review your request within 3 to 5 business days.</li>
            <li>Upon approval, the refund amount will be credited to your original payment method (Bank Transfer / Credit Card / UPI) within 7 business days.</li>
          </ol>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 border-t border-theme-border/60 pt-6 text-xs text-theme-muted font-mono">
          <p className="text-theme-text font-bold">Billing & Refund Support</p>
          <p>Email: <a href={`mailto:${siteConfig.brand.contactEmail}`} className="text-theme-primary underline">{siteConfig.brand.contactEmail}</a></p>
          <p>Phone: {siteConfig.brand.contactPhone}</p>
          <p>Address: {siteConfig.brand.address}</p>
        </section>

      </GlassCard>
    </div>
  );
}
