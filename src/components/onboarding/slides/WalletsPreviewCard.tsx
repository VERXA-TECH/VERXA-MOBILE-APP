import { Text, View } from 'react-native';

import { GlassCard } from '@/components/onboarding/GlassCard';
import { onboarding } from '@/theme';

import CanadaFlag from '../../../../assets/onboarding/Canada.svg';
import GhanaFlag from '../../../../assets/onboarding/Ghana.svg';
import NigeriaFlag from '../../../../assets/onboarding/Nigeria.svg';
import SouthAfricaFlag from '../../../../assets/onboarding/South Africa.svg';
import UkFlag from '../../../../assets/onboarding/United Kingdom.svg';

type WalletRow = {
  Flag: typeof NigeriaFlag;
  name: string;
  wallet: string;
  balance: string;
};

const WALLETS: WalletRow[] = [
  {
    Flag: NigeriaFlag,
    name: 'Nigerian Naira',
    wallet: 'NGN Wallet',
    balance: '₦1,200,00.00',
  },
  {
    Flag: UkFlag,
    name: 'British Pound',
    wallet: 'GBP Wallet',
    balance: '£780.20',
  },
  {
    Flag: CanadaFlag,
    name: 'Canadian Dollar',
    wallet: 'CAD Wallet',
    balance: '$400.00',
  },
  {
    Flag: GhanaFlag,
    name: 'Ghanaian Cedi',
    wallet: 'GHS Wallet',
    balance: 'GH₵890.00',
  },
  {
    Flag: SouthAfricaFlag,
    name: 'South African Rand',
    wallet: 'ZAR Wallet',
    balance: 'R908.40',
  },
];

const { walletsPreviewCard: card } = onboarding;
const { title, currency, wallet, amount } = card.typography;

export function WalletsPreviewCard() {
  return (
    <View
      style={{
        position: 'absolute',
        right: card.position.right,
        bottom: card.position.bottom,
      }}
    >
      <GlassCard
        style={{
          padding: card.padding,
          borderRadius: card.borderRadius,
          borderWidth: card.borderWidth,
          alignItems: 'flex-start',
          gap: card.gap,
        }}
      >
        <Text style={title}>My Wallets</Text>

        <View style={{ alignItems: 'flex-start' }}>
          {WALLETS.map((walletRow, index) => {
            const isLast = index === WALLETS.length - 1;

            return (
              <View
                key={walletRow.wallet}
                style={{
                  width: card.row.width,
                  height: card.row.height,
                  padding: card.row.padding,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexShrink: 0,
                  borderBottomWidth: isLast ? 0 : card.dividerWidth,
                  borderBottomColor: card.dividerColor,
                  ...(isLast && {
                    borderRadius: card.lastRow.borderRadius,
                    backgroundColor: card.lastRow.backgroundColor,
                  }),
                }}
              >
                <View
                  className="flex-row items-center"
                  style={{ gap: card.rowContentGap }}
                >
                  <walletRow.Flag width={card.flagSize} height={card.flagSize} />

                  <View>
                    <Text style={currency}>{walletRow.name}</Text>
                    <Text style={wallet}>{walletRow.wallet}</Text>
                  </View>
                </View>

                <Text style={amount}>{walletRow.balance}</Text>
              </View>
            );
          })}
        </View>
      </GlassCard>
    </View>
  );
}
