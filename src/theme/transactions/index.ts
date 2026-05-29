import { transactionsShared } from './shared';

export const transactions = {
  ...transactionsShared,
} as const;

export { transactionsShared };
