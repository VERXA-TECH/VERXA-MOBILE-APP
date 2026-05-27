import { colors } from '../colors';
import { typography } from '../typography';

/** App bottom tab bar — layout and styling from Figma. */
export const tabBarShared = {
  /** Side inset so the rounded bar edges remain visible against the app bg. */
  horizontalInset: 16,
  bottomGap: 8,
  bar: {
    borderRadius: 12,
    backgroundColor: colors.holly[600],
    paddingVertical: 4,
    shadowColor: '#0D0A2C',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  item: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    gap: 4,
  },
  activeIcon: {
    size: 38,
    borderRadius: 15.2,
    backgroundColor: 'rgba(200, 233, 5, 0.30)',
  },
  label: {
    active: {
      ...typography.label.small,
      color: colors.primary.base,
    },
    inactive: {
      ...typography.label.small,
      color: colors.holly[400],
    },
  },
  icon: {
    activeColor: colors.primary.base,
    inactiveColor: colors.holly[400],
  },
} as const;
