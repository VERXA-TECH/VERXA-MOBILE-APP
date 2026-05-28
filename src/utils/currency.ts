export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatNairaCompact(amount: number): string {
  return `₦${amount.toLocaleString('en-NG', {
    maximumFractionDigits: 0,
  })}`;
}

export function formatUsdCompact(amount: number): string {
  return `$${amount.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  })}`;
}

export function formatUsdtCompact(amount: number): string {
  return `${amount.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  })} USDT`;
}
