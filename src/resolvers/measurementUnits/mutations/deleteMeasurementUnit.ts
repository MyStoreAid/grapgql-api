import { MeasurementUnitIdArgs, MeasurementUnit } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function deleteMeasurementUnit (parent:any, args:MeasurementUnitIdArgs, context:any, info:any): Promise<MeasurementUnit> | never {

    let existingMeasurementUnit!: MeasurementUnit;
    const measurementUnitId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingMeasurementUnit = await context.prisma.measurement_units.findUnique({ where: {id: measurementUnitId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a MeasurementUnit with ID ${measurementUnitId}`);
    }

    if(!existingMeasurementUnit) {
        throw new Error(`There is no MeasurementUnit with ID ${measurementUnitId}`);
    }

    return await context.prisma.measurement_units.update({
        where: {
            id: measurementUnitId
        },
        data: {
            deleted : true,
            updated_at: currentTime,
            last_modified: currentTime,
            

        }
    })
}