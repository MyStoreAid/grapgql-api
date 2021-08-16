import { MeasurementUnit } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from "../../../helpers/UuidHelper";

export default async function createMeasurementUnit (parent: any, args: MeasurementUnit, context: any): Promise<MeasurementUnit> {
    const currentTime = TimeHelper.currentTime;

    return await context.prisma.measurement_units.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            symbol: args.symbol,
            created_at: currentTime,
            updated_at: currentTime,
            server_created_at: currentTime,
            last_modified: currentTime,
        }
    });
}