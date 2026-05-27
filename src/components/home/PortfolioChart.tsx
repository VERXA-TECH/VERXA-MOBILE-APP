import Svg, { Path } from 'react-native-svg';

import { colors, home } from '@/theme';

/** Decorative portfolio trend line from the funded-state mockup. */
export function PortfolioChart() {
  return (
    <Svg
      width="100%"
      height={home.portfolioCard.chartHeight}
      viewBox="0 0 350 42"
      preserveAspectRatio="none"
    >
      <Path
        d="M0 34 C18 30, 36 12, 54 20 C72 28, 90 38, 108 30 C126 22, 144 8, 162 14 C180 20, 198 32, 216 26 C234 20, 252 10, 270 16 C288 22, 306 34, 324 28 C336 24, 344 20, 350 18"
        fill="none"
        stroke={colors.primary.base}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
