import { StyleSheet, View } from "react-native"

import type { TransactionStatusType } from "@/components/home/TransactionRow"
import { transactions, colors } from "@/theme"

type StatusDotProps = {
  variant: TransactionStatusType
}

function getDotColor(variant: TransactionStatusType) {
  const config = transactions.statusDot

  if (variant === "failed") {
    return config.failedColor
  }

  if (variant === "pending") {
    return colors.state.warning
  }

  return config.completedColor
}

export function StatusDot({ variant }: StatusDotProps) {
  const config = transactions.statusDot
  const color = getDotColor(variant)

  return (
    <View
      style={[
        styles.glow,
        {
          shadowColor: color,
        },
      ]}
    >
      <View
        style={[
          styles.dot,
          {
            width: config.size,
            height: config.size,
            borderRadius: config.size / 2,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  )
}

const config = transactions.statusDot

const styles = StyleSheet.create({
  glow: {
    width: config.size,
    height: config.size,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: config.glowRadius,
    elevation: 2,
  },
  dot: {},
})
