import React, { createContext, useContext, useState, useEffect } from 'react';
import { themePresets, defaultTheme } from '../config/themeConfig';

const ThemeContext = createContext();

export const fontPresets = [
  {
    id: 'modern-agency',
    name: '⚡ Modern Agency (Space Grotesk + Jakarta)',
    display: "'Space Grotesk', sans-serif",
    sans: "'Plus Jakarta Sans', sans-serif"
  },
  {
    id: 'futuristic-minimal',
    name: '🔮 Futuristic Minimal (Outfit + Inter)',
    display: "'Outfit', sans-serif",
    sans: "'Inter', sans-serif"
  },
  {
    id: 'tech-developer',
    name: '💻 Tech Developer (JetBrains Mono + Jakarta)',
    display: "'JetBrains Mono', monospace",
    sans: "'Plus Jakarta Sans', sans-serif"
  },
  {
    id: 'clean-product',
    name: '✨ Clean Product (Inter + Inter)',
    display: "'Inter', sans-serif",
    sans: "'Inter', sans-serif"
  },
  {
    id: 'unified-agency',
    name: '🌟 Unified Agency (Plus Jakarta Sans)',
    display: "'Plus Jakarta Sans', sans-serif",
    sans: "'Plus Jakarta Sans', sans-serif"
  },
  {
    id: 'full-terminal',
    name: '📟 Full Terminal (JetBrains Mono)',
    display: "'JetBrains Mono', monospace",
    sans: "'JetBrains Mono', monospace"
  }
];

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('spatial_theme_id');
    return themePresets.find(t => t.id === saved) || defaultTheme;
  });

  const [customPrimary, setCustomPrimary] = useState(() => {
    return localStorage.getItem('spatial_custom_primary') || null;
  });

  const [glassBlur, setGlassBlur] = useState(() => {
    return localStorage.getItem('spatial_glass_blur') || '28px';
  });

  const [currentFont, setCurrentFont] = useState(() => {
    const saved = localStorage.getItem('spatial_font_id');
    return fontPresets.find(f => f.id === saved) || fontPresets[0];
  });

  const [canvasParticles, setCanvasParticles] = useState(() => {
    return localStorage.getItem('spatial_canvas_particles') !== 'false';
  });

  useEffect(() => {
    const root = document.documentElement;
    const colors = { ...currentTheme.colors };

    if (customPrimary) {
      colors.primary = customPrimary;
      colors.glow = `${customPrimary}55`;
    }

    Object.entries(colors).forEach(([key, val]) => {
      root.style.setProperty(`--color-${key}`, val);
    });

    root.style.setProperty('--glass-blur', glassBlur);
    root.style.setProperty('--font-sans', currentFont.sans);
    root.style.setProperty('--font-display', currentFont.display);
    document.body.style.fontFamily = currentFont.sans;

    localStorage.setItem('spatial_theme_id', currentTheme.id);
    if (customPrimary) {
      localStorage.setItem('spatial_custom_primary', customPrimary);
    } else {
      localStorage.removeItem('spatial_custom_primary');
    }
    localStorage.setItem('spatial_glass_blur', glassBlur);
    localStorage.setItem('spatial_font_id', currentFont.id);
    localStorage.setItem('spatial_canvas_particles', String(canvasParticles));
  }, [currentTheme, customPrimary, glassBlur, currentFont, canvasParticles]);

  const selectTheme = (themeId) => {
    const found = themePresets.find(t => t.id === themeId);
    if (found) {
      setCurrentTheme(found);
      setCustomPrimary(null);
    }
  };

  const setPrimaryColor = (colorHex) => {
    setCustomPrimary(colorHex);
  };

  const selectFont = (fontId) => {
    const found = fontPresets.find(f => f.id === fontId);
    if (found) setCurrentFont(found);
  };

  const resetTheme = () => {
    setCurrentTheme(defaultTheme);
    setCustomPrimary(null);
    setGlassBlur('28px');
    setCurrentFont(fontPresets[0]);
    setCanvasParticles(true);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      themePresets,
      selectTheme,
      customPrimary,
      setPrimaryColor,
      glassBlur,
      setGlassBlur,
      fontPresets,
      currentFont,
      selectFont,
      canvasParticles,
      setCanvasParticles,
      resetTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
