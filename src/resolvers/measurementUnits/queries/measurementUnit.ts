import { MeasurementUnitIdArgs, MeasurementUnit } from "../types";

export default async function measurementUnit (parent: any, args: MeasurementUnitIdArgs, context: any): Promise<MeasurementUnit> {

    let result!: MeasurementUnit;
    const measurementUnitId: String = args.id;

    try {
        result = await context.prisma.measurement_units.findUnique({
            where: {
                id: measurementUnitId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting MeasurementUnit with ID ${measurementUnitId}.`);
    }

    if (!result) {
        new Error(`There is no MeasurementUnit with ID ${measurementUnitId}.`);
    }

    return result;

}