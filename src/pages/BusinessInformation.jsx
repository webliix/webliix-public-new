import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, Building2, Award, FileCode2, MapPin, CheckCircle2, ArrowUpRight, Copy, Check, ExternalLink, HelpCircle } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import SpatialButton from '../components/ui/SpatialButton';
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
          <Building2 className="w-5 h-5 text-theme-primary" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            A. Business Identity
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          WEBLIIX is a technology growth enterprise specializing in website engineering, software development, Google Maps local SEO, and digital brand identity platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl glass-spatial border border-theme-border space-y-1">
            <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block">Enterprise Name</span>
            <span className="text-sm font-display font-bold text-theme-text">{businessConfig.name}</span>
          </div>

          <div className="p-4 rounded-2xl glass-spatial border border-theme-border space-y-1">
            <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block">Enterprise Category</span>
            <span className="text-sm font-display font-bold text-theme-primary">{businessConfig.enterpriseType}</span>
          </div>

          <div className="p-4 rounded-2xl glass-spatial border border-theme-border space-y-1">
            <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block">Primary Sector</span>
            <span className="text-sm font-display font-bold text-theme-text">{businessConfig.majorActivity}</span>
          </div>
        </div>
      </section>

      {/* SECTION B: UDYAM / MSME REGISTRATION CARD */}
      <section id="udyam-registration" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <Award className="w-5 h-5 text-theme-primary" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            B. Udyam MSME Registration
          </h2>
        </div>

        {/* Premium Tech Registration Card */}
        <div className="p-6 sm:p-8 rounded-3xl glass-spatial border border-theme-primary/40 shadow-spatial space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-theme-border/60 pb-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-mono font-bold border border-theme-primary/30 inline-block mb-1">
                Udyam Registered Micro Enterprise
              </span>
              <h3 className="text-2xl font-display font-bold text-theme-text">{businessConfig.name}</h3>
            </div>

            {/* Official Badge */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold shrink-0">
              <CheckCircle2 className="w-4 h-4" /> Official MSME Registration
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-theme-bg/60 border border-theme-border space-y-1">
              <span className="text-xs font-mono text-theme-muted uppercase tracking-wider block">
                Udyam Registration Number
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono font-bold text-sm sm:text-base text-theme-primary break-all">
                  {businessConfig.udyamNumber}
                </span>
                <button
                  onClick={handleCopyUdyam}
                  className="p-1.5 rounded-lg glass-spatial text-theme-muted hover:text-theme-primary transition shrink-0"
                  title="Copy Registration Number"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-theme-bg/60 border border-theme-border space-y-1">
              <span className="text-xs font-mono text-theme-muted uppercase tracking-wider block">
                Classification Year
              </span>
              <span className="font-mono font-bold text-sm sm:text-base text-theme-text">
                {businessConfig.classificationYear}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-theme-bg/60 border border-theme-border space-y-1">
              <span className="text-xs font-mono text-theme-muted uppercase tracking-wider block">
                NIC 5-Digit Code
              </span>
              <span className="font-mono font-bold text-sm sm:text-base text-theme-text">
                {businessConfig.nicCode}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-theme-bg/60 border border-theme-border space-y-1">
              <span className="text-xs font-mono text-theme-muted uppercase tracking-wider block">
                Unit Name
              </span>
              <span className="font-mono font-bold text-sm sm:text-base text-theme-text">
                {businessConfig.unitName}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-theme-bg/40 border border-theme-border/60 text-xs text-theme-muted space-y-1">
            <span className="font-mono font-semibold text-theme-primary uppercase block">NIC Description</span>
            <p className="text-theme-text font-medium">{businessConfig.nicDescription}</p>
          </div>

          {/* Conditional Official Verification Link */}
          {businessConfig.udyamVerificationUrl ? (
            <div className="pt-2">
              <a
                href={businessConfig.udyamVerificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <SpatialButton variant="primary" icon={ExternalLink} className="text-xs py-2 px-4">
                  Verify Official MSME Record
                </SpatialButton>
              </a>
            </div>
          ) : null}
        </div>
      </section>

      {/* SECTION C: BUSINESS ACTIVITY */}
      <section id="business-activity" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <FileCode2 className="w-5 h-5 text-theme-primary" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            C. National Industry Classification (NIC) Activity
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          WEBLIIX is classified under National Industry Classification (NIC) 2008 for Information Technology and Computer Services:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-2xl glass-spatial border border-theme-border flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-theme-muted">NIC 2-Digit (62):</span>
            <span className="font-bold text-theme-text">Computer Programming, Consultancy and Related Activities</span>
          </div>

          <div className="p-4 rounded-2xl glass-spatial border border-theme-border flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-theme-muted">NIC 4-Digit (6209):</span>
            <span className="font-bold text-theme-text">Other Information Technology and Computer Service Activities</span>
          </div>

          <div className="p-4 rounded-2xl glass-spatial border border-theme-border flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-theme-muted">NIC 5-Digit Code (62099):</span>
            <span className="font-bold text-theme-primary">Other Information Technology and Computer Service Activities n.e.c.</span>
          </div>
        </div>
      </section>

      {/* SECTION D: BUSINESS LOCATION */}
      <section id="business-location" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <MapPin className="w-5 h-5 text-theme-primary" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            D. Business Location & Addresses
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl glass-spatial border border-theme-border space-y-2">
            <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider block">
              Registered Unit Location
            </span>
            <p className="text-xs text-theme-text font-medium leading-relaxed">
              {businessConfig.businessAddress}
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-spatial border border-theme-border space-y-2">
            <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider block">
              NCR Corporate Hub
            </span>
            <p className="text-xs text-theme-text font-medium leading-relaxed">
              {businessConfig.corporateAddress}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION E: GST REGISTRATION STATUS (CONFIGURATION DRIVEN) */}
      <section id="gst-status" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <ShieldCheck className="w-5 h-5 text-theme-primary" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            E. GST Registration Status
          </h2>
        </div>

        <div className="p-6 rounded-3xl glass-spatial border border-theme-border space-y-3">
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
        </div>
      </section>

      {/* SECTION F: LEGAL & COMPLIANCE LINKS */}
      <section id="legal-governance" className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-theme-border/60 pb-3">
          <HelpCircle className="w-5 h-5 text-theme-primary" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
            F. Legal Governance & Public Policies
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
          For full regulatory compliance and consumer protection policies, review our official legal documents below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          <Link to="/privacy-policy" className="p-4 rounded-2xl glass-spatial border border-theme-border hover:border-theme-primary text-xs font-mono font-semibold text-theme-text hover:text-theme-primary transition flex items-center justify-between group">
            <span>Privacy Policy</span>
            <ArrowUpRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link to="/terms-and-conditions" className="p-4 rounded-2xl glass-spatial border border-theme-border hover:border-theme-primary text-xs font-mono font-semibold text-theme-text hover:text-theme-primary transition flex items-center justify-between group">
            <span>Terms & Conditions</span>
            <ArrowUpRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link to="/refund-cancellation" className="p-4 rounded-2xl glass-spatial border border-theme-border hover:border-theme-primary text-xs font-mono font-semibold text-theme-text hover:text-theme-primary transition flex items-center justify-between group">
            <span>Refund Policy</span>
            <ArrowUpRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link to="/disclaimer" className="p-4 rounded-2xl glass-spatial border border-theme-border hover:border-theme-primary text-xs font-mono font-semibold text-theme-text hover:text-theme-primary transition flex items-center justify-between group">
            <span>Disclaimer</span>
            <ArrowUpRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </LegalLayout>
  );
}
