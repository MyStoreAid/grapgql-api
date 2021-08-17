import { MeasurementUnit } from "../types";
import MeasurementUnitModel from "../MeasurementUnitModel";

export default async function measurementUnits (parent: any, args: MeasurementUnit, context: any): Promise<MeasurementUnit[]> {
    return MeasurementUnitModel.findMany(context.prisma.measurement_units);
}