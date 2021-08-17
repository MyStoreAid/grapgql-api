import { MeasurementUnit } from '../types';
import MeasurementUnitModel from '../MeasurementUnitModel';

export default async function createMeasurementUnit (parent: any, args: MeasurementUnit, context: any): Promise<MeasurementUnit> {
    
    return await MeasurementUnitModel.createOne(context.prisma.measurement_units, args)
}