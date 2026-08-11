import React, { useState } from 'react';
import { useAudio } from '../../context/AudioContext';

export default function GlassCard({
  children,
  className = '',
  onClick,
  hoverAudio = true,
  ...props
}) {
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const { playHoverSound, playClickSound } = useAudio();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (hoverAudio) playHoverSound();
  };

  const handleClick = (e) => {
    if (onClick) {
      playClickSound();
      onClick(e);
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={`glass-spatial rounded-3xl relative overflow-hidden transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {/* Specular Interactive Glass Glare */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${glarePosition.x}% ${glarePosition.y}%, var(--color-glow, rgba(37, 99, 235, 0.25)), transparent 80%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
