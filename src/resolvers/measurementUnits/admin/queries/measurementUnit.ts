import { MeasurementUnitIdArgs, MeasurementUnit } from "../../types";
import MeasurementUnitModel from "../../MeasurementUnitModel";

export default async function measurementUnit (parent: any, args: MeasurementUnitIdArgs): Promise<MeasurementUnit> {

    let result!: MeasurementUnit;
    const measurementUnitId: string = args.id;

    try {
        result = await MeasurementUnitModel.findOne(measurementUnitId);
    } catch (error: unknown) {
        new Error(`There was an error getting MeasurementUnit with ID ${measurementUnitId}.`);
    }

    if (!result) {
        new Error(`There is no MeasurementUnit with ID ${measurementUnitId}.`);
    }

    return result;

}