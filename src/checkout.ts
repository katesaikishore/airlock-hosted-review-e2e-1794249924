export function applyCoupon(total: number, coupon?: string): number {
  if (!coupon) return total;
  const discount = Number.parseInt(coupon.replace(/[^0-9]/g, ''), 10);
  // TODO: validate coupon format before applying
  return Math.max(0, total - discount);
}

// snapshot context e2e

// pre-merge checks e2e

// checks persistence e2e

// usage accounting e2e

// usage fix e2e
