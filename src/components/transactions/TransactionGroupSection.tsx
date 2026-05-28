import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  TransactionRow,
  type TransactionItem,
} from '@/components/home/TransactionRow';
import { transactions } from '@/theme';

export type TransactionGroup = {
  label: string;
  transactions: TransactionItem[];
};

type TransactionGroupSectionProps = {
  group: TransactionGroup;
};

export function TransactionGroupSection({ group }: TransactionGroupSectionProps) {
  const { transactions: items } = group;

  return (
    <View style={styles.section}>
      <Text style={styles.dateLabel}>{group.label}</Text>

      <View style={styles.listCard}>
        {items.map((transaction, index) => (
          <Fragment key={transaction.id}>
            <TransactionRow transaction={transaction} showStatusDot />

            {index < items.length - 1 ? (
              <View style={styles.divider} />
            ) : null}
          </Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    alignSelf: 'stretch',
    gap: transactions.screen.groupGap,
  },
  dateLabel: transactions.dateLabel,
  listCard: {
    borderRadius: transactions.listCard.borderRadius,
    backgroundColor: transactions.listCard.backgroundColor,
    paddingVertical: transactions.list.paddingVertical,
    paddingHorizontal: transactions.list.paddingHorizontal,
    gap: transactions.list.gap,
  },
  divider: {
    height: transactions.divider.height,
    backgroundColor: transactions.divider.backgroundColor,
    alignSelf: 'stretch',
  },
});
