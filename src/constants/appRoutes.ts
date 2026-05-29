import type { Href } from 'expo-router';

export const appRoutes = {
  home: '/(app)/(tabs)/home',
  transactions: '/transaction' as Href,
} as const satisfies Record<string, Href>;

export function transactionDetailRoute(id: string): Href {
  return `/transaction/${id}` as Href;
}
