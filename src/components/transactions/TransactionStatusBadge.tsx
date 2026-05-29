import { StyleSheet, Text, View } from "react-native"

import type { TransactionStatusType } from "@/components/home/TransactionRow"
import { home, colors } from "@/theme"

import { StatusDot } from "./StatusDot"

type TransactionStatusBadgeProps = {
  status: string
  statusType?: TransactionStatusType
  showDot?: boolean
}

export function TransactionStatusBadge({
  status,
  statusType = "completed",
  showDot = true,
}: TransactionStatusBadgeProps) {
  const config = home.recentTransactions.row.badge
  const badgeVariant =
    statusType === "failed"
      ? "failed"
      : statusType === "pending"
        ? "pending"
        : "completed"

  return (
    <View
      style={[
        styles.badge,
        badgeVariant === "failed"
          ? styles.badgeFailed
          : badgeVariant === "pending"
            ? styles.badgePending
            : styles.badgeCompleted,
        showDot && styles.badgeWithDot,
      ]}
    >
      {showDot ? <StatusDot variant={statusType} /> : null}
      <Text
        style={[
          styles.badgeText,
          badgeVariant === "failed"
            ? styles.badgeTextFailed
            : badgeVariant === "pending"
              ? styles.badgeTextPending
              : styles.badgeTextCompleted,
        ]}
      >
        {status}
      </Text>
    </View>
  )
}

const config = home.recentTransactions.row.badge

const styles = StyleSheet.create({
  badge: {
    paddingVertical: config.paddingVertical,
    paddingHorizontal: config.paddingHorizontal,
    borderRadius: config.borderRadius,
    alignItems: "center",
  },
  badgeWithDot: {
    flexDirection: "row",
    gap: 4,
  },
  badgeCompleted: {
    backgroundColor: config.backgroundColor,
  },
  badgeFailed: {
    backgroundColor: colors.state.errorLighter,
  },
  badgePending: {
    backgroundColor: "rgba(225, 102, 20, 0.10)",
  },
  badgeText: {
    fontFamily: config.fontFamily,
    fontSize: config.fontSize,
    lineHeight: config.lineHeight,
    textAlign: "center",
  },
  badgeTextCompleted: {
    color: config.textColor,
  },
  badgeTextFailed: {
    color: colors.state.error,
  },
  badgeTextPending: {
    color: colors.state.warning,
  },
})
