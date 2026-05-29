import type { ComponentType } from 'react';
import type { SvgProps } from 'react-native-svg';
import type { ImageSource } from 'expo-image';

import type { WalletFilter } from '@/components/transactions/filters/transactionFilterTypes';

import CanadaFlag from '../../../../assets/onboarding/Canada.svg';
import GhanaFlag from '../../../../assets/onboarding/Ghana.svg';
import NigeriaFlag from '../../../../assets/onboarding/Nigeria.svg';
import SouthAfricaFlag from '../../../../assets/onboarding/South Africa.svg';
import TetherIcon from '../../../../assets/onboarding/Tether USDT.svg';
import UkFlag from '../../../../assets/onboarding/United Kingdom.svg';

export type WalletFilterOption = {
  value: WalletFilter;
  label: string;
  SvgIcon?: ComponentType<SvgProps>;
  image?: ImageSource;
};

export const WALLET_FILTER_OPTIONS: WalletFilterOption[] = [
  { value: 'all', label: 'All wallets' },
  { value: 'NGN', label: 'NGN', SvgIcon: NigeriaFlag },
  { value: 'GBP', label: 'GBP', SvgIcon: UkFlag },
  { value: 'CAD', label: 'CAD', SvgIcon: CanadaFlag },
  { value: 'GHS', label: 'GHS', SvgIcon: GhanaFlag },
  { value: 'ZAR', label: 'ZAR', SvgIcon: SouthAfricaFlag },
  {
    value: 'BTC',
    label: 'BTC',
    image: require('../../../../assets/transactions/wallets/btc.png'),
  },
  {
    value: 'ETH',
    label: 'ETH',
    image: require('../../../../assets/transactions/wallets/eth.png'),
  },
  {
    value: 'USDC',
    label: 'USDC',
    image: require('../../../../assets/transactions/wallets/usdc.png'),
  },
  { value: 'USDT', label: 'USDT', SvgIcon: TetherIcon },
];
