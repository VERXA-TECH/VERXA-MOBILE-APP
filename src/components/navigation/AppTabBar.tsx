import type { ComponentType } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArrowLeftRightIcon from '../../../assets/tab/arrow-left-right-line.svg';
import HomeFillIcon from '../../../assets/tab/home-fill.svg';
import UserLineIcon from '../../../assets/tab/user-3-line.svg';
import WalletLineIcon from '../../../assets/tab/wallet-line.svg';
import { colors, tabBar } from '@/theme';

type TabRouteName = 'home' | 'wallets' | 'convert' | 'account';

type TabBarRoute = {
  key: string;
  name: string;
  params?: object;
};

type TabBarDescriptor = {
  options: Record<string, unknown>;
};

type TabConfig = {
  Icon: ComponentType<SvgProps>;
  iconWidth: number;
  iconHeight: number;
};

const TAB_CONFIG: Record<TabRouteName, TabConfig> = {
  home: { Icon: HomeFillIcon, iconWidth: 24, iconHeight: 24 },
  wallets: { Icon: WalletLineIcon, iconWidth: 24, iconHeight: 24 },
  convert: { Icon: ArrowLeftRightIcon, iconWidth: 17, iconHeight: 18 },
  account: { Icon: UserLineIcon, iconWidth: 24, iconHeight: 24 },
};

export function AppTabBar({
  state,
  descriptors,
  navigation: rawNavigation,
}: {
  state: { index: number; routes: TabBarRoute[] };
  descriptors: Record<string, TabBarDescriptor>;
  navigation: object;
}) {
  const navigation = rawNavigation as {
    emit: (event: {
      type: 'tabPress' | 'tabLongPress';
      target: string;
      canPreventDefault?: boolean;
    }) => { defaultPrevented: boolean };
    navigate: (name: string, params?: object) => void;
  };
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingHorizontal: tabBar.horizontalInset,
          paddingBottom: insets.bottom + tabBar.bottomGap,
        },
      ]}
    >
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const routeName = route.name as TabRouteName;
          const { options } = descriptors[route.key];
          const rawLabel = options.tabBarLabel;
          const label =
            typeof rawLabel === 'string'
              ? rawLabel
              : typeof options.title === 'string'
                ? options.title
                : route.name;
          const accessibilityLabel =
            typeof options.tabBarAccessibilityLabel === 'string'
              ? options.tabBarAccessibilityLabel
              : label;
          const isFocused = state.index === index;
          const { Icon, iconWidth, iconHeight } = TAB_CONFIG[routeName];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={accessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.section}
            >
              <View style={styles.item}>
                <View
                  style={[
                    styles.iconSlot,
                    isFocused && styles.iconSlotActive,
                  ]}
                >
                  <Icon
                    width={iconWidth}
                    height={iconHeight}
                    color={
                      isFocused
                        ? tabBar.icon.activeColor
                        : tabBar.icon.inactiveColor
                    }
                  />
                </View>

                <Text style={isFocused ? styles.labelActive : styles.labelInactive}>
                  {label}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: colors.background.app,
  },
  bar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: tabBar.bar.borderRadius,
    backgroundColor: tabBar.bar.backgroundColor,
    paddingVertical: tabBar.bar.paddingVertical,
    shadowColor: tabBar.bar.shadowColor,
    shadowOffset: tabBar.bar.shadowOffset,
    shadowOpacity: tabBar.bar.shadowOpacity,
    shadowRadius: tabBar.bar.shadowRadius,
    elevation: tabBar.bar.elevation,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: tabBar.item.paddingVertical,
    paddingHorizontal: tabBar.item.paddingHorizontal,
    gap: tabBar.item.gap,
  },
  iconSlot: {
    width: tabBar.activeIcon.size,
    height: tabBar.activeIcon.size,
    borderRadius: tabBar.activeIcon.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSlotActive: {
    backgroundColor: tabBar.activeIcon.backgroundColor,
  },
  labelActive: tabBar.label.active,
  labelInactive: tabBar.label.inactive,
});
