import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import LegalLayout from '../components/legal/LegalLayout';
import WebliixButton from '../components/ui/WebliixButton';
import { ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

const EFFECTIVE_DATE = 'October 11, 2026';
const REVIEW_DATE = 'October 2027';

const tocItems = [
  { id: 'sec-1',  title: '1. Introduction' },
  { id: 'sec-2',  title: '2. Who This Policy Applies To' },
  { id: 'sec-3',  title: '3. Information We Collect' },
  { id: 'sec-4',  title: '4. Client Portal Data Use & Security' },
  { id: 'sec-5',  title: '5. Web Form Inquiries & Affirmative Consent' },
  { id: 'sec-6',  title: '6. How We Collect Information' },
  { id: 'sec-7',  title: '7. How We Use Your Information' },
  { id: 'sec-8',  title: '8. WhatsApp Communications' },
  { id: 'sec-9',  title: '9. Browser Storage & Cookies' },
  { id: 'sec-10', title: '10. Third-Party Services' },
  { id: 'sec-11', title: '11. Data Sharing & Non-Disclosure' },
  { id: 'sec-12', title: '12. International Data Transfers' },
  { id: 'sec-13', title: '13. Data Retention Schedule' },
  { id: 'sec-14', title: '14. Data Security Safeguards' },
  { id: 'sec-15', title: '15. Data Breach Response Protocol' },
  { id: 'sec-16', title: '16. Your Rights Under DPDPA' },
  { id: 'sec-17', title: '17. Children\'s Privacy' },
  { id: 'sec-18', title: '18. Third-Party Links' },
  { id: 'sec-19', title: '19. Legal Basis for Processing' },
  { id: 'sec-20', title: '20. Acceptance of Terms & Portal Access' },
  { id: 'sec-21', title: '21. Policy Updates' },
  { id: 'sec-22', title: '22. Grievance & Privacy Contact' },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="space-y-3 pt-4">
      <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text border-b border-theme-border/60 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Para({ children }) {
  return (
    <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
      {children}
    </p>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc pl-5 text-xs sm:text-sm text-theme-muted space-y-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function InfoBox({ children }) {
  return (
    <div className="p-4 theme-rounded-card glass-spatial border border-theme-primary/30 text-xs text-theme-muted font-mono space-y-1">
      {children}
    </div>
  );
}

function NoteBox({ children }) {
  return (
    <div className="p-4 theme-rounded-card glass-spatial border border-theme-border text-xs text-theme-muted leading-relaxed">
      {children}
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto theme-rounded-card border border-theme-border">

      <table className="w-full text-[11px] text-theme-muted">
        <thead>
          <tr className="border-b border-theme-border">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2.5 text-left font-mono font-bold text-theme-primary bg-theme-primary/5 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-theme-border/50 ${i % 2 === 0 ? '' : 'bg-theme-border/5'}`}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2.5 align-top leading-relaxed">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyPolicy() {
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
      title="Privacy Policy"
      subtitle="Comprehensive data protection and privacy disclosure governing webliix.com, client portal services, inquiry forms, and customer data processing."
      categoryTag="Privacy & Compliance"
      lastUpdated={EFFECTIVE_DATE}
      seoTitle="Privacy Policy | Client Portal & Data Use | WEBLIIX"
      seoDescription="Official WEBLIIX Privacy Policy: customer data protection, client portal security, inquiry form consent, DPDPA compliance, and electronic terms acceptance."
      canonicalPath="/privacy-policy"
      tableOfContents={tocItems}
      showAcceptPortalTerms={true}
    >

      {/* 1 — Introduction */}
      <Section id="sec-1" title="1. Introduction">
        <Para>
          WEBLIIX (Udyam Registration No. {businessConfig.udyamNumber}, registered at{' '}
          {businessConfig.businessAddress}) operates the website webliix.com (the "Website") and the Webliix Client Portal (login.webliix.com). We provide
          custom website development, Webliix LaunchKit turnkey packages, Shopify & e-commerce stores,
          custom web applications & SaaS platforms, cross-platform mobile apps (iOS & Android),
          Google Business Profile (GMB) optimization, technical SEO, performance advertising (Google Ads & Meta Ads),
          UI/UX branding, and enterprise software solutions.
        </Para>
        <Para>
          This Privacy Policy explains what personal data we collect through our public web properties and the authenticated Client Portal, why we collect it,
          how we use it, how we safeguard it, who may process it, how long we retain it, and what statutory rights you have as a Data Principal regarding
          your personal data.
        </Para>
        <Para>
          This policy applies to public website visitors, lead inquiry submitters, and verified customers utilizing the Webliix Client Portal.
          Internal employee and administrator workspaces are operated under separate internal operational protocols and are not used by or accessible to external customers.
        </Para>
        <NoteBox>
          <strong className="text-theme-text">Industry Transparency Standard:</strong> Webliix aligns its data protection framework with modern industry standards followed by world-class software development and IT agencies, as well as India's Digital Personal Data Protection Act (DPDPA), 2023. We do not sell or monetize client data.
        </NoteBox>
      </Section>

      {/* 2 — Who This Applies To */}
      <Section id="sec-2" title="2. Who This Policy Applies To">
        <Para>This Privacy Policy applies to:</Para>
        <BulletList items={[
          'Visitors to the webliix.com public website and related subdomains',
          'Prospective clients who submit consultation inquiries, contact forms, or estimate requests',
          'Active clients and client teams accessing the authenticated Webliix Client Portal (login.webliix.com)',
          'Individuals and business representatives who contact us via WhatsApp, telephone, or official email',
          'Anyone who interacts with live chat, support tickets, and shared project deliverables hosted by Webliix',
        ]} />
        <Para>
          Our services and client portal are exclusively directed toward registered businesses, startup founders, and adult commercial professionals. We do not intentionally collect data from or provide services to individuals under 18 years of age.
        </Para>
      </Section>

      {/* 3 — Information We Collect */}
      <Section id="sec-3" title="3. Information We Collect">
        <Para>
          Based on an audit of our web platforms and Client Portal architecture, we collect or process the
          following categories of information:
        </Para>

        <p className="text-xs font-semibold text-theme-primary uppercase tracking-wider mt-3">
          A. Information You Provide Directly via Website Forms
        </p>
        <DataTable
          headers={['Data', 'Source', 'Required?', 'Purpose']}
          rows={[
            ['Full name', 'Contact form, Consultation popup', 'Required', 'To address you and prepare tailored solutions'],
            ['Mobile / WhatsApp number', 'Contact form, Quote modal, Consultation popup', 'Required', 'Direct consultation, quotation delivery, and WhatsApp project chat'],
            ['Email address', 'Contact form, Newsletter strip', 'Optional / Required for news', 'Written quotations, formal invoices, and technical proposals'],
            ['Service interest', 'Dropdown selection on forms', 'Required', 'Categorizing project requirements (LaunchKit, Custom Web App, SEO)'],
            ['Project scope & description', 'Contact form, Scope textarea', 'Required', 'Technical evaluation and feasibility analysis by our engineers'],
          ]}
        />

        <p className="text-xs font-semibold text-theme-primary uppercase tracking-wider mt-4">
          B. Client Portal Account & Operational Data (login.webliix.com)
        </p>
        <DataTable
          headers={['Data Category', 'Data Fields', 'Purpose & Use']}
          rows={[
            ['Account & Auth', 'Client email, cryptographic password hash, OTP verification tokens, session JWT', 'Secure authentication and access control to the client workspace'],
            ['Company Profile', 'Company name, registered business address, GSTIN, primary contact person, phone', 'Generating official GST invoices, legal service agreements, and tax compliance'],
            ['Project Deliverables', 'Project specifications, milestone sign-offs, uploaded documents, architecture blueprints', 'Collaborative project execution, milestone reviews, and client deliverable approvals'],
            ['Billing & Invoices', 'Invoiced amounts, payment status, transaction reference numbers, payment date', 'Accounting reconciliation, digital tax receipts, and payment record-keeping'],
            ['Support & Live Chat', 'Ticket messages, live chat conversation logs, priority flags, resolution notes', 'Direct client technical support, SLA tracking, and audit accountability'],
          ]}
        />

        <p className="text-xs font-semibold text-theme-primary uppercase tracking-wider mt-4">
          C. Information Collected Automatically
        </p>
        <DataTable
          headers={['Data', 'Source', 'Purpose']}
          rows={[
            ['IP address & User Agent', 'Hosting CDN & backend API logs', 'Routing requests, rate-limiting, preventing brute-force attacks, and security audits'],
            ['UI preferences', 'Browser localStorage (theme, glass blur, sound)', 'Persisting your visual display choices across visits (never leaves device)'],
            ['Terms Acceptance Flag', 'Browser localStorage (webliix_client_terms_accepted)', 'Remembering electronic acceptance of Client Portal terms'],
          ]}
        />

        <NoteBox>
          <strong className="text-theme-text">What we do NOT collect:</strong> We do not collect
          credit card numbers, CVVs, net banking passwords, biometric data, religious/health data,
          or personal social media credentials through webliix.com or the Client Portal. All payment reconciliations utilize bank transfers or secure UPI transaction references.
        </NoteBox>
      </Section>

      {/* 4 — Client Portal Data Use & Security */}
      <Section id="sec-4" title="4. Client Portal Data Use & Security Framework">
        <Para>
          The Webliix Client Portal is built to provide transparency, real-time collaboration, and secure self-service capabilities for our clients.
          We handle Client Portal data under strict operational safeguards:
        </Para>
        <BulletList items={[
          'Strict Role-Based Separation: External client data is strictly segregated from internal administrator and employee portals. Clients can only see their own company\'s projects, milestones, invoices, and support tickets.',
          'No Third-Party Ad Tracking: The Client Portal contains zero third-party advertising trackers, social pixels, or behavioral analytics scripts.',
          'Secure Authentication: Client logins are protected by bcrypt/Argon2 password hashing, time-limited OTP tokens for password recovery, and secure HTTP session headers.',
          'Live Support & Ticket Privacy: Messages and attachments exchanged in the live support chat and ticketing module are treated as confidential business communications between Webliix and the client organization.',
          'Transactional Email Notifications: System emails (e.g. project milestone updates, invoice issue notifications, ticket replies, OTPs) are dispatched solely for operational fulfillment.',
        ]} />
      </Section>

      {/* 5 — Web Form Inquiries & Affirmative Consent */}
      <Section id="sec-5" title="5. Web Form Inquiries & Affirmative Consent">
        <Para>
          Webliix operates several web forms across webliix.com to facilitate client inquiries, free consultation bookings, and custom quote estimations.
          In accordance with global industry privacy best practices and the Digital Personal Data Protection Act, 2023:
        </Para>
        <BulletList items={[
          'Affirmative Consent at Submission: When you fill out and submit an inquiry or consultation form on our website, you provide explicit, affirmative consent for Webliix project representatives to contact you via telephone, WhatsApp, or email.',
          'Specific Purpose: Information entered into inquiry forms is utilized solely to analyze your requirements, provide estimates, schedule introductory discovery calls, and prepare formal proposals.',
          'No Cold Telemarketing: We do not add your contact information to automated cold-calling dialers or share your information with third-party telemarketers.',
          'Right to Opt-Out: If you no longer wish to be contacted following an initial inquiry, simply notify us in reply or email contact@webliix.com, and your inquiry will be closed and removed from active follow-ups.',
        ]} />
      </Section>

      {/* 6 — How We Collect */}
      <Section id="sec-6" title="6. How We Collect Information">
        <BulletList items={[
          'Directly, when you complete and submit an inquiry, quote estimator, or consultation form on the website',
          'Directly, when you authenticate into the Client Portal and upload project documents or post messages',
          'Directly, when you contact us via telephone, WhatsApp, or official email',
          'Automatically, via infrastructure servers logging HTTP requests necessary to deliver web pages securely',
          'Through your local browser storing visual layout preferences and terms acceptance flags in localStorage',
        ]} />
      </Section>

      {/* 7 — How We Use Information */}
      <Section id="sec-7" title="7. How We Use Your Information">
        <Para>We use personal and business information strictly for legitimate commercial purposes:</Para>
        <BulletList items={[
          'To respond to your inquiries and deliver detailed project quotes within our 2-hour SLA',
          'To provision and maintain your authenticated Client Portal account',
          'To plan, design, engineer, test, and deploy software and digital marketing projects you engage us to deliver',
          'To issue tax invoices, record payment settlements, and fulfill Indian GST compliance requirements',
          'To provide live chat technical assistance and ticket resolution',
          'To send essential transactional notifications regarding project milestones and security alerts',
          'To prevent fraudulent activity, unauthorized portal intrusion, and malicious attacks',
        ]} />
        <Para>
          We do not use client information for automated profiling, automated credit decisioning, or unsolicited bulk promotional campaigns.
        </Para>
      </Section>

      {/* 8 — WhatsApp */}
      <Section id="sec-8" title="8. WhatsApp Communications">
        <Para>
          The website provides a WhatsApp contact button that, when clicked, opens a WhatsApp conversation
          with Webliix. WhatsApp is a service operated by Meta Platforms, Inc. / WhatsApp LLC and is
          governed by WhatsApp's own Terms of Service and Privacy Policy, which are independent of this
          Privacy Policy.
        </Para>
        <Para>
          When you contact us through WhatsApp, the following applies:
        </Para>
        <BulletList items={[
          'Your WhatsApp phone number and the content of your messages will be received by our team through the WhatsApp application',
          'Meta/WhatsApp processes your data in accordance with their privacy practices, which we do not control',
          'We retain WhatsApp conversation records on our devices for the duration of our business relationship and for a reasonable period thereafter',
          'Webliix does not use WhatsApp Business API or any automated message processing — all conversations are handled by our team manually',
          'We do not share WhatsApp conversation content with third parties except where legally required',
        ]} />
        <Para>
          We recommend reviewing WhatsApp's Privacy Policy at{' '}
          <a
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-primary underline font-mono"
          >
            whatsapp.com/legal/privacy-policy
          </a>{' '}
          before contacting us through that platform.
        </Para>
      </Section>

      {/* 9 — Browser Storage & Cookies */}
      <Section id="sec-9" title="9. Browser Storage & Cookies">
        <Para>
          The Webliix website uses browser localStorage (a browser storage mechanism similar to cookies
          but stored locally in your browser) to remember your visual preferences and record your affirmative legal consent. This data never leaves your device and is not transmitted to our servers.
        </Para>

        <DataTable
          headers={['Key', 'Purpose', 'Type', 'Personal Data?', 'Duration']}
          rows={[
            ['spatial_theme_id', 'Remembers your selected colour theme', 'Functional', 'No', 'Until you clear browser data'],
            ['spatial_custom_primary', 'Remembers custom accent colour selection', 'Functional', 'No', 'Until you clear browser data'],
            ['spatial_glass_blur', 'Remembers glassmorphism blur intensity setting', 'Functional', 'No', 'Until you clear browser data'],
            ['spatial_font_id', 'Remembers your selected font pairing', 'Functional', 'No', 'Until you clear browser data'],
            ['spatial_canvas_particles', 'Remembers 3D canvas animation on/off setting', 'Functional', 'No', 'Until you clear browser data'],
            ['spatial_sound_enabled', 'Remembers sound effects on/off preference', 'Functional', 'No', 'Until you clear browser data'],
            ['spatial_corner_style', 'Remembers UI corner curvature preference (edgy vs rounded)', 'Functional', 'No', 'Until you clear browser data'],
            ['webliix_client_terms_accepted', 'Stores client terms acceptance confirmation state', 'Functional / Consent', 'No', 'Until cleared or revoked'],
            ['webliix_client_terms_accepted_at', 'Timestamp of electronic terms acceptance', 'Audit / Consent', 'No', 'Until cleared or revoked'],
          ]}
        />

        <Para>
          In addition, Google Fonts (used to load our website typography) makes requests to Google's
          servers, which may result in Google setting cookies or processing your IP address per their
          Privacy Policy.
        </Para>

        <NoteBox>
          <strong className="text-theme-text">Cookie consent:</strong> Because the storage listed above
          is strictly functional (it only remembers your visual choices and legal consent state with no behavioural profiling),
          and because we do not currently use any third-party advertising or cross-site tracking
          technologies, we do not require a separate marketing cookie consent banner. If we introduce any
          non-essential tracking in the future, we will implement appropriate prior consent mechanisms and update this policy.
        </NoteBox>

        <Para>
          You can clear all locally stored preferences by clearing your browser's site data or localStorage.
          The website will continue to function normally after clearing — it will simply revert to the
          default visual theme.
        </Para>
      </Section>

      {/* 10 — Third-Party Services */}
      <Section id="sec-10" title="10. Third-Party Services">
        <Para>
          The webliix.com website and client infrastructure utilize the following third-party service providers strictly for infrastructure delivery:
        </Para>
        <DataTable
          headers={['Service', 'Provider', 'Purpose', 'Data Potentially Shared', 'Privacy Reference']}
          rows={[
            [
              'Netlify (Hosting & CDN)',
              'Netlify, Inc. (USA)',
              'Hosting the public website and serving assets via edge CDN',
              'IP address, HTTP request headers, pages accessed (standard server logs)',
              'netlify.com/privacy',
            ],
            [
              'Google Fonts',
              'Google LLC (USA)',
              'Loading website typography (fonts)',
              'IP address, browser information when requesting font files',
              'policies.google.com/privacy',
            ],
            [
              'Cloudinary (Media CDN)',
              'Cloudinary Ltd. (USA)',
              'Serving responsive, optimized images and project media over global edge CDN',
              'Standard HTTP headers, IP address for edge routing (no tracking cookies)',
              'cloudinary.com/privacy',
            ],
            [
              'WhatsApp',
              'Meta Platforms / WhatsApp LLC (USA)',
              'Direct client communication (user-initiated)',
              'Phone number, message content — only when you choose to contact us',
              'whatsapp.com/legal/privacy-policy',
            ],
          ]}
        />
        <Para>
          We do not sell or rent personal information to any third party. We do not use any advertising
          networks, data brokers, remarketing services, or behavioural profiling platforms.
        </Para>
        <NoteBox>
          <strong className="text-theme-text">Services not used:</strong> The public website does not currently
          use Google Analytics, Google Tag Manager, Meta Pixel, Microsoft Clarity, Hotjar, Firebase,
          or third-party advertisement brokers. Payment references in our documentation describe customer software development capabilities — not webliix.com public tracking.
        </NoteBox>
      </Section>

      {/* 11 — Data Sharing & Non-Disclosure */}
      <Section id="sec-11" title="11. Data Sharing & Non-Disclosure">
        <Para>We do not sell, rent, or trade your personal or business information. We share information only in the following limited circumstances:</Para>
        <BulletList items={[
          'With our hosting infrastructure provider (Netlify) as an inherent technical requirement of serving web pages',
          'With Google LLC through the Google Fonts CDN for font typography delivery',
          'With our internal technical team members who need it to respond to your enquiry, build your software deliverables, or resolve support tickets',
          'With legal, tax, and regulatory authorities if required by applicable Indian law, valid court orders, or statutory GST filing audits',
          'In the event of a business transfer or merger, in which case data would remain subject to equivalent non-disclosure protections',
        ]} />
        <Para>
          <strong>Confidentiality Commitment:</strong> All project specifications, proprietary business algorithms, databases, and customer records uploaded into the Webliix Client Portal are strictly protected under mutual non-disclosure terms and are never shared with unauthorized external entities.
        </Para>
      </Section>

      {/* 12 — International Transfers */}
      <Section id="sec-12" title="12. International Data Transfers">
        <Para>
          Webliix is based in Naugachia, Bhagalpur, Bihar, India. When our website is accessed, data
          may be processed outside India in the following circumstances:
        </Para>
        <BulletList items={[
          'Netlify (hosting) operates edge servers globally, including in the USA and Europe — standard web request data may be processed on these servers',
          'Google Fonts CDN servers are located globally — font requests may be processed by Google in the USA or other regions',
          'WhatsApp / Meta servers process messages through their global infrastructure',
        ]} />
        <Para>
          Where personal data is transferred internationally, we rely on the privacy commitments
          and contractual protections maintained by each respective provider (Netlify, Google, Meta).
          We encourage you to review their respective privacy policies for more information.
        </Para>
        <Para>
          If you are located in the European Economic Area (EU/EEA) or the United Kingdom and contact
          us, your personal data will be transferred to India. Where GDPR applies to your enquiry, we process your data based on contractual
          necessity or your explicit consent, and we take reasonable steps to protect it during
          transmission.
        </Para>
      </Section>

      {/* 13 — Data Retention */}
      <Section id="sec-13" title="13. Data Retention Schedule">
        <Para>
          We retain personal information for as long as necessary to fulfil the purposes for which
          it was collected, or as required by law. Our recommended retention schedule is:
        </Para>
        <DataTable
          headers={['Data Category', 'Recommended Retention', 'Reason']}
          rows={[
            ['Contact form enquiries & lead quotes', '3 years from last contact', 'Business communication record + reasonable follow-up period'],
            ['Client project records & portal data', '7 years from project completion', 'Indian contract law / tax & accounting compliance requirements'],
            ['GST tax invoices & payment receipts', '8 years from end of financial year', 'Section 36 of CGST Act, 2017 statutory compliance'],
            ['Support tickets & live chat transcripts', '3 years from ticket closure', 'Quality assurance, service warranty, and dispute resolution'],
            ['Business communication records (email, WhatsApp)', '3 years from last communication', 'Business record / dispute resolution'],
            ['Browser localStorage (UI preferences & consent)', 'Until user clears browser data', 'Functional only — client controlled'],
            ['Hosting/CDN server logs (Netlify)', 'As per Netlify\'s retention policy', 'Infrastructure edge provider security logs'],
          ]}
        />
        <Para>
          When data reaches the end of its statutory retention period, it is securely purged, deleted, or irreversibly anonymized. You may also request earlier
          deletion of your personal information subject to statutory legal record-keeping obligations.
        </Para>
      </Section>

      {/* 14 — Data Security Safeguards */}
      <Section id="sec-14" title="14. Data Security Safeguards">
        <Para>
          We employ robust technical and organizational safeguards designed to protect personal and business information against unauthorized access, loss, or alteration:
        </Para>
        <BulletList items={[
          'HTTPS/TLS encryption for all communications between your browser, public web pages, and the Client Portal',
          'Cryptographic password hashing (BCrypt with salt) for all client authentication credentials',
          'JSON Web Token (JWT) stateless authenticated sessions with automated expiry',
          'Strict Role-Based Access Control (RBAC) preventing cross-tenant data exposure and isolating client workspaces',
          'Deployment through Netlify\'s edge CDN infrastructure, featuring automated DDoS protection and edge security headers',
          'Restricted administrative access with multi-layered credentialing for all internal personnel',
          'Regular vulnerability reviews, code audits, and third-party dependency scanning',
        ]} />
        <Para>
          While we enforce industry-standard security safeguards, no method of transmission over the Internet or electronic storage is completely infallible. In the event of a detected data breach, we follow the protocol outlined in Section 15.
        </Para>
      </Section>

      {/* 15 — Data Breach */}
      <Section id="sec-15" title="15. Data Breach Response Protocol">
        <Para>
          In the event that we become aware of a personal data breach that poses a potential risk to your rights, security, or commercial interests, Webliix will:
        </Para>
        <BulletList items={[
          'Conduct an immediate internal technical assessment of the nature, scope, and potential impact of the breach within 24 hours',
          'Take swift containment actions to isolate affected endpoints and patch vulnerabilities',
          'Notify the Data Protection Board of India in accordance with the applicable statutory requirements of the DPDPA, 2023',
          'Notify affected clients and Data Principals without undue delay with recommendations for mitigating potential impacts',
        ]} />
        <Para>
          If you detect or suspect any unauthorized activity or security concern regarding your Webliix Client Portal account, please contact our security team immediately at the contact details in Section 22.
        </Para>
      </Section>

      {/* 16 — User Rights */}
      <Section id="sec-16" title="16. Your Rights Under DPDPA">
        <Para>
          Under the Digital Personal Data Protection Act, 2023 (India), you have the following rights
          as a Data Principal:
        </Para>
        <DataTable
          headers={['Right', 'Description', 'How to Exercise']}
          rows={[
            ['Right to Information', 'Know what personal data we hold about you and how it is processed', 'Email our privacy contact (Section 22)'],
            ['Right to Access', 'Obtain a summary of your personal data we are processing', 'Email our privacy contact'],
            ['Right to Correction', 'Request correction of inaccurate or incomplete personal data or update via Client Portal', 'Via Portal settings or email'],
            ['Right to Erasure', 'Request deletion of personal data no longer required for statutory or contractual purposes', 'Email our privacy contact'],
            ['Right to Grievance Redressal', 'File a grievance with our designated Grievance Officer', 'Email our Grievance Officer (Section 22)'],
            ['Right to Nominate', 'Nominate another individual to exercise your rights in case of death or incapacity (DPDPA)', 'Email our privacy contact'],
            ['Right to Withdraw Consent', 'Withdraw consent previously granted — does not affect prior lawful processing', 'Email our privacy contact'],
          ]}
        />

        <Para>
          We acknowledge all rights requests within 48 business hours and resolve them as promptly as practicable. To protect your confidentiality, we may require verification of your identity before executing data requests.
        </Para>
      </Section>

      {/* 17 — Children's Privacy */}
      <Section id="sec-17" title="17. Children's Privacy">
        <Para>
          Webliix's services, website, and Client Portal are designed exclusively for businesses, entrepreneurs, and adult professionals aged 18 and older. We do not knowingly collect personal data from individuals under the age of 18.
        </Para>
        <Para>
          If you believe that a minor has submitted personal information through our website, please contact our privacy desk immediately at the address in Section 22 so we can delete the records promptly.
        </Para>
      </Section>

      {/* 18 — Third-Party Links */}
      <Section id="sec-18" title="18. Third-Party Links">
        <Para>
          The Webliix website may contain links to third-party websites, platforms, and services —
          including client portfolio live previews, social networks, and external developer tools. These links are provided solely for reference and convenience.
        </Para>
        <Para>
          When you follow an outbound link, you leave webliix.com. Third-party websites operate under their own independent privacy notices, and Webliix is not responsible for their independent data handling practices.
        </Para>
      </Section>

      {/* 19 — Legal Basis */}
      <Section id="sec-19" title="19. Legal Basis for Processing">
        <Para>
          Under India's Digital Personal Data Protection Act, 2023, we process personal and commercial data on the following legal grounds:
        </Para>
        <DataTable
          headers={['Processing Activity', 'Legal Basis', 'Notes']}
          rows={[
            ['Processing website inquiry forms & quotes', 'Consent & steps prior to entering contract', 'Initiated by user submitting web form'],
            ['Client Portal provisioning & project delivery', 'Contractual performance', 'Required to fulfill agreed project scope and deliverables'],
            ['Tax invoicing & GST record-keeping', 'Statutory legal obligation', 'Mandated under Indian taxation and corporate regulations'],
            ['Customer support tickets & live chat', 'Contractual performance & legitimate interest', 'Delivering client support and resolving inquiries'],
            ['Storing UI preferences & consent in localStorage', 'Legitimate interest & functional necessity', 'Stored locally on user browser only'],
            ['Infrastructure logging (Netlify edge CDN)', 'Legitimate interest', 'Essential for web security and DDoS mitigation'],
          ]}
        />
      </Section>

      {/* 20 — Acceptance of Terms & Portal Access */}
      <Section id="sec-20" title="20. Acceptance of Terms & Portal Access">
        <Para>
          Access to and usage of the authenticated Webliix Client Portal is conditioned upon your affirmative acceptance of this Privacy Policy and our commercial Terms & Conditions. By utilizing the Client Portal, uploading deliverables, or clicking the acceptance button below, you confirm that:
        </Para>
        <BulletList items={[
          'You have read, understood, and agreed to the data collection and processing practices described herein',
          'You authorize Webliix to process your contact, billing, and project information to deliver ordered IT services',
          'You understand that internal administrative and employee systems are isolated internal environments not utilized by external customers',
          'Your electronic acceptance constitutes a legally binding acknowledgment under the Information Technology Act, 2000 and DPDPA, 2023',
        ]} />

        <div className="mt-4 p-5 theme-rounded-card glass-spatial border border-theme-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-display font-bold text-theme-text flex items-center justify-center sm:justify-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Client Portal Terms & Privacy Confirmation
            </h4>
            <p className="text-xs text-theme-muted">
              {accepted
                ? 'Your electronic acceptance has been recorded. You can proceed directly to the Client Portal.'
                : 'Click below to accept our Privacy Policy & Terms and continue directly to the Client Portal.'}
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
            {accepted ? 'Terms Accepted • Open Client Portal' : 'Accept Terms to Use Client Portal'}
          </WebliixButton>
        </div>
      </Section>

      {/* 21 — Policy Updates */}
      <Section id="sec-21" title="21. Policy Updates">
        <Para>
          We may update this Privacy Policy periodically to reflect service evolutions, technical advancements, or regulatory amendments under Indian law. When material modifications occur, we will:
        </Para>
        <BulletList items={[
          'Update the "Effective Date" at the top of this policy document',
          'Publish the updated document directly at webliix.com/privacy-policy',
          'Notify active Client Portal account holders via email or portal dashboard announcement where appropriate',
        ]} />
        <Para>
          Continued use of our public website or Client Portal following posted updates represents acknowledgment of the revised provisions. This policy is scheduled for formal annual review in {REVIEW_DATE}.
        </Para>
      </Section>

      {/* 22 — Grievance & Privacy Contact */}
      <Section id="sec-22" title="22. Grievance & Privacy Contact">
        <Para>
          Under the Digital Personal Data Protection Act, 2023 (India), Webliix designates the
          following official channel for privacy-related inquiries, grievance redressal, and statutory data rights requests:
        </Para>

        <InfoBox>
          <p className="text-theme-text font-bold text-sm mb-2">Grievance Officer — WEBLIIX</p>
          <p>Email: <a href={`mailto:${businessConfig.businessEmail}`} className="text-theme-primary underline">{businessConfig.businessEmail}</a></p>
          <p>Phone: <a href={`tel:${businessConfig.businessPhone.replace(/\s+/g, '')}`} className="text-theme-primary">{businessConfig.businessPhone}</a></p>
          <p>Address: {businessConfig.businessAddress}</p>
          <p>Udyam Registration: {businessConfig.udyamNumber}</p>
          <p className="mt-2 text-theme-muted/80 text-[11px]">
            We acknowledge privacy grievances within 48 business hours and endeavor to resolve all inquiries within 30 calendar days.
          </p>
        </InfoBox>

        <Para>
          If you are not satisfied with our grievance resolution, you possess the statutory right to escalate the matter to the Data Protection Board of India once fully operational.
        </Para>

        {/* Legal links */}
        <div className="mt-6 p-4 theme-rounded-card border border-theme-border/60 bg-theme-border/5 text-[11px] text-theme-muted leading-relaxed space-y-2">
          <p className="font-semibold text-theme-text text-xs">Related Legal Policies</p>
          <p>
            Explore our complementary governance documents:
          </p>
          <p>
            <Link to="/terms-and-conditions" className="text-theme-primary underline font-medium">Terms & Conditions</Link>
            {' · '}<Link to="/disclaimer" className="text-theme-primary underline">Disclaimer</Link>
            {' · '}<Link to="/refund-cancellation" className="text-theme-primary underline">Refund & Cancellation Policy</Link>
            {' · '}<Link to="/business-information" className="text-theme-primary underline">Business Information</Link>
          </p>
        </div>
      </Section>

    </LegalLayout>
  );
}
