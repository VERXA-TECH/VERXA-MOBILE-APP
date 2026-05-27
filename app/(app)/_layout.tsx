import { Stack } from 'expo-router';

import { colors } from '@/theme';

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background.app },
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="wallet/[id]" options={{ presentation: 'card' }} />
      <Stack.Screen name="transaction/[id]" options={{ presentation: 'card' }} />
    </Stack>
  );
}
