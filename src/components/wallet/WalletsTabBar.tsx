import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { WalletTabFilter } from './mockWallets';
import { wallets } from '@/theme';

const TABS: { value: WalletTabFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'crypto', label: 'Crypto' },
];

type WalletsTabBarProps = {
  value: WalletTabFilter;
  onChange: (value: WalletTabFilter) => void;
};

export function WalletsTabBar({ value, onChange }: WalletsTabBarProps) {
  const config = wallets.tabBar;

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = tab.value === value;

        return (
          <Pressable
            key={tab.value}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            onPress={() => onChange(tab.value)}
            style={styles.tabPressable}
          >
            {isActive ? (
              <LinearGradient
                colors={[...config.tab.activeGradient]}
                start={config.tab.activeGradientStart}
                end={config.tab.activeGradientEnd}
                style={[styles.tab, styles.tabActive]}
              >
                <Text style={styles.tabLabelActive}>{tab.label}</Text>
              </LinearGradient>
            ) : (
              <View style={styles.tab}>
                <Text style={styles.tabLabel}>{tab.label}</Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const config = wallets.tabBar;

const styles = StyleSheet.create({
  container: {
    marginTop: config.marginTop,
    flexDirection: 'row',
    padding: config.padding,
    alignItems: 'flex-start',
    gap: config.gap,
    alignSelf: 'stretch',
    borderRadius: config.borderRadius,
    backgroundColor: config.backgroundColor,
  },
  tabPressable: {
    flex: 1,
  },
  tab: {
    padding: config.tab.padding,
    justifyContent: 'center',
    alignItems: 'center',
    gap: config.tab.gap,
    borderRadius: config.tab.borderRadius,
  },
  tabActive: {
    ...config.tab.activeShadow,
  },
  tabLabel: {
    ...config.tab.label,
    color: config.tab.inactiveColor,
    textAlign: 'center',
  },
  tabLabelActive: {
    ...config.tab.label,
    color: config.tab.activeLabelColor,
    textAlign: 'center',
  },
});
