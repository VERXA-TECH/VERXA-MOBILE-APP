import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { onboarding } from '@/theme';

export function useOnboardingBottomInset() {
  const insets = useSafeAreaInsets();
  const platform = Platform.OS === 'ios' ? 'ios' : 'android';

  return insets.bottom + onboarding.footer.bottomPadding[platform];
}
