import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, Building2, Award, FileCode2, MapPin, CheckCircle2, ArrowUpRight, Copy, Check, ExternalLink, HelpCircle } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixIcon from '../components/ui/WebliixIcon';
import WebliixButton from '../components/ui/WebliixButton';
import LegalLayout from '../components/legal/LegalLayout';

export default function BusinessInformation() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyUdyam = () => {
    navigator.clipboard.writeText(businessConfig.udyamNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tocItems = [
    { id: 'business-identity', title: 'A. Business Identity' },
    { id: 'udyam-registration', title: 'B. Udyam MSME Registration' },
    { id: 'business-activity', title: 'C. Business Activity & NIC' },
    { id: 'business-location', title: 'D. Business Location & Address' },
    { id: 'gst-status', title: 'E. GST Registration Status' },
    { id: 'legal-governance', title: 'F. Legal & Compliance Info' }
  ];

  return (
    <LegalLayout
      title="Business Information & Compliance"
      subtitle="Transparent. Professional. Registered. Official business identity and regulatory compliance information for WEBLIIX."
      categoryTag="Verified Regulatory Data"
      lastUpdated="August 2026"
      seoTitle="Business Information & MSME Registration | WEBLIIX"
      seoDescription="View official business, Udyam MSME registration and compliance information for WEBLIIX."
      canonicalPath="/business-information"
      tableOfContents={tocItems}
    >
      {/* SECTION A: BUSINESS IDENTITY */}
      <section id="business-identity" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <WebliixIcon icon={Building2} variant="section" size="sm" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            A. Business Identity
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          WEBLIIX is a technology growth enterprise specializing in website engineering, software development, Google Maps local SEO, and digital brand identity platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          <WebliixCard variant="panel" className="p-4 space-y-1">
            <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block">Enterprise Name</span>
            <span className="text-sm font-display font-bold text-theme-text">{businessConfig.name}</span>
          </WebliixCard>

          <WebliixCard variant="panel" className="p-4 space-y-1">
            <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block">Enterprise Category</span>
            <span className="text-sm font-display font-bold text-theme-primary">{businessConfig.enterpriseType}</span>
          </WebliixCard>

          <WebliixCard variant="panel" className="p-4 space-y-1">
            <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block">Primary Sector</span>
            <span className="text-sm font-display font-bold text-theme-text">{businessConfig.majorActivity}</span>
          </WebliixCard>
        </div>
      </section>

      {/* SECTION B: UDYAM / MSME REGISTRATION CARD */}
      <section id="udyam-registration" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <WebliixIcon icon={Award} variant="section" size="sm" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            B. Udyam MSME Registration
          </h2>
        </div>

        {/* Premium Tech Registration Card */}
        <WebliixCard variant="featured" accentColor="primary" className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-theme-border/60 pb-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-mono font-bold border border-theme-primary/30 inline-block mb-1">
                Udyam Registered Micro Enterprise
              </span>
              <h3 className="text-2xl font-display font-bold text-theme-text">{businessConfig.name}</h3>
            </div>

            {/* Official Badge */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 theme-rounded-badge bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold shrink-0">
              <CheckCircle2 className="w-4 h-4" /> Official MSME Registration
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WebliixCard variant="panel" className="p-4 space-y-1">
              <span className="text-xs font-mono text-theme-muted uppercase tracking-wider block">
                Udyam Registration Number
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono font-bold text-sm sm:text-base text-theme-primary break-all">
                  {businessConfig.udyamNumber}
                </span>
                <WebliixButton
                  variant="utility"
                  size="sm"
                  iconOnly
                  icon={copied ? Check : Copy}
                  onClick={handleCopyUdyam}
                  aria-label="Copy Registration Number"
                />
              </div>
            </WebliixCard>

            <WebliixCard variant="panel" className="p-4 space-y-1">
              <span className="text-xs font-mono text-theme-muted uppercase tracking-wider block">
                Classification Year
              </span>
              <span className="font-mono font-bold text-sm sm:text-base text-theme-text">
                {businessConfig.classificationYear}
              </span>
            </WebliixCard>

            <WebliixCard variant="panel" className="p-4 space-y-1">
              <span className="text-xs font-mono text-theme-muted uppercase tracking-wider block">
                NIC 5-Digit Code
              </span>
              <span className="font-mono font-bold text-sm sm:text-base text-theme-text">
                {businessConfig.nicCode}
              </span>
            </WebliixCard>

            <WebliixCard variant="panel" className="p-4 space-y-1">
              <span className="text-xs font-mono text-theme-muted uppercase tracking-wider block">
                Unit Name
              </span>
              <span className="font-mono font-bold text-sm sm:text-base text-theme-text">
                {businessConfig.unitName}
              </span>
            </WebliixCard>
          </div>

          <WebliixCard variant="panel" className="p-4 space-y-1">
            <span className="font-mono font-semibold text-theme-primary uppercase block text-xs">NIC Description</span>
            <p className="text-theme-text font-medium text-xs">{businessConfig.nicDescription}</p>
          </WebliixCard>

          {/* Conditional Official Verification Link */}
          {businessConfig.udyamVerificationUrl ? (
            <div className="pt-2">
              <a
                href={businessConfig.udyamVerificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <WebliixButton variant="primary" size="sm" icon={ExternalLink}>
                  Verify Official MSME Record
                </WebliixButton>
              </a>
            </div>
          ) : null}
        </WebliixCard>
      </section>

      {/* SECTION C: BUSINESS ACTIVITY */}
      <section id="business-activity" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <WebliixIcon icon={FileCode2} variant="section" size="sm" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            C. National Industry Classification (NIC) Activity
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          WEBLIIX is classified under National Industry Classification (NIC) 2008 for Information Technology and Computer Services:
        </p>

        <div className="space-y-3">
          <WebliixCard variant="panel" className="p-4 flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-theme-muted">NIC 2-Digit (62):</span>
            <span className="font-bold text-theme-text">Computer Programming, Consultancy and Related Activities</span>
          </WebliixCard>

          <WebliixCard variant="panel" className="p-4 flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-theme-muted">NIC 4-Digit (6209):</span>
            <span className="font-bold text-theme-text">Other Information Technology and Computer Service Activities</span>
          </WebliixCard>

          <WebliixCard variant="panel" className="p-4 flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-theme-muted">NIC 5-Digit Code (62099):</span>
            <span className="font-bold text-theme-primary">Other Information Technology and Computer Service Activities n.e.c.</span>
          </WebliixCard>
        </div>
      </section>

      {/* SECTION D: BUSINESS LOCATION */}
      <section id="business-location" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <WebliixIcon icon={MapPin} variant="section" size="sm" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            D. Business Location & Addresses
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WebliixCard variant="panel" className="p-5 space-y-2">
            <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider block">
              Registered Unit Location
            </span>
            <p className="text-xs text-theme-text font-medium leading-relaxed">
              {businessConfig.businessAddress}
            </p>
          </WebliixCard>

          <WebliixCard variant="panel" className="p-5 space-y-2">
            <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider block">
              NCR Corporate Hub
            </span>
            <p className="text-xs text-theme-text font-medium leading-relaxed">
              {businessConfig.corporateAddress}
            </p>
          </WebliixCard>
        </div>
      </section>

      {/* SECTION E: GST REGISTRATION STATUS (CONFIGURATION DRIVEN) */}
      <section id="gst-status" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <WebliixIcon icon={ShieldCheck} variant="section" size="sm" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            E. GST Registration Status
          </h2>
        </div>

        <WebliixCard variant="standard" className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-display font-bold text-theme-text">GST Registration</span>
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
              businessConfig.gstRegistered
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
            }`}>
              {businessConfig.gstRegistered ? 'Active GSTIN' : 'Registration Pending'}
            </span>
          </div>

          {businessConfig.gstRegistered && businessConfig.gstin ? (
            <div className="space-y-2 pt-2 text-xs font-mono">
              <p><span className="text-theme-muted">GSTIN:</span> <strong className="text-theme-primary">{businessConfig.gstin}</strong></p>
              <p><span className="text-theme-muted">Registered Name:</span> <strong className="text-theme-text">{businessConfig.gstRegisteredName}</strong></p>
            </div>
          ) : (
            <p className="text-xs text-theme-muted leading-relaxed">
              {businessConfig.gstPendingNotice}
            </p>
          )}
        </WebliixCard>
      </section>

      {/* SECTION F: LEGAL & COMPLIANCE LINKS */}
      <section id="legal-governance" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <WebliixIcon icon={HelpCircle} variant="section" size="sm" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            F. Legal Governance & Public Policies
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          For full regulatory compliance and consumer protection policies, review our official legal documents below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          <Link to="/privacy-policy">
            <WebliixCard variant="panel" clickable className="p-4 text-xs font-mono font-semibold text-theme-text hover:text-theme-primary flex items-center justify-between group">
              <span>Privacy Policy</span>
              <ArrowUpRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
            </WebliixCard>
          </Link>

          <Link to="/terms-and-conditions">
            <WebliixCard variant="panel" clickable className="p-4 text-xs font-mono font-semibold text-theme-text hover:text-theme-primary flex items-center justify-between group">
              <span>Terms & Conditions</span>
              <ArrowUpRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
            </WebliixCard>
          </Link>

          <Link to="/refund-cancellation">
            <WebliixCard variant="panel" clickable className="p-4 text-xs font-mono font-semibold text-theme-text hover:text-theme-primary flex items-center justify-between group">
              <span>Refund Policy</span>
              <ArrowUpRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
            </WebliixCard>
          </Link>

          <Link to="/disclaimer">
            <WebliixCard variant="panel" clickable className="p-4 text-xs font-mono font-semibold text-theme-text hover:text-theme-primary flex items-center justify-between group">
              <span>Disclaimer</span>
              <ArrowUpRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
            </WebliixCard>
          </Link>
        </div>
      </section>
    </LegalLayout>
  );
}
