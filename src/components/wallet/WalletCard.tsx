import { Image } from "expo-image"
import { Pressable, StyleSheet, Text, View } from "react-native"

import type { WalletItem } from "./mockWallets"
import { wallets } from "@/theme"

type WalletCardProps = {
  wallet: WalletItem
  onPress?: (wallet: WalletItem) => void
}

export function WalletCard({ wallet, onPress }: WalletCardProps) {
  const Icon = wallet.SvgIcon

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress?.(wallet)}
      style={styles.card}
    >
      <View style={styles.left}>
        {Icon ? (
          <Icon width={config.iconSize} height={config.iconSize} />
        ) : wallet.image ? (
          <Image
            source={wallet.image}
            style={styles.iconImage}
            contentFit="cover"
          />
        ) : null}

        <View style={styles.textStack}>
          <Text style={styles.name}>{wallet.name}</Text>
          <Text style={styles.walletLabel}>{wallet.walletLabel}</Text>
        </View>
      </View>

      <Text style={styles.balance}>{wallet.balance}</Text>
    </Pressable>
  )
}

const config = wallets.walletCard

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: config.padding,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: config.borderRadius,
    borderWidth: config.borderWidth,
    borderColor: config.borderColor,
    backgroundColor: config.backgroundColor,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: config.contentGap,
    flexShrink: 1,
  },
  iconImage: {
    width: config.iconSize,
    height: config.iconSize,
    borderRadius: config.iconSize / 2,
  },
  textStack: {
    gap: 2,
    flexShrink: 1,
  },
  name: config.name,
  walletLabel: config.walletLabel,
  balance: config.balance,
})
