import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import ChevronLeftIcon from '../../../assets/chevron-left.svg';
import ChatIcon from '../../../assets/home/chat-smile-line.svg';
import { transactions } from '@/theme';

type TransactionDetailHeaderProps = {
  onBack?: () => void;
  onChatPress?: () => void;
};

export function TransactionDetailHeader({
  onBack,
  onChatPress,
}: TransactionDetailHeaderProps) {
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

      <Text style={styles.title}>Transaction details</Text>

      <Pressable
        accessibilityLabel="Open chat"
        accessibilityRole="button"
        hitSlop={8}
        onPress={onChatPress}
        style={styles.sideButton}
      >
        <ChatIcon
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
