import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useTheme } from '../../context/ThemeContext';
import { useAudio } from '../../context/AudioContext';
import { useModal } from '../../context/ModalContext';
import GlassCard from './GlassCard';
import SpatialButton from '../ui/SpatialButton';

export default function CapabilityHub() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [activeRegion, setActiveRegion] = useState('NCR India');
  const { currentTheme } = useTheme();
  const { playHoverSound, playClickSound } = useAudio();
  const { openModal } = useModal();

  const nodes = [
    {
      id: 'web-dev',
      title: 'Custom Web Applications',
      icon: '💻',
      metric: '99/100 Performance Score',
      desc: 'React 18 & Next.js architectures engineered for sub-second load times and top search rankings.',
      tags: ['React 18', 'Vite ESM', 'Clean Code', 'SSL Security'],
      color: '#2563eb'
    },
    {
      id: 'seo-gmb',
      title: 'Local SEO & GMB Domination',
      icon: '📍',
      metric: '#1 Map Ranking Result',
      desc: 'Google Business Profile verification, keyword targeting, and local map pack dominance.',
      tags: ['GMB Profile', 'On-Page SEO', 'Map Pack #1', 'Local Citations'],
      color: '#10b981'
    },
    {
      id: 'ecommerce',
      title: 'Fast E-Commerce Launch',
      icon: '⚡',
      metric: '5-Day Live Store',
      desc: 'High-converting storefronts with automated payment gateways, product catalogs, and instant checkout.',
      tags: ['5-Day Launch', 'UPI & Cards', '50 Products', 'Mobile Checkout'],
      color: '#f97316'
    },
    {
      id: 'branding',
      title: 'Brand Identity & Design',
      icon: '🎨',
      metric: 'Vector Brand Package',
      desc: 'Custom logo design, brand guidelines, print business cards, and social media media kits.',
      tags: ['Logo Package', 'Color Palette', 'Business Cards', 'Social Assets'],
      color: '#ec4899'
    },
    {
      id: 'launchkit',
      title: 'Webliix LaunchKit 360',
      icon: '🚀',
      metric: 'All-in-One Turnkey',
      desc: 'Complete business launch package: logo, website, domain, business email & 5-day ad campaign.',
      tags: ['Logo Design', 'Website', 'Domain & Email', '5-Day Ads'],
      color: '#7c3aed'
    }
  ];

  const activeNode = nodes[activeNodeIndex];

  const handleNodeClick = (node) => {
    playClickSound();
    openModal({
      title: `${node.icon} ${node.title}`,
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl glass-spatial border border-theme-primary/30 space-y-2">
            <span className="text-xs font-mono font-bold text-theme-primary">{node.metric}</span>
            <p className="text-theme-text text-sm leading-relaxed">{node.desc}</p>
          </div>

          <div>
            <span className="text-xs font-semibold text-theme-muted uppercase tracking-wider block mb-2">Core Deliverables</span>
            <div className="flex flex-wrap gap-2">
              {node.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-xl glass-spatial text-xs font-mono text-theme-text border border-theme-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <SpatialButton variant="primary" className="w-full" icon={ChevronRight}>
              Request Project Proposal
            </SpatialButton>
          </div>
        </div>
      )
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-2">
      <GlassCard className="p-5 sm:p-7 border border-theme-primary/30 shadow-spatial-lg relative overflow-hidden">
        {/* Header Controller Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-theme-border/60 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-theme-muted uppercase tracking-wider font-semibold">
              Core Digital Ecosystem
            </span>
          </div>

          {/* Region Selector */}
          <div className="flex items-center gap-1 p-1 rounded-xl glass-spatial border border-theme-border text-xs">
            {siteConfig.brand.geoReach.map(region => (
              <button
                key={region}
                onClick={() => {
                  playClickSound();
                  setActiveRegion(region);
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  activeRegion === region
                    ? 'bg-theme-primary text-white shadow-sm font-semibold'
                    : 'text-theme-muted hover:text-theme-text'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Orbit Grid Selector */}
        <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Navigation Selector */}
          <div className="lg:col-span-5 space-y-2">
            {nodes.map((node, index) => {
              const isActive = activeNodeIndex === index;
              return (
                <button
                  key={node.id}
                  onMouseEnter={() => {
                    playHoverSound();
                    setActiveNodeIndex(index);
                  }}
                  onClick={() => handleNodeClick(node)}
                  className={`w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-theme-primary/15 border-theme-primary text-theme-text shadow-sm'
                      : 'glass-spatial border-theme-border/60 text-theme-muted hover:border-theme-primary/40 hover:text-theme-text'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{node.icon}</span>
                    <div>
                      <h4 className="text-xs font-display font-bold text-theme-text">{node.title}</h4>
                      <span className="text-[10px] font-mono text-theme-primary font-semibold">{node.metric}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-theme-primary translate-x-0.5' : 'text-theme-border'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Feature Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="glass-spatial p-5 rounded-2xl border border-theme-primary/40 shadow-spatial space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-3 border-b border-theme-border/60">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">{activeNode.icon}</span>
                    <div>
                      <h3 className="text-lg font-display font-bold text-theme-text">{activeNode.title}</h3>
                      <span className="text-[10px] font-mono text-theme-primary font-semibold">{activeNode.metric}</span>
                    </div>
                  </div>
                </div>

                <p className="text-theme-muted text-xs leading-relaxed">
                  {activeNode.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeNode.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg glass-spatial border border-theme-border text-[11px] font-mono text-theme-text">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-1">
                  <SpatialButton
                    onClick={() => handleNodeClick(activeNode)}
                    variant="primary"
                    className="w-full text-xs py-2.5"
                    icon={ArrowRight}
                  >
                    View {activeNode.title} Details
                  </SpatialButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Operational Footer Bar */}
        <div className="pt-4 border-t border-theme-border/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-theme-muted font-mono">
          <span>Region Target: <strong className="text-theme-text">{activeRegion}</strong></span>
          <span className="flex items-center gap-1 text-emerald-400 font-semibold"><ShieldCheck className="w-3.5 h-3.5" /> High-Performance Stack</span>
          <span>98% Client Satisfaction</span>
        </div>
      </GlassCard>
    </div>
  );
}
