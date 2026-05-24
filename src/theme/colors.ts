/** Primitive palette — mirrored in global.css @theme for NativeWind. */
export const colors = {
  primary: {
    base: '#C8E905',
  },
  lemon: {
    50: '#FCFDED',
    500: '#D7EF47',
  },
  text: {
    strong: '#FFFFFF',
    muted: '#BEBEBE',
    soft400: '#A3A3A3',
    onPrimary: '#171717',
  },
  holly: {
    100: '#C4CBC9',
    400: '#627570',
    500: '#415852',
    600: '#213B35',
    700: '#001E17',
  },
  indicator: {
    inactive: '#FFFFFF',
  },
  radialGlow: {
    start: '#060E0A',
    end: '#060C09',
  },
  glass: {
    border: '#315123',
    background: 'rgba(24, 38, 26, 0.77)',
    backgroundMuted: 'rgba(24, 38, 26, 0.46)',
  },
  sendIcon: {
    fill: '#213B35',
  },
  badge: {
    background: '#C8E905',
    text: '#213B35',
  },
  button: {
    disabledBackground: '#2C3308',
    disabledText: '#A3A3A3',
  },
} as const;
