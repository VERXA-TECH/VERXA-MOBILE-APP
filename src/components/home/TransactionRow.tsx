import { Pressable, StyleSheet, Text, View } from 'react-native';

import ArrowRightDownIcon from '../../../assets/home/arrow-right-down-line.svg';
import ArrowRightLongIcon from '../../../assets/home/arrow-right-long-line.svg';
import BankCardIcon from '../../../assets/home/bank-card-line.svg';
import ExchangeIcon from '../../../assets/home/exchange-line.svg';
import ReceivedArrowIcon from '../../../assets/home/transaction-arrow-received.svg';
import SentArrowIcon from '../../../assets/home/transaction-arrow-sent.svg';
import { home } from '@/theme';
import { formatNairaCompact, formatUsdCompact, formatUsdtCompact } from '@/utils/currency';

import { TransactionStatusBadge } from '../transactions/TransactionStatusBadge';

export type TransactionDirection = 'sent' | 'received';

export type TransactionIconType =
  | 'sent'
  | 'received'
  | 'exchange'
  | 'card'
  | 'transferUk'
  | 'usdtReceived';

export type TransactionStatusType = 'completed' | 'failed' | 'pending';

export type TransactionFilterType =
  | 'sent'
  | 'received'
  | 'converted'
  | 'bills'
  | 'withdrawn';

export type TransactionWallet =
  | 'NGN'
  | 'GBP'
  | 'CAD'
  | 'GHS'
  | 'ZAR'
  | 'BTC'
  | 'ETH'
  | 'USDC'
  | 'USDT';

export type TransactionCurrency = 'NGN' | 'USD' | 'USDT';

export type TransactionItem = {
  id: string;
  title: string;
  date: string;
  amount: number;
  direction: TransactionDirection;
  status: string;
  statusType?: TransactionStatusType;
  iconType?: TransactionIconType;
  currency?: TransactionCurrency;
  filterType?: TransactionFilterType;
  wallet?: TransactionWallet;
};

type TransactionRowProps = {
  transaction: TransactionItem;
  showStatusDot?: boolean;
  onPress?: () => void;
};

function formatTransactionAmount(transaction: TransactionItem): string {
  const isSent = transaction.direction === 'sent';
  const prefix = isSent ? '-' : '+';
  const amount = Math.abs(transaction.amount);
  const formatted =
    transaction.currency === 'USD'
      ? formatUsdCompact(amount)
      : transaction.currency === 'USDT'
        ? formatUsdtCompact(amount)
        : formatNairaCompact(amount);

  return `${prefix}${formatted}`;
}

function TransactionIcon({
  transaction,
}: {
  transaction: TransactionItem;
}) {
  const config = home.recentTransactions.row.icon;
  const iconType =
    transaction.iconType ??
    (transaction.direction === 'sent' ? 'sent' : 'received');
  const iconColor = config.sentColor;
  const iconSize = config.arrowSize;

  switch (iconType) {
    case 'exchange':
      return (
        <ExchangeIcon
          width={iconSize}
          height={iconSize}
          color={iconColor}
        />
      );
    case 'card':
      return (
        <BankCardIcon width={iconSize} height={iconSize} color={iconColor} />
      );
    case 'transferUk':
      return (
        <ArrowRightLongIcon
          width={iconSize}
          height={iconSize}
          color={iconColor}
        />
      );
    case 'usdtReceived':
      return (
        <ArrowRightDownIcon
          width={iconSize}
          height={iconSize}
          color={iconColor}
        />
      );
    case 'received':
      return (
        <ReceivedArrowIcon
          width={iconSize}
          height={iconSize}
          color={iconColor}
        />
      );
    case 'sent':
    default:
      return (
        <SentArrowIcon
          width={iconSize}
          height={iconSize}
          color={iconColor}
        />
      );
  }
}

export function TransactionRow({
  transaction,
  showStatusDot = false,
  onPress,
}: TransactionRowProps) {
  const config = home.recentTransactions.row;
  const statusType = transaction.statusType ?? 'completed';

  const content = (
    <View style={styles.row}>
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <TransactionIcon transaction={transaction} />
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.mainText}>{transaction.title}</Text>
          <Text style={styles.secondaryText}>{transaction.date}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.amount}>
          {formatTransactionAmount(transaction)}
        </Text>

        <TransactionStatusBadge
          status={transaction.status}
          statusType={statusType}
          showDot={showStatusDot}
        />
      </View>
    </View>
  );

  if (!onPress) {
    return content;
  }

  return (
    <Pressable accessibilityRole="button" onPress={onPress}>
      {content}
    </Pressable>
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
});
