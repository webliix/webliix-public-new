// Single Source of Truth for Themes & Color Modes matching Webliix Brand Logo
export const themePresets = [
  {
    id: 'webliix-electric',
    name: 'Webliix Electric (Default)',
    icon: '⚡',
    isDark: true,
    colors: {
      bg: '#0b0f19',
      card: 'rgba(15, 23, 42, 0.75)',
      border: 'rgba(37, 99, 235, 0.3)',
      primary: '#2563eb',
      secondary: '#4f46e5',
      accent: '#38bdf8',
      glow: 'rgba(37, 99, 235, 0.4)',
      text: '#f8fafc',
      muted: '#94a3b8'
    }
  },
  {
    id: 'deep-space-purple',
    name: 'Webliix Purple Glow',
    icon: '🔮',
    isDark: true,
    colors: {
      bg: '#0c081e',
      card: 'rgba(23, 15, 48, 0.75)',
      border: 'rgba(124, 58, 237, 0.3)',
      primary: '#7c3aed',
      secondary: '#c084fc',
      accent: '#ec4899',
      glow: 'rgba(124, 58, 237, 0.4)',
      text: '#fdf2f8',
      muted: '#a78bfa'
    }
  },
  {
    id: 'emerald-tech',
    name: 'Emerald Matrix',
    icon: '❇️',
    isDark: true,
    colors: {
      bg: '#031410',
      card: 'rgba(6, 36, 28, 0.75)',
      border: 'rgba(16, 185, 129, 0.3)',
      primary: '#10b981',
      secondary: '#059669',
      accent: '#38bdf8',
      glow: 'rgba(16, 185, 129, 0.4)',
      text: '#ecfdf5',
      muted: '#6ee7b7'
    }
  },
  {
    id: 'quantum-light',
    name: 'Quantum Light Mode',
    icon: '☀️',
    isDark: false,
    colors: {
      bg: '#f8fafc',
      card: 'rgba(255, 255, 255, 0.85)',
      border: 'rgba(37, 99, 235, 0.2)',
      primary: '#2563eb',
      secondary: '#4f46e5',
      accent: '#0284c7',
      glow: 'rgba(37, 99, 235, 0.2)',
      text: '#0f172a',
      muted: '#64748b'
    }
  }
];

export const defaultTheme = themePresets[0];
