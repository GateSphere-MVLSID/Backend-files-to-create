export const ENERGY_MJ_PER_TON = 41000;
export const TARGET_INTENSITY = 89.3368; // gCO2e/MJ

export function computeComplianceBalance(target: number, actual: number, fuelTons: number) {
  const energy = fuelTons * ENERGY_MJ_PER_TON;
  // CB in grams CO2e
  return (target - actual) * energy;
}

export function computeCBTonnes(target: number, actual: number, fuelTons: number) {
  const g = computeComplianceBalance(target, actual, fuelTons);
  return g / 1e6; // convert g -> tonnes
}
