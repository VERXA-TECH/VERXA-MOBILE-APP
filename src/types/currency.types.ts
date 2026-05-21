export const FIAT_CURRENCIES = ['NGN', 'GBP', 'CAD', 'ZAR', 'GHS'] as const;
export const CRYPTO_ASSETS = ['BTC', 'ETH', 'USDT', 'USDC'] as const;

export type FiatCurrency = (typeof FIAT_CURRENCIES)[number];
export type CryptoAsset = (typeof CRYPTO_ASSETS)[number];
export type WalletCurrency = FiatCurrency | CryptoAsset;
