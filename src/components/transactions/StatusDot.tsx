import { StyleSheet, View } from "react-native"

import { transactions } from "@/theme"

type StatusDotProps = {
  variant: "completed" | "failed"
}

export function StatusDot({ variant }: StatusDotProps) {
  const config = transactions.statusDot
  const color =
    variant === "completed" ? config.completedColor : config.failedColor

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
