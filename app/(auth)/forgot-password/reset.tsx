import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { View } from 'react-native';

import {
  AuthFormScreen,
  authFormScreenStyles,
} from '@/components/auth/AuthFormScreen';
import { Button } from '@/components/ui/Button';
import { PasswordValidationFeedback } from '@/components/ui/PasswordValidationFeedback';
import { TextField } from '@/components/ui/TextField';
import EyeIcon from '../../../assets/eye-line.svg';
import {
  passwordsMatch,
  validatePassword,
} from '@/utils/passwordValidation';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validation = useMemo(() => validatePassword(password), [password]);
  const isFormValid =
    validation.isValid && passwordsMatch(password, confirmPassword);

  const handleResetPassword = () => {
    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    // TODO: wire up reset-password API
    router.replace('/(auth)/forgot-password/success');

    setIsSubmitting(false);
  };

  return (
    <AuthFormScreen
      title="Reset Password"
      footer={
        <Button
          title="Reset Password"
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isFormValid}
          loading={isSubmitting}
          onPress={handleResetPassword}
        />
      }
    >
      <View style={authFormScreenStyles.form}>
        <TextField
          label="New Password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoComplete="new-password"
          textContentType="newPassword"
          rightIcon={<EyeIcon width={20} height={20} />}
          onRightIconPress={() => setShowPassword((current) => !current)}
        />

        <View style={{ gap: 12 }}>
          <TextField
            label="Confirm password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
            autoComplete="new-password"
            textContentType="newPassword"
            rightIcon={<EyeIcon width={20} height={20} />}
            onRightIconPress={() =>
              setShowConfirmPassword((current) => !current)
            }
          />

          <PasswordValidationFeedback validation={validation} />
        </View>
      </View>
    </AuthFormScreen>
  );
}
