import React from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import LegalLayout from '../components/legal/LegalLayout';

const EFFECTIVE_DATE = 'August 20, 2026';
const REVIEW_DATE = 'August 2027';

const tocItems = [
  { id: 'sec-1',  title: '1. Introduction' },
  { id: 'sec-2',  title: '2. Who This Policy Applies To' },
  { id: 'sec-3',  title: '3. Information We Collect' },
  { id: 'sec-4',  title: '4. How We Collect Information' },
  { id: 'sec-5',  title: '5. How We Use Your Information' },
  { id: 'sec-6',  title: '6. Contact Forms' },
  { id: 'sec-7',  title: '7. WhatsApp Communications' },
  { id: 'sec-8',  title: '8. Browser Storage & Cookies' },
  { id: 'sec-9',  title: '9. Third-Party Services' },
  { id: 'sec-10', title: '10. Data Sharing' },
  { id: 'sec-11', title: '11. International Data Transfers' },
  { id: 'sec-12', title: '12. Data Retention' },
  { id: 'sec-13', title: '13. Data Security' },
  { id: 'sec-14', title: '14. Data Breach' },
  { id: 'sec-15', title: '15. Your Rights' },
  { id: 'sec-16', title: '16. Children\'s Privacy' },
  { id: 'sec-17', title: '17. Third-Party Links' },
  { id: 'sec-18', title: '18. Legal Basis for Processing' },
  { id: 'sec-19', title: '19. Policy Updates' },
  { id: 'sec-20', title: '20. Grievance & Privacy Contact' },
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
    <div className="p-4 rounded-2xl glass-spatial border border-theme-primary/30 text-xs text-theme-muted font-mono space-y-1">
      {children}
    </div>
  );
}

