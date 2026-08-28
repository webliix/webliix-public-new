import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Volume2, VolumeX, RotateCcw, Sliders, Type, Zap, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAudio } from '../../context/AudioContext';
import WebliixCard from '../ui/WebliixCard';
import WebliixIcon from '../ui/WebliixIcon';

export default function SpatialThemeControl() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    currentTheme,
    themePresets,
    selectTheme,
    setPrimaryColor,
    glassBlur,
    setGlassBlur,
    fontPresets,
    currentFont,
    selectFont,
    canvasParticles,
    setCanvasParticles,
    resetTheme
  } = useTheme();

  const { soundEnabled, toggleSound } = useAudio();

  const customColors = ['#2563eb', '#7c3aed', '#ec4899', '#10b981', '#f97316', '#06b6d4', '#eab308'];

  const blurOptions = [
    { label: 'Ultra (40px)', value: '40px' },
    { label: 'High (28px)', value: '28px' },
    { label: 'Med (18px)', value: '18px' },
    { label: 'Light (8px)', value: '8px' },
    { label: 'Off (0px)', value: '0px' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed sm:absolute bottom-36 sm:bottom-32 right-4 sm:right-0 z-50"

          >
            <WebliixCard
              variant="spatial"
              className="w-[calc(100vw-2rem)] sm:w-84 max-w-sm p-5 space-y-4 max-h-[75vh] overflow-y-auto text-theme-text border border-theme-primary/50 shadow-spatial-lg"
              style={{
                backdropFilter: `blur(${glassBlur})`,
                WebkitBackdropFilter: `blur(${glassBlur})`,
              }}
            >
              <div className="flex items-center justify-between border-b border-theme-border/70 pb-3">
                <span className="font-display font-bold text-sm flex items-center gap-2 text-theme-text">
                  <WebliixIcon icon={Palette} variant="inline" size="md" /> Theme &amp; Glass Controls
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={resetTheme}
                    className="text-xs font-mono text-theme-muted hover:text-theme-primary flex items-center gap-1 transition px-2 py-1 rounded-none sm:rounded-[4px] hover:bg-theme-primary/10"
                    title="Reset to default"
                  >
                    <WebliixIcon icon={RotateCcw} variant="inline" size="xs" color="inherit" /> Reset
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-none sm:rounded-[4px] hover:bg-theme-border/40 text-theme-muted hover:text-theme-text transition sm:hidden"
                    aria-label="Close Popup"
                  >
                    <WebliixIcon icon={X} variant="inline" size="md" color="inherit" />
                  </button>
                </div>
              </div>

              {/* Color Presets */}
              <div>
                <label className="text-[11px] font-mono font-bold text-theme-muted uppercase tracking-wider block mb-2">
                  Color Mode Presets
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {themePresets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => selectTheme(preset.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-none sm:rounded-[4px] text-xs font-medium transition-all ${
                        currentTheme.id === preset.id
                          ? 'bg-theme-primary text-white shadow-sm font-bold border border-theme-primary'
                          : 'hover:bg-theme-primary/10 hover:border-theme-primary/40 text-theme-text glass-spatial border border-theme-border/60'
                      }`}
                    >
                      <span>{preset.icon}</span>
                      <span>{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Pair Combinations */}
              <div>
                <label className="text-[11px] font-mono font-bold text-theme-muted uppercase tracking-wider block mb-2 flex items-center gap-1">
                  <WebliixIcon icon={Type} variant="inline" size="sm" /> Font Pairings
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {fontPresets.map((font) => (
                    <button
                      key={font.id}
                      onClick={() => selectFont(font.id)}
                      className={`px-3 py-2 rounded-none sm:rounded-[4px] text-xs text-left font-medium transition ${
                        currentFont.id === font.id
                          ? 'bg-theme-primary text-white font-bold shadow-sm border border-theme-primary'
                          : 'glass-spatial text-theme-muted hover:text-theme-text border border-theme-border/60 hover:border-theme-primary/40'
                      }`}
                    >
                      {font.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Primary Accent Picker */}
              <div>
                <label className="text-[11px] font-mono font-bold text-theme-muted uppercase tracking-wider block mb-2">
                  Accent Colors
                </label>
                <div className="flex items-center gap-2">
                  {customColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setPrimaryColor(color)}
                      className="w-6 h-6 rounded-none sm:rounded-[2px] border border-white/20 transition-transform hover:scale-125 shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Glass Backdrop Blur Controls */}
              <div>
                <label className="text-[11px] font-mono font-bold text-theme-muted uppercase tracking-wider block mb-2 flex items-center gap-1">
                  <WebliixIcon icon={Sliders} variant="inline" size="sm" /> Glassmorphism Blur
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {blurOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setGlassBlur(option.value)}
                      className={`py-1.5 px-2.5 rounded-none sm:rounded-[4px] text-[11px] font-semibold transition ${
                        glassBlur === option.value
                          ? 'bg-theme-primary text-white shadow-sm font-bold border border-theme-primary'
                          : 'glass-spatial text-theme-muted hover:text-theme-text border border-theme-border/60 hover:border-theme-primary/40'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3D Particle Canvas Toggle */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-mono font-medium text-theme-muted flex items-center gap-1">
                  <WebliixIcon icon={Zap} variant="inline" size="sm" /> 3D Grid Animation
                </span>
                <button
                  onClick={() => setCanvasParticles(!canvasParticles)}
                  className={`py-1 px-3 rounded-none sm:rounded-[4px] text-xs font-mono font-semibold transition ${
                    canvasParticles
                      ? 'bg-theme-primary/20 text-theme-primary border border-theme-primary font-bold'
                      : 'glass-spatial text-theme-muted border border-theme-border/60'
                  }`}
                >
                  {canvasParticles ? 'ON' : 'OFF'}
                </button>
              </div>

              {/* Sound FX Toggle */}
              <div className="pt-2 border-t border-theme-border/70 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-theme-muted flex items-center gap-1">
                  <WebliixIcon icon={Volume2} variant="inline" size="sm" /> Sound FX
                </span>
                <button
                  onClick={toggleSound}
                  className={`p-2 rounded-none sm:rounded-[4px] text-xs flex items-center gap-1.5 font-mono font-medium transition ${
                    soundEnabled
                      ? 'bg-theme-primary/20 text-theme-primary border border-theme-primary font-bold'
                      : 'bg-theme-border/30 text-theme-muted border border-theme-border/60'
                  }`}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span>{soundEnabled ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </WebliixCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-none sm:rounded-[4px] glass-spatial border border-theme-primary shadow-spatial text-theme-primary hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle Theme Customizer"
      >
        <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
}

