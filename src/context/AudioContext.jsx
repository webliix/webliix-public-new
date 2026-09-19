import React, { createContext, useContext, useState, useRef } from 'react';

const AudioContextState = createContext(null);

export const AudioProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('spatial_sound_enabled') === 'true';
  });

  const audioCtxRef = useRef(null);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    localStorage.setItem('spatial_sound_enabled', String(nextState));
  };

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Synthesize futuristic hover sound tone
  const playHoverSound = () => {
    if (!soundEnabled) return;
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Ignore audio policy errors
    }
  };

  // Synthesize futuristic click sound tone
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // Ignore audio policy errors
    }
  };

  // Generic playSound dispatcher supporting hover, click, success, and error tones
  const playSound = (type = 'click') => {
    if (!soundEnabled) return;
    try {
      if (type === 'hover') {
        playHoverSound();
      } else if (type === 'click') {
        playClickSound();
      } else if (type === 'success') {
        initAudio();
        const ctx = audioCtxRef.current;
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else if (type === 'error') {
        initAudio();
        const ctx = audioCtxRef.current;
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.18);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      } else {
        playClickSound();
      }
    } catch {
      // Ignore audio policy errors
    }
  };

  return (
    <AudioContextState.Provider value={{
      soundEnabled,
      toggleSound,
      playHoverSound,
      playClickSound,
      playSound
    }}>
      {children}
    </AudioContextState.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContextState);
  if (!context) {
    const noop = () => {};
    return {
      soundEnabled: false,
      toggleSound: noop,
      playHoverSound: noop,
      playClickSound: noop,
      playSound: noop
    };
  }
  return context;
};
