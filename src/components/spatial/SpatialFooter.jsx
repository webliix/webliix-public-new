import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, Award } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { businessConfig } from '../../config/businessConfig';
import { useTheme } from '../../context/ThemeContext';

export default function SpatialFooter() {
  const { currentTheme } = useTheme();

  const logoSrc = currentTheme.isDark === false
    ? siteConfig.brand.logoLight
    : siteConfig.brand.logoDark;

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: siteConfig.brand.socials.linkedin,
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: siteConfig.brand.socials.instagram,
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: siteConfig.brand.socials.facebook,
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: siteConfig.brand.socials.github,
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative z-10 border-t border-theme-border/60 glass-spatial mt-20 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Overview & Social Handles */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="inline-block group">
            <img
              src={logoSrc}
              alt={siteConfig.brand.name}
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <p className="text-theme-muted text-xs sm:text-sm max-w-sm leading-relaxed">
            WEBLIIX is your trusted digital technology partner for custom web engineering, local SEO engines, branding, and software development.
          </p>

          {/* Udyam MSME Compliance Badge */}
          <Link to="/business-information" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-theme-primary/15 text-theme-primary border border-theme-primary/30 text-xs font-mono font-semibold hover:bg-theme-primary hover:text-white transition">
            <Award className="w-4 h-4 shrink-0" />
            <span>Udyam Reg. No. {businessConfig.udyamNumber}</span>
          </Link>

          {/* Social Media Handles */}
          <div className="pt-2">
            <span className="text-xs font-mono font-semibold text-theme-primary uppercase tracking-wider block mb-2">
              Connect With Us
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-xl glass-spatial border border-theme-border/60 hover:border-theme-primary hover:text-theme-primary text-theme-muted transition group"
                >
                  <span className="group-hover:scale-110 transition-transform block">
                    {social.svg}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Core Solutions Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-theme-text uppercase tracking-wider">
            Solutions
          </h4>
          <ul className="space-y-2 text-xs text-theme-muted">
            {siteConfig.services.map((s) => (
              <li key={s.id}>
                <Link to="/services" className="hover:text-theme-primary transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-theme-text uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2 text-xs text-theme-muted">
            <li><Link to="/" className="hover:text-theme-primary transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-theme-primary transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-theme-primary transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-theme-primary transition">Portfolio Showcase</Link></li>
            <li><Link to="/blog" className="hover:text-theme-primary transition">Knowledge Hub</Link></li>
            <li><Link to="/tools" className="hover:text-theme-primary transition">Free Meta Tag Tool</Link></li>
            <li><Link to="/contact" className="hover:text-theme-primary transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Business & Legal Area */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-theme-text uppercase tracking-wider">
            Business & Legal
          </h4>
          <ul className="space-y-2 text-xs text-theme-muted">
            <li><Link to="/business-information" className="hover:text-theme-primary font-semibold text-theme-primary transition flex items-center gap-1"><span>Business Information</span></Link></li>
            <li><Link to="/privacy-policy" className="hover:text-theme-primary transition">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-theme-primary transition">Terms & Conditions</Link></li>
            <li><Link to="/refund-cancellation" className="hover:text-theme-primary transition">Refund & Cancellation</Link></li>
            <li><Link to="/disclaimer" className="hover:text-theme-primary transition">Disclaimer</Link></li>
          </ul>

          <div className="pt-2 text-[11px] font-mono text-theme-muted space-y-1">
            <p className="text-theme-text font-bold">Udyam Registered Micro Enterprise</p>
            {businessConfig.gstRegistered && businessConfig.gstin && (
              <p className="text-theme-primary">GSTIN: {businessConfig.gstin}</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar & Legal */}
      <div className="max-w-7xl mx-auto pt-12 mt-10 border-t border-theme-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-muted">
        <div>
          © {new Date().getFullYear()} WEBLIIX ({businessConfig.udyamNumber}). All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="hover:text-theme-primary transition">Privacy</Link>
          <Link to="/terms-and-conditions" className="hover:text-theme-primary transition">Terms</Link>
          <Link to="/refund-cancellation" className="hover:text-theme-primary transition">Refunds</Link>
          <Link to="/disclaimer" className="hover:text-theme-primary transition">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
