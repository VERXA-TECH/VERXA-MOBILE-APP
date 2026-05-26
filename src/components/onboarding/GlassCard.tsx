import type { ReactNode } from 'react';
import { View, type ViewStyle } from 'react-native';

import { onboarding } from '@/theme';

type GlassCardProps = {
  children: ReactNode;
  style?: ViewStyle;
  className?: string;
};

export function GlassCard({ children, style, className }: GlassCardProps) {
  const { borderRadius, borderWidth, borderColor, backgroundColor } = onboarding.glassCard;

  return (
    <View
      className={className}
      style={[
        {
          borderRadius,
          borderWidth,
          borderColor,
          backgroundColor,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
