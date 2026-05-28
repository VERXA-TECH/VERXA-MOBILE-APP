import { Fragment } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

import { EmptyStateCard } from "@/components/ui/EmptyStateCard"
import { home } from "@/theme"

import { TransactionRow, type TransactionItem } from "./TransactionRow"

const MOCK_TRANSACTIONS: TransactionItem[] = [
  {
    id: "tx-1",
    title: "Transfer to Ademola Jones",
    date: "Today, 09:20AM",
    amount: 480_600,
    direction: "sent",
    status: "Completed",
  },
  {
    id: "tx-2",
    title: "Received from Sarah Ade",
    date: "Yesterday, 06:30PM",
    amount: 250_000,
    direction: "received",
    status: "Completed",
  },
]

type RecentTransactionsSectionProps = {
  transactions?: TransactionItem[]
  onSeeAllPress?: () => void
  onEmptyActionPress?: () => void
}

export function RecentTransactionsSection({
  transactions = [],
  onSeeAllPress,
  onEmptyActionPress,
}: RecentTransactionsSectionProps) {
  const config = home.recentTransactions
  const hasTransactions = transactions.length > 0

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Transactions</Text>

        {hasTransactions ? (
          <Pressable
            accessibilityRole="link"
            hitSlop={8}
            onPress={onSeeAllPress}
          >
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        ) : null}
      </View>

      {hasTransactions ? (
        <View style={styles.listCard}>
          {transactions.map((transaction, index) => (
            <Fragment key={transaction.id}>
              <TransactionRow transaction={transaction} />

              {index < transactions.length - 1 ? (
                <View style={styles.divider} />
              ) : null}
            </Fragment>
          ))}
        </View>
      ) : (
        <View style={styles.emptyCard}>
          <EmptyStateCard
            image={require("../../../assets/home/empty-wallet.png")}
            imageSize={config.empty.walletSize}
            title="No transactions yet"
            description="You haven't made any transactions yet. Start by adding funds to send and exchange money effortlessly."
            actionLabel="Make Your First Transaction"
            descriptionMaxWidth={config.empty.description.maxWidth}
            containerStyle={styles.emptyContent}
            onActionPress={onEmptyActionPress}
          />
        </View>
      )}
    </View>
  )
}

export { MOCK_TRANSACTIONS }

const config = home.recentTransactions

const styles = StyleSheet.create({
  section: {
    marginTop: config.marginTop,
    alignSelf: "stretch",
    gap: config.headerGap,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  title: config.title,
  seeAll: config.seeAll,
  emptyCard: {
    borderRadius: config.card.borderRadius,
    backgroundColor: config.card.backgroundColor,
    paddingVertical: config.empty.paddingVertical,
    paddingHorizontal: config.empty.paddingHorizontal,
  },
  emptyContent: {
    gap: config.empty.gap,
  },
  listCard: {
    borderRadius: config.card.borderRadius,
    backgroundColor: config.card.backgroundColor,
    paddingVertical: config.list.paddingVertical,
    paddingHorizontal: config.list.paddingHorizontal,
    gap: config.list.gap,
  },
  divider: {
    height: config.divider.height,
    backgroundColor: config.divider.backgroundColor,
    alignSelf: "stretch",
  },
})
