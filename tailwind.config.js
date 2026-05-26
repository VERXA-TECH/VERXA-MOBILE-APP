/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary-base": "var(--color-primary-base)",
        "lemon-50": "var(--color-lemon-50)",
        "lemon-500": "var(--color-lemon-500)",
        "text-strong": "var(--color-text-strong)",
        "text-muted": "var(--color-text-muted)",
        "holly-100": "var(--color-holly-100)",
        "holly-400": "var(--color-holly-400)",
        "holly-500": "var(--color-holly-500)",
        "holly-600": "var(--color-holly-600)",
        "holly-700": "var(--color-holly-700)",
        "text-on-primary": "var(--color-text-on-primary)",
        "text-soft-400": "var(--color-text-soft-400)",
        "button-disabled-bg": "var(--color-button-disabled-bg)",
        "indicator-inactive": "var(--color-indicator-inactive)",
        "glass-border": "var(--color-glass-border)",
        "glass-bg": "var(--color-glass-bg)",
        "radial-glow-start": "var(--color-radial-glow-start)",
        "radial-glow-end": "var(--color-radial-glow-end)",
        "badge-text": "var(--color-badge-text)",
      },
      fontFamily: {
        heuvel: 'var(--font-heuvel)',
        'heuvel-regular': 'var(--font-heuvel-regular)',
      },
    },
  },
  plugins: [],
}
