import { colors } from '../colors';
import { fonts } from '../fonts';
import { homeShared } from '../home/shared';
import { typography } from '../typography';

/** Wallets tab screen — portfolio card, filter tabs, and wallet rows. */
export const walletsShared = {
  screen: {
    paddingHorizontal: homeShared.screen.paddingHorizontal,
    paddingTop: homeShared.header.paddingTop,
  },
  header: {
    title: {
      fontFamily: fonts.heuvelGrotesk,
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: -0.36,
      color: colors.text.strong,
    },
  },
  portfolioCard: {
    marginTop: 24,
    borderWidth: 2,
    borderRadius: 24,
    borderGradient: ['#5F6F00', '#F9FFC8', '#02785C'] as const,
    borderGradientStart: { x: 0, y: 0 },
    borderGradientEnd: { x: 1, y: 1 },
    padding: 20,
    gap: 10,
    /** Opaque fill so the border gradient does not bleed through the card face. */
    backgroundColor: colors.background.app,
    topRowGap: 10,
    amountEyeGap: 8,
    label: {
      fontFamily: fonts.inter,
      fontSize: 12,
      fontWeight: '500' as const,
      lineHeight: 16,
      letterSpacing: 0.48,
      color: colors.text.soft400,
    },
    amount: typography.headline,
  },
  tabBar: {
    marginTop: 24,
    padding: 8,
    gap: 4,
    borderRadius: 10,
    backgroundColor: colors.glass.backgroundMuted,
    tab: {
      padding: 6,
      gap: 6,
      borderRadius: 6,
      inactiveColor: colors.text.placeholder,
      activeGradient: ['#86B034', '#43B845'] as const,
      activeGradientStart: { x: 0, y: 0.5 },
      activeGradientEnd: { x: 1, y: 0.5 },
      activeShadow: {
        shadowColor: '#0E121B',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
      },
      label: {
        fontFamily: fonts.heuvelGrotesk,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: -0.176,
      },
      activeLabelColor: colors.text.strong,
    },
  },
  walletList: {
    marginTop: 16,
    gap: 12,
  },
  walletCard: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.glass.border,
    backgroundColor: colors.glass.backgroundMuted,
    iconSize: 40,
    contentGap: 12,
    name: {
      fontFamily: fonts.heuvelGrotesk,
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: -0.27,
      color: colors.text.strong,
    },
    walletLabel: {
      fontFamily: fonts.heuvelGrotesk,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: -0.084,
      color: colors.text.soft400,
    },
    balance: {
      fontFamily: fonts.heuvelGrotesk,
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: -0.27,
      color: colors.text.strong,
    },
  },
} as const;
