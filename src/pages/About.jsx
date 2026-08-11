import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Target, Compass, Award, CheckCircle2, ArrowRight, Code, ShieldCheck, Zap, Globe, Cpu, Heart, Rocket, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/spatial/GlassCard';
import SpatialButton from '../components/ui/SpatialButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { Link } from 'react-router-dom';
import himanshuImg from '../assets/himanshu.jpg';
import abdulImg from '../assets/abdul.jpg';

export default function About() {
  const founders = [
    {
      name: 'Himanshu Sharma',
      role: 'Co-Founder & Managing Director',
      photoUrl: himanshuImg,
      linkedin: 'https://www.linkedin.com/in/himanshu-sharma-36480a246/',
      shortBio: 'Java Full Stack Developer | SPRING BOOT | REST | JSP | Hibernate | jQuery | React | XML | AJAX | JSON | JavaScript | MongoDb | SQL',
      extendedBio: 'Himanshu is the strategic director and creative architect behind Webliix. Combining Java full-stack enterprise engineering with deep creative direction, he leads brand systems, client relations, and digital growth platforms designed for long-term commercial performance.',
      skills: ['Java Full Stack', 'Spring Boot', 'REST APIs', 'React 18', 'Hibernate', 'MongoDB', 'SQL', 'UI/UX Strategy', 'Creative Direction'],
      highlights: [
        { label: 'Specialty', value: 'Managing Director & Enterprise Tech' },
        { label: 'Focus', value: 'Java Full Stack & Strategy' },
        { label: 'Based in', value: 'Noida, India 🇮🇳' }
      ]
    },
    {
      name: 'Abdul Latif',
      role: 'Co-Founder & Business Executive',
      photoUrl: abdulImg,
      linkedin: 'https://www.linkedin.com/in/abdul-latif-3a9249213/',
      shortBio: 'MERN Stack Dev 🚀 10X Dev aspirant 💡 JavaScript enthusiast ❤️ Crafting digital wonders ✨ Let’s code and conquer!',
      extendedBio: 'Abdul leads Webliix technical execution and business growth operations. Specializing in Node.js, Express, React, and performance marketing, he architects fast, scalable web systems and data-driven ad campaigns that turn digital traffic into measurable customer ROI.',
      skills: ['MERN Stack', 'Node.js & Express', 'React 18', 'JavaScript ESM', 'API Architecture', 'Digital Marketing', 'Meta & Google Ads'],
      highlights: [
        { label: 'Specialty', value: 'Business Executive & MERN Architect' },
        { label: 'Focus', value: '10X Full-Stack Engineering' },
        { label: 'Based in', value: 'Noida, India 🇮🇳' }
      ]
    }
  ];

  const values = [
    { icon: '🤝', title: 'Transparency', desc: 'You will always know what we are building, why, and what to expect next. No jargon, zero hidden fees.' },
    { icon: '🏆', title: 'Ownership', desc: 'We treat every client project as if our own business depended on its performance.' },
    { icon: '📈', title: 'Results Driven', desc: 'Aesthetics matter — but every engineering decision we make is tied directly to your commercial ROI.' },
    { icon: '💡', title: 'Continuous Innovation', desc: 'Staying ahead of web standards so clients always have access to top-speed tools.' },
    { icon: '🌍', title: 'Global Vision', desc: 'Based in NCR India, serving clients seamlessly across USA, UK, Canada, and Germany.' },
    { icon: '❤️', title: 'Client Care', desc: 'We genuinely care about the long-term success of every founder and team we partner with.' }
  ];

  const techCategories = [
    { name: 'React 18', icon: '⚛️', tag: 'Frontend' },
    { name: 'Next.js', icon: '⏭️', tag: 'Frontend' },
    { name: 'Tailwind CSS', icon: '💨', tag: 'Frontend' },
    { name: 'JavaScript ESM', icon: '🟨', tag: 'Frontend' },
    { name: 'Node.js', icon: '🟢', tag: 'Backend' },
    { name: 'Express.js', icon: '🚂', tag: 'Backend' },
    { name: 'Java', icon: '☕', tag: 'Backend' },
    { name: 'Spring Boot', icon: '🌱', tag: 'Backend' },
    { name: 'REST APIs', icon: '🔗', tag: 'Backend' },
    { name: 'MongoDB', icon: '🍃', tag: 'Database' },
    { name: 'MySQL', icon: '🗄️', tag: 'Database' },
    { name: 'Firebase', icon: '🔥', tag: 'Database' },
    { name: 'AWS Cloud', icon: '☁️', tag: 'DevOps' },
    { name: 'Docker', icon: '🐳', tag: 'DevOps' },
    { name: 'Git & GitHub', icon: '🐙', tag: 'DevOps' },
    { name: 'Google Ads & SEO', icon: '🔍', tag: 'Marketing' },
    { name: 'Meta Ads', icon: '📘', tag: 'Marketing' },
    { name: 'Google Maps GMB', icon: '📍', tag: 'Marketing' }
  ];

  const globalReach = [
    { flag: '🇮🇳', country: 'India', desc: 'Headquarters & NCR Operations Hub' },
    { flag: '🇺🇸', country: 'USA', desc: 'E-Commerce & Technology Startups' },
    { flag: '🇬🇧', country: 'UK', desc: 'Corporate & Service Enterprise Clients' },
    { flag: '🇩🇪', country: 'Germany', desc: 'B2B Engineering & Industrial Brands' }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-6xl mx-auto space-y-12">
      <Helmet>
        <title>About Us | Founders & Agency Vision | {siteConfig.brand.name}</title>
        <meta name="description" content="Meet Webliix founders Himanshu Sharma (Managing Director) and Abdul Latif (Business Executive). Learn about our story, MERN & Java stack, and global digital agency vision." />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Founded April 2025 · Noida, India
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          We Are <span className="text-shimmer">Webliix</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          A global digital growth agency built by two founders who believe every business — regardless of size — deserves world-class web engineering, branding, and search dominance.
        </p>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {siteConfig.stats.map((stat, i) => (
          <GlassCard key={i} className="p-6 text-center border border-theme-border">
            <div className="text-3xl sm:text-5xl font-display font-extrabold text-theme-primary mb-1">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-theme-muted">
              {stat.label}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 🌟 FOUNDERS & LEADERSHIP SHOWCASE */}
      <div id="founders" className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Leadership & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Meet the Founders
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Two full-stack builders. One shared obsession — helping brands dominate online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <GlassCard key={i} className="p-6 sm:p-8 border border-theme-border space-y-6 flex flex-col justify-between group">
              <div className="space-y-5">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="w-28 h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-theme-primary/50 shadow-spatial relative">
                    <img src={f.photoUrl} alt={f.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <h3 className="text-2xl font-display font-bold text-theme-text">{f.name}</h3>
                    <span className="text-xs font-mono font-bold text-theme-primary block">{f.role}</span>
                    
                    {/* Professional LinkedIn Badge */}
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0a66c2]/20 text-[#0a66c2] border border-[#0a66c2]/40 text-xs font-mono font-semibold hover:bg-[#0a66c2] hover:text-white transition-all duration-300"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Highlights Bar */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl glass-spatial border border-theme-border/60 text-center">
                  {f.highlights.map((h, j) => (
                    <div key={j}>
                      <span className="text-[10px] font-mono text-theme-muted uppercase block">{h.label}</span>
                      <span className="text-[11px] font-semibold text-theme-text">{h.value}</span>
                    </div>
                  ))}
                </div>

                {/* Short Bio Quote */}
                <div className="p-3.5 rounded-2xl bg-theme-primary/10 border border-theme-primary/20 text-xs font-mono text-theme-text italic">
                  "{f.shortBio}"
                </div>

                {/* Extended Bio */}
                <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
                  {f.extendedBio}
                </p>

                {/* Tech Skills Chips */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-theme-primary uppercase font-semibold block">Core Technical Skills</span>
                  <div className="flex flex-wrap gap-1.5">
                    {f.skills.map((skill, j) => (
                      <span key={j} className="px-2.5 py-1 rounded-lg glass-spatial text-xs font-mono text-theme-text border border-theme-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-8 border border-theme-border space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-theme-primary/20 border border-theme-primary flex items-center justify-center text-theme-primary">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-display font-bold text-theme-text">Our Mission</h3>
          <p className="text-theme-muted text-sm leading-relaxed">
            {siteConfig.about.mission}
          </p>
        </GlassCard>

        <GlassCard className="p-8 border border-theme-border space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-theme-primary/20 border border-theme-primary flex items-center justify-center text-theme-primary">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-display font-bold text-theme-text">Our Vision</h3>
          <p className="text-theme-muted text-sm leading-relaxed">
            {siteConfig.about.vision}
          </p>
        </GlassCard>
      </div>

      {/* OUR STORY */}
      <GlassCard className="p-8 sm:p-12 border border-theme-primary/40 shadow-spatial space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Our Agency Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Born from a Belief That Great Digital Work Should Be Accessible
          </h2>
          <p className="text-theme-muted text-sm leading-relaxed">
            Webliix was founded in April 2025 by Himanshu Sharma and Abdul Latif — two builders who saw firsthand how businesses were being underserved by traditional agencies charging inflated retainers for slow work.
          </p>
          <p className="text-theme-muted text-sm leading-relaxed">
            We launched Webliix with a simple mandate: bring enterprise-grade web engineering, local Google Maps ranking, and high-converting marketing to businesses of every size at transparent prices. Within months, Webliix grew to serve clients across India, USA, Canada, and Germany.
          </p>
        </div>
      </GlassCard>

      {/* CORE VALUES (6 PILLARS) */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Pillars of Culture
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Our 6 Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <GlassCard key={i} className="p-6 border border-theme-border space-y-3">
              <span className="text-3xl">{v.icon}</span>
              <h4 className="text-lg font-display font-bold text-theme-text">{v.title}</h4>
              <p className="text-xs text-theme-muted leading-relaxed">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* CURATED TECH STACK */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Technology Stack
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Built With Modern Engineering Tools
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techCategories.map((t, i) => (
            <GlassCard key={i} className="px-4 py-2.5 flex items-center gap-2 border border-theme-border">
              <span className="text-lg">{t.icon}</span>
              <span className="text-xs font-mono font-bold text-theme-text">{t.name}</span>
              <span className="text-[9px] font-mono text-theme-primary font-semibold px-2 py-0.5 rounded-full bg-theme-primary/10">
                {t.tag}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* GLOBAL REACH */}
      <GlassCard className="p-8 sm:p-12 border border-theme-border space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-semibold">
            Global Footprint
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-theme-text">
            Serving Clients Worldwide
          </h2>
          <p className="text-theme-muted text-xs sm:text-sm">
            Headquartered in Noida, India — operating across global time zones.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {globalReach.map((loc, i) => (
            <div key={i} className="p-5 rounded-2xl glass-spatial border border-theme-border/60 space-y-2">
              <span className="text-4xl block mb-1">{loc.flag}</span>
              <h4 className="text-base font-display font-bold text-theme-text">{loc.country}</h4>
              <p className="text-[11px] text-theme-muted leading-relaxed">{loc.desc}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* CTA BANNER */}
      <GlassCard className="p-8 sm:p-12 text-center border border-theme-primary/40 shadow-spatial space-y-5">
        <h2 className="text-2xl sm:text-5xl font-display font-bold text-theme-text max-w-2xl mx-auto leading-tight">
          Ready to Work with <span className="text-shimmer">Webliix?</span>
        </h2>
        <p className="text-theme-muted text-sm max-w-md mx-auto">
          Connect directly with founders Himanshu Sharma and Abdul Malik today.
        </p>
        <div className="pt-2 flex justify-center">
          <Link to="/contact">
            <SpatialButton variant="primary" icon={ArrowRight} className="text-sm px-8 py-3.5">
              Start Your Project Consultation
            </SpatialButton>
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
