import { StyleSheet, View } from 'react-native';

import { WalletCard } from './WalletCard';
import type { WalletItem } from './mockWallets';
import { wallets } from '@/theme';

type WalletListProps = {
  wallets: WalletItem[];
  onWalletPress?: (wallet: WalletItem) => void;
};

export function WalletList({ wallets: items, onWalletPress }: WalletListProps) {
  return (
    <View style={styles.list}>
      {items.map((wallet) => (
        <WalletCard
          key={wallet.id}
          wallet={wallet}
          onPress={onWalletPress}
        />
      ))}
    </View>
  );
}

const config = wallets.walletList;

const styles = StyleSheet.create({
  list: {
    marginTop: config.marginTop,
    gap: config.gap,
    alignSelf: 'stretch',
  },
});
