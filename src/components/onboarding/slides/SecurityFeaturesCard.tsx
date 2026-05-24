import type { ComponentType } from "react"
import { Text, View, type ViewStyle } from "react-native"

import { GlassCard } from "@/components/onboarding/GlassCard"
import { onboarding } from "@/theme"

import CheckDoubleIcon from "../../../../assets/onboarding/check-double-line.svg"
import LockIcon from "../../../../assets/onboarding/lock-fill.svg"
import ShieldIcon from "../../../../assets/onboarding/shield-check-fill.svg"
import UserIcon from "../../../../assets/onboarding/user-3-fill.svg"

const { securityFeaturesCard: layout } = onboarding
const { card: cardStyle, icon: iconStyle, tag: tagStyle } = layout
const { primary, secondary, tag: tagText } = layout.typography

type SecurityFeature = {
  Icon: ComponentType<{ width?: number; height?: number }>
  title: string
  description: string
  badge: string
  align: "left" | "right"
}

const FEATURES: SecurityFeature[] = [
  {
    Icon: UserIcon,
    title: "Identity Verified",
    description: "Your identity has been verified",
    badge: "Verified",
    align: "left",
  },
  {
    Icon: LockIcon,
    title: "2FA Authentication",
    description: "Two-factor authentication is active",
    badge: "Enabled",
    align: "right",
  },
  {
    Icon: ShieldIcon,
    title: "Bank-grade encryption",
    description: "All transfers are encrypted",
    badge: "Secured",
    align: "left",
  },
]

type SecurityFeatureRowProps = SecurityFeature & {
  style?: ViewStyle
}

function SecurityFeatureRow({
  Icon,
  title,
  description,
  badge,
  style,
}: SecurityFeatureRowProps) {
  return (
    <GlassCard
      style={{
        width: cardStyle.width,
        height: cardStyle.height,
        padding: cardStyle.padding,
        borderRadius: cardStyle.borderRadius,
        borderWidth: cardStyle.borderWidth,
        ...style,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: cardStyle.gap,
        }}
      >
        <View
          style={{
            width: iconStyle.width,
            height: iconStyle.height,
            paddingTop: iconStyle.paddingTop,
            paddingRight: iconStyle.paddingRight,
            paddingBottom: iconStyle.paddingBottom,
            paddingLeft: iconStyle.paddingLeft,
            borderRadius: iconStyle.borderRadius,
            backgroundColor: iconStyle.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon width={iconStyle.iconSize} height={iconStyle.iconSize} />
        </View>

        <View className="flex-1" style={{ gap: 2 }}>
          <Text style={primary}>{title}</Text>
          <Text style={secondary}>{description}</Text>
        </View>

        <View
          className="flex-row items-center"
          style={{
            borderRadius: tagStyle.borderRadius,
            borderWidth: tagStyle.borderWidth,
            borderColor: tagStyle.borderColor,
            backgroundColor: tagStyle.backgroundColor,
            paddingHorizontal: tagStyle.paddingHorizontal,
            paddingVertical: tagStyle.paddingVertical,
            gap: tagStyle.gap,
          }}
        >
          <CheckDoubleIcon
            width={tagStyle.iconSize}
            height={tagStyle.iconSize}
          />
          <Text style={tagText}>{badge}</Text>
        </View>
      </View>
    </GlassCard>
  )
}

export function SecurityFeaturesCard() {
  return (
    <View
      style={{
        position: "absolute",
        left: layout.screenPaddingLeft,
        right: layout.position.right,
        bottom: layout.position.bottom,
        height: layout.height,
        justifyContent: "space-between",
      }}
    >
      {FEATURES.map((feature) => (
        <SecurityFeatureRow
          key={feature.title}
          {...feature}
          style={{
            alignSelf: feature.align === "right" ? "flex-end" : "flex-start",
          }}
        />
      ))}
    </View>
  )
}
