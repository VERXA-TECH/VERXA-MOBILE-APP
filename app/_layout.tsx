import '../global.css';
import { Slot, Redirect } from 'expo-router';
import { useAuthStore } from '../src/stores/auth.store';

export default function RootLayout() {
  const { user, kycStatus, isLoading } = useAuthStore();

  if (isLoading) return null;
  if (!user) return <Redirect href="/(auth)/welcome" />;
  if (kycStatus !== 'APPROVED') return <Redirect href="/(auth)/kyc/pending" />;

  return <Slot />;
}
