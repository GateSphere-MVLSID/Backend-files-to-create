export type RouteEntity = {
  id: string;
  routeId: string;
  vesselType: string;
  fuelType: string;
  year: number;
  ghgIntensity: number;
  fuelConsumptionTons: number;
  distanceKm: number;
  totalEmissionsTons: number;
  isBaseline?: boolean;
};
