import { MeasurementUnit } from '../../types';
import MeasurementUnitModel from '../../MeasurementUnitModel';

export default async function createMeasurementUnit (parent: any, args: MeasurementUnit): Promise<MeasurementUnit> {
    
    return await MeasurementUnitModel.createOne(args)
}