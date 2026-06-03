import type { ComponentType } from 'react';
import type { SvgProps } from 'react-native-svg';

import BtcIcon from '../../assets/transactions/Bitcoin (BTC) (1).svg';
import EthIcon from '../../assets/transactions/Ethereum (ETH) (1).svg';
import UsdcIcon from '../../assets/transactions/USD Coin (USDC) (2).svg';
import UsdtIcon from '../../assets/transactions/Tether USDT (2).svg';

export { BtcIcon, EthIcon, UsdcIcon, UsdtIcon };

export const cryptoWalletIcons = {
  btc: BtcIcon,
  eth: EthIcon,
  usdc: UsdcIcon,
  usdt: UsdtIcon,
} as const satisfies Record<string, ComponentType<SvgProps>>;
