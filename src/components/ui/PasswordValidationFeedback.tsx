import { StyleSheet, View } from 'react-native';

import { PasswordRequirements } from '@/components/ui/PasswordRequirements';
import { PasswordStrengthBars } from '@/components/ui/PasswordStrengthBars';
import type { PasswordValidationResult } from '@/utils/passwordValidation';

type PasswordValidationFeedbackProps = {
  validation: PasswordValidationResult;
};

export function PasswordValidationFeedback({
  validation,
}: PasswordValidationFeedbackProps) {
  return (
    <View style={styles.wrapper}>
      <PasswordStrengthBars strength={validation.strength} />
      <PasswordRequirements rules={validation.rules} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    gap: 12,
  },
});
