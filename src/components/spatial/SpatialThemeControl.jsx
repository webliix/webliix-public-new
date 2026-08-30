import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  Volume2,
  VolumeX,
  RotateCcw,
  Sliders,
  Type,
  Zap,
  X,
  Sparkles,
  CheckCircle2,
  Square,
  CircleDot,
  Layers,
  Check
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAudio } from '../../context/AudioContext';
import WebliixCard from '../ui/WebliixCard';
import WebliixIcon from '../ui/WebliixIcon';
import WebliixButton from '../ui/WebliixButton';

export default function SpatialThemeControl() {
  const [isOpen, setIsOpen] = useState(false);
  const {
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
    setCornerStyle,
    cornerStylePresets,
    canvasParticles,
    setCanvasParticles,
    resetTheme
  } = useTheme();

  const { soundEnabled, toggleSound } = useAudio();

  const customColors = ['#38bdf8', '#2563eb', '#10b981', '#e879f9', '#fbbf24', '#06b6d4', '#f97316'];

  useEffect(() => {
    if (isOpen) {
      document.documentElement.setAttribute('data-theme-control-open', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.removeAttribute('data-theme-control-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.removeAttribute('data-theme-control-open');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Big Full-Screen Spatial Theme Modal — Zero Scroll */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden">
            {/* Fullscreen Backdrop Blur — Live Glass Blur Controlled */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-0 transition-[backdrop-filter,background-color] duration-300"
              style={{
                backdropFilter: `blur(var(--glass-blur, ${glassBlur || '12px'}))`,
                WebkitBackdropFilter: `blur(var(--glass-blur, ${glassBlur || '12px'}))`
              }}
            />

            {/* Expansive Studio Modal Body — Compact No-Scroll Dashboard with Live Glass Blur */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="relative z-10 w-full max-w-4xl max-h-[96vh] sm:max-h-[90vh] overflow-hidden theme-rounded-card glass-spatial border border-theme-primary/50 shadow-[0_25px_90px_rgba(0,0,0,0.7)] p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between space-y-2.5 sm:space-y-3.5 transition-[backdrop-filter,background-color,border-color] duration-300"
              style={{
                backdropFilter: `blur(var(--glass-blur, ${glassBlur || '12px'}))`,
                WebkitBackdropFilter: `blur(var(--glass-blur, ${glassBlur || '12px'}))`,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Header */}
              <div className="flex items-center justify-between border-b border-theme-border/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 theme-rounded-card bg-theme-primary/15 border border-theme-primary/30 text-theme-primary">
                    <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <div>
                    <h2 className="text-sm sm:text-base lg:text-lg font-display font-extrabold text-theme-text leading-tight flex items-center gap-1.5">
                      Theme &amp; Spatial Studio
                      <span className="px-1.5 py-0.2 theme-rounded-badge bg-theme-primary/20 text-theme-primary text-[9px] font-mono font-bold uppercase hidden sm:inline">
                        v2.0
                      </span>
                    </h2>
                    <span className="text-[10px] sm:text-xs text-theme-muted hidden sm:block">
                      Live visual customization of colors, typography, corners &amp; glass
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={resetTheme}
                    className="px-2 py-1 theme-rounded-btn glass-spatial border border-theme-border text-[10.5px] font-mono text-theme-muted hover:text-theme-primary hover:border-theme-primary transition flex items-center gap-1"
                    title="Reset all settings to default"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span className="hidden sm:inline">Reset</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 theme-rounded-btn glass-spatial border border-theme-border text-theme-muted hover:text-theme-text hover:border-theme-primary transition"
                    aria-label="Close Studio"
                  >
                    <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </button>
                </div>
              </div>

              {/* Main Dashboard Grid (2 columns on md+) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5 flex-1 overflow-hidden">
                
                {/* Left Column: Color Themes + Typography */}
                <div className="space-y-2.5 sm:space-y-3 flex flex-col justify-between">
                  {/* 1. Color Themes (6 items: 3-col grid) */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-[9.5px] sm:text-[10.5px] font-mono font-bold text-theme-muted uppercase tracking-wider flex items-center gap-1">
                        <Layers className="w-3 h-3 text-theme-primary" /> Theme Presets
                      </label>
                      <span className="text-[9.5px] font-mono text-theme-primary font-semibold truncate max-w-[120px]">
                        {currentTheme?.name}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {themePresets.map((preset) => {
                        const isSelected = currentTheme?.id === preset.id;
                        return (
                          <button
                            key={preset.id}
                            onClick={() => selectTheme(preset.id)}
                            className={`p-1.5 sm:p-2 theme-rounded-card transition-all border text-left flex flex-col justify-between ${
                              isSelected
                                ? 'bg-theme-primary/20 border-theme-primary shadow-sm ring-1 ring-theme-primary/60'
                                : 'glass-spatial border-theme-border/60 hover:border-theme-border hover:bg-theme-card/60'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs">{preset.icon}</span>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-theme-primary animate-pulse" />}
                            </div>
                            <span className="text-[10px] sm:text-[11px] font-display font-bold text-theme-text truncate block mt-0.5">
                              {preset.name.replace(/^[^\s]+\s/, '')}
                            </span>
                            <div className="flex items-center gap-0.5 pt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: preset.colors.primary }} />
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: preset.colors.secondary }} />
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: preset.colors.accent }} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Typography Pairings (6 items: 3-col grid) */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-[9.5px] sm:text-[10.5px] font-mono font-bold text-theme-muted uppercase tracking-wider flex items-center gap-1">
                        <Type className="w-3 h-3 text-theme-primary" /> Typography Pairings
                      </label>
                      <span className="text-[9.5px] font-mono text-theme-primary font-semibold truncate max-w-[120px]">
                        {currentFont?.name?.replace(' (Default)', '')}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {fontPresets.map((font) => {
                        const isSelected = currentFont?.id === font.id;
                        return (
                          <button
                            key={font.id}
                            onClick={() => selectFont(font.id)}
                            className={`p-1.5 sm:p-2 theme-rounded-card transition-all border text-left flex flex-col justify-between ${
                              isSelected
                                ? 'bg-theme-primary/20 border-theme-primary shadow-sm ring-1 ring-theme-primary/60'
                                : 'glass-spatial border-theme-border/60 hover:border-theme-border hover:bg-theme-card/60'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] sm:text-[11px] font-bold text-theme-text truncate block">
                                {font.name.replace(' (Default)', '')}
                              </span>
                              {isSelected && <Check className="w-2.5 h-2.5 text-theme-primary shrink-0" />}
                            </div>
                            <span className="text-[8.5px] text-theme-muted font-mono truncate block mt-0.5">
                              {font.display.split(',')[0].replace(/'/g, '')}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column: Corner Geometry + Glass Blur + Accents & Switches */}
                <div className="space-y-2.5 sm:space-y-3 flex flex-col justify-between">
                  
                  {/* 3. Corner Geometry (2 items) */}
                  <div className="space-y-1">
                    <label className="text-[9.5px] sm:text-[10.5px] font-mono font-bold text-theme-muted uppercase tracking-wider flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-theme-primary" /> Corner Geometry
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {cornerStylePresets.map((style) => {
                        const isSelected = cornerStyle === style.id;
                        return (
                          <button
                            key={style.id}
                            onClick={() => setCornerStyle(style.id)}
                            className={`p-2 sm:p-2.5 theme-rounded-card transition-all border text-left flex items-center justify-between ${
                              isSelected
                                ? 'bg-theme-primary/20 border-theme-primary shadow-sm ring-1 ring-theme-primary/60'
                                : 'glass-spatial border-theme-border/60 hover:border-theme-border hover:bg-theme-card/60'
                            }`}
                          >
                            <div>
                              <span className="text-[10.5px] sm:text-xs font-mono font-bold text-theme-text block">
                                {style.name}
                              </span>
                              <span className="text-[9px] text-theme-muted block mt-0.5">
                                {style.id === 'edgy' ? '0px / 4px geometric' : '20px / 24px curves'}
                              </span>
                            </div>
                            {isSelected && <CheckCircle2 className="w-3 h-3 text-theme-primary shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Glassmorphism Blur (3 items) */}
                  <div className="space-y-1">
                    <label className="text-[9.5px] sm:text-[10.5px] font-mono font-bold text-theme-muted uppercase tracking-wider flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-theme-primary" /> Glassmorphism Blur
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(blurPresets || [
                        { id: 'off', label: 'Off (0px)', value: '0px' },
                        { id: 'light', label: 'Light (12px)', value: '12px' },
                        { id: 'max', label: 'Maximum (32px)', value: '32px' }
                      ]).map((opt) => {
                        const isSelected = glassBlur === opt.value;
                        return (
                          <button
                            key={opt.value}
                            onClick={() => setGlassBlur(opt.value)}
                            className={`p-1.5 sm:p-2 theme-rounded-card transition-all border text-center flex flex-col justify-between ${
                              isSelected
                                ? 'bg-theme-primary/20 border-theme-primary shadow-sm ring-1 ring-theme-primary/60'
                                : 'glass-spatial border-theme-border/60 hover:border-theme-border hover:bg-theme-card/60'
                            }`}
                          >
                            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-theme-text block">
                              {opt.label}
                            </span>
                            <span className={`text-[8.5px] font-mono block ${isSelected ? 'text-theme-primary font-bold' : 'text-theme-muted'}`}>
                              {opt.value}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 5. Custom Accent + 3D Grid + Sound FX (Inline Strip) */}
                  <div className="p-2 sm:p-2.5 theme-rounded-card glass-spatial border border-theme-border/60 flex flex-wrap items-center justify-between gap-2">
                    {/* Accent dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9.5px] font-mono text-theme-muted uppercase mr-0.5 hidden sm:inline">Accent:</span>
                      {customColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setPrimaryColor(color)}
                          className={`w-4 h-4 sm:w-5 sm:h-5 theme-rounded-badge border transition-transform hover:scale-125 shadow-sm ${
                            customPrimary === color ? 'ring-2 ring-white scale-110 border-white' : 'border-white/20'
                          }`}
                          style={{ backgroundColor: color }}
                          title={`Select ${color}`}
                        />
                      ))}
                    </div>

                    {/* Toggles */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setCanvasParticles(!canvasParticles)}
                        className={`px-2 py-0.5 theme-rounded-btn text-[9.5px] sm:text-[10px] font-mono font-semibold transition flex items-center gap-1 ${
                          canvasParticles
                            ? 'bg-theme-primary/20 text-theme-primary border border-theme-primary font-bold'
                            : 'glass-spatial text-theme-muted border border-theme-border/60'
                        }`}
                        title="Toggle 3D Background Grid"
                      >
                        <Zap className="w-2.5 h-2.5" />
                        <span>Grid:{canvasParticles ? 'ON' : 'OFF'}</span>
                      </button>

                      <button
                        onClick={toggleSound}
                        className={`px-2 py-0.5 theme-rounded-btn text-[9.5px] sm:text-[10px] flex items-center gap-1 font-mono font-semibold transition ${
                          soundEnabled
                            ? 'bg-theme-primary/20 text-theme-primary border border-theme-primary font-bold'
                            : 'glass-spatial text-theme-muted border border-theme-border/60'
                        }`}
                        title="Toggle Audio Feedback"
                      >
                        {soundEnabled ? <Volume2 className="w-2.5 h-2.5" /> : <VolumeX className="w-2.5 h-2.5" />}
                        <span>Sound:{soundEnabled ? 'ON' : 'OFF'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="pt-2 border-t border-theme-border/60 flex items-center justify-between">
                <span className="text-[9.5px] sm:text-xs font-mono text-theme-muted truncate mr-2">
                  {currentTheme?.name} • {currentFont?.name?.replace(' (Default)', '')} • {cornerStyle} • blur:{glassBlur}
                </span>
                <WebliixButton
                  variant="primary"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1 text-xs shrink-0"
                >
                  Done &amp; Apply
                </WebliixButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 floating-action-btn w-12 h-12 theme-rounded-btn glass-spatial border border-theme-primary shadow-spatial text-theme-primary hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        style={{
          backdropFilter: `blur(var(--glass-blur, ${glassBlur || '12px'}))`,
          WebkitBackdropFilter: `blur(var(--glass-blur, ${glassBlur || '12px'}))`
        }}
        aria-label="Toggle Theme Customizer"
        title="Open Theme &amp; Design Studio"
      >
        <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </>
  );
}


