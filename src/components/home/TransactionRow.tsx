import { StyleSheet, Text, View } from 'react-native';

import ReceivedArrowIcon from '../../../assets/home/transaction-arrow-received.svg';
import SentArrowIcon from '../../../assets/home/transaction-arrow-sent.svg';
import { home } from '@/theme';
import { formatNairaCompact } from '@/utils/currency';

export type TransactionDirection = 'sent' | 'received';

export type TransactionItem = {
  id: string;
  title: string;
  date: string;
  amount: number;
  direction: TransactionDirection;
  status: string;
};

type TransactionRowProps = {
  transaction: TransactionItem;
};

export function TransactionRow({ transaction }: TransactionRowProps) {
  const config = home.recentTransactions.row;
  const isSent = transaction.direction === 'sent';
  const amountPrefix = isSent ? '-' : '+';
  const formattedAmount = `${amountPrefix}${formatNairaCompact(Math.abs(transaction.amount))}`;

  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <View style={styles.iconBox}>
          {isSent ? (
            <SentArrowIcon
              width={config.icon.arrowSize}
              height={config.icon.arrowSize}
              color={config.icon.sentColor}
            />
          ) : (
            <ReceivedArrowIcon
              width={config.icon.arrowSize}
              height={config.icon.arrowSize}
              color={config.icon.receivedColor}
            />
          )}
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.mainText}>{transaction.title}</Text>
          <Text style={styles.secondaryText}>{transaction.date}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.amount}>{formattedAmount}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{transaction.status}</Text>
        </View>
      </View>
    </View>
  );
}

const config = home.recentTransactions.row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.leftGap,
    flex: 1,
    paddingRight: 12,
  },
  iconBox: {
    borderRadius: config.icon.borderRadius,
    backgroundColor: config.icon.backgroundColor,
    padding: config.icon.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    gap: config.textGap,
    flexShrink: 1,
  },
  mainText: config.mainText,
  secondaryText: config.secondaryText,
  right: {
    alignItems: 'flex-end',
    gap: config.textGap,
  },
  amount: config.amount,
  badge: {
    paddingVertical: config.badge.paddingVertical,
    paddingHorizontal: config.badge.paddingHorizontal,
    borderRadius: config.badge.borderRadius,
    backgroundColor: config.badge.backgroundColor,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  badgeText: {
    fontFamily: config.badge.fontFamily,
    fontSize: config.badge.fontSize,
    lineHeight: config.badge.lineHeight,
    color: config.badge.textColor,
    textAlign: 'center',
  },
});
