import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TransactionStatusBadge } from '@/components/transactions/TransactionStatusBadge';
import type { TransactionStatusType } from '@/components/home/TransactionRow';
import { transactions } from '@/theme';

export type TransactionDetailRow = {
  label: string;
  value: string;
  type?: 'text' | 'status';
  statusType?: TransactionStatusType;
};

type TransactionDetailsCardProps = {
  rows: TransactionDetailRow[];
};

export function TransactionDetailsCard({ rows }: TransactionDetailsCardProps) {
  return (
    <View style={styles.card}>
      {rows.map((row, index) => (
        <Fragment key={row.label}>
          <View style={styles.row}>
            <Text style={styles.label}>{row.label}</Text>

            {row.type === 'status' ? (
              <TransactionStatusBadge
                status={row.value}
                statusType={row.statusType ?? 'completed'}
              />
            ) : (
              <Text style={styles.value}>{row.value}</Text>
            )}
          </View>

          {index < rows.length - 1 ? <View style={styles.divider} /> : null}
        </Fragment>
      ))}
    </View>
  );
}

const config = transactions.detail;

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    borderRadius: config.card.borderRadius,
    backgroundColor: config.card.backgroundColor,
    paddingVertical: config.card.paddingVertical,
    paddingHorizontal: config.card.paddingHorizontal,
    gap: config.card.gap,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    gap: 12,
  },
  label: {
    ...config.row.label,
    flexShrink: 0,
  },
  value: {
    ...config.row.value,
    flex: 1,
    textAlign: 'right',
  },
  divider: {
    height: config.divider.height,
    backgroundColor: config.divider.backgroundColor,
    alignSelf: 'stretch',
  },
});
