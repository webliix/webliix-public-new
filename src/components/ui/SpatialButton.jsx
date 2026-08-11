import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../../context/AudioContext';

export default function SpatialButton({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'glass'
  className = '',
  onClick,
  icon: Icon,
  ...props
}) {
  const { playHoverSound, playClickSound } = useAudio();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-theme-primary text-white shadow-spatial hover:shadow-spatial-lg hover:brightness-110';
      case 'secondary':
        return 'bg-theme-secondary text-white shadow-md hover:brightness-110';
      case 'outline':
        return 'border border-theme-border text-theme-text hover:border-theme-primary hover:bg-theme-border/20';
      case 'glass':
        return 'glass-spatial text-theme-text hover:border-theme-primary';
      default:
        return 'bg-theme-primary text-white';
    }
  };

  const handleClick = (e) => {
    playClickSound();
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onMouseEnter={playHoverSound}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-display font-semibold text-sm tracking-wide transition-all duration-300 ${getVariantStyles()} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
}
