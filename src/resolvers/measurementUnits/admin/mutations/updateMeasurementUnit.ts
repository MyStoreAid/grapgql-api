import { MeasurementUnit } from '../../types';
import { MeasurementUnit as MeasurementUnitModel } from '@mystoreaid/prisma-models';

export default async function updateMeasurementUnit (parent: any, args: MeasurementUnit): Promise<MeasurementUnit> | never{
    
    let existingMeasurementUnit!: MeasurementUnit;
    const measurementUnitId: string = args.id;
    

    try {
        existingMeasurementUnit = await MeasurementUnitModel.findOne(measurementUnitId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching MeasurementUnit with ID ${measurementUnitId}`);
    }

    if(!existingMeasurementUnit) {
        throw new Error(`There is no MeasurementUnit with ID ${measurementUnitId}`);
    }

    return await MeasurementUnitModel.updateOne(measurementUnitId, args);
}