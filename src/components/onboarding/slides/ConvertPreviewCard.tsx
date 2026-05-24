import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { GlassCard } from '@/components/onboarding/GlassCard';
import { onboarding } from '@/theme';

import ArrowDownIcon from '../../../../assets/onboarding/arrow-down-s-line.svg';
import ArrowSwapIcon from '../../../../assets/onboarding/arrow-up-down-line.svg';
import InfoIcon from '../../../../assets/onboarding/information-fill.svg';
import NigeriaFlag from '../../../../assets/onboarding/Nigeria.svg';
import UsdtIcon from '../../../../assets/onboarding/Tether USDT.svg';

const { convertPreviewCard: card } = onboarding;
const {
  title,
  rowLabel,
  balance,
  sourceAmount,
  targetAmount,
  currencyCode,
  rateLabel,
  rateValue,
} = card.typography;

type CurrencyPillProps = {
  icon: ReactNode;
  code: string;
};

function CurrencyPill({ icon, code }: CurrencyPillProps) {
  const pill = card.currencyPill;

  return (
    <View
      className="flex-row items-center"
      style={{
        borderRadius: pill.borderRadius,
        backgroundColor: pill.backgroundColor,
        paddingHorizontal: pill.paddingHorizontal,
        paddingVertical: pill.paddingVertical,
        gap: pill.gap,
      }}
    >
      {icon}
      <Text style={currencyCode}>{code}</Text>
      <ArrowDownIcon width={pill.chevronSize} height={pill.chevronSize} />
    </View>
  );
}

type ConvertRowProps = {
  variant: 'source' | 'target';
  label: string;
  balanceText: string;
  amount: string;
  pillIcon: ReactNode;
  currencyCode: string;
};

function ConvertRow({
  variant,
  label,
  balanceText,
  amount,
  pillIcon,
  currencyCode: code,
}: ConvertRowProps) {
  const rowStyle = variant === 'source' ? card.sourceRow : card.targetRow;

  return (
    <View
      style={{
        height: rowStyle.height,
        paddingVertical: rowStyle.paddingVertical,
        paddingHorizontal: rowStyle.paddingHorizontal,
        borderRadius: rowStyle.borderRadius,
        backgroundColor: rowStyle.backgroundColor,
        ...(variant === 'source' && {
          borderWidth: card.sourceRow.borderWidth,
          borderColor: card.sourceRow.borderColor,
        }),
        justifyContent: 'space-between',
      }}
    >
      <View className="flex-row items-center justify-between">
        <Text style={rowLabel}>{label}</Text>
        <Text style={balance}>{balanceText}</Text>
      </View>

      <View className="flex-row items-center justify-between">
        <CurrencyPill icon={pillIcon} code={code} />
        <Text style={variant === 'source' ? sourceAmount : targetAmount}>{amount}</Text>
      </View>
    </View>
  );
}

export function ConvertPreviewCard() {
  const pill = card.currencyPill;
  const swap = card.swapButton;
  const rowHeight = card.sourceRow.height;
  const swapTop = rowHeight + card.contentGap / 2;

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
          width: card.width,
          height: card.height,
          padding: card.padding,
          borderRadius: card.borderRadius,
          borderWidth: card.borderWidth,
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Text style={title}>Convert</Text>

        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              position: 'relative',
              gap: card.contentGap,
            }}
          >
            <ConvertRow
              variant="source"
              label="Convert"
              balanceText="Balance: 20.1 USDT"
              amount="5.12 USDT"
              pillIcon={<UsdtIcon width={pill.iconSize} height={pill.iconSize} />}
              currencyCode="USDT"
            />

            <ConvertRow
              variant="target"
              label="To"
              balanceText="Balance: ₦847,500"
              amount="₦200,000"
              pillIcon={<NigeriaFlag width={pill.iconSize} height={pill.iconSize} />}
              currencyCode="NGN"
            />

            <View
              className="absolute items-center justify-center"
              style={{
                left: '50%',
                top: swapTop,
                width: swap.width,
                height: swap.height,
                transform: [
                  { translateX: -swap.width / 2 },
                  { translateY: -swap.height / 2 },
                ],
                borderRadius: swap.borderRadius,
                backgroundColor: swap.backgroundColor,
                zIndex: 1,
              }}
            >
              <ArrowSwapIcon width={swap.iconSize} height={swap.iconSize} />
            </View>
          </View>
        </View>

        <View className="flex-row items-center" style={{ gap: 4 }}>
          <InfoIcon width={card.infoIconSize} height={card.infoIconSize} />
          <Text style={rateLabel}>
            Indicative rate:{' '}
            <Text style={rateValue}>₦1 = 1,523 USDT</Text>
          </Text>
        </View>
      </GlassCard>
    </View>
  );
}
