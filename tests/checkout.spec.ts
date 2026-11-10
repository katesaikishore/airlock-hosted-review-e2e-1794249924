import { test, expect } from '@playwright/test';
import { applyCoupon } from '../src/checkout';

test.describe('applyCoupon', () => {
  test('applies a valid percentage coupon to cents', () => {
    expect(applyCoupon(1000, { code: 'SAVE10', percentOff: 10 })).toBe(900);
  });

  test('returns the subtotal when coupon is undefined', () => {
    expect(applyCoupon(1000, undefined)).toBe(1000);
  });

  test('floors at zero when the discount exceeds the subtotal', () => {
    expect(applyCoupon(100, { code: 'FREE', percentOff: 100 })).toBe(0);
  });

  test('ignores malformed coupons', () => {
    expect(applyCoupon(1000, { code: '', percentOff: NaN } as any)).toBe(1000);
    expect(applyCoupon(1000, { code: 'BAD', percentOff: -10 } as any)).toBe(1000);
  });
});
