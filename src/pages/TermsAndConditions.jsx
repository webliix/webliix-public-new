import React, { useState } from 'react';
import LegalLayout from '../components/legal/LegalLayout';
import { siteConfig } from '../config/siteConfig';
import { businessConfig } from '../config/businessConfig';
import WebliixButton from '../components/ui/WebliixButton';
import { ShieldCheck, CheckCircle2, Lock, FileText, ArrowUpRight } from 'lucide-react';

const tocItems = [
  { id: 'sec-1', title: '1. General Terms & Acceptance' },
  { id: 'sec-2', title: '2. Client Portal Terms of Use' },
  { id: 'sec-3', title: '3. Data Use & Industry Privacy Standard' },
  { id: 'sec-4', title: '4. Lead Forms & Consent Verification' },
  { id: 'sec-5', title: '5. Scope of Services & Deliverables' },
  { id: 'sec-6', title: '6. Revisions & Milestone Approvals' },
  { id: 'sec-7', title: '7. Third-Party Licenses & Cloud Hosting' },
  { id: 'sec-8', title: '8. Communication Protocol' },
  { id: 'sec-9', title: '9. Payment Milestones & Invoicing' },
  { id: 'sec-10', title: '10. Intellectual Property Rights' },
  { id: 'sec-11', title: '11. Support & Warranty Period' },
  { id: 'sec-12', title: '12. Limitation of Liability' },
  { id: 'sec-13', title: '13. Governing Jurisdiction' },
  { id: 'sec-14', title: '14. Electronic Acceptance of Terms' }
];

