import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { TransactionFilterEmptyState } from '@/components/transactions/TransactionFilterEmptyState';
import { TransactionGroupSection } from '@/components/transactions/TransactionGroupSection';
import { TransactionSearchBar } from '@/components/transactions/TransactionSearchBar';
import { TransactionsHeader } from '@/components/transactions/TransactionsHeader';
import {
  DEFAULT_TRANSACTION_FILTERS,
  TransactionFilterSheet,
} from '@/components/transactions/filters/TransactionFilterSheet';
import {
  countActiveTransactionFilters,
  matchesTransactionFilters,
  type TransactionFilters,
} from '@/components/transactions/filters/transactionFilterTypes';
import { MOCK_TRANSACTION_GROUPS } from '@/components/transactions/mockTransactions';
import { colors, transactions } from '@/theme';

export default function TransactionsScreen() {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<TransactionFilters>(
    DEFAULT_TRANSACTION_FILTERS,
  );
  const [draftFilters, setDraftFilters] = useState<TransactionFilters>(
    DEFAULT_TRANSACTION_FILTERS,
  );

  const filteredGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return MOCK_TRANSACTION_GROUPS.map((group) => ({
      ...group,
      transactions: group.transactions.filter((transaction) => {
        const matchesQuery =
          !normalizedQuery ||
          `${transaction.title} ${transaction.status} ${transaction.date}`
            .toLowerCase()
            .includes(normalizedQuery);

        return (
          matchesQuery && matchesTransactionFilters(transaction, appliedFilters)
        );
      }),
    })).filter((group) => group.transactions.length > 0);
  }, [appliedFilters, query]);

  const hasSearchQuery = query.trim().length > 0;
  const hasActiveFilters = countActiveTransactionFilters(appliedFilters) > 0;
  const hasFilteredResults = filteredGroups.length > 0;
  const showFilterEmptyState = !hasFilteredResults && (hasSearchQuery || hasActiveFilters);

  const openFilters = () => {
    setDraftFilters(appliedFilters);
    setIsFilterOpen(true);
  };

  const applyFilters = () => {
    setAppliedFilters(draftFilters);
    setIsFilterOpen(false);
  };

  const clearSearchAndFilters = () => {
    setQuery('');
    setAppliedFilters(DEFAULT_TRANSACTION_FILTERS);
    setDraftFilters(DEFAULT_TRANSACTION_FILTERS);
  };

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
        <TransactionsHeader onFilterPress={openFilters} />
        <TransactionSearchBar value={query} onChangeText={setQuery} />

        {showFilterEmptyState ? (
          <TransactionFilterEmptyState
            hasActiveFilters={hasActiveFilters}
            hasSearchQuery={hasSearchQuery}
            onClearPress={clearSearchAndFilters}
          />
        ) : (
          filteredGroups.map((group) => (
            <TransactionGroupSection key={group.label} group={group} />
          ))
        )}
      </ScrollView>

      <TransactionFilterSheet
        visible={isFilterOpen}
        value={draftFilters}
        onChange={setDraftFilters}
        onClose={() => setIsFilterOpen(false)}
        onApply={applyFilters}
      />
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
