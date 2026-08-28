/**
 * SpatialButton — backward-compatibility alias
 * All actual styling lives in WebliixButton.jsx
 * This file exists so any imports that still reference SpatialButton don't break.
 *
 * Variant mapping (old → new):
 *   primary   → primary
 *   secondary → primary
 *   outline   → ghost
 *   glass     → ghost
 */
import WebliixButton from './WebliixButton';

const VARIANT_MAP = {
  primary:   'primary',
  secondary: 'primary',
  outline:   'ghost',
  glass:     'ghost',
};

export default function SpatialButton({ variant = 'primary', ...props }) {
  return <WebliixButton variant={VARIANT_MAP[variant] ?? 'primary'} {...props} />;
}
