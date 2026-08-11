import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Volume2, VolumeX, RotateCcw, Sliders, Type, Zap, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAudio } from '../../context/AudioContext';

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
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 glass-spatial p-5 rounded-3xl w-84 shadow-spatial-lg border border-theme-border text-theme-text mb-2 space-y-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-theme-border pb-3">
              <span className="font-display font-semibold text-sm flex items-center gap-2">
                <Palette className="w-4 h-4 text-theme-primary" /> Theme & Glass Controls
              </span>
              <button
                onClick={resetTheme}
                className="text-xs text-theme-muted hover:text-theme-primary flex items-center gap-1 transition"
                title="Reset to default"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Color Presets */}
            <div>
              <label className="text-xs font-semibold text-theme-muted uppercase tracking-wider block mb-2">
                Color Mode Presets
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {themePresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => selectTheme(preset.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      currentTheme.id === preset.id
                        ? 'bg-theme-primary text-white shadow-md'
                        : 'hover:bg-theme-border/20 text-theme-text'
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
              <label className="text-xs font-semibold text-theme-muted uppercase tracking-wider block mb-2 flex items-center gap-1">
                <Type className="w-3.5 h-3.5 text-theme-primary" /> Font Pairings
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {fontPresets.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => selectFont(font.id)}
                    className={`px-3 py-2 rounded-xl text-xs text-left font-medium transition ${
                      currentFont.id === font.id
                        ? 'bg-theme-primary text-white font-bold shadow-sm'
                        : 'glass-spatial text-theme-muted hover:text-theme-text'
                    }`}
                  >
                    {font.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Primary Accent Picker */}
            <div>
              <label className="text-xs font-semibold text-theme-muted uppercase tracking-wider block mb-2">
                Accent Colors
              </label>
              <div className="flex items-center gap-2">
                {customColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setPrimaryColor(color)}
                    className="w-6 h-6 rounded-full border border-white/20 transition-transform hover:scale-125 shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Glass Backdrop Blur Controls */}
            <div>
              <label className="text-xs font-semibold text-theme-muted uppercase tracking-wider block mb-2 flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5 text-theme-primary" /> Glassmorphism Blur
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {blurOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setGlassBlur(option.value)}
                    className={`py-1.5 px-2.5 rounded-xl text-[11px] font-semibold transition ${
                      glassBlur === option.value
                        ? 'bg-theme-primary text-white shadow-sm'
                        : 'glass-spatial text-theme-muted hover:text-theme-text'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3D Particle Canvas Toggle */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-medium text-theme-muted flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-theme-primary" /> 3D Grid Animation
              </span>
              <button
                onClick={() => setCanvasParticles(!canvasParticles)}
                className={`py-1 px-3 rounded-xl text-xs font-semibold transition ${
                  canvasParticles
                    ? 'bg-theme-primary/20 text-theme-primary border border-theme-primary'
                    : 'glass-spatial text-theme-muted'
                }`}
              >
                {canvasParticles ? 'ON' : 'OFF'}
              </button>
            </div>

            {/* Sound FX Toggle */}
            <div className="pt-2 border-t border-theme-border flex items-center justify-between">
              <span className="text-xs font-medium text-theme-muted flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-theme-primary" /> Sound FX
              </span>
              <button
                onClick={toggleSound}
                className={`p-2 rounded-xl text-xs flex items-center gap-1.5 font-medium transition ${
                  soundEnabled
                    ? 'bg-theme-primary/20 text-theme-primary border border-theme-primary'
                    : 'bg-theme-border/30 text-theme-muted'
                }`}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{soundEnabled ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 p-3.5 rounded-full glass-spatial border border-theme-primary shadow-spatial text-theme-primary hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle Theme Customizer"
      >
        <Palette className="w-6 h-6" />
      </button>
    </div>
  );
}
