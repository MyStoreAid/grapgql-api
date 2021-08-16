import { MeasurementUnit } from "../types";

export default async function measurementUnits (parent: any, args: MeasurementUnit, context: any): Promise<MeasurementUnit> {
    return context.prisma.measurement_units.findMany();
}