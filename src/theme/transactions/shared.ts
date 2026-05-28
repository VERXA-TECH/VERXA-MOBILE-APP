import { colors } from '../colors';
import { fonts } from '../fonts';
import { homeShared } from '../home/shared';
import { input } from '../input';
import { typography } from '../typography';

/** Transactions list screen — header, search, and grouped list tokens. */
export const transactionsShared = {
  screen: {
    paddingHorizontal: homeShared.screen.paddingHorizontal,
    paddingTop: homeShared.header.paddingTop,
    sectionGap: 40,
    groupGap: 12,
  },
  header: {
    iconSize: 24,
    iconColor: colors.text.strong,
    title: typography.title.h5,
  },
  search: {
    height: input.height,
    borderRadius: input.borderRadius,
    padding: input.padding,
    gap: input.gap,
    borderColor: colors.holly[600],
    backgroundColor: input.backgroundColor,
    shadow: input.shadow,
    iconSize: 20,
    iconColor: colors.text.strong,
    input: typography.paragraph.input,
    placeholder: typography.paragraph.placeholder,
  },
  dateLabel: {
    fontFamily: fonts.heuvelGrotesk,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.084,
    color: colors.text.strong,
  },
  listCard: homeShared.recentTransactions.card,
  list: homeShared.recentTransactions.list,
  divider: homeShared.recentTransactions.divider,
  statusDot: {
    size: 6,
    glowRadius: 4,
    completedColor: colors.state.success,
    failedColor: colors.state.error,
  },
  badge: {
    completed: {
      backgroundColor: colors.state.successLighter,
      textColor: colors.state.success,
    },
    failed: {
      backgroundColor: colors.state.errorLighter,
      textColor: colors.state.error,
    },
  },
} as const;
