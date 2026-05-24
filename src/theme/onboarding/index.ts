import { onboardingShared } from './shared';
import { onboardingSlides } from './slides';

export const onboarding = {
  ...onboardingShared,
  ...onboardingSlides,
} as const;

export { onboardingShared, onboardingSlides };
