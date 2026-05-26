import type { Href } from 'expo-router';

/**
 * Typed auth route hrefs.
 * Folder index routes (e.g. forgot-password) resolve at runtime without `/index`,
 * but Expo typed routes currently only include the `/index` variant — cast as needed.
 */
export const authRoutes = {
  login: '/(auth)/login',
  register: '/(auth)/register',
  welcome: '/(auth)/welcome',
  forgotPassword: '/(auth)/forgot-password' as Href,
  forgotPasswordVerify: '/(auth)/forgot-password/verify',
  forgotPasswordReset: '/(auth)/forgot-password/reset',
  forgotPasswordSuccess: '/(auth)/forgot-password/success',
} as const satisfies Record<string, Href>;
