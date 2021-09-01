import { MeasurementUnit } from '../../types';
import MeasurementUnitModel from '../../MeasurementUnitModel';

export default async function updateMeasurementUnit (parent: any, args: MeasurementUnit, context: any, info:any): Promise<MeasurementUnit> | never{
    
    let existingMeasurementUnit!: MeasurementUnit;
    const measurementUnitId: string = args.id;
    

    try {
        existingMeasurementUnit = await MeasurementUnitModel.findOne(context.prisma.measurement_units, measurementUnitId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching MeasurementUnit with ID ${measurementUnitId}`);
    }

    if(!existingMeasurementUnit) {
        throw new Error(`There is no MeasurementUnit with ID ${measurementUnitId}`);
    }

    return await MeasurementUnitModel.updateOne(context.prisma.measurement_units, measurementUnitId, args);
}