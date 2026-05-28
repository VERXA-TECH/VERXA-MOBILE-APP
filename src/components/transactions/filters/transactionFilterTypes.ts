import type {
  TransactionFilterType,
  TransactionItem,
  TransactionStatusType,
  TransactionWallet,
} from '@/components/home/TransactionRow';

export type TransactionTypeFilter = 'all' | TransactionFilterType;

export type WalletFilter = 'all' | TransactionWallet;

export type StatusFilter = 'all' | TransactionStatusType;

export type TransactionFilters = {
  type: TransactionTypeFilter;
  wallet: WalletFilter;
  status: StatusFilter;
  dateFrom: string | null;
  dateTo: string | null;
};

export const DEFAULT_TRANSACTION_FILTERS: TransactionFilters = {
  type: 'all',
  wallet: 'all',
  status: 'all',
  dateFrom: null,
  dateTo: null,
};

export const TRANSACTION_TYPE_OPTIONS: {
  value: TransactionTypeFilter;
  label: string;
}[] = [
  { value: 'all', label: 'All' },
  { value: 'sent', label: 'Sent' },
  { value: 'received', label: 'Received' },
  { value: 'converted', label: 'Converted' },
  { value: 'bills', label: 'Bills' },
  { value: 'withdrawn', label: 'Withdrawn' },
];

export const STATUS_FILTER_OPTIONS: {
  value: StatusFilter;
  label: string;
}[] = [
  { value: 'all', label: 'All status' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
  { value: 'failed', label: 'Failed' },
];

export function resolveTransactionFilterType(
  transaction: TransactionItem,
): TransactionFilterType {
  if (transaction.filterType) {
    return transaction.filterType;
  }

  switch (transaction.iconType) {
    case 'exchange':
      return 'converted';
    case 'card':
      return 'bills';
    case 'received':
    case 'usdtReceived':
      return 'received';
    case 'transferUk':
    case 'sent':
    default:
      return transaction.direction === 'received' ? 'received' : 'sent';
  }
}

export function resolveTransactionWallet(
  transaction: TransactionItem,
): TransactionWallet {
  if (transaction.wallet) {
    return transaction.wallet;
  }

  if (transaction.currency === 'USDT') {
    return 'USDT';
  }

  if (transaction.iconType === 'transferUk') {
    return 'GBP';
  }

  return 'NGN';
}

export function countActiveTransactionFilters(
  filters: TransactionFilters,
): number {
  let count = 0;

  if (filters.type !== 'all') count += 1;
  if (filters.wallet !== 'all') count += 1;
  if (filters.status !== 'all') count += 1;
  if (filters.dateFrom || filters.dateTo) count += 1;

  return count;
}

export function matchesTransactionFilters(
  transaction: TransactionItem,
  filters: TransactionFilters,
): boolean {
  if (
    filters.type !== 'all' &&
    resolveTransactionFilterType(transaction) !== filters.type
  ) {
    return false;
  }

  if (
    filters.wallet !== 'all' &&
    resolveTransactionWallet(transaction) !== filters.wallet
  ) {
    return false;
  }

  if (filters.status !== 'all') {
    const statusType = transaction.statusType ?? 'completed';

    if (statusType !== filters.status) {
      return false;
    }
  }

  return true;
}
