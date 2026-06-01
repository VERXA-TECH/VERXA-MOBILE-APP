import { walletsShared } from './shared';

export const wallets = {
  ...walletsShared,
} as const;

export { walletsShared };
