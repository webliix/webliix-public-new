// Single Source of Truth for Webliix Spatial Design System: Themes, Fonts, Corner Styles & Accents

export const themePresets = [
  // ============================================================
  // 01 — WEBLIIX LIGHT (Default Light)
  // Clean, high-contrast, professional daylight palette
  // ============================================================
  {
    id: 'webliix-light',
    name: '☀️ Webliix Light',
    icon: '☀️',
    isDark: false,
    colors: {
      bg: '#F8FAFC',
      card: 'rgba(255, 255, 255, 0.88)',
      border: 'rgba(37, 99, 235, 0.20)',
      primary: '#2563EB',
      secondary: '#4F46E5',
      accent: '#38BDF8',
      glow: 'rgba(56, 189, 248, 0.20)',
      text: '#0F172A',
      muted: '#64748B'
    }
  },

  // ============================================================
  // 02 — WEBLIIX DARK (Default Dark)
  // Midnight Cyber / Deep Space Indigo Obsidian
  // ============================================================
  {
    id: 'webliix-dark',
    name: '🌙 Webliix Dark',
    icon: '🌙',
    isDark: true,
    colors: {
      bg: '#090D16',
      card: 'rgba(15, 23, 42, 0.80)',
      border: 'rgba(129, 140, 248, 0.25)',
      primary: '#6366F1',
      secondary: '#8B5CF6',
      accent: '#F43F5E',
      glow: 'rgba(99, 102, 241, 0.28)',
      text: '#F8FAFC',
      muted: '#94A3B8'
    }
  },

  // ============================================================
  // 03 — EMERALD OBSIDIAN (Brand New Distinct Theme 1)
  // Deep Forest Matrix / Cyber Emerald & Mint Neon Glow
  // ============================================================
  {
    id: 'emerald-obsidian',
    name: '🌿 Emerald Matrix',
    icon: '🌿',
    isDark: true,
    colors: {
      bg: '#03140F',
      card: 'rgba(6, 38, 28, 0.72)',
      border: 'rgba(52, 211, 153, 0.26)',
      primary: '#10B981',
      secondary: '#059669',
      accent: '#34D399',
      glow: 'rgba(16, 185, 129, 0.30)',
      text: '#ECFDF5',
      muted: '#6EE7B7'
    }
  },

  // ============================================================
  // 04 — SUNSET NEBULA (Brand New Distinct Theme 2)
  // Cosmic Violet, Electric Magenta & Warm Amber Glow
  // ============================================================
  {
    id: 'sunset-nebula',
    name: '🌌 Sunset Nebula',
    icon: '🌌',
    isDark: true,
    colors: {
      bg: '#0D061A',
      card: 'rgba(28, 14, 52, 0.72)',
      border: 'rgba(217, 70, 239, 0.26)',
      primary: '#E879F9',
      secondary: '#A855F7',
      accent: '#FB923C',
      glow: 'rgba(232, 121, 249, 0.32)',
      text: '#FDF4FF',
      muted: '#D8B4FE'
    }
  },

  // ============================================================
  // 05 — LUXURY TITANIUM GOLD (Bonus Premium Theme)
  // Royal Obsidian & Warm Champagne Gold
  // ============================================================
  {
    id: 'luxury-gold',
    name: '👑 Luxury Gold',
    icon: '👑',
    isDark: true,
    colors: {
      bg: '#120F09',
      card: 'rgba(38, 30, 16, 0.72)',
      border: 'rgba(251, 191, 36, 0.26)',
      primary: '#FBBF24',
      secondary: '#D97706',
      accent: '#FCD34D',
      glow: 'rgba(251, 191, 36, 0.28)',
      text: '#FFFBEB',
      muted: '#D4AF37'
    }
  },

  // ============================================================
  // 06 — CYBER AQUA GLOW (Bonus Futuristic Theme)
  // Pure Pitch Black & Cyan Neon
  // ============================================================
  {
    id: 'cyber-aqua',
    name: '⚡ Cyber Aqua',
    icon: '⚡',
    isDark: true,
    colors: {
      bg: '#04070B',
      card: 'rgba(8, 20, 32, 0.72)',
      border: 'rgba(6, 182, 212, 0.28)',
      primary: '#06B6D4',
      secondary: '#0284C7',
      accent: '#22D3EE',
      glow: 'rgba(6, 182, 212, 0.30)',
      text: '#F0FDFF',
      muted: '#7DD3FC'
    }
  }
];

export const defaultTheme = themePresets[0];

// ============================================================
// GLASS BLUR PRESETS — Off, Light (Default), Maximum
// ============================================================
export const blurPresets = [
  { id: 'off', label: 'Off (0px)', value: '0px' },
  { id: 'light', label: 'Light (12px)', value: '12px' },
  { id: 'max', label: 'Maximum (32px)', value: '32px' }
];

export const defaultBlur = '12px';


// ============================================================
// FONT PRESETS — Curated Modern Google Font Combinations
// ============================================================
export const fontPresets = [
  {
    id: 'futuristic-minimal',
    name: 'Outfit + Inter (Default)',
    display: "'Outfit', sans-serif",
    sans: "'Inter', sans-serif"
  },
  {
    id: 'sora-jakarta',
    name: 'Sora + Jakarta',
    display: "'Sora', sans-serif",
    sans: "'Plus Jakarta Sans', sans-serif"
  },
  {
    id: 'modern-agency',
    name: 'Space Grotesk + Jakarta',
    display: "'Space Grotesk', sans-serif",
    sans: "'Plus Jakarta Sans', sans-serif"
  },
  {
    id: 'editorial-luxe',
    name: 'Cinzel + Outfit',
    display: "'Cinzel', serif",
    sans: "'Outfit', sans-serif"
  },
  {
    id: 'tech-developer',
    name: 'JetBrains + Jakarta',
    display: "'JetBrains Mono', monospace",
    sans: "'Plus Jakarta Sans', sans-serif"
  },
  {
    id: 'clean-product',
    name: 'Inter + Inter',
    display: "'Inter', sans-serif",
    sans: "'Inter', sans-serif"
  }
];

export const defaultFont = fontPresets[0];


// ============================================================
// CORNER STYLE PRESETS — Edgy (Default) vs Rounded Corners
// ============================================================
export const cornerStylePresets = [
  {
    id: 'edgy',
    name: '📐 Edgy (Default)',
    label: 'Edgy (Default)',
    desc: 'Sharp geometric edges with technical corner brackets'
  },
  {
    id: 'rounded',
    name: '🔘 Rounded',
    label: 'Rounded Corners',
    desc: 'Smooth ergonomic curves across all cards and buttons'
  }
];

export const defaultCornerStyle = 'edgy';