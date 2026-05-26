import { StyleSheet, Text, View } from 'react-native';

import SelectBoxCircleFillIcon from '../../../assets/select-box-circle-fill.svg';
import { colors, typography } from '@/theme';
import {
  PASSWORD_RULES,
  type PasswordRuleId,
} from '@/utils/passwordValidation';

type PasswordRequirementsProps = {
  rules: Record<PasswordRuleId, boolean>;
};

export function PasswordRequirements({ rules }: PasswordRequirementsProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Must contain at least;</Text>

      <View style={styles.list}>
        {PASSWORD_RULES.map((rule) => {
          const isMet = rules[rule.id];
          const toneColor = isMet ? colors.state.success : colors.text.soft400;

          return (
            <View key={rule.id} style={styles.item}>
              <SelectBoxCircleFillIcon
                width={16}
                height={16}
                color={isMet ? colors.state.success : colors.text.placeholder}
              />
              <Text style={[styles.itemText, { color: toneColor }]}>
                {rule.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    gap: 8,
  },
  heading: {
    alignSelf: 'stretch',
    fontFamily: typography.paragraph.xSmall.fontFamily,
    fontSize: typography.paragraph.xSmall.fontSize,
    fontWeight: typography.paragraph.xSmall.fontWeight,
    lineHeight: typography.paragraph.xSmall.lineHeight,
    color: typography.paragraph.xSmall.color,
  },
  list: {
    gap: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemText: {
    flex: 1,
    fontFamily: typography.paragraph.xSmall.fontFamily,
    fontSize: typography.paragraph.xSmall.fontSize,
    fontWeight: typography.paragraph.xSmall.fontWeight,
    lineHeight: typography.paragraph.xSmall.lineHeight,
    color: typography.paragraph.xSmall.color,
  },
});
