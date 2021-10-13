import { MeasurementUnit } from "../../types";
import { MeasurementUnit as MeasurementUnitModel } from '@mystoreaid/prisma-models';

export default async function measurementUnits (parent: any, args: MeasurementUnit): Promise<MeasurementUnit[]> {
    return MeasurementUnitModel.findMany();
}