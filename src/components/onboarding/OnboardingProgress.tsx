import { View } from 'react-native';

import { onboarding } from '@/theme';

type OnboardingProgressProps = {
  currentIndex: number;
  totalSteps?: number;
};

export function OnboardingProgress({
  currentIndex,
  totalSteps = onboarding.progress.totalSteps,
}: OnboardingProgressProps) {
  return (
    <View
      className="flex-row"
      style={{ gap: onboarding.progress.gap, height: onboarding.progress.height }}
    >
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index <= currentIndex;

        return (
          <View
            key={index}
            className="flex-1 rounded-full"
            style={{
              height: onboarding.progress.height,
              backgroundColor: isActive
                ? onboarding.progress.activeColor
                : onboarding.progress.inactiveColor,
            }}
          />
        );
      })}
    </View>
  );
}
