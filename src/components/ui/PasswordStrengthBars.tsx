import { StyleSheet, View } from 'react-native';

import type { PasswordStrengthLevel } from '@/utils/passwordValidation';
import { colors } from '@/theme';

const BAR_COUNT = 3;

const STRENGTH_COLORS: Record<Exclude<PasswordStrengthLevel, 0>, string> = {
  1: colors.state.error,
  2: colors.state.warning,
  3: colors.state.success,
};

type PasswordStrengthBarsProps = {
  strength: PasswordStrengthLevel;
};

export function PasswordStrengthBars({ strength }: PasswordStrengthBarsProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: BAR_COUNT }, (_, index) => {
        const barIndex = index + 1;
        const isActive = strength >= barIndex;
        const backgroundColor = isActive
          ? STRENGTH_COLORS[barIndex as Exclude<PasswordStrengthLevel, 0>]
          : colors.background.soft200;

        return (
          <View
            key={barIndex}
            style={[styles.bar, { backgroundColor }]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    gap: 8,
  },
  bar: {
    flex: 1,
    height: 4,
    borderRadius: 1.2,
  },
});
