/** Filter date string format: YYYY-MM-DD (local calendar date). */
export type FilterDateString = `${number}-${string}-${string}`;

export function toFilterDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function parseFilterDateString(value: string): Date {
  const [year, month, day] = value.split('-').map(Number);

  return new Date(year, month - 1, day);
}

export function startOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);

  return result;
}

export function endOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);

  return result;
}

export function normalizeDateRange(
  from: string,
  to: string,
): { from: string; to: string } {
  const fromDate = parseFilterDateString(from);
  const toDate = parseFilterDateString(to);

  if (fromDate.getTime() <= toDate.getTime()) {
    return { from, to };
  }

  return {
    from: to,
    to: from,
  };
}

export function isDateInFilterRange(
  occurredAt: string,
  dateFrom: string | null,
  dateTo: string | null,
): boolean {
  if (!dateFrom && !dateTo) {
    return true;
  }

  const occurredDay = toFilterDateString(new Date(occurredAt));

  if (dateFrom && occurredDay < dateFrom) {
    return false;
  }

  if (dateTo && occurredDay > dateTo) {
    return false;
  }

  return true;
}

export function formatFilterDateLabel(value: string): string {
  return value;
}

export function formatDateRangeFieldLabel(
  dateFrom: string | null,
  dateTo: string | null,
): { fromLabel: string; toLabel: string; hasRange: boolean } {
  const hasRange = Boolean(dateFrom && dateTo);

  return {
    fromLabel: dateFrom ?? 'YYYY-MM-DD',
    toLabel: dateTo ?? 'YYYY-MM-DD',
    hasRange,
  };
}

export function resolveTransactionOccurredAt(transaction: {
  occurredAt?: string;
  date: string;
}): string | null {
  if (transaction.occurredAt) {
    return transaction.occurredAt;
  }

  return null;
}
