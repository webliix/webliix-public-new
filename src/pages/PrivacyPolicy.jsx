import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { siteConfig } from '../config/siteConfig';
import LegalLayout from '../components/legal/LegalLayout';

export default function PrivacyPolicy() {
  const tocItems = [
    { id: 'sec-1', title: '1. Introduction' },
    { id: 'sec-2', title: '2. Information We Collect' },
    { id: 'sec-3', title: '3. Information Submitted Forms' },
    { id: 'sec-4', title: '4. How We Use Information' },
    { id: 'sec-5', title: '5. Communication Protocol' },
    { id: 'sec-6', title: '6. Cookies Policy' },
    { id: 'sec-7', title: '7. Analytics & Telemetry' },
    { id: 'sec-8', title: '8. Third-Party Services' },
    { id: 'sec-9', title: '9. Data Security Measures' },
    { id: 'sec-10', title: '10. Data Retention Period' },
    { id: 'sec-11', title: '11. Data Sharing Practices' },
    { id: 'sec-12', title: '12. User Rights & Access' },
    { id: 'sec-13', title: '13. Children Privacy' },
    { id: 'sec-14', title: '14. Policy Updates' },
    { id: 'sec-15', title: '15. Contact Information' }
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Comprehensive data governance and privacy practices for WEBLIIX web development, software engineering, and SEO services."
      categoryTag="Privacy & Compliance"
      lastUpdated="May 2, 2026"
      seoTitle="Privacy Policy | WEBLIIX"
      seoDescription="Read WEBLIIX privacy policy regarding data collection, usage, form submissions, security, and user rights."
      canonicalPath="/privacy-policy"
      tableOfContents={tocItems}
    >
      {/* 1 */}
      <section id="sec-1" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          1. Introduction
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Welcome to {businessConfig.name} ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting personal information collected through webliix.in and our client service platforms. This Privacy Policy details how data is collected, processed, and safeguarded.
        </p>
      </section>

      {/* 2 */}
      <section id="sec-2" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          2. Information We Collect
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          We collect personal and non-personal data to provide custom IT solutions, process project inquiries, and deliver web services:
        </p>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-theme-muted space-y-1.5">
          <li><strong>Contact Information:</strong> Name, business name, work email address, and mobile phone number.</li>
          <li><strong>Technical Metadata:</strong> IP address, browser type, device architecture, operating system, and geographic region.</li>
          <li><strong>Usage Data:</strong> Page visit durations, referral source URLs, and navigation clickstream paths.</li>
        </ul>
      </section>

      {/* 3 */}
      <section id="sec-3" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          3. Information Submitted Through Forms
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          When you submit inquiries via our Contact Form, Quote Estimator, or Newsletter form, information such as name, project budget, desired services, and specifications is stored securely to allow our engineering leads to respond.
        </p>
      </section>

      {/* 4 */}
      <section id="sec-4" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          4. How We Use Information
        </h2>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-theme-muted space-y-1.5">
          <li>To scope, design, and deliver agreed web applications and GMB profiles</li>
          <li>To process billing invoices and verify project deliverable milestones</li>
          <li>To analyze website performance and optimize user experience</li>
          <li>To respond to customer support requests and project updates</li>
        </ul>
      </section>

      {/* 5 */}
      <section id="sec-5" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          5. Communication
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          We may use your contact information to send project updates, invoice receipts, or essential service notices. You may opt out of promotional communications at any time by following the unsubscribe instructions or emailing us directly.
        </p>
      </section>

      {/* 6 */}
      <section id="sec-6" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          6. Cookies Policy
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          We use functional session cookies to remember theme preferences, font pairing selections, and modal states across pages. You can disable cookies in your web browser, though certain interactive features may function with reduced performance.
        </p>
      </section>

      {/* 7 */}
      <section id="sec-7" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          7. Analytics & Telemetry
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          We utilize standard web analytics tools (such as Google Analytics) to monitor website traffic metrics in an aggregated, anonymized format without selling individual tracking profiles.
        </p>
      </section>

      {/* 8 */}
      <section id="sec-8" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          8. Third-Party Services
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          We do not sell or rent personal information to third-party data brokers. Data is shared only with trusted infrastructure providers (such as cloud hosting and email service operators) necessary for service delivery.
        </p>
      </section>

      {/* 9 */}
      <section id="sec-9" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          9. Data Security Measures
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          We apply SSL/TLS encryption for all web communications and restrict internal access to project databases. While we implement standard digital security measures, no online transmission method is completely immune to external threats.
        </p>
      </section>

      {/* 10 */}
      <section id="sec-10" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          10. Data Retention Period
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Project records, technical deliverables, and invoice data are retained for as long as necessary to fulfill service agreements and statutory tax requirements, after which records are securely archived or purged.
        </p>
      </section>

      {/* 11 */}
      <section id="sec-11" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          11. Data Sharing Practices
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Information may be disclosed if required by applicable Indian legal statutes, court orders, or government regulations to protect against legal claims or security breaches.
        </p>
      </section>

      {/* 12 */}
      <section id="sec-12" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          12. User Rights & Access
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          You retain the right to request access to, correction of, or deletion of your personal records in our possession. Submit requests to <a href={`mailto:${businessConfig.businessEmail}`} className="text-theme-primary underline font-mono">{businessConfig.businessEmail}</a>.
        </p>
      </section>

      {/* 13 */}
      <section id="sec-13" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          13. Children's Privacy
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Our services are intended for commercial businesses and adults. We do not knowingly collect personal data from children under 13.
        </p>
      </section>

      {/* 14 */}
      <section id="sec-14" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          14. Policy Updates
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          We may update this policy periodically to reflect operational changes or regulatory updates. Revised dates will be displayed at the top of this document.
        </p>
      </section>

      {/* 15 */}
      <section id="sec-15" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          15. Contact Information
        </h2>
        <div className="p-4 rounded-2xl glass-spatial border border-theme-border text-xs text-theme-muted font-mono space-y-1">
          <p className="text-theme-text font-bold">{businessConfig.name} Legal Support</p>
          <p>Email: {businessConfig.businessEmail}</p>
          <p>Phone: {businessConfig.businessPhone}</p>
          <p>Address: {businessConfig.businessAddress}</p>
        </div>
      </section>
    </LegalLayout>
  );
}
