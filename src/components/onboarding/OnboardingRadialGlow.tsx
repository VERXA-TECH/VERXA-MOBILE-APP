import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

import { withAlpha } from '@/theme/colorUtils';
import { onboarding } from '@/theme';

type GlowEdge = 'top' | 'bottom';

type GlowLayerProps = {
  edge: GlowEdge;
};

/**
 * Single linear-gradient slab anchored to one edge of the screen. Stops are
 * pre-baked from tokens into rgba colors so the gradient reads as a smooth
 * dark-to-transparent (top) or transparent-to-dark (bottom) fade.
 */
function GlowLayer({ edge }: GlowLayerProps) {
  const config = onboarding.radialGlow[edge];
  const baseColor = onboarding.radialGlow.baseColor;

  // expo-linear-gradient typings expect at least two color stops as a tuple.
  const colors = config.stops.map((stop) => withAlpha(baseColor, stop.opacity)) as [
    string,
    string,
    ...string[],
  ];
  const locations = config.stops.map((stop) => stop.offset) as [number, number, ...number[]];

  return (
    <LinearGradient
      pointerEvents="none"
      colors={colors}
      locations={locations}
      // Pure vertical fade — the source design's radial spans far wider than
      // any phone, so it collapses to a directional gradient at device scale.
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={[
        styles.layer,
        edge === 'top' ? styles.top : styles.bottom,
        { height: `${config.coveragePct}%` },
      ]}
    />
  );
}

export function OnboardingRadialGlow() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <GlowLayer edge="top" />
      <GlowLayer edge="bottom" />
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  top: {
    top: 0,
  },
  bottom: {
    bottom: 0,
  },
});
