import { Image } from 'expo-image';
import type { ImageSource } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { home } from '@/theme';

type QuickAction = {
  id: string;
  label: string;
  icon: ImageSource;
  iconWidth: number;
  iconHeight: number;
};

const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'send',
    label: 'Send',
    icon: require('../../../assets/home/quick-action-send.png'),
    iconWidth: 57,
    iconHeight: 55,
  },
  {
    id: 'receive',
    label: 'Receive',
    icon: require('../../../assets/home/quick-action-receive.png'),
    iconWidth: 55,
    iconHeight: 55,
  },
  {
    id: 'convert',
    label: 'Convert',
    icon: require('../../../assets/home/quick-action-convert.png'),
    iconWidth: 64,
    iconHeight: 67,
  },
  {
    id: 'bills',
    label: 'Bills',
    icon: require('../../../assets/home/quick-action-bills.png'),
    iconWidth: 55,
    iconHeight: 54,
  },
];

type HomeQuickActionsProps = {
  onActionPress?: (actionId: string) => void;
};

export function HomeQuickActions({ onActionPress }: HomeQuickActionsProps) {
  return (
    <View style={styles.row}>
      {QUICK_ACTIONS.map((action) => (
        <Pressable
          key={action.id}
          accessibilityLabel={action.label}
          accessibilityRole="button"
          onPress={() => onActionPress?.(action.id)}
          style={styles.item}
        >
          <Text style={styles.label}>{action.label}</Text>

          <Image
            source={action.icon}
            style={[
              styles.icon,
              { width: action.iconWidth, height: action.iconHeight },
            ]}
            contentFit="contain"
          />
        </Pressable>
      ))}
    </View>
  );
}

const config = home.quickActions;

const styles = StyleSheet.create({
  row: {
    marginTop: config.marginTop,
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: config.gap,
    alignSelf: 'stretch',
  },
  item: {
    flex: 1,
    height: config.item.height,
    borderRadius: config.item.borderRadius,
    backgroundColor: config.item.backgroundColor,
    position: 'relative',
    overflow: 'hidden',
  },
  label: {
    ...config.item.label,
    textAlign: 'center',
    paddingTop: config.item.paddingVertical,
    paddingHorizontal: config.item.paddingHorizontal,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
