import { useCallback, useState } from 'react';
import { Platform } from 'react-native';
import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import {
  normalizeDateRange,
  parseFilterDateString,
  toFilterDateString,
} from '@/utils/formatDate';

export type DateRangePickerStep = 'from' | 'to' | null;

type UseTransactionDateRangePickerOptions = {
  dateFrom: string | null;
  dateTo: string | null;
  onChange: (dateFrom: string | null, dateTo: string | null) => void;
};

export function useTransactionDateRangePicker({
  dateFrom,
  dateTo,
  onChange,
}: UseTransactionDateRangePickerOptions) {
  const [step, setStep] = useState<DateRangePickerStep>(null);
  const [pickerValue, setPickerValue] = useState(() => new Date());
  const [pendingFrom, setPendingFrom] = useState<string | null>(null);

  const openPicker = useCallback(() => {
    const initialDate = dateFrom ? parseFilterDateString(dateFrom) : new Date();
    setPickerValue(initialDate);
    setPendingFrom(null);
    setStep('from');
  }, [dateFrom]);

  const clearRange = useCallback(() => {
    setStep(null);
    setPendingFrom(null);
    onChange(null, null);
  }, [onChange]);

  const cancelPicker = useCallback(() => {
    setStep(null);
    setPendingFrom(null);
  }, []);

  const confirmIosFrom = useCallback(() => {
    setPendingFrom(toFilterDateString(pickerValue));
    setPickerValue(dateTo ? parseFilterDateString(dateTo) : pickerValue);
    setStep('to');
  }, [dateTo, pickerValue]);

  const confirmIosTo = useCallback(() => {
    const fromValue = pendingFrom ?? dateFrom;

    if (!fromValue) {
      setStep(null);
      return;
    }

    const normalized = normalizeDateRange(
      fromValue,
      toFilterDateString(pickerValue),
    );

    onChange(normalized.from, normalized.to);
    setPendingFrom(null);
    setStep(null);
  }, [dateFrom, onChange, pendingFrom, pickerValue]);

  const handlePickerChange = useCallback(
    (event: DateTimePickerEvent, selectedDate?: Date) => {
      if (Platform.OS === 'android') {
        if (event.type === 'dismissed') {
          setStep(null);
          setPendingFrom(null);
          return;
        }

        const nextDate = selectedDate ?? pickerValue;
        const nextValue = toFilterDateString(nextDate);

        if (step === 'from') {
          setPendingFrom(nextValue);
          setPickerValue(nextDate);
          setStep('to');
          return;
        }

        if (step === 'to') {
          const fromValue = pendingFrom ?? dateFrom;

          if (!fromValue) {
            setStep(null);
            return;
          }

          const normalized = normalizeDateRange(fromValue, nextValue);
          onChange(normalized.from, normalized.to);
          setPendingFrom(null);
          setStep(null);
        }

        return;
      }

      if (selectedDate) {
        setPickerValue(selectedDate);
      }
    },
    [dateFrom, onChange, pendingFrom, pickerValue, step],
  );

  const stepLabel =
    step === 'from' ? 'Select start date' : step === 'to' ? 'Select end date' : null;

  return {
    step,
    stepLabel,
    pickerValue,
    openPicker,
    clearRange,
    cancelPicker,
    confirmIosFrom,
    confirmIosTo,
    handlePickerChange,
    showAndroidPicker: Platform.OS === 'android' && step !== null,
    showIosPicker: Platform.OS === 'ios' && step !== null,
  };
}
