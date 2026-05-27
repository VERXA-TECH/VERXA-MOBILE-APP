import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '@/theme';

import { HomeTopGlow } from './HomeTopGlow';

type HomeBackgroundProps = {
  children: ReactNode;
};

export function HomeBackground({ children }: HomeBackgroundProps) {
  return (
    <View style={styles.root}>
      <HomeTopGlow />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background.app,
  },
  content: {
    flex: 1,
    zIndex: 2,
  },
});
