import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

/**
 * SpatialHeaderBackdrop — Fixed Ambient Header Backdrop for Subpages
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders an atmospheric, gently morphing gradient fixed behind the title section.
 * - Hardware-accelerated CSS translate3d transforms (0% CPU / GPU composited)
 * - Automatically fixed at top of viewport so title & breadcrumbs scroll smoothly over it
 * - Smooth continuous scroll fadeout without any visual cut
 * - Automatically pauses compositing (visibility: hidden) when completely faded out
 * - Zero JS loops or mouse tracking listeners for maximum speed & Core Web Vitals
 */
export default function SpatialHeaderBackdrop() {
  const location = useLocation();
  const { currentTheme } = useTheme();
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  // Homepage has its own dedicated interactive hero canvas
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (isHome) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Smooth continuous fade-out over 0px to 420px of scroll
          const fadeDistance = 420;
          const currentOpacity = Math.max(0, 1 - scrollY / fadeDistance);
          setOpacity(currentOpacity);
          setIsVisible(currentOpacity > 0);
          ticking = false;
        });
        ticking = true;
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
      className="pointer-events-none fixed top-0 left-0 right-0 h-[460px] sm:h-[540px] overflow-hidden z-0 select-none"
      style={{
        opacity,
        visibility: isVisible ? 'visible' : 'hidden',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0) 100%)',
        willChange: 'opacity'
      }}
    >
      <style>{`
        @keyframes headerAuroraShift {
          0% {
            transform: translate3d(-50%, -18%, 0) scale(1);
            opacity: 0.82;
          }
          50% {
            transform: translate3d(-48%, -12%, 0) scale(1.08);
            opacity: 1;
          }
          100% {
            transform: translate3d(-50%, -18%, 0) scale(1);
            opacity: 0.82;
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

      {/* Primary Top-Center Radiant Bloom - Vibrant & Eye-catching */}
      <div
        className="absolute top-0 left-1/2 w-[700px] sm:w-[980px] h-[360px] sm:h-[460px] rounded-full blur-[130px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.42) 0%, rgba(129, 140, 248, 0.28) 42%, rgba(168, 85, 247, 0.16) 72%, transparent 100%)'
            : 'radial-gradient(circle, rgba(2, 132, 199, 0.34) 0%, rgba(99, 102, 241, 0.22) 45%, transparent 100%)',
          animation: 'headerAuroraShift 14s ease-in-out infinite',
          willChange: 'transform, opacity'
        }}
      />

      {/* Floating Left Violet Orb - Rich ambient depth */}
      <div
        className="absolute -top-10 -left-16 w-[360px] sm:w-[540px] h-[340px] sm:h-[480px] rounded-full blur-[140px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.38) 0%, rgba(99, 102, 241, 0.20) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(147, 51, 234, 0.26) 0%, transparent 100%)',
          animation: 'headerOrbLeft 18s ease-in-out infinite',
          willChange: 'transform'
        }}
      />

      {/* Floating Right Electric Cyan Orb - Bright energetic glow */}
      <div
        className="absolute -top-10 -right-16 w-[360px] sm:w-[540px] h-[340px] sm:h-[480px] rounded-full blur-[140px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.38) 0%, rgba(52, 211, 153, 0.18) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(14, 165, 233, 0.28) 0%, transparent 100%)',
          animation: 'headerOrbRight 22s ease-in-out infinite',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
