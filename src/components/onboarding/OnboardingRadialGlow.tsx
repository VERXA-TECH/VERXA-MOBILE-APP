import { Image } from 'expo-image';
import { Dimensions, StyleSheet, View } from 'react-native';

import { onboarding } from '@/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type GlowEdge = 'top' | 'bottom';

type GlowImageProps = {
  edge: GlowEdge;
};

function GlowImage({ edge }: GlowImageProps) {
  const width = SCREEN_WIDTH * onboarding.radialGlow[edge].widthRatio;
  const height =
    width *
    (onboarding.radialGlow[edge].assetHeight /
      onboarding.radialGlow[edge].assetWidth);
  const isTop = edge === 'top';

  return (
    <Image
      source={
        isTop
          ? require('../../../assets/onboarding/radial-glow-top.png')
          : require('../../../assets/onboarding/radial-glow-bottom.png')
      }
      style={[
        styles.glow,
        isTop
          ? {
              width,
              height,
              top: onboarding.radialGlow.top.offsetTop,
            }
          : {
              width,
              height,
              bottom: onboarding.radialGlow.bottom.offsetBottom,
            },
      ]}
      contentFit="cover"
      contentPosition={isTop ? 'top' : 'bottom'}
      pointerEvents="none"
    />
  );
}

/** Figma ellipse exports — top (666) and bottom (667) radial glow overlays. */
export function OnboardingRadialGlow() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <GlowImage edge="top" />
      <GlowImage edge="bottom" />
    </View>
  );
}

const styles = StyleSheet.create({
  glow: {
    position: 'absolute',
    left: 0,
  },
});
