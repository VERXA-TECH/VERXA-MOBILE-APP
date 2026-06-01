import { useMemo, useState } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  FUNDED_WALLETS_STATE,
  EMPTY_WALLETS_STATE,
  WalletList,
  WalletsHeader,
  WalletsPortfolioCard,
  WalletsScreenShell,
  WalletsTabBar,
  buildWalletItems,
  filterWallets,
  type WalletTabFilter,
} from "@/components/wallet"
import { walletDetailRoute } from "@/constants/appRoutes"
import { wallets } from "@/theme"

/** Toggle to preview funded wallet balances in the UI. */
const PREVIEW_FUNDED_STATE = true

export default function WalletsScreen() {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const [activeTab, setActiveTab] = useState<WalletTabFilter>("all")

  const walletsState = PREVIEW_FUNDED_STATE
    ? FUNDED_WALLETS_STATE
    : EMPTY_WALLETS_STATE

  const allWallets = useMemo(
    () => buildWalletItems(walletsState),
    [walletsState],
  )

  const visibleWallets = useMemo(
    () => filterWallets(allWallets, activeTab),
    [activeTab, allWallets],
  )

  return (
    <WalletsScreenShell>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 120 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <WalletsHeader />

        <WalletsPortfolioCard
          balance={walletsState.portfolioBalanceNgn}
          activeWalletCount={walletsState.activeWalletCount}
        />

        <WalletsTabBar value={activeTab} onChange={setActiveTab} />

        <WalletList
          wallets={visibleWallets}
          onWalletPress={(wallet) => router.push(walletDetailRoute(wallet.id))}
        />
      </ScrollView>
    </WalletsScreenShell>
  )
}

const config = wallets.screen

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: config.paddingHorizontal,
    paddingTop: config.paddingTop,
  },
})
