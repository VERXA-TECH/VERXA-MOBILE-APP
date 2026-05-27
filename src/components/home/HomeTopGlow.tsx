import { Image } from 'expo-image';
import { Dimensions, StyleSheet, View } from 'react-native';

import { home } from '@/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const config = home.topGlow;
const glowWidth = SCREEN_WIDTH * config.widthRatio;
const glowHeight = glowWidth * (config.assetHeight / config.assetWidth);

/** Figma glow export — blurred ellipse with pre-baked falloff into the app bg. */
export function HomeTopGlow() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Image
        source={require('../../../assets/home/home-top-glow.png')}
        style={[
          styles.glow,
          {
            width: glowWidth,
            height: glowHeight,
            top: config.offsetTop,
          },
        ]}
        contentFit="cover"
        contentPosition="top right"
        pointerEvents="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  glow: {
    position: 'absolute',
    left: 0,
  },
});
