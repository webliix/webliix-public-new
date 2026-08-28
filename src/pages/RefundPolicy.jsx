import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';
import WebliixIcon from '../components/ui/WebliixIcon';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const tocItems = [
  { id: 'sec-1', title: '1. Eligibility for Refund' },
  { id: 'sec-2', title: '2. Non-Eligible Scenarios' },
  { id: 'sec-3', title: '3. Step-by-Step Refund Process' },
  { id: 'sec-4', title: '4. Support Contact' }
];

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      subtitle="We stand behind the quality of our digital engineering and web design. This document outlines our eligibility criteria, cancellation windows, and refund processing workflows."
      categoryTag="Consumer Protection"
      lastUpdated="May 2, 2026"
      seoTitle="Refund Policy | Service Guarantees & Returns | WEBLIIX"
      seoDescription="Understand Webliix official Refund & Cancellation Policy regarding digital web development, local SEO packages, branding assets, and project cancellations."
      canonicalPath="/refund-cancellation"
      tableOfContents={tocItems}
    >
      {/* Section 1 */}
      <section id="sec-1" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2 flex items-center gap-2">
          <WebliixIcon icon={CheckCircle2} variant="inline" size="md" color="success" /> 1. Eligibility for Refund
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
      <section id="sec-2" className="space-y-4 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2 flex items-center gap-2">
          <WebliixIcon icon={XCircle} variant="inline" size="md" color="error" /> 2. Non-Eligible Scenarios
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
      <section id="sec-3" className="space-y-4 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2 flex items-center gap-2">
          <WebliixIcon icon={Clock} variant="inline" size="md" color="primary" /> 3. Step-by-Step Refund Process & Timeline
        </h2>
        <ol className="list-decimal pl-5 text-xs sm:text-sm text-theme-muted space-y-2">
          <li>Submit a formal refund request via email to <a href={`mailto:${siteConfig.brand.contactEmail}`} className="text-theme-primary hover:underline font-mono">{siteConfig.brand.contactEmail}</a> including your invoice number and reason.</li>
          <li>Our billing and engineering leads will review your request within 3 to 5 business days.</li>
          <li>Upon approval, the refund amount will be credited to your original payment method (Bank Transfer / Credit Card / UPI) within 7 business days.</li>
        </ol>
      </section>

      {/* Section 4 */}
      <section id="sec-4" className="space-y-3 border-t border-theme-border/60 pt-6 text-xs text-theme-muted font-mono">
        <p className="text-theme-text font-bold">Billing & Refund Support</p>
        <p>Email: <a href={`mailto:${siteConfig.brand.contactEmail}`} className="text-theme-primary underline">{siteConfig.brand.contactEmail}</a></p>
        <p>Phone: {siteConfig.brand.contactPhone}</p>
        <p>Address: {siteConfig.brand.address}</p>
      </section>
    </LegalLayout>
  );
}
