import CanadaFlag from "../../../assets/onboarding/Canada.svg"
import { BtcIcon, EthIcon, UsdcIcon, UsdtIcon } from "@/constants/cryptoWalletIcons"
import GhanaFlag from "../../../assets/onboarding/Ghana.svg"
import NigeriaFlag from "../../../assets/onboarding/Nigeria.svg"
import SouthAfricaFlag from "../../../assets/onboarding/South Africa.svg"
import UkFlag from "../../../assets/onboarding/United Kingdom.svg"

import type { WalletCategory, WalletItem } from "./types"

type WalletCatalogEntry = {
  id: string
  category: WalletCategory
  name: string
  walletLabel: string
  SvgIcon?: WalletItem["SvgIcon"]
}

const WALLET_CATALOG: WalletCatalogEntry[] = [
  {
    id: "ngn",
    category: "fiat",
    name: "Nigerian Naira",
    walletLabel: "NGN Wallet",
    SvgIcon: NigeriaFlag,
  },
  {
    id: "gbp",
    category: "fiat",
    name: "British Pound",
    walletLabel: "GBP Wallet",
    SvgIcon: UkFlag,
  },
  {
    id: "cad",
    category: "fiat",
    name: "Canadian Dollar",
    walletLabel: "CAD Wallet",
    SvgIcon: CanadaFlag,
  },
  {
    id: "ghs",
    category: "fiat",
    name: "Ghanaian Cedi",
    walletLabel: "GHS Wallet",
    SvgIcon: GhanaFlag,
  },
  {
    id: "zar",
    category: "fiat",
    name: "South African Rand",
    walletLabel: "ZAR Wallet",
    SvgIcon: SouthAfricaFlag,
  },
  {
    id: "btc",
    category: "crypto",
    name: "Bitcoin",
    walletLabel: "BTC Wallet",
    SvgIcon: BtcIcon,
  },
  {
    id: "eth",
    category: "crypto",
    name: "Ethereum",
    walletLabel: "ETH Wallet",
    SvgIcon: EthIcon,
  },
  {
    id: "usdc",
    category: "crypto",
    name: "USD Coin",
    walletLabel: "USDC Wallet",
    SvgIcon: UsdcIcon,
  },
  {
    id: "usdt",
    category: "crypto",
    name: "Tether",
    walletLabel: "USDT Wallet",
    SvgIcon: UsdtIcon,
  },
]

export type WalletsUiState = {
  portfolioBalanceNgn: number
  activeWalletCount: number
  balances: Record<string, string>
}

export const EMPTY_WALLETS_STATE: WalletsUiState = {
  portfolioBalanceNgn: 0,
  activeWalletCount: 9,
  balances: {
    ngn: "₦0.00",
    gbp: "£0.00",
    cad: "$0.00",
    ghs: "GH₵0.00",
    zar: "R0.00",
    btc: "0 BTC",
    eth: "0 ETH",
    usdc: "0 USDC",
    usdt: "0 USDT",
  },
}

export const FUNDED_WALLETS_STATE: WalletsUiState = {
  portfolioBalanceNgn: 12_500_000,
  activeWalletCount: 9,
  balances: {
    ngn: "₦150,000.00",
    gbp: "£4.00",
    cad: "$8.00",
    ghs: "GH₵100.00",
    zar: "R5,000.00",
    btc: "0.50082 BTC",
    eth: "0 ETH",
    usdc: "0 USDC",
    usdt: "0 USDT",
  },
}

export function buildWalletItems(state: WalletsUiState): WalletItem[] {
  return WALLET_CATALOG.map((entry) => ({
    ...entry,
    balance: state.balances[entry.id] ?? "0",
  }))
}