function NoteBox({ children }) {
  return (
    <div className="p-4 rounded-2xl glass-spatial border border-theme-border text-xs text-theme-muted leading-relaxed">
      {children}
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-theme-border">
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
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="This policy explains how WEBLIIX collects, uses, and protects information obtained through webliix.in — based on an audit of the actual website implementation."
      categoryTag="Privacy & Compliance"
      lastUpdated={EFFECTIVE_DATE}
      seoTitle="Privacy Policy | WEBLIIX — Data Protection & Privacy Practices"
      seoDescription="Read WEBLIIX's Privacy Policy: what personal data we collect, how we use it, your rights under India's DPDPA 2023, and how to contact our Grievance Officer."
      canonicalPath="/privacy-policy"
      tableOfContents={tocItems}
    >

      {/* 1 — Introduction */}
      <Section id="sec-1" title="1. Introduction">
        <Para>
          WEBLIIX (Udyam Registration No. {businessConfig.udyamNumber}, registered at{' '}
          {businessConfig.businessAddress}) operates the website webliix.in (the "Website"). We provide
          website development, e-commerce, software development, Google Business Profile setup,
          local SEO, and related digital technology services to small and medium-sized businesses.
        </Para>
        <Para>
          This Privacy Policy explains what personal data we collect through webliix.in, why we collect it,
          how we use it, who may receive it, how long we retain it, and what rights you have regarding
          your personal data.
        </Para>
        <Para>
          This policy applies to your use of the webliix.in website. It does not govern data that Webliix
          processes on behalf of its clients as part of delivering services — that relationship is governed
          by separate agreements between Webliix and each client.
        </Para>
        <NoteBox>
          <strong className="text-theme-text">Legal Transparency Note:</strong> This policy is based on an
          audit of the current webliix.in implementation. If Webliix adds new services, integrations, or
          data flows in future, this policy will be updated to reflect those changes before implementation.
        </NoteBox>
      </Section>

      {/* 2 — Who This Applies To */}
      <Section id="sec-2" title="2. Who This Policy Applies To">
        <Para>This Privacy Policy applies to:</Para>
        <BulletList items={[
          'Visitors to the webliix.in website',
          'Businesses and individuals who submit enquiries through our contact form',
          'Businesses and individuals who contact us through WhatsApp or email',
          'Anyone who interacts with content or features on webliix.in',
        ]} />
        <Para>
          Our website and services are directed toward businesses and business professionals. We do not
          intentionally provide services to individuals under the age of 18. See Section 16 for our
          children's privacy statement.
        </Para>
      </Section>

      {/* 3 — Information We Collect */}
      <Section id="sec-3" title="3. Information We Collect">
        <Para>
          Based on an audit of our current website implementation, we collect or may receive the
          following categories of information:
        </Para>

        <p className="text-xs font-semibold text-theme-primary uppercase tracking-wider mt-3">
          A. Information You Provide Directly
        </p>
        <DataTable
          headers={['Data', 'Source', 'Required?', 'Purpose']}
          rows={[
            ['Full name', 'Contact form', 'Required', 'To address you and respond to your enquiry'],
            ['Mobile number (WhatsApp)', 'Contact form, Quote estimator modal', 'Required', 'For callback and WhatsApp communication'],
            ['Email address', 'Contact form', 'Optional', 'For email responses where preferred'],
            ['Service interest', 'Contact form (dropdown)', 'Optional', 'To understand which service you are interested in'],
            ['Project description / message', 'Contact form', 'Required', 'To understand your requirements and prepare a response'],
            ['Name + phone (Quote modal)', 'Quote estimator popup', 'Required', 'To follow up on project estimate enquiries'],
          ]}
        />

        <p className="text-xs font-semibold text-theme-primary uppercase tracking-wider mt-4">
          B. Information Collected Automatically
        </p>
        <DataTable
          headers={['Data', 'Source', 'Purpose']}
          rows={[
            ['IP address', 'Netlify CDN (hosting provider)', 'CDN routing, security, abuse prevention — processed by Netlify per their Privacy Policy'],
            ['IP address (font requests)', 'Google Fonts CDN', 'Font file delivery — processed by Google per their Privacy Policy'],
            ['Browser / device type', 'Standard HTTP request headers processed by hosting CDN', 'Infrastructure operation'],
            ['UI preferences (theme, font, sound, animation)', 'Browser localStorage — first-party only', 'Saving your visual preferences across visits'],
          ]}
        />

        <p className="text-xs font-semibold text-theme-primary uppercase tracking-wider mt-4">
          C. Information from WhatsApp Communications
        </p>
        <Para>
          If you choose to contact us through WhatsApp (via the floating button or direct link on the
          Website), we will receive and process information you include in those messages, such as your
          name, phone number, and the content of your enquiry.
        </Para>

        <NoteBox>
          <strong className="text-theme-text">What we do NOT collect:</strong> We do not collect
          payment information, banking details, national ID numbers, biometric data, health data,
          social media credentials, or passwords through webliix.in.
        </NoteBox>
        <NoteBox>
          <strong className="text-theme-text">Analytics notice:</strong> The current version of
          webliix.in does NOT use Google Analytics, Google Tag Manager, Meta Pixel, Microsoft Clarity,
          Hotjar, or any other behavioural tracking or analytics service. If this changes, this policy
          will be updated before deployment.
        </NoteBox>
      </Section>

      {/* 4 — How We Collect */}
      <Section id="sec-4" title="4. How We Collect Information">
        <BulletList items={[
          'Directly, when you complete and submit a contact form on the website',
          'Directly, when you contact us by email, phone, or WhatsApp',
          'Automatically, through our hosting provider (Netlify) processing standard HTTP request data necessary to serve the website',
          'Through Google\'s font CDN when your browser loads the website fonts',
          'Through your own browser, when it saves UI preferences to localStorage (no data leaves your device for this)',
        ]} />
      </Section>

      {/* 5 — How We Use Information */}
      <Section id="sec-5" title="5. How We Use Your Information">
        <Para>We use the information we collect for the following purposes:</Para>
        <BulletList items={[
          'To respond to your enquiry or project request',
          'To understand your business requirements and prepare a relevant service proposal',
          'To communicate with you about your enquiry via phone, email, or WhatsApp',
          'To deliver services you have engaged us to provide',
          'To maintain records of our business communications and project agreements',
          'To comply with our legal obligations under applicable Indian law',
          'To protect the security and integrity of our website',
          'To remember your visual preferences across website visits (using localStorage)',
        ]} />
        <Para>
          We do not use your personal information for automated decision-making or profiling.
          We do not use your information to send unsolicited marketing communications without
          your prior agreement.
        </Para>
      </Section>

      {/* 6 — Contact Forms */}
      <Section id="sec-6" title="6. Contact Forms">
        <Para>
          The website provides two enquiry mechanisms: the Contact page form and a Quote Estimator
          popup. Both collect your name, phone number, and optionally, email and project details.
        </Para>
        <Para>
          <strong className="text-theme-text">Important:</strong> When you submit a contact form,
          your information is used by our team to contact you directly. We respond to enquiries
          within 2 hours during business hours. Your submitted information is retained for the
          duration of our business communication and for a reasonable period thereafter in
          accordance with our retention schedule (see Section 12).
        </Para>
        <Para>
          By submitting the contact form, you confirm that the information you provide is accurate
          and that you consent to Webliix using it to respond to your enquiry.
        </Para>
        <Para>
          You may request correction or deletion of your submitted information at any time by
          contacting us at the address in Section 20.
        </Para>
      </Section>

      {/* 7 — WhatsApp */}
      <Section id="sec-7" title="7. WhatsApp Communications">
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

      {/* 8 — Browser Storage & Cookies */}
      <Section id="sec-8" title="8. Browser Storage & Cookies">
        <Para>
          The Webliix website uses browser localStorage (a browser storage mechanism similar to cookies
          but stored locally in your browser) to remember your visual preferences. This data never
          leaves your device and is not transmitted to our servers.
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
          ]}
        />

        <Para>
          In addition, Google Fonts (used to load our website typography) makes requests to Google's
          servers, which may result in Google setting cookies or processing your IP address per their
          Privacy Policy.
        </Para>

        <NoteBox>
          <strong className="text-theme-text">Cookie consent:</strong> Because the storage listed above
          is strictly functional (it only remembers your visual choices and contains no personal data),
          and because we do not currently use any analytics, advertising, or behavioural tracking
          technologies, we do not currently require a cookie consent banner. If we introduce any
          non-essential tracking in future, we will implement appropriate consent mechanisms before
          doing so and update this policy.
        </NoteBox>

        <Para>
          You can clear all locally stored preferences by clearing your browser's site data or localStorage.
          The website will continue to function normally after clearing — it will simply revert to the
          default theme and settings.
        </Para>
      </Section>

      {/* 9 — Third-Party Services */}
      <Section id="sec-9" title="9. Third-Party Services">
        <Para>
          The current webliix.in website uses the following third-party services. We only include
          services that were detected in the actual website implementation:
        </Para>
        <DataTable
          headers={['Service', 'Provider', 'Purpose', 'Data Potentially Shared', 'Privacy Reference']}
          rows={[
            [
              'Netlify (Hosting & CDN)',
              'Netlify, Inc. (USA)',
              'Hosting the website and serving files from edge servers',
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
              'WhatsApp',
              'Meta Platforms / WhatsApp LLC (USA)',
              'Business communication (user-initiated)',
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
          <strong className="text-theme-text">Services not used:</strong> The website does not currently
          use Google Analytics, Google Tag Manager, Meta Pixel, Microsoft Clarity, Hotjar, Firebase,
          Razorpay, Stripe, or any payment gateway, CRM, or email marketing platform.
          The Disclaimer page references payment gateways in the context of client projects we build —
          not in the context of webliix.in itself.
        </NoteBox>
      </Section>

      {/* 10 — Data Sharing */}
      <Section id="sec-10" title="10. Data Sharing">
        <Para>We do not sell, rent, or trade your personal information. We share information only in the following limited circumstances:</Para>
        <BulletList items={[
          'With our hosting infrastructure provider (Netlify) as an inherent part of serving the website',
          'With Google LLC through the Google Fonts CDN for font file delivery',
          'With our internal team members who need it to respond to your enquiry or deliver requested services',
          'With legal and regulatory authorities if required by applicable Indian law, a valid court order, or to protect against fraud or illegal activity',
          'In the event of a business transfer or merger, in which case data would remain subject to equivalent privacy protections',
        ]} />
        <Para>
          We do not disclose personal information to advertising networks, social media platforms,
          or any other third parties for commercial purposes.
        </Para>
      </Section>

      {/* 11 — International Transfers */}
      <Section id="sec-11" title="11. International Data Transfers">
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
          us, your personal data will be transferred to India. India does not currently have an EU
          adequacy decision. Where GDPR applies to your enquiry (for example, if you are a EU-based
          business making an enquiry about our services), we process your data based on contractual
          necessity or your explicit consent, and we take reasonable steps to protect it during
          transmission.
          {' [LEGAL REVIEW RECOMMENDED for EU data transfer safeguards as EU business grows]'}
        </Para>
      </Section>

      {/* 12 — Data Retention */}
      <Section id="sec-12" title="12. Data Retention">
        <Para>
          We retain personal information for as long as necessary to fulfil the purposes for which
          it was collected, or as required by law. Our recommended retention schedule is:
        </Para>
        <DataTable
          headers={['Data Category', 'Recommended Retention', 'Reason']}
          rows={[
            ['Contact form enquiries (where backend is implemented)', '3 years from last contact', 'Business communication record + reasonable follow-up period'],
            ['Client project records', '7 years from project completion', 'Indian contract law / tax compliance requirements'],
            ['Business communication records (email, WhatsApp)', '3 years from last communication', 'Business record / dispute resolution'],
            ['Browser localStorage (UI preferences)', 'Until user clears browser data', 'Functional only — no personal data'],
            ['Hosting/CDN server logs (Netlify)', 'As per Netlify\'s retention policy', 'We do not control this'],
            ['Google Fonts request data', 'As per Google\'s retention policy', 'We do not control this'],
          ]}
        />
        <Para>
          When data is no longer required, it is deleted or anonymised. You may also request earlier
          deletion of your personal information under Section 15.
        </Para>
        <NoteBox>
          <strong className="text-theme-text">Note:</strong> These retention periods are recommendations
          based on general business practice. Specific retention obligations under Indian law should be
          confirmed with a qualified legal professional.
        </NoteBox>
      </Section>

      {/* 13 — Data Security */}
      <Section id="sec-13" title="13. Data Security">
        <Para>
          We take reasonable technical and organisational measures to protect the personal information
          we hold. Our current security practices include:
        </Para>
        <BulletList items={[
          'HTTPS/TLS encryption for all communications between your browser and our website',
          'Deployment through Netlify\'s CDN infrastructure, which includes DDoS protection and edge security',
          'No server-side storage of form data at the application level (data is not retained in a database by the website)',
          'Limiting access to business communication tools (email, WhatsApp) to authorised team members only',
          'Regular review of third-party service security practices',
        ]} />
        <Para>
          No method of electronic transmission or storage is completely secure. While we implement
          reasonable safeguards, we cannot guarantee absolute security. In the event of a suspected
          personal data breach, we will follow the procedure described in Section 14.
        </Para>
        <Para>
          We do not disclose our internal security architecture in this public policy, as doing so
          could create security risks.
        </Para>
      </Section>

      {/* 14 — Data Breach */}
      <Section id="sec-14" title="14. Data Breach">
        <Para>
          In the event that we become aware of a personal data breach that is likely to result in
          a risk to your rights and freedoms, we will:
        </Para>
        <BulletList items={[
          'Conduct an immediate internal assessment of the nature, scope, and potential impact of the breach',
          'Take steps to contain and remedy the breach',
          'Notify the Data Protection Board of India (once it becomes operational) in accordance with the applicable requirements of the Digital Personal Data Protection Act, 2023',
          'Where required and feasible, notify affected individuals whose data may have been compromised',
        ]} />
        <Para>
          If you believe your personal data has been compromised in connection with Webliix, please
          contact us immediately using the details in Section 20.
        </Para>
      </Section>

      {/* 15 — User Rights */}
      <Section id="sec-15" title="15. Your Rights">
        <Para>
          Under the Digital Personal Data Protection Act, 2023 (India), you have the following rights
          as a Data Principal:
        </Para>
        <DataTable
          headers={['Right', 'Description', 'How to Exercise']}
          rows={[
            ['Right to Information', 'Know what personal data we hold about you and how it is processed', 'Email our privacy contact (Section 20)'],
            ['Right to Access', 'Obtain a summary of your personal data we are processing', 'Email our privacy contact'],
            ['Right to Correction', 'Request correction of inaccurate or incomplete personal data', 'Email our privacy contact'],
            ['Right to Erasure', 'Request deletion of your personal data where it is no longer needed for its original purpose', 'Email our privacy contact'],
            ['Right to Grievance Redressal', 'File a complaint with our Grievance Officer (see Section 20)', 'Email our Grievance Officer'],
            ['Right to Nominate', 'Nominate another person to exercise your rights in the event of your death or incapacity (India DPDPA)', 'Email our privacy contact'],
            ['Right to Withdraw Consent', 'Withdraw consent you previously gave — this does not affect lawfulness of prior processing', 'Email our privacy contact'],
          ]}
        />

        <Para>
          If you are located in the European Economic Area (EU/EEA), you also have the following rights
          under GDPR where applicable:
        </Para>
        <BulletList items={[
          'Right to restriction of processing',
          'Right to data portability (where processing is based on consent or contract)',
          'Right to object to processing based on legitimate interests',
          'Right to lodge a complaint with your national data protection supervisory authority',
        ]} />

        <Para>
          We will respond to rights requests within a reasonable period. Under India DPDPA, we
          acknowledge complaints within a reasonable time and resolve them as promptly as practicable.
        </Para>
        <Para>
          To exercise any right listed above, please contact our Grievance Officer using the details
          in Section 20. We may ask you to verify your identity before processing your request.
        </Para>
      </Section>

      {/* 16 — Children's Privacy */}
      <Section id="sec-16" title="16. Children's Privacy">
        <Para>
          Webliix's website and services are directed at businesses and adult professionals. We do not
          knowingly collect personal data from individuals under the age of 18.
        </Para>
        <Para>
          Under the Digital Personal Data Protection Act, 2023 (India), processing personal data of
          children (defined as persons under 18 years of age) requires verifiable parental or guardian
          consent. We do not seek such consent because our services are not intended for children.
        </Para>
        <Para>
          If you believe that a person under 18 has submitted personal information through our website
          without appropriate parental consent, please contact us immediately at the address in
          Section 20, and we will take steps to delete that information.
        </Para>
      </Section>

      {/* 17 — Third-Party Links */}
      <Section id="sec-17" title="17. Third-Party Links">
        <Para>
          The Webliix website may contain links to third-party websites, platforms, and services —
          including our social media pages (Instagram, LinkedIn, Facebook, GitHub), client portfolio
          live previews, and external tools. These links are provided for your convenience.
        </Para>
        <Para>
          When you follow a link to a third-party website, you leave webliix.in and that website's
          own privacy policy governs the collection and use of any information you provide or that is
          collected about you. We have no control over and are not responsible for the privacy practices
          of any third-party website.
        </Para>
        <Para>
          We encourage you to review the privacy policy of any website you visit after leaving webliix.in.
        </Para>
      </Section>

      {/* 18 — Legal Basis */}
      <Section id="sec-18" title="18. Legal Basis for Processing">
        <Para>
          Under India's Digital Personal Data Protection Act, 2023, we process your personal data on
          the following legal bases:
        </Para>
        <DataTable
          headers={['Processing Activity', 'Legal Basis', 'Notes']}
          rows={[
            ['Processing contact form enquiries', 'Consent + steps necessary to enter into a contract', 'You choose to submit the form'],
            ['Responding to WhatsApp messages', 'Consent (user-initiated contact)', 'You choose to contact us'],
            ['Storing UI preferences in localStorage', 'Legitimate interest', 'Functional improvement; no personal data involved'],
            ['Website hosting (Netlify CDN logs)', 'Legitimate interest', 'Necessary to serve the website; processed by Netlify'],
            ['Maintaining business records', 'Legitimate interest + legal obligation', 'Business and tax record-keeping requirements'],
            ['Legal disclosures to authorities', 'Legal obligation', 'Required by applicable law'],
          ]}
        />
        <Para>
          Where we rely on consent, you may withdraw your consent at any time. Withdrawal does not
          affect the lawfulness of any processing we carried out before you withdrew consent.
        </Para>
      </Section>

      {/* 19 — Policy Updates */}
      <Section id="sec-19" title="19. Policy Updates">
        <Para>
          We may update this Privacy Policy from time to time to reflect changes in our services,
          technology, legal requirements, or business practices. When we make material changes, we will:
        </Para>
        <BulletList items={[
          'Update the "Last Updated" date at the top of this page',
          'Post the revised policy at the same URL: webliix.in/privacy-policy',
          'Where required by law or good practice, take additional steps to notify users of significant changes',
        ]} />
        <Para>
          We recommend reviewing this page periodically. Continued use of the website after changes
          take effect constitutes your acknowledgement of the updated policy. This policy is scheduled
          for review in {REVIEW_DATE}.
        </Para>
      </Section>

      {/* 20 — Grievance & Privacy Contact */}
      <Section id="sec-20" title="20. Grievance & Privacy Contact">
        <Para>
          Under the Digital Personal Data Protection Act, 2023 (India), Webliix designates the
          following as its Grievance Officer for privacy-related complaints and data rights requests:
        </Para>

        <InfoBox>
          <p className="text-theme-text font-bold text-sm mb-2">Grievance Officer — WEBLIIX</p>
          <p>Name: <span className="text-theme-primary">[GRIEVANCE_OFFICER_NAME — to be formally designated]</span></p>
          <p>Email: <a href={`mailto:${businessConfig.businessEmail}`} className="text-theme-primary underline">{businessConfig.businessEmail}</a></p>
          <p>Phone: <a href={`tel:${businessConfig.businessPhone.replace(/\s+/g, '')}`} className="text-theme-primary">{businessConfig.businessPhone}</a></p>
          <p>Address: {businessConfig.businessAddress}</p>
          <p className="mt-2 text-theme-muted/80 text-[11px]">
            We acknowledge privacy complaints within 48 business hours and aim to resolve them within 30 days.
          </p>
        </InfoBox>

        <Para>
          If you are not satisfied with our response to your complaint, you have the right to refer
          the matter to the Data Protection Board of India, once it becomes operational.
        </Para>

        {/* Legal disclaimer */}
        <div className="mt-6 p-4 rounded-2xl border border-theme-border/60 bg-theme-border/5 text-[11px] text-theme-muted leading-relaxed space-y-2">
          <p className="font-semibold text-theme-text text-xs">Important Notice</p>
          <p>
            This Privacy Policy represents Webliix's good-faith implementation of privacy best practices
            based on the current webliix.in website implementation. It is not a complete substitute for
            qualified legal advice. Areas marked <span className="text-theme-primary font-mono">[LEGAL REVIEW REQUIRED]</span> should
            be reviewed by a qualified Indian privacy law professional before publishing as final.
          </p>
          <p>
            This policy covers webliix.in only. Data processed by Webliix as part of client project delivery
            is governed by separate client agreements and is not covered by this policy.
          </p>
          <p>See also: <Link to="/terms-and-conditions" className="text-theme-primary underline">Terms & Conditions</Link>
            {' · '}<Link to="/disclaimer" className="text-theme-primary underline">Disclaimer</Link>
            {' · '}<Link to="/refund-cancellation" className="text-theme-primary underline">Refund Policy</Link>
            {' · '}<Link to="/business-information" className="text-theme-primary underline">Business Information</Link>
          </p>
        </div>
      </Section>

    </LegalLayout>
  );
}