export default function TermsAndConditions() {
  const [accepted, setAccepted] = useState(() => {
    try {
      return localStorage.getItem('webliix_client_terms_accepted') === 'true';
    } catch {
      return false;
    }
  });

  const handleAcceptTerms = () => {
    try {
      localStorage.setItem('webliix_client_terms_accepted', 'true');
      localStorage.setItem('webliix_client_terms_accepted_at', new Date().toISOString());
    } catch (e) {
      console.error(e);
    }
    setAccepted(true);
    const clientPortalUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:5174/login'
      : 'https://login.webliix.com';
    window.location.href = clientPortalUrl;
  };

  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Comprehensive commercial service agreement, client portal usage policies, form consent verification, and digital data handling framework for Webliix clients."
      categoryTag="Legal & Commercial Framework"
      lastUpdated="October 11, 2026"
      seoTitle="Terms & Conditions | Client Portal Agreement | WEBLIIX"
      seoDescription="Official Webliix terms & conditions covering client portal usage, project deliverables, payment milestones, data protection, form consent, and electronic agreement acceptance."
      canonicalPath="/terms-and-conditions"
      tableOfContents={tocItems}
      showAcceptPortalTerms={true}
    >
      {/* 1 */}
      <section id="sec-1" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          1. General Terms & Acceptance
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          These Terms & Conditions ("Agreement") constitute a legally binding agreement between you or the entity you represent ("Client", "Customer", "You") and Webliix ("Company", "we", "us", "our"). By submitting an inquiry form, converting a project proposal, registering for or logging into the Webliix Client Portal (<code className="text-theme-primary font-mono text-xs">login.webliix.com</code>), issuing a payment, or utilizing our digital engineering and SEO services, you affirm that you are at least 18 years of age and explicitly agree to be bound by all terms, data handling policies, and service criteria set forth herein.
        </p>
      </section>

      {/* 2 */}
      <section id="sec-2" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2 flex items-center gap-2">
          <Lock className="w-5 h-5 text-theme-primary" />
          2. Client Portal Terms of Access & Usage
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          The Webliix Client Portal is a proprietary authenticated web workspace provided exclusively to active customers and clients to track milestones, inspect source deliverables, review billing statements, and interface with our engineering desk. Access is governed under strict confidentiality and operational standards:
        </p>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-theme-muted space-y-1.5 leading-relaxed">
          <li>
            <strong className="text-theme-text">Account Provisioning & Security:</strong> Client credentials and one-time password (OTP) verification tokens are issued to client-authorized personnel only. You are solely responsible for maintaining the confidentiality of your login credentials and preventing unauthorized access.
          </li>
          <li>
            <strong className="text-theme-text">Live Project Collaboration & Instructions:</strong> Instructions, document uploads, and feedback transmitted via the Client Portal feed constitute authorized project directives that our engineering leads rely upon for design implementation and phase milestones.
          </li>
          <li>
            <strong className="text-theme-text">Invoice Settlement & Records:</strong> Tax invoices, milestone payment breakdowns, and GST accounting vouchers hosted on the portal are official commercial instruments. Clients can review invoices, download PDFs, and reconcile payments seamlessly.
          </li>
          <li>
            <strong className="text-theme-text">Live Chat & Helpdesk Communication:</strong> Support tickets and real-time live chat sessions created in the portal are logged with time-stamps and personnel tags to ensure SLA compliance, prompt resolution, and audit accuracy.
          </li>
          <li>
            <strong className="text-theme-text">Prohibited Conduct:</strong> Attempting to reverse-engineer portal infrastructure, execute automated scraping, bypass role-based security barriers, or upload malicious code or harmful payloads will result in immediate termination of portal privileges and legal action.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section id="sec-3" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          3. Data Use & Industry Privacy Standards
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          In alignment with modern technology standards practiced by leading global SaaS, cloud development, and digital marketing enterprises (and compliant with India's Digital Personal Data Protection Act, 2023):
        </p>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-theme-muted space-y-1.5 leading-relaxed">
          <li>
            <strong className="text-theme-text">Purpose Limitation:</strong> Client company details, brand assets, contact information, project specifications, and billing records are utilized strictly for project fulfillment, customer portal authentication, transactional updates, invoicing, and direct client support.
          </li>
          <li>
            <strong className="text-theme-text">Customer Exclusivity:</strong> Public-facing client portal systems and customer records are segregated from internal employee and administrative workflows. Customers never have access to private staff data, and internal personnel access client data solely on a need-to-know basis for fulfillment.
          </li>
          <li>
            <strong className="text-theme-text">No Commercial Sale or Monetization:</strong> Webliix does not sell, rent, monetize, or barter client data or submitted inquiry leads to data brokers, ad networks, or external marketing entities.
          </li>
          <li>
            <strong className="text-theme-text">Automated Transactional Notifications:</strong> Operational emails regarding milestone completions, invoice availability, live chat transcripts, and account security notifications are dispatched to authorized client addresses as part of essential service performance.
          </li>
        </ul>
      </section>

      {/* 4 */}
      <section id="sec-4" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          4. Website Forms & Explicit Consent Verification
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          When visitors or prospective clients fill out any form across <code className="text-theme-primary font-mono text-xs">webliix.com</code> (including the Contact Us Inquiry Form, Quote Estimator Modal, Consultation Popups, and Client Portal Onboarding Forms):
        </p>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-theme-muted space-y-1.5 leading-relaxed">
          <li>
            <strong className="text-theme-text">Express Affirmative Consent:</strong> Submitting a form constitutes explicit affirmative consent for Webliix project consultants to contact you via telephone, WhatsApp, or email to discuss requirements, provide cost estimates, and prepare service proposals.
          </li>
          <li>
            <strong className="text-theme-text">Truthfulness of Information:</strong> The submitter warrants that the contact information and organizational details supplied are truthful and belong to an authorized party.
          </li>
          <li>
            <strong className="text-theme-text">Consent Revocation:</strong> Clients have the full legal right to withdraw consent or request lead deletion at any time by emailing <a href={`mailto:${siteConfig.brand.contactEmail}`} className="text-theme-primary underline">{siteConfig.brand.contactEmail}</a>.
          </li>
        </ul>
      </section>

      {/* 5 */}
      <section id="sec-5" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          5. Scope of Engineering & Marketing Services
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Webliix provides turnkey digital solutions, including custom web application development, Google My Business (GMB) setup, search engine optimization (SEO), branding design, and performance advertising. Specific deliverables, project milestones, and delivery timelines are explicitly specified in individual project proposals and client agreements.
        </p>
      </section>

      {/* 6 */}
      <section id="sec-6" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          6. Client Revisions & Milestone Approvals
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Each project design phase includes up to two (2) complimentary rounds of revisions. Any scope expansion, structural changes after layout sign-off, or additional design iterations requested beyond the agreed rounds are subject to separate billable hourly rates as defined in the project scope.
        </p>
      </section>

      {/* 7 */}
      <section id="sec-7" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          7. Third-Party Licenses, Domains & Cloud Hosting
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Unless explicitly stated as an inclusive feature in a turnkey package (such as Webliix LaunchKit), third-party assets — including custom domain registrations, premium font licenses, commercial stock photos, and third-party SaaS plugin fees — are the sole responsibility of the client.
        </p>
      </section>

      {/* 8 */}
      <section id="sec-8" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          8. Communication Protocol & Unresponsive Pauses
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Timely client feedback is essential for meeting project deadlines. A delay of over seven (7) business days in client response or deliverable sign-off may result in the project being placed on administrative pause. Restarting a paused project may require a scheduling adjustment and a 10% re-activation fee.
        </p>
      </section>

      {/* 9 */}
      <section id="sec-9" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          9. Payment Milestones & Invoicing
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Full payment or initial deposit milestones must be cleared prior to project commencement and asset deployment. Final source code files, domain administration rights, and GMB access transfer occur upon receipt of 100% cleared funds.
        </p>
      </section>

      {/* 10 */}
      <section id="sec-10" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          10. Intellectual Property & Transfer Rights
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          All code, graphics, and custom design assets remain the property of Webliix until final payment is settled in full. Upon 100% payment clearance, full ownership rights transfer to the client. Webliix retains the non-exclusive right to display completed project screenshots in its agency portfolio and client case studies.
        </p>
      </section>

      {/* 11 */}
      <section id="sec-11" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          11. Post-Launch Technical Support & Warranty
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          All web projects include thirty (30) days of complimentary post-launch technical support covering bug fixes and server connectivity monitoring. Ongoing software updates or structural content additions beyond 30 days are covered under separate website maintenance agreements.
        </p>
      </section>

      {/* 12 */}
      <section id="sec-12" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          12. Limitation of Liability
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Webliix shall not be held liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, domain registrar downtime, or search engine algorithm updates beyond our reasonable control. Total liability under any claim shall not exceed the amount paid by the client for the specific project service.
        </p>
      </section>

      {/* 13 */}
      <section id="sec-13" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          13. Governing Jurisdiction & Dispute Resolution
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this agreement shall be subject to jurisdiction and arbitration in Bhagalpur, Bihar, India.
        </p>
      </section>

      {/* 14 */}
      <section id="sec-14" className="space-y-4 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-theme-primary" />
          14. Electronic Acceptance of Terms to Use Client Portal
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          By clicking the confirmation button below or continuing into your authenticated client account, you acknowledge that you have reviewed, accepted, and consented to these Terms & Conditions and the Webliix Privacy Policy in full.
        </p>

        <div className="p-5 theme-rounded-card glass-spatial border border-theme-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-display font-bold text-theme-text flex items-center justify-center sm:justify-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Client Portal Agreement Acceptance
            </h4>
            <p className="text-xs text-theme-muted">
              {accepted
                ? 'You have recorded your acceptance of the Webliix Terms & Conditions. You may enter the Client Portal.'
                : 'Click below to accept these terms and proceed directly to the Webliix Client Portal login.'}
            </p>
          </div>

          <WebliixButton
            variant="primary"
            size="md"
            iconLeft={ShieldCheck}
            icon={ArrowUpRight}
            onClick={handleAcceptTerms}
            className="font-bold whitespace-nowrap shadow-md hover:scale-105 transition-transform"
          >
            {accepted ? 'Accept Terms • Open Client Portal' : 'Accept Terms to Use Client Portal'}
          </WebliixButton>
        </div>
      </section>

      {/* Contact info */}
      <div className="pt-6 border-t border-theme-border/60 text-xs text-theme-muted font-mono space-y-1">
        <p className="text-theme-text font-bold">Legal Contact Officer</p>
        <p>Email: <a href={`mailto:${siteConfig.brand.contactEmail}`} className="text-theme-primary underline">{siteConfig.brand.contactEmail}</a></p>
        <p>Phone: <a href={`tel:${siteConfig.brand.contactPhone.replace(/\s+/g, '')}`} className="text-theme-primary">{siteConfig.brand.contactPhone}</a></p>
        <p>Address: {siteConfig.brand.address}</p>
      </div>
    </LegalLayout>
  );
}
