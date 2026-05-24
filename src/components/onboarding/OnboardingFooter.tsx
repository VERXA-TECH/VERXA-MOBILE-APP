import { View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { useOnboardingBottomInset } from '@/hooks/useOnboardingBottomInset';
import { button } from '@/theme';

type OnboardingFooterProps = {
  onSkip: () => void;
  onNext: () => void;
};

export function OnboardingFooter({ onSkip, onNext }: OnboardingFooterProps) {
  const bottomInset = useOnboardingBottomInset();

  return (
    <View style={{ paddingBottom: bottomInset }}>
      <View className="h-14 flex-row items-center justify-between">
        <Button title="Skip" variant="ghost" size="lg" onPress={onSkip} />

        <Button
          title="Next"
          variant="primary"
          size="lg"
          style={{ width: button.width.onboardingNext }}
          onPress={onNext}
        />
      </View>
    </View>
  );
}
