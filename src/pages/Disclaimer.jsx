import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, ShieldAlert, FileText, Globe, Cpu } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { businessConfig } from '../config/businessConfig';
import LegalLayout from '../components/legal/LegalLayout';

export default function Disclaimer() {
  const tocItems = [
    { id: 'general-disclaimer', title: '1. Website Information' },
    { id: 'marketing-expectations', title: '2. SEO & Marketing Expectations' },
    { id: 'third-party-links', title: '3. External Platforms & Links' },
    { id: 'technical-availability', title: '4. Service Availability' },
    { id: 'contact-disclaimer', title: '5. Contact & Questions' }
  ];

  return (
    <LegalLayout
      title="Disclaimer & Limitation Statement"
      subtitle="Important legal disclaimers regarding website accuracy, digital marketing search engine ranking expectations, external service integrations, and technical availability."
      categoryTag="Legal Disclosure"
      lastUpdated="May 2, 2026"
      seoTitle="Disclaimer | WEBLIIX"
      seoDescription="Official legal disclaimer covering website information accuracy, SEO/marketing expectations, and third-party integrations for WEBLIIX."
      canonicalPath="/disclaimer"
      tableOfContents={tocItems}
    >
      {/* 1 */}
      <section id="general-disclaimer" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          1. Website Information & Accuracy
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          The information contained on webliix.in and related client preview subdomains is provided for general informational purposes only. While WEBLIIX makes reasonable efforts to ensure the accuracy and currency of website content, case studies, service descriptions, and pricing estimations, we make no express or implied warranties regarding completeness or absolute error-free accuracy.
        </p>
      </section>

      {/* 2 */}
      <section id="marketing-expectations" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          2. SEO & Digital Marketing Performance Expectations
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          WEBLIIX utilizes industry-standard SEO, Google My Business (GMB) citation strategies, and targeted advertising protocols. However, search engine algorithms (Google, Bing), Meta ad delivery networks, and local ranking factors are controlled by independent third parties. WEBLIIX does not guarantee specific organic position #1 search rankings or exact conversion volumes, as digital performance is subject to competitive market dynamics, consumer demand shifts, and search engine policy updates.
        </p>
      </section>

      {/* 3 */}
      <section id="third-party-links" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          3. External Platforms & Third-Party Integrations
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          Our website and deployed applications may contain links to third-party web services, payment gateways (Razorpay, Stripe, UPI), analytics tools, and domain registrars. WEBLIIX does not control, endorse, or accept responsibility for the content, security practices, privacy policies, or operational uptime of any third-party external services.
        </p>
      </section>

      {/* 4 */}
      <section id="technical-availability" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          4. Technical Availability & Service Interruptions
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          While we implement robust cloud architectures and server monitoring, WEBLIIX does not guarantee uninterrupted or error-free access to our website or client applications. Technical maintenance, server upgrades, or unexpected internet infrastructure outages may cause transient service interruptions.
        </p>
      </section>

      {/* 5 */}
      <section id="contact-disclaimer" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
          5. Contact Information
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          If you have questions regarding this disclaimer, please contact us at <a href={`mailto:${businessConfig.businessEmail}`} className="text-theme-primary font-mono underline">{businessConfig.businessEmail}</a> or visit our <a href="/business-information" className="text-theme-primary underline font-mono">Business Information</a> page.
        </p>
      </section>
    </LegalLayout>
  );
}
