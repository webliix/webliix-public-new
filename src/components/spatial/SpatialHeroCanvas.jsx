import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function SpatialHeroCanvas() {
  const canvasRef = useRef(null);
  const { currentTheme, canvasParticles } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const updateDimensions = () => {
      const parentWidth = canvas.parentElement?.clientWidth || 0;
      const parentHeight = canvas.parentElement?.clientHeight || 0;
      canvas.width = Math.max(window.innerWidth, parentWidth, 320);
      canvas.height = Math.max(window.innerHeight, parentHeight, 480);
    };

    updateDimensions();
    let width = canvas.width;
    let height = canvas.height;

    const handleResize = () => {
      updateDimensions();
      width = canvas.width;
      height = canvas.height;
    };

    window.addEventListener('resize', handleResize);

    // Track Window Scroll for Differential Parallax Speed
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Subtle Mouse Interaction State
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 240,
      active: false
    };

    const updateMousePos = (clientX, clientY) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Clean Subtle Background Particles
    const particleCount = Math.min(Math.floor(width / 24), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.2
      });
    }

    // 3D Perspective Grid Parameters
    const gridCols = 32;
    const gridRows = 24;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth Physics Damping
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
      scrollY += (targetScrollY - scrollY) * 0.08;

      const style = getComputedStyle(document.documentElement);
      const cssPrimary = style.getPropertyValue('--color-primary').trim();
      const primaryColor = cssPrimary || currentTheme?.colors?.primary || '#6366f1';
      const isDark = currentTheme ? currentTheme.isDark !== false : true;

      time += 0.018;

      // -------------------------------------------------------------
      // 1. CLEAN 3D PERSPECTIVE GRID (Far Horizon Shifted Upwards + Slower Speed)
      // -------------------------------------------------------------
      // Far point (startY) shifted upwards to 8% screen height
      const startY = height * 0.08;

      const gridPoints = [];

      ctx.save();
      ctx.lineWidth = isDark ? 1.2 : 1.5;

      for (let r = 0; r < gridRows; r++) {
        gridPoints[r] = [];
        const rowRatio = r / (gridRows - 1); // 0 at far horizon, 1 at near bottom

        // DIFFERENTIAL SCROLL SPEED:
        // Far Horizon (rowRatio = 0): moves at 0.05 speed (ULTRA SLOW)
        // Near Bottom (rowRatio = 1): moves at 0.65 speed (FASTER WITH SCROLL)
        const rowParallaxSpeed = 0.05 + Math.pow(rowRatio, 2.2) * 0.60;
        const rowOffsetY = scrollY * rowParallaxSpeed;

        const perspectiveFactor = Math.pow(rowRatio, 1.5);
        const currentY = startY + rowOffsetY + Math.pow(rowRatio, 1.35) * (height - startY);

        for (let c = 0; c < gridCols; c++) {
          const colRatio = (c - (gridCols - 1) / 2) / ((gridCols - 1) / 2);
          const perspectiveX = width / 2 + colRatio * (width * 0.78) * perspectiveFactor;

          // Subtle Wave Motion
          const waveZ = Math.sin(c * 0.35 + time) * 12 * perspectiveFactor + Math.cos(r * 0.35 + time * 1.2) * 12 * perspectiveFactor;

          const dx = mouse.x - perspectiveX;
          const dy = mouse.y - (currentY - waveZ);
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtle Mouse Distortion
          let mouseDistortion = 0;
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius);
            mouseDistortion = Math.sin(force * Math.PI) * 35 * perspectiveFactor;
          }

          gridPoints[r][c] = {
            x: perspectiveX + (dx / (dist + 1)) * -mouseDistortion * 0.15,
            y: currentY - waveZ - mouseDistortion,
            distToMouse: dist
          };
        }
      }

      // Draw Horizontal Grid Lines
      for (let r = 0; r < gridRows; r++) {
        ctx.beginPath();
        for (let c = 0; c < gridCols; c++) {
          const pt = gridPoints[r][c];
          if (c === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        const rowAlpha = isDark
          ? Math.pow(r / (gridRows - 1), 1.3) * 0.5 + 0.15
          : Math.pow(r / (gridRows - 1), 1.3) * 0.6 + 0.2;

        ctx.strokeStyle = primaryColor;
        ctx.globalAlpha = Math.min(rowAlpha, 0.85);
        ctx.stroke();
      }

      // Draw Vertical Perspective Grid Lines
      for (let c = 0; c < gridCols; c += 2) {
        ctx.beginPath();
        for (let r = 0; r < gridRows; r++) {
          const pt = gridPoints[r][c];
          if (r === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        ctx.strokeStyle = primaryColor;
        ctx.globalAlpha = isDark ? 0.25 : 0.35;
        ctx.stroke();
      }

      // Draw Subtle Intersection Node Glow near Cursor
      for (let r = 0; r < gridRows; r += 2) {
        for (let c = 0; c < gridCols; c += 2) {
          const pt = gridPoints[r][c];
          if (pt.distToMouse < mouse.radius) {
            const nodeGlow = (1 - pt.distToMouse / mouse.radius);
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2 + nodeGlow * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = primaryColor;
            ctx.globalAlpha = nodeGlow * 0.8;
            ctx.fill();
          }
        }
      }

      ctx.restore();

      // -------------------------------------------------------------
      // 2. SUBTLE PARTICLES & MESH LINES
      // -------------------------------------------------------------
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const particleY = p.y + scrollY * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, particleY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p2.x - p.x;
          const pdy = (p2.y + scrollY * 0.15) - particleY;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, particleY);
            ctx.lineTo(p2.x, p2.y + scrollY * 0.15);
            ctx.strokeStyle = primaryColor;
            ctx.globalAlpha = (1 - pdist / 120) * (isDark ? 0.25 : 0.35);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasParticles, currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-100 transition-opacity duration-700"
    />
  );
}
