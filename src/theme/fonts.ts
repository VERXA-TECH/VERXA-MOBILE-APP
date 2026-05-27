/** Loaded font family names — must match keys passed to `useFonts`. */
export const fonts = {
  heuvelGrotesk: 'HeuvelGrotesk-Medium',
  heuvelGroteskRegular: 'HeuvelGrotesk-Regular',
  inter: 'Inter_500Medium',
  interRegular: 'Inter_400Regular',
} as const;

export const fontAssets: Record<string, number> = {
  [fonts.heuvelGrotesk]: require('../../assets/fonts/HeuvelGrotesk-Medium.ttf'),
  [fonts.heuvelGroteskRegular]: require('../../assets/fonts/HeuvelGrotesk-Regular.ttf'),
};
