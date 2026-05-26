import { useRouter } from 'expo-router';

import { AuthSuccessScreen } from '@/components/auth/AuthSuccessScreen';

export default function PasswordResetSuccessScreen() {
  const router = useRouter();

  return (
    <AuthSuccessScreen
      image={require('../../../assets/successfully.png')}
      imageSize={{ width: 220, height: 220 }}
      title="Your Password has been changed successfully"
      buttonTitle="Go to Sign In"
      onButtonPress={() => router.replace('/(auth)/login')}
    />
  );
}
