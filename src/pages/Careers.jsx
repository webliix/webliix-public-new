import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  DollarSign,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Award,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Clock,
  TrendingUp,
  FileCheck,
  Handshake,
  Send,
  AlertCircle,
  Wallet,
  Code,
  Laptop,
  Palette,
  Search,
  Globe,
  HeartHandshake,
  MapPin,
  FileText,
  Smile
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import {
  WebliixInput,
  WebliixTextarea,
  WebliixSelect,
  WebliixCheckbox,
  WebliixFieldGroup,
  netlifyEncode
} from '../components/ui/WebliixInput';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { useAudio } from '../context/AudioContext';

export default function Careers() {
  const { playSound } = useAudio();
  const [appType, setAppType] = useState('job'); // 'job' | 'partner'
  const [selectedRole, setSelectedRole] = useState('Frontend React / UI Engineer');

  const [formData, setFormData] = useState({
    applicationType: 'Job / Internship Application',
    position: 'Frontend React / UI Engineer',
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '1-3 Years',
    portfolioUrl: '',
    resumeLink: '',
    message: '',
    payoutMethod: 'Direct Bank Transfer / UPI',
    payoutDetails: '',
    clientLead: '',
    agreementAccepted: false
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTypeSwitch = (type) => {
    setAppType(type);
    setFormData(prev => ({
      ...prev,
      applicationType: type === 'job' ? 'Job / Internship Application' : 'Growth & Business Partner Program',
      position: type === 'job' ? selectedRole : 'Strategic Growth Partner'
    }));
    playSound('tab');
  };

  const handleRoleSelect = (roleTitle) => {
    setSelectedRole(roleTitle);
    setFormData(prev => ({
      ...prev,
      position: roleTitle
    }));
    setAppType('job');
    // Scroll to form smoothly
    const formEl = document.getElementById('career-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (appType === 'partner' && !formData.agreementAccepted) {
      setErrorMessage('Please accept the Strategic Partner Service Agreement to proceed.');
      setFormStatus('error');
      playSound('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');
    playSound('click');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: netlifyEncode({
          'form-name': 'careers-and-partner-application',
          ...formData
        })
      });

      if (response.ok) {
        setFormStatus('success');
        playSound('success');
      } else {
        throw new Error('Form submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Application submission error:', err);
      setErrorMessage('There was an issue submitting your application. Please reach out to us directly on WhatsApp or Email.');
      setFormStatus('error');
      playSound('error');
    }
  };

  const openRoles = [
    {
      id: 'frontend',
      title: 'Frontend React / UI Engineer',
      type: 'Full-Time / Internship',
      location: 'Remote (India)',
      tag: 'Engineering',
      icon: Code,
      desc: 'Build high-performance, spatial web applications using React, Vite, TailwindCSS, and Framer Motion with sub-second loading speeds.',
      requirements: ['Strong proficiency in React.js, TailwindCSS & modern ES6+', 'Eye for micro-interactions, responsive UI & Core Web Vitals', 'Familiarity with Git and component architecture']
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Node.js Developer',
      type: 'Full-Time / Contract',
      location: 'Remote (India)',
      tag: 'Backend & APIs',
      icon: Laptop,
      desc: 'Architect scalable Node.js/Express backends, RESTful APIs, database schemas (PostgreSQL / MongoDB), and secure payment gateway webhooks.',
      requirements: ['Hands-on experience with Node.js, Express, REST APIs & SQL/NoSQL', 'Integration experience with Razorpay/Stripe and Auth systems', 'Clean code practices, error handling & automated testing']
    },
    {
      id: 'ui-ux',
      title: 'UI/UX & Spatial Product Designer',
      type: 'Contract / Part-Time',
      location: 'Remote (Global)',
      tag: 'Design',
      icon: Palette,
      desc: 'Create modern spatial interfaces, glassmorphism design tokens, wireframes, and design systems in Figma that elevate brand credibility.',
      requirements: ['Strong portfolio showcasing web UI design systems in Figma', 'Understanding of responsive grid layouts & accessibility', 'Experience designing high-converting client landing pages']
    },
    {
      id: 'seo-growth',
      title: 'SEO Specialist & Growth Marketer',
      type: 'Part-Time / Performance',
      location: 'Remote (India)',
      tag: 'Growth Marketing',
      icon: Search,
      desc: 'Execute data-driven search dominance campaigns, technical audits, Google Business Profile optimizations, and content silo architectures.',
      requirements: ['Proven track record in On-Page & Technical SEO ranking', 'Google Business Profile (GMB) optimization expertise', 'Experience with Google Search Console & GA4']
    },
    {
      id: 'partner',
      title: 'Strategic Growth & Referral Partner',
      type: 'Revenue Share / Performance',
      location: 'Remote (Global)',
      tag: 'Strategic Partner',
      icon: DollarSign,
      desc: 'Introduce prospective businesses seeking web development, e-commerce, or enterprise software solutions and earn competitive revenue-share compensation on confirmed project milestones.',
      requirements: ['Established network of business contacts, founders, or agencies', 'Professional client introduction & coordination', 'Direct milestone-based revenue share distributions']
    }
  ];

  const companyPerks = [
    {
      icon: Globe,
      title: 'Remote-First & Async Culture',
      desc: 'Work from wherever you are most productive. We respect your autonomy with flexible working hours and clear ownership.'
    },
    {
      icon: Zap,
      title: 'Modern Spatial Tech Stack',
      desc: 'No legacy maintenance. Build with Vite, React 19, TailwindCSS, WebGL canvas, and cutting-edge frontend architecture.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation & Revenue Share',
      desc: 'Fair, transparent compensation with additional performance revenue share opportunities across our service ecosystem.'
    },
    {
      icon: HeartHandshake,
      title: 'Rapid Mentorship & Growth',
      desc: 'Work directly alongside our founding engineers and designers to accelerate your professional craft and leadership.'
    },
    {
      icon: Award,
      title: 'High-Visibility Projects',
      desc: 'Your code and design ship directly to real-world clients across India, the US, Canada, and Europe.'
    },
    {
      icon: Clock,
      title: 'Prompt Payouts & Zero Red Tape',
      desc: 'Direct milestone-based payouts via Bank Transfer or UPI with zero corporate delays or endless approvals.'
    }
  ];

  const hiringSteps = [
    {
      num: '01',
      title: 'Apply Online',
      desc: 'Submit the application form below with your portfolio or partner background in under 2 minutes.'
    },
    {
      num: '02',
      title: 'Quick 48-Hour Review',
      desc: 'Our team reviews your background and work samples. We respond to every relevant submission within 48 hours.'
    },
    {
      num: '03',
      title: 'Strategic Discussion',
      desc: 'A friendly, collaborative video or voice chat focusing on your background, problem-solving approach, and goals.'
    },
    {
      num: '04',
      title: 'Offer & Onboarding',
      desc: 'Receive your formal agreement or partner credentials and start collaborating immediately.'
    }
  ];

  const faqs = [
    {
      q: 'Can I apply if I am a student or recent graduate?',
      a: 'Yes! We value practical portfolio proof, curiosity, and code quality over formal degrees. If you have built impressive personal projects in React, Node, or Figma, we would love to see your work.'
    },
    {
      q: 'How does the Growth & Referral Partner Program operate?',
      a: 'When you introduce a qualified client who requires a website, e-commerce store, or custom software solution, Webliix leads the technical discovery, scoping, and development. Upon confirmed project milestones, revenue-share compensation is distributed directly to your designated account.'
    },
    {
      q: 'What is the working arrangement at Webliix?',
      a: 'We operate as a remote-first, agile agency. Roles can be full-time, contract, or project-based with flexible working schedules.'
    },
    {
      q: 'How quickly do you respond to applications?',
      a: 'We review all submissions within 2 business days. If there is a mutual fit, our team reaches out directly via WhatsApp or email to schedule a conversation.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Careers &amp; Growth Partner Program | {siteConfig.brand.name}</title>
        <meta
          name="description"
          content="Explore career opportunities at Webliix. Join our engineering, design, and strategic partner teams. Remote-first culture, high-impact projects, and revenue-share incentives."
        />
        <link rel="canonical" href="https://webliix.com/careers" />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Careers &amp; Strategic Partnerships
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Build the Future with <span className="text-shimmer">Webliix</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Join an agile engineering and design collective. Whether you want to craft high-performance code, design spatial interfaces, or collaborate as a strategic growth partner, thrive with us.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#open-roles">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              View Open Roles
            </WebliixButton>
          </a>
          <a href="#career-form">
            <WebliixButton variant="secondary" size="lg" icon={Handshake}>
              Partner Network
            </WebliixButton>
          </a>
        </div>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <WebliixCard variant="stat" className="p-5 sm:p-6 text-center border border-theme-border">
          <div className="text-3xl sm:text-5xl font-display font-extrabold text-theme-primary mb-1">
            100%
          </div>
          <div className="text-xs uppercase tracking-wider font-semibold text-theme-muted">
            Remote &amp; Async
          </div>
        </WebliixCard>

        <WebliixCard variant="stat" className="p-5 sm:p-6 text-center border border-theme-border">
          <div className="text-3xl sm:text-5xl font-display font-extrabold text-theme-primary mb-1">
            Revenue
          </div>
          <div className="text-xs uppercase tracking-wider font-semibold text-theme-muted">
            Share Distribution
          </div>
        </WebliixCard>

        <WebliixCard variant="stat" className="p-5 sm:p-6 text-center border border-theme-border">
          <div className="text-3xl sm:text-5xl font-display font-extrabold text-theme-primary mb-1">
            48h
          </div>
          <div className="text-xs uppercase tracking-wider font-semibold text-theme-muted">
            Response Guarantee
          </div>
        </WebliixCard>

        <WebliixCard variant="stat" className="p-5 sm:p-6 text-center border border-theme-border">
          <div className="text-3xl sm:text-5xl font-display font-extrabold text-theme-primary mb-1">
            Global
          </div>
          <div className="text-xs uppercase tracking-wider font-semibold text-theme-muted">
            Client Impact
          </div>
        </WebliixCard>
      </div>


      {/* WHY JOIN WEBLIIX CULTURE & PERKS */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Life at Webliix
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Why You’ll Love Working With Us
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            We operate without corporate bureaucracy. High autonomy, rapid execution, and rewarding compensation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyPerks.map((perk, i) => (
            <WebliixCard key={i} variant="feature" className="p-6 space-y-3">
              <span className="p-3 theme-rounded-card bg-theme-primary/15 border border-theme-primary/30 text-theme-primary inline-block">
                <perk.icon className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-display font-bold text-theme-text">
                {perk.title}
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                {perk.desc}
              </p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS SECTION */}
      <section id="open-roles" className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Join the Team
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Open Positions &amp; Partner Roles
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Explore current opportunities across engineering, product design, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {openRoles.map((role) => (
            <WebliixCard
              key={role.id}
              variant="featured"
              className="p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-theme-border/80 hover:border-theme-primary transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="p-3 theme-rounded-card bg-theme-primary/15 border border-theme-primary/30 text-theme-primary">
                      <role.icon className="w-6 h-6" />
                    </span>
                    <div>
                      <span className="px-2.5 py-0.5 theme-rounded-badge text-[10px] font-mono font-bold uppercase tracking-wider bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                        {role.tag}
                      </span>
                      <h3 className="text-xl font-display font-bold text-theme-text mt-1">
                        {role.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-theme-muted">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-theme-primary" /> {role.type}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-theme-primary" /> {role.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                  {role.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-theme-border/40">
                  <span className="text-[11px] font-mono font-bold text-theme-primary uppercase tracking-wider block">
                    What We Look For:
                  </span>
                  <ul className="space-y-1.5 text-xs text-theme-text">
                    {role.requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-theme-muted">
                  48-hour response guarantee
                </span>
                <WebliixButton
                  variant="primary"
                  size="sm"
                  icon={ArrowUpRight}
                  onClick={() => handleRoleSelect(role.title)}
                >
                  Apply for Role
                </WebliixButton>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Transparent Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Our 4-Stage Hiring Journey
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Simple, respectful, and fast. No endless round of bureaucratic tests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringSteps.map((step, idx) => (
            <WebliixCard key={idx} variant="feature" className="p-6 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-theme-primary">{step.num}</span>
              <h3 className="text-lg font-display font-bold text-theme-text">{step.title}</h3>
              <p className="text-xs text-theme-muted leading-relaxed">{step.desc}</p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* DUAL APPLICATION FORM SECTION */}
      <section id="career-form" className="max-w-3xl mx-auto pt-6">
        <WebliixCard variant="accent" accentColor="primary" className="p-6 sm:p-10 border border-theme-primary/50 shadow-spatial space-y-8">
          
          {/* Header & Toggle Tabs */}
          <div className="text-center space-y-4 pb-4 border-b border-theme-border/60">
            <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5" /> Application Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-theme-text">
              Join Webliix as a Team Member or Partner
            </h2>

            {/* Mode Switcher */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => handleTypeSwitch('job')}
                className={`px-4 py-2 theme-rounded-btn text-xs font-mono font-bold transition ${
                  appType === 'job'
                    ? 'bg-theme-primary text-white shadow-spatial'
                    : 'glass-spatial text-theme-muted hover:text-theme-text border border-theme-border/60'
                }`}
              >
                💼 Job / Internship Role
              </button>
              <button
                type="button"
                onClick={() => handleTypeSwitch('partner')}
                className={`px-4 py-2 theme-rounded-btn text-xs font-mono font-bold transition ${
                  appType === 'partner'
                    ? 'bg-theme-primary text-white shadow-spatial'
                    : 'glass-spatial text-theme-muted hover:text-theme-text border border-theme-border/60'
                }`}
              >
                🤝 Strategic Growth Partner
              </button>
            </div>
          </div>

          {formStatus === 'success' ? (
            <div className="p-8 text-center space-y-6 theme-rounded-card glass-spatial border border-emerald-500/40">
              <div className="w-16 h-16 theme-rounded-badge bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-theme-text">
                  Application Received!
                </h3>
                <p className="text-sm text-theme-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-theme-text">{formData.name}</strong>. Your submission for <strong className="text-theme-primary">{formData.position}</strong> has been logged. Our team will review your application within 48 hours.
                </p>
              </div>

              <div className="p-4 theme-rounded-card bg-theme-primary/10 border border-theme-primary/20 text-xs font-mono text-theme-primary max-w-md mx-auto">
                💬 Want to fast-track your submission? Reach out directly to our team coordinator on WhatsApp!
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/919310181569?text=Hi%20Webliix,%20I%20just%20submitted%20my%20application%20for%20${encodeURIComponent(formData.position)}%20(Name:%20${encodeURIComponent(formData.name)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebliixButton variant="primary" size="lg" icon={MessageCircle}>
                    Message Desk on WhatsApp
                  </WebliixButton>
                </a>
                <WebliixButton
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    setFormStatus('idle');
                    setFormData({
                      applicationType: 'Job / Internship Application',
                      position: 'Frontend React / UI Engineer',
                      name: '',
                      email: '',
                      phone: '',
                      location: '',
                      experience: '1-3 Years',
                      portfolioUrl: '',
                      resumeLink: '',
                      message: '',
                      payoutMethod: 'Direct Bank Transfer / UPI',
                      payoutDetails: '',
                      clientLead: '',
                      agreementAccepted: false
                    });
                  }}
                >
                  Submit Another Application
                </WebliixButton>
              </div>
            </div>
          ) : (
            <form
              name="careers-and-partner-application"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden Netlify Form Config */}
              <input type="hidden" name="form-name" value="careers-and-partner-application" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="applicationType" value={formData.applicationType} />

              {/* Role Selection */}
              {appType === 'job' ? (
                <WebliixFieldGroup label="Position You Are Applying For" required htmlFor="app-position">
                  <WebliixSelect
                    id="app-position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                  >
                    <option value="Frontend React / UI Engineer">Frontend React / UI Engineer</option>
                    <option value="Full-Stack Node.js Developer">Full-Stack Node.js Developer</option>
                    <option value="UI/UX & Spatial Product Designer">UI/UX & Spatial Product Designer</option>
                    <option value="SEO Specialist & Growth Marketer">SEO Specialist & Growth Marketer</option>
                    <option value="Frontend Engineering Intern">Frontend Engineering Intern</option>
                    <option value="General Technical Inquiries">General Technical Inquiries / Other</option>
                  </WebliixSelect>
                </WebliixFieldGroup>
              ) : (
                <div className="p-3.5 theme-rounded-card bg-theme-primary/10 border border-theme-primary/20 text-xs font-mono text-theme-primary flex items-center gap-2">
                  <DollarSign className="w-4 h-4 shrink-0" />
                  <span>Registering as a <strong>Strategic Growth &amp; Referral Partner</strong></span>
                </div>
              )}

              {/* Basic Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <WebliixFieldGroup label="Full Name" required htmlFor="app-name">
                  <WebliixInput
                    id="app-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </WebliixFieldGroup>

                <WebliixFieldGroup label="Email Address" required htmlFor="app-email">
                  <WebliixInput
                    id="app-email"
                    name="email"
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </WebliixFieldGroup>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <WebliixFieldGroup label="WhatsApp / Phone Number" required htmlFor="app-phone">
                  <WebliixInput
                    id="app-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </WebliixFieldGroup>

                <WebliixFieldGroup label="Your City & State" required htmlFor="app-location">
                  <WebliixInput
                    id="app-location"
                    name="location"
                    type="text"
                    required
                    placeholder="e.g. Delhi NCR, Bangalore, Pune"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </WebliixFieldGroup>
              </div>

              {/* Job Specific Fields */}
              {appType === 'job' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <WebliixFieldGroup label="Experience Level" required htmlFor="app-experience">
                      <WebliixSelect
                        id="app-experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                      >
                        <option value="Student / Fresher">Student / Fresher / Self-Taught</option>
                        <option value="1-3 Years">1 - 3 Years</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years Senior / Lead</option>
                      </WebliixSelect>
                    </WebliixFieldGroup>

                    <WebliixFieldGroup
                      label="Portfolio / GitHub / LinkedIn URL"
                      required
                      htmlFor="app-portfolio"
                      hint="Link to your live projects, GitHub repository, or design portfolio."
                    >
                      <WebliixInput
                        id="app-portfolio"
                        name="portfolioUrl"
                        type="url"
                        required
                        placeholder="https://github.com/yourhandle OR portfolio URL"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                      />
                    </WebliixFieldGroup>
                  </div>

                  <WebliixFieldGroup
                    label="Resume / CV Link (Google Drive, Dropbox, Notion)"
                    optional
                    htmlFor="app-resume"
                    hint="Ensure public link sharing is enabled so our team can review."
                  >
                    <WebliixInput
                      id="app-resume"
                      name="resumeLink"
                      type="url"
                      placeholder="https://drive.google.com/your-resume-link"
                      value={formData.resumeLink}
                      onChange={handleInputChange}
                    />
                  </WebliixFieldGroup>

                  <WebliixFieldGroup
                    label="Brief Note / What Excites You About Joining Webliix?"
                    optional
                    htmlFor="app-message"
                  >
                    <WebliixTextarea
                      id="app-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about a project you are proud of, or what technologies you love building with..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </WebliixFieldGroup>
                </>
              )}

              {/* Marketing Partner Specific Fields */}
              {appType === 'partner' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <WebliixFieldGroup label="Preferred Revenue Distribution Method" required htmlFor="partner-payout-method">
                      <WebliixSelect
                        id="partner-payout-method"
                        name="payoutMethod"
                        required
                        value={formData.payoutMethod}
                        onChange={handleInputChange}
                      >
                        <option value="Direct Bank Transfer / UPI">Direct Bank Transfer / UPI</option>
                        <option value="NEFT / IMPS Account Transfer">NEFT / IMPS Account Transfer</option>
                        <option value="International Wire / PayPal">International Wire / PayPal</option>
                      </WebliixSelect>
                    </WebliixFieldGroup>

                    <WebliixFieldGroup
                      label="Account Details / UPI ID for Distributions"
                      required
                      htmlFor="partner-payout-details"
                    >
                      <WebliixInput
                        id="partner-payout-details"
                        name="payoutDetails"
                        type="text"
                        required
                        placeholder="e.g. rahul@oksbi OR Account + IFSC"
                        value={formData.payoutDetails}
                        onChange={handleInputChange}
                      />
                    </WebliixFieldGroup>
                  </div>

                  <WebliixFieldGroup
                    label="Prospective Project / Client Lead Details"
                    optional
                    htmlFor="partner-client-lead"
                    hint="If you have an active client project to introduce, please provide brief context or requirements."
                  >
                    <WebliixTextarea
                      id="partner-client-lead"
                      name="clientLead"
                      rows={3}
                      placeholder="e.g. Corporate business seeking custom web application & SEO services. Contact: 9811XXXXXX"
                      value={formData.clientLead}
                      onChange={handleInputChange}
                    />
                  </WebliixFieldGroup>

                  {/* Strategic Partnership Agreement Box */}
                  <div className="p-4 theme-rounded-card glass-spatial border border-theme-primary/30 space-y-3 bg-theme-primary/5">
                    <span className="text-xs font-mono font-bold text-theme-primary uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> Strategic Partner Terms &amp; Scope:
                    </span>
                    <p className="text-xs text-theme-muted leading-relaxed">
                      By submitting this form, you register as a verified Webliix Strategic Partner. You become eligible for contractual revenue-share distributions for every confirmed client introduction upon receipt of verified client milestones.
                    </p>

                    <WebliixCheckbox
                      id="agreementAccepted"
                      name="agreementAccepted"
                      checked={formData.agreementAccepted}
                      onChange={handleInputChange}
                      label="I accept the Webliix Strategic Growth & Partner Service Agreement."
                    />
                  </div>
                </>
              )}

              {/* Error display */}
              {errorMessage && (
                <div className="p-3 theme-rounded-card bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <WebliixButton
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={formStatus === 'submitting'}
                disabled={formStatus === 'submitting'}
                icon={Send}
              >
                {formStatus === 'submitting'
                  ? 'Submitting Details...'
                  : appType === 'job'
                  ? 'Submit Application to Webliix'
                  : 'Activate Strategic Partner Account'}
              </WebliixButton>
            </form>
          )}
        </WebliixCard>
      </section>

      {/* FAQ SECTION */}
      <section className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Careers &amp; Opportunities FAQ
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Everything you need to know about working with or partnering with Webliix.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="theme-rounded-card glass-spatial border border-theme-border/60 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:text-theme-primary transition-colors"
              >
                <span className="text-sm sm:text-base font-display font-bold text-theme-text">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-theme-primary shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-theme-muted leading-relaxed border-t border-theme-border/40 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL WHATSAPP CTA */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Direct Contact
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Have Questions About Joining the Webliix Team?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Reach out directly to our Founders &amp; Engineering Leads on WhatsApp to discuss openings, projects, or collaborations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919310181569?text=Hi%20Webliix,%20I'm%20interested%20in%20career%20and%20partnership%20opportunities."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="primary" size="lg" icon={MessageCircle}>
              Chat with Hiring Team on WhatsApp
            </WebliixButton>
          </a>
          <a href="#career-form">
            <WebliixButton variant="secondary" size="lg" icon={ArrowUpRight}>
              Fill Application Form
            </WebliixButton>
          </a>
        </div>
      </WebliixCard>
    </div>
  );
}
