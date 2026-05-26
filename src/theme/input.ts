import { colors } from './colors';

export const input = {
  height: 56,
  borderRadius: 10,
  padding: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 12,
  },
  gap: 8,
  borderColor: colors.holly[600],
  backgroundColor: colors.input.background,
  errorBorderColor: colors.state.error,
  shadow: {
    shadowColor: 'rgba(10, 13, 20, 0.03)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  digit: {
    size: 56,
    gap: 12,
    borderRadius: 10,
    padding: {
      vertical: 16,
      horizontal: 8,
    },
    borderColor: colors.stroke.soft200,
    backgroundColor: colors.input.digitBackground,
  },
} as const;
