import { useFonts } from 'expo-font';
import { fontAssets } from '@/theme/fonts';

export function useAppFonts() {
  const hasFontAssets = Object.keys(fontAssets).length > 0;
  const [loaded] = useFonts(hasFontAssets ? fontAssets : {});

  return hasFontAssets ? loaded : true;
}
