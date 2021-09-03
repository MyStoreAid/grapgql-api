import { MeasurementUnit } from "../../types";
import MeasurementUnitModel from "../../MeasurementUnitModel";

export default async function measurementUnits (parent: any, args: MeasurementUnit): Promise<MeasurementUnit[]> {
    return MeasurementUnitModel.findMany();
}