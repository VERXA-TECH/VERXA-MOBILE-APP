import { colors } from './colors';
import { fonts } from './fonts';

/** Reusable text presets for React Native `<Text style={…} />`. */
export const typography = {
  headline: {
    fontFamily: fonts.heuvelGrotesk,
    fontSize: 32,
    fontWeight: 'normal' as const,
    lineHeight: 40,
    letterSpacing: -0.16,
    color: colors.text.strong,
    accentColor: colors.lemon[500],
  },
  subheadline: {
    fontFamily: fonts.heuvelGroteskRegular,
    fontSize: 14,
    fontWeight: 'normal' as const,
    lineHeight: 20,
    letterSpacing: -0.084,
    color: colors.holly[100],
  },
  label: {
    medium: {
      fontFamily: fonts.heuvelGrotesk,
      fontSize: 16,
      fontWeight: 'normal' as const,
      lineHeight: 24,
      letterSpacing: -0.176,
    },
    large: {
      fontFamily: fonts.heuvelGrotesk,
      fontSize: 18,
      fontWeight: 'normal' as const,
      lineHeight: 24,
      letterSpacing: -0.27,
      color: colors.lemon[500],
    },
    small: {
      fontFamily: fonts.heuvelGrotesk,
      fontSize: 14,
      fontWeight: 'normal' as const,
      lineHeight: 20,
      letterSpacing: -0.084,
      color: colors.text.strong,
    },
    xSmall: {
      fontFamily: fonts.heuvelGrotesk,
      fontSize: 12,
      fontWeight: 'normal' as const,
      lineHeight: 16,
      letterSpacing: 0,
    },
  },
  paragraph: {
    small: {
      fontFamily: fonts.heuvelGroteskRegular,
      fontSize: 14,
      fontWeight: 'normal' as const,
      lineHeight: 20,
      letterSpacing: -0.084,
      color: colors.text.muted,
    },
  },
} as const;
