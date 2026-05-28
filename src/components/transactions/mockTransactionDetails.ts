import type { TransactionDetailRow } from '@/components/transactions/TransactionDetailsCard';
import type { TransactionItem } from '@/components/home/TransactionRow';
import {
  formatNaira,
  formatNairaCompact,
  formatUsdCompact,
  formatUsdtCompact,
} from '@/utils/currency';

import { MOCK_ALL_TRANSACTIONS } from './mockTransactions';

export type TransactionDetail = TransactionItem & {
  summaryLabel: string;
  summaryDescription: string;
  detailRows: TransactionDetailRow[];
};

function formatDetailAmount(transaction: TransactionItem): string {
  const amount = Math.abs(transaction.amount);

  if (transaction.currency === 'USD') {
    return formatUsdCompact(amount);
  }

  if (transaction.currency === 'USDT') {
    return formatUsdtCompact(amount);
  }

  return formatNaira(amount);
}

function formatSummaryAmount(transaction: TransactionItem): string {
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

function buildDefaultDetail(transaction: TransactionItem): TransactionDetail {
  const isSent = transaction.direction === 'sent';
  const summaryLabel = isSent ? 'MONEY SENT' : 'MONEY RECEIVED';
  const recipientName = transaction.title.replace(/^(Transfer to|Received from)\s/i, '');

  return {
    ...transaction,
    summaryLabel,
    summaryDescription: isSent
      ? `To ${recipientName}`
      : `From ${recipientName}`,
    detailRows: [
      {
        label: 'Status',
        value: transaction.status,
        type: 'status',
        statusType: transaction.statusType ?? 'completed',
      },
      {
        label: isSent ? 'Recipient' : 'Sender',
        value: recipientName,
      },
      {
        label: 'Amount',
        value: formatDetailAmount(transaction),
      },
      {
        label: 'Date',
        value: transaction.date,
      },
      {
        label: 'Reference',
        value: `VRX-2026-${transaction.id.replace('tx-', '').padStart(5, '0')}`,
      },
    ],
  };
}

const MOCK_TRANSACTION_DETAILS: Record<string, Partial<TransactionDetail>> = {
  'tx-1': {
    summaryLabel: 'MONEY SENT',
    summaryDescription: 'To Ademola Jones · GTBank',
    detailRows: [
      {
        label: 'Status',
        value: 'Completed',
        type: 'status',
        statusType: 'completed',
      },
      { label: 'Recipient', value: 'Ademola Jones' },
      { label: 'Account Number', value: 'GTBank · 20004524521' },
      { label: 'Amount sent', value: '₦480,600.00' },
      { label: 'Transfer fee', value: '₦1,500.00' },
      { label: 'Wallet debited', value: 'NGN Wallet' },
      { label: 'Reference', value: 'VRX-2026-08841' },
    ],
  },
  'tx-2': {
    summaryLabel: 'MONEY SENT',
    summaryDescription: 'To Ademola Jones · GTBank',
    detailRows: [
      {
        label: 'Status',
        value: 'Failed',
        type: 'status',
        statusType: 'failed',
      },
      { label: 'Recipient', value: 'Ademola Jones' },
      { label: 'Account Number', value: 'GTBank · 20004524521' },
      { label: 'Amount sent', value: '₦480,600.00' },
      { label: 'Transfer fee', value: '₦1,500.00' },
      { label: 'Wallet debited', value: 'NGN Wallet' },
      { label: 'Reference', value: 'VRX-2026-08842' },
    ],
  },
  'tx-4c': {
    summaryLabel: 'MONEY RECEIVED',
    summaryDescription: 'From USDT Wallet',
    detailRows: [
      {
        label: 'Status',
        value: 'Completed',
        type: 'status',
        statusType: 'completed',
      },
      { label: 'Sender', value: 'USDT Wallet' },
      { label: 'Amount received', value: '500 USDT' },
      { label: 'Wallet credited', value: 'USDT Wallet' },
      { label: 'Reference', value: 'VRX-2026-08850' },
    ],
  },
};

export function getTransactionDetailById(id: string): TransactionDetail | null {
  const transaction = MOCK_ALL_TRANSACTIONS.find((item) => item.id === id);

  if (!transaction) {
    return null;
  }

  const override = MOCK_TRANSACTION_DETAILS[id];
  const base = buildDefaultDetail(transaction);

  if (!override) {
    return base;
  }

  return {
    ...base,
    ...override,
    summaryLabel: override.summaryLabel ?? base.summaryLabel,
    summaryDescription: override.summaryDescription ?? base.summaryDescription,
    detailRows: override.detailRows ?? base.detailRows,
  };
}

export function getTransactionSummaryAmount(id: string): string {
  const transaction = MOCK_ALL_TRANSACTIONS.find((item) => item.id === id);

  if (!transaction) {
    return '';
  }

  return formatSummaryAmount(transaction);
}
