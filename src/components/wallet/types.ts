import type { ComponentType } from 'react';
import type { ImageSource } from 'expo-image';
import type { SvgProps } from 'react-native-svg';

export type WalletTabFilter = 'all' | 'fiat' | 'crypto';

export type WalletCategory = 'fiat' | 'crypto';

export type WalletItem = {
  id: string;
  category: WalletCategory;
  name: string;
  walletLabel: string;
  balance: string;
  SvgIcon?: ComponentType<SvgProps>;
  image?: ImageSource;
};
