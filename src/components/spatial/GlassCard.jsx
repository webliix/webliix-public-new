/**
 * GlassCard — backward-compatibility alias
 * All actual card styling lives in WebliixCard.jsx
 * This file exists so any existing imports of GlassCard continue working.
 *
 * Maps old API → new API:
 *   hoverAudio  → no direct equivalent (WebliixCard auto-plays via clickable/hoverable)
 *   onClick     → clickable=true + onClick
 *   className   → passed through
 */
import WebliixCard from '../ui/WebliixCard';

export default function GlassCard({ onClick, hoverAudio = true, className = '', children, ...props }) {
  return (
    <WebliixCard
      variant="surface"
      clickable={!!onClick}
      hoverable={hoverAudio}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </WebliixCard>
  );
}
