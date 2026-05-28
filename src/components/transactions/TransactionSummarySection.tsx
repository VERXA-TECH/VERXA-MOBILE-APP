import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { transactions } from '@/theme';

type TransactionSummarySectionProps = {
  label: string;
  amount: string;
  description: string;
};

export function TransactionSummarySection({
  label,
  amount,
  description,
}: TransactionSummarySectionProps) {
  const config = transactions.detail.summary;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/transactions/money-sent.png')}
        style={{ width: config.imageSize, height: config.imageSize }}
        contentFit="contain"
      />

      <Text style={styles.label}>{label}</Text>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const config = transactions.detail.summary;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: config.gap,
    padding: config.padding,
    borderRadius: config.borderRadius,
    borderWidth: config.borderWidth,
    borderColor: config.borderColor,
    backgroundColor: config.backgroundColor,
    ...config.shadow,
  },
  label: {
    ...config.label,
    textAlign: 'center',
    alignSelf: 'stretch',
    textTransform: 'uppercase',
  },
  amount: {
    ...config.amount,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  description: {
    ...config.description,
    textAlign: 'center',
  },
});
