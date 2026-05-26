import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" options={{ animation: 'fade' }} />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      <Stack.Screen name="kyc/bvn" />
      <Stack.Screen name="kyc/id-upload" />
      <Stack.Screen name="kyc/pending" />
    </Stack>
  );
}
