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

    // Track Window Scroll for Differential 3D Depth Parallax
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Precise Mouse & Touch Coordinates Tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 340,
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

    // Floating Interactive 3D Objects & Glyphs
    const floatingShapes = [];
    const shapeCount = 14;
    const shapeTypes = ['cube', 'octahedron', 'orb', 'code'];

    for (let i = 0; i < shapeCount; i++) {
      floatingShapes.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.8,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 16 + 12,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        type: shapeTypes[i % shapeTypes.length],
        alpha: Math.random() * 0.4 + 0.35
      });
    }

    // Foreground Particles System
    const particleCount = Math.min(Math.floor(width / 18), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 1.2,
        alpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.015
      });
    }

    // 3D Grid Parameters
    const gridCols = 36;
    const gridRows = 26;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Ultra-Smooth Physics Damping
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;
      scrollY += (targetScrollY - scrollY) * 0.04;

      const style = getComputedStyle(document.documentElement);
      const cssPrimary = style.getPropertyValue('--color-primary').trim();
      const primaryColor = cssPrimary || currentTheme?.colors?.primary || '#6366f1';
      const isDark = currentTheme ? currentTheme.isDark !== false : true;

      time += 0.022;

      // -------------------------------------------------------------
      // 1. DIFFERENTIAL 3D DEPTH GRID PARALLAX & HORIZON FADE OUT
      // -------------------------------------------------------------
      const baseStartY = height * 0.10;
      
      // Calculate normalized scroll depth fade (0 at top, 1 as page scrolls 600px down)
      const scrollFade = Math.min(scrollY / 600, 1);

      const gridPoints = [];

      ctx.save();
      ctx.lineWidth = isDark ? 1.4 : 1.8;

      for (let r = 0; r < gridRows; r++) {
        gridPoints[r] = [];
        const rowRatio = r / (gridRows - 1); // 0 at horizon (far), 1 at bottom (near)

        // DIFFERENTIAL PARALLAX SPEED:
        // Far Horizon (rowRatio = 0): moves very slow (0.05 speed)
        // Near Screen Bottom (rowRatio = 1): moves fast equal to scroll (0.85 speed)
        const rowParallaxSpeed = 0.05 + Math.pow(rowRatio, 2.2) * 0.80;
        const rowOffsetY = scrollY * rowParallaxSpeed;

        const perspectiveFactor = Math.pow(rowRatio, 1.45);
        const currentY = baseStartY + rowOffsetY + Math.pow(rowRatio, 1.3) * (height - baseStartY);

        for (let c = 0; c < gridCols; c++) {
          const colRatio = (c - (gridCols - 1) / 2) / ((gridCols - 1) / 2);
          const perspectiveX = width / 2 + colRatio * (width * 0.8) * perspectiveFactor;

          const waveZ = Math.sin(c * 0.3 + time) * 16 * perspectiveFactor + Math.cos(r * 0.3 + time * 1.3) * 16 * perspectiveFactor;

          const dx = mouse.x - perspectiveX;
          const dy = mouse.y - (currentY - waveZ);
          const dist = Math.sqrt(dx * dx + dy * dy);

          let mouseDistortion = 0;
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius);
            mouseDistortion = Math.sin(force * Math.PI) * 75 * perspectiveFactor;
          }

          gridPoints[r][c] = {
            x: perspectiveX + (dx / (dist + 1)) * -mouseDistortion * 0.25,
            y: currentY - waveZ - mouseDistortion,
            distToMouse: dist,
            rowRatio
          };
        }
      }

      // Draw Horizontal Grid Lines with Horizon Fade-Out on Scroll
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

        const rowRatio = r / (gridRows - 1);
        let baseAlpha = isDark
          ? Math.pow(rowRatio, 1.1) * 0.65 + 0.18
          : Math.pow(rowRatio, 1.1) * 0.75 + 0.22;

        // DYNAMIC FADE EFFECT:
        // As near part scrolls up, far horizon grid lines (rowRatio < 0.65) fade to invisible (0 alpha)
        // When scrolling back up, far horizon lines fade back in!
        let horizonFade = 1;
        if (rowRatio < 0.65) {
          horizonFade = Math.max(0, 1 - (scrollFade * (1 - (rowRatio / 0.65))));
        }

        ctx.strokeStyle = primaryColor;
        ctx.globalAlpha = Math.min(baseAlpha * horizonFade, 0.95);
        ctx.stroke();
      }

      // Draw Vertical Perspective Grid Lines
      for (let c = 0; c < gridCols; c += 2) {
        ctx.beginPath();
        for (let r = 0; r < gridRows; r++) {
          const pt = gridPoints[r][c];
          const rowRatio = r / (gridRows - 1);
          let horizonFade = 1;
          if (rowRatio < 0.65) {
            horizonFade = Math.max(0, 1 - (scrollFade * (1 - (rowRatio / 0.65))));
          }

          if (r === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        ctx.strokeStyle = primaryColor;
        ctx.globalAlpha = (isDark ? 0.38 : 0.48) * (1 - scrollFade * 0.4);
        ctx.stroke();
      }

      // Draw Glowing Grid Intersection Nodes & Direct Cursor Beams
      for (let r = 0; r < gridRows; r += 2) {
        for (let c = 0; c < gridCols; c += 2) {
          const pt = gridPoints[r][c];
          if (pt.distToMouse < mouse.radius) {
            const nodeGlow = (1 - pt.distToMouse / mouse.radius);

            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.5 + nodeGlow * 4, 0, Math.PI * 2);
            ctx.fillStyle = primaryColor;
            ctx.globalAlpha = Math.min(nodeGlow * 1.2, 1);
            ctx.fill();

            if (pt.distToMouse < 190) {
              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(pt.x, pt.y);
              ctx.strokeStyle = primaryColor;
              ctx.globalAlpha = (1 - pt.distToMouse / 190) * (isDark ? 0.48 : 0.58);
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        }
      }

      ctx.restore();

      // -------------------------------------------------------------
      // 2. RENDER INTERACTIVE FLOATING 3D SHAPES
      // -------------------------------------------------------------
      for (let i = 0; i < floatingShapes.length; i++) {
        const s = floatingShapes[i];
        s.x += s.vx + Math.sin(time + i) * 0.3;
        s.y += s.vy + Math.cos(time * 0.8 + i) * 0.3;
        s.rotX += s.rotSpeedX;
        s.rotY += s.rotSpeedY;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        const shapeY = s.y + scrollY * 0.2;

        // Mouse Proximity Reaction
        const dx = mouse.x - s.x;
        const dy = mouse.y - shapeY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let scale = 1;

        if (dist < 220) {
          const force = (220 - dist) / 220;
          s.x -= (dx / dist) * force * 3;
          s.y -= (dy / dist) * force * 3;
          s.rotX += force * 0.1;
          scale = 1 + force * 0.4;
        }

        ctx.save();
        ctx.translate(s.x, shapeY);
        ctx.strokeStyle = primaryColor;
        ctx.fillStyle = primaryColor;
        ctx.globalAlpha = Math.max(0, (isDark ? s.alpha : s.alpha * 1.2) * (1 - scrollFade * 0.5));
        ctx.lineWidth = 1.5;

        if (s.type === 'cube') {
          const size = s.size * scale;
          ctx.strokeRect(-size / 2, -size / 2, size, size);
          ctx.beginPath();
          ctx.moveTo(-size / 2, -size / 2);
          ctx.lineTo(-size / 2 + 5, -size / 2 - 5);
          ctx.stroke();
        } else if (s.type === 'octahedron') {
          const sz = s.size * scale;
          ctx.beginPath();
          ctx.moveTo(0, -sz);
          ctx.lineTo(sz, 0);
          ctx.lineTo(0, sz);
          ctx.lineTo(-sz, 0);
          ctx.closePath();
          ctx.stroke();
        } else if (s.type === 'orb') {
          ctx.beginPath();
          ctx.arc(0, 0, (s.size / 2) * scale, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, (s.size / 4) * scale, 0, Math.PI * 2);
          ctx.fill();
        } else if (s.type === 'code') {
          ctx.font = `${Math.floor(14 * scale)}px monospace`;
          ctx.fillText('</>', -10, 5);
        }

        ctx.restore();
      }

      // -------------------------------------------------------------
      // 3. CURSOR RADAR RING & FOLLOWER GLOW (Centered Directly on Cursor)
      // -------------------------------------------------------------
      if (mouse.active) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 22 + Math.sin(time * 5) * 5, 0, Math.PI * 2);
        ctx.strokeStyle = primaryColor;
        ctx.globalAlpha = isDark ? 0.65 : 0.75;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.globalAlpha = 0.9;
        ctx.fill();
        ctx.restore();
      }

      // -------------------------------------------------------------
      // 4. RENDER FOREGROUND PARTICLES NETWORK
      // -------------------------------------------------------------
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const particleY = p.y + scrollY * 0.15;

        const dx = mouse.x - p.x;
        const dy = mouse.y - particleY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 4;
          p.y -= (dy / dist) * force * 4;
        }

        const currentAlpha = p.alpha + Math.sin(time * p.pulseSpeed * 10) * 0.2;

        ctx.beginPath();
        ctx.arc(p.x, particleY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.globalAlpha = Math.max(0.2, Math.min(1, currentAlpha));
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p2.x - p.x;
          const pdy = p2.y - p.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, particleY);
            ctx.lineTo(p2.x, p2.y + scrollY * 0.15);
            ctx.strokeStyle = primaryColor;
            ctx.globalAlpha = (1 - pdist / 130) * (isDark ? 0.35 : 0.45);
            ctx.lineWidth = 1;
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
