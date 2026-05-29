import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import ChevronLeftIcon from '../../../assets/chevron-left.svg';
import FilterIcon from '../../../assets/home/filter-line.svg';
import { transactions } from '@/theme';

type TransactionsHeaderProps = {
  onBack?: () => void;
  onFilterPress?: () => void;
};

export function TransactionsHeader({
  onBack,
  onFilterPress,
}: TransactionsHeaderProps) {
  const router = useRouter();
  const config = transactions.header;

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View style={styles.header}>
      <Pressable
        accessibilityLabel="Go back"
        accessibilityRole="button"
        hitSlop={8}
        onPress={handleBack}
        style={styles.sideButton}
      >
        <ChevronLeftIcon width={config.iconSize} height={config.iconSize} />
      </Pressable>

      <Text style={styles.title}>Transaction</Text>

      <Pressable
        accessibilityLabel="Filter transactions"
        accessibilityRole="button"
        hitSlop={8}
        onPress={onFilterPress}
        style={styles.sideButton}
      >
        <FilterIcon
          width={config.iconSize}
          height={config.iconSize}
          color={config.iconColor}
        />
      </Pressable>
    </View>
  );
}

const config = transactions.header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  sideButton: {
    width: config.iconSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontFamily: config.title.fontFamily,
    fontSize: config.title.fontSize,
    fontWeight: config.title.fontWeight,
    lineHeight: config.title.lineHeight,
    color: config.title.color,
    textAlign: 'center',
  },
});
