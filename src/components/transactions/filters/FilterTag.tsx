import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { transactions } from '@/theme';

type FilterTagProps = {
  label: string;
  active?: boolean;
  onPress: () => void;
  icon?: ReactNode;
};

export function FilterTag({ label, active = false, onPress, icon }: FilterTagProps) {
  const config = transactions.filter.tag;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[styles.tag, active && styles.tagActive]}
    >
      {icon}
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

const config = transactions.filter.tag;

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.gap,
    padding: config.padding,
    borderRadius: config.borderRadius,
    borderWidth: 1,
    borderColor: config.borderColor,
    backgroundColor: config.backgroundColor,
    ...config.shadow,
  },
  tagActive: {
    borderColor: config.activeBorderColor,
  },
  label: {
    ...config.label,
  },
  labelActive: {
    color: config.activeLabelColor,
  },
});
