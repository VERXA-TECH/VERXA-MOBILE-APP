import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import EyeIcon from '../../../assets/home/eye-line.svg';
import { formatNaira } from '@/utils/currency';
import { wallets } from '@/theme';

type WalletsPortfolioCardProps = {
  balance?: number;
  activeWalletCount?: number;
};

export function WalletsPortfolioCard({
  balance = 0,
  activeWalletCount = 9,
}: WalletsPortfolioCardProps) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const config = wallets.portfolioCard;
  const displayAmount = isBalanceVisible ? formatNaira(balance) : '₦••••••';

  return (
    <View style={styles.outer}>
      <LinearGradient
        colors={[...config.borderGradient]}
        start={config.borderGradientStart}
        end={config.borderGradientEnd}
        style={styles.gradientBorder}
      >
        <View style={styles.card}>
          <View style={styles.topRow}>
            <Text style={styles.label}>TOTAL PORTFOLIO VALUE</Text>
            <Text style={styles.label}>
              {activeWalletCount} ACTIVE WALLETS
            </Text>
          </View>

          <View style={styles.balanceRow}>
            <Text style={styles.amount}>{displayAmount}</Text>

            <Pressable
              accessibilityLabel={
                isBalanceVisible ? 'Hide balance' : 'Show balance'
              }
              accessibilityRole="button"
              hitSlop={8}
              onPress={() => setIsBalanceVisible((current) => !current)}
            >
              <EyeIcon width={24} height={24} color={config.amount.color} />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const config = wallets.portfolioCard;

const styles = StyleSheet.create({
  outer: {
    marginTop: config.marginTop,
    alignSelf: 'stretch',
  },
  gradientBorder: {
    borderRadius: config.borderRadius,
    padding: config.borderWidth,
    overflow: 'hidden',
  },
  card: {
    padding: config.padding,
    gap: config.gap,
    borderRadius: config.borderRadius - config.borderWidth,
    backgroundColor: config.backgroundColor,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: config.topRowGap,
    alignSelf: 'stretch',
  },
  label: {
    ...config.label,
    textTransform: 'uppercase',
    flexShrink: 1,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.amountEyeGap,
    alignSelf: 'flex-start',
  },
  amount: config.amount,
});
