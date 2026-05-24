import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useRouter } from 'expo-router';

import { OnboardingSlideView } from '@/components/onboarding/OnboardingSlideView';
import { ONBOARDING_SLIDES } from '@/constants/onboarding';
import { onboarding } from '@/theme';

export default function OnboardingScreen() {
  const router = useRouter();
  const pagerRef = useRef<PagerView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSteps = onboarding.progress.totalSteps;

  const goToWelcome = () => {
    router.replace('/(auth)/welcome');
  };

  const handleNext = () => {
    if (currentIndex >= totalSteps - 1) {
      goToWelcome();
      return;
    }

    pagerRef.current?.setPage(currentIndex + 1);
  };

  return (
    <View className="flex-1">
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={(event) => setCurrentIndex(event.nativeEvent.position)}
      >
        {ONBOARDING_SLIDES.map((slide, index) => (
          <View key={slide.id} collapsable={false}>
            <OnboardingSlideView
              slide={slide}
              slideIndex={index}
              totalSteps={totalSteps}
              onSkip={goToWelcome}
              onNext={handleNext}
            />
          </View>
        ))}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  pager: {
    flex: 1,
  },
});
