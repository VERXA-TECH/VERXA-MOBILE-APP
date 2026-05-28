import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { TransactionDetailActions } from '@/components/transactions/TransactionDetailActions';
import { TransactionDetailHeader } from '@/components/transactions/TransactionDetailHeader';
import { TransactionDetailsCard } from '@/components/transactions/TransactionDetailsCard';
import {
  getTransactionDetailById,
  getTransactionSummaryAmount,
} from '@/components/transactions/mockTransactionDetails';
import { TransactionSummarySection } from '@/components/transactions/TransactionSummarySection';
import { colors, transactions, typography } from '@/theme';

export default function TransactionDetailScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const detail = id ? getTransactionDetailById(id) : null;

  if (!detail) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.notFound}>
          <TransactionDetailHeader />
          <Text style={styles.notFoundText}>Transaction not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const summaryAmount = getTransactionSummaryAmount(detail.id);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 40 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <TransactionDetailHeader />

        <TransactionSummarySection
          label={detail.summaryLabel}
          amount={summaryAmount}
          description={detail.summaryDescription}
        />

        <TransactionDetailsCard rows={detail.detailRows} />

        <TransactionDetailActions
          onSharePress={() => {}}
          onReportPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const config = transactions.screen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background.app,
  },
  content: {
    paddingHorizontal: config.paddingHorizontal,
    paddingTop: config.paddingTop,
    gap: config.sectionGap,
  },
  notFound: {
    flex: 1,
    paddingHorizontal: config.paddingHorizontal,
    paddingTop: config.paddingTop,
    gap: config.sectionGap,
  },
  notFoundText: {
    fontFamily: typography.paragraph.small.fontFamily,
    fontSize: typography.paragraph.small.fontSize,
    lineHeight: typography.paragraph.small.lineHeight,
    color: typography.paragraph.small.color,
    textAlign: 'center',
  },
});
