import type { Href } from 'expo-router';

export const appRoutes = {
  home: '/(app)/(tabs)/home',
} as const satisfies Record<string, Href>;
