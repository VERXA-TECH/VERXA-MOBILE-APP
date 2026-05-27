import { colors } from '../colors';

/** Shared onboarding shell — progress, glow assets, glass defaults, footer insets. */
export const onboardingShared = {
  progress: {
    height: 2,
    gap: 8,
    activeColor: colors.primary.base,
    inactiveColor: colors.indicator.inactive,
    totalSteps: 4,
  },
  radialGlow: {
    /** Figma Ellipse 666 — top radial gradient export (430×380). */
    top: {
      assetWidth: 430,
      assetHeight: 380,
      widthRatio: 1,
      offsetTop: 0,
    },
    /** Figma Ellipse 667 — bottom radial gradient export (430×317). */
    bottom: {
      assetWidth: 430,
      assetHeight: 317,
      widthRatio: 1,
      offsetBottom: 0,
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
