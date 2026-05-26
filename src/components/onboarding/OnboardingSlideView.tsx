import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { OnboardingSlide } from '@/constants/onboarding';
import { typography } from '@/theme';

import { HighlightedHeadline } from './HighlightedHeadline';
import { OnboardingBackground } from './OnboardingBackground';
import { OnboardingFooter } from './OnboardingFooter';
import { OnboardingProgress } from './OnboardingProgress';

type OnboardingSlideViewProps = {
  slide: OnboardingSlide;
  slideIndex: number;
  totalSteps: number;
  onSkip: () => void;
  onNext: () => void;
};

export function OnboardingSlideView({
  slide,
  slideIndex,
  totalSteps,
  onSkip,
  onNext,
}: OnboardingSlideViewProps) {
  const { Illustration } = slide;
  const isAnchored = slide.illustrationLayout === 'anchored';

  return (
    <OnboardingBackground source={slide.background}>
      <SafeAreaView className="flex-1" edges={['top']}>
        <View className={`flex-1 relative${isAnchored ? ' justify-between' : ''}`}>
          <View className="gap-6 px-5 pt-2">
            <OnboardingProgress currentIndex={slideIndex} totalSteps={totalSteps} />

            <View className="gap-3">
              <HighlightedHeadline parts={slide.headline} />
              <Text
                style={{
                  fontFamily: typography.subheadline.fontFamily,
                  fontSize: typography.subheadline.fontSize,
                  fontWeight: typography.subheadline.fontWeight,
                  lineHeight: typography.subheadline.lineHeight,
                  letterSpacing: typography.subheadline.letterSpacing,
                  color: typography.subheadline.color,
                }}
              >
                {slide.subheadline}
              </Text>
            </View>
          </View>

          {isAnchored ? (
            <View className="absolute inset-0" pointerEvents="box-none">
              <Illustration />
            </View>
          ) : (
            <View className="flex-1 justify-center px-5 py-6">
              <Illustration />
            </View>
          )}

          <View className="px-5">
            <OnboardingFooter onSkip={onSkip} onNext={onNext} />
          </View>
        </View>
      </SafeAreaView>
    </OnboardingBackground>
  );
}
