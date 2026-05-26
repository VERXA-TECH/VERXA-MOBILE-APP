import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import {
  AuthScreenShell,
  authScreenStyles,
} from '@/components/auth/AuthScreenShell';
import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/TextField';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = email.trim().length > 0;

  const handleSendResetLink = () => {
    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    // TODO: wire up forgot-password API
    router.push({
      pathname: '/(auth)/forgot-password/verify',
      params: { email: email.trim() },
    });

    setIsSubmitting(false);
  };

  return (
    <AuthScreenShell
      heroImage={require('../../../assets/lock_image.png')}
      heroImageSize={{ width: 180, height: 180 }}
      title="Forget Password"
      description="Enter your email address and we'll send you an OTP code to proceed to reset your password"
      footer={
        <Button
          title="Send Reset Link"
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isFormValid}
          loading={isSubmitting}
          onPress={handleSendResetLink}
        />
      }
    >
      <View style={authScreenStyles.form}>
        <TextField
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
        />
      </View>
    </AuthScreenShell>
  );
}
