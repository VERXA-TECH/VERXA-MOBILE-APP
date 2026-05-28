import { StyleSheet, Text, View } from 'react-native';

import FilterIcon from '../../../assets/home/filter-line.svg';
import { Button } from '@/components/ui/Button';
import { transactions } from '@/theme';

type TransactionFilterEmptyStateProps = {
  hasActiveFilters: boolean;
  hasSearchQuery: boolean;
  onClearPress: () => void;
};

function getEmptyStateCopy(
  hasActiveFilters: boolean,
  hasSearchQuery: boolean,
): { title: string; description: string; actionLabel: string } {
  if (hasActiveFilters && hasSearchQuery) {
    return {
      title: 'No matching transactions',
      description:
        'Nothing matched your search and filter selections. Try different keywords or adjust your filters.',
      actionLabel: 'Clear search and filters',
    };
  }

  if (hasSearchQuery) {
    return {
      title: 'No results found',
      description:
        'We could not find any transactions matching your search. Try a different keyword or clear your search.',
      actionLabel: 'Clear search',
    };
  }

  return {
    title: 'No matching transactions',
    description:
      'Nothing matched your current filters. Try adjusting your selections or clear filters to see all transactions.',
    actionLabel: 'Clear filters',
  };
}

export function TransactionFilterEmptyState({
  hasActiveFilters,
  hasSearchQuery,
  onClearPress,
}: TransactionFilterEmptyStateProps) {
  const config = transactions.filterEmpty;
  const copy = getEmptyStateCopy(hasActiveFilters, hasSearchQuery);

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.iconBox}>
          <FilterIcon
            width={config.iconSize}
            height={config.iconSize}
            color={transactions.header.iconColor}
          />
        </View>

        <Text style={styles.title}>{copy.title}</Text>

        <Text style={styles.description}>{copy.description}</Text>

        <Button
          title={copy.actionLabel}
          variant="primary"
          size="sm"
          fullWidth
          onPress={onClearPress}
        />
      </View>
    </View>
  );
}

const config = transactions.filterEmpty;

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    borderRadius: transactions.listCard.borderRadius,
    backgroundColor: transactions.listCard.backgroundColor,
    paddingVertical: config.paddingVertical,
    paddingHorizontal: config.paddingHorizontal,
  },
  content: {
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: config.gap,
  },
  iconBox: {
    width: config.iconBoxSize,
    height: config.iconBoxSize,
    borderRadius: 12,
    backgroundColor: 'rgba(33, 59, 53, 0.18)',
    borderWidth: 1,
    borderColor: transactions.search.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...config.title,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  description: {
    ...config.description,
    textAlign: 'center',
    maxWidth: config.description.maxWidth,
  },
});
