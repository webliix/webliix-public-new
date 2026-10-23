import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * SpatialHeroCanvas — Premium Ambient Atmospheric Backdrop
 * ─────────────────────────────────────────────────────────────
 * Clean, modern luxury ambient lighting with smooth glowing auroras
 * and delicate floating light particles. Zero harsh wireframe grid lines.
 */
export default function SpatialHeroCanvas() {
  const canvasRef = useRef(null);
  const { currentTheme, canvasParticles } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const updateDimensions = () => {
      canvas.width = Math.max(window.innerWidth || 0, 320);
      canvas.height = Math.max(window.innerHeight || 0, 480);
    };

    updateDimensions();
    let width = canvas.width;
    let height = canvas.height;

    let cachedRect = null;
    const getRect = () => {
      if (!cachedRect && canvas) {
        cachedRect = canvas.getBoundingClientRect();
      }
      return cachedRect;
    };

    const handleResize = () => {
      updateDimensions();
      width = canvas.width;
      height = canvas.height;
      cachedRect = null;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
      cachedRect = null;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 280,
      active: false
    };

    const updateMousePos = (clientX, clientY) => {
      const rect = getRect();
      if (!rect) return;
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseMove = (e) => {
      updateMousePos(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updateMousePos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Floating Starlight Ambient Dust (Subtle, non-intrusive)
    const particleCount = isMobile ? 16 : 36;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2
      });
    }

    const primaryColor = currentTheme?.colors?.primary || '#38bdf8';
    const isDark = currentTheme ? currentTheme.isDark !== false : true;

    let time = 0;
    let isVisible = true;
    let isRendering = false;

    const render = () => {
      if (!isVisible) {
        isRendering = false;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth Physics Damping
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;
      scrollY += (targetScrollY - scrollY) * 0.08;
      time += 0.015;

      // ─────────────────────────────────────────────────────────────
      // 1. SOFT AMBIENT GLOW AURORAS (No grid lines whatsoever)
      // ─────────────────────────────────────────────────────────────
      if (canvasParticles !== false) {
        // Primary Center-Top Aurora Orb (breathes and floats with mouse)
        const orb1X = width * 0.5 + (mouse.x - width * 0.5) * 0.12 + Math.sin(time * 0.7) * 40;
        const orb1Y = height * 0.32 + (mouse.y - height * 0.32) * 0.12 + Math.cos(time * 0.5) * 30;
        const orb1Radius = Math.min(width * 0.45, 480);

        const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, orb1Radius);
        grad1.addColorStop(0, isDark ? 'rgba(56, 189, 248, 0.14)' : 'rgba(37, 99, 235, 0.10)');
        grad1.addColorStop(0.5, isDark ? 'rgba(56, 189, 248, 0.04)' : 'rgba(37, 99, 235, 0.03)');
        grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.arc(orb1X, orb1Y, orb1Radius, 0, Math.PI * 2);
        ctx.fill();

        // Secondary Accent Aurora Orb (Cyan / Indigo side glow)
        const orb2X = width * 0.75 + (mouse.x - width * 0.75) * 0.08 - Math.cos(time * 0.6) * 35;
        const orb2Y = height * 0.45 + (mouse.y - height * 0.45) * 0.08 + Math.sin(time * 0.4) * 25;
        const orb2Radius = Math.min(width * 0.35, 380);

        const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, orb2Radius);
        grad2.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.10)' : 'rgba(147, 51, 234, 0.07)');
        grad2.addColorStop(0.6, isDark ? 'rgba(99, 102, 241, 0.02)' : 'rgba(147, 51, 234, 0.01)');
        grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.arc(orb2X, orb2Y, orb2Radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // ─────────────────────────────────────────────────────────────
      // 2. DELICATE AMBIENT PARTICLES (Soft stars / motes of light)
      // ─────────────────────────────────────────────────────────────
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const particleY = p.y + scrollY * 0.12;

        // Subtle mouse push
        const dx = mouse.x - p.x;
        const dy = mouse.y - particleY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius * 0.6) {
          const force = (mouse.radius * 0.6 - dist) / (mouse.radius * 0.6);
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        const currentAlpha = p.alpha * (0.7 + 0.3 * Math.sin(time * 2 + p.phase));

        ctx.save();
        ctx.fillStyle = primaryColor;
        ctx.globalAlpha = isDark ? currentAlpha : currentAlpha * 1.2;
        ctx.beginPath();
        ctx.arc(p.x, particleY, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const startRendering = () => {
      if (!isRendering && isVisible) {
        isRendering = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopRendering = () => {
      isRendering = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startRendering();
        } else {
          stopRendering();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    startRendering();

    return () => {
      observer.disconnect();
      stopRendering();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [canvasParticles, currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 w-full h-full"
      style={{
        opacity: 0.9,
        mixBlendMode: 'screen'
      }}
    />
  );
}
