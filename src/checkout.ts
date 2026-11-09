export function applyCoupon(total: number, coupon?: string): number {
  if (!coupon) return total;
  const discount = Number(coupon.replace(/[^0-9]/g, ''));
  return Math.max(0, total - discount);
}
