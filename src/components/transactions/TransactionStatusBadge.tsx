import { StyleSheet, Text, View } from 'react-native';

import { home, colors } from '@/theme';

import { StatusDot } from './StatusDot';

type TransactionStatusBadgeProps = {
  status: string;
  statusType?: 'completed' | 'failed';
  showDot?: boolean;
};

export function TransactionStatusBadge({
  status,
  statusType = 'completed',
  showDot = true,
}: TransactionStatusBadgeProps) {
  const config = home.recentTransactions.row.badge;
  const isFailed = statusType === 'failed';

  return (
    <View
      style={[
        styles.badge,
        isFailed ? styles.badgeFailed : styles.badgeCompleted,
        showDot && styles.badgeWithDot,
      ]}
    >
      {showDot ? <StatusDot variant={statusType} /> : null}
      <Text
        style={[
          styles.badgeText,
          isFailed ? styles.badgeTextFailed : styles.badgeTextCompleted,
        ]}
      >
        {status}
      </Text>
    </View>
  );
}

const config = home.recentTransactions.row.badge;

const styles = StyleSheet.create({
  badge: {
    paddingVertical: config.paddingVertical,
    paddingHorizontal: config.paddingHorizontal,
    borderRadius: config.borderRadius,
    alignItems: 'center',
  },
  badgeWithDot: {
    flexDirection: 'row',
    gap: 4,
  },
  badgeCompleted: {
    backgroundColor: config.backgroundColor,
  },
  badgeFailed: {
    backgroundColor: colors.state.errorLighter,
  },
  badgeText: {
    fontFamily: config.fontFamily,
    fontSize: config.fontSize,
    lineHeight: config.lineHeight,
    textAlign: 'center',
  },
  badgeTextCompleted: {
    color: config.textColor,
  },
  badgeTextFailed: {
    color: colors.state.error,
  },
});
