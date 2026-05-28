import { ScrollView, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { HomeHeader } from "@/components/home/HomeHeader"
import { HomeQuickActions } from "@/components/home/HomeQuickActions"
import { HomeReferralCarousel } from "@/components/home/HomeReferralCarousel"
import { HomeScreenShell } from "@/components/home/HomeScreenShell"
import { PortfolioValueCard } from "@/components/home/PortfolioValueCard"
import {
  MOCK_TRANSACTIONS,
  RecentTransactionsSection,
} from "@/components/home/RecentTransactionsSection"
import { home } from "@/theme"

/** Toggle to preview the funded portfolio card state in the UI. */
const PREVIEW_FUNDED_STATE = true

/** Toggle to preview the populated recent transactions list. */
const PREVIEW_TRANSACTIONS = true

export default function HomeScreen() {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const balance = PREVIEW_FUNDED_STATE ? 120_000 : 0
  const transactions = PREVIEW_TRANSACTIONS ? MOCK_TRANSACTIONS : []

  return (
    <HomeScreenShell>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 120 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader name="James" />

        <PortfolioValueCard balance={balance} />

        <HomeQuickActions />

        <HomeReferralCarousel />

        <RecentTransactionsSection
          transactions={transactions}
          onSeeAllPress={() => router.push("/(app)/transactions")}
        />
      </ScrollView>
    </HomeScreenShell>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: home.screen.paddingHorizontal,
  },
})
