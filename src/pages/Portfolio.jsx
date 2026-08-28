import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Sparkles, Laptop, ShieldCheck, Megaphone, Palette, Wrench, Users, Tag, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/spatial/GlassCard';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';

// Project Images from old website
import sarswatiImg from '../assets/project_image/sarswati.png';
import auraDrishtiImg from '../assets/project_image/Auradrishti.png';
import kitchen9Img from '../assets/project_image/kitchen9village.png';
import sunsdustImg from '../assets/project_image/sunsdust.png';

// Client Logos from old website
import client1 from '../assets/logos/client1.jpg';
import client2 from '../assets/logos/client2.png';
import client3 from '../assets/logos/client3.png';
import client4 from '../assets/logos/client4.png';
import client5 from '../assets/logos/client5.jpg';
import client6 from '../assets/logos/client6.png';
import client7 from '../assets/logos/client7.png';
import client8 from '../assets/logos/client8.png';
import auradrishtiLogo from '../assets/logos/auradrishti.png';
import sunsdustLogo from '../assets/logos/sunsdust.png';
import ghomesLogo from '../assets/logos/ghomes.png';
import kitchen9Logo from '../assets/logos/kitchen9village.png';
import loanheavenLogo from '../assets/logos/loanheaven.png';
import connectifyLogo from '../assets/logos/connectify.png';
import janaushadiLogo from '../assets/logos/janaushadi.jpg';
import thehubLogo from '../assets/logos/thehub.png';

