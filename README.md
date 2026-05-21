# Verxa

Cross-border crypto payments mobile app built with Expo SDK 54 and React Native.

## Stack

- **Expo SDK** 54 (React Native 0.81, React 19.1)
- **Expo Router** v4 — file-based navigation
- **NativeWind** v4 — Tailwind CSS for React Native
- **Zustand** — client state
- **React Query** — server state
- **React Hook Form + Zod** — forms and validation
- **TypeScript** — strict mode

## Prerequisites

- Node.js 20+
- [Expo Go](https://expo.dev/go) on your device (SDK 54)

## Getting Started

```bash
npm install
npx expo start
```

Scan the QR code in Expo Go to run on your device.

## Project Structure

```
app/          # Expo Router file-based routes
  (auth)/     # Onboarding, login, KYC
  (app)/      # Protected routes + tab navigation
src/
  api/        # API layer (stub — pending contract)
  components/ # Reusable UI components (stub)
  constants/  # Currency codes, corridors (stub)
  hooks/      # Custom hooks (stub)
  stores/     # Zustand state stores (stub)
  types/      # TypeScript types
  utils/      # Formatting helpers (stub)
```

## Supported Assets & Currencies

**Crypto:** BTC, ETH, USDT, USDC

**Fiat:** NGN (primary), GBP, CAD, ZAR, GHS

## Status

Early scaffold — API contract not yet defined. Most `src/` files are stubs pending backend integration.
