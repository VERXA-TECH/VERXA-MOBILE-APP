import {
  EMPTY_WALLETS_STATE,
  FUNDED_WALLETS_STATE,
  buildWalletItems,
} from './walletsState';

export type { WalletItem, WalletTabFilter, WalletCategory } from './types';

export {
  EMPTY_WALLETS_STATE,
  FUNDED_WALLETS_STATE,
  buildWalletItems,
} from './walletsState';

export const MOCK_WALLETS_EMPTY = buildWalletItems(EMPTY_WALLETS_STATE);
export const MOCK_WALLETS_FUNDED = buildWalletItems(FUNDED_WALLETS_STATE);

import type { WalletItem, WalletTabFilter } from './types';

export function filterWallets(
  wallets: WalletItem[],
  tab: WalletTabFilter,
): WalletItem[] {
  if (tab === 'all') {
    return wallets;
  }

  if (tab === 'fiat') {
    return wallets.filter((wallet) => wallet.category === 'fiat');
  }

  return wallets.filter((wallet) => wallet.category === 'crypto');
}
