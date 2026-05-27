import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import ArrowUpRightIcon from '../../../assets/home/arrow-up-right.svg';
import ChevronDownIcon from '../../../assets/home/chevron-down.svg';
import ExchangeLineIcon from '../../../assets/home/exchange-line.svg';
import EyeIcon from '../../../assets/home/eye-line.svg';
import NigeriaFlag from '../../../assets/onboarding/Nigeria.svg';
import { Button } from '@/components/ui/Button';
import { colors, home } from '@/theme';
import { formatNaira, formatNairaCompact } from '@/utils/currency';

import { PortfolioChart } from './PortfolioChart';

type PortfolioValueCardProps = {
  balance: number;
  currency?: string;
  changePercent?: number;
  changeAmount24h?: number;
  onAddMoney?: () => void;
  onCurrencyPress?: () => void;
};

export function PortfolioValueCard({
  balance,
  currency = 'NGN',
  changePercent = 4.2,
  changeAmount24h = 1200,
  onAddMoney,
  onCurrencyPress,
}: PortfolioValueCardProps) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const hasBalance = balance > 0;
  const config = home.portfolioCard;

  const displayAmount = isBalanceVisible ? formatNaira(balance) : '₦••••••';

  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <View style={styles.topRow}>
          <Text style={styles.label}>TOTAL PORTFOLIO VALUE</Text>

          <Pressable
            accessibilityLabel="Change currency"
            accessibilityRole="button"
            hitSlop={8}
            onPress={onCurrencyPress}
            style={styles.currencyPill}
          >
            <NigeriaFlag width={config.currency.flagSize} height={config.currency.flagSize} />
            <Text style={styles.currencyText}>{currency}</Text>
            <ChevronDownIcon width={16} height={16} color={config.label.color} />
          </Pressable>
        </View>

        <View style={styles.balanceRow}>
          <Text style={styles.amount}>{displayAmount}</Text>

          <Pressable
            accessibilityLabel={isBalanceVisible ? 'Hide balance' : 'Show balance'}
            accessibilityRole="button"
            hitSlop={8}
            onPress={() => setIsBalanceVisible((current) => !current)}
          >
            <EyeIcon width={24} height={24} color={config.amount.color} />
          </Pressable>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.chartSlot}>
          {hasBalance ? <PortfolioChart /> : null}
        </View>

        <View style={styles.bottomRow}>
          {hasBalance ? (
            <View style={styles.statsRow}>
              <View style={styles.changeBadge}>
                <ArrowUpRightIcon
                  width={7}
                  height={7}
                  color={config.changeBadge.textColor}
                />
                <Text style={styles.changeBadgeText}>+{changePercent}%</Text>
              </View>

              <View style={styles.changeAmountRow}>
                <ExchangeLineIcon width={16} height={16} color={colors.text.strong} />
                <Text style={styles.changeAmountText}>
                  {formatNairaCompact(changeAmount24h)} PAST 24HR
                </Text>
              </View>
            </View>
          ) : (
            <Button
              title="Add Money"
              variant="primary"
              size="sm"
              style={styles.addMoneyButton}
              onPress={onAddMoney}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const config = home.portfolioCard;

const styles = StyleSheet.create({
  card: {
    marginTop: config.marginTop,
    padding: config.padding,
    gap: config.gap,
    borderRadius: config.borderRadius,
    borderWidth: config.borderWidth,
    borderColor: config.borderColor,
    backgroundColor: config.backgroundColor,
    alignSelf: 'stretch',
  },
  inner: {
    gap: config.innerGap,
    alignSelf: 'stretch',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  label: {
    ...config.label,
    textTransform: 'uppercase',
  },
  currencyPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: config.currency.gap,
    paddingVertical: config.currency.paddingVertical,
    paddingHorizontal: config.currency.paddingHorizontal,
    borderRadius: config.currency.borderRadius,
    backgroundColor: config.currency.backgroundColor,
  },
  currencyText: {
    ...config.currency.text,
    textTransform: 'uppercase',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.amountEyeGap,
    alignSelf: 'flex-start',
  },
  amount: config.amount,
  bottomSection: {
    gap: config.bottomGap,
    alignSelf: 'stretch',
    minHeight:
      config.chartHeight + config.bottomGap + config.bottomRowMinHeight,
  },
  chartSlot: {
    height: config.chartHeight,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  bottomRow: {
    minHeight: config.bottomRowMinHeight,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },
  addMoneyButton: {
    width: config.addMoneyWidth,
    alignSelf: 'flex-start',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.statsGap,
  },
  changeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: config.changeBadge.gap,
    paddingVertical: config.changeBadge.paddingVertical,
    paddingHorizontal: config.changeBadge.paddingHorizontal,
    borderRadius: config.changeBadge.borderRadius,
    backgroundColor: config.changeBadge.backgroundColor,
  },
  changeBadgeText: {
    ...config.label,
    color: config.changeBadge.textColor,
    textTransform: 'uppercase',
  },
  changeAmountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  changeAmountText: {
    ...config.label,
    color: config.changeAmountColor,
    textTransform: 'uppercase',
  },
});
