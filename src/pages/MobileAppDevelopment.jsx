import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Lock,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  BellRing,
  CreditCard,
  MapPin,
  Cpu,
  Download,
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import WebliixCard from '../components/ui/WebliixCard';
import WebliixButton from '../components/ui/WebliixButton';
import WebliixIcon from '../components/ui/WebliixIcon';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function MobileAppDevelopment() {
  const [selectedCategory, setSelectedCategory] = useState('cross');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const appTypes = [
    {
      id: 'cross',
      name: 'Cross-Platform App Development',
      badge: 'iOS + Android',
      icon: Smartphone,
      desc: 'Build one product for iPhone and Android with Flutter or React Native, reducing duplicated development while keeping a native-feeling mobile experience.',
      features: [
        'One codebase for iOS and Android',
        'Responsive mobile UI and smooth interactions',
        'Camera, GPS, biometrics and device APIs',
        'Offline-ready data and background sync',
        'App Store and Google Play launch support'
      ]
    },
    {
      id: 'business',
      name: 'Business & Customer Apps',
      badge: 'Built Around Your Workflow',
      icon: CreditCard,
      desc: 'Custom mobile applications for bookings, ecommerce, customer portals, field teams, subscriptions, services and business operations.',
      features: [
        'Customer accounts, profiles and dashboards',
        'Payments, subscriptions and checkout',
        'Push notifications and transactional alerts',
        'Booking, order and service workflows',
        'Admin dashboard and API integration'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise & On-Demand Apps',
      badge: 'Multi-Role',
      icon: ShieldCheck,
      desc: 'Scalable mobile products for marketplaces, delivery, logistics, staff operations and platforms with multiple user roles.',
      features: [
        'Customer, partner, driver or staff roles',
        'Real-time GPS and order tracking',
        'Role-based access and secure authentication',
        'CRM, ERP and third-party integrations',
        'Cloud backend designed for future growth'
      ]
    }
  ]

  const capabilities = [
    {
      icon: BellRing,
      title: 'Push Notifications & Engagement',
      desc: 'Send useful order updates, booking reminders, promotions and re-engagement notifications through Firebase Cloud Messaging or OneSignal.'
    },
    {
      icon: CreditCard,
      title: 'Payments & Subscriptions',
      desc: 'Connect Razorpay, Cashfree, Stripe and other payment systems for secure checkout, subscriptions, wallets and transaction flows.'
    },
    {
      icon: MapPin,
      title: 'Maps, GPS & Live Tracking',
      desc: 'Add location search, service areas, route tracking, delivery tracking, driver workflows and location-based experiences with mapping APIs.'
    },
    {
      icon: Lock,
      title: 'Secure Login & User Accounts',
      desc: 'Implement OTP, email, social login, biometric authentication, session management and role-based access around your business requirements.'
    },
    {
      icon: Cpu,
      title: 'Backend, APIs & Integrations',
      desc: 'Connect your mobile app to REST APIs, cloud databases, CRM, ERP, ecommerce systems, analytics, messaging and other business software.'
    },
    {
      icon: Download,
      title: 'App Store & Google Play Launch',
      desc: 'Prepare production builds, store assets, metadata and release submissions. Store approval depends on Apple and Google policies and review decisions.'
    }
  ]

  const packages = [
    {
      name: 'Mobile App MVP',
      price: 'Custom Quote',
      period: 'Scope Based',
      badge: 'Start With the Essentials',
      popular: false,
      desc: 'A focused first version for startups and businesses that want to validate an app idea before expanding the product.',
      timeline: 'Typical scope: 6–10 weeks',
      features: [
        'Flutter or React Native iOS + Android app',
        'Core user journey and custom UI screens',
        'Login, profiles and essential app flows',
        'REST API and database integration',
        'Push notification setup',
        'Testing and production build preparation',
        'App Store and Google Play submission assistance',
        'Source code and project handover'
      ]
    },
    {
      name: 'Business / Ecommerce App',
      price: 'Custom Quote',
      period: 'Features & Integrations Based',
      badge: 'For Growing Businesses',
      popular: true,
      desc: 'A customer-facing app for ecommerce, bookings, services, subscriptions or an existing website that needs a mobile channel.',
      timeline: 'Typical scope: 8–16 weeks',
      features: [
        'Custom iOS and Android experience',
        'Product, service, booking or order flows',
        'Payment gateway and subscription integration',
        'Push notifications and deep links',
        'API integration with website, CRM or ERP',
        'Admin dashboard and business controls',
        'Analytics and conversion tracking setup',
        'Post-launch maintenance options'
      ]
    },
    {
      name: 'Marketplace / Enterprise App',
      price: 'Custom Quote',
      period: 'Architecture & Scale Based',
      badge: 'Complex Products',
      popular: false,
      desc: 'For multi-role platforms, marketplaces, logistics, on-demand services and enterprise workflows that require deeper architecture.',
      timeline: 'Typical scope: 12+ weeks',
      features: [
        'Customer + partner / driver / staff applications',
        'Real-time APIs, notifications and tracking',
        'Advanced authentication and permissions',
        'ERP, CRM and third-party integrations',
        'Cloud backend and scalable architecture',
        'Monitoring, testing and release workflow',
        'Technical documentation and source ownership',
        'Ongoing feature development and support'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How much does it cost to develop a mobile app?',
      answer: 'Mobile app development cost depends on the number of screens, user roles, platform strategy, backend, integrations and features such as payments, maps or real-time tracking. Webliix scopes projects around the actual requirements rather than using a one-size-fits-all price.'
    },
    {
      question: 'Can you build an app for both iPhone and Android?',
      answer: 'Yes. We can build cross-platform applications with Flutter or React Native for iOS and Android from a shared codebase. If your product needs deeper platform-specific capabilities, we can also plan native iOS or Android development where appropriate.'
    },
    {
      question: 'Do you develop Flutter and React Native apps?',
      answer: 'Yes. Flutter and React Native are both available for cross-platform projects. The right approach depends on your product requirements, integrations, team preferences, performance needs and long-term roadmap.'
    },
    {
      question: 'Can you build ecommerce, booking or service apps?',
      answer: 'Yes. We build customer-facing apps for ecommerce, bookings, appointments, home services, delivery, subscriptions, marketplaces and other service businesses, including payments, notifications, accounts, APIs and admin workflows.'
    },
    {
      question: 'Do you handle Google Play and Apple App Store submission?',
      answer: 'We can prepare production builds, store assets, metadata and submission materials and assist with the release process. Final approval is controlled by Apple and Google and depends on their current review and policy requirements.'
    },
    {
      question: 'Can you connect the app to our existing website, CRM or software?',
      answer: 'Yes. We can connect mobile apps with existing REST APIs, databases and business systems such as CRM, ERP, ecommerce platforms, payment gateways, maps, messaging and analytics services, subject to the available APIs and access.'
    },
    {
      question: 'Will we own the mobile app source code?',
      answer: 'Project ownership and handover are defined in the service agreement. Where included in your selected scope, Webliix provides the agreed source code, project assets and deployment materials at handover.'
    },
    {
      question: 'Do you provide app maintenance after launch?',
      answer: 'Yes. Optional maintenance can cover bug fixes, dependency and SDK updates, OS compatibility work, store release support, monitoring and new feature development.'
    }
  ]

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Helmet>
        <title>Mobile App Development Company | iOS & Android Apps | Webliix</title>
        <meta
          name="description"
          content="Webliix builds custom mobile apps for iOS and Android using Flutter and React Native. Get MVP, ecommerce, booking, business and enterprise app development with UI/UX, APIs, payments and store launch support."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://webliix.com/mobile-app-development" />

        <meta property="og:title" content="Mobile App Development Company | iOS & Android Apps | Webliix" />
        <meta
          property="og:description"
          content="Custom iOS and Android app development for startups and businesses. Flutter, React Native, payments, APIs, ecommerce, booking apps and store launch support."
        />
        <meta property="og:url" content="https://webliix.com/mobile-app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webliix.com/meta-gen/og_image.jpg" />
        <meta property="og:image:alt" content="Webliix mobile app development services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development Company | iOS & Android Apps | Webliix" />
        <meta
          name="twitter:description"
          content="Custom iOS and Android mobile apps using Flutter and React Native for startups, ecommerce businesses and growing companies."
        />
        <meta name="twitter:image" content="https://webliix.com/meta-gen/og_image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://webliix.com/mobile-app-development#service",
            "name": "Mobile App Development Services",
            "url": "https://webliix.com/mobile-app-development",
            "provider": {
              "@type": "Organization",
              "name": "Webliix",
              "url": "https://webliix.com"
            },
            "serviceType": [
              "Mobile App Development",
              "iOS App Development",
              "Android App Development",
              "Flutter App Development",
              "React Native App Development",
              "Cross-Platform App Development",
              "MVP App Development",
              "Ecommerce App Development",
              "Business App Development",
              "Enterprise Mobile App Development"
            ],
            "description": "Custom iOS and Android mobile app development for startups, ecommerce businesses and growing companies, including UI/UX, backend APIs, payments, notifications, integrations and app store launch support.",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mobile App Development Services",
              "itemListElement": packages.map((pkg, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": pkg.name,
                "description": pkg.desc,
                "url": "https://webliix.com/mobile-app-development#app-packages"
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full glass-spatial border border-theme-primary/40 text-xs font-mono text-theme-primary font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
          <Smartphone className="w-3.5 h-3.5" /> Flutter / React Native Cross-Platform Apps
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-theme-text leading-tight">
          <span className="text-shimmer">Mobile App Development</span> Company for iOS & Android
        </h1>
        <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
          Turn your app idea into a product customers can actually use. Webliix designs and develops custom iOS and Android apps for startups and businesses using Flutter, React Native and API-driven backends—with UI/UX, payments, notifications, integrations and store launch support.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Discuss Your App Idea
            </WebliixButton>
          </Link>
          <a href="#app-packages">
            <WebliixButton variant="ghost" size="lg">
              Get a Free App Estimate
            </WebliixButton>
          </a>
        </div>
      </div>

      <p className="text-theme-muted text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto text-center">
        Webliix develops mobile apps for startups, ecommerce brands, service businesses and established companies.
        Whether you need an Android app, iPhone app, cross-platform app, customer portal, booking app, delivery app,
        marketplace or internal business app, we scope the product around your users, workflows and growth plans.
      </p>

      {/* Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">iOS + Android</div>
          <div className="text-xs text-theme-muted font-medium">Cross-Platform Delivery</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Flutter / React Native</div>
          <div className="text-xs text-theme-muted font-medium">Cross-Platform Stack</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">Store</div>
          <div className="text-xs text-theme-muted font-medium">Launch Assistance</div>
        </WebliixCard>
        <WebliixCard variant="stat" className="p-5 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-theme-primary">Custom</div>
          <div className="text-xs text-theme-muted font-medium">Source & IP Terms</div>
        </WebliixCard>
      </div>

      {/* App Categories */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Mobile Apps Built Around Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {appTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedCategory === type.id;
            return (
              <WebliixCard
                key={type.id}
                variant={isSelected ? 'accent' : 'panel'}
                accentColor="primary"
                className="p-6 sm:p-8 space-y-5 flex flex-col justify-between cursor-pointer transition-all duration-300"
                onClick={() => setSelectedCategory(type.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <WebliixIcon icon={Icon} variant="badge" size="md" />
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                      {type.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-theme-text">
                    {type.name}
                  </h3>

                  <p className="text-xs text-theme-muted leading-relaxed">
                    {type.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-theme-border/40">
                    <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                      Core Features
                    </span>
                    <ul className="space-y-2 text-xs text-theme-text">
                      {type.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/contact">
                    <WebliixButton
                      variant={isSelected ? 'primary' : 'ghost'}
                      size="sm"
                      fullWidth
                      icon={ArrowUpRight}
                    >
                      Select {type.name.split(' ')[0]}
                    </WebliixButton>
                  </Link>
                </div>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Built-in Features */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            End-to-End App Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Features That Turn an App Into a Business Tool
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <WebliixCard key={index} variant="feature" className="p-6 space-y-3">
                <WebliixIcon icon={Icon} variant="badge" size="md" />
                <h3 className="text-base font-display font-bold text-theme-text">
                  {feat.title}
                </h3>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {feat.desc}
                </p>
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Development Process */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            From Idea to App Store
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            A Clear Mobile App Development Process
          </h2>
          <p className="text-sm text-theme-muted leading-relaxed">
            You should know what is being built, why it is being built and what happens next. We break the project
            into practical stages so the scope, features and integrations are easier to review before development expands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Discovery & Scope',
              desc: 'Define users, business goals, features, platforms, integrations and the MVP boundary.'
            },
            {
              step: '02',
              title: 'UI/UX & Architecture',
              desc: 'Plan user flows, screens, navigation, API requirements and the technical foundation.'
            },
            {
              step: '03',
              title: 'Development & Testing',
              desc: 'Build the app, connect APIs and services, test important flows and prepare release builds.'
            },
            {
              step: '04',
              title: 'Launch & Support',
              desc: 'Assist with store submission, release preparation and optional post-launch maintenance and improvements.'
            }
          ].map((step) => (
            <WebliixCard key={step.step} variant="feature" className="p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-theme-primary">{step.step}</span>
              <h3 className="text-lg font-display font-bold text-theme-text">{step.title}</h3>
              <p className="text-xs text-theme-muted leading-relaxed">{step.desc}</p>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="app-packages" className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Mobile App Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Choose a Starting Point for Your App
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, idx) => (
            <WebliixCard
              key={idx}
              variant={pkg.popular ? 'accent' : 'panel'}
              accentColor="primary"
              className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                pkg.popular ? 'border-2 border-theme-primary shadow-spatial-lg' : ''
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary px-2.5 py-0.5 rounded-full bg-theme-primary/10 border border-theme-primary/20">
                    {pkg.badge}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {pkg.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-theme-text">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-theme-muted mt-1 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-theme-border/40">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-theme-text">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-theme-muted">
                      ({pkg.period})
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono text-theme-primary uppercase font-bold block">
                    Deliverables Included
                  </span>
                  <ul className="space-y-2.5 text-xs text-theme-text">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-theme-border/40">
                <Link to="/contact">
                  <WebliixButton
                    variant={pkg.popular ? 'primary' : 'ghost'}
                    size="md"
                    fullWidth
                    icon={ArrowUpRight}
                  >
                    Get a Free App Estimate
                  </WebliixButton>
                </Link>
              </div>
            </WebliixCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8 pt-6 border-t border-theme-border/60">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-theme-primary font-bold">
            Before You Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-theme-text">
            Mobile App Development FAQs
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <WebliixCard
                key={idx}
                variant="panel"
                className="p-5 space-y-3 cursor-pointer transition-all duration-200"
                onClick={() => toggleFaq(idx)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFaq(idx);
                  }
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm sm:text-base font-display font-bold text-theme-text flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-theme-primary shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-theme-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-theme-primary' : ''
                    }`}
                  />
                </div>

                {isOpen && (
                  <p className="text-xs sm:text-sm text-theme-muted leading-relaxed pt-2 border-t border-theme-border/40">
                    {faq.answer}
                  </p>
                )}
              </WebliixCard>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <WebliixCard
        variant="accent"
        accentColor="primary"
        className="p-8 sm:p-12 text-center space-y-6 theme-rounded-card border border-theme-primary/50 shadow-spatial-lg"
      >
        <span className="px-3 py-1 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Plan Your App Launch
        </span>

        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-theme-text max-w-2xl mx-auto">
          Ready to Discuss Your App Idea?
        </h2>

        <p className="text-sm sm:text-base text-theme-muted max-w-xl mx-auto">
          Tell us what you want the app to do, who will use it, and whether you need iOS, Android or both. We’ll help turn the idea into a practical scope covering features, integrations, architecture and delivery stages.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/contact">
            <WebliixButton variant="primary" size="lg" icon={ArrowUpRight}>
              Get Your Mobile App Consultation
            </WebliixButton>
          </Link>
          <a
            href={`https://wa.me/${siteConfig.brand.contactPhone.replace(/[^0-9]/g, '')}?text=Hi%20Webliix,%20I%27d%20like%20to%20discuss%20a%20mobile%20app%20development%20project.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebliixButton variant="ghost" size="lg" icon={MessageSquare}>
              Chat About Your App
            </WebliixButton>
          </a>
        </div>
      </WebliixCard>
    </div>
  );
}
