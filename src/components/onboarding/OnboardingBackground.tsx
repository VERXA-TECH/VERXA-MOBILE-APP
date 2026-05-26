import type { ImageSourcePropType } from 'react-native';
import { Image } from 'expo-image';
import type { ReactNode } from 'react';
import { View } from 'react-native';

import { onboarding } from '@/theme';

import { OnboardingRadialGlow } from './OnboardingRadialGlow';

type OnboardingBackgroundProps = {
  source: ImageSourcePropType;
  children: ReactNode;
};

export function OnboardingBackground({ source, children }: OnboardingBackgroundProps) {
  return (
    <View className="flex-1 bg-black">
      <Image
        source={source}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        contentFit={onboarding.background.resizeMode}
        placeholder={onboarding.background.placeholderColor}
        transition={200}
      />
      <OnboardingRadialGlow />
      <View style={{ flex: 1, zIndex: 2 }}>{children}</View>
    </View>
  );
}
