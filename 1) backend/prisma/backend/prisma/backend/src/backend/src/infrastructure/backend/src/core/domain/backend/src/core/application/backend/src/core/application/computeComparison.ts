import { TARGET_INTENSITY } from './computeCB';

export function percentDiff(comparison: number, baseline: number): number | null {
  if (baseline === 0) return null;
  return ((comparison / baseline) - 1) * 100;
}

export function isCompliant(value: number, target: number = TARGET_INTENSITY): boolean {
  return value <= target;
}
