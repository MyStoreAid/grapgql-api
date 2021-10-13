import { MeasurementUnit } from '../../types';
import { MeasurementUnit as MeasurementUnitModel } from '@mystoreaid/prisma-models';

export default async function createMeasurementUnit (parent: any, args: MeasurementUnit): Promise<MeasurementUnit> {
    
    return await MeasurementUnitModel.createOne(args)
}