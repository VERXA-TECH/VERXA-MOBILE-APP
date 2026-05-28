import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { transactions } from '@/theme';

type TransactionDetailActionsProps = {
  onSharePress?: () => void;
  onReportPress?: () => void;
};

export function TransactionDetailActions({
  onSharePress,
  onReportPress,
}: TransactionDetailActionsProps) {
  const config = transactions.detail.actions;

  return (
    <View style={styles.container}>
      <Button
        title="Share Transaction Receipt"
        variant="primary"
        size="lg"
        fullWidth
        style={styles.shareButton}
        onPress={onSharePress}
      />

      <Text style={styles.reportText}>
        Something wrong?{' '}
        <Text style={styles.reportLink} onPress={onReportPress}>
          Report this transaction
        </Text>
      </Text>
    </View>
  );
}

const config = transactions.detail.actions;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    gap: config.gap,
  },
  shareButton: {
    alignSelf: 'stretch',
    width: '100%',
  },
  reportText: {
    ...config.report,
    textAlign: 'center',
  },
  reportLink: {
    ...config.report,
    color: config.report.linkColor,
  },
});
