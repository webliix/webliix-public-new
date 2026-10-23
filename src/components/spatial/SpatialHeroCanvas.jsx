import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * SpatialHeroCanvas — Interactive Radiant Fluid Aurora & Constellation Engine
 * ─────────────────────────────────────────────────────────────────────────────
 * Features:
 * - Dynamic cursor-following interactive spotlight aurora (high luminance & vibrant depth)
 * - Automatic organic drift when cursor is idle for continuous atmospheric motion
 * - DPR-aware crystal-clear rendering across Retina and High-DPI screens
 * - 3 Harmonic fluid wave ribbons that organically ripple and displace around the cursor
 * - Interactive magnetic constellation nodes with glowing filament connections to cursor
 * - Multi-spectral ambient gradients (Electric Cyan, Violet & Emerald)
 * - Zero wireframe grid lines; pure organic modern atmospheric depth
 */
export default function SpatialHeroCanvas() {
  const canvasRef = useRef(null);
  const { currentTheme, canvasParticles } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = 0;
    let height = 0;

    const updateDimensions = () => {
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : null;
      const displayWidth = rect && rect.width > 0 ? rect.width : (window.innerWidth || 1200);
      const displayHeight = rect && rect.height > 0 ? Math.max(rect.height, 650) : Math.max(window.innerHeight || 0, 650);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      width = displayWidth;
      height = displayHeight;
    };

    updateDimensions();

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      radius: 300,
      active: false
    };

    const updateMousePos = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseMove = (e) => updateMousePos(e.clientX, e.clientY);
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

    // Interactive Constellation Nodes
    const nodeCount = isMobile ? 24 : 52;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (width || 1000),
        y: Math.random() * (height || 800),
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2 + 1.2,
        alpha: Math.random() * 0.45 + 0.35,
        phase: Math.random() * Math.PI * 2,
        colorIndex: i % 3
      });
    }

    const primaryColor = currentTheme?.colors?.primary || '#38bdf8';
    const isDark = currentTheme ? currentTheme.isDark !== false : true;

    // Palette for rich spectral ambient lighting
    const colors = isDark
      ? ['#38bdf8', '#a855f7', '#34d399'] // Cyan, Purple, Emerald
      : ['#0284c7', '#7c3aed', '#059669'];

    let time = 0;
    let isVisible = true;
    let isRendering = false;

    const render = () => {
      if (!isVisible) {
        isRendering = false;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth physics interpolation for mouse & scroll
      if (!mouse.active) {
        // Natural organic idle drift so the aurora spotlight is always moving gracefully
        mouse.targetX = width * 0.5 + Math.sin(time * 0.6) * (width * 0.24);
        mouse.targetY = height * 0.35 + Math.cos(time * 0.5) * (height * 0.16);
      }

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      scrollY += (targetScrollY - scrollY) * 0.08;
      time += 0.016;

      if (canvasParticles !== false) {
        // ─────────────────────────────────────────────────────────────
        // 1. DYNAMIC RADIANT SPOTLIGHT BLOOM (Luminous Halo Following Cursor)
        // ─────────────────────────────────────────────────────────────
        ctx.save();
        const spotRadius = isMobile ? 360 : 600;
        const spotGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, spotRadius);
        
        spotGrad.addColorStop(0, isDark ? 'rgba(56, 189, 248, 0.42)' : 'rgba(37, 99, 235, 0.30)');
        spotGrad.addColorStop(0.3, isDark ? 'rgba(168, 85, 247, 0.24)' : 'rgba(124, 58, 237, 0.18)');
        spotGrad.addColorStop(0.65, isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(37, 99, 235, 0.05)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // ─────────────────────────────────────────────────────────────
        // 2. BREATHING SPECTRAL AURORA ORBS
        // ─────────────────────────────────────────────────────────────
        // Top-Left Violet Aurora
        const orb1X = width * 0.25 + Math.sin(time * 0.5) * 70;
        const orb1Y = height * 0.30 + Math.cos(time * 0.4) * 45;
        const orb1Radius = isMobile ? 280 : 460;

        const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, orb1Radius);
        grad1.addColorStop(0, isDark ? 'rgba(168, 85, 247, 0.32)' : 'rgba(124, 58, 237, 0.22)');
        grad1.addColorStop(0.55, isDark ? 'rgba(168, 85, 247, 0.10)' : 'rgba(124, 58, 237, 0.06)');
        grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.arc(orb1X, orb1Y, orb1Radius, 0, Math.PI * 2);
        ctx.fill();

        // Right-Center Cyan Aurora
        const orb2X = width * 0.75 - Math.cos(time * 0.6) * 60;
        const orb2Y = height * 0.45 + Math.sin(time * 0.5) * 50;
        const orb2Radius = isMobile ? 300 : 500;

        const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, orb2Radius);
        grad2.addColorStop(0, isDark ? 'rgba(6, 182, 212, 0.36)' : 'rgba(2, 132, 199, 0.24)');
        grad2.addColorStop(0.55, isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.07)');
        grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.arc(orb2X, orb2Y, orb2Radius, 0, Math.PI * 2);
        ctx.fill();

        // Bottom-Center Emerald Aurora Bloom
        const orb3X = width * 0.50 + Math.sin(time * 0.4) * 50;
        const orb3Y = height * 0.75 + Math.cos(time * 0.6) * 40;
        const orb3Radius = isMobile ? 260 : 420;

        const grad3 = ctx.createRadialGradient(orb3X, orb3Y, 0, orb3X, orb3Y, orb3Radius);
        grad3.addColorStop(0, isDark ? 'rgba(16, 185, 129, 0.24)' : 'rgba(5, 150, 105, 0.16)');
        grad3.addColorStop(0.55, isDark ? 'rgba(16, 185, 129, 0.06)' : 'rgba(5, 150, 105, 0.04)');
        grad3.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad3;
        ctx.beginPath();
        ctx.arc(orb3X, orb3Y, orb3Radius, 0, Math.PI * 2);
        ctx.fill();

        // ─────────────────────────────────────────────────────────────
        // 3. ORGANIC FLUID HARMONIC SINE-WAVES (Liquid Light Ribbons)
        // ─────────────────────────────────────────────────────────────
        ctx.save();
        const waveCount = 3;
        for (let w = 0; w < waveCount; w++) {
          ctx.beginPath();
          const waveBaseY = height * (0.32 + w * 0.18);
          const waveFreq = 0.0020 + w * 0.0008;
          const waveSpeed = time * (0.8 + w * 0.35);
          const waveAmp = (isMobile ? 22 : 42) + w * 14;

          for (let x = 0; x <= width; x += 16) {
            // Ripple distortion near mouse
            const dx = mouse.x - x;
            const distFromMouseX = Math.abs(dx);
            const mouseLift = distFromMouseX < 260 ? Math.cos((distFromMouseX / 260) * (Math.PI / 2)) * 36 : 0;

            const y = waveBaseY + Math.sin(x * waveFreq + waveSpeed) * waveAmp - mouseLift + Math.cos(x * 0.0035 + waveSpeed * 0.5) * 12;
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          const strokeGrad = ctx.createLinearGradient(0, 0, width, 0);
          strokeGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
          strokeGrad.addColorStop(0.25, isDark ? 'rgba(56, 189, 248, 0.36)' : 'rgba(37, 99, 235, 0.25)');
          strokeGrad.addColorStop(0.65, isDark ? 'rgba(168, 85, 247, 0.40)' : 'rgba(124, 58, 237, 0.28)');
          strokeGrad.addColorStop(0.85, isDark ? 'rgba(52, 211, 153, 0.35)' : 'rgba(16, 185, 129, 0.24)');
          strokeGrad.addColorStop(1, 'rgba(52, 211, 153, 0)');

          ctx.strokeStyle = strokeGrad;
          ctx.lineWidth = isMobile ? 1.6 : 2.4;
          ctx.stroke();
        }
        ctx.restore();
      }

      // ─────────────────────────────────────────────────────────────
      // 4. INTERACTIVE CONSTELLATION NODES & LASER FILAMENTS
      // ─────────────────────────────────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        const currentY = n.y + scrollY * 0.10;

        // Interaction with mouse cursor
        const dx = mouse.x - n.x;
        const dy = mouse.y - currentY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Magnetic Attraction & Laser Filament to Cursor
        if (dist < mouse.radius) {
          const proximity = 1 - dist / mouse.radius;
          
          // Gentle pull toward cursor
          n.x += (dx / (dist + 1)) * proximity * 0.85;
          n.y += (dy / (dist + 1)) * proximity * 0.85;

          // Draw radiant laser filament connecting node to cursor
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(n.x, currentY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = primaryColor;
          ctx.globalAlpha = proximity * 0.55;
          ctx.lineWidth = proximity * 1.8;
          ctx.stroke();
          ctx.restore();
        }

        // Draw particle node with pulsing corona
        const pulse = Math.sin(time * 3 + n.phase) * 0.3 + 0.7;
        const nodeColor = colors[n.colorIndex];

        ctx.save();
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = Math.min(n.alpha * pulse, 0.95);
        ctx.beginPath();
        ctx.arc(n.x, currentY, n.radius * (dist < 180 ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fill();

        // Glowing outer aura around node
        if (dist < 220) {
          ctx.beginPath();
          ctx.arc(n.x, currentY, n.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = nodeColor;
          ctx.globalAlpha = 0.22;
          ctx.fill();
        }

        // Draw Inter-Node Connecting Filaments
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const n2Y = n2.y + scrollY * 0.10;
          const ndx = n2.x - n.x;
          const ndy = n2Y - currentY;
          const ndist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (ndist < (isMobile ? 90 : 135)) {
            const lineAlpha = (1 - ndist / (isMobile ? 90 : 135)) * 0.32;
            ctx.beginPath();
            ctx.moveTo(n.x, currentY);
            ctx.lineTo(n2.x, n2Y);
            ctx.strokeStyle = nodeColor;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
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

  const isDark = currentTheme ? currentTheme.isDark !== false : true;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 w-full h-full"
      style={{
        opacity: 1,
        mixBlendMode: isDark ? 'screen' : 'normal'
      }}
    />
  );
}
