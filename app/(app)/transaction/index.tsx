import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { TransactionGroupSection } from '@/components/transactions/TransactionGroupSection';
import { TransactionSearchBar } from '@/components/transactions/TransactionSearchBar';
import { TransactionsHeader } from '@/components/transactions/TransactionsHeader';
import { MOCK_TRANSACTION_GROUPS } from '@/components/transactions/mockTransactions';
import { colors, transactions } from '@/theme';

export default function TransactionsScreen() {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');

  const filteredGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return MOCK_TRANSACTION_GROUPS;
    }

    return MOCK_TRANSACTION_GROUPS.map((group) => ({
      ...group,
      transactions: group.transactions.filter((transaction) =>
        `${transaction.title} ${transaction.status} ${transaction.date}`
          .toLowerCase()
          .includes(normalizedQuery),
      ),
    })).filter((group) => group.transactions.length > 0);
  }, [query]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 40 },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TransactionsHeader />
        <TransactionSearchBar value={query} onChangeText={setQuery} />

        {filteredGroups.map((group) => (
          <TransactionGroupSection key={group.label} group={group} />
        ))}
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
});
