/**
 * Convert a `#RRGGBB` hex string + alpha (0–1) to an `rgba(...)` string.
 * Used for gradient stop interpolation since LinearGradient consumes color strings.
 */
export function withAlpha(hex: string, alpha: number): string {
  const cleaned = hex.replace('#', '');
  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);
  const clamped = Math.max(0, Math.min(1, alpha));
  return `rgba(${r}, ${g}, ${b}, ${clamped})`;
}
