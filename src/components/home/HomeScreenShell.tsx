import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeBackground } from './HomeBackground';

type HomeScreenShellProps = {
  children?: ReactNode;
};

export function HomeScreenShell({ children }: HomeScreenShellProps) {
  return (
    <HomeBackground>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {children}
      </SafeAreaView>
    </HomeBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
