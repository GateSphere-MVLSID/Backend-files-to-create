import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const routes = [
    {
      routeId: "R001",
      vesselType: "Container",
      fuelType: "HFO",
      year: 2024,
      ghgIntensity: 91.0,
      fuelConsumptionTons: 5000,
      distanceKm: 12000,
      totalEmissionsTons: 4500,
      isBaseline: true
    },
    {
      routeId: "R002",
      vesselType: "BulkCarrier",
      fuelType: "LNG",
      year: 2024,
      ghgIntensity: 88.0,
      fuelConsumptionTons: 4800,
      distanceKm: 11500,
      totalEmissionsTons: 4200
    },
    {
      routeId: "R003",
      vesselType: "Tanker",
      fuelType: "MGO",
      year: 2024,
      ghgIntensity: 93.5,
      fuelConsumptionTons: 5100,
      distanceKm: 12500,
      totalEmissionsTons: 4700
    },
    {
      routeId: "R004",
      vesselType: "RoRo",
      fuelType: "HFO",
      year: 2025,
      ghgIntensity: 89.2,
      fuelConsumptionTons: 4900,
      distanceKm: 11800,
      totalEmissionsTons: 4300
    },
    {
      routeId: "R005",
      vesselType: "Container",
      fuelType: "LNG",
      year: 2025,
      ghgIntensity: 90.5,
      fuelConsumptionTons: 4950,
      distanceKm: 11900,
      totalEmissionsTons: 4400
    }
  ];

  for (const r of routes) {
    await prisma.route.upsert({
      where: { routeId: r.routeId },
      update: r,
      create: r
    });
  }

  console.log("Seeded routes");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
