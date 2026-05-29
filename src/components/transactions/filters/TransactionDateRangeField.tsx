import DateTimePicker from "@react-native-community/datetimepicker"
import { Pressable, StyleSheet, Text, View } from "react-native"

import CalendarIcon from "../../../../assets/transactions/calendar-line.svg"
import { Button } from "@/components/ui/Button"
import { useTransactionDateRangePicker } from "@/components/transactions/filters/useTransactionDateRangePicker"
import { colors, transactions } from "@/theme"
import { formatDateRangeFieldLabel } from "@/utils/formatDate"

type TransactionDateRangeFieldProps = {
  dateFrom: string | null
  dateTo: string | null
  onChange: (dateFrom: string | null, dateTo: string | null) => void
}

export function TransactionDateRangeField({
  dateFrom,
  dateTo,
  onChange,
}: TransactionDateRangeFieldProps) {
  const config = transactions.filter
  const { fromLabel, toLabel, hasRange } = formatDateRangeFieldLabel(
    dateFrom,
    dateTo,
  )

  const {
    step,
    stepLabel,
    pickerValue,
    openPicker,
    clearRange,
    cancelPicker,
    confirmIosFrom,
    confirmIosTo,
    handlePickerChange,
    showAndroidPicker,
    showIosPicker,
  } = useTransactionDateRangePicker({ dateFrom, dateTo, onChange })

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityLabel={
          hasRange
            ? `Date range from ${fromLabel} to ${toLabel}`
            : "Select date range"
        }
        accessibilityRole="button"
        style={styles.dateField}
        onPress={openPicker}
      >
        <CalendarIcon
          width={config.date.iconSize}
          height={config.date.iconSize}
          color={colors.text.strong}
        />

        <Text style={styles.dateText}>
          From{" "}
          <Text style={hasRange ? styles.dateValue : styles.datePlaceholder}>
            {fromLabel}
          </Text>{" "}
          to{" "}
          <Text style={hasRange ? styles.dateValue : styles.datePlaceholder}>
            {toLabel}
          </Text>
        </Text>
      </Pressable>

      {hasRange ? (
        <Pressable
          accessibilityRole="button"
          hitSlop={8}
          onPress={clearRange}
          style={styles.clearButton}
        >
          <Text style={styles.clearText}>Clear dates</Text>
        </Pressable>
      ) : null}

      {showIosPicker ? (
        <View style={styles.iosPickerCard}>
          <Text style={styles.stepLabel}>{stepLabel}</Text>

          <DateTimePicker
            value={pickerValue}
            mode="date"
            display="spinner"
            themeVariant="dark"
            onChange={handlePickerChange}
          />

          <View style={styles.iosActions}>
            <Button
              title="Cancel"
              variant="secondary"
              size="sm"
              onPress={cancelPicker}
            />
            <Button
              title={step === "from" ? "Next" : "Done"}
              variant="primary"
              size="sm"
              onPress={step === "from" ? confirmIosFrom : confirmIosTo}
            />
          </View>
        </View>
      ) : null}

      {showAndroidPicker ? (
        <DateTimePicker
          key={step ?? "picker"}
          value={pickerValue}
          mode="date"
          display="default"
          onChange={handlePickerChange}
        />
      ) : null}
    </View>
  )
}

const config = transactions.filter

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    gap: 8,
  },
  dateField: {
    flexDirection: "row",
    alignItems: "center",
    gap: config.date.gap,
    padding: config.date.padding,
    borderRadius: config.date.borderRadius,
    borderWidth: 1,
    borderColor: config.date.borderColor,
    backgroundColor: config.date.backgroundColor,
    alignSelf: "stretch",
    ...config.date.shadow,
  },
  dateText: config.date.text,
  datePlaceholder: config.date.placeholder,
  dateValue: config.date.text,
  clearButton: {
    alignSelf: "flex-start",
  },
  clearText: {
    fontFamily: config.sectionTitle.fontFamily,
    fontSize: 12,
    lineHeight: 16,
    color: colors.lemon[500],
  },
  iosPickerCard: {
    alignSelf: "stretch",
    borderRadius: config.date.borderRadius,
    borderWidth: 1,
    borderColor: config.date.borderColor,
    backgroundColor: config.backgroundColor,
    padding: 12,
    gap: 8,
  },
  stepLabel: {
    ...config.sectionTitle,
    textAlign: "center",
  },
  iosActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
  },
})
