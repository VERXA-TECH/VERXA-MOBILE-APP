import type { ComponentType } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { ConvertPreviewCard } from '@/components/onboarding/slides/ConvertPreviewCard';
import { MoneyReceivedCard } from '@/components/onboarding/slides/MoneyReceivedCard';
import { SecurityFeaturesCard } from '@/components/onboarding/slides/SecurityFeaturesCard';
import { WalletsPreviewCard } from '@/components/onboarding/slides/WalletsPreviewCard';

export type HeadlinePart = string | { highlight: string };

export type OnboardingSlide = {
  id: string;
  headline: HeadlinePart[];
  subheadline: string;
  background: ImageSourcePropType;
  Illustration: ComponentType;
  /** `anchored` — illustration positions itself on the slide canvas (e.g. wallets card). */
  illustrationLayout?: 'centered' | 'anchored';
};

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 'transfers',
    headline: [
      'Move money ',
      { highlight: 'across borders' },
      ' without limits.',
    ],
    subheadline:
      'Send and receive money instantly to over 40 countries with real exchange rates and low fees.',
    background: require('../../assets/onboarding/onboarding_slide_1_bg.png'),
    Illustration: MoneyReceivedCard,
    illustrationLayout: 'anchored',
  },
  {
    id: 'wallets',
    headline: [
      'Hold and manage ',
      { highlight: 'global currencies' },
      ' in one place',
    ],
    subheadline:
      'Open multi-currency accounts in GBP, CAD, ZAR, GHC and more. All in one secure wallet.',
    background: require('../../assets/onboarding/onboarding_slide_2_bg.png'),
    Illustration: WalletsPreviewCard,
    illustrationLayout: 'anchored',
  },
  {
    id: 'crypto',
    headline: [
      'Convert and receive ',
      { highlight: 'cryptocurrency' },
      ' with ease.',
    ],
    subheadline:
      'Buy and swap cryptocurrency seamlessly. Grow your money your way.',
    background: require('../../assets/onboarding/onboarding_slide_3_bg.png'),
    Illustration: ConvertPreviewCard,
    illustrationLayout: 'anchored',
  },
  {
    id: 'security',
    headline: [
      'Secure transfers backed by ',
      { highlight: 'Verification' },
    ],
    subheadline:
      'Advanced verification, encrypted transactions and real-time monitoring help keep your funds and account protected',
    background: require('../../assets/onboarding/onboardin_slide_4_bg.png'),
    Illustration: SecurityFeaturesCard,
    illustrationLayout: 'anchored',
  },
];

export const WELCOME_BACKGROUND = require('../../assets/onboarding/onboarding_get_started_bg.png');
