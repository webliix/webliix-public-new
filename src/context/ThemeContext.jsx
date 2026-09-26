import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  themePresets,
  defaultTheme,
  fontPresets,
  defaultFont,
  cornerStylePresets,
  defaultCornerStyle,
  blurPresets,
  defaultBlur
} from '../config/themeConfig';

const ThemeContext = createContext();

export { fontPresets, cornerStylePresets, blurPresets };

const detectDeviceOS = () => {
  if (typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent || navigator.vendor || (typeof window !== 'undefined' && window.opera ? window.opera.toString() : '');
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  if (isIOS) return 'ios';
  if (isAndroid) return 'android';
  return 'desktop';
};

export const ThemeProvider = ({ children }) => {
  const [deviceOS] = useState(() => detectDeviceOS());

  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('spatial_theme_id');
      const found = themePresets.find(t => t.id === saved);
      return found || defaultTheme || themePresets[0];
    } catch {
      return defaultTheme || themePresets[0];
    }
  });

  const [customPrimary, setCustomPrimary] = useState(() => {
    try {
      return localStorage.getItem('spatial_custom_primary') || null;
    } catch {
      return null;
    }
  });

  const [glassBlur, setGlassBlur] = useState(() => {
    try {
      return localStorage.getItem('spatial_glass_blur') || defaultBlur || '12px';
    } catch {
      return defaultBlur || '12px';
    }
  });

  const [currentFont, setCurrentFont] = useState(() => {
    try {
      const saved = localStorage.getItem('spatial_font_id');
      const found = fontPresets.find(f => f.id === saved);
      return found || defaultFont || fontPresets[0];
    } catch {
      return defaultFont || fontPresets[0];
    }
  });

  const [cornerStyle, setCornerStyle] = useState(() => {
    try {
      const saved = localStorage.getItem('spatial_corner_style');
      if (saved === 'rounded' || saved === 'edgy') return saved;
    } catch {}
    
    // Auto-detect Mobile Device OS:
    // iPhones (iOS) -> rounded
    // Android -> rectangular (edgy)
    const os = detectDeviceOS();
    if (os === 'ios') return 'rounded';
    if (os === 'android') return 'edgy';

    return defaultCornerStyle || 'edgy';
  });

  const [canvasParticles, setCanvasParticles] = useState(() => {
    try {
      return localStorage.getItem('spatial_canvas_particles') !== 'false';
    } catch {
      return true;
    }
  });

  const [desktopTilt, setDesktopTilt] = useState(() => {
    try {
      const saved = localStorage.getItem('spatial_desktop_tilt');
      if (saved !== null) return saved !== 'false';
    } catch {}
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    const activeTheme = currentTheme || defaultTheme || themePresets[0];
    const activeFont = currentFont || defaultFont || fontPresets[0];
    const activeBlur = glassBlur || defaultBlur || '12px';
    const activeCorner = cornerStyle || defaultCornerStyle || 'edgy';

    if (activeTheme && activeTheme.colors) {
      const colors = { ...activeTheme.colors };
      if (customPrimary) {
        colors.primary = customPrimary;
        colors.glow = `${customPrimary}55`;
      }
      Object.entries(colors).forEach(([key, val]) => {
        root.style.setProperty(`--color-${key}`, val);
      });
      try {
        localStorage.setItem('spatial_theme_id', activeTheme.id);
      } catch {}
    }

    root.style.setProperty('--glass-blur', activeBlur);

    if (activeFont) {
      if (activeFont.sans) {
        root.style.setProperty('--font-sans', activeFont.sans);
        document.body.style.fontFamily = activeFont.sans;
      }
      if (activeFont.display) {
        root.style.setProperty('--font-display', activeFont.display);
      }
      try {
        localStorage.setItem('spatial_font_id', activeFont.id);
      } catch {}
    }

    root.setAttribute('data-corner-style', activeCorner);
    root.setAttribute('data-device-os', deviceOS);

    try {
      localStorage.setItem('spatial_corner_style', activeCorner);
      localStorage.setItem('spatial_glass_blur', activeBlur);
      localStorage.setItem('spatial_canvas_particles', String(canvasParticles));
      localStorage.setItem('spatial_desktop_tilt', String(desktopTilt));
      if (customPrimary) {
        localStorage.setItem('spatial_custom_primary', customPrimary);
      } else {
        localStorage.removeItem('spatial_custom_primary');
      }
    } catch {}
  }, [currentTheme, customPrimary, glassBlur, currentFont, cornerStyle, canvasParticles, desktopTilt, deviceOS]);

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

  const selectCornerStyle = (styleId) => {
    if (styleId === 'edgy' || styleId === 'rounded') {
      setCornerStyle(styleId);
    }
  };

  const resetTheme = () => {
    setCurrentTheme(defaultTheme || themePresets[0]);
    setCustomPrimary(null);
    setGlassBlur(defaultBlur || '12px');
    setCurrentFont(defaultFont || fontPresets[0]);
    const os = detectDeviceOS();
    setCornerStyle(os === 'ios' ? 'rounded' : (os === 'android' ? 'edgy' : (defaultCornerStyle || 'edgy')));
    setCanvasParticles(true);
    setDesktopTilt(true);
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
      blurPresets,
      fontPresets,
      currentFont,
      selectFont,
      cornerStyle,
      setCornerStyle: selectCornerStyle,
      cornerStylePresets,
      canvasParticles,
      setCanvasParticles,
      desktopTilt,
      setDesktopTilt,
      deviceOS,
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
