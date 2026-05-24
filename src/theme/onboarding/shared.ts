import { colors } from '../colors';

/** Shared onboarding shell — progress, glow, glass defaults, footer insets. */
export const onboardingShared = {
  progress: {
    height: 2,
    gap: 8,
    activeColor: colors.primary.base,
    inactiveColor: colors.indicator.inactive,
    totalSteps: 4,
  },
  radialGlow: {
    baseColor: colors.radialGlow.start,
    top: {
      coveragePct: 45,
      stops: [
        { offset: 0, opacity: 1 },
        { offset: 0.35, opacity: 0.78 },
        { offset: 0.65, opacity: 0.36 },
        { offset: 1, opacity: 0 },
      ],
    },
    bottom: {
      coveragePct: 42,
      stops: [
        { offset: 0, opacity: 0 },
        { offset: 0.35, opacity: 0.36 },
        { offset: 0.65, opacity: 0.78 },
        { offset: 1, opacity: 1 },
      ],
    },
  },
  glassCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.glass.border,
    backgroundColor: colors.glass.background,
  },
  background: {
    resizeMode: 'cover' as const,
    placeholderColor: '#D3D3D3',
  },
  footer: {
    bottomPadding: {
      ios: 20,
      android: 32,
    },
  },
} as const;
