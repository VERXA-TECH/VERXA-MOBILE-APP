import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import CloseIcon from "../../../../assets/home/close-line.svg"
import { Button } from "@/components/ui/Button"
import { TransactionDateRangeField } from "@/components/transactions/filters/TransactionDateRangeField"
import { FilterTag } from "@/components/transactions/filters/FilterTag"
import {
  DEFAULT_TRANSACTION_FILTERS,
  STATUS_FILTER_OPTIONS,
  TRANSACTION_TYPE_OPTIONS,
  countActiveTransactionFilters,
  type TransactionFilters,
} from "@/components/transactions/filters/transactionFilterTypes"
import { WALLET_FILTER_OPTIONS } from "@/components/transactions/filters/walletFilterOptions"
import { colors, transactions } from "@/theme"

type TransactionFilterSheetProps = {
  visible: boolean
  value: TransactionFilters
  onChange: (filters: TransactionFilters) => void
  onClose: () => void
  onApply: () => void
}

type FilterSectionProps = {
  title: string
  children: React.ReactNode
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  )
}

export function TransactionFilterSheet({
  visible,
  value,
  onChange,
  onClose,
  onApply,
}: TransactionFilterSheetProps) {
  const insets = useSafeAreaInsets()
  const activeCount = countActiveTransactionFilters(value)
  const config = transactions.filter

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable
          accessibilityLabel="Close filters"
          style={styles.backdrop}
          onPress={onClose}
        />

        <View style={[styles.sheet, { paddingBottom: insets.bottom + 26 }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Filter transactions</Text>
            <Pressable
              accessibilityLabel="Close filters"
              accessibilityRole="button"
              hitSlop={8}
              onPress={onClose}
              style={styles.closeButton}
            >
              <CloseIcon width={20} height={20} color={colors.text.strong} />
            </Pressable>
          </View>

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <FilterSection title="Transaction type">
              <View style={styles.tagsRow}>
                {TRANSACTION_TYPE_OPTIONS.map((option) => (
                  <FilterTag
                    key={option.value}
                    label={option.label}
                    active={value.type === option.value}
                    onPress={() => onChange({ ...value, type: option.value })}
                  />
                ))}
              </View>
            </FilterSection>

            <FilterSection title="Wallet">
              <View style={styles.tagsRow}>
                {WALLET_FILTER_OPTIONS.map((option) => (
                  <FilterTag
                    key={option.value}
                    label={option.label}
                    active={value.wallet === option.value}
                    onPress={() => onChange({ ...value, wallet: option.value })}
                    icon={
                      option.SvgIcon ? (
                        <option.SvgIcon width={16} height={16} />
                      ) : null
                    }
                  />
                ))}
              </View>
            </FilterSection>

            <FilterSection title="Date">
              <TransactionDateRangeField
                dateFrom={value.dateFrom}
                dateTo={value.dateTo}
                onChange={(dateFrom, dateTo) =>
                  onChange({ ...value, dateFrom, dateTo })
                }
              />
            </FilterSection>

            <FilterSection title="Status">
              <View style={styles.tagsRow}>
                {STATUS_FILTER_OPTIONS.map((option) => (
                  <FilterTag
                    key={option.value}
                    label={option.label}
                    active={value.status === option.value}
                    onPress={() => onChange({ ...value, status: option.value })}
                  />
                ))}
              </View>
            </FilterSection>
          </ScrollView>

          <Button
            title={
              activeCount > 0
                ? `Apply filters (${activeCount})`
                : "Apply filters"
            }
            variant="primary"
            size="lg"
            fullWidth
            style={styles.applyButton}
            onPress={onApply}
          />
        </View>
      </View>
    </Modal>
  )
}

export { DEFAULT_TRANSACTION_FILTERS }

const config = transactions.filter

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: config.overlayColor,
  },
  backdrop: {
    flex: 1,
  },
  sheet: {
    maxHeight: "90%",
    paddingTop: config.paddingVertical,
    paddingHorizontal: config.paddingHorizontal,
    gap: config.gap,
    borderTopLeftRadius: config.borderRadius,
    borderTopRightRadius: config.borderRadius,
    backgroundColor: config.backgroundColor,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  closeButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: config.title,
  content: {
    gap: config.sectionGap,
    paddingBottom: config.gap,
  },
  section: {
    alignSelf: "stretch",
    gap: config.sectionLabelGap,
  },
  sectionTitle: config.sectionTitle,
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    gap: config.tagsGap,
    alignSelf: "stretch",
  },
  applyButton: {
    alignSelf: "stretch",
    width: "100%",
  },
})
