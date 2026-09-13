import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles, Laptop, ShieldCheck, Megaphone, Palette, Wrench, Users, Tag, CheckCircle2, ArrowUpRight } from 'lucide-react';
import GlassCard from '../components/spatial/GlassCard';
import WebliixCard from '../components/ui/WebliixCard';

import WebliixButton from '../components/ui/WebliixButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';

// Project Images (Cloudinary CDN URLs)
const peoriaImg = 'https://res.cloudinary.com/vhth8clt/image/upload/v1788985054/Peoria-Home-Cleaning-Services-Professional-Residential-Commercial-Cleaners-09-10-2026_01_46_AM.png';
const ramjiEventsImg = 'https://res.cloudinary.com/vhth8clt/image/upload/v1789332530/Best-Wedding-Planners-Luxury-Caterers-in-Greater-Noida-Ramji-Events-09-14-2026_02_17_AM.png';
const sunsdustImg = 'https://res.cloudinary.com/vhth8clt/image/upload/v1789080714/sunsdust-website-image.png';
const auraDrishtiImg = 'https://res.cloudinary.com/vhth8clt/image/upload/v1789080768/Auradrishti.png';
const kitchen9Img = 'https://res.cloudinary.com/vhth8clt/image/upload/v1789080760/kitchen9village.png';
const sarswatiImg = 'https://res.cloudinary.com/vhth8clt/image/upload/v1789080786/sarswati.png';

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
import peoriaLogo from '../assets/logos/peoria.svg';


export default function Portfolio() {
  // Primary Portfolio Items (Preserved exact data & links from old site)
  const portfolioItems = [
    {
      category: 'Home Cleaning Service Website',
      title: 'Peoria Home Cleaning Services',
      description: 'A modern, high-converting service booking website engineered for residential and commercial cleaning with local SEO optimization and targeted search ad campaigns.',
      image: 'https://res.cloudinary.com/vhth8clt/image/upload/v1788985054/Peoria-Home-Cleaning-Services-Professional-Residential-Commercial-Cleaners-09-10-2026_01_46_AM.png',
      link: 'https://peoria-webliix.netlify.app/',
      metrics: 'Online Booking & Local SEO'
    },
    {
      category: 'Wedding & Event Planning',
      title: 'Ramji Events & Luxury Caterers',
      description: 'A premier event and wedding planning website featuring end-to-end luxury event coordination, bespoke catering menus, decor galleries, and direct booking inquiries.',
      image: ramjiEventsImg,
      link: 'https://ramji-events.netlify.app/',
      metrics: 'Wedding & Luxury Catering'
    },
    {
      category: 'Portfolio Website',
      title: 'Sunsdust Commercial pvt. ltd.',
      description: 'Manufacturer & Supplier of ESE Lightning Arresters, Surge Protection Devices, GI & Copper Bonded Earth Electrodes. Trusted across 28+ states in India.',
      image: sunsdustImg,
      link: 'https://sunsdust-webliix-2.netlify.app/',
      metrics: 'Trusted Across 28+ States'
    },
    {
      category: 'CCTV & Security Solutions',
      title: 'Aura Drishti',
      description: 'A professional CCTV camera installation, servicing, and surveillance equipment sales company with custom responsive web design, local SEO, and lead campaigns.',
      image: auraDrishtiImg,
      link: 'https://auradrishti-webliix.netlify.app/',
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
    'https://res.cloudinary.com/vhth8clt/image/upload/v1788985903/peoria.png',
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
      name: 'Peoria Home Cleaning',
      logo: 'https://res.cloudinary.com/vhth8clt/image/upload/v1788985903/peoria.png',
      services: ['Web Development', 'Search Engine Optimization', 'Advertising']
    },


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
                <div className="theme-rounded-card overflow-hidden border border-theme-border/80 bg-theme-bg/60 shadow-inner">
                  <div className="px-3.5 py-2 border-b border-theme-border/60 flex items-center justify-between text-xs font-mono text-theme-muted">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-theme-primary font-bold">{item.category}</span>
                  </div>

                  {/* Clean Image Container — landscape responsive */}
                  <div className="aspect-[16/10] sm:aspect-video w-full overflow-hidden relative bg-theme-bg">
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
                    <span className="px-3 py-1 theme-rounded-badge text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
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
                className="w-36 h-36 sm:w-44 sm:h-44 aspect-square shrink-0 p-3 bg-white border border-gray-200/80 shadow-sm theme-rounded-card flex items-center justify-center group hover:border-theme-primary/60 transition-all"
              >
                <img
                  src={logo}
                  alt={`Branding Logo ${index + 1}`}
                  className="h-24 sm:h-28 max-h-[88%] max-w-[88%] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client) => (
            <GlassCard
              key={client.name}
              className="p-3.5 sm:p-5 space-y-3 sm:space-y-4 border border-theme-border/80 hover:border-theme-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Logo Container — matching homepage aspect ratio and sizing */}
                <div className="theme-rounded-card overflow-hidden border border-theme-border/60 bg-white p-2 shadow-sm flex items-center justify-center">
                  <div className="aspect-[16/9] sm:aspect-video w-full flex items-center justify-center relative">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-32 sm:h-36 max-h-[96%] max-w-[96%] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>



                <h3 className="text-xs sm:text-sm font-display font-bold text-center text-theme-text line-clamp-1">
                  {client.name}
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5 pt-2 border-t border-theme-border/40">
                {client.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-theme-primary/10 text-[10px] font-mono text-theme-primary border border-theme-primary/20 text-center"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 shrink-0" />
                    <span>{service}</span>
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* PORTFOLIO WEBSITE BUILD PROMOTION */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Stand Out From the Crowd
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Need a Bespoke Portfolio Website Like These For Your Personal Brand?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          We engineer custom, spatial portfolio showcases with interactive case studies, 95+ PageSpeed scores, and clear scope transparency.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Start Your Project
            </WebliixButton>
          </Link>
          <Link to="/services">
            <WebliixButton variant="secondary" size="lg" icon={ArrowUpRight}>
              Explore Services
            </WebliixButton>
          </Link>
        </div>
      </WebliixCard>

    </div>
  );

}
