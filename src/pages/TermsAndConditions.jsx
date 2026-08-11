import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, FileCheck, Scale, AlertCircle, Printer, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';

export default function TermsAndConditions() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto space-y-12">
      <Helmet>
        <title>Terms & Conditions | Legal Service Agreement | {siteConfig.brand.name}</title>
        <meta name="description" content="Review Webliix Terms & Conditions governing digital service scope, revisions, intellectual property, payments, liability limits, and governance law." />
      </Helmet>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <Scale className="w-3.5 h-3.5" /> Effective Date: May 2, 2025 · Legal Framework
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text">
          Terms & <span className="text-shimmer">Conditions</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg">
          Please review these terms carefully before engaging Webliix for web development, branding, SEO, or software engineering contracts.
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

      {/* Main Legal Agreement Card */}
      <GlassCard className="p-8 sm:p-12 border border-theme-border space-y-10 text-theme-text leading-relaxed">
        
        {/* 1 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            1. General Terms & Acceptance
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            These Terms & Conditions ("Agreement") constitute a legally binding agreement between you ("Client") and Webliix ("Company", "we", "us"). By placing an order, accepting a project proposal, or utilizing our web engineering and SEO services, you affirm that you have read, understood, and agreed to be bound by these terms.
          </p>
        </section>

        {/* 2 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            2. Scope of Engineering & Marketing Services
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Webliix provides turnkey digital solutions, including custom web application development, Google My Business (GMB) setup, search engine optimization (SEO), branding design, and performance advertising. Specific deliverables, project milestones, and delivery timelines are explicitly specified in individual project proposals and client agreements.
          </p>
        </section>

        {/* 3 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            3. Client Revisions & Milestone Approvals
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Each project design phase includes up to two (2) complimentary rounds of revisions. Any scope expansion, structural changes after layout sign-off, or additional design iterations requested beyond the agreed rounds are subject to separate billable hourly rates as defined in the project scope.
          </p>
        </section>

        {/* 4 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            4. Third-Party Licenses, Domains & Hosting
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Unless explicitly stated as an inclusive feature in a turnkey package (such as Webliix LaunchKit), third-party assets — including custom domain registrations, premium font licenses, commercial stock photos, and third-party SaaS plugin fees — are the sole responsibility of the client.
          </p>
        </section>

        {/* 5 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            5. Communication Protocol & Unresponsive Pauses
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Timely client feedback is essential for meeting project deadlines. A delay of over seven (7) business days in client response or deliverable sign-off may result in the project being placed on administrative pause. Restarting a paused project may require a scheduling adjustment and a 10% re-activation fee.
          </p>
        </section>

        {/* 6 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            6. Payment Milestones & Invoicing
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Full payment or initial deposit milestones must be cleared prior to project commencement and asset deployment. Final source code files, domain administration rights, and GMB access transfer occur upon receipt of 100% cleared funds.
          </p>
        </section>

        {/* 7 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            7. Intellectual Property & Transfer Rights
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            All code, graphics, and custom design assets remain the property of Webliix until final payment is settled in full. Upon 100% payment clearance, full ownership rights transfer to the client. Webliix retains the non-exclusive right to display completed project screenshots in its agency portfolio and client case studies.
          </p>
        </section>

        {/* 8 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            8. Post-Launch Technical Support & Warranty
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            All web projects include thirty (30) days of complimentary post-launch technical support covering bug fixes and server connectivity monitoring. Ongoing software updates or structural content additions beyond 30 days are covered under separate website maintenance agreements.
          </p>
        </section>

        {/* 9 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            9. Limitation of Liability
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            Webliix shall not be held liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, domain registrar downtime, or search engine algorithm updates beyond our reasonable control. Total liability under any claim shall not exceed the amount paid by the client for the specific project service.
          </p>
        </section>

        {/* 10 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
            10. Governing Jurisdiction
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this agreement shall be subject to arbitration in Noida, NCR, India.
          </p>
        </section>

        {/* Contact info */}
        <div className="pt-6 border-t border-theme-border/60 text-xs text-theme-muted font-mono space-y-1">
          <p className="text-theme-text font-bold">Legal Contact Officer</p>
          <p>Email: <a href={`mailto:${siteConfig.brand.contactEmail}`} className="text-theme-primary underline">{siteConfig.brand.contactEmail}</a></p>
          <p>Address: {siteConfig.brand.address}</p>
        </div>

      </GlassCard>
    </div>
  );
}
