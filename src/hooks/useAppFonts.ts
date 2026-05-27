import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

import { fontAssets } from '@/theme/fonts';

export function useAppFonts() {
  const [loaded, error] = useFonts({
    ...fontAssets,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (error) {
    console.warn('Font loading error:', error);
  }

  return loaded;
}