export default function Portfolio() {
  // Primary Portfolio Items (Preserved exact data & links from old site)
  const portfolioItems = [
    {
      category: 'Portfolio Website',
      title: 'Sunsdust Commercial pvt. ltd.',
      description: 'Manufacturer & Supplier of ESE Lightning Arresters, Surge Protection Devices, GI & Copper Bonded Earth Electrodes. Trusted across 28+ states in India.',
      image: sunsdustImg,
      link: 'https://sunsdust-webliix.netlify.app',
      metrics: 'Trusted Across 28+ States'
    },
    {
      category: 'Security Product Portfolio Website',
      title: 'Aura Dristi',
      description: 'A visually elegant website built for a spiritual venture. Designed with seamless navigation and branding.',
      image: auraDrishtiImg,
      link: 'https://auradrishti-webliix.netlify.app',
      metrics: '4.9★ Rating • 3x GMB Visits'
    },
    {
      category: 'Cloud Kitchen Portfolio',
      title: 'Kitchen 9 Village',
      description: 'Authentic Indian vegetarian cuisine crafted with traditional recipes, premium ingredients, and strict hygiene standards. Proudly serving Siliguri with fast and reliable delivery.',
      image: kitchen9Img,
      link: 'https://kitchen9-webliix.netlify.app',
      metrics: '+180% Direct Orders'
    },
    {
      category: 'Portfolio Website',
      title: 'Saraswati Enterprises',
      description: 'A complete website redesign to enhance user experience and showcase a professional portfolio.',
      image: sarswatiImg,
      link: 'https://latifcodes.github.io/Saraswati-Enterprise/',
      metrics: '100% Mobile Responsive'
    }
  ];

  // Client Logos Array for Branding Marquee
  const clientLogos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    auradrishtiLogo,
    sunsdustLogo,
    kitchen9Logo,
    thehubLogo
  ];

  // Trusted Partner Showcase Matrix (Preserved exact service breakdown from old site)
  const clients = [
    {
      name: 'Aura Drishti',
      logo: auradrishtiLogo,
      services: ['Advertising', 'Web Development', 'Social Media Management', 'Branding', 'Graphic Design']
    },
    {
      name: 'Sunsdust Commercial pvt. ltd.',
      logo: sunsdustLogo,
      services: ['Advertising', 'Web Development', 'Social Media Management', 'Branding', 'Graphic Design']
    },
    {
      name: 'G Homes Furnishing',
      logo: ghomesLogo,
      services: ['Advertising']
    },
    {
      name: 'Kitchen 9 Village',
      logo: kitchen9Logo,
      services: ['Website Development']
    },
    {
      name: 'Loan Heaven',
      logo: loanheavenLogo,
      services: ['Advertising', 'Website Maintenance']
    },
    {
      name: 'Connectify',
      logo: connectifyLogo,
      services: ['Advertising', 'Website Maintenance', 'Social Media Management', 'Graphic Design']
    },
    {
      name: 'Jan Aushadhi Kendra',
      logo: janaushadiLogo,
      services: ['Advertising']
    },
    {
      name: 'The Hub Solution',
      logo: thehubLogo,
      services: ['Advertising', 'Social Media Management']
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Our Work | Website, Branding & Marketing Projects | Webliix</title>
        <meta name="description" content="View our portfolio of websites, branding, and digital marketing projects for clients in India, Canada, USA, and Germany." />
        <meta name="keywords" content="web design portfolio, branding samples, ecommerce site showcase, SEO results, India USA website agency, Webliix case studies" />
        <link rel="canonical" href="https://webliix.com/portfolio" />
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Proven Client Results
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          Our <span className="text-shimmer">Portfolio</span>
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Discover the stunning websites and impactful branding crafted by{' '}
          <span className="font-bold text-theme-primary">Webliix</span> to elevate businesses worldwide.
        </p>
      </div>

      {/* Portfolio Website Projects Grid */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-theme-border/60 pb-4">
          <div>
            <span className="text-xs font-mono text-theme-primary font-bold uppercase tracking-wider block">
              Featured Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-text flex items-center gap-2 mt-0.5">
              <Laptop className="w-6 h-6 text-theme-primary" /> Website & Web App Showcase
            </h2>
          </div>
          <span className="text-xs font-mono text-theme-muted">
            100% Responsive & Speed-Optimized
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <GlassCard
              key={index}
              className="p-6 sm:p-8 space-y-6 flex flex-col justify-between group border border-theme-border/80 hover:border-theme-primary/60 transition-all duration-500 hover:shadow-spatial"
            >
              <div className="space-y-5">
                {/* Browser Container Frame */}
                <div className="rounded-2xl overflow-hidden border border-theme-border/80 bg-theme-bg/60 shadow-inner">
                  <div className="px-3.5 py-2 border-b border-theme-border/60 flex items-center justify-between text-xs font-mono text-theme-muted">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-theme-primary font-bold">{item.category}</span>
                  </div>

                  {/* Clean Image Container — flush to card corners */}
                  <div className="h-56 sm:h-64 overflow-hidden relative bg-theme-bg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {item.metrics}
                    </span>
                  </div>

                  <p className="text-theme-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-theme-border flex items-center justify-between">
                <span className="text-xs font-mono text-theme-muted">
                  Client Deployment
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebliixButton variant="primary" icon={ExternalLink} size="sm">
                    View Project
                  </WebliixButton>
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Our Branding Work - Slowly Looping Square Cards Carousel */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Brand Identities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Our Branding Work
          </h2>
          <p className="text-theme-muted text-sm">
            Trusted by brands to create memorable and impactful identities across global markets.
          </p>
        </div>

        {/* Slowly Looping Carousel Container */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex w-max animate-scroll-slow items-center gap-6 px-4">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <WebliixCard
                key={index}
                variant="panel"
                className="w-40 h-40 sm:w-44 sm:h-44 aspect-square shrink-0 p-4 bg-white border border-gray-200/80 shadow-sm rounded-2xl flex items-center justify-center group hover:border-theme-primary/60 transition-all"
              >
                <img
                  src={logo}
                  alt={`Branding Logo ${index + 1}`}
                  className="max-h-24 max-w-full object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </WebliixCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Trusted Partners - Delivered Services Matrix */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Client Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Our Trusted Partners
          </h2>
          <p className="text-theme-muted text-sm">
            Empowering growth for our clients through strategic design, web, and marketing services by <span className="font-bold text-theme-primary">Webliix</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <GlassCard
              key={client.name}
              className="p-6 space-y-5 border border-theme-border/80 hover:border-theme-primary/50 transition-all duration-300"
            >
              {/* Square Logo Container — white bg, centered PNG logo */}
              <div className="w-full aspect-square bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="text-lg font-display font-bold text-center text-theme-text">
                {client.name}
              </h3>

              <div className="flex flex-wrap justify-center gap-2 pt-1 border-t border-theme-border/40">
                {client.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-xs font-mono text-theme-primary border border-theme-primary/30"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

    </div>
  );
}
