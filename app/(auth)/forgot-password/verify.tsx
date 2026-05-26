import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

import {
  AuthScreenShell,
  authScreenStyles,
} from '@/components/auth/AuthScreenShell';
import { Button } from '@/components/ui/Button';
import { DigitInput } from '@/components/ui/DigitInput';

const OTP_LENGTH = 6;

export default function ForgotPasswordVerifyScreen() {
  const router = useRouter();
  const { email = '' } = useLocalSearchParams<{ email?: string }>();
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = code.length === OTP_LENGTH;

  const handleContinue = () => {
    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    // TODO: wire up OTP verification API
    router.push('/(auth)/forgot-password/reset');
    setIsSubmitting(false);
  };

  return (
    <AuthScreenShell
      heroImage={require('../../../assets/check_email_image.png')}
      heroImageSize={{ width: 180, height: 180 }}
      title="Check your Email"
      description={
        <View style={{ gap: 8 }}>
          <Text style={authScreenStyles.subtitle}>
            We sent a 6-digit verification code to your email:
          </Text>
          {email ? (
            <Text style={authScreenStyles.highlightedEmail}>{email}</Text>
          ) : null}
        </View>
      }
      footer={
        <Button
          title="Continue"
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isFormValid}
          loading={isSubmitting}
          onPress={handleContinue}
        />
      }
    >
      <DigitInput
        length={OTP_LENGTH}
        value={code}
        onChange={setCode}
        autoFocus
      />
    </AuthScreenShell>
  );
}
