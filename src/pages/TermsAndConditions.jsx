import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';
import { siteConfig } from '../config/siteConfig';

const tocItems = [
  { id: 'sec-1', title: '1. General Terms & Acceptance' },
  { id: 'sec-2', title: '2. Scope of Services' },
  { id: 'sec-3', title: '3. Revisions & Approvals' },
  { id: 'sec-4', title: '4. Third-Party Licenses & Hosting' },
  { id: 'sec-5', title: '5. Communication Protocol' },
  { id: 'sec-6', title: '6. Payment & Invoicing' },
  { id: 'sec-7', title: '7. Intellectual Property' },
  { id: 'sec-8', title: '8. Support & Warranty' },
  { id: 'sec-9', title: '9. Limitation of Liability' },
  { id: 'sec-10', title: '10. Governing Jurisdiction' }
];

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Please review these terms carefully before engaging Webliix for web development, branding, SEO, or software engineering contracts."
      categoryTag="Legal Framework"
      lastUpdated="May 2, 2026"
      seoTitle="Terms & Conditions | Legal Service Agreement | WEBLIIX"
      seoDescription="Review Webliix Terms & Conditions governing digital service scope, revisions, intellectual property, payments, liability limits, and governance law."
      canonicalPath="/terms-and-conditions"
      tableOfContents={tocItems}
    >
      {/* 1 */}
      <section id="sec-1" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          1. General Terms & Acceptance
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          These Terms & Conditions ("Agreement") constitute a legally binding agreement between you ("Client") and Webliix ("Company", "we", "us"). By placing an order, accepting a project proposal, or utilizing our web engineering and SEO services, you affirm that you have read, understood, and agreed to be bound by these terms.
        </p>
      </section>

      {/* 2 */}
      <section id="sec-2" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          2. Scope of Engineering & Marketing Services
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Webliix provides turnkey digital solutions, including custom web application development, Google My Business (GMB) setup, search engine optimization (SEO), branding design, and performance advertising. Specific deliverables, project milestones, and delivery timelines are explicitly specified in individual project proposals and client agreements.
        </p>
      </section>

      {/* 3 */}
      <section id="sec-3" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          3. Client Revisions & Milestone Approvals
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Each project design phase includes up to two (2) complimentary rounds of revisions. Any scope expansion, structural changes after layout sign-off, or additional design iterations requested beyond the agreed rounds are subject to separate billable hourly rates as defined in the project scope.
        </p>
      </section>

      {/* 4 */}
      <section id="sec-4" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          4. Third-Party Licenses, Domains & Hosting
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Unless explicitly stated as an inclusive feature in a turnkey package (such as Webliix LaunchKit), third-party assets — including custom domain registrations, premium font licenses, commercial stock photos, and third-party SaaS plugin fees — are the sole responsibility of the client.
        </p>
      </section>

      {/* 5 */}
      <section id="sec-5" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          5. Communication Protocol & Unresponsive Pauses
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Timely client feedback is essential for meeting project deadlines. A delay of over seven (7) business days in client response or deliverable sign-off may result in the project being placed on administrative pause. Restarting a paused project may require a scheduling adjustment and a 10% re-activation fee.
        </p>
      </section>

      {/* 6 */}
      <section id="sec-6" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          6. Payment Milestones & Invoicing
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Full payment or initial deposit milestones must be cleared prior to project commencement and asset deployment. Final source code files, domain administration rights, and GMB access transfer occur upon receipt of 100% cleared funds.
        </p>
      </section>

      {/* 7 */}
      <section id="sec-7" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          7. Intellectual Property & Transfer Rights
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          All code, graphics, and custom design assets remain the property of Webliix until final payment is settled in full. Upon 100% payment clearance, full ownership rights transfer to the client. Webliix retains the non-exclusive right to display completed project screenshots in its agency portfolio and client case studies.
        </p>
      </section>

      {/* 8 */}
      <section id="sec-8" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          8. Post-Launch Technical Support & Warranty
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          All web projects include thirty (30) days of complimentary post-launch technical support covering bug fixes and server connectivity monitoring. Ongoing software updates or structural content additions beyond 30 days are covered under separate website maintenance agreements.
        </p>
      </section>

      {/* 9 */}
      <section id="sec-9" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          9. Limitation of Liability
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Webliix shall not be held liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, domain registrar downtime, or search engine algorithm updates beyond our reasonable control. Total liability under any claim shall not exceed the amount paid by the client for the specific project service.
        </p>
      </section>

      {/* 10 */}
      <section id="sec-10" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          10. Governing Jurisdiction
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this agreement shall be subject to jurisdiction and arbitration in Bhagalpur, Bihar, India.
        </p>
      </section>

      {/* Contact info */}
      <div className="pt-6 border-t border-theme-border/60 text-xs text-theme-muted font-mono space-y-1">
        <p className="text-theme-text font-bold">Legal Contact Officer</p>
        <p>Email: <a href={`mailto:${siteConfig.brand.contactEmail}`} className="text-theme-primary underline">{siteConfig.brand.contactEmail}</a></p>
        <p>Address: {siteConfig.brand.address}</p>
      </div>
    </LegalLayout>
  );
}
