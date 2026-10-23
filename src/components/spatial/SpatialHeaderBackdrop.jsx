import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

/**
 * SpatialHeaderBackdrop — Fixed Ambient Header Backdrop for Subpages
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders an atmospheric, gently morphing gradient fixed behind the title section.
 * - Hardware-accelerated CSS translate3d transforms (0% CPU / GPU composited)
 * - Automatically fixed at top of viewport so title & breadcrumbs scroll smoothly over it
 * - Automatically pauses compositing (visibility: hidden) when scrolled past header (>380px)
 * - Zero JS loops or mouse tracking listeners for maximum speed & Core Web Vitals
 */
export default function SpatialHeaderBackdrop() {
  const location = useLocation();
  const { currentTheme } = useTheme();
  const [scrolledPast, setScrolledPast] = useState(false);

  // Homepage has its own dedicated interactive hero canvas
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (isHome) return;

    let lastState = false;
    const handleScroll = () => {
      const isPast = window.scrollY > 380;
      if (isPast !== lastState) {
        lastState = isPast;
        setScrolledPast(isPast);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  if (isHome) {
    return null;
  }

  const isDark = currentTheme ? currentTheme.isDark !== false : true;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 right-0 h-[400px] sm:h-[480px] overflow-hidden z-0 select-none transition-opacity duration-500 ease-out"
      style={{
        opacity: scrolledPast ? 0 : 1,
        visibility: scrolledPast ? 'hidden' : 'visible',
        willChange: 'opacity, transform'
      }}
    >
      <style>{`
        @keyframes headerAuroraShift {
          0% {
            transform: translate3d(-50%, -20%, 0) scale(1);
            opacity: 0.75;
          }
          50% {
            transform: translate3d(-48%, -15%, 0) scale(1.1);
            opacity: 0.95;
          }
          100% {
            transform: translate3d(-50%, -20%, 0) scale(1);
            opacity: 0.75;
          }
        }

        @keyframes headerOrbLeft {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(35px, 20px, 0) scale(1.12);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes headerOrbRight {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-30px, -18px, 0) scale(1.1);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>

      {/* Primary Top-Center Radiant Bloom */}
      <div
        className="absolute top-0 left-1/2 w-[650px] sm:w-[920px] h-[340px] sm:h-[420px] rounded-full blur-[130px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(129, 140, 248, 0.18) 45%, rgba(168, 85, 247, 0.08) 75%, transparent 100%)'
            : 'radial-gradient(circle, rgba(2, 132, 199, 0.22) 0%, rgba(99, 102, 241, 0.14) 45%, transparent 100%)',
          animation: 'headerAuroraShift 14s ease-in-out infinite',
          willChange: 'transform, opacity'
        }}
      />

      {/* Floating Left Violet Orb */}
      <div
        className="absolute -top-10 -left-16 w-[340px] sm:w-[500px] h-[320px] sm:h-[460px] rounded-full blur-[140px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(99, 102, 241, 0.12) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(147, 51, 234, 0.16) 0%, transparent 100%)',
          animation: 'headerOrbLeft 18s ease-in-out infinite',
          willChange: 'transform'
        }}
      />

      {/* Floating Right Electric Cyan Orb */}
      <div
        className="absolute -top-10 -right-16 w-[340px] sm:w-[500px] h-[320px] sm:h-[460px] rounded-full blur-[140px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.26) 0%, rgba(52, 211, 153, 0.10) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, transparent 100%)',
          animation: 'headerOrbRight 22s ease-in-out infinite',
          willChange: 'transform'
        }}
      />

      {/* Soft Bottom Fade Mask */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-theme-bg"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}
